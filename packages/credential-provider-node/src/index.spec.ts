import {defaultProvider} from "./";
import {ProviderError} from "@aws/property-provider";

jest.mock('@aws/credential-provider-env', () => {
    const envProvider = jest.fn();
    return {
        fromEnv: jest.fn(() => envProvider),
    };
});
import {fromEnv} from '@aws/credential-provider-env';

jest.mock('@aws/credential-provider-ini', () => {
    const iniProvider = jest.fn();
    return {
        fromIni: jest.fn(() => iniProvider),
    };
});
import {fromIni, FromIniInit} from '@aws/credential-provider-ini';

jest.mock('@aws/credential-provider-imds', () => {
    const containerMdsProvider = jest.fn();
    const instanceMdsProvider = jest.fn();
    return {
        fromContainerMetadata: jest.fn(() => containerMdsProvider),
        fromInstanceMetadata: jest.fn(() => instanceMdsProvider),
    };
});
import {
    Ec2InstanceMetadataInit,
    ENV_CMDS_FULL_URI,
    ENV_CMDS_RELATIVE_URI,
    fromContainerMetadata,
    fromInstanceMetadata,
    RemoteProviderInit,
} from '@aws/credential-provider-imds';

const fullUri = process.env[ENV_CMDS_FULL_URI];
const relativeUri = process.env[ENV_CMDS_RELATIVE_URI];

beforeEach(() => {
    delete process.env[ENV_CMDS_FULL_URI];
    delete process.env[ENV_CMDS_RELATIVE_URI];

    (fromEnv() as any).mockClear();
    (fromIni() as any).mockClear();
    (fromContainerMetadata() as any).mockClear();
    (fromInstanceMetadata() as any).mockClear();
    (fromEnv as any).mockClear();
    (fromIni as any).mockClear();
    (fromContainerMetadata as any).mockClear();
    (fromInstanceMetadata as any).mockClear();
});

afterAll(() => {
    process.env[ENV_CMDS_FULL_URI] = fullUri;
    process.env[ENV_CMDS_RELATIVE_URI] = relativeUri;
});

describe('defaultProvider', () => {
    it(
        'should stop after the environmental provider if credentials have been found',
        async () => {
            const creds = {
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
            };

            (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

            expect(await defaultProvider()()).toEqual(creds);
            expect((fromEnv() as any).mock.calls.length).toBe(1);
            expect((fromIni() as any).mock.calls.length).toBe(0);
            expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
            expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
        }
    );

    it(
        'should stop after the ini provider if credentials have been found',
        async () => {
            const creds = {
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
            };

            (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Nothing here!')));
            (fromIni() as any).mockImplementation(() => Promise.resolve(creds));

            expect(await defaultProvider()()).toEqual(creds);
            expect((fromEnv() as any).mock.calls.length).toBe(1);
            expect((fromIni() as any).mock.calls.length).toBe(1);
            expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
            expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
        }
    );

    it(
        'should continue on to the IMDS provider if no env or ini credentials have been found',
        async () => {
            const creds = {
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
            };

            (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Keep moving!')));
            (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError('Nothing here!')));
            (fromInstanceMetadata() as any).mockImplementation(() => Promise.resolve(creds));

            expect(await defaultProvider()()).toEqual(creds);
            expect((fromEnv() as any).mock.calls.length).toBe(1);
            expect((fromIni() as any).mock.calls.length).toBe(1);
            expect((fromContainerMetadata() as any).mock.calls.length).toBe(0);
            expect((fromInstanceMetadata() as any).mock.calls.length).toBe(1);
        }
    );

    it(
        'should continue on to the ECS IMDS provider if no env or ini credentials have been found and an ECS environment variable has been set',
        async () => {
            const creds = {
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
            };

            (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Keep moving!')));
            (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError('Nothing here!')));
            (fromInstanceMetadata() as any).mockImplementation(() => Promise.reject(new Error('PANIC')));
            (fromContainerMetadata() as any).mockImplementation(() => Promise.resolve(creds));

            process.env[ENV_CMDS_RELATIVE_URI] = '/credentials';

            expect(await defaultProvider()()).toEqual(creds);
            expect((fromEnv() as any).mock.calls.length).toBe(1);
            expect((fromIni() as any).mock.calls.length).toBe(1);
            expect((fromContainerMetadata() as any).mock.calls.length).toBe(1);
            expect((fromInstanceMetadata() as any).mock.calls.length).toBe(0);
        }
    );

    it('should pass configuration on to the ini provider', async () => {
        const iniConfig: FromIniInit = {
            profile: 'foo',
            mfaCodeProvider: () => Promise.resolve('mfaCode'),
            roleAssumer: () => Promise.resolve({
                accessKeyId: 'fizz',
                secretAccessKey: 'buzz',
            }),
            filepath: '/home/user/.secrets/credentials.ini',
            configFilepath: '/home/user/.secrets/credentials.ini',
        };

        (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Keep moving!')));
        (fromIni() as any).mockImplementation(() => Promise.resolve({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
        }));

        (fromIni as any).mockClear();

        await expect(defaultProvider(iniConfig)()).resolves;

        expect((fromIni as any).mock.calls.length).toBe(1);
        expect((fromIni as any).mock.calls[0][0]).toBe(iniConfig);
    });

    it('should pass configuration on to the IMDS provider', async () => {
        const imdsConfig: Ec2InstanceMetadataInit = {
            profile: 'foo',
            timeout: 2000,
            maxRetries: 3,
        };

        (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Keep moving!')));
        (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError('Nothing here!')));
        (fromInstanceMetadata() as any).mockImplementation(() => Promise.resolve({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
        }));

        (fromInstanceMetadata as any).mockClear();

        await expect(defaultProvider(imdsConfig)()).resolves;

        expect((fromInstanceMetadata as any).mock.calls.length).toBe(1);
        expect((fromInstanceMetadata as any).mock.calls[0][0]).toBe(imdsConfig);
    });

    it('should pass configuration on to the ECS IMDS provider', async () => {
        const ecsImdsConfig: RemoteProviderInit = {
            timeout: 2000,
            maxRetries: 3,
        };

        (fromEnv() as any).mockImplementation(() => Promise.reject(new ProviderError('Keep moving!')));
        (fromIni() as any).mockImplementation(() => Promise.reject(new ProviderError('Nothing here!')));
        (fromContainerMetadata() as any).mockImplementation(() => Promise.resolve({
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
        }));

        (fromContainerMetadata as any).mockClear();

        process.env[ENV_CMDS_RELATIVE_URI] = '/credentials';

        await expect(defaultProvider(ecsImdsConfig)()).resolves;

        expect((fromContainerMetadata as any).mock.calls.length).toBe(1);
        expect((fromContainerMetadata as any).mock.calls[0][0]).toBe(ecsImdsConfig);
    });

    it('should return the same promise across invocations', async () => {
        const creds = {
            accessKeyId: 'foo',
            secretAccessKey: 'bar',
        };

        (fromEnv() as any).mockImplementation(() => Promise.resolve(creds));

        const provider = defaultProvider();

        expect(await provider()).toEqual(creds);

        expect(provider()).toBe(provider());

        expect(await provider()).toEqual(creds);
        expect((fromEnv() as any).mock.calls.length).toBe(1);
    });

    describe('memoization', () => {
        const dateDotNow = Date.now;

        afterEach(() => {
            Date.now = dateDotNow;
        });

        it('should invoke provider again when credentials expire', async () => {
            const clockMock = Date.now = jest.fn();
            clockMock.mockReturnValue(0);
            const provider = fromEnv() as any;
            provider.mockClear();
            provider.mockImplementation(() => Promise.resolve({
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
                expiration: Date.now() + 600, // expires in ten minutes
            }));
            const memoized = defaultProvider();

            expect((await memoized()).accessKeyId).toEqual('foo');
            expect(provider.mock.calls.length).toBe(1);
            expect((await memoized()).secretAccessKey).toEqual('bar');
            expect(provider.mock.calls.length).toBe(1);

            clockMock.mockReset();
            clockMock.mockReturnValue(601000); // One second past previous expiration

            expect((await memoized()).accessKeyId).toEqual('foo');
            expect(provider.mock.calls.length).toBe(2);
            expect((await memoized()).secretAccessKey).toEqual('bar');
            expect(provider.mock.calls.length).toBe(2);
        });
    });
});
