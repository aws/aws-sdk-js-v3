import {CredentialError} from "@aws/credential-provider-base";
import {
    ENV_KEY,
    ENV_SECRET,
    ENV_SESSION,
    ENV_EXPIRATION,
    fromEnv,
} from "./";

const akid = process.env[ENV_KEY];
const secret = process.env[ENV_SECRET];
const token = process.env[ENV_SESSION];
const expiry = process.env[ENV_EXPIRATION];

beforeEach(() => {
    delete process.env[ENV_KEY];
    delete process.env[ENV_SECRET];
    delete process.env[ENV_SESSION];
    delete process.env[ENV_EXPIRATION];
});

afterAll(() => {
    process.env[ENV_KEY] = akid;
    process.env[ENV_SECRET] = secret;
    process.env[ENV_SESSION] = token;
    process.env[ENV_EXPIRATION] = expiry;
});

describe('fromEnv', () => {
    it('should read credentials from known environment variables', async () => {
        process.env[ENV_KEY] = 'foo';
        process.env[ENV_SECRET] = 'bar';
        process.env[ENV_SESSION] = 'baz';
        process.env[ENV_EXPIRATION] = '1970-01-01T07:00:00Z';

        expect(await fromEnv()()).toEqual({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
            sessionToken: 'baz',
            expiration: 25200,
        });
    });

    it('can create credentials without a session token or expiration', async () => {
        process.env[ENV_KEY] = 'foo';
        process.env[ENV_SECRET] = 'bar';

        expect(await fromEnv()()).toEqual({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
        });
    });

    it(
        'should reject the promise if no environmental credentials can be found',
        async () => {
            await fromEnv()().then(
                () => { throw new Error('The promise should have been rejected.'); },
                () => { /* Promise rejected as expected */ }
            );
        }
    );

    it('should flag a lack of credentials as a non-terminal error', async () => {
        await fromEnv()().then(
            () => { throw new Error('The promise should have been rejected.'); },
            err => {
                expect((err as CredentialError).tryNextLink).toBe(true);
            }
        );
    });
});
