import {
    SourceData,
    Handler,
    HttpRequest,
    QueryParameterBag
} from '@aws/types';
import { presignRequestQuery } from './';

describe('presignRequestQuery', () => {
    const endpoint = {
        protocol: 'https:',
        path: '/',
        hostname: 'ec2.mock-region.amazonaws.com'
    }
    const request: HttpRequest = {
        ...endpoint,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: 'Action=CopySnapshot&Version=2016-11-15&DestinationRegion=mock-region&SourceRegion=src-region&SourceSnapshotId=snap-123456789'
    };
    const sourceRegion = 'src-region';
    const updatedEndpoint = {
        ...endpoint,
        hostname: `ec2.${sourceRegion}.amazonaws.com`,
        path: '/mock/path',
        port: 80,
    }
    const credentials = () => Promise.resolve({
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session'
    });
    const region = () => Promise.resolve('mock-region');
    class MockSha256 {
        constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}
        update (data?: SourceData) {}
        digest () {return Promise.resolve(new Uint8Array(5))}
    };

    it('should update endpoint in signed request', async () => {
        const presignedUrl = await presignRequestQuery(request, {
            credentials: await credentials(),
            sha256: MockSha256,
            signingName: 'ec2',
            signingRegion: sourceRegion,
            endpoint: updatedEndpoint,
            expireTime: 2 * 60 * 60
        })
        expect(presignedUrl.hostname).toEqual(
            'ec2.src-region.amazonaws.com'
        );
        expect(presignedUrl.path).toEqual('/mock/path');
        expect(presignedUrl.port).toBe(80);
    })

    it('should update method to get', async () => {
        const presignedUrl = await presignRequestQuery(request, {
            credentials: await credentials(),
            sha256: MockSha256,
            signingName: 'ec2',
            signingRegion: sourceRegion,
        })
        expect(presignedUrl.method.toLowerCase()).toEqual('get');
    })

    it('should move query string in body to request query', async () => {
        const presignedUrl = await presignRequestQuery(request, {
            credentials: await credentials(),
            sha256: MockSha256,
            signingName: 'ec2',
            signingRegion: sourceRegion,
        })
        expect(request.query).toEqual(undefined);
        expect(presignedUrl.body).toEqual(undefined);
        expect(presignedUrl.query).not.toEqual(undefined);

        const query = presignedUrl.query as QueryParameterBag;
        expect(query).toMatchObject({
            Action: 'CopySnapshot',
            Version: '2016-11-15',
            DestinationRegion: 'mock-region',
            SourceRegion: 'src-region',
            SourceSnapshotId: 'snap-123456789',
        })
    })

    it('should sign the request with sigV4', async () => {
        let {query} = await presignRequestQuery(request, {
            credentials: await credentials(),
            sha256: MockSha256,
            signingName: 'ec2',
            signingRegion: sourceRegion,
            endpoint: updatedEndpoint,
            expireTime: 2 * 60 * 60
        })
        query = <QueryParameterBag>query;
        expect(Object.keys(query).length).toBe(12);
        expect(query).toMatchObject({
            'X-Amz-Security-Token': 'session',
            'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
            'X-Amz-SignedHeaders': 'host',
        })

        expect(query['X-Amz-Signature']).toBe('0000000000');

        const now = new Date();
        const dateString = now.toISOString().split('T')[0].split('-').join('');
        expect(query['X-Amz-Credential']).toMatch(new RegExp(`akid/${dateString}/src-region/ec2/aws4_request`));

        let timeString = now.toISOString().split(/[\-\:\.]{1}/g).join('');
        timeString = timeString.substring(0, timeString.length-4) + 'Z';
        expect(query['X-Amz-Date']).toEqual(timeString);

        expect(query['X-Amz-Expires']).toBeDefined();
        const expires = Number(query['X-Amz-Expires'])
        const delta = Math.abs(expires - 2 * 60 * 60);
        expect(delta).toBeLessThan(2);
    })
})
