import {
    BucketEndpointAwareInput,
    bucketEndpointMiddleware,
} from './bucketEndpointMiddleware';
import { HttpRequest } from '@aws-sdk/types';

describe('bucketEndpointMiddleware', () => {
    const input: BucketEndpointAwareInput = { Bucket: 'bucket' };
    const request: HttpRequest<never> = {
        method: 'GET',
        headers: {},
        protocol: 'https:',
        hostname: 's3.us-west-2.amazonaws.com',
        path: '/bucket',
    };
    const next = jest.fn(() => Promise.resolve({}));

    beforeEach(() => {
        next.mockClear();
    });

    it(
        'should convert the request provided into one directed to a virtual hosted-style endpoint',
        async () => {
            const handler = bucketEndpointMiddleware()(next, {} as any);
            await handler({ input, request });

            const {
                input: forwardedInput,
                request: {hostname, path},
            } = next.mock.calls[0][0];

            expect(forwardedInput).toBe(input);
            expect(hostname).toBe('bucket.s3.us-west-2.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should not convert the request provided into one directed to a virtual hosted-style endpoint if so configured',
        async () => {
            const handler = bucketEndpointMiddleware({
                forcePathStyle: true
            })(next, {} as any);
            await handler({ input, request });

            const {
                input: forwardedInput,
                request: {hostname, path},
            } = next.mock.calls[0][0];

            expect(forwardedInput).toBe(input);
            expect(hostname).toBe('s3.us-west-2.amazonaws.com');
            expect(path).toBe('/bucket');
        }
    );

    it(
        'should not convert the request provided into one directed to a virtual hosted-style endpoint if so directed on the input',
        async () => {
            const handler = bucketEndpointMiddleware()(next, {} as any);
            await handler({ input: {...input, $forcePathStyle: true}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('s3.us-west-2.amazonaws.com');
            expect(path).toBe('/bucket');
        }
    );

    it(
        'should convert the request provided into one directed to a virtual hosted-style endpoint if path-style is disabled on the input',
        async () => {
            const handler = bucketEndpointMiddleware({
                forcePathStyle: true
            })(next, {} as any);
            await handler({ input: {...input, $forcePathStyle: false}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3.us-west-2.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should not convert the request provided into one without the bucket in the path if so configured',
        async () => {
            const handler = bucketEndpointMiddleware({
                preformedBucketEndpoint: true
            })(next, {} as any);
            await handler({
                input,
                request: {...request, hostname: 'example.com'},
            });

            const {
                input: forwardedInput,
                request: {hostname, path},
            } = next.mock.calls[0][0];

            expect(forwardedInput).toBe(input);
            expect(hostname).toBe('example.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should use the bucket name as a virtual hosted-style endpoint if so configured on the input',
        async () => {
            const handler = bucketEndpointMiddleware()(next, {} as any);
            await handler({
                input: {Bucket: 'files.domain.com', $bucketEndpoint: true},
                request: {...request, path: '/files.domain.com/path/to/key.ext'}
             });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('files.domain.com');
            expect(path).toBe('/path/to/key.ext');
        }
    );

    it(
        'should use a transfer acceleration endpoint if so configured',
        async () => {
            const handler = bucketEndpointMiddleware({
                useAccelerateEndpoint: true
            })(next, {} as any);
            await handler({ input, request });

            const {
                input: forwardedInput,
                request: {hostname, path},
            } = next.mock.calls[0][0];

            expect(forwardedInput).toBe(input);
            expect(hostname).toBe('bucket.s3-accelerate.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should use a transfer acceleration endpoint if so directed on the input',
        async () => {
            const handler = bucketEndpointMiddleware()(next, {} as any);
            await handler({ input: {...input, $useAccelerateEndpoint: true}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3-accelerate.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should not use a transfer acceleration endpoint if disabled on the input',
        async () => {
            const handler = bucketEndpointMiddleware({
                useAccelerateEndpoint: true,
            })(next, {} as any);
            await handler({ input: {...input, $useAccelerateEndpoint: false}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3.us-west-2.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it('should use a dualstack endpoint if so configured', async () => {
        const handler = bucketEndpointMiddleware({
            useDualstackEndpoint: true,
        })(next, {} as any);
        await handler({ input, request });

        const {
            input: forwardedInput,
            request: {hostname, path},
        } = next.mock.calls[0][0];

        expect(forwardedInput).toBe(input);
        expect(hostname).toBe('bucket.s3.dualstack.us-west-2.amazonaws.com');
        expect(path).toBe('/');
    });

    it(
        'should use a dualstack endpoint if so directed on the input',
        async () => {
            const handler = bucketEndpointMiddleware()(next, {} as any);
            await handler({ input: {...input, $useDualstackEndpoint: true}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3.dualstack.us-west-2.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should not use a dualstack endpoint if disabled on the input',
        async () => {
            const handler = bucketEndpointMiddleware({
                useDualstackEndpoint: true,
            })(next, {} as any);
            await handler({ input: {...input, $useDualstackEndpoint: false}, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3.us-west-2.amazonaws.com');
            expect(path).toBe('/');
        }
    );

    it(
        'should use an accelerate dualstack endpoint if so directed on the input',
        async () => {
            const handler = bucketEndpointMiddleware({
                useAccelerateEndpoint: true,
                useDualstackEndpoint: true
            })(next, {} as any);
            await handler({ input, request });

            const { request: {hostname, path} } = next.mock.calls[0][0];

            expect(hostname).toBe('bucket.s3-accelerate.dualstack.amazonaws.com');
            expect(path).toBe('/');
        }
    );
});
