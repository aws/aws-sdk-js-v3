import {
  _AccelerationSettings,
  _UnmarshalledAccelerationSettings
} from "./_AccelerationSettings";
import {
  _OutputGroupDetail,
  _UnmarshalledOutputGroupDetail
} from "./_OutputGroupDetail";
import { _JobSettings, _UnmarshalledJobSettings } from "./_JobSettings";
import { _Timing, _UnmarshalledTiming } from "./_Timing";

/**
 * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface _Job {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: _AccelerationSettings;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: "QUEUE" | "PRESET" | "JOB_TEMPLATE" | string;

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   */
  CreatedAt?: Date | string | number;

  /**
   * A job's phase can be PROBING, TRANSCODING OR UPLOADING
   */
  CurrentPhase?: "PROBING" | "TRANSCODING" | "UPLOADING" | string;

  /**
   * Error code for the job
   */
  ErrorCode?: number;

  /**
   * Error message of Job
   */
  ErrorMessage?: string;

  /**
   * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
   */
  Id?: string;

  /**
   * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
   */
  JobPercentComplete?: number;

  /**
   * The job template that the job is created from, if it is created from a job template.
   */
  JobTemplate?: string;

  /**
   * List of output group details
   */
  OutputGroupDetails?: Array<_OutputGroupDetail> | Iterable<_OutputGroupDetail>;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Queue?: string;

  /**
   * The number of times that the service automatically attempted to process your job after encountering an error.
   */
  RetryCount?: number;

  /**
   * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
   */
  Role: string;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: _JobSettings;

  /**
   * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?:
    | "SUBMITTED"
    | "PROGRESSING"
    | "COMPLETE"
    | "CANCELED"
    | "ERROR"
    | string;

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
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   */
  Timing?: _Timing;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: _UnmarshalledAccelerationSettings;

  /**
   * The time, in Unix epoch format in seconds, when the job got created.
   */
  CreatedAt?: Date;

  /**
   * List of output group details
   */
  OutputGroupDetails?: Array<_UnmarshalledOutputGroupDetail>;

  /**
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: _UnmarshalledJobSettings;

  /**
   * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
   */
  Timing?: _UnmarshalledTiming;

  /**
   * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
   */
  UserMetadata?: { [key: string]: string };
}
