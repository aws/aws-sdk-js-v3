// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { FisServiceException as __BaseException } from "./FisServiceException";

/**
 * <p>Describes a parameter for an action.</p>
 */
export interface ActionParameter {
  /**
   * <p>The parameter description.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether the parameter is required.</p>
   */
  required?: boolean;
}

export namespace ActionParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target for an action.</p>
 */
export interface ActionTarget {
  /**
   * <p>The resource type of the target.</p>
   */
  resourceType?: string;
}

export namespace ActionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface Action {
  /**
   * <p>The ID of the action.</p>
   */
  id?: string;

  /**
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * <p>The action parameters, if applicable.</p>
   */
  parameters?: { [key: string]: ActionParameter };

  /**
   * <p>The supported targets for the action.</p>
   */
  targets?: { [key: string]: ActionTarget };

  /**
   * <p>The tags for the action.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Action {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of an action.</p>
 */
export interface ActionSummary {
  /**
   * <p>The ID of the action.</p>
   */
  id?: string;

  /**
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * <p>The targets for the action.</p>
   */
  targets?: { [key: string]: ActionTarget };

  /**
   * <p>The tags for the action.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ActionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionSummary): any => ({
    ...obj,
  });
}

/**
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
 * <p>Specifies an action for an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface CreateExperimentTemplateActionInput {
  /**
   * <p>The ID of the action. The format of the action ID is: aws:<i>service-name</i>:<i>action-type</i>.</p>
   */
  actionId: string | undefined;

  /**
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * <p>The parameters for the action, if applicable.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The targets for the action.</p>
   */
  targets?: { [key: string]: string };

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
}

export namespace CreateExperimentTemplateActionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateActionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn: string | undefined;
}

export namespace ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateCloudWatchLogsLogConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentTemplateS3LogConfigurationInput {
  /**
   * <p>The name of the destination bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

export namespace ExperimentTemplateS3LogConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateS3LogConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for experiment logging.</p>
 */
export interface CreateExperimentTemplateLogConfigurationInput {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * <p>The schema version.</p>
   */
  logSchemaVersion: number | undefined;
}

export namespace CreateExperimentTemplateLogConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateLogConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a stop condition for an experiment template.</p>
 */
export interface CreateExperimentTemplateStopConditionInput {
  /**
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is
   *          a CloudWatch alarm.</p>
   */
  value?: string;
}

export namespace CreateExperimentTemplateStopConditionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateStopConditionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a filter used for the target resource input in an experiment template.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface ExperimentTemplateTargetInputFilter {
  /**
   * <p>The attribute path for the filter.</p>
   */
  path: string | undefined;

  /**
   * <p>The attribute values for the filter.</p>
   */
  values: string[] | undefined;
}

export namespace ExperimentTemplateTargetInputFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateTargetInputFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or
 *          at least one resource tag. You cannot specify both ARNs and tags.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 */
export interface CreateExperimentTemplateTargetInput {
  /**
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
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
   */
  selectionMode: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   */
  parameters?: { [key: string]: string };
}

export namespace CreateExperimentTemplateTargetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateTargetInput): any => ({
    ...obj,
  });
}

export interface CreateExperimentTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A description for the experiment template.</p>
   */
  description: string | undefined;

  /**
   * <p>The stop conditions.</p>
   */
  stopConditions: CreateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * <p>The targets for the experiment.</p>
   */
  targets?: { [key: string]: CreateExperimentTemplateTargetInput };

  /**
   * <p>The actions for the experiment.</p>
   */
  actions: { [key: string]: CreateExperimentTemplateActionInput } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The tags to apply to the experiment template.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
}

export namespace CreateExperimentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an action for an experiment template.</p>
 */
export interface ExperimentTemplateAction {
  /**
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * <p>The parameters for the action.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The targets for the action.</p>
   */
  targets?: { [key: string]: string };

  /**
   * <p>The name of the action that must be completed before the current action starts.</p>
   */
  startAfter?: string[];
}

export namespace ExperimentTemplateAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn?: string;
}

export namespace ExperimentTemplateCloudWatchLogsLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateCloudWatchLogsLogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentTemplateS3LogConfiguration {
  /**
   * <p>The name of the destination bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

export namespace ExperimentTemplateS3LogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateS3LogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging.</p>
 */
export interface ExperimentTemplateLogConfiguration {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfiguration;

  /**
   * <p>The schema version.</p>
   */
  logSchemaVersion?: number;
}

export namespace ExperimentTemplateLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateLogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a stop condition for an experiment template.</p>
 */
export interface ExperimentTemplateStopCondition {
  /**
   * <p>The source for the stop condition.</p>
   */
  source?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   */
  value?: string;
}

export namespace ExperimentTemplateStopCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateStopCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a filter used for the target resources in an experiment template.</p>
 */
export interface ExperimentTemplateTargetFilter {
  /**
   * <p>The attribute path for the filter.</p>
   */
  path?: string;

  /**
   * <p>The attribute values for the filter.</p>
   */
  values?: string[];
}

export namespace ExperimentTemplateTargetFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateTargetFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target for an experiment template.</p>
 */
export interface ExperimentTemplateTarget {
  /**
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTemplateTargetFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode?: string;

  /**
   * <p>The resource type parameters.</p>
   */
  parameters?: { [key: string]: string };
}

export namespace ExperimentTemplateTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an experiment template.</p>
 */
export interface ExperimentTemplate {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id?: string;

  /**
   * <p>The description for the experiment template.</p>
   */
  description?: string;

  /**
   * <p>The targets for the experiment.</p>
   */
  targets?: { [key: string]: ExperimentTemplateTarget };

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: { [key: string]: ExperimentTemplateAction };

  /**
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: ExperimentTemplateStopCondition[];

  /**
   * <p>The time the experiment template was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the experiment template was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role.</p>
   */
  roleArn?: string;

  /**
   * <p>The tags for the experiment template.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentTemplateLogConfiguration;
}

export namespace ExperimentTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplate): any => ({
    ...obj,
  });
}

export interface CreateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

export namespace CreateExperimentTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExperimentTemplateResponse): any => ({
    ...obj,
  });
}

/**
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

export interface DeleteExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;
}

export namespace DeleteExperimentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

export namespace DeleteExperimentTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExperimentTemplateResponse): any => ({
    ...obj,
  });
}

export enum ExperimentActionStatus {
  cancelled = "cancelled",
  completed = "completed",
  failed = "failed",
  initiating = "initiating",
  pending = "pending",
  running = "running",
  stopped = "stopped",
  stopping = "stopping",
}

/**
 * <p>Describes the state of an action.</p>
 */
export interface ExperimentActionState {
  /**
   * <p>The state of the action.</p>
   */
  status?: ExperimentActionStatus | string;

  /**
   * <p>The reason for the state.</p>
   */
  reason?: string;
}

export namespace ExperimentActionState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentActionState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the action for an experiment.</p>
 */
export interface ExperimentAction {
  /**
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * <p>The description for the action.</p>
   */
  description?: string;

  /**
   * <p>The parameters for the action.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The targets for the action.</p>
   */
  targets?: { [key: string]: string };

  /**
   * <p>The name of the action that must be completed before this action starts.</p>
   */
  startAfter?: string[];

  /**
   * <p>The state of the action.</p>
   */
  state?: ExperimentActionState;

  /**
   * <p>The time that the action started.</p>
   */
  startTime?: Date;

  /**
   * <p>The time that the action ended.</p>
   */
  endTime?: Date;
}

export namespace ExperimentAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentCloudWatchLogsLogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn?: string;
}

export namespace ExperimentCloudWatchLogsLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentCloudWatchLogsLogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging to Amazon S3.</p>
 */
export interface ExperimentS3LogConfiguration {
  /**
   * <p>The name of the destination bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The bucket prefix.</p>
   */
  prefix?: string;
}

export namespace ExperimentS3LogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentS3LogConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration for experiment logging.</p>
 */
export interface ExperimentLogConfiguration {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentS3LogConfiguration;

  /**
   * <p>The schema version.</p>
   */
  logSchemaVersion?: number;
}

export namespace ExperimentLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentLogConfiguration): any => ({
    ...obj,
  });
}

export enum ExperimentStatus {
  completed = "completed",
  failed = "failed",
  initiating = "initiating",
  pending = "pending",
  running = "running",
  stopped = "stopped",
  stopping = "stopping",
}

/**
 * <p>Describes the state of an experiment.</p>
 */
export interface ExperimentState {
  /**
   * <p>The state of the experiment.</p>
   */
  status?: ExperimentStatus | string;

  /**
   * <p>The reason for the state.</p>
   */
  reason?: string;
}

export namespace ExperimentState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the stop condition for an experiment.</p>
 */
export interface ExperimentStopCondition {
  /**
   * <p>The source for the stop condition.</p>
   */
  source?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   */
  value?: string;
}

export namespace ExperimentStopCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentStopCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a filter used for the target resources in an experiment.</p>
 */
export interface ExperimentTargetFilter {
  /**
   * <p>The attribute path for the filter.</p>
   */
  path?: string;

  /**
   * <p>The attribute values for the filter.</p>
   */
  values?: string[];
}

export namespace ExperimentTargetFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTargetFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target for an experiment.</p>
 */
export interface ExperimentTarget {
  /**
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTargetFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode?: string;

  /**
   * <p>The resource type parameters.</p>
   */
  parameters?: { [key: string]: string };
}

export namespace ExperimentTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an experiment.</p>
 */
export interface Experiment {
  /**
   * <p>The ID of the experiment.</p>
   */
  id?: string;

  /**
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The state of the experiment.</p>
   */
  state?: ExperimentState;

  /**
   * <p>The targets for the experiment.</p>
   */
  targets?: { [key: string]: ExperimentTarget };

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: { [key: string]: ExperimentAction };

  /**
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: ExperimentStopCondition[];

  /**
   * <p>The time that the experiment was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time that the experiment started.</p>
   */
  startTime?: Date;

  /**
   * <p>The time that the experiment ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The tags for the experiment.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentLogConfiguration;
}

export namespace Experiment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of an experiment.</p>
 */
export interface ExperimentSummary {
  /**
   * <p>The ID of the experiment.</p>
   */
  id?: string;

  /**
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId?: string;

  /**
   * <p>The state of the experiment.</p>
   */
  state?: ExperimentState;

  /**
   * <p>The time that the experiment was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The tags for the experiment.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ExperimentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of an experiment template.</p>
 */
export interface ExperimentTemplateSummary {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id?: string;

  /**
   * <p>The description of the experiment template.</p>
   */
  description?: string;

  /**
   * <p>The time that the experiment template was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time that the experiment template was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The tags for the experiment template.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ExperimentTemplateSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExperimentTemplateSummary): any => ({
    ...obj,
  });
}

export interface GetActionRequest {
  /**
   * <p>The ID of the action.</p>
   */
  id: string | undefined;
}

export namespace GetActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActionRequest): any => ({
    ...obj,
  });
}

export interface GetActionResponse {
  /**
   * <p>Information about the action.</p>
   */
  action?: Action;
}

export namespace GetActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActionResponse): any => ({
    ...obj,
  });
}

export interface GetExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

export namespace GetExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentRequest): any => ({
    ...obj,
  });
}

export interface GetExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export namespace GetExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentResponse): any => ({
    ...obj,
  });
}

export interface GetExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;
}

export namespace GetExperimentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

export namespace GetExperimentTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExperimentTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetTargetResourceTypeRequest {
  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

export namespace GetTargetResourceTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTargetResourceTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters for a resource type. Use parameters to determine which tasks are
 *           identified during target resolution.</p>
 */
export interface TargetResourceTypeParameter {
  /**
   * <p>A description of the parameter.</p>
   */
  description?: string;

  /**
   * <p>Indicates whether the parameter is required.</p>
   */
  required?: boolean;
}

export namespace TargetResourceTypeParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetResourceTypeParameter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource type.</p>
 */
export interface TargetResourceType {
  /**
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>A description of the resource type.</p>
   */
  description?: string;

  /**
   * <p>The parameters for the resource type.</p>
   */
  parameters?: { [key: string]: TargetResourceTypeParameter };
}

export namespace TargetResourceType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetResourceType): any => ({
    ...obj,
  });
}

export interface GetTargetResourceTypeResponse {
  /**
   * <p>Information about the resource type.</p>
   */
  targetResourceType?: TargetResourceType;
}

export namespace GetTargetResourceTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTargetResourceTypeResponse): any => ({
    ...obj,
  });
}

export interface ListActionsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListActionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActionsRequest): any => ({
    ...obj,
  });
}

export interface ListActionsResponse {
  /**
   * <p>The actions.</p>
   */
  actions?: ActionSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListActionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActionsResponse): any => ({
    ...obj,
  });
}

export interface ListExperimentsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListExperimentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsRequest): any => ({
    ...obj,
  });
}

export interface ListExperimentsResponse {
  /**
   * <p>The experiments.</p>
   */
  experiments?: ExperimentSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListExperimentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj,
  });
}

export interface ListExperimentTemplatesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListExperimentTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListExperimentTemplatesResponse {
  /**
   * <p>The experiment templates.</p>
   */
  experimentTemplates?: ExperimentTemplateSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListExperimentTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExperimentTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTargetResourceTypesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListTargetResourceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetResourceTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource type.</p>
 */
export interface TargetResourceTypeSummary {
  /**
   * <p>The resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>A description of the resource type.</p>
   */
  description?: string;
}

export namespace TargetResourceTypeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetResourceTypeSummary): any => ({
    ...obj,
  });
}

export interface ListTargetResourceTypesResponse {
  /**
   * <p>The target resource types.</p>
   */
  targetResourceTypes?: TargetResourceTypeSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTargetResourceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTargetResourceTypesResponse): any => ({
    ...obj,
  });
}

export interface StartExperimentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the experiment template.</p>
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The tags to apply to the experiment.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StartExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExperimentRequest): any => ({
    ...obj,
  });
}

export interface StartExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export namespace StartExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExperimentResponse): any => ({
    ...obj,
  });
}

export interface StopExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

export namespace StopExperimentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopExperimentRequest): any => ({
    ...obj,
  });
}

export interface StopExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export namespace StopExperimentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopExperimentResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove.</p>
   */
  tagKeys?: string[];
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

/**
 * <p>Specifies an action for an experiment template.</p>
 */
export interface UpdateExperimentTemplateActionInputItem {
  /**
   * <p>The ID of the action.</p>
   */
  actionId?: string;

  /**
   * <p>A description for the action.</p>
   */
  description?: string;

  /**
   * <p>The parameters for the action, if applicable.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The targets for the action.</p>
   */
  targets?: { [key: string]: string };

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
}

export namespace UpdateExperimentTemplateActionInputItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateActionInputItem): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for experiment logging.</p>
 */
export interface UpdateExperimentTemplateLogConfigurationInput {
  /**
   * <p>The configuration for experiment logging to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

  /**
   * <p>The schema version.</p>
   */
  logSchemaVersion?: number;
}

export namespace UpdateExperimentTemplateLogConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateLogConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.</p>
 */
export interface UpdateExperimentTemplateStopConditionInput {
  /**
   * <p>The source for the stop condition. Specify <code>aws:cloudwatch:alarm</code> if the stop
   *          condition is defined by a CloudWatch alarm. Specify <code>none</code> if there is no stop
   *          condition.</p>
   */
  source: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm.</p>
   */
  value?: string;
}

export namespace UpdateExperimentTemplateStopConditionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateStopConditionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.</p>
 */
export interface UpdateExperimentTemplateTargetInput {
  /**
   * <p>The resource type. The resource type must be supported for the specified action.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The tags for the target resources.</p>
   */
  resourceTags?: { [key: string]: string };

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   */
  filters?: ExperimentTemplateTargetInputFilter[];

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   */
  selectionMode: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   */
  parameters?: { [key: string]: string };
}

export namespace UpdateExperimentTemplateTargetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateTargetInput): any => ({
    ...obj,
  });
}

export interface UpdateExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;

  /**
   * <p>A description for the template.</p>
   */
  description?: string;

  /**
   * <p>The stop conditions for the experiment.</p>
   */
  stopConditions?: UpdateExperimentTemplateStopConditionInput[];

  /**
   * <p>The targets for the experiment.</p>
   */
  targets?: { [key: string]: UpdateExperimentTemplateTargetInput };

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: { [key: string]: UpdateExperimentTemplateActionInputItem };

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
}

export namespace UpdateExperimentTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

export namespace UpdateExperimentTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExperimentTemplateResponse): any => ({
    ...obj,
  });
}
