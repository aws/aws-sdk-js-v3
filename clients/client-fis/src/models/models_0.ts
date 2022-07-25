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

/**
 * <p>Describes a target for an action.</p>
 */
export interface ActionTarget {
  /**
   * <p>The resource type of the target.</p>
   */
  resourceType?: string;
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
  parameters?: Record<string, ActionParameter>;

  /**
   * <p>The supported targets for the action.</p>
   */
  targets?: Record<string, ActionTarget>;

  /**
   * <p>The tags for the action.</p>
   */
  tags?: Record<string, string>;
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
  targets?: Record<string, ActionTarget>;

  /**
   * <p>The tags for the action.</p>
   */
  tags?: Record<string, string>;
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
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
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
  resourceTags?: Record<string, string>;

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
  parameters?: Record<string, string>;
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
  targets?: Record<string, CreateExperimentTemplateTargetInput>;

  /**
   * <p>The actions for the experiment.</p>
   */
  actions: Record<string, CreateExperimentTemplateActionInput> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The tags to apply to the experiment template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
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
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts.</p>
   */
  startAfter?: string[];
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
  resourceTags?: Record<string, string>;

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
  parameters?: Record<string, string>;
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
  targets?: Record<string, ExperimentTemplateTarget>;

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, ExperimentTemplateAction>;

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
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentTemplateLogConfiguration;
}

export interface CreateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
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

export interface DeleteExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
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
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

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

/**
 * <p>Describes the configuration for experiment logging to Amazon CloudWatch Logs.</p>
 */
export interface ExperimentCloudWatchLogsLogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.</p>
   */
  logGroupArn?: string;
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
  resourceTags?: Record<string, string>;

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
  parameters?: Record<string, string>;
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
  targets?: Record<string, ExperimentTarget>;

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, ExperimentAction>;

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
  tags?: Record<string, string>;

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: ExperimentLogConfiguration;
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
  tags?: Record<string, string>;
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
  tags?: Record<string, string>;
}

export interface GetActionRequest {
  /**
   * <p>The ID of the action.</p>
   */
  id: string | undefined;
}

export interface GetActionResponse {
  /**
   * <p>Information about the action.</p>
   */
  action?: Action;
}

export interface GetExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

export interface GetExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export interface GetExperimentTemplateRequest {
  /**
   * <p>The ID of the experiment template.</p>
   */
  id: string | undefined;
}

export interface GetExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

export interface GetTargetResourceTypeRequest {
  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
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
  parameters?: Record<string, TargetResourceTypeParameter>;
}

export interface GetTargetResourceTypeResponse {
  /**
   * <p>Information about the resource type.</p>
   */
  targetResourceType?: TargetResourceType;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
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
  tags?: Record<string, string>;
}

export interface StartExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export interface StopExperimentRequest {
  /**
   * <p>The ID of the experiment.</p>
   */
  id: string | undefined;
}

export interface StopExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   */
  experiment?: Experiment;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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
  parameters?: Record<string, string>;

  /**
   * <p>The targets for the action.</p>
   */
  targets?: Record<string, string>;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   */
  startAfter?: string[];
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
  resourceTags?: Record<string, string>;

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
  parameters?: Record<string, string>;
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
  targets?: Record<string, UpdateExperimentTemplateTargetInput>;

  /**
   * <p>The actions for the experiment.</p>
   */
  actions?: Record<string, UpdateExperimentTemplateActionInputItem>;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The configuration for experiment logging.</p>
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
}

export interface UpdateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   */
  experimentTemplate?: ExperimentTemplate;
}

/**
 * @internal
 */
export const ActionParameterFilterSensitiveLog = (obj: ActionParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionTargetFilterSensitiveLog = (obj: ActionTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionSummaryFilterSensitiveLog = (obj: ActionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateActionInputFilterSensitiveLog = (
  obj: CreateExperimentTemplateActionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateCloudWatchLogsLogConfigurationInputFilterSensitiveLog = (
  obj: ExperimentTemplateCloudWatchLogsLogConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateS3LogConfigurationInputFilterSensitiveLog = (
  obj: ExperimentTemplateS3LogConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateLogConfigurationInputFilterSensitiveLog = (
  obj: CreateExperimentTemplateLogConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateStopConditionInputFilterSensitiveLog = (
  obj: CreateExperimentTemplateStopConditionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateTargetInputFilterFilterSensitiveLog = (
  obj: ExperimentTemplateTargetInputFilter
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateTargetInputFilterSensitiveLog = (
  obj: CreateExperimentTemplateTargetInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateRequestFilterSensitiveLog = (obj: CreateExperimentTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateActionFilterSensitiveLog = (obj: ExperimentTemplateAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateCloudWatchLogsLogConfigurationFilterSensitiveLog = (
  obj: ExperimentTemplateCloudWatchLogsLogConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateS3LogConfigurationFilterSensitiveLog = (
  obj: ExperimentTemplateS3LogConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateLogConfigurationFilterSensitiveLog = (obj: ExperimentTemplateLogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateStopConditionFilterSensitiveLog = (obj: ExperimentTemplateStopCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateTargetFilterFilterSensitiveLog = (obj: ExperimentTemplateTargetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateTargetFilterSensitiveLog = (obj: ExperimentTemplateTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateFilterSensitiveLog = (obj: ExperimentTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExperimentTemplateResponseFilterSensitiveLog = (obj: CreateExperimentTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentTemplateRequestFilterSensitiveLog = (obj: DeleteExperimentTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExperimentTemplateResponseFilterSensitiveLog = (obj: DeleteExperimentTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentActionStateFilterSensitiveLog = (obj: ExperimentActionState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentActionFilterSensitiveLog = (obj: ExperimentAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentCloudWatchLogsLogConfigurationFilterSensitiveLog = (
  obj: ExperimentCloudWatchLogsLogConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentS3LogConfigurationFilterSensitiveLog = (obj: ExperimentS3LogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentLogConfigurationFilterSensitiveLog = (obj: ExperimentLogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentStateFilterSensitiveLog = (obj: ExperimentState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentStopConditionFilterSensitiveLog = (obj: ExperimentStopCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTargetFilterFilterSensitiveLog = (obj: ExperimentTargetFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTargetFilterSensitiveLog = (obj: ExperimentTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentFilterSensitiveLog = (obj: Experiment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentSummaryFilterSensitiveLog = (obj: ExperimentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentTemplateSummaryFilterSensitiveLog = (obj: ExperimentTemplateSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetActionRequestFilterSensitiveLog = (obj: GetActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetActionResponseFilterSensitiveLog = (obj: GetActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentRequestFilterSensitiveLog = (obj: GetExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentResponseFilterSensitiveLog = (obj: GetExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentTemplateRequestFilterSensitiveLog = (obj: GetExperimentTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExperimentTemplateResponseFilterSensitiveLog = (obj: GetExperimentTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTargetResourceTypeRequestFilterSensitiveLog = (obj: GetTargetResourceTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetResourceTypeParameterFilterSensitiveLog = (obj: TargetResourceTypeParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetResourceTypeFilterSensitiveLog = (obj: TargetResourceType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTargetResourceTypeResponseFilterSensitiveLog = (obj: GetTargetResourceTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionsRequestFilterSensitiveLog = (obj: ListActionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionsResponseFilterSensitiveLog = (obj: ListActionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsRequestFilterSensitiveLog = (obj: ListExperimentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentsResponseFilterSensitiveLog = (obj: ListExperimentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentTemplatesRequestFilterSensitiveLog = (obj: ListExperimentTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExperimentTemplatesResponseFilterSensitiveLog = (obj: ListExperimentTemplatesResponse): any => ({
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetResourceTypesRequestFilterSensitiveLog = (obj: ListTargetResourceTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetResourceTypeSummaryFilterSensitiveLog = (obj: TargetResourceTypeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetResourceTypesResponseFilterSensitiveLog = (obj: ListTargetResourceTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExperimentRequestFilterSensitiveLog = (obj: StartExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExperimentResponseFilterSensitiveLog = (obj: StartExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopExperimentRequestFilterSensitiveLog = (obj: StopExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopExperimentResponseFilterSensitiveLog = (obj: StopExperimentResponse): any => ({
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
export const UpdateExperimentTemplateActionInputItemFilterSensitiveLog = (
  obj: UpdateExperimentTemplateActionInputItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentTemplateLogConfigurationInputFilterSensitiveLog = (
  obj: UpdateExperimentTemplateLogConfigurationInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentTemplateStopConditionInputFilterSensitiveLog = (
  obj: UpdateExperimentTemplateStopConditionInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentTemplateTargetInputFilterSensitiveLog = (
  obj: UpdateExperimentTemplateTargetInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentTemplateRequestFilterSensitiveLog = (obj: UpdateExperimentTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExperimentTemplateResponseFilterSensitiveLog = (obj: UpdateExperimentTemplateResponse): any => ({
  ...obj,
});
