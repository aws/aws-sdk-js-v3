import {addPresignedUrl} from './index';
import {
    context, 
    MockSha256, 
    region, 
    credentials, 
    endpoint, 
    toBase64, 
    fromUtf8, 
    nextHandler
} from './fixture'

describe('copySnapshotPresignedUrl', () => {
    const handler = addPresignedUrl(
        region,
        credentials,
        endpoint,
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
        );
        expect(presignedUrl).toMatch(/Action\=CopySnapshot/);
        expect(presignedUrl).toMatch(/Version\=2016\-11\-15/);
        expect(presignedUrl).toMatch(
            /DestinationRegion\=mock\-region\&SourceRegion\=src\-region\&SourceSnapshotId\=snap\-123456789/
        );
        expect(presignedUrl).toMatch(
            /X\-Amz\-Security\-Token\=session/
        );
        expect(presignedUrl).toMatch(
            /X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/
        );
        expect(presignedUrl).toMatch(
            /X\-Amz\-SignedHeaders\=host/
        );
        expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
        expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
        expect(presignedUrl).toMatch(/X-Amz-Expires=([\d]+)/);
        expect(presignedUrl).toMatch(/X-Amz-Signature=000000/);
    })
})
