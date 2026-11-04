// smithy-typescript generated code
import type { OperatorType, TaskStatus } from "./enums";

/**
 * A value or list of parameter values.
 *
 * @public
 */
export interface ParameterValue {
  /**
   * The ID of the parameter value.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The field value, expressed as a String.
   *
   * @public
   */
  stringValue: string | undefined;
}

/**
 * Contains the parameters for ActivatePipeline.
 *
 * @public
 */
export interface ActivatePipelineInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * A list of parameter values to pass to the pipeline at activation.
   *
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;

  /**
   * The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.
   *
   * @public
   */
  startTimestamp?: Date | undefined;
}

/**
 * Contains the output of ActivatePipeline.
 *
 * @public
 */
export interface ActivatePipelineOutput {}

/**
 * Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline. For more information, see [Controlling User Access to Pipelines](http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key name of a tag defined by a user. For more information, see [Controlling User Access to Pipelines](http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide*.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The optional value portion of a tag defined by a user. For more information, see [Controlling User Access to Pipelines](http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide*.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Contains the parameters for AddTags.
 *
 * @public
 */
export interface AddTagsInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The tags to add, as key/value pairs.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * Contains the output of AddTags.
 *
 * @public
 */
export interface AddTagsOutput {}

/**
 * Contains the parameters for CreatePipeline.
 *
 * @public
 */
export interface CreatePipelineInput {
  /**
   * The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline. You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this parameter to ensure idempotency during repeated calls to `CreatePipeline`. For example, if the first call to `CreatePipeline` does not succeed, you can pass in the same unique identifier and pipeline name combination on a subsequent call to `CreatePipeline`. `CreatePipeline` ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the name and unique identifier combination is scoped to the AWS account or IAM user credentials.
   *
   * @public
   */
  uniqueId: string | undefined;

  /**
   * The description for the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines. For more information, see [Controlling User Access to Pipelines](http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains the output of CreatePipeline.
 *
 * @public
 */
export interface CreatePipelineOutput {
  /**
   * The ID that AWS Data Pipeline assigns the newly created pipeline. For example, `df-06372391ZG65EXAMPLE`.
   *
   * @public
   */
  pipelineId: string | undefined;
}

/**
 * Contains the parameters for DeactivatePipeline.
 *
 * @public
 */
export interface DeactivatePipelineInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * Indicates whether to cancel any running objects. The default is true, which sets the state of any running objects to `CANCELED`. If this value is false, the pipeline is deactivated after all running objects finish.
   *
   * @public
   */
  cancelActive?: boolean | undefined;
}

/**
 * Contains the output of DeactivatePipeline.
 *
 * @public
 */
export interface DeactivatePipelineOutput {}

/**
 * Contains the parameters for DeletePipeline.
 *
 * @public
 */
export interface DeletePipelineInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;
}

/**
 * Contains the parameters for DescribeObjects.
 *
 * @public
 */
export interface DescribeObjectsInput {
  /**
   * The ID of the pipeline that contains the object definitions.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to `DescribeObjects`.
   *
   * @public
   */
  objectIds: string[] | undefined;

  /**
   * Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.
   *
   * @public
   */
  evaluateExpressions?: boolean | undefined;

  /**
   * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call `DescribeObjects` with the marker value from the previous call to retrieve the next set of results.
   *
   * @public
   */
  marker?: string | undefined;
}

/**
 * A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (`StringValue`) or a reference to another object (`RefValue`) but not as both.
 *
 * @public
 */
export interface Field {
  /**
   * The field identifier.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The field value, expressed as a String.
   *
   * @public
   */
  stringValue?: string | undefined;

  /**
   * The field value, expressed as the identifier of another object.
   *
   * @public
   */
  refValue?: string | undefined;
}

/**
 * Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
 *
 * @public
 */
export interface PipelineObject {
  /**
   * The ID of the object.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the object.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Key-value pairs that define the properties of the object.
   *
   * @public
   */
  fields: Field[] | undefined;
}

/**
 * Contains the output of DescribeObjects.
 *
 * @public
 */
export interface DescribeObjectsOutput {
  /**
   * An array of object definitions.
   *
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * The starting point for the next page of results. To view the next page of results, call `DescribeObjects` again with this marker value. If the value is null, there are no more results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Indicates whether there are more results to return.
   *
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * Contains the parameters for DescribePipelines.
 *
 * @public
 */
export interface DescribePipelinesInput {
  /**
   * The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call. To obtain pipeline IDs, call ListPipelines.
   *
   * @public
   */
  pipelineIds: string[] | undefined;
}

/**
 * Contains pipeline metadata.
 *
 * @public
 */
export interface PipelineDescription {
  /**
   * The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form `df-297EG78HU43EEXAMPLE`.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.
   *
   * @public
   */
  fields: Field[] | undefined;

  /**
   * Description of the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of tags to associated with a pipeline. Tags let you control access to pipelines. For more information, see [Controlling User Access to Pipelines](http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the *AWS Data Pipeline Developer Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains the output of DescribePipelines.
 *
 * @public
 */
export interface DescribePipelinesOutput {
  /**
   * An array of descriptions for the specified pipelines.
   *
   * @public
   */
  pipelineDescriptionList: PipelineDescription[] | undefined;
}

/**
 * Contains the parameters for EvaluateExpression.
 *
 * @public
 */
export interface EvaluateExpressionInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The ID of the object.
   *
   * @public
   */
  objectId: string | undefined;

  /**
   * The expression to evaluate.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * Contains the output of EvaluateExpression.
 *
 * @public
 */
export interface EvaluateExpressionOutput {
  /**
   * The evaluated expression.
   *
   * @public
   */
  evaluatedExpression: string | undefined;
}

/**
 * Contains the parameters for GetPipelineDefinition.
 *
 * @public
 */
export interface GetPipelineDefinitionInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The version of the pipeline definition to retrieve. Set this parameter to `latest` (default) to use the last definition saved to the pipeline or `active` to use the last definition that was activated.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * The attributes allowed or specified with a parameter object.
 *
 * @public
 */
export interface ParameterAttribute {
  /**
   * The field identifier.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The field value, expressed as a String.
   *
   * @public
   */
  stringValue: string | undefined;
}

/**
 * Contains information about a parameter object.
 *
 * @public
 */
export interface ParameterObject {
  /**
   * The ID of the parameter object.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The attributes of the parameter object.
   *
   * @public
   */
  attributes: ParameterAttribute[] | undefined;
}

/**
 * Contains the output of GetPipelineDefinition.
 *
 * @public
 */
export interface GetPipelineDefinitionOutput {
  /**
   * The objects defined in the pipeline.
   *
   * @public
   */
  pipelineObjects?: PipelineObject[] | undefined;

  /**
   * The parameter objects used in the pipeline definition.
   *
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * The parameter values used in the pipeline definition.
   *
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * Contains the parameters for ListPipelines.
 *
 * @public
 */
export interface ListPipelinesInput {
  /**
   * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call `ListPipelines` with the marker value from the previous call to retrieve the next set of results.
   *
   * @public
   */
  marker?: string | undefined;
}

/**
 * Contains the name and identifier of a pipeline.
 *
 * @public
 */
export interface PipelineIdName {
  /**
   * The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form `df-297EG78HU43EEXAMPLE`.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains the output of ListPipelines.
 *
 * @public
 */
export interface ListPipelinesOutput {
  /**
   * The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call DescribePipelines and GetPipelineDefinition.
   *
   * @public
   */
  pipelineIdList: PipelineIdName[] | undefined;

  /**
   * The starting point for the next page of results. To view the next page of results, call `ListPipelinesOutput` again with this marker value. If the value is null, there are no more results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Indicates whether there are more results that can be obtained by a subsequent call.
   *
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see [Instance Metadata](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html) in the *Amazon Elastic Compute Cloud User Guide.* Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.
 *
 * @public
 */
export interface InstanceIdentity {
  /**
   * A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.
   *
   * @public
   */
  document?: string | undefined;

  /**
   * A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.
   *
   * @public
   */
  signature?: string | undefined;
}

/**
 * Contains the parameters for PollForTask.
 *
 * @public
 */
export interface PollForTaskInput {
  /**
   * The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for `workerGroup` in the call to `PollForTask`. There are no wildcard values permitted in `workerGroup`; the string must be an exact, case-sensitive, match.
   *
   * @public
   */
  workerGroup: string | undefined;

  /**
   * The public DNS name of the calling task runner.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using `http://169.254.169.254/latest/meta-data/instance-id`. For more information, see [Instance Metadata](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html) in the *Amazon Elastic Compute Cloud User Guide.* Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.
   *
   * @public
   */
  instanceIdentity?: InstanceIdentity | undefined;
}

/**
 * Contains information about a pipeline task that is assigned to a task runner.
 *
 * @public
 */
export interface TaskObject {
  /**
   * An internal identifier for the task. This ID is passed to the SetTaskStatus and ReportTaskProgress actions.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The ID of the pipeline that provided the task.
   *
   * @public
   */
  pipelineId?: string | undefined;

  /**
   * The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.
   *
   * @public
   */
  attemptId?: string | undefined;

  /**
   * Connection information for the location where the task runner will publish the output of the task.
   *
   * @public
   */
  objects?: Record<string, PipelineObject> | undefined;
}

/**
 * Contains the output of PollForTask.
 *
 * @public
 */
export interface PollForTaskOutput {
  /**
   * The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is `taskId`, which contains an identifier for the task being assigned. The calling task runner uses `taskId` in subsequent calls to ReportTaskProgress and SetTaskStatus.
   *
   * @public
   */
  taskObject?: TaskObject | undefined;
}

/**
 * Contains the parameters for PutPipelineDefinition.
 *
 * @public
 */
export interface PutPipelineDefinitionInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The objects that define the pipeline. These objects overwrite the existing pipeline definition.
   *
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * The parameter objects used with the pipeline.
   *
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * The parameter values used with the pipeline.
   *
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The identifier of the object that contains the validation error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A description of the validation error.
   *
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
 *
 * @public
 */
export interface ValidationWarning {
  /**
   * The identifier of the object that contains the validation warning.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A description of the validation warning.
   *
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * Contains the output of PutPipelineDefinition.
 *
 * @public
 */
export interface PutPipelineDefinitionOutput {
  /**
   * The validation errors that are associated with the objects defined in `pipelineObjects`.
   *
   * @public
   */
  validationErrors?: ValidationError[] | undefined;

  /**
   * The validation warnings that are associated with the objects defined in `pipelineObjects`.
   *
   * @public
   */
  validationWarnings?: ValidationWarning[] | undefined;

  /**
   * Indicates whether there were validation errors, and the pipeline definition is stored but cannot be activated until you correct the pipeline and call `PutPipelineDefinition` to commit the corrected pipeline.
   *
   * @public
   */
  errored: boolean | undefined;
}

/**
 * Contains a logical operation for comparing the value of a field with a specified value.
 *
 * @public
 */
export interface Operator {
  /**
   * The logical operation to be performed: equal (`EQ`), equal reference (`REF_EQ`), less than or equal (`LE`), greater than or equal (`GE`), or between (`BETWEEN`). Equal reference (`REF_EQ`) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below.
   *
   * The comparison operators EQ and REF_EQ act on the following fields:
   *
   * - name
   * - @sphere
   * - parent
   * - @componentParent
   * - @instanceParent
   * - @status
   * - @scheduledStartTime
   * - @scheduledEndTime
   * - @actualStartTime
   * - @actualEndTime
   *
   *
   *
   * The comparison operators `GE`, `LE`, and `BETWEEN` act on the following fields:
   *
   * - @scheduledStartTime
   * - @scheduledEndTime
   * - @actualStartTime
   * - @actualEndTime
   *
   * Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".
   *
   * @public
   */
  type?: OperatorType | undefined;

  /**
   * The value that the actual field value will be compared with.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * A comparision that is used to determine whether a query should return this object.
 *
 * @public
 */
export interface Selector {
  /**
   * The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.
   *
   * @public
   */
  fieldName?: string | undefined;

  /**
   * Contains a logical operation for comparing the value of a field with a specified value.
   *
   * @public
   */
  operator?: Operator | undefined;
}

/**
 * Defines the query to run against an object.
 *
 * @public
 */
export interface Query {
  /**
   * List of selectors that define the query. An object must satisfy all of the selectors to match the query.
   *
   * @public
   */
  selectors?: Selector[] | undefined;
}

/**
 * Contains the parameters for QueryObjects.
 *
 * @public
 */
export interface QueryObjectsInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The query that defines the objects to be returned. The `Query` object can contain a maximum of ten selectors. The conditions in the query are limited to top-level String fields in the object. These filters can be applied to components, instances, and attempts.
   *
   * @public
   */
  query?: Query | undefined;

  /**
   * Indicates whether the query applies to components or instances. The possible values are: `COMPONENT`, `INSTANCE`, and `ATTEMPT`.
   *
   * @public
   */
  sphere: string | undefined;

  /**
   * The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call `QueryObjects` with the marker value from the previous call to retrieve the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The maximum number of object names that `QueryObjects` will return in a single call. The default value is 100.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * Contains the output of QueryObjects.
 *
 * @public
 */
export interface QueryObjectsOutput {
  /**
   * The identifiers that match the query selectors.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * The starting point for the next page of results. To view the next page of results, call `QueryObjects` again with this marker value. If the value is null, there are no more results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Indicates whether there are more results that can be obtained by a subsequent call.
   *
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * Contains the parameters for RemoveTags.
 *
 * @public
 */
export interface RemoveTagsInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The keys of the tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * Contains the output of RemoveTags.
 *
 * @public
 */
export interface RemoveTagsOutput {}

/**
 * Contains the parameters for ReportTaskProgress.
 *
 * @public
 */
export interface ReportTaskProgressInput {
  /**
   * The ID of the task assigned to the task runner. This value is provided in the response for PollForTask.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Key-value pairs that define the properties of the ReportTaskProgressInput object.
   *
   * @public
   */
  fields?: Field[] | undefined;
}

/**
 * Contains the output of ReportTaskProgress.
 *
 * @public
 */
export interface ReportTaskProgressOutput {
  /**
   * If true, the calling task runner should cancel processing of the task. The task runner does not need to call SetTaskStatus for canceled tasks.
   *
   * @public
   */
  canceled: boolean | undefined;
}

/**
 * Contains the parameters for ReportTaskRunnerHeartbeat.
 *
 * @public
 */
export interface ReportTaskRunnerHeartbeatInput {
  /**
   * The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application. If you have written a custom task runner, you should assign a unique identifier for the task runner.
   *
   * @public
   */
  taskrunnerId: string | undefined;

  /**
   * The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for `workerGroup`. There are no wildcard values permitted in `workerGroup`; the string must be an exact, case-sensitive, match.
   *
   * @public
   */
  workerGroup?: string | undefined;

  /**
   * The public DNS name of the task runner.
   *
   * @public
   */
  hostname?: string | undefined;
}

/**
 * Contains the output of ReportTaskRunnerHeartbeat.
 *
 * @public
 */
export interface ReportTaskRunnerHeartbeatOutput {
  /**
   * Indicates whether the calling task runner should terminate.
   *
   * @public
   */
  terminate: boolean | undefined;
}

/**
 * Contains the parameters for SetStatus.
 *
 * @public
 */
export interface SetStatusInput {
  /**
   * The ID of the pipeline that contains the objects.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.
   *
   * @public
   */
  objectIds: string[] | undefined;

  /**
   * The status to be set on all the objects specified in `objectIds`. For components, use `PAUSE` or `RESUME`. For instances, use `TRY_CANCEL`, `RERUN`, or `MARK_FINISHED`.
   *
   * @public
   */
  status: string | undefined;
}

/**
 * Contains the parameters for SetTaskStatus.
 *
 * @public
 */
export interface SetTaskStatusInput {
  /**
   * The ID of the task assigned to the task runner. This value is provided in the response for PollForTask.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * If `FINISHED`, the task successfully completed. If `FAILED`, the task ended unsuccessfully. Preconditions use false.
   *
   * @public
   */
  taskStatus: TaskStatus | undefined;

  /**
   * If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object. It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.
   *
   * @public
   */
  errorId?: string | undefined;

  /**
   * If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.
   *
   * @public
   */
  errorStackTrace?: string | undefined;
}

/**
 * Contains the output of SetTaskStatus.
 *
 * @public
 */
export interface SetTaskStatusOutput {}

/**
 * Contains the parameters for ValidatePipelineDefinition.
 *
 * @public
 */
export interface ValidatePipelineDefinitionInput {
  /**
   * The ID of the pipeline.
   *
   * @public
   */
  pipelineId: string | undefined;

  /**
   * The objects that define the pipeline changes to validate against the pipeline.
   *
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * The parameter objects used with the pipeline.
   *
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * The parameter values used with the pipeline.
   *
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * Contains the output of ValidatePipelineDefinition.
 *
 * @public
 */
export interface ValidatePipelineDefinitionOutput {
  /**
   * Any validation errors that were found.
   *
   * @public
   */
  validationErrors?: ValidationError[] | undefined;

  /**
   * Any validation warnings that were found.
   *
   * @public
   */
  validationWarnings?: ValidationWarning[] | undefined;

  /**
   * Indicates whether there were validation errors.
   *
   * @public
   */
  errored: boolean | undefined;
}
