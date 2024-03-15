// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FisServiceException as __BaseException } from "./FisServiceException";

/**
 * @public
 * @enum
 */
export const AccountTargeting = {
  MULTI_ACCOUNT: "multi-account",
  SINGLE_ACCOUNT: "single-account",
} as const;

/**
 * @public
 */
export type AccountTargeting = (typeof AccountTargeting)[keyof typeof AccountTargeting];

/**
 * <p>Describes a parameter for an action.</p>
 * @public
 */
export interface ActionParameter {
  /**
   * <p>The parameter description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Indicates whether the parameter is required.</p>
   * @public
   */
  required?: boolean;
}

/**
 * <p>Describes a target for an action.</p>
 * @public
 */
export interface ActionTarget {
  /**
   * <p>The resource type of the target.</p>
   * @public
   */
  resourceType?: string;
}

/**
 * <p>Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a>
 *          in the <i>Fault Injection Service User Guide</i>.</p>
 * @public
 */
export interface Action {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The action parameters, if applicable.</p>
   * @public
   */
  parameters?: Record<string, ActionParameter>;

  /**
   * <p>The supported targets for the action.</p>
   * @public
   */
  targets?: Record<string, ActionTarget>;

  /**
   * <p>The tags for the action.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ActionsMode = {
  RUN_ALL: "run-all",
  SKIP_ALL: "skip-all",
} as const;

/**
 * @public
 */
export type ActionsMode = (typeof ActionsMode)[keyof typeof ActionsMode];

/**
 * <p>Provides a summary of an action.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, ActionTarget>;

  /**
   * <p>The tags for the action.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>The request could not be processed because of a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Specifies an action for an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a>
 *          in the <i>Fault Injection Service User Guide</i>.</p>
 * @public
 */
export interface CreateExperimentTemplateActionInput {
  /**
   * <p>The ID of the action. The format of the action ID is: aws:<i>service-name</i>:<i>action-type</i>.</p>
   * @public
   */
  actionId: string | undefined;

  /**
   * <p>A description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The parameters for the action, if applicable.</p>
   * @public
   */
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   * @public
   */
  startAfter?: string[];
}

/**
 * @public
 * @enum
 */
export const EmptyTargetResolutionMode = {
  FAIL: "fail",
  SKIP: "skip",
} as const;

/**
 * @public
 */
export type EmptyTargetResolutionMode = (typeof EmptyTargetResolutionMode)[keyof typeof EmptyTargetResolutionMode];

/**
 * <p>Specifies experiment options for an experiment template.</p>
 * @public
 */
export interface CreateExperimentTemplateExperimentOptionsInput {
  /**
   * <p>Specifies the account targeting setting for experiment options.</p>
   * @public
   */
  accountTargeting?: AccountTargeting;

  /**
   * <p>Specifies the empty target resolution mode for experiment options.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}

/**
 * <p>Specifies the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   * @public
   */
  logGroupArn: string | undefined;
}

/**
 * <p>Specifies the configuration for experiment logging to Amazon S3.</p>
 * @public
 */
export interface ExperimentTemplateS3LogConfigurationInput {
  /**
   * <p>The name of the destination bucket.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Specifies the configuration for experiment logging.</p>
 * @public
 */
export interface CreateExperimentTemplateLogConfigurationInput {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion: number | undefined;
}

/**
 * <p>Specifies a stop condition for an experiment template.</p>
 * @public
 */
export interface CreateExperimentTemplateStopConditionInput {
  /**
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is
   *          a CloudWatch alarm.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>Specifies a filter used for the target resource input in an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a>
 *          in the <i>Fault Injection Service User Guide</i>.</p>
 * @public
 */
export interface ExperimentTemplateTargetInputFilter {
  /**
   * <p>The attribute path for the filter.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The attribute values for the filter.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or
 *          at least one resource tag. You cannot specify both ARNs and tags.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a>
 *          in the <i>Fault Injection Service User Guide</i>.</p>
 * @public
 */
export interface CreateExperimentTemplateTargetInput {
  /**
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[];

  /**
   * <p>Scopes the identified resources to a specific count of the resources at random, or a percentage of the resources. All identified resources are included in the target.</p>
   *          <ul>
   *             <li>
   *                <p>ALL - Run the action on all identified targets. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>COUNT(n) - Run the action on the specified number of targets, chosen from the identified targets at random.
   *                 For example, COUNT(1) selects one of the targets.</p>
   *             </li>
   *             <li>
   *                <p>PERCENT(n) - Run the action on the specified percentage of targets, chosen from the identified targets
   *                at random. For example, PERCENT(25) selects 25% of the targets.</p>
   *             </li>
   *          </ul>
   * @public
   */
  selectionMode: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateExperimentTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A description for the experiment template.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The stop conditions.</p>
   * @public
   */
  stopConditions: CreateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, CreateExperimentTemplateTargetInput>;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions: Record<string, CreateExperimentTemplateActionInput> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The tags to apply to the experiment template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;

  /**
   * <p>The experiment options for the experiment template.</p>
   * @public
   */
  experimentOptions?: CreateExperimentTemplateExperimentOptionsInput;
}

/**
 * <p>Describes an action for an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateAction {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId?: string;

  /**
   * <p>A description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The parameters for the action.</p>
   * @public
   */
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts.</p>
   * @public
   */
  startAfter?: string[];
}

/**
 * <p>Describes the experiment options for an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateExperimentOptions {
  /**
   * <p>The account targeting setting for an experiment template. </p>
   * @public
   */
  accountTargeting?: AccountTargeting;

  /**
   * <p>The empty target resolution mode for an experiment template.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}

/**
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   * @public
   */
  logGroupArn?: string;
}

/**
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 * @public
 */
export interface ExperimentTemplateS3LogConfiguration {
  /**
   * <p>The name of the destination bucket.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Describes the configuration for experiment logging.</p>
 * @public
 */
export interface ExperimentTemplateLogConfiguration {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfiguration;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number;
}

/**
 * <p>Describes a stop condition for an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateStopCondition {
  /**
   * <p>The source for the stop condition.</p>
   * @public
   */
  source?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>Describes a filter used for the target resources in an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateTargetFilter {
  /**
   * <p>The attribute path for the filter.</p>
   * @public
   */
  path?: string;

  /**
   * <p>The attribute values for the filter.</p>
   * @public
   */
  values?: string[];
}

/**
 * <p>Describes a target for an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateTarget {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode?: string;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * <p>Describes an experiment template.</p>
 * @public
 */
export interface ExperimentTemplate {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment template.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description for the experiment template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, ExperimentTemplateTarget>;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, ExperimentTemplateAction>;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: ExperimentTemplateStopCondition[];

  /**
   * <p>The time the experiment template was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time the experiment template was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The tags for the experiment template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: ExperimentTemplateLogConfiguration;

  /**
   * <p>The experiment options for an experiment template.</p>
   * @public
   */
  experimentOptions?: ExperimentTemplateExperimentOptions;

  /**
   * <p>The count of target account configurations for the experiment template.</p>
   * @public
   */
  targetAccountConfigurationsCount?: number;
}

/**
 * @public
 */
export interface CreateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * <p>The specified resource cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>You have exceeded your service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface CreateTargetAccountConfigurationRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The experiment template ID.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * <p>Describes a target account configuration.</p>
 * @public
 */
export interface TargetAccountConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration;
}

/**
 * @public
 */
export interface DeleteExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @public
 */
export interface DeleteTargetAccountConfigurationRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration;
}

/**
 * @public
 * @enum
 */
export const ExperimentActionStatus = {
  cancelled: "cancelled",
  completed: "completed",
  failed: "failed",
  initiating: "initiating",
  pending: "pending",
  running: "running",
  skipped: "skipped",
  stopped: "stopped",
  stopping: "stopping",
} as const;

/**
 * @public
 */
export type ExperimentActionStatus = (typeof ExperimentActionStatus)[keyof typeof ExperimentActionStatus];

/**
 * <p>Describes the state of an action.</p>
 * @public
 */
export interface ExperimentActionState {
  /**
   * <p>The state of the action.</p>
   * @public
   */
  status?: ExperimentActionStatus;

  /**
   * <p>The reason for the state.</p>
   * @public
   */
  reason?: string;
}

/**
 * <p>Describes the action for an experiment.</p>
 * @public
 */
export interface ExperimentAction {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId?: string;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The parameters for the action.</p>
   * @public
   */
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before this action starts.</p>
   * @public
   */
  startAfter?: string[];

  /**
   * <p>The state of the action.</p>
   * @public
   */
  state?: ExperimentActionState;

  /**
   * <p>The time that the action started.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The time that the action ended.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * <p>Describes the options for an experiment.</p>
 * @public
 */
export interface ExperimentOptions {
  /**
   * <p>The account targeting setting for an experiment.</p>
   * @public
   */
  accountTargeting?: AccountTargeting;

  /**
   * <p>The empty target resolution mode for an experiment.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;

  /**
   * <p>The actions mode of the experiment that is set from the StartExperiment API command.</p>
   * @public
   */
  actionsMode?: ActionsMode;
}

/**
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface ExperimentCloudWatchLogsLogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   * @public
   */
  logGroupArn?: string;
}

/**
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 * @public
 */
export interface ExperimentS3LogConfiguration {
  /**
   * <p>The name of the destination bucket.</p>
   * @public
   */
  bucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Describes the configuration for experiment logging.</p>
 * @public
 */
export interface ExperimentLogConfiguration {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentS3LogConfiguration;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number;
}

/**
 * @public
 * @enum
 */
export const ExperimentStatus = {
  completed: "completed",
  failed: "failed",
  initiating: "initiating",
  pending: "pending",
  running: "running",
  stopped: "stopped",
  stopping: "stopping",
} as const;

/**
 * @public
 */
export type ExperimentStatus = (typeof ExperimentStatus)[keyof typeof ExperimentStatus];

/**
 * <p>Describes the state of an experiment.</p>
 * @public
 */
export interface ExperimentState {
  /**
   * <p>The state of the experiment.</p>
   * @public
   */
  status?: ExperimentStatus;

  /**
   * <p>The reason for the state.</p>
   * @public
   */
  reason?: string;
}

/**
 * <p>Describes the stop condition for an experiment.</p>
 * @public
 */
export interface ExperimentStopCondition {
  /**
   * <p>The source for the stop condition.</p>
   * @public
   */
  source?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>Describes a filter used for the target resources in an experiment.</p>
 * @public
 */
export interface ExperimentTargetFilter {
  /**
   * <p>The attribute path for the filter.</p>
   * @public
   */
  path?: string;

  /**
   * <p>The attribute values for the filter.</p>
   * @public
   */
  values?: string[];
}

/**
 * <p>Describes a target for an experiment.</p>
 * @public
 */
export interface ExperimentTarget {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTargetFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode?: string;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * <p>Describes an experiment.</p>
 * @public
 */
export interface Experiment {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The state of the experiment.</p>
   * @public
   */
  state?: ExperimentState;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, ExperimentTarget>;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, ExperimentAction>;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: ExperimentStopCondition[];

  /**
   * <p>The time that the experiment was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time that the experiment started.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The time that the experiment ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The tags for the experiment.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: ExperimentLogConfiguration;

  /**
   * <p>The experiment options for the experiment.</p>
   * @public
   */
  experimentOptions?: ExperimentOptions;

  /**
   * <p>The count of target account configurations for the experiment.</p>
   * @public
   */
  targetAccountConfigurationsCount?: number;
}

/**
 * <p>Provides a summary of an experiment.</p>
 * @public
 */
export interface ExperimentSummary {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string;

  /**
   * <p>The state of the experiment.</p>
   * @public
   */
  state?: ExperimentState;

  /**
   * <p>The time that the experiment was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The tags for the experiment.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The experiment options for the experiment.</p>
   * @public
   */
  experimentOptions?: ExperimentOptions;
}

/**
 * <p>Describes a target account configuration for an experiment.</p>
 * @public
 */
export interface ExperimentTargetAccountConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * <p>Provides a summary of a target account configuration.</p>
 * @public
 */
export interface ExperimentTargetAccountConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * <p>Provides a summary of an experiment template.</p>
 * @public
 */
export interface ExperimentTemplateSummary {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment template.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The description of the experiment template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The time that the experiment template was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The time that the experiment template was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date;

  /**
   * <p>The tags for the experiment template.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetActionRequest {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetActionResponse {
  /**
   * <p>Information about the action.</p>
   * @public
   */
  action?: Action;
}

/**
 * @public
 */
export interface GetExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   * @public
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface GetExperimentTargetAccountConfigurationRequest {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  experimentId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration;
}

/**
 * @public
 */
export interface GetExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @public
 */
export interface GetTargetAccountConfigurationRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration;
}

/**
 * @public
 */
export interface GetTargetResourceTypeRequest {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;
}

/**
 * <p>Describes the parameters for a resource type. Use parameters to determine which tasks are
 *           identified during target resolution.</p>
 * @public
 */
export interface TargetResourceTypeParameter {
  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Indicates whether the parameter is required.</p>
   * @public
   */
  required?: boolean;
}

/**
 * <p>Describes a resource type.</p>
 * @public
 */
export interface TargetResourceType {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>A description of the resource type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The parameters for the resource type.</p>
   * @public
   */
  parameters?: Record<string, TargetResourceTypeParameter>;
}

/**
 * @public
 */
export interface GetTargetResourceTypeResponse {
  /**
   * <p>Information about the resource type.</p>
   * @public
   */
  targetResourceType?: TargetResourceType;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * <p>The actions.</p>
   * @public
   */
  actions?: ActionSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentResolvedTargetsRequest {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  experimentId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results,
   *       make another call with the returned nextToken value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  targetName?: string;
}

/**
 * <p>Describes a resolved target.</p>
 * @public
 */
export interface ResolvedTarget {
  /**
   * <p>The resource type of the target.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  targetName?: string;

  /**
   * <p>Information about the target.</p>
   * @public
   */
  targetInformation?: Record<string, string>;
}

/**
 * @public
 */
export interface ListExperimentResolvedTargetsResponse {
  /**
   * <p>The resolved targets.</p>
   * @public
   */
  resolvedTargets?: ResolvedTarget[];

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * <p>The experiments.</p>
   * @public
   */
  experiments?: ExperimentSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTargetAccountConfigurationsRequest {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  experimentId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTargetAccountConfigurationsResponse {
  /**
   * <p>The target account configurations.</p>
   * @public
   */
  targetAccountConfigurations?: ExperimentTargetAccountConfigurationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTemplatesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTemplatesResponse {
  /**
   * <p>The experiment templates.</p>
   * @public
   */
  experimentTemplates?: ExperimentTemplateSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTargetAccountConfigurationsRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results,
   *       make another call with the returned nextToken value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Provides a summary of a target account configuration.</p>
 * @public
 */
export interface TargetAccountConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTargetAccountConfigurationsResponse {
  /**
   * <p>The target account configurations.</p>
   * @public
   */
  targetAccountConfigurations?: TargetAccountConfigurationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTargetResourceTypesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Describes a resource type.</p>
 * @public
 */
export interface TargetResourceTypeSummary {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>A description of the resource type.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTargetResourceTypesResponse {
  /**
   * <p>The target resource types.</p>
   * @public
   */
  targetResourceTypes?: TargetResourceTypeSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Specifies experiment options for running an experiment.</p>
 * @public
 */
export interface StartExperimentExperimentOptionsInput {
  /**
   * <p>Specifies the actions mode for experiment options.</p>
   * @public
   */
  actionsMode?: ActionsMode;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The experiment options for running the experiment.</p>
   * @public
   */
  experimentOptions?: StartExperimentExperimentOptionsInput;

  /**
   * <p>The tags to apply to the experiment.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   * @public
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface StopExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   * @public
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove.</p>
   * @public
   */
  tagKeys?: string[];
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Specifies an action for an experiment template.</p>
 * @public
 */
export interface UpdateExperimentTemplateActionInputItem {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId?: string;

  /**
   * <p>A description for the action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The parameters for the action, if applicable.</p>
   * @public
   */
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   * @public
   */
  startAfter?: string[];
}

/**
 * <p>Specifies an experiment option for an experiment template.</p>
 * @public
 */
export interface UpdateExperimentTemplateExperimentOptionsInput {
  /**
   * <p>The empty target resolution mode of the experiment template.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}

/**
 * <p>Specifies the configuration for experiment logging.</p>
 * @public
 */
export interface UpdateExperimentTemplateLogConfigurationInput {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number;
}

/**
 * <p>Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.</p>
 * @public
 */
export interface UpdateExperimentTemplateStopConditionInput {
  /**
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.</p>
 * @public
 */
export interface UpdateExperimentTemplateTargetInput {
  /**
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A description for the template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: UpdateExperimentTemplateStopConditionInput[];

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, UpdateExperimentTemplateTargetInput>;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, UpdateExperimentTemplateActionInputItem>;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;

  /**
   * <p>The experiment options for the experiment template.</p>
   * @public
   */
  experimentOptions?: UpdateExperimentTemplateExperimentOptionsInput;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @public
 */
export interface UpdateTargetAccountConfigurationRequest {
  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role for the target account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration;
}
