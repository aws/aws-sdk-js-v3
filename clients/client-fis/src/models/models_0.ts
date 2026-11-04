// smithy-typescript generated code
import type {
  AccountTargeting,
  ActionsMode,
  EmptyTargetResolutionMode,
  ExperimentActionStatus,
  ExperimentReportStatus,
  ExperimentStatus,
  SafetyLeverStatus,
  SafetyLeverStatusInput,
} from "./enums";

/**
 * Describes a parameter for an action.
 *
 * @public
 */
export interface ActionParameter {
  /**
   * The parameter description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the parameter is required.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * Describes a target for an action.
 *
 * @public
 */
export interface ActionTarget {
  /**
   * The resource type of the target.
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * Describes an action. For more information, see [FIS actions](https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html) in the *Fault Injection Service User Guide*.
 *
 * @public
 */
export interface Action {
  /**
   * The ID of the action.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the action.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The action parameters, if applicable.
   *
   * @public
   */
  parameters?: Record<string, ActionParameter> | undefined;

  /**
   * The supported targets for the action.
   *
   * @public
   */
  targets?: Record<string, ActionTarget> | undefined;

  /**
   * The tags for the action.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Provides a summary of an action.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The ID of the action.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the action.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The targets for the action.
   *
   * @public
   */
  targets?: Record<string, ActionTarget> | undefined;

  /**
   * The tags for the action.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Specifies an action for an experiment template.
 *
 * For more information, see [Actions](https://docs.aws.amazon.com/fis/latest/userguide/actions.html) in the *Fault Injection Service User Guide*.
 *
 * @public
 */
export interface CreateExperimentTemplateActionInput {
  /**
   * The ID of the action. The format of the action ID is: aws:*service-name*:*action-type*.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * A description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters for the action, if applicable.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The targets for the action.
   *
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.
   *
   * @public
   */
  startAfter?: string[] | undefined;
}

/**
 * Specifies experiment options for an experiment template.
 *
 * @public
 */
export interface CreateExperimentTemplateExperimentOptionsInput {
  /**
   * Specifies the account targeting setting for experiment options.
   *
   * @public
   */
  accountTargeting?: AccountTargeting | undefined;

  /**
   * Specifies the empty target resolution mode for experiment options.
   *
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * Specifies the CloudWatch dashboard for the experiment report.
 *
 * @public
 */
export interface ReportConfigurationCloudWatchDashboardInput {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.
   *
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * Specifies the data sources for the experiment report.
 *
 * @public
 */
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
  /**
   * The CloudWatch dashboards to include as data sources in the experiment report.
   *
   * @public
   */
  cloudWatchDashboards?: ReportConfigurationCloudWatchDashboardInput[] | undefined;
}

/**
 * Specifies the S3 destination for the experiment report.
 *
 * @public
 */
export interface ReportConfigurationS3OutputInput {
  /**
   * The name of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The prefix of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Specifies the outputs for the experiment templates.
 *
 * @public
 */
export interface ExperimentTemplateReportConfigurationOutputsInput {
  /**
   * The S3 destination for the experiment report.
   *
   * @public
   */
  s3Configuration?: ReportConfigurationS3OutputInput | undefined;
}

/**
 * Specifies the configuration for experiment reports.
 *
 * @public
 */
export interface CreateExperimentTemplateReportConfigurationInput {
  /**
   * The output destinations of the experiment report.
   *
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputsInput | undefined;

  /**
   * The data sources for the experiment report.
   *
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput | undefined;

  /**
   * The duration before the experiment start time for the data sources to include in the report.
   *
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * The duration after the experiment end time for the data sources to include in the report.
   *
   * @public
   */
  postExperimentDuration?: string | undefined;
}

/**
 * Specifies the configuration for experiment logging to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
   *
   * @public
   */
  logGroupArn: string | undefined;
}

/**
 * Specifies the configuration for experiment logging to Amazon S3.
 *
 * @public
 */
export interface ExperimentTemplateS3LogConfigurationInput {
  /**
   * The name of the destination bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The bucket prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Specifies the configuration for experiment logging.
 *
 * @public
 */
export interface CreateExperimentTemplateLogConfigurationInput {
  /**
   * The configuration for experiment logging to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput | undefined;

  /**
   * The configuration for experiment logging to Amazon S3.
   *
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  logSchemaVersion: number | undefined;
}

/**
 * Specifies a stop condition for an experiment template.
 *
 * @public
 */
export interface CreateExperimentTemplateStopConditionInput {
  /**
   * The source for the stop condition. Specify `aws:cloudwatch:alarm` if the stop condition is defined by a CloudWatch alarm. Specify `none` if there is no stop condition.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is a CloudWatch alarm.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Specifies a filter used for the target resource input in an experiment template.
 *
 * For more information, see [Resource filters](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters) in the *Fault Injection Service User Guide*.
 *
 * @public
 */
export interface ExperimentTemplateTargetInputFilter {
  /**
   * The attribute path for the filter.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The attribute values for the filter.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
 *
 * For more information, see [Targets](https://docs.aws.amazon.com/fis/latest/userguide/targets.html) in the *Fault Injection Service User Guide*.
 *
 * @public
 */
export interface CreateExperimentTemplateTargetInput {
  /**
   * The resource type. The resource type must be supported for the specified action.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The tags for the target resources.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The filters to apply to identify target resources using specific attributes.
   *
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[] | undefined;

  /**
   * Scopes the identified resources to a specific count of the resources at random, or a percentage of the resources. All identified resources are included in the target.
   *
   * - ALL - Run the action on all identified targets. This is the default.
   * - COUNT(n) - Run the action on the specified number of targets, chosen from the identified targets at random. For example, COUNT(1) selects one of the targets.
   * - PERCENT(n) - Run the action on the specified percentage of targets, chosen from the identified targets at random. For example, PERCENT(25) selects 25% of the targets.
   *
   * @public
   */
  selectionMode: string | undefined;

  /**
   * The resource type parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateExperimentTemplateRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A description for the experiment template.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The stop conditions.
   *
   * @public
   */
  stopConditions: CreateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * The targets for the experiment.
   *
   * @public
   */
  targets?: Record<string, CreateExperimentTemplateTargetInput> | undefined;

  /**
   * The actions for the experiment.
   *
   * @public
   */
  actions: Record<string, CreateExperimentTemplateActionInput> | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The tags to apply to the experiment template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for experiment logging.
   *
   * @public
   */
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput | undefined;

  /**
   * The experiment options for the experiment template.
   *
   * @public
   */
  experimentOptions?: CreateExperimentTemplateExperimentOptionsInput | undefined;

  /**
   * The experiment report configuration for the experiment template.
   *
   * @public
   */
  experimentReportConfiguration?: CreateExperimentTemplateReportConfigurationInput | undefined;
}

/**
 * Describes an action for an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateAction {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * A description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters for the action.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The targets for the action.
   *
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * The name of the action that must be completed before the current action starts.
   *
   * @public
   */
  startAfter?: string[] | undefined;
}

/**
 * Describes the experiment options for an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateExperimentOptions {
  /**
   * The account targeting setting for an experiment template.
   *
   * @public
   */
  accountTargeting?: AccountTargeting | undefined;

  /**
   * The empty target resolution mode for an experiment template.
   *
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * The CloudWatch dashboards to include as data sources in the experiment report.
 *
 * @public
 */
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.
   *
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * Describes the data sources for the experiment report.
 *
 * @public
 */
export interface ExperimentTemplateReportConfigurationDataSources {
  /**
   * The CloudWatch dashboards to include as data sources in the experiment report.
   *
   * @public
   */
  cloudWatchDashboards?: ExperimentTemplateReportConfigurationCloudWatchDashboard[] | undefined;
}

/**
 * Describes the S3 destination for the experiment report.
 *
 * @public
 */
export interface ReportConfigurationS3Output {
  /**
   * The name of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The prefix of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * The output destinations of the experiment report.
 *
 * @public
 */
export interface ExperimentTemplateReportConfigurationOutputs {
  /**
   * The S3 destination for the experiment report.
   *
   * @public
   */
  s3Configuration?: ReportConfigurationS3Output | undefined;
}

/**
 * Describes the experiment report configuration. For more information, see [Experiment report configurations for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/experiment-report-configuration).
 *
 * @public
 */
export interface ExperimentTemplateReportConfiguration {
  /**
   * Describes the output destinations of the experiment report.
   *
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputs | undefined;

  /**
   * The data sources for the experiment report.
   *
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSources | undefined;

  /**
   * The duration before the experiment start time for the data sources to include in the report.
   *
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * The duration after the experiment end time for the data sources to include in the report.
   *
   * @public
   */
  postExperimentDuration?: string | undefined;
}

/**
 * Describes the configuration for experiment logging to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
   *
   * @public
   */
  logGroupArn?: string | undefined;
}

/**
 * Describes the configuration for experiment logging to Amazon S3.
 *
 * @public
 */
export interface ExperimentTemplateS3LogConfiguration {
  /**
   * The name of the destination bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The bucket prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Describes the configuration for experiment logging.
 *
 * @public
 */
export interface ExperimentTemplateLogConfiguration {
  /**
   * The configuration for experiment logging to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration | undefined;

  /**
   * The configuration for experiment logging to Amazon S3.
   *
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfiguration | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  logSchemaVersion?: number | undefined;
}

/**
 * Describes a stop condition for an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateStopCondition {
  /**
   * The source for the stop condition.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Describes a filter used for the target resources in an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateTargetFilter {
  /**
   * The attribute path for the filter.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The attribute values for the filter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Describes a target for an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateTarget {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the targets.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The tags for the target resources.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The filters to apply to identify target resources using specific attributes.
   *
   * @public
   */
  filters?: ExperimentTemplateTargetFilter[] | undefined;

  /**
   * Scopes the identified resources to a specific count or percentage.
   *
   * @public
   */
  selectionMode?: string | undefined;

  /**
   * The resource type parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * Describes an experiment template.
 *
 * @public
 */
export interface ExperimentTemplate {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description for the experiment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The targets for the experiment.
   *
   * @public
   */
  targets?: Record<string, ExperimentTemplateTarget> | undefined;

  /**
   * The actions for the experiment.
   *
   * @public
   */
  actions?: Record<string, ExperimentTemplateAction> | undefined;

  /**
   * The stop conditions for the experiment.
   *
   * @public
   */
  stopConditions?: ExperimentTemplateStopCondition[] | undefined;

  /**
   * The time the experiment template was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time the experiment template was last updated.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The tags for the experiment template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for experiment logging.
   *
   * @public
   */
  logConfiguration?: ExperimentTemplateLogConfiguration | undefined;

  /**
   * The experiment options for an experiment template.
   *
   * @public
   */
  experimentOptions?: ExperimentTemplateExperimentOptions | undefined;

  /**
   * The count of target account configurations for the experiment template.
   *
   * @public
   */
  targetAccountConfigurationsCount?: number | undefined;

  /**
   * Describes the report configuration for the experiment template.
   *
   * @public
   */
  experimentReportConfiguration?: ExperimentTemplateReportConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateExperimentTemplateResponse {
  /**
   * Information about the experiment template.
   *
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * @public
 */
export interface CreateTargetAccountConfigurationRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The experiment template ID.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Describes a target account configuration.
 *
 * @public
 */
export interface TargetAccountConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateTargetAccountConfigurationResponse {
  /**
   * Information about the target account configuration.
   *
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentTemplateRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentTemplateResponse {
  /**
   * Information about the experiment template.
   *
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * @public
 */
export interface DeleteTargetAccountConfigurationRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetAccountConfigurationResponse {
  /**
   * Information about the target account configuration.
   *
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
}

/**
 * Describes the state of an action.
 *
 * @public
 */
export interface ExperimentActionState {
  /**
   * The state of the action.
   *
   * @public
   */
  status?: ExperimentActionStatus | undefined;

  /**
   * The reason for the state.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Describes the action for an experiment.
 *
 * @public
 */
export interface ExperimentAction {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * The description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters for the action.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The targets for the action.
   *
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * The name of the action that must be completed before this action starts.
   *
   * @public
   */
  startAfter?: string[] | undefined;

  /**
   * The state of the action.
   *
   * @public
   */
  state?: ExperimentActionState | undefined;

  /**
   * The time that the action started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time that the action ended.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Describes the options for an experiment.
 *
 * @public
 */
export interface ExperimentOptions {
  /**
   * The account targeting setting for an experiment.
   *
   * @public
   */
  accountTargeting?: AccountTargeting | undefined;

  /**
   * The empty target resolution mode for an experiment.
   *
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;

  /**
   * The actions mode of the experiment that is set from the StartExperiment API command.
   *
   * @public
   */
  actionsMode?: ActionsMode | undefined;
}

/**
 * Describes the S3 destination for the report.
 *
 * @public
 */
export interface ExperimentReportS3Report {
  /**
   * The Amazon Resource Name (ARN) of the generated report.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The report type for the experiment report.
   *
   * @public
   */
  reportType?: string | undefined;
}

/**
 * Describes the error when experiment report generation has failed.
 *
 * @public
 */
export interface ExperimentReportError {
  /**
   * The error code for the failed experiment report generation.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * Describes the state of the experiment report generation.
 *
 * @public
 */
export interface ExperimentReportState {
  /**
   * The state of the experiment report generation.
   *
   * @public
   */
  status?: ExperimentReportStatus | undefined;

  /**
   * The reason for the state of the experiment report generation.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The error information of the experiment when the experiment report generation has failed.
   *
   * @public
   */
  error?: ExperimentReportError | undefined;
}

/**
 * Describes the experiment report.
 *
 * @public
 */
export interface ExperimentReport {
  /**
   * The state of the experiment report.
   *
   * @public
   */
  state?: ExperimentReportState | undefined;

  /**
   * The S3 destination of the experiment report.
   *
   * @public
   */
  s3Reports?: ExperimentReportS3Report[] | undefined;
}

/**
 * Specifies the CloudWatch dashboard to include in the experiment report. The dashboard widgets will be captured as snapshot graphs within the report.
 *
 * @public
 */
export interface ExperimentReportConfigurationCloudWatchDashboard {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.
   *
   * @public
   */
  dashboardIdentifier?: string | undefined;
}

/**
 * Describes the data sources for the experiment report.
 *
 * @public
 */
export interface ExperimentReportConfigurationDataSources {
  /**
   * The CloudWatch dashboards to include as data sources in the experiment report.
   *
   * @public
   */
  cloudWatchDashboards?: ExperimentReportConfigurationCloudWatchDashboard[] | undefined;
}

/**
 * Specifies the S3 destination for the experiment report.
 *
 * @public
 */
export interface ExperimentReportConfigurationOutputsS3Configuration {
  /**
   * The name of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The prefix of the S3 bucket where the experiment report will be stored.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Describes the output destinations of the experiment report.
 *
 * @public
 */
export interface ExperimentReportConfigurationOutputs {
  /**
   * The S3 destination for the experiment report.
   *
   * @public
   */
  s3Configuration?: ExperimentReportConfigurationOutputsS3Configuration | undefined;
}

/**
 * Describes the report configuration for the experiment. For more information, see [Experiment report configurations for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/experiment-report-configuration).
 *
 * @public
 */
export interface ExperimentReportConfiguration {
  /**
   * The output destinations of the experiment report.
   *
   * @public
   */
  outputs?: ExperimentReportConfigurationOutputs | undefined;

  /**
   * The data sources for the experiment report.
   *
   * @public
   */
  dataSources?: ExperimentReportConfigurationDataSources | undefined;

  /**
   * The duration before the experiment start time for the data sources to include in the report.
   *
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * The duration after the experiment end time for the data sources to include in the report.
   *
   * @public
   */
  postExperimentDuration?: string | undefined;
}

/**
 * Describes the configuration for experiment logging to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface ExperimentCloudWatchLogsLogConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
   *
   * @public
   */
  logGroupArn?: string | undefined;
}

/**
 * Describes the configuration for experiment logging to Amazon S3.
 *
 * @public
 */
export interface ExperimentS3LogConfiguration {
  /**
   * The name of the destination bucket.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * The bucket prefix.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Describes the configuration for experiment logging.
 *
 * @public
 */
export interface ExperimentLogConfiguration {
  /**
   * The configuration for experiment logging to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration | undefined;

  /**
   * The configuration for experiment logging to Amazon S3.
   *
   * @public
   */
  s3Configuration?: ExperimentS3LogConfiguration | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  logSchemaVersion?: number | undefined;
}

/**
 * Describes the error when an experiment has `failed`.
 *
 * @public
 */
export interface ExperimentError {
  /**
   * The Amazon Web Services Account ID where the experiment failure occurred.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The error code for the failed experiment.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * Context for the section of the experiment template that failed.
   *
   * @public
   */
  location?: string | undefined;
}

/**
 * Describes the state of an experiment.
 *
 * @public
 */
export interface ExperimentState {
  /**
   * The state of the experiment.
   *
   * @public
   */
  status?: ExperimentStatus | undefined;

  /**
   * The reason for the state.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The error information of the experiment when the action has `failed`.
   *
   * @public
   */
  error?: ExperimentError | undefined;
}

/**
 * Describes the stop condition for an experiment.
 *
 * @public
 */
export interface ExperimentStopCondition {
  /**
   * The source for the stop condition.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Describes a filter used for the target resources in an experiment.
 *
 * @public
 */
export interface ExperimentTargetFilter {
  /**
   * The attribute path for the filter.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The attribute values for the filter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Describes a target for an experiment.
 *
 * @public
 */
export interface ExperimentTarget {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the resources.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The tags for the target resources.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The filters to apply to identify target resources using specific attributes.
   *
   * @public
   */
  filters?: ExperimentTargetFilter[] | undefined;

  /**
   * Scopes the identified resources to a specific count or percentage.
   *
   * @public
   */
  selectionMode?: string | undefined;

  /**
   * The resource type parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * Describes an experiment.
 *
 * @public
 */
export interface Experiment {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The state of the experiment.
   *
   * @public
   */
  state?: ExperimentState | undefined;

  /**
   * The targets for the experiment.
   *
   * @public
   */
  targets?: Record<string, ExperimentTarget> | undefined;

  /**
   * The actions for the experiment.
   *
   * @public
   */
  actions?: Record<string, ExperimentAction> | undefined;

  /**
   * The stop conditions for the experiment.
   *
   * @public
   */
  stopConditions?: ExperimentStopCondition[] | undefined;

  /**
   * The time that the experiment was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time that the experiment started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time that the experiment ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The tags for the experiment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for experiment logging.
   *
   * @public
   */
  logConfiguration?: ExperimentLogConfiguration | undefined;

  /**
   * The experiment options for the experiment.
   *
   * @public
   */
  experimentOptions?: ExperimentOptions | undefined;

  /**
   * The count of target account configurations for the experiment.
   *
   * @public
   */
  targetAccountConfigurationsCount?: number | undefined;

  /**
   * The experiment report configuration for the experiment.
   *
   * @public
   */
  experimentReportConfiguration?: ExperimentReportConfiguration | undefined;

  /**
   * The experiment report for the experiment.
   *
   * @public
   */
  experimentReport?: ExperimentReport | undefined;
}

/**
 * Provides a summary of an experiment.
 *
 * @public
 */
export interface ExperimentSummary {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId?: string | undefined;

  /**
   * The state of the experiment.
   *
   * @public
   */
  state?: ExperimentState | undefined;

  /**
   * The time that the experiment was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The tags for the experiment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The experiment options for the experiment.
   *
   * @public
   */
  experimentOptions?: ExperimentOptions | undefined;
}

/**
 * Describes a target account configuration for an experiment.
 *
 * @public
 */
export interface ExperimentTargetAccountConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Provides a summary of a target account configuration.
 *
 * @public
 */
export interface ExperimentTargetAccountConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Provides a summary of an experiment template.
 *
 * @public
 */
export interface ExperimentTemplateSummary {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment template.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The description of the experiment template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time that the experiment template was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time that the experiment template was last updated.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The tags for the experiment template.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetActionRequest {
  /**
   * The ID of the action.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetActionResponse {
  /**
   * Information about the action.
   *
   * @public
   */
  action?: Action | undefined;
}

/**
 * @public
 */
export interface GetExperimentRequest {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentResponse {
  /**
   * Information about the experiment.
   *
   * @public
   */
  experiment?: Experiment | undefined;
}

/**
 * @public
 */
export interface GetExperimentTargetAccountConfigurationRequest {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  experimentId: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentTargetAccountConfigurationResponse {
  /**
   * Information about the target account configuration.
   *
   * @public
   */
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration | undefined;
}

/**
 * @public
 */
export interface GetExperimentTemplateRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetExperimentTemplateResponse {
  /**
   * Information about the experiment template.
   *
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * @public
 */
export interface GetSafetyLeverRequest {
  /**
   * The ID of the safety lever.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Describes the state of the safety lever.
 *
 * @public
 */
export interface SafetyLeverState {
  /**
   * The state of the safety lever.
   *
   * @public
   */
  status?: SafetyLeverStatus | undefined;

  /**
   * The reason for the state of the safety lever.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Describes a safety lever.
 *
 * @public
 */
export interface SafetyLever {
  /**
   * The ID of the safety lever.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the safety lever.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The state of the safety lever.
   *
   * @public
   */
  state?: SafetyLeverState | undefined;
}

/**
 * @public
 */
export interface GetSafetyLeverResponse {
  /**
   * Information about the safety lever.
   *
   * @public
   */
  safetyLever?: SafetyLever | undefined;
}

/**
 * @public
 */
export interface GetTargetAccountConfigurationRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface GetTargetAccountConfigurationResponse {
  /**
   * Information about the target account configuration.
   *
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
}

/**
 * @public
 */
export interface GetTargetResourceTypeRequest {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType: string | undefined;
}

/**
 * Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution.
 *
 * @public
 */
export interface TargetResourceTypeParameter {
  /**
   * A description of the parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the parameter is required.
   *
   * @public
   */
  required?: boolean | undefined;
}

/**
 * Describes a resource type.
 *
 * @public
 */
export interface TargetResourceType {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * A description of the resource type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters for the resource type.
   *
   * @public
   */
  parameters?: Record<string, TargetResourceTypeParameter> | undefined;
}

/**
 * @public
 */
export interface GetTargetResourceTypeResponse {
  /**
   * Information about the resource type.
   *
   * @public
   */
  targetResourceType?: TargetResourceType | undefined;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * The actions.
   *
   * @public
   */
  actions?: ActionSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentResolvedTargetsRequest {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  experimentId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the target.
   *
   * @public
   */
  targetName?: string | undefined;
}

/**
 * Describes a resolved target.
 *
 * @public
 */
export interface ResolvedTarget {
  /**
   * The resource type of the target.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The name of the target.
   *
   * @public
   */
  targetName?: string | undefined;

  /**
   * Information about the target.
   *
   * @public
   */
  targetInformation?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExperimentResolvedTargetsResponse {
  /**
   * The resolved targets.
   *
   * @public
   */
  resolvedTargets?: ResolvedTarget[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * The experiments.
   *
   * @public
   */
  experiments?: ExperimentSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTargetAccountConfigurationsRequest {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  experimentId: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTargetAccountConfigurationsResponse {
  /**
   * The target account configurations.
   *
   * @public
   */
  targetAccountConfigurations?: ExperimentTargetAccountConfigurationSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTemplatesRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentTemplatesResponse {
  /**
   * The experiment templates.
   *
   * @public
   */
  experimentTemplates?: ExperimentTemplateSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTargetAccountConfigurationsRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides a summary of a target account configuration.
 *
 * @public
 */
export interface TargetAccountConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetAccountConfigurationsResponse {
  /**
   * The target account configurations.
   *
   * @public
   */
  targetAccountConfigurations?: TargetAccountConfigurationSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetResourceTypesRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a resource type.
 *
 * @public
 */
export interface TargetResourceTypeSummary {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * A description of the resource type.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetResourceTypesResponse {
  /**
   * The target resource types.
   *
   * @public
   */
  targetResourceTypes?: TargetResourceTypeSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies experiment options for running an experiment.
 *
 * @public
 */
export interface StartExperimentExperimentOptionsInput {
  /**
   * Specifies the actions mode for experiment options.
   *
   * @public
   */
  actionsMode?: ActionsMode | undefined;
}

/**
 * @public
 */
export interface StartExperimentRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The experiment options for running the experiment.
   *
   * @public
   */
  experimentOptions?: StartExperimentExperimentOptionsInput | undefined;

  /**
   * The tags to apply to the experiment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartExperimentResponse {
  /**
   * Information about the experiment.
   *
   * @public
   */
  experiment?: Experiment | undefined;
}

/**
 * @public
 */
export interface StopExperimentRequest {
  /**
   * The ID of the experiment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopExperimentResponse {
  /**
   * Information about the experiment.
   *
   * @public
   */
  experiment?: Experiment | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags for the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove.
   *
   * @public
   */
  tagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Specifies an action for an experiment template.
 *
 * @public
 */
export interface UpdateExperimentTemplateActionInputItem {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * A description for the action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters for the action, if applicable.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;

  /**
   * The targets for the action.
   *
   * @public
   */
  targets?: Record<string, string> | undefined;

  /**
   * The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.
   *
   * @public
   */
  startAfter?: string[] | undefined;
}

/**
 * Specifies an experiment option for an experiment template.
 *
 * @public
 */
export interface UpdateExperimentTemplateExperimentOptionsInput {
  /**
   * The empty target resolution mode of the experiment template.
   *
   * @public
   */
  emptyTargetResolutionMode?: EmptyTargetResolutionMode | undefined;
}

/**
 * Specifies the input for the experiment report configuration.
 *
 * @public
 */
export interface UpdateExperimentTemplateReportConfigurationInput {
  /**
   * Describes the output destinations of the experiment report.
   *
   * @public
   */
  outputs?: ExperimentTemplateReportConfigurationOutputsInput | undefined;

  /**
   * The data sources for the experiment report.
   *
   * @public
   */
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput | undefined;

  /**
   * The duration before the experiment start time for the data sources to include in the report.
   *
   * @public
   */
  preExperimentDuration?: string | undefined;

  /**
   * The duration after the experiment end time for the data sources to include in the report.
   *
   * @public
   */
  postExperimentDuration?: string | undefined;
}

/**
 * Specifies the configuration for experiment logging.
 *
 * @public
 */
export interface UpdateExperimentTemplateLogConfigurationInput {
  /**
   * The configuration for experiment logging to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput | undefined;

  /**
   * The configuration for experiment logging to Amazon S3.
   *
   * @public
   */
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput | undefined;

  /**
   * The schema version.
   *
   * @public
   */
  logSchemaVersion?: number | undefined;
}

/**
 * Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
 *
 * @public
 */
export interface UpdateExperimentTemplateStopConditionInput {
  /**
   * The source for the stop condition. Specify `aws:cloudwatch:alarm` if the stop condition is defined by a CloudWatch alarm. Specify `none` if there is no stop condition.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch alarm.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both.
 *
 * @public
 */
export interface UpdateExperimentTemplateTargetInput {
  /**
   * The resource type. The resource type must be supported for the specified action.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the targets.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The tags for the target resources.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The filters to apply to identify target resources using specific attributes.
   *
   * @public
   */
  filters?: ExperimentTemplateTargetInputFilter[] | undefined;

  /**
   * Scopes the identified resources to a specific count or percentage.
   *
   * @public
   */
  selectionMode: string | undefined;

  /**
   * The resource type parameters.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A description for the template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The stop conditions for the experiment.
   *
   * @public
   */
  stopConditions?: UpdateExperimentTemplateStopConditionInput[] | undefined;

  /**
   * The targets for the experiment.
   *
   * @public
   */
  targets?: Record<string, UpdateExperimentTemplateTargetInput> | undefined;

  /**
   * The actions for the experiment.
   *
   * @public
   */
  actions?: Record<string, UpdateExperimentTemplateActionInputItem> | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The configuration for experiment logging.
   *
   * @public
   */
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput | undefined;

  /**
   * The experiment options for the experiment template.
   *
   * @public
   */
  experimentOptions?: UpdateExperimentTemplateExperimentOptionsInput | undefined;

  /**
   * The experiment report configuration for the experiment template.
   *
   * @public
   */
  experimentReportConfiguration?: UpdateExperimentTemplateReportConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdateExperimentTemplateResponse {
  /**
   * Information about the experiment template.
   *
   * @public
   */
  experimentTemplate?: ExperimentTemplate | undefined;
}

/**
 * Specifies a state for a safety lever.
 *
 * @public
 */
export interface UpdateSafetyLeverStateInput {
  /**
   * The updated state of the safety lever.
   *
   * @public
   */
  status: SafetyLeverStatusInput | undefined;

  /**
   * The reason for updating the state of the safety lever.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyLeverStateRequest {
  /**
   * The ID of the safety lever.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The state of the safety lever.
   *
   * @public
   */
  state: UpdateSafetyLeverStateInput | undefined;
}

/**
 * @public
 */
export interface UpdateSafetyLeverStateResponse {
  /**
   * Information about the safety lever.
   *
   * @public
   */
  safetyLever?: SafetyLever | undefined;
}

/**
 * @public
 */
export interface UpdateTargetAccountConfigurationRequest {
  /**
   * The ID of the experiment template.
   *
   * @public
   */
  experimentTemplateId: string | undefined;

  /**
   * The Amazon Web Services account ID of the target account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The description of the target account.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTargetAccountConfigurationResponse {
  /**
   * Information about the target account configuration.
   *
   * @public
   */
  targetAccountConfiguration?: TargetAccountConfiguration | undefined;
}
