export const DEFAULT_TIMEOUT = 1000;
export const DEFAULT_MAX_RETRIES = 0;

export interface RemoteProviderConfig {
    /**
     * The connection timeout (in milliseconds)
     */
    timeout: number;

    /**
     * The maximum number of times the HTTP connection should be retried
     */
    maxRetries: number;
}

export type RemoteProviderInit = Partial<RemoteProviderConfig>;

export interface Ec2InstanceMetadataInit extends RemoteProviderInit {
    /**
     * The identifier of the instance profile to read
     */
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
