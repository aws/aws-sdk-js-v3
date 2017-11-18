import {fromSharedConfigFiles} from './fromSharedConfigFiles';
import {ProviderError} from '@aws/property-provider';

jest.mock('@aws/shared-ini-file-loader', () => {
    const module = jest.genMockFromModule('@aws/shared-ini-file-loader') as any;
    module.loadSharedConfigFiles = jest.fn(() => Promise.resolve({
        configFile: {},
        credentialsFile: {
            default: {region: 'us-west-1'}
        },
    }));
    return module;
});
import {loadSharedConfigFiles} from '@aws/shared-ini-file-loader';

beforeEach(() => {
    (loadSharedConfigFiles as any).mockClear();
});

describe('fromSharedConfigFiles', () => {
    it('should throw a ProviderError if no config files were loaded', () => {
        const emptyConfig = Promise.resolve({
            configFile: {},
            credentialsFile: {},
        });

        return expect(fromSharedConfigFiles({loadedConfig: emptyConfig})())
            .rejects
            .toMatchObject(new ProviderError(
                `No region found for profile default in SDK configuration files`
            ));
    });

    it('should use the region from the credentials file', async () => {
        const loadedConfig = Promise.resolve({
            configFile: {},
            credentialsFile: {
                default: {region: 'us-west-2'}
            }
        });

        expect(await fromSharedConfigFiles({loadedConfig})()).toBe('us-west-2');
    });

    it(
        'should use the region from a designated profile in the credentials file',
        async () => {
            const profile = 'foo';
            const loadedConfig = Promise.resolve({
                configFile: {},
                credentialsFile: {
                    default: {region: 'us-west-2'},
                    [profile]: {region: 'us-west-1'},
                }
            });

            expect(await fromSharedConfigFiles({loadedConfig, profile})())
                .toBe('us-west-1');
        }
    );

    it('should use the region from the config file', async () => {
        const loadedConfig = Promise.resolve({
            credentialsFile: {},
            configFile: {
                default: {region: 'us-west-2'}
            }
        });

        expect(await fromSharedConfigFiles({loadedConfig})()).toBe('us-west-2');
    });

    it(
        'should use the region from a designated profile in the credentials file',
        async () => {
            const profile = 'foo';
            const loadedConfig = Promise.resolve({
                credentialsFile: {},
                configFile: {
                    default: {region: 'us-west-2'},
                    [profile]: {region: 'us-west-1'},
                }
            });

            expect(await fromSharedConfigFiles({loadedConfig, profile})())
                .toBe('us-west-1');
        }
    );

    it('should prefer a region defined in the credentials file', async () => {
        const loadedConfig = Promise.resolve({
            credentialsFile: {
                default: {region: 'us-west-1'}
            },
            configFile: {
                default: {region: 'us-west-2'}
            }
        });

        expect(await fromSharedConfigFiles({loadedConfig})()).toBe('us-west-1');
    });


    it(
        'should use the share ini file loader if no pre-loaded config is supplied',
        async () => {
            expect(await fromSharedConfigFiles()()).toBe('us-west-1');
            expect((loadSharedConfigFiles as any).mock.calls.length).toBe(1);
        }
    );
});
