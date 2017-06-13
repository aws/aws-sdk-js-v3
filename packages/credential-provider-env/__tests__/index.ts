import {CredentialError} from "@aws/credential-provider-base";
import {
    ENV_KEY,
    ENV_SECRET,
    ENV_SESSION,
    fromEnv,
} from "../";

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
            secretAccessKey: 'bar',
            sessionToken: 'baz',
        });
    });

    it('can create credentials without a session token', async () => {
        process.env[ENV_KEY] = 'foo';
        process.env[ENV_SECRET] = 'bar';

        expect(await fromEnv()()).toEqual({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
            sessionToken: void 0,
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
