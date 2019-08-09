import { _JobResource } from "./_JobResource";
import { _Notification } from "./_Notification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobInput shape
 */
export interface CreateJobInput {
  /**
   * <p>Defines the type of job that you're creating. </p>
   */
  JobType?: "IMPORT" | "EXPORT" | "LOCAL_USE" | string;

  /**
   * <p>Defines the Amazon S3 buckets associated with this job.</p> <p>With <code>IMPORT</code> jobs, you specify the bucket or buckets that your transferred data will be imported into.</p> <p>With <code>EXPORT</code> jobs, you specify the bucket or buckets that your transferred data will be exported from. Optionally, you can also specify a <code>KeyRange</code> value. If you choose to export a range, you define the length of the range by providing either an inclusive <code>BeginMarker</code> value, an inclusive <code>EndMarker</code> value, or both. Ranges are UTF-8 binary sorted.</p>
   */
  Resources?: _JobResource;

  /**
   * <p>Defines an optional description of this specific job, for example <code>Important Photos 2016-08-11</code>.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the address that you want the Snowball shipped to.</p>
   */
  AddressId?: string;

  /**
   * <p>The <code>KmsKeyARN</code> that you want to associate with this job. <code>KmsKeyARN</code>s are created using the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html">CreateKey</a> AWS Key Management Service (KMS) API action.</p>
   */
  KmsKeyARN?: string;

  /**
   * <p>The <code>RoleARN</code> that you want to associate with this job. <code>RoleArn</code>s are created using the <a href="http://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> AWS Identity and Access Management (IAM) API action.</p>
   */
  RoleARN?: string;

  /**
   * <p>If your job is being created in one of the US regions, you have the option of specifying what size Snowball you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity.</p>
   */
  SnowballCapacityPreference?:
    | "T50"
    | "T80"
    | "T100"
    | "T42"
    | "NoPreference"
    | string;

  /**
   * <p>The shipping speed for this job. This speed doesn't dictate how soon you'll get the Snowball, rather it represents how quickly the Snowball moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snowballs are delivered in one to seven days.</p> </li> <li> <p>In the US, you have access to one-day shipping and two-day shipping.</p> </li> </ul>
   */
  ShippingOption?: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for this job.</p>
   */
  Notification?: _Notification;

  /**
   * <p>The ID of a cluster. If you're creating a job for a node in a cluster, you need to provide only this <code>clusterId</code> value. The other job attributes are inherited from the cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The type of AWS Snowball device to use for this job. The only supported device types for cluster jobs are <code>EDGE</code>, <code>EDGE_C</code>, and <code>EDGE_CG</code>.</p>
   */
  SnowballType?: "STANDARD" | "EDGE" | "EDGE_C" | "EDGE_CG" | string;

  /**
   * <p>The forwarding address ID for a job. This field is not supported in most regions.</p>
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
