import {
    HttpEndpoint
} from '@aws/types';

import {
    EndpointProperties,
    EndpointRules,
    ResolvedEndpointProperties
} from './endpoint-rules';


export class EndpointResolver {
    constructor(private readonly rules: EndpointRules) {}

    public resolveEndpoint(serviceId: string, region: string): ResolvedEndpointProperties {
        if (!serviceId || !region) {
            throw new Error(
                `Unable to resolve endpoint for serviceId ${serviceId} and region ${region}`
            );
        }
        // iterate over each partition
        const partitions = this.rules.partitions;
        const partitionsLength = partitions.length;

        for (let i = 0; i < partitionsLength; i++) {
            const partition = partitions[i];
            // determine the correct partition by making sure the region is valid (or reg-ex)
            let isValidRegion = partition.regions.hasOwnProperty(region);
            if (!isValidRegion && partition.regionRegex) {
                isValidRegion = new RegExp(partition.regionRegex).test(region);
            }

            if (!isValidRegion) {
                // can not resolve endpoint using this partition
                continue;
            }

            let endpointProperties: EndpointProperties = {};

            // determine the service's endpoint rules
            const service = partition.services[serviceId];
            if (service) {
                // check if the service is regionalized
                if (service.isRegionalized === false && service.partitionEndpoint) {
                    region = service.partitionEndpoint;
                }
                if (service.endpoints && service.endpoints[region]) {
                    this.mergeEndpointProperties(endpointProperties, service.endpoints[region]);
                }
                // merge in service defaults
                if (service.defaults) {
                    this.mergeEndpointProperties(endpointProperties, service.defaults);
                }
            }

            // merge partition defaults is present
            if (partition.defaults) {
                this.mergeEndpointProperties(endpointProperties, partition.defaults);
            }

            // expand the hostname
            if (!endpointProperties.hostname) {
                throw new Error(`Unable to resolve hostname for ${serviceId}, ${region}`);
            }

            endpointProperties.hostname = this.expandHostname(endpointProperties.hostname, serviceId, region, partition.dnsSuffix);
            return endpointProperties as ResolvedEndpointProperties;
        }

        throw new Error(`Unable to resolve endpoint for ${serviceId}, ${region}`);
    }

    private mergeEndpointProperties(base: EndpointProperties, additional: EndpointProperties): void {
        for (let key of Object.keys(additional)) {
            if (!base.hasOwnProperty(key)) {
                base[key] = additional[key];
            }
        }
    }

    private expandHostname(hostname: string, serviceId: string, region: string, dnsSuffix: string) {
        hostname = this.replace(hostname, '{service}', serviceId);
        hostname = this.replace(hostname, '{region}', region);
        hostname = this.replace(hostname, '{dnsSuffix}', dnsSuffix);
        return hostname;
    }

    private replace(source: string, pattern: string, replacement: string) {
        const index = source.search(pattern);
        if (index === -1) {
            return source;
        }
        const pLen = pattern.length;
        return source.substr(0, index) + replacement + source.substr(index + pLen);
    }
}

