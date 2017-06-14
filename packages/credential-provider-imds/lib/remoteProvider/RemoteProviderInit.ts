export const DEFAULT_TIMEOUT = 1000;
// TODO I think this should be 0 (in line with other SDKs) and not 3 (in line with JS v2)
export const DEFAULT_MAX_RETRIES = 3;

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
