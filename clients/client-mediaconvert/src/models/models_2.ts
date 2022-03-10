import { AccelerationSettings, HopDestination } from "./models_0";
import {
  JobTemplate,
  JobTemplateSettings,
  Preset,
  PresetSettings,
  Queue,
  QueueStatus,
  ReservationPlanSettings,
  StatusUpdateInterval,
} from "./models_1";

export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   */
  TagKeys?: string[];
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * The new category for the job template, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the job template, if you are changing it.
   */
  Description?: string;

  /**
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * The name of the job template you are modifying
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * The new queue for the job template, if you are changing it.
   */
  Queue?: string;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings?: JobTemplateSettings;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval | string;
}

export namespace UpdateJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

export namespace UpdateJobTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdatePresetRequest {
  /**
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the preset, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the preset you are modifying.
   */
  Name: string | undefined;

  /**
   * Settings for preset
   */
  Settings?: PresetSettings;
}

export namespace UpdatePresetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePresetRequest): any => ({
    ...obj,
  });
}

export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace UpdatePresetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePresetResponse): any => ({
    ...obj,
  });
}

export interface UpdateQueueRequest {
  /**
   * The new description for the queue, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;
}

export namespace UpdateQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace UpdateQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueResponse): any => ({
    ...obj,
  });
}
