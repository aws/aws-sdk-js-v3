// smithy-typescript generated code
import { AccelerationSettings, HopDestination } from "./models_0";
import {
  Job,
  JobTemplate,
  JobTemplateListBy,
  JobTemplateSettings,
  Order,
  Policy,
  Preset,
  PresetSettings,
  Queue,
  QueueStatus,
  ReservationPlanSettings,
  StatusUpdateInterval,
} from "./models_1";

export interface ListJobsResponse {
  /**
   * List of jobs
   */
  Jobs?: Job[];

  /**
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesRequest {
  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: JobTemplateListBy | string;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListJobTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesResponse {
  /**
   * List of Job templates.
   */
  JobTemplates?: JobTemplate[];

  /**
   * Use this string to request the next batch of job templates.
   */
  NextToken?: string;
}

export namespace ListJobTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
    ...obj,
  });
}

export enum PresetListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export interface ListPresetsRequest {
  /**
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: PresetListBy | string;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListPresetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPresetsRequest): any => ({
    ...obj,
  });
}

export interface ListPresetsResponse {
  /**
   * Use this string to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * List of presets
   */
  Presets?: Preset[];
}

export namespace ListPresetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPresetsResponse): any => ({
    ...obj,
  });
}

export enum QueueListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
}

export interface ListQueuesRequest {
  /**
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   */
  ListBy?: QueueListBy | string;

  /**
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;
}

export namespace ListQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj,
  });
}

export interface ListQueuesResponse {
  /**
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * List of queues.
   */
  Queues?: Queue[];
}

export namespace ListQueuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 */
export interface ResourceTags {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  Arn?: string;

  /**
   * The tags for the resource.
   */
  Tags?: Record<string, string>;
}

export namespace ResourceTags {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTags): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: ResourceTags;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutPolicyRequest {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy: Policy | undefined;
}

export namespace PutPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy?: Policy;
}

export namespace PutPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPolicyResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: Record<string, string> | undefined;
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
