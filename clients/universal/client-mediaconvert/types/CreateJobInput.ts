import { _AccelerationSettings } from "./_AccelerationSettings";
import { _JobSettings } from "./_JobSettings";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobInput shape
 */
export interface CreateJobInput {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: _AccelerationSettings;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: "QUEUE" | "PRESET" | "JOB_TEMPLATE" | string;

  /**
   * Idempotency token for CreateJob operation.
   */
  ClientRequestToken?: string;

  /**
   * When you create a job, you can either specify a job template or specify the transcoding settings individually
   */
  JobTemplate?: string;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  Role: string;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: _JobSettings;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?:
    | "SECONDS_10"
    | "SECONDS_12"
    | "SECONDS_15"
    | "SECONDS_20"
    | "SECONDS_30"
    | "SECONDS_60"
    | "SECONDS_120"
    | "SECONDS_180"
    | "SECONDS_240"
    | "SECONDS_300"
    | "SECONDS_360"
    | "SECONDS_420"
    | "SECONDS_480"
    | "SECONDS_540"
    | "SECONDS_600"
    | string;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string } | Iterable<[string, string]>;

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
