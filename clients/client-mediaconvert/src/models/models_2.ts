// smithy-typescript generated code
import { AccelerationSettings, Endpoint, HopDestination } from "./models_0";
import {
  Job,
  JobStatus,
  JobTemplate,
  JobTemplateSettings,
  Preset,
  PresetSettings,
  PricingPlan,
  Queue,
  QueueStatus,
  ReservationPlanSettings,
  StatusUpdateInterval,
} from "./models_1";

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * @public
   * Optional. A description of the queue that you are creating.
   */
  Description?: string;

  /**
   * @public
   * The name of the queue that you are creating.
   */
  Name: string | undefined;

  /**
   * @public
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   */
  PricingPlan?: PricingPlan;

  /**
   * @public
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * @public
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   */
  Status?: QueueStatus;

  /**
   * @public
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * @public
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * @public
   * The name of the job template to be deleted.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateResponse {}

/**
 * @public
 */
export interface DeletePolicyRequest {}

/**
 * @public
 */
export interface DeletePolicyResponse {}

/**
 * @public
 */
export interface DeletePresetRequest {
  /**
   * @public
   * The name of the preset to be deleted.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePresetResponse {}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * @public
   * The name of the queue that you want to delete.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueResponse {}

/**
 * @public
 * @enum
 */
export const DescribeEndpointsMode = {
  DEFAULT: "DEFAULT",
  GET_ONLY: "GET_ONLY",
} as const;

/**
 * @public
 */
export type DescribeEndpointsMode = (typeof DescribeEndpointsMode)[keyof typeof DescribeEndpointsMode];

/**
 * @public
 * DescribeEndpointsRequest
 */
export interface DescribeEndpointsRequest {
  /**
   * @public
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * @public
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   */
  Mode?: DescribeEndpointsMode;

  /**
   * @public
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * @public
   * List of endpoints
   */
  Endpoints?: Endpoint[];

  /**
   * @public
   * Use this string to request the next batch of endpoints.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * @public
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * @public
   * the job ID of the job.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * @public
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

/**
 * @public
 */
export interface GetJobTemplateRequest {
  /**
   * @public
   * The name of the job template.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetJobTemplateResponse {
  /**
   * @public
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

/**
 * @public
 */
export interface GetPolicyRequest {}

/**
 * @public
 * @enum
 */
export const InputPolicy = {
  ALLOWED: "ALLOWED",
  DISALLOWED: "DISALLOWED",
} as const;

/**
 * @public
 */
export type InputPolicy = (typeof InputPolicy)[keyof typeof InputPolicy];

/**
 * @public
 * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 */
export interface Policy {
  /**
   * @public
   * Allow or disallow jobs that specify HTTP inputs.
   */
  HttpInputs?: InputPolicy;

  /**
   * @public
   * Allow or disallow jobs that specify HTTPS inputs.
   */
  HttpsInputs?: InputPolicy;

  /**
   * @public
   * Allow or disallow jobs that specify Amazon S3 inputs.
   */
  S3Inputs?: InputPolicy;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * @public
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy?: Policy;
}

/**
 * @public
 */
export interface GetPresetRequest {
  /**
   * @public
   * The name of the preset.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetPresetResponse {
  /**
   * @public
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * @public
   * The name of the queue that you want information about.
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * @public
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

/**
 * @public
 * @enum
 */
export const JobTemplateListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type JobTemplateListBy = (typeof JobTemplateListBy)[keyof typeof JobTemplateListBy];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * @public
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   */
  NextToken?: string;

  /**
   * @public
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order;

  /**
   * @public
   * Optional. Provide a queue name to get back only jobs from that queue.
   */
  Queue?: string;

  /**
   * @public
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   */
  Status?: JobStatus;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * @public
   * List of jobs
   */
  Jobs?: Job[];

  /**
   * @public
   * Use this string to request the next batch of jobs.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * @public
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   */
  Category?: string;

  /**
   * @public
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: JobTemplateListBy;

  /**
   * @public
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * @public
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   */
  NextToken?: string;

  /**
   * @public
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * @public
   * List of Job templates.
   */
  JobTemplates?: JobTemplate[];

  /**
   * @public
   * Use this string to request the next batch of job templates.
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const PresetListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type PresetListBy = (typeof PresetListBy)[keyof typeof PresetListBy];

/**
 * @public
 */
export interface ListPresetsRequest {
  /**
   * @public
   * Optionally, specify a preset category to limit responses to only presets from that category.
   */
  Category?: string;

  /**
   * @public
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   */
  ListBy?: PresetListBy;

  /**
   * @public
   * Optional. Number of presets, up to twenty, that will be returned at one time
   */
  MaxResults?: number;

  /**
   * @public
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * @public
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order;
}

/**
 * @public
 */
export interface ListPresetsResponse {
  /**
   * @public
   * Use this string to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * @public
   * List of presets
   */
  Presets?: Preset[];
}

/**
 * @public
 * @enum
 */
export const QueueListBy = {
  CREATION_DATE: "CREATION_DATE",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type QueueListBy = (typeof QueueListBy)[keyof typeof QueueListBy];

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * @public
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   */
  ListBy?: QueueListBy;

  /**
   * @public
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   */
  MaxResults?: number;

  /**
   * @public
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * @public
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   */
  Order?: Order;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * @public
   * Use this string to request the next batch of queues.
   */
  NextToken?: string;

  /**
   * @public
   * List of queues.
   */
  Queues?: Queue[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;
}

/**
 * @public
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 */
export interface ResourceTags {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource.
   */
  Arn?: string;

  /**
   * @public
   * The tags for the resource.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   */
  ResourceTags?: ResourceTags;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * @public
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy: Policy | undefined;
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * @public
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Policy?: Policy;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * @public
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   */
  Arn: string | undefined;

  /**
   * @public
   * The keys of the tags that you want to remove from the resource.
   */
  TagKeys?: string[];
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateJobTemplateRequest {
  /**
   * @public
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * @public
   * The new category for the job template, if you are changing it.
   */
  Category?: string;

  /**
   * @public
   * The new description for the job template, if you are changing it.
   */
  Description?: string;

  /**
   * @public
   * Optional list of hop destinations.
   */
  HopDestinations?: HopDestination[];

  /**
   * @public
   * The name of the job template you are modifying
   */
  Name: string | undefined;

  /**
   * @public
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * @public
   * The new queue for the job template, if you are changing it.
   */
  Queue?: string;

  /**
   * @public
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings?: JobTemplateSettings;

  /**
   * @public
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval;
}

/**
 * @public
 */
export interface UpdateJobTemplateResponse {
  /**
   * @public
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

/**
 * @public
 */
export interface UpdatePresetRequest {
  /**
   * @public
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * @public
   * The new description for the preset, if you are changing it.
   */
  Description?: string;

  /**
   * @public
   * The name of the preset you are modifying.
   */
  Name: string | undefined;

  /**
   * @public
   * Settings for preset
   */
  Settings?: PresetSettings;
}

/**
 * @public
 */
export interface UpdatePresetResponse {
  /**
   * @public
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * @public
   * The new description for the queue, if you are changing it.
   */
  Description?: string;

  /**
   * @public
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;

  /**
   * @public
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * @public
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus;
}

/**
 * @public
 */
export interface UpdateQueueResponse {
  /**
   * @public
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}
