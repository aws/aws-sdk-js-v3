// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FisServiceException as __BaseException } from "./FisServiceException";

/**
 * @public
 * <p>Describes a parameter for an action.</p>
 */
export interface ActionParameter {
  /**
   * @public
   * <p>The parameter description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates whether the parameter is required.</p>
   */
  required?: boolean;
}

/**
 * @public
 * <p>Describes a target for an action.</p>
 */
export interface ActionTarget {
  /**
   * @public
   * <p>The resource type of the target.</p>
   */
  resourceType?: string;
}

/**
 * @public
 * <p>Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface Action {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The action parameters, if applicable.</p>
   */
  parameters?: Record<string, ActionParameter>;

  /**
   * @public
   * <p>The supported targets for the action.</p>
   */
  targets?: Record<string, ActionTarget>;

  /**
   * @public
   * <p>The tags for the action.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Provides a summary of an action.</p>
 */
export interface ActionSummary {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, ActionTarget>;

  /**
   * @public
   * <p>The tags for the action.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The request could not be processed because of a conflict.</p>
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
 * @public
 * <p>Specifies an action for an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface CreateExperimentTemplateActionInput {
  /**
   * @public
   * <p>The ID of the action. The format of the action ID is: aws:<i>service-name</i>:<i>action-type</i>.</p>
   */
  actionId: string | undefined;

  /**
   * @public
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters for the action, if applicable.</p>
   */
  parameters?: Record<string, string>;

  /**
   * @public
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * @public
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
}

/**
 * @public
 * <p>Specifies the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn: string | undefined;
}

/**
 * @public
 * <p>Specifies the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentTemplateS3LogConfigurationInput {
  /**
   * @public
   * <p>The name of the destination bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Specifies the configuration for experiment logging.</p>
 */
export interface CreateExperimentTemplateLogConfigurationInput {
  /**
   * @public
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * @public
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * @public
   * <p>The schema version.</p>
   */
  logSchemaVersion: number | undefined;
}

/**
 * @public
 * <p>Specifies a stop condition for an experiment template.</p>
 */
export interface CreateExperimentTemplateStopConditionInput {
  /**
   * @public
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is
   *          a CloudWatch alarm.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Specifies a filter used for the target resource input in an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface ExperimentTemplateTargetInputFilter {
  /**
   * @public
   * <p>The attribute path for the filter.</p>
   */
  path: string | undefined;

  /**
   * @public
   * <p>The attribute values for the filter.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or
 *          at least one resource tag. You cannot specify both ARNs and tags.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface CreateExperimentTemplateTargetInput {
  /**
   * @public
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTemplateTargetInputFilter[];

  /**
   * @public
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
   */
  selectionMode: string | undefined;

  /**
   * @public
   * <p>The resource type parameters.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateExperimentTemplateRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A description for the experiment template.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The stop conditions.</p>
   */
  stopConditions: CreateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * @public
   * <p>The targets for the experiment.</p>
   */
  targets?: Record<string, CreateExperimentTemplateTargetInput>;

  /**
   * @public
   * <p>The actions for the experiment.</p>
   */
  actions: Record<string, CreateExperimentTemplateActionInput> | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the experiment template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
}

/**
 * @public
 * <p>Describes an action for an experiment template.</p>
 */
export interface ExperimentTemplateAction {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * @public
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters for the action.</p>
   */
  parameters?: Record<string, string>;

  /**
   * @public
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * @public
   * <p>The name of the action that must be completed before the current action starts.</p>
   */
  startAfter?: string[];
}

/**
 * @public
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn?: string;
}

/**
 * @public
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentTemplateS3LogConfiguration {
  /**
   * @public
   * <p>The name of the destination bucket.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Describes the configuration for experiment logging.</p>
 */
export interface ExperimentTemplateLogConfiguration {
  /**
   * @public
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;

  /**
   * @public
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfiguration;

  /**
   * @public
   * <p>The schema version.</p>
   */
  logSchemaVersion?: number;
}

/**
 * @public
 * <p>Describes a stop condition for an experiment template.</p>
 */
export interface ExperimentTemplateStopCondition {
  /**
   * @public
   * <p>The source for the stop condition.</p>
   */
  source?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Describes a filter used for the target resources in an experiment template.</p>
 */
export interface ExperimentTemplateTargetFilter {
  /**
   * @public
   * <p>The attribute path for the filter.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The attribute values for the filter.</p>
   */
  values?: string[];
}

/**
 * @public
 * <p>Describes a target for an experiment template.</p>
 */
export interface ExperimentTemplateTarget {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTemplateTargetFilter[];

  /**
   * @public
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode?: string;

  /**
   * @public
   * <p>The resource type parameters.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 * <p>Describes an experiment template.</p>
 */
export interface ExperimentTemplate {
  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The description for the experiment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The targets for the experiment.</p>
   */
  targets?: Record<string, ExperimentTemplateTarget>;

  /**
   * @public
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, ExperimentTemplateAction>;

  /**
   * @public
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: ExperimentTemplateStopCondition[];

  /**
   * @public
   * <p>The time the experiment template was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time the experiment template was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The tags for the experiment template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentTemplateLogConfiguration;
}

/**
 * @public
 */
export interface CreateExperimentTemplateResponse {
  /**
   * @public
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @public
 * <p>The specified resource cannot be found.</p>
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
 * @public
 * <p>You have exceeded your service quota.</p>
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
 * @public
 * <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
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
export interface DeleteExperimentTemplateRequest {
  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentTemplateResponse {
  /**
   * @public
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
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
  stopped: "stopped",
  stopping: "stopping",
} as const;

/**
 * @public
 */
export type ExperimentActionStatus = (typeof ExperimentActionStatus)[keyof typeof ExperimentActionStatus];

/**
 * @public
 * <p>Describes the state of an action.</p>
 */
export interface ExperimentActionState {
  /**
   * @public
   * <p>The state of the action.</p>
   */
  status?: ExperimentActionStatus;

  /**
   * @public
   * <p>The reason for the state.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Describes the action for an experiment.</p>
 */
export interface ExperimentAction {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * @public
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters for the action.</p>
   */
  parameters?: Record<string, string>;

  /**
   * @public
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * @public
   * <p>The name of the action that must be completed before this action starts.</p>
   */
  startAfter?: string[];

  /**
   * @public
   * <p>The state of the action.</p>
   */
  state?: ExperimentActionState;

  /**
   * @public
   * <p>The time that the action started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time that the action ended.</p>
   */
  endTime?: Date;
}

/**
 * @public
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentCloudWatchLogsLogConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn?: string;
}

/**
 * @public
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentS3LogConfiguration {
  /**
   * @public
   * <p>The name of the destination bucket.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Describes the configuration for experiment logging.</p>
 */
export interface ExperimentLogConfiguration {
  /**
   * @public
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;

  /**
   * @public
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentS3LogConfiguration;

  /**
   * @public
   * <p>The schema version.</p>
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
 * @public
 * <p>Describes the state of an experiment.</p>
 */
export interface ExperimentState {
  /**
   * @public
   * <p>The state of the experiment.</p>
   */
  status?: ExperimentStatus;

  /**
   * @public
   * <p>The reason for the state.</p>
   */
  reason?: string;
}

/**
 * @public
 * <p>Describes the stop condition for an experiment.</p>
 */
export interface ExperimentStopCondition {
  /**
   * @public
   * <p>The source for the stop condition.</p>
   */
  source?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Describes a filter used for the target resources in an experiment.</p>
 */
export interface ExperimentTargetFilter {
  /**
   * @public
   * <p>The attribute path for the filter.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The attribute values for the filter.</p>
   */
  values?: string[];
}

/**
 * @public
 * <p>Describes a target for an experiment.</p>
 */
export interface ExperimentTarget {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTargetFilter[];

  /**
   * @public
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode?: string;

  /**
   * @public
   * <p>The resource type parameters.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 * <p>Describes an experiment.</p>
 */
export interface Experiment {
  /**
   * @public
   * <p>The ID of the experiment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The state of the experiment.</p>
   */
  state?: ExperimentState;

  /**
   * @public
   * <p>The targets for the experiment.</p>
   */
  targets?: Record<string, ExperimentTarget>;

  /**
   * @public
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, ExperimentAction>;

  /**
   * @public
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: ExperimentStopCondition[];

  /**
   * @public
   * <p>The time that the experiment was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time that the experiment started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time that the experiment ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The tags for the experiment.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentLogConfiguration;
}

/**
 * @public
 * <p>Provides a summary of an experiment.</p>
 */
export interface ExperimentSummary {
  /**
   * @public
   * <p>The ID of the experiment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId?: string;

  /**
   * @public
   * <p>The state of the experiment.</p>
   */
  state?: ExperimentState;

  /**
   * @public
   * <p>The time that the experiment was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The tags for the experiment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Provides a summary of an experiment template.</p>
 */
export interface ExperimentTemplateSummary {
  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The description of the experiment template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time that the experiment template was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The time that the experiment template was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * @public
   * <p>The tags for the experiment template.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetActionRequest {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetActionResponse {
  /**
   * @public
   * <p>Information about the action.</p>
   */
  action?: Action;
}

/**
 * @public
 */
export interface GetExperimentRequest {
  /**
   * @public
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentResponse {
  /**
   * @public
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface GetExperimentTemplateRequest {
  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentTemplateResponse {
  /**
   * @public
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @public
 */
export interface GetTargetResourceTypeRequest {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

/**
 * @public
 * <p>Describes the parameters for a resource type. Use parameters to determine which tasks are
 *           identified during target resolution.</p>
 */
export interface TargetResourceTypeParameter {
  /**
   * @public
   * <p>A description of the parameter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Indicates whether the parameter is required.</p>
   */
  required?: boolean;
}

/**
 * @public
 * <p>Describes a resource type.</p>
 */
export interface TargetResourceType {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>A description of the resource type.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters for the resource type.</p>
   */
  parameters?: Record<string, TargetResourceTypeParameter>;
}

/**
 * @public
 */
export interface GetTargetResourceTypeResponse {
  /**
   * @public
   * <p>Information about the resource type.</p>
   */
  targetResourceType?: TargetResourceType;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * @public
   * <p>The actions.</p>
   */
  actions?: ActionSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * @public
   * <p>The experiments.</p>
   */
  experiments?: ExperimentSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTemplatesRequest {
  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListExperimentTemplatesResponse {
  /**
   * @public
   * <p>The experiment templates.</p>
   */
  experimentTemplates?: ExperimentTemplateSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTargetResourceTypesRequest {
  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes a resource type.</p>
 */
export interface TargetResourceTypeSummary {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>A description of the resource type.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTargetResourceTypesResponse {
  /**
   * @public
   * <p>The target resource types.</p>
   */
  targetResourceTypes?: TargetResourceTypeSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId: string | undefined;

  /**
   * @public
   * <p>The tags to apply to the experiment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * @public
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface StopExperimentRequest {
  /**
   * @public
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopExperimentResponse {
  /**
   * @public
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags for the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove.</p>
   */
  tagKeys?: string[];
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Specifies an action for an experiment template.</p>
 */
export interface UpdateExperimentTemplateActionInputItem {
  /**
   * @public
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * @public
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters for the action, if applicable.</p>
   */
  parameters?: Record<string, string>;

  /**
   * @public
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * @public
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
}

/**
 * @public
 * <p>Specifies the configuration for experiment logging.</p>
 */
export interface UpdateExperimentTemplateLogConfigurationInput {
  /**
   * @public
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * @public
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * @public
   * <p>The schema version.</p>
   */
  logSchemaVersion?: number;
}

/**
 * @public
 * <p>Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.</p>
 */
export interface UpdateExperimentTemplateStopConditionInput {
  /**
   * @public
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.</p>
 */
export interface UpdateExperimentTemplateTargetInput {
  /**
   * @public
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * @public
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTemplateTargetInputFilter[];

  /**
   * @public
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode: string | undefined;

  /**
   * @public
   * <p>The resource type parameters.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateRequest {
  /**
   * @public
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A description for the template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: UpdateExperimentTemplateStopConditionInput[];

  /**
   * @public
   * <p>The targets for the experiment.</p>
   */
  targets?: Record<string, UpdateExperimentTemplateTargetInput>;

  /**
   * @public
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, UpdateExperimentTemplateActionInputItem>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateResponse {
  /**
   * @public
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}
