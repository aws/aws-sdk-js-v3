const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3[.-]([a-z0-9-]+)\./;
const S3_PARTITION_GLOBAL_HOSTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;
const AWS_PARTITION_SUFFIX = 'amazonaws.com';
const AWS_PARTITION_GLOBAL_REGION = 'us-east-1';

export interface BucketHostnameParameters {
    accelerateEndpoint?: boolean;
    baseHostname: string;
    bucketName: string;
    dualstackEndpoint?: boolean;
    pathStyleEndpoint?: boolean;
    sslCompatible?: boolean;
}

export interface BucketHostname {
    hostname: string;
    bucketEndpoint: boolean;
}

export function bucketHostname({
    accelerateEndpoint = false,
    baseHostname,
    bucketName,
    dualstackEndpoint = false,
    pathStyleEndpoint = false,
    sslCompatible = true
}: BucketHostnameParameters): BucketHostname {
    const [
        region,
        hostnameSuffix,
     ] = S3_PARTITION_GLOBAL_HOSTNAME_PATTERN.test(baseHostname)
        ? [AWS_PARTITION_GLOBAL_REGION, AWS_PARTITION_SUFFIX]
        : partitionSuffix(baseHostname);

    if (
        pathStyleEndpoint ||
        !isDnsCompatibleBucketName(bucketName) ||
        (sslCompatible && DOT_PATTERN.test(bucketName))
    ) {
        return {
            bucketEndpoint: false,
            hostname: dualstackEndpoint
                ? `s3.dualstack.${region}.${hostnameSuffix}`
                : baseHostname,
        };
    }

    if (accelerateEndpoint) {
        baseHostname = `s3-accelerate${
            dualstackEndpoint ? '.dualstack' : ''
        }.${hostnameSuffix}`;
    } else if (dualstackEndpoint) {
        baseHostname = `s3.dualstack.${region}.${hostnameSuffix}`;
    }

    return {
        bucketEndpoint: true,
        hostname: `${bucketName}.${baseHostname}`
    }
}

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
function isDnsCompatibleBucketName(bucketName: string): boolean {
    return DOMAIN_PATTERN.test(bucketName)
        && !IP_ADDRESS_PATTERN.test(bucketName)
        && !DOTS_PATTERN.test(bucketName);
}

function partitionSuffix(hostname: string): [string, string] {
    const parts = hostname.match(S3_HOSTNAME_PATTERN) ||
        throwOnInvalidEndpoint(hostname);

    return [parts[2], hostname.replace(new RegExp(`^${parts[0]}`), '')];
}

function throwOnInvalidEndpoint(hostname: string): never {
    throw new Error(`Invalid S3 hostname ${hostname} provided`);
}
