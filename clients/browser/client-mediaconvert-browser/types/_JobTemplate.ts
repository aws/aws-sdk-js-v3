import {
  _AccelerationSettings,
  _UnmarshalledAccelerationSettings
} from "./_AccelerationSettings";
import {
  _JobTemplateSettings,
  _UnmarshalledJobTemplateSettings
} from "./_JobTemplateSettings";

/**
 * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
 */
export interface _JobTemplate {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: _AccelerationSettings;

  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your job templates.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for Job template creation.
   */
  CreatedAt?: Date | string | number;

  /**
   * An optional description you create for each job template.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   */
  LastUpdated?: Date | string | number;

  /**
   * A name you create for each job template. Each name must be unique within your account.
   */
  Name: string;

  /**
   * Relative priority on the job.
   */
  Priority?: number;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: _JobTemplateSettings;

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
   * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
   */
  Type?: "SYSTEM" | "CUSTOM" | string;
}

export interface _UnmarshalledJobTemplate extends _JobTemplate {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
   */
  AccelerationSettings?: _UnmarshalledAccelerationSettings;

  /**
   * The timestamp in epoch seconds for Job template creation.
   */
  CreatedAt?: Date;

  /**
   * The timestamp in epoch seconds when the Job template was last updated.
   */
  LastUpdated?: Date;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: _UnmarshalledJobTemplateSettings;
}
