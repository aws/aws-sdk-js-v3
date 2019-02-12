import { RuntimeTarget } from '@aws-sdk/build-types';
import { ServiceMetadata } from '@aws-sdk/types';

export function clientModuleIdentifier(
    metadata: ServiceMetadata,
    runtime: RuntimeTarget = 'universal'
): string {

    let name = `client-${getServiceId(metadata)}`;
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