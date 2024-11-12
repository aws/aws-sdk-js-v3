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
  description?: string | undefined;

  /**
   * <p>Indicates whether the parameter is required.</p>
   * @public
   */
  required?: boolean | undefined;
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
  resourceType?: string | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The action parameters, if applicable.</p>
   * @public
   */
  parameters?: Record<string, ActionParameter> | undefined;

  /**
   * <p>The supported targets for the action.</p>
   * @public
   */
  targets?: Record<string, ActionTarget> | undefined;

  /**
   * <p>The tags for the action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, ActionTarget> | undefined;

  /**
   * <p>The tags for the action.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  description?: string | undefined;

  /**
   * <p>The parameters for the action, if applicable.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   * @public
   */
  startAfter?: string[] | undefined;
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
  accountTargeting?: AccountTargeting | undefined;

  /**
   * <p>Specifies the empty target resolution mode for experiment options.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * <p>Specifies the CloudWatch dashboard for the experiment report.</p>
 * @public
 */
export interface ReportConfigurationCloudWatchDashboardInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.</p>
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * <p>Specifies the data sources for the experiment report.</p>
 * @public
 */
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
  /**
   * <p>The CloudWatch dashboards to include as data sources in the experiment report.</p>
   * @public
   */
  cloudWatchDashboards?: ReportConfigurationCloudWatchDashboardInput[] | undefined;
}

/**
 * <p>Specifies the S3 destination for the experiment report.</p>
 * @public
 */
export interface ReportConfigurationS3OutputInput {
  /**
   * <p>The name of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>The prefix of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Specifies the outputs for the experiment templates.</p>
 * @public
 */
export interface ExperimentTemplateReportConfigurationOutputsInput {
  /**
   * <p>The S3 destination for the experiment report.</p>
   * @public
   */
  s3Configuration?: ReportConfigurationS3OutputInput | undefined;
}

/**
 * <p>Specifies the configuration for experiment reports.</p>
 * @public
 */
export interface CreateExperimentTemplateReportConfigurationInput {
  /**
   * <p>The output destinations of the experiment report. </p>
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputsInput | undefined;

  /**
   * <p>The data sources for the experiment report.</p>
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput | undefined;

  /**
   * <p>The duration before the experiment start time for the data sources to include in the report. </p>
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * <p>The duration after the experiment end time for the data sources to include in the report. </p>
   * @public
   */
  postExperimentDuration?: string | undefined;
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
  prefix?: string | undefined;
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
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput | undefined;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput | undefined;

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
  value?: string | undefined;
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
  resourceArns?: string[] | undefined;

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[] | undefined;

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
  parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateExperimentTemplateRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

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
  targets?: Record<string, CreateExperimentTemplateTargetInput> | undefined;

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
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput | undefined;

  /**
   * <p>The experiment options for the experiment template.</p>
   * @public
   */
  experimentOptions?: CreateExperimentTemplateExperimentOptionsInput | undefined;

  /**
   * <p>The experiment report configuration for the experiment template.</p>
   * @public
   */
  experimentReportConfiguration?: CreateExperimentTemplateReportConfigurationInput | undefined;
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
  actionId?: string | undefined;

  /**
   * <p>A description for the action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters for the action.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * <p>The name of the action that must be completed before the current action starts.</p>
   * @public
   */
  startAfter?: string[] | undefined;
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
  accountTargeting?: AccountTargeting | undefined;

  /**
   * <p>The empty target resolution mode for an experiment template.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * <p>The CloudWatch dashboards to include as data sources in the experiment report.</p>
 * @public
 */
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.</p>
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * <p>Describes the data sources for the experiment report.</p>
 * @public
 */
export interface ExperimentTemplateReportConfigurationDataSources {
  /**
   * <p>The CloudWatch dashboards to include as data sources in the experiment report.</p>
   * @public
   */
  cloudWatchDashboards?: ExperimentTemplateReportConfigurationCloudWatchDashboard[] | undefined;
}

/**
 * <p>Describes the S3 destination for the experiment report.</p>
 * @public
 */
export interface ReportConfigurationS3Output {
  /**
   * <p>The name of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>The prefix of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>The output destinations of the experiment report.</p>
 * @public
 */
export interface ExperimentTemplateReportConfigurationOutputs {
  /**
   * <p>The S3 destination for the experiment report.</p>
   * @public
   */
  s3Configuration?: ReportConfigurationS3Output | undefined;
}

/**
 * <p>Describes the experiment report configuration. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-report-configuration">Experiment report configurations for AWS FIS</a>.</p>
 * @public
 */
export interface ExperimentTemplateReportConfiguration {
  /**
   * <p>Describes the output destinations of the experiment report.</p>
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputs | undefined;

  /**
   * <p>The data sources for the experiment report.</p>
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSources | undefined;

  /**
   * <p>The duration before the experiment start time for the data sources to include in the report.</p>
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * <p>The duration after the experiment end time for the data sources to include in the report.</p>
   * @public
   */
  postExperimentDuration?: string | undefined;
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
  logGroupArn?: string | undefined;
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
  bucketName?: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  prefix?: string | undefined;
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
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration | undefined;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfiguration | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number | undefined;
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
  source?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   * @public
   */
  value?: string | undefined;
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
  path?: string | undefined;

  /**
   * <p>The attribute values for the filter.</p>
   * @public
   */
  values?: string[] | undefined;
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
  resourceType?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the targets.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetFilter[] | undefined;

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode?: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description for the experiment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, ExperimentTemplateTarget> | undefined;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, ExperimentTemplateAction> | undefined;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: ExperimentTemplateStopCondition[] | undefined;

  /**
   * <p>The time the experiment template was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the experiment template was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The tags for the experiment template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: ExperimentTemplateLogConfiguration | undefined;

  /**
   * <p>The experiment options for an experiment template.</p>
   * @public
   */
  experimentOptions?: ExperimentTemplateExperimentOptions | undefined;

  /**
   * <p>The count of target account configurations for the experiment template.</p>
   * @public
   */
  targetAccountConfigurationsCount?: number | undefined;

  /**
   * <p>Describes the report configuration for the experiment template.</p>
   * @public
   */
  experimentReportConfiguration?: ExperimentTemplateReportConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
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
  clientToken?: string | undefined;

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
  description?: string | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
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
  experimentTemplate?: ExperimentTemplate | undefined;
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
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
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
  status?: ExperimentActionStatus | undefined;

  /**
   * <p>The reason for the state.</p>
   * @public
   */
  reason?: string | undefined;
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
  actionId?: string | undefined;

  /**
   * <p>The description for the action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters for the action.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * <p>The name of the action that must be completed before this action starts.</p>
   * @public
   */
  startAfter?: string[] | undefined;

  /**
   * <p>The state of the action.</p>
   * @public
   */
  state?: ExperimentActionState | undefined;

  /**
   * <p>The time that the action started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time that the action ended.</p>
   * @public
   */
  endTime?: Date | undefined;
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
  accountTargeting?: AccountTargeting | undefined;

  /**
   * <p>The empty target resolution mode for an experiment.</p>
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;

  /**
   * <p>The actions mode of the experiment that is set from the StartExperiment API command.</p>
   * @public
   */
  actionsMode?: ActionsMode | undefined;
}

/**
 * <p>Describes the S3 destination for the report.</p>
 * @public
 */
export interface ExperimentReportS3Report {
  /**
   * <p>The Amazon Resource Name (ARN) of the generated report.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The report type for the experiment report.</p>
   * @public
   */
  reportType?: string | undefined;
}

/**
 * <p>Describes the error when experiment report generation has failed.</p>
 * @public
 */
export interface ExperimentReportError {
  /**
   * <p>The error code for the failed experiment report generation.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentReportStatus = {
  cancelled: "cancelled",
  completed: "completed",
  failed: "failed",
  pending: "pending",
  running: "running",
} as const;

/**
 * @public
 */
export type ExperimentReportStatus = (typeof ExperimentReportStatus)[keyof typeof ExperimentReportStatus];

/**
 * <p>Describes the state of the experiment report generation.</p>
 * @public
 */
export interface ExperimentReportState {
  /**
   * <p>The state of the experiment report generation.</p>
   * @public
   */
  status?: ExperimentReportStatus | undefined;

  /**
   * <p>The reason for the state of the experiment report generation.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The error information of the experiment when the experiment report generation has failed.</p>
   * @public
   */
  error?: ExperimentReportError | undefined;
}

/**
 * <p>Describes the experiment report.</p>
 * @public
 */
export interface ExperimentReport {
  /**
   * <p>The state of the experiment report.</p>
   * @public
   */
  state?: ExperimentReportState | undefined;

  /**
   * <p>The S3 destination of the experiment report.</p>
   * @public
   */
  s3Reports?: ExperimentReportS3Report[] | undefined;
}

/**
 * <p>Specifies the CloudWatch dashboard to include in the experiment report. The dashboard widgets will be captured as  snapshot graphs within the report.</p>
 * @public
 */
export interface ExperimentReportConfigurationCloudWatchDashboard {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.</p>
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * <p>Describes the data sources for the experiment report.</p>
 * @public
 */
export interface ExperimentReportConfigurationDataSources {
  /**
   * <p>The CloudWatch dashboards to include as data sources in the experiment report.</p>
   * @public
   */
  cloudWatchDashboards?: ExperimentReportConfigurationCloudWatchDashboard[] | undefined;
}

/**
 * <p>Specifies the S3 destination for the experiment report.</p>
 * @public
 */
export interface ExperimentReportConfigurationOutputsS3Configuration {
  /**
   * <p>The name of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  bucketName?: string | undefined;

  /**
   * <p>The prefix of the S3 bucket where the experiment report will be stored.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Describes the output destinations of the experiment report.</p>
 * @public
 */
export interface ExperimentReportConfigurationOutputs {
  /**
   * <p>The S3 destination for the experiment report.</p>
   * @public
   */
  s3Configuration?: ExperimentReportConfigurationOutputsS3Configuration | undefined;
}

/**
 * <p>Describes the report configuration for the experiment. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-report-configuration">Experiment report configurations for AWS FIS</a>.</p>
 * @public
 */
export interface ExperimentReportConfiguration {
  /**
   * <p>The output destinations of the experiment report.</p>
   * @public
   */
  outputs?: ExperimentReportConfigurationOutputs | undefined;

  /**
   * <p>The data sources for the experiment report.</p>
   * @public
   */
  dataSources?: ExperimentReportConfigurationDataSources | undefined;

  /**
   * <p>The duration before the experiment start time for the data sources to include in the report.</p>
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * <p>The duration after the experiment end time for the data sources to include in the report.</p>
   * @public
   */
  postExperimentDuration?: string | undefined;
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
  logGroupArn?: string | undefined;
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
  bucketName?: string | undefined;

  /**
   * <p>The bucket prefix.</p>
   * @public
   */
  prefix?: string | undefined;
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
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration | undefined;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentS3LogConfiguration | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number | undefined;
}

/**
 * <p>Describes the error when an experiment has <code>failed</code>.</p>
 * @public
 */
export interface ExperimentError {
  /**
   * <p>The Amazon Web Services Account ID where the experiment failure occurred.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The error code for the failed experiment.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>Context for the section of the experiment template that failed.</p>
   * @public
   */
  location?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentStatus = {
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
  status?: ExperimentStatus | undefined;

  /**
   * <p>The reason for the state.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The error information of the experiment when the action has <code>failed</code>.</p>
   * @public
   */
  error?: ExperimentError | undefined;
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
  source?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.</p>
   * @public
   */
  value?: string | undefined;
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
  path?: string | undefined;

  /**
   * <p>The attribute values for the filter.</p>
   * @public
   */
  values?: string[] | undefined;
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
  resourceType?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTargetFilter[] | undefined;

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode?: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The state of the experiment.</p>
   * @public
   */
  state?: ExperimentState | undefined;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, ExperimentTarget> | undefined;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, ExperimentAction> | undefined;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: ExperimentStopCondition[] | undefined;

  /**
   * <p>The time that the experiment was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time that the experiment started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time that the experiment ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The tags for the experiment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: ExperimentLogConfiguration | undefined;

  /**
   * <p>The experiment options for the experiment.</p>
   * @public
   */
  experimentOptions?: ExperimentOptions | undefined;

  /**
   * <p>The count of target account configurations for the experiment.</p>
   * @public
   */
  targetAccountConfigurationsCount?: number | undefined;

  /**
   * <p>The experiment report configuration for the experiment.</p>
   * @public
   */
  experimentReportConfiguration?: ExperimentReportConfiguration | undefined;

  /**
   * <p>The experiment report for the experiment.</p>
   * @public
   */
  experimentReport?: ExperimentReport | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string | undefined;

  /**
   * <p>The state of the experiment.</p>
   * @public
   */
  state?: ExperimentState | undefined;

  /**
   * <p>The time that the experiment was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The tags for the experiment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The experiment options for the experiment.</p>
   * @public
   */
  experimentOptions?: ExperimentOptions | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string | undefined;
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
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment template.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The description of the experiment template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time that the experiment template was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time that the experiment template was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The tags for the experiment template.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  action?: Action | undefined;
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
  experiment?: Experiment | undefined;
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
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration | undefined;
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
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * @public
 */
export interface GetSafetyLeverRequest {
  /**
   * <p>
   *         The ID of the safety lever.
   *       </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SafetyLeverStatus = {
  DISENGAGED: "disengaged",
  ENGAGED: "engaged",
  ENGAGING: "engaging",
} as const;

/**
 * @public
 */
export type SafetyLeverStatus = (typeof SafetyLeverStatus)[keyof typeof SafetyLeverStatus];

/**
 * <p>
 *         Describes the state of the safety lever.
 *       </p>
 * @public
 */
export interface SafetyLeverState {
  /**
   * <p>
   *          The state of the safety lever.
   *       </p>
   * @public
   */
  status?: SafetyLeverStatus | undefined;

  /**
   * <p>
   *        The reason for the state of the safety lever.
   *       </p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>
 *         Describes a safety lever.
 *       </p>
 * @public
 */
export interface SafetyLever {
  /**
   * <p>
   *       The ID of the safety lever.
   *       </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *      The Amazon Resource Name (ARN) of the safety lever.
   *       </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *         The state of the safety lever.
   *       </p>
   * @public
   */
  state?: SafetyLeverState | undefined;
}

/**
 * @public
 */
export interface GetSafetyLeverResponse {
  /**
   * <p>
   *       Information about the safety lever.
   *       </p>
   * @public
   */
  safetyLever?: SafetyLever | undefined;
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
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
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
  description?: string | undefined;

  /**
   * <p>Indicates whether the parameter is required.</p>
   * @public
   */
  required?: boolean | undefined;
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
  resourceType?: string | undefined;

  /**
   * <p>A description of the resource type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters for the resource type.</p>
   * @public
   */
  parameters?: Record<string, TargetResourceTypeParameter> | undefined;
}

/**
 * @public
 */
export interface GetTargetResourceTypeResponse {
  /**
   * <p>Information about the resource type.</p>
   * @public
   */
  targetResourceType?: TargetResourceType | undefined;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * <p>The actions.</p>
   * @public
   */
  actions?: ActionSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  targetName?: string | undefined;
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
  resourceType?: string | undefined;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  targetName?: string | undefined;

  /**
   * <p>Information about the target.</p>
   * @public
   */
  targetInformation?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExperimentResolvedTargetsResponse {
  /**
   * <p>The resolved targets.</p>
   * @public
   */
  resolvedTargets?: ResolvedTarget[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * <p>The experiments.</p>
   * @public
   */
  experiments?: ExperimentSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTargetAccountConfigurationsResponse {
  /**
   * <p>The target account configurations.</p>
   * @public
   */
  targetAccountConfigurations?: ExperimentTargetAccountConfigurationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTemplatesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTemplatesResponse {
  /**
   * <p>The experiment templates.</p>
   * @public
   */
  experimentTemplates?: ExperimentTemplateSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  tags?: Record<string, string> | undefined;
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
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the target account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetAccountConfigurationsResponse {
  /**
   * <p>The target account configurations.</p>
   * @public
   */
  targetAccountConfigurations?: TargetAccountConfigurationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.
   *       This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetResourceTypesRequest {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  resourceType?: string | undefined;

  /**
   * <p>A description of the resource type.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetResourceTypesResponse {
  /**
   * <p>The target resource types.</p>
   * @public
   */
  targetResourceTypes?: TargetResourceTypeSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  actionsMode?: ActionsMode | undefined;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of the experiment template.</p>
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * <p>The experiment options for running the experiment.</p>
   * @public
   */
  experimentOptions?: StartExperimentExperimentOptionsInput | undefined;

  /**
   * <p>The tags to apply to the experiment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * <p>Information about the experiment.</p>
   * @public
   */
  experiment?: Experiment | undefined;
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
  experiment?: Experiment | undefined;
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
  tagKeys?: string[] | undefined;
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
  actionId?: string | undefined;

  /**
   * <p>A description for the action.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters for the action, if applicable.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * <p>The targets for the action.</p>
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * <p>The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.</p>
   * @public
   */
  startAfter?: string[] | undefined;
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
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * <p>
 *          Specifies the input for the experiment report configuration.</p>
 * @public
 */
export interface UpdateExperimentTemplateReportConfigurationInput {
  /**
   * <p>Describes the output destinations of the experiment report. </p>
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputsInput | undefined;

  /**
   * <p>The data sources for the experiment report.</p>
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput | undefined;

  /**
   * <p>The duration before the experiment start time for the data sources to include in the report. </p>
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * <p>The duration after the experiment end time for the data sources to include in the report. </p>
   * @public
   */
  postExperimentDuration?: string | undefined;
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
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput | undefined;

  /**
   * <p>The configuration for experiment logging to Amazon S3.</p>
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput | undefined;

  /**
   * <p>The schema version.</p>
   * @public
   */
  logSchemaVersion?: number | undefined;
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
  value?: string | undefined;
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
  resourceArns?: string[] | undefined;

  /**
   * <p>The tags for the target resources.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The filters to apply to identify target resources using specific attributes.</p>
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[] | undefined;

  /**
   * <p>Scopes the identified resources to a specific count or percentage.</p>
   * @public
   */
  selectionMode: string | undefined;

  /**
   * <p>The resource type parameters.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
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
  description?: string | undefined;

  /**
   * <p>The stop conditions for the experiment.</p>
   * @public
   */
  stopConditions?: UpdateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * <p>The targets for the experiment.</p>
   * @public
   */
  targets?: Record<string, UpdateExperimentTemplateTargetInput> | undefined;

  /**
   * <p>The actions for the experiment.</p>
   * @public
   */
  actions?: Record<string, UpdateExperimentTemplateActionInputItem> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The configuration for experiment logging.</p>
   * @public
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput | undefined;

  /**
   * <p>The experiment options for the experiment template.</p>
   * @public
   */
  experimentOptions?: UpdateExperimentTemplateExperimentOptionsInput | undefined;

  /**
   * <p>The experiment report configuration for the experiment template.</p>
   * @public
   */
  experimentReportConfiguration?: UpdateExperimentTemplateReportConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateResponse {
  /**
   * <p>Information about the experiment template.</p>
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * @public
 * @enum
 */
export const SafetyLeverStatusInput = {
  DISENGAGED: "disengaged",
  ENGAGED: "engaged",
} as const;

/**
 * @public
 */
export type SafetyLeverStatusInput = (typeof SafetyLeverStatusInput)[keyof typeof SafetyLeverStatusInput];

/**
 * <p>
 *         Specifies a state for a safety lever.
 *       </p>
 * @public
 */
export interface UpdateSafetyLeverStateInput {
  /**
   * <p>
   *        The updated state of the safety lever.
   *       </p>
   * @public
   */
  status: SafetyLeverStatusInput | undefined;

  /**
   * <p>
   *        The reason for updating the state of the safety lever.
   *       </p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyLeverStateRequest {
  /**
   * <p>
   *          The ID of the safety lever.
   *       </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *        The state of the safety lever.
   *       </p>
   * @public
   */
  state: UpdateSafetyLeverStateInput | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyLeverStateResponse {
  /**
   * <p>
   *          Information about the safety lever.
   *       </p>
   * @public
   */
  safetyLever?: SafetyLever | undefined;
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
  roleArn?: string | undefined;

  /**
   * <p>The description of the target account.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTargetAccountConfigurationResponse {
  /**
   * <p>Information about the target account configuration.</p>
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
}
