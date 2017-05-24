import {
    ENV_CMDS_RELATIVE_URI,
    fromContainerMetadata
} from "../lib/fromContainerMetadata";
import {httpGet} from "../lib/remoteProvider/httpGet";
import {
    fromImdsCredentials,
    ImdsCredentials
} from "../lib/remoteProvider/ImdsCredentials";
import MockInstance = jest.MockInstance;
import {RequestOptions} from "http";

interface HttpGet {
    (options: RequestOptions): Promise<Buffer>;
}

const mockHttpGet = <MockInstance<HttpGet>><any>httpGet;
jest.mock('../lib/remoteProvider/httpGet', () => ({httpGet: jest.fn()}));

const relativeUri = process.env[ENV_CMDS_RELATIVE_URI];

beforeEach(() => {
    mockHttpGet.mockReset();
    process.env[ENV_CMDS_RELATIVE_URI] = '/relative/uri';
});

afterAll(() => {
    process.env[ENV_CMDS_RELATIVE_URI] = relativeUri;
});

describe('fromContainerMetadata', () => {
    const creds: ImdsCredentials = Object.freeze({
        AccessKeyId: 'foo',
        SecretAccessKey: 'bar',
        Token: 'baz',
        Expiration: new Date().toISOString(),
    });

    it(
        'should reject the promise if the container credentials environment variable is not set',
        async () => {
            delete process.env[ENV_CMDS_RELATIVE_URI];
            await fromContainerMetadata()().then(
                () => { throw new Error('The promise should have been rejected'); },
                err => {
                    expect((err as any).tryNextLink).toBeFalsy();
                }
            );
        }
    );

    it(
        'should resolve credentials by fetching them from the container metadata service',
        async () => {
            mockHttpGet.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
            expect(await fromContainerMetadata()())
                .toEqual(fromImdsCredentials(creds));
        }
    );

    it('should retry the fetching operation up to maxRetries times', async () => {
        const maxRetries = 5;
        for (let i = 0; i < maxRetries - 1; i++) {
            mockHttpGet.mockReturnValueOnce(Promise.reject('No!'));
        }
        mockHttpGet.mockReturnValueOnce(
            Promise.resolve(JSON.stringify(creds))
        );

        expect(await fromContainerMetadata({maxRetries})())
            .toEqual(fromImdsCredentials(creds));
        expect(mockHttpGet.mock.calls.length).toEqual(maxRetries);
    });

    it('should retry responses that receive invalid response values', async () => {
        for (let key of Object.keys(creds)) {
            const invalidCreds: any = {...creds};
            delete invalidCreds[key];
            mockHttpGet.mockReturnValueOnce(
                Promise.resolve(JSON.stringify(invalidCreds))
            );
        }
        mockHttpGet.mockReturnValueOnce(Promise.resolve(JSON.stringify(creds)));

        await fromContainerMetadata({maxRetries: 100})();
        expect(mockHttpGet.mock.calls.length)
            .toEqual(Object.keys(creds).length + 1);
    });

    it('should pass relevant configuration to httpGet', async () => {
        const timeout = Math.ceil(Math.random() * 1000);
        mockHttpGet.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
        await fromContainerMetadata({timeout})();
        expect(mockHttpGet.mock.calls.length).toEqual(1);
        expect(mockHttpGet.mock.calls[0][0]).toEqual({
            host: '169.254.170.2',
            path: process.env[ENV_CMDS_RELATIVE_URI],
            timeout,
        });
    });
});
