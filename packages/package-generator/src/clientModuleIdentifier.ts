import { RuntimeTarget } from '@aws-sdk/build-types';
import { ServiceMetadata } from '@aws-sdk/types';

export function clientModuleIdentifier(
    metadata: ServiceMetadata,
    runtime: RuntimeTarget = 'universal'
): string {

    let name = `client-${getServiceId(metadata)}`;
    const modelVersion = determineServiceVersion(metadata);
    if (modelVersion > 1) {
        name += `-v${modelVersion}`;
    }
    if (runtime !== 'universal') {
        name += `-${runtime}`;
    }

    return name;
}

function getServiceId(metadata: ServiceMetadata): string {
    const {
        serviceAbbreviation,
        serviceFullName,
        serviceId,
    } = metadata;

    const className = serviceId || (
        (serviceAbbreviation || serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .trim()
    );

    return className
        .toLowerCase()
        .replace(/\s/g, '-');
}

// TODO use metadata.major_version when added to the model
function determineServiceVersion(metadata: ServiceMetadata): number {
    const serviceId = getServiceId(metadata);
    if (
        serviceMajorVersions[serviceId] &&
        serviceMajorVersions[serviceId][metadata.apiVersion]
    ) {
        return serviceMajorVersions[serviceId][metadata.apiVersion];
    }

    return 1;
}

interface MajorVersionMatcher {
    [serviceIdentifier: string]: {
        [apiVersion: string]: number;
    }
}

const serviceMajorVersions: MajorVersionMatcher = {
    dynamodb: {
        '2012-08-10': 2,
    },
};
