// smithy-typescript generated code
import { AccelerationSettings, HopDestination } from "./models_0";
import {
  Job,
  JobStatus,
  JobTemplate,
  JobTemplateSettings,
  Preset,
  PresetSettings,
  Queue,
  QueueStatus,
  ReservationPlanSettings,
  StatusUpdateInterval,
} from "./models_1";

export enum InputPolicy {
  ALLOWED = "ALLOWED",
  DISALLOWED = "DISALLOWED",
}

/**
 * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Policy {
  /**
   * Allow or disallow jobs that specify HTTP inputs.
   */
  HttpInputs?: InputPolicy | string;

  /**
   * Allow or disallow jobs that specify HTTPS inputs.
   */
  HttpsInputs?: InputPolicy | string;

  /**
   * Allow or disallow jobs that specify Amazon S3 inputs.
   */
  S3Inputs?: InputPolicy | string;
}

export interface GetPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy?: Policy;
}

export interface GetPresetRequest {
  /**
   * The name of the preset.
   */
  Name: string | undefined;
}

export interface GetPresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export interface GetQueueRequest {
  /**
   * The name of the queue that you want information about.
   */
  Name: string | undefined;
}

export interface GetQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export enum JobTemplateListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListJobsRequest {
  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order | string;

  /**
   * Optional. Provide a queue name to get back only jobs from that queue.
   */
  Queue?: string;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus | string;
}

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

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
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

export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: ResourceTags;
}

export interface PutPolicyRequest {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy: Policy | undefined;
}

export interface PutPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy?: Policy;
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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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

export interface UpdateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
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

export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
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

export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

/**
 * @internal
 */
export const PolicyFilterSensitiveLog = (obj: Policy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPolicyResponseFilterSensitiveLog = (obj: GetPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPresetRequestFilterSensitiveLog = (obj: GetPresetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPresetResponseFilterSensitiveLog = (obj: GetPresetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueueRequestFilterSensitiveLog = (obj: GetQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueueResponseFilterSensitiveLog = (obj: GetQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResponseFilterSensitiveLog = (obj: ListJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobTemplatesRequestFilterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobTemplatesResponseFilterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPresetsRequestFilterSensitiveLog = (obj: ListPresetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPresetsResponseFilterSensitiveLog = (obj: ListPresetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueuesRequestFilterSensitiveLog = (obj: ListQueuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueuesResponseFilterSensitiveLog = (obj: ListQueuesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceTagsFilterSensitiveLog = (obj: ResourceTags): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPolicyRequestFilterSensitiveLog = (obj: PutPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPolicyResponseFilterSensitiveLog = (obj: PutPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobTemplateRequestFilterSensitiveLog = (obj: UpdateJobTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobTemplateResponseFilterSensitiveLog = (obj: UpdateJobTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePresetRequestFilterSensitiveLog = (obj: UpdatePresetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePresetResponseFilterSensitiveLog = (obj: UpdatePresetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueRequestFilterSensitiveLog = (obj: UpdateQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueResponseFilterSensitiveLog = (obj: UpdateQueueResponse): any => ({
  ...obj,
});
