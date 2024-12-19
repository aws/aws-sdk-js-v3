// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaConvertServiceException as __BaseException } from "./MediaConvertServiceException";

import { AccelerationSettings, BillingTagsSource, Endpoint, HopDestination } from "./models_0";

import {
  Commitment,
  Job,
  JobEngineVersion,
  JobSettings,
  JobStatus,
  JobTemplate,
  JobTemplateSettings,
  Preset,
  PresetSettings,
  PricingPlan,
  SimulateReservedQueue,
  StatusUpdateInterval,
  Type,
} from "./models_1";

/**
 * @public
 * @enum
 */
export const RenewalType = {
  AUTO_RENEW: "AUTO_RENEW",
  EXPIRE: "EXPIRE",
} as const;

/**
 * @public
 */
export type RenewalType = (typeof RenewalType)[keyof typeof RenewalType];

/**
 * @public
 * @enum
 */
export const ReservationPlanStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
} as const;

/**
 * @public
 */
export type ReservationPlanStatus = (typeof ReservationPlanStatus)[keyof typeof ReservationPlanStatus];

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 * @public
 */
export interface ReservationPlan {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   * @public
   */
  Commitment?: Commitment | undefined;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   * @public
   */
  PurchasedAt?: Date | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   * @public
   */
  RenewalType?: RenewalType | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   * @public
   */
  ReservedSlots?: number | undefined;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   * @public
   */
  Status?: ReservationPlanStatus | undefined;
}

/**
 * A service override applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.
 * @public
 */
export interface ServiceOverride {
  /**
   * Details about the service override that MediaConvert has applied.
   * @public
   */
  Message?: string | undefined;

  /**
   * The name of the setting that MediaConvert has applied an override to.
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of the service override that MediaConvert has applied.
   * @public
   */
  OverrideValue?: string | undefined;

  /**
   * The value of the setting that you configured, prior to any overrides that MediaConvert has applied.
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  ACTIVE: "ACTIVE",
  PAUSED: "PAUSED",
} as const;

/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 * @public
 */
export interface Queue {
  /**
   * An identifier for this resource that is unique within all of AWS.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The maximum number of jobs your queue can process concurrently.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An optional description that you create for each queue.
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   * @public
   */
  ProgressingJobsCount?: number | undefined;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   * @public
   */
  ReservationPlan?: ReservationPlan | undefined;

  /**
   * A list of any service overrides applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.
   * @public
   */
  ServiceOverrides?: ServiceOverride[] | undefined;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   * @public
   */
  Status?: QueueStatus | undefined;

  /**
   * The estimated number of jobs with a SUBMITTED status.
   * @public
   */
  SubmittedJobsCount?: number | undefined;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {}

/**
 * The service can't process your request because of a problem in the request. Please check your request form and syntax.
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service couldn't complete your request because there is a conflict with the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You don't have permissions for this action with the credentials you sent.
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service encountered an unexpected condition and can't fulfill your request.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource you requested doesn't exist.
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The Job ID of the job to be cancelled.
   * @public
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
   * Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
   * @public
   */
  BillingTagsSource?: BillingTagsSource | undefined;

  /**
   * Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * Use Job engine versions to run jobs for your production workflow on one version, while you test and validate the latest version. To specify a Job engine version: Enter a date in a YYYY-MM-DD format. For a list of valid Job engine versions, submit a ListVersions request. To not specify a Job engine version: Leave blank.
   * @public
   */
  JobEngineVersion?: string | undefined;

  /**
   * Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.
   * @public
   */
  JobTemplate?: string | undefined;

  /**
   * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
   * @public
   */
  Role: string | undefined;

  /**
   * JobSettings contains all the transcode settings for a job.
   * @public
   */
  Settings: JobSettings | undefined;

  /**
   * Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
   * @public
   */
  SimulateReservedQueue?: SimulateReservedQueue | undefined;

  /**
   * Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateRequest {
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * Optional. A category for the job template you are creating
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. A description of the job template you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * The name of the job template you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   * @public
   */
  Settings: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface CreatePresetRequest {
  /**
   * Optional. A category for the preset you are creating.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. A description of the preset you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the preset you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings for preset
   * @public
   */
  Settings: PresetSettings | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 * @public
 */
export interface ReservationPlanSettings {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   * @public
   */
  Commitment: Commitment | undefined;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   * @public
   */
  RenewalType: RenewalType | undefined;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   * @public
   */
  ReservedSlots: number | undefined;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * Optional. A description of the queue that you are creating.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the queue that you are creating.
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   * @public
   */
  PricingPlan?: PricingPlan | undefined;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   * @public
   */
  ReservationPlanSettings?: ReservationPlanSettings | undefined;

  /**
   * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
   * @public
   */
  Status?: QueueStatus | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * The name of the job template to be deleted.
   * @public
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
   * The name of the preset to be deleted.
   * @public
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
   * The name of the queue that you want to delete.
   * @public
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
 */
export interface DescribeEndpointsRequest {
  /**
   * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * @deprecated
   *
   * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
   * @public
   */
  Mode?: DescribeEndpointsMode | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * List of endpoints
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * Use this string to request the next batch of endpoints.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
   * @public
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
   * the job ID of the job.
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Job?: Job | undefined;
}

/**
 * @public
 */
export interface GetJobTemplateRequest {
  /**
   * The name of the job template.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
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
 * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
 * @public
 */
export interface Policy {
  /**
   * Allow or disallow jobs that specify HTTP inputs.
   * @public
   */
  HttpInputs?: InputPolicy | undefined;

  /**
   * Allow or disallow jobs that specify HTTPS inputs.
   * @public
   */
  HttpsInputs?: InputPolicy | undefined;

  /**
   * Allow or disallow jobs that specify Amazon S3 inputs.
   * @public
   */
  S3Inputs?: InputPolicy | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetPresetRequest {
  /**
   * The name of the preset.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetPresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * @public
 */
export interface GetQueueRequest {
  /**
   * The name of the queue that you want information about.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
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
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;

  /**
   * Optional. Provide a queue name to get back only jobs from that queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   * @public
   */
  Status?: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * List of jobs
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * Use this string to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * Optionally, specify a job template category to limit responses to only job templates from that category.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   * @public
   */
  ListBy?: JobTemplateListBy | undefined;

  /**
   * Optional. Number of job templates, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of job templates.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * List of Job templates.
   * @public
   */
  JobTemplates?: JobTemplate[] | undefined;

  /**
   * Use this string to request the next batch of job templates.
   * @public
   */
  NextToken?: string | undefined;
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
   * Optionally, specify a preset category to limit responses to only presets from that category.
   * @public
   */
  Category?: string | undefined;

  /**
   * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
   * @public
   */
  ListBy?: PresetListBy | undefined;

  /**
   * Optional. Number of presets, up to twenty, that will be returned at one time
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of presets.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListPresetsResponse {
  /**
   * Use this string to request the next batch of presets.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of presets
   * @public
   */
  Presets?: Preset[] | undefined;
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
   * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
   * @public
   */
  ListBy?: QueueListBy | undefined;

  /**
   * Optional. Number of queues, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this string, provided with the response to a previous request, to request the next batch of queues.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * Use this string to request the next batch of queues.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of queues.
   * @public
   */
  Queues?: Queue[] | undefined;

  /**
   * The maximum number of jobs that MediaConvert can process at one time, across all of your on-demand queues in the current AWS Region.
   * @public
   */
  TotalConcurrentJobs?: number | undefined;

  /**
   * The remaining number of concurrent jobs that are not associated with a queue and are available to allocate to a queue. You can allocate these jobs when you create or update a queue.
   * @public
   */
  UnallocatedConcurrentJobs?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;
}

/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 * @public
 */
export interface ResourceTags {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags for the resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
   * @public
   */
  ResourceTags?: ResourceTags | undefined;
}

/**
 * @public
 */
export interface ListVersionsRequest {
  /**
   * Optional. Number of valid Job engine versions, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of Job engine versions.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsResponse {
  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of Job engine versions.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Retrieve a JSON array of all available Job engine versions and the date they expire.
   * @public
   */
  Versions?: JobEngineVersion[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy: Policy | undefined;
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * Optional. Provide your input file URL or your partial input file name. The maximum length for an input file is 300 characters.
   * @public
   */
  InputFile?: string | undefined;

  /**
   * Optional. Number of jobs, up to twenty, that will be returned at one time.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
   * @public
   */
  Order?: Order | undefined;

  /**
   * Optional. Provide a queue name, or a queue ARN, to return only jobs from that queue.
   * @public
   */
  Queue?: string | undefined;

  /**
   * Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
   * @public
   */
  Status?: JobStatus | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * List of jobs.
   * @public
   */
  Jobs?: Job[] | undefined;

  /**
   * Use this string to request the next batch of jobs.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   * @public
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
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
   * @public
   */
  Arn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   * @public
   */
  TagKeys?: string[] | undefined;
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
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
   * @public
   */
  AccelerationSettings?: AccelerationSettings | undefined;

  /**
   * The new category for the job template, if you are changing it.
   * @public
   */
  Category?: string | undefined;

  /**
   * The new description for the job template, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional list of hop destinations.
   * @public
   */
  HopDestinations?: HopDestination[] | undefined;

  /**
   * The name of the job template you are modifying
   * @public
   */
  Name: string | undefined;

  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
   * @public
   */
  Priority?: number | undefined;

  /**
   * The new queue for the job template, if you are changing it.
   * @public
   */
  Queue?: string | undefined;

  /**
   * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
   * @public
   */
  Settings?: JobTemplateSettings | undefined;

  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   * @public
   */
  StatusUpdateInterval?: StatusUpdateInterval | undefined;
}

/**
 * @public
 */
export interface UpdateJobTemplateResponse {
  /**
   * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
   * @public
   */
  JobTemplate?: JobTemplate | undefined;
}

/**
 * @public
 */
export interface UpdatePresetRequest {
  /**
   * The new category for the preset, if you are changing it.
   * @public
   */
  Category?: string | undefined;

  /**
   * The new description for the preset, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the preset you are modifying.
   * @public
   */
  Name: string | undefined;

  /**
   * Settings for preset
   * @public
   */
  Settings?: PresetSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   * @public
   */
  Preset?: Preset | undefined;
}

/**
 * @public
 */
export interface UpdateQueueRequest {
  /**
   * Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, update your reservation plan instead in order to increase your yearly commitment.
   * @public
   */
  ConcurrentJobs?: number | undefined;

  /**
   * The new description for the queue, if you are changing it.
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the queue that you are modifying.
   * @public
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   * @public
   */
  ReservationPlanSettings?: ReservationPlanSettings | undefined;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   * @public
   */
  Status?: QueueStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   * @public
   */
  Queue?: Queue | undefined;
}
