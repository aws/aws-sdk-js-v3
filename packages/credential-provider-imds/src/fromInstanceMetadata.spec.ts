import {fromInstanceMetadata} from "./fromInstanceMetadata";
import {httpGet} from "./remoteProvider/httpGet";
import {
    fromImdsCredentials,
    ImdsCredentials
} from "./remoteProvider/ImdsCredentials";
import MockInstance = jest.MockInstance;
import {RequestOptions} from "http";

interface HttpGet {
    (options: RequestOptions): Promise<Buffer>;
}

const mockHttpGet = <MockInstance<HttpGet>><any>httpGet;
jest.mock('./remoteProvider/httpGet', () => ({httpGet: jest.fn()}));

beforeEach(() => {
    mockHttpGet.mockReset();
});

describe('fromInstanceMetadata', () => {
    const creds: ImdsCredentials = Object.freeze({
        AccessKeyId: 'foo',
        SecretAccessKey: 'bar',
        Token: 'baz',
        Expiration: new Date().toISOString(),
    });

    it(
        'should resolve credentials by fetching them from the container metadata service',
        async () => {
            mockHttpGet.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
            expect(await fromInstanceMetadata()())
                .toEqual(fromImdsCredentials(creds));
        }
    );

    it('should retry the fetching operation up to maxRetries times', async () => {
        const maxRetries = 5;
        mockHttpGet.mockReturnValueOnce(Promise.resolve('foo'));
        for (let i = 0; i < maxRetries - 1; i++) {
            mockHttpGet.mockReturnValueOnce(Promise.reject('No!'));
        }
        mockHttpGet.mockReturnValueOnce(
            Promise.resolve(JSON.stringify(creds))
        );

        expect(await fromInstanceMetadata({maxRetries})())
            .toEqual(fromImdsCredentials(creds));
        expect(mockHttpGet.mock.calls.length).toEqual(maxRetries + 1);
    });

    it('should retry responses that receive invalid response values', async () => {
        mockHttpGet.mockReturnValueOnce(Promise.resolve('foo'));
        for (let key of Object.keys(creds)) {
            const invalidCreds: any = {...creds};
            delete invalidCreds[key];
            mockHttpGet.mockReturnValueOnce(
                Promise.resolve(JSON.stringify(invalidCreds))
            );
        }
        mockHttpGet.mockReturnValueOnce(Promise.resolve(JSON.stringify(creds)));

        await fromInstanceMetadata({maxRetries: 100})();
        expect(mockHttpGet.mock.calls.length)
            .toEqual(Object.keys(creds).length + 2);
    });

    it('should pass relevant configuration to httpGet', async () => {
        const timeout = Math.ceil(Math.random() * 1000);
        const profile = 'foo-profile';
        mockHttpGet.mockReturnValueOnce(Promise.resolve(profile));
        mockHttpGet.mockReturnValue(Promise.resolve(JSON.stringify(creds)));
        await fromInstanceMetadata({timeout})();
        expect(mockHttpGet.mock.calls.length).toEqual(2);
        expect(mockHttpGet.mock.calls[0][0]).toEqual({
            host: '169.254.169.254',
            path: '/latest/meta-data/iam/security-credentials/',
            timeout,
        });
        expect(mockHttpGet.mock.calls[1][0]).toEqual({
            host: '169.254.169.254',
            path: `/latest/meta-data/iam/security-credentials/${profile}`,
            timeout,
        });
    });

    it('should retry the profile name fetch as necessary', async () => {
        const defaultTimeout = 1000;
        const profile = 'foo-profile';
        mockHttpGet.mockReturnValueOnce(Promise.reject('Too busy'));
        mockHttpGet.mockReturnValueOnce(Promise.resolve(profile));
        mockHttpGet.mockReturnValueOnce(Promise.resolve(JSON.stringify(creds)));

        await fromInstanceMetadata({maxRetries: 1})();
        expect(mockHttpGet.mock.calls.length).toEqual(3);
        expect(mockHttpGet.mock.calls[2][0]).toEqual({
            host: '169.254.169.254',
            path: `/latest/meta-data/iam/security-credentials/${profile}`,
            timeout: defaultTimeout,
        });
        for (let index of [0, 1]) {
            expect(mockHttpGet.mock.calls[index][0]).toEqual({
                host: '169.254.169.254',
                path: '/latest/meta-data/iam/security-credentials/',
                timeout: defaultTimeout,
            });
        }
    });
});
