export interface EndpointRules {
    /**
     * list of partition metadata.
     */
    partitions: Partition[];
    /**
     * Schema version number.
     */
    version: number;
}

export interface EndpointProperties {
    /**
     * Signature version 4 credential scope information.
     */
    credentialScope?: {
        /**
         * Region signing name.
         */
        region?: string;
        /**
         * Service signing name.
         */
        service?: string;
    }
    /**
     * URI template containing the hostname to connect to.
     */
    hostname?: string;
    /**
     * List of acceptable protocols to connect with.
     */
    protocols?: Protocols
    /**
     * List of acceptable signature versions.
     */
    signatureVersions?: SignatureVersions[];
    /**
     * Used in some tools to determine the endpoint.
     */
    sslCommonName?: string;

    [key: string]: any;
}

export interface Partition {
    /**
     * Default values to merge into each endpoint of the partition.
     */
    defaults?: EndpointProperties;
    /**
     * Suffix used as a varspec in the hostname.
     */
    dnsSuffix: string;
    /**
     * Partition identifier.
     */
    partition: string;
    /**
     * Descriptive partition name.
     */
    partitionName?: string;
    /**
     * Regular expression that should match all regions in the partition.
     */
    regionRegex?: string;
    /**
     * Map of region name to region data.
     */
    regions: {
        [region: string]: Region|undefined;
    }
    /**
     * Map of service identifier to service configuration.
     */
    services: {
        [service: string]: Service;
    }
}

/**
 * List of acceptable protocols to connect with.
 */
export type Protocols = string[];

export interface Region {
    /**
     * Short, human readable, name of the region.
     */
    description: string;
}

export interface ResolvedEndpointProperties extends EndpointProperties {
    hostname: string;
}

export interface Service {
    /**
     * Default values to merge into each endpoint of the service.
     */
    defaults?: EndpointProperties;
    /**
     * Map of endpoint name (e.g., region) to endpoint data.
     */
    endpoints?: {
        [region: string]: EndpointProperties;
    }
    /**
     * Specifies whether or not the service is regionalized in the partition.
     * Default: true
     */
    isRegionalized?: boolean;
    /**
     * Specifies the endpoint name to use as a partition-global endpoint.
     */
    partitionEndpoint?: string;
    /**
     * List of acceptable protocols to connect with.
     */
    protocols?: Protocols;
}

/**
 * List of acceptable signature versions.
 */
export type SignatureVersions = 'v2'|'v4'|'s3'|'s3v4'|'v3'|'v3https';