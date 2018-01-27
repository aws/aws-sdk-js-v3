import {addPresignedUrl} from './index';
import { 
    Handler, 
    SourceData, 
} from '@aws/types';
import {context} from './fixture'
import {QuerySerializer} from "@aws/protocol-query"
import {QueryBuilder} from "@aws/query-builder"

describe('copySnapshotPresignedUrl', () => {
    const region = () => Promise.resolve('mock-region');
    const endpoint = {
        protocol: 'https:',
        path: '/',
        hostname: 'ec2.mock-region.amazonaws.com'
    }
    const credentials = () => Promise.resolve({
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session'
    });
    class MockSha256 {
        constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}
        update (data?: SourceData) {}
        digest () {return Promise.resolve(new Uint8Array(5))}
    }
    const toBase64 = jest.fn();
    const fromUtf8 = jest.fn();
    const nextHandler = jest.fn(() => Promise.resolve());
    const handler: Handler<any, any> = addPresignedUrl(
        region,
        credentials,
        () => Promise.resolve(endpoint),
        toBase64,
        fromUtf8,
        MockSha256,
        'ec2'
    )(nextHandler, context)

    it('generates PresignedUrl and DestinationRegion parameters', async () => {
        const params = {
            SourceRegion: 'src-region',
            SourceSnapshotId: 'snap-123456789'
        };
        await handler({input: params});
        expect(nextHandler.mock.calls.length).toBe(1);
        const middlewareOutput = nextHandler.mock.calls[0][0];
        expect(middlewareOutput.input.SourceRegion).toEqual(params.SourceRegion);
        expect(middlewareOutput.input.SourceSnapshotId).toEqual(params.SourceSnapshotId);
        expect(middlewareOutput.input.DestinationRegion).toEqual(await region());
        const presignedUrl = middlewareOutput.input.PresignedUrl;
        expect(presignedUrl).toMatch(
            /https\:\/\/ec2\.src\-region\.amazonaws\.com\/\?/
        )
        expect(presignedUrl).toMatch(/Action\=CopySnapshot/);
        expect(presignedUrl).toMatch(/Version\=2016\-11\-15/);
        expect(presignedUrl).toMatch(
            /DestinationRegion\=mock\-region\&SourceRegion\=src\-region\&SourceSnapshotId\=snap\-123456789/
        )
        expect(presignedUrl).toMatch(
            /X\-Amz\-Security\-Token\=session/
        )
        expect(presignedUrl).toMatch(
            /X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/
        )
        expect(presignedUrl).toMatch(
            /X\-Amz\-SignedHeaders\=host/
        )
        const now = new Date();
        const dateString = now.toISOString().split('T')[0].split('-').join('');
        expect(presignedUrl).toMatch(
            new RegExp(`X\\-Amz\\-Credential\\=akid\\%2F${dateString}\\%2Fsrc\\-region\\%2Fec2\\%2Faws4\\_request`)
        );
        let timeString = now.toISOString().split(/[\-\:\.]{1}/g).join('');
        timeString = timeString.substring(0, timeString.length-4) + 'Z'
        expect(presignedUrl).toMatch(
            new RegExp(`X\\-Amz\\-Date\\=${timeString}`)
        );
        const expiresMatches = (presignedUrl as string).match(/X-Amz-Expires=([\d]+)/)
        expect(expiresMatches).toBeTruthy()
        const expires = Number((expiresMatches as Array<string>)[1])
        const delta = Math.abs(expires - 60 * 60);
        expect(delta).toBeLessThan(2);
    })
})
