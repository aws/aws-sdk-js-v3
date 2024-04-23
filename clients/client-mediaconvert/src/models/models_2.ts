// smithy-typescript generated code
import { AccelerationSettings, BillingTagsSource, Endpoint, HopDestination } from "./models_0";

import {
  Commitment,
  Job,
  JobSettings,
  JobStatus,
  JobTemplate,
  JobTemplateSettings,
  Preset,
  PresetSettings,
  PricingPlan,
  Queue,
  QueueStatus,
  RenewalType,
  SimulateReservedQueue,
  StatusUpdateInterval,
} from "./models_1";

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * @public
   * The Job ID of the job to be cancelled.
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * @public
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   */
  BillingTagsSource?: BillingTagsSource;

  /**
   * @public
   * Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.
   */
  ClientRequestToken?: string;

  /**
   * @public
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * @public
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   */
  JobTemplate?: string;

  /**
   * @public
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * @public
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   */
  Queue?: string;

  /**
   * @public
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   */
  Role: string | undefined;

  /**
   * @public
   * JobSettings contains all the transcode settings for a job.
   */
  Settings: JobSettings | undefined;

  /**
   * @public
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   */
  SimulateReservedQueue?: SimulateReservedQueue;

  /**
   * @public
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval;

  /**
   * @public
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.
   */
  UserMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * @public
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  Job?: Job;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * @public
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   */
  AccelerationSettings?: AccelerationSettings;

  /**
   * @public
   * Optional. A category for the job template you are creating
   */
  Category?: string;

  /**
   * @public
   * Optional. A description of the job template you are creating.
   */
  Description?: string;

  /**
   * @public
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   */
  HopDestinations?: HopDestination[];

  /**
   * @public
   * The name of the job template you are creating.
   */
  Name: string | undefined;

  /**
   * @public
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   */
  Priority?: number;

  /**
   * @public
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   */
  Queue?: string;

  /**
   * @public
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * @public
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   */
  StatusUpdateInterval?: StatusUpdateInterval;

  /**
   * @public
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * @public
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   */
  JobTemplate?: JobTemplate;
}

/**
 * @public
 */
export interface CreatePresetRequest {
  /**
   * @public
   * Optional. A category for the preset you are creating.
   */
  Category?: string;

  /**
   * @public
   * Optional. A description of the preset you are creating.
   */
  Description?: string;

  /**
   * @public
   * The name of the preset you are creating.
   */
  Name: string | undefined;

  /**
   * @public
   * Settings for preset
   */
  Settings: PresetSettings | undefined;

  /**
   * @public
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePresetResponse {
  /**
   * @public
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

/**
 * @public
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface ReservationPlanSettings {
  /**
   * @public
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment: Commitment | undefined;

  /**
   * @public
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   */
  RenewalType: RenewalType | undefined;

  /**
   * @public
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   */
  ReservedSlots: number | undefined;
}

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
