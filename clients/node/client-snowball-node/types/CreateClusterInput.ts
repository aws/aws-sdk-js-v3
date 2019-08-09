import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterInput shape
 */
export interface CreateClusterInput {
  /**
   * <p>The type of job for this cluster. Currently, the only job type supported for clusters is <code>LOCAL_USE</code>.</p>
   */
  JobType: "IMPORT" | "EXPORT" | "LOCAL_USE" | string;

  /**
   * <p>The resources associated with the cluster job. These resources include Amazon S3 buckets and optional AWS Lambda functions written in the Python language. </p>
   */
  Resources: _JobResource;

  /**
   * <p>An optional description of this specific cluster, for example <code>Environmental Data Cluster-01</code>.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the address that you want the cluster shipped to.</p>
   */
  AddressId: string;

  /**
   * <p>The <code>KmsKeyARN</code> value that you want to associate with this cluster. <code>KmsKeyARN</code> values are created by using the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> API action in AWS Key Management Service (AWS KMS). </p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this cluster. <code>RoleArn</code> values are created by using the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> API action in AWS Identity and Access Management (IAM).</p>
   */
  RoleARN: string;

  /**
   * <p>The type of AWS Snowball device to use for this cluster. The only supported device types for cluster jobs are <code>EDGE</code>, <code>EDGE_C</code>, and <code>EDGE_CG</code>.</p>
   */
  SnowballType?: "STANDARD" | "EDGE" | "EDGE_C" | "EDGE_CG" | string;

  /**
   * <p>The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snowball Edges shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, devices are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>
   */
  ShippingOption: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.</p>
   */
  Notification?: _Notification;

  /**
   * <p>The forwarding address ID for a cluster. This field is not supported in most regions.</p>
   */
  ForwardingAddressId?: string;

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
