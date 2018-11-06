/**
 * <p>A complex type that contains information about a configuration for DNS query logging.</p>
 */
export interface _QueryLoggingConfig {
    /**
     * <p>The ID for a configuration for DNS query logging.</p>
     */
    Id: string;

    /**
     * <p>The ID of the hosted zone that CloudWatch Logs is logging queries for. </p>
     */
    HostedZoneId: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.</p>
     */
    CloudWatchLogsLogGroupArn: string;
}

export type _UnmarshalledQueryLoggingConfig = _QueryLoggingConfig;