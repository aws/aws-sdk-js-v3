import { bucketHostname } from './bucketHostname';
import {
    BuildHandler,
    BuildHandlerArguments,
    BuildMiddleware,
    MetadataBearer,
} from "@aws/types";

export interface BucketEndpointAwareInput {
    Bucket: string;
    $bucketEndpoint?: boolean;
    $forcePathStyle?: boolean;
    $useAccelerateEndpoint?: boolean;
    $useDualstackEndpoint?: boolean;
}

export interface bucketEndpointMiddlewareConfiguration {
    forcePathStyle?: boolean;
    preformedBucketEndpoint?: boolean;
    useAccelerateEndpoint?: boolean;
    useDualstackEndpoint?: boolean;
}

export function bucketEndpointMiddleware({
    forcePathStyle = false,
    preformedBucketEndpoint = false,
    useAccelerateEndpoint = false,
    useDualstackEndpoint = false,
}: bucketEndpointMiddlewareConfiguration = {}): BuildMiddleware<any, any, any> {
    return <
        Input extends BucketEndpointAwareInput,
        Output extends MetadataBearer
    >(
        next: BuildHandler<Input, Output, any>
    ): BuildHandler<Input, Output, any> => async (
        args: BuildHandlerArguments<Input, any>
    ): Promise<Output> => {
        const {
            Bucket: bucketName,
            $bucketEndpoint,
            $forcePathStyle = forcePathStyle,
            $useAccelerateEndpoint = useAccelerateEndpoint,
            $useDualstackEndpoint = useDualstackEndpoint,
        } = args.input;
        let replaceBucketInPath = preformedBucketEndpoint || $bucketEndpoint;
        const request = {...args.request};

        if ($bucketEndpoint) {
            request.hostname = bucketName;
        } else if (!preformedBucketEndpoint) {
            const { hostname, bucketEndpoint } = bucketHostname({
                bucketName,
                baseHostname: request.hostname,
                accelerateEndpoint: $useAccelerateEndpoint,
                dualstackEndpoint: $useDualstackEndpoint,
                pathStyleEndpoint: $forcePathStyle,
                sslCompatible: request.protocol === 'https:',
            });

            request.hostname = hostname;
            replaceBucketInPath = bucketEndpoint;
        }

        if (replaceBucketInPath) {
            request.path = request.path.replace(/^(\/)?[^\/]+/, '');
            if (request.path === '') {
                request.path = '/';
            }
        }

        return next({...args, request});
    }
}
