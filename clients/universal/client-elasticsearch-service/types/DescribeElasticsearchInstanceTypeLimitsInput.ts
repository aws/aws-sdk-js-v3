import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsInput {
  /**
   * <p> DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. </p>
   */
  DomainName?: string;

  /**
   * <p> The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. </p>
   */
  InstanceType:
    | "m3.medium.elasticsearch"
    | "m3.large.elasticsearch"
    | "m3.xlarge.elasticsearch"
    | "m3.2xlarge.elasticsearch"
    | "m4.large.elasticsearch"
    | "m4.xlarge.elasticsearch"
    | "m4.2xlarge.elasticsearch"
    | "m4.4xlarge.elasticsearch"
    | "m4.10xlarge.elasticsearch"
    | "m5.large.elasticsearch"
    | "m5.xlarge.elasticsearch"
    | "m5.2xlarge.elasticsearch"
    | "m5.4xlarge.elasticsearch"
    | "m5.12xlarge.elasticsearch"
    | "r5.large.elasticsearch"
    | "r5.xlarge.elasticsearch"
    | "r5.2xlarge.elasticsearch"
    | "r5.4xlarge.elasticsearch"
    | "r5.12xlarge.elasticsearch"
    | "c5.large.elasticsearch"
    | "c5.xlarge.elasticsearch"
    | "c5.2xlarge.elasticsearch"
    | "c5.4xlarge.elasticsearch"
    | "c5.9xlarge.elasticsearch"
    | "c5.18xlarge.elasticsearch"
    | "t2.micro.elasticsearch"
    | "t2.small.elasticsearch"
    | "t2.medium.elasticsearch"
    | "r3.large.elasticsearch"
    | "r3.xlarge.elasticsearch"
    | "r3.2xlarge.elasticsearch"
    | "r3.4xlarge.elasticsearch"
    | "r3.8xlarge.elasticsearch"
    | "i2.xlarge.elasticsearch"
    | "i2.2xlarge.elasticsearch"
    | "d2.xlarge.elasticsearch"
    | "d2.2xlarge.elasticsearch"
    | "d2.4xlarge.elasticsearch"
    | "d2.8xlarge.elasticsearch"
    | "c4.large.elasticsearch"
    | "c4.xlarge.elasticsearch"
    | "c4.2xlarge.elasticsearch"
    | "c4.4xlarge.elasticsearch"
    | "c4.8xlarge.elasticsearch"
    | "r4.large.elasticsearch"
    | "r4.xlarge.elasticsearch"
    | "r4.2xlarge.elasticsearch"
    | "r4.4xlarge.elasticsearch"
    | "r4.8xlarge.elasticsearch"
    | "r4.16xlarge.elasticsearch"
    | "i3.large.elasticsearch"
    | "i3.xlarge.elasticsearch"
    | "i3.2xlarge.elasticsearch"
    | "i3.4xlarge.elasticsearch"
    | "i3.8xlarge.elasticsearch"
    | "i3.16xlarge.elasticsearch"
    | string;

  /**
   * <p> Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. </p>
   */
  ElasticsearchVersion: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
