import {Handler} from '@aws/types';
import {buildCrossRegionPresignedUrl} from './';
import {
    context,
    MockSha256, 
    region, 
    credentials, 
    endpoint, 
    toBase64, 
    fromUtf8, 
} from './fixture';

const nextHandler = jest.fn(() => Promise.resolve());
const arn = 'arn:aws:rds:src-region:000000000000:src-snapshot:dist-snapshot';
const arnSameRegion = 'arn:aws:rds:mock-region:000000000000:src-snapshot:dist-snapshot';
const sourceIdentifier = 'src-snapshot';

const handler = buildCrossRegionPresignedUrl(
    'SourceDBClusterSnapshotIdentifier',
    region,
    credentials,
    endpoint,
    toBase64,
    fromUtf8,
    MockSha256,
)(nextHandler, context)

const params = {
    SourceDBClusterSnapshotIdentifier: arn,
    TargetDBClusterSnapshotIdentifier: 'target-id',
    KmsKeyId: '000-111',
}

describe('middleware-rds-presignedurl', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should build cross origin presigned url correctly', async () => {
        await handler({input: params});
        expect(nextHandler.mock.calls.length).toBe(1);
        const middlewareOutput = nextHandler.mock.calls[0][0];
        expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
        const presignedUrl = middlewareOutput.input.PreSignedUrl
        expect(presignedUrl).toMatch(
            /https\:\/\/rds\.src\-region\.amazonaws\.com\/\?/
        );
        expect(presignedUrl).toMatch(/Action\=CopyDBClusterSnapshot/);
        expect(presignedUrl).toMatch(/Version\=2014\-10\-31/);
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

    it('should not generate PreSignedUrl if source identifier is not ARN', async () => {
        const params = {
            SourceDBClusterSnapshotIdentifier: sourceIdentifier,
            TargetDBClusterSnapshotIdentifier: 'target-id',
            KmsKeyId: '000-111',
        };
        await handler({input: params});
        expect(nextHandler.mock.calls.length).toBe(1);
        const middlewareOutput = nextHandler.mock.calls[0][0];
        expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
        expect(middlewareOutput.input.PreSignedUrl).not.toBeDefined();
    })

    it('should not generate PreSignedUrl if source identifier is from the same region', async () => {
        const params = {
            SourceDBClusterSnapshotIdentifier: arnSameRegion,
            TargetDBClusterSnapshotIdentifier: 'target-id',
            KmsKeyId: '000-111',
        };
        await handler({input: params});
        expect(nextHandler.mock.calls.length).toBe(1);
        const middlewareOutput = nextHandler.mock.calls[0][0];
        expect(middlewareOutput.input.SourceDBClusterSnapshotIdentifier).toEqual(params.SourceDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.TargetDBClusterSnapshotIdentifier).toEqual(params.TargetDBClusterSnapshotIdentifier);
        expect(middlewareOutput.input.KmsKeyId).toEqual(params.KmsKeyId);
        expect(middlewareOutput.input.PreSignedUrl).not.toBeDefined();
    })

    it('should leave input shape unchanged', async () => {
        await handler({input: params});
        expect(params).toEqual({
            SourceDBClusterSnapshotIdentifier: arn,
            TargetDBClusterSnapshotIdentifier: 'target-id',
            KmsKeyId: '000-111',
        })
    })
})





