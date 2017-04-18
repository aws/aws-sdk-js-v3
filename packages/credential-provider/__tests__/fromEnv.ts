import {
    ENV_KEY,
    ENV_SECRET,
    ENV_SESSION,
    fromEnv,
} from "../lib/fromEnv";

const akid = process.env[ENV_KEY];
const secret = process.env[ENV_SECRET];
const token = process.env[ENV_SESSION];

beforeEach(() => {
    delete process.env[ENV_KEY];
    delete process.env[ENV_SECRET];
    delete process.env[ENV_SESSION];
});

afterAll(() => {
    process.env[ENV_KEY] = akid;
    process.env[ENV_SECRET] = secret;
    process.env[ENV_SESSION] = token;
});

describe('fromEnv', () => {
    it('should read credentials from known environment variables', async () => {
        process.env[ENV_KEY] = 'foo';
        process.env[ENV_SECRET] = 'bar';
        process.env[ENV_SESSION] = 'baz';

        expect(await fromEnv()()).toEqual({
            accessKeyId: 'foo',
            secretKey: 'bar',
            sessionToken: 'baz',
        });
    });

    it('can create credentials without a session token', async () => {
        process.env[ENV_KEY] = 'foo';
        process.env[ENV_SECRET] = 'bar';

        expect(await fromEnv()()).toEqual({
            accessKeyId: 'foo',
            secretKey: 'bar',
            sessionToken: void 0,
        });
    });

    it(
        'should reject the promise if no environmental credentials can be found',
        async () => {
            try {
                await fromEnv()();
                fail('The promise should have been rejected.');
            } catch (e) {}
        }
    );
});
