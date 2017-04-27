export const DEFAULT_TIMEOUT = 1000;
export const DEFAULT_MAX_RETRIES = 3;

export interface RemoteProviderConfig {
    timeout: number;
    maxRetries: number;
}

export type RemoteProviderInit = Partial<RemoteProviderConfig>;

export interface Ec2InstanceMetadataInit extends RemoteProviderInit {
    profile?: string;
}

export function providerConfigFromInit(
    init: RemoteProviderInit
): RemoteProviderConfig {
    const {
        timeout = DEFAULT_TIMEOUT,
        maxRetries = DEFAULT_MAX_RETRIES,
    } = init;

    return {maxRetries, timeout};
}
