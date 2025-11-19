// smithy-typescript generated code
import { OperatorType, TaskStatus } from "./enums";

/**
 * <p>A value or list of parameter values. </p>
 * @public
 */
export interface ParameterValue {
  /**
   * <p>The ID of the parameter value.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   * @public
   */
  stringValue: string | undefined;
}

/**
 * <p>Contains the parameters for ActivatePipeline.</p>
 * @public
 */
export interface ActivatePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>A list of parameter values to pass to the pipeline at activation.</p>
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;

  /**
   * <p>The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.</p>
   * @public
   */
  startTimestamp?: Date | undefined;
}

/**
 * <p>Contains the output of ActivatePipeline.</p>
 * @public
 */
export interface ActivatePipelineOutput {}

/**
 * <p>Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline.
 *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key name of a tag defined by a user.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The optional value portion of a tag defined by a user.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains the parameters for AddTags.</p>
 * @public
 */
export interface AddTagsInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The tags to add, as key/value pairs.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * <p>Contains the output of AddTags.</p>
 * @public
 */
export interface AddTagsOutput {}

/**
 * <p>Contains the parameters for CreatePipeline.</p>
 * @public
 */
export interface CreatePipelineInput {
  /**
   * <p>The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account,
   *             because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline.
   *             You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this
   *             parameter to ensure idempotency during repeated calls to <code>CreatePipeline</code>. For example, if the
   *             first call to <code>CreatePipeline</code> does not succeed, you can pass in the same unique identifier and
   *             pipeline name combination on a subsequent call to <code>CreatePipeline</code>. <code>CreatePipeline</code>
   *             ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not
   *             created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the
   *             name and unique identifier combination is scoped to the AWS account or IAM user credentials.</p>
   * @public
   */
  uniqueId: string | undefined;

  /**
   * <p>The description for the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a>
   *             in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains the output of CreatePipeline.</p>
 * @public
 */
export interface CreatePipelineOutput {
  /**
   * <p>The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.</p>
   * @public
   */
  pipelineId: string | undefined;
}

/**
 * <p>Contains the parameters for DeactivatePipeline.</p>
 * @public
 */
export interface DeactivatePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>Indicates whether to cancel any running objects. The default is true,
   *           which sets the state of any running objects to <code>CANCELED</code>.
   *           If this value is false, the pipeline is deactivated after all
   *           running objects finish.</p>
   * @public
   */
  cancelActive?: boolean | undefined;
}

/**
 * <p>Contains the output of DeactivatePipeline.</p>
 * @public
 */
export interface DeactivatePipelineOutput {}

/**
 * <p>Contains the parameters for DeletePipeline.</p>
 * @public
 */
export interface DeletePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;
}

/**
 * <p>Contains the parameters for DescribeObjects.</p>
 * @public
 */
export interface DescribeObjectsInput {
  /**
   * <p>The ID of the pipeline that contains the object definitions.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.</p>
   * @public
   */
  objectIds: string[] | undefined;

  /**
   * <p>Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.</p>
   * @public
   */
  evaluateExpressions?: boolean | undefined;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>DescribeObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   * @public
   */
  marker?: string | undefined;
}

/**
 * <p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>
 * @public
 */
export interface Field {
  /**
   * <p>The field identifier.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>The field value, expressed as the identifier of another object.</p>
   * @public
   */
  refValue?: string | undefined;
}

/**
 * <p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>
 * @public
 */
export interface PipelineObject {
  /**
   * <p>The ID of the object.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the object.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Key-value pairs that define the properties of the object.</p>
   * @public
   */
  fields: Field[] | undefined;
}

/**
 * <p>Contains the output of DescribeObjects.</p>
 * @public
 */
export interface DescribeObjectsOutput {
  /**
   * <p>An array of object definitions.</p>
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Indicates whether there are more results to return.</p>
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * <p>Contains the parameters for DescribePipelines.</p>
 * @public
 */
export interface DescribePipelinesInput {
  /**
   * <p>The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call.
   *             To obtain pipeline IDs, call <a>ListPipelines</a>.</p>
   * @public
   */
  pipelineIds: string[] | undefined;
}

/**
 * <p>Contains pipeline metadata.</p>
 * @public
 */
export interface PipelineDescription {
  /**
   * <p>The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   * @public
   */
  fields: Field[] | undefined;

  /**
   * <p>Description of the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains the output of DescribePipelines.</p>
 * @public
 */
export interface DescribePipelinesOutput {
  /**
   * <p>An array of descriptions for the specified pipelines.</p>
   * @public
   */
  pipelineDescriptionList: PipelineDescription[] | undefined;
}

/**
 * <p>Contains the parameters for EvaluateExpression.</p>
 * @public
 */
export interface EvaluateExpressionInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The ID of the object.</p>
   * @public
   */
  objectId: string | undefined;

  /**
   * <p>The expression to evaluate.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>Contains the output of EvaluateExpression.</p>
 * @public
 */
export interface EvaluateExpressionOutput {
  /**
   * <p>The evaluated expression.</p>
   * @public
   */
  evaluatedExpression: string | undefined;
}

/**
 * <p>Contains the parameters for GetPipelineDefinition.</p>
 * @public
 */
export interface GetPipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The version of the pipeline definition to retrieve. Set this parameter to <code>latest</code> (default)
   *             to use the last definition saved to the pipeline or <code>active</code> to use the last definition
   *             that was activated.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>The attributes allowed or specified with a parameter object.</p>
 * @public
 */
export interface ParameterAttribute {
  /**
   * <p>The field identifier.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   * @public
   */
  stringValue: string | undefined;
}

/**
 * <p>Contains information about a parameter object.</p>
 * @public
 */
export interface ParameterObject {
  /**
   * <p>The ID of the parameter object. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The attributes of the parameter object.</p>
   * @public
   */
  attributes: ParameterAttribute[] | undefined;
}

/**
 * <p>Contains the output of GetPipelineDefinition.</p>
 * @public
 */
export interface GetPipelineDefinitionOutput {
  /**
   * <p>The objects defined in the pipeline.</p>
   * @public
   */
  pipelineObjects?: PipelineObject[] | undefined;

  /**
   * <p>The parameter objects used in the pipeline definition.</p>
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * <p>The parameter values used in the pipeline definition.</p>
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * <p>Contains the parameters for ListPipelines.</p>
 * @public
 */
export interface ListPipelinesInput {
  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>ListPipelines</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   * @public
   */
  marker?: string | undefined;
}

/**
 * <p>Contains the name and identifier of a pipeline.</p>
 * @public
 */
export interface PipelineIdName {
  /**
   * <p>The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains the output of ListPipelines.</p>
 * @public
 */
export interface ListPipelinesOutput {
  /**
   * <p>The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call
   *             <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.</p>
   * @public
   */
  pipelineIdList: PipelineIdName[] | undefined;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance.
 *             For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i>
 *             Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
 * @public
 */
export interface InstanceIdentity {
  /**
   * <p>A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.</p>
   * @public
   */
  document?: string | undefined;

  /**
   * <p>A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.</p>
   * @public
   */
  signature?: string | undefined;
}

/**
 * <p>Contains the parameters for PollForTask.</p>
 * @public
 */
export interface PollForTaskInput {
  /**
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code> in the call to <code>PollForTask</code>. There are no wildcard values permitted in
   *             <code>workerGroup</code>; the string must be an exact, case-sensitive, match.</p>
   * @public
   */
  workerGroup: string | undefined;

  /**
   * <p>The public DNS name of the calling task runner.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using <code>http://169.254.169.254/latest/meta-data/instance-id</code>. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
   * @public
   */
  instanceIdentity?: InstanceIdentity | undefined;
}

/**
 * <p>Contains information about a pipeline task that is assigned to a task runner.</p>
 * @public
 */
export interface TaskObject {
  /**
   * <p>An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The ID of the pipeline that provided the task.</p>
   * @public
   */
  pipelineId?: string | undefined;

  /**
   * <p>The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.</p>
   * @public
   */
  attemptId?: string | undefined;

  /**
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   * @public
   */
  objects?: Record<string, PipelineObject> | undefined;
}

/**
 * <p>Contains the output of PollForTask.</p>
 * @public
 */
export interface PollForTaskOutput {
  /**
   * <p>The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>,
   *             which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a>
   *             and <a>SetTaskStatus</a>.</p>
   * @public
   */
  taskObject?: TaskObject | undefined;
}

/**
 * <p>Contains the parameters for PutPipelineDefinition.</p>
 * @public
 */
export interface PutPipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline. These objects overwrite the existing pipeline definition.</p>
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The parameter objects used with the pipeline.</p>
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * <p>The parameter values used with the pipeline.</p>
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * <p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The identifier of the object that contains the validation error.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A description of the validation error.</p>
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * <p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>
 * @public
 */
export interface ValidationWarning {
  /**
   * <p>The identifier of the object that contains the validation warning.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A description of the validation warning.</p>
   * @public
   */
  warnings?: string[] | undefined;
}

/**
 * <p>Contains the output of PutPipelineDefinition.</p>
 * @public
 */
export interface PutPipelineDefinitionOutput {
  /**
   * <p>The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   * @public
   */
  validationErrors?: ValidationError[] | undefined;

  /**
   * <p>The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   * @public
   */
  validationWarnings?: ValidationWarning[] | undefined;

  /**
   * <p>Indicates whether there were validation errors, and the pipeline definition is stored but cannot be
   *             activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.</p>
   * @public
   */
  errored: boolean | undefined;
}

/**
 * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
 * @public
 */
export interface Operator {
  /**
   * <p>
   *             The logical operation to be performed: equal (<code>EQ</code>), equal reference (<code>REF_EQ</code>), less than or equal (<code>LE</code>), greater than or equal (<code>GE</code>), or between (<code>BETWEEN</code>). Equal reference (<code>REF_EQ</code>) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below.
   *         </p>
   *         <p>
   *           The comparison operators EQ and REF_EQ act on the following fields:
   *         </p>
   *         <ul>
   *             <li>name</li>
   *             <li>@sphere</li>
   *             <li>parent</li>
   *             <li>@componentParent</li>
   *             <li>@instanceParent</li>
   *             <li>@status</li>
   *             <li>@scheduledStartTime</li>
   *             <li>@scheduledEndTime</li>
   *             <li>@actualStartTime</li>
   *             <li>@actualEndTime</li>
   *         </ul>
   *
   *         <p>
   *             The comparison operators <code>GE</code>, <code>LE</code>, and <code>BETWEEN</code> act on the following fields:
   *         </p>
   *         <ul>
   *             <li>@scheduledStartTime</li>
   *             <li>@scheduledEndTime</li>
   *             <li>@actualStartTime</li>
   *             <li>@actualEndTime</li>
   *         </ul>
   *         <p>Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".</p>
   * @public
   */
  type?: OperatorType | undefined;

  /**
   * <p>The value that the actual field value will be compared with.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>A comparision that is used to determine whether a query should return this object.</p>
 * @public
 */
export interface Selector {
  /**
   * <p>The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.</p>
   * @public
   */
  fieldName?: string | undefined;

  /**
   * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
   * @public
   */
  operator?: Operator | undefined;
}

/**
 * <p>Defines the query to run against an object.</p>
 * @public
 */
export interface Query {
  /**
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   * @public
   */
  selectors?: Selector[] | undefined;
}

/**
 * <p>Contains the parameters for QueryObjects.</p>
 * @public
 */
export interface QueryObjectsInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The query that defines the objects to be returned. The <code>Query</code> object can contain a maximum of ten selectors.
   *             The conditions in the query are limited to top-level String fields in the object.
   *             These filters can be applied to components, instances, and attempts.</p>
   * @public
   */
  query?: Query | undefined;

  /**
   * <p>Indicates whether the query applies to components or instances. The possible values are:
   *             <code>COMPONENT</code>, <code>INSTANCE</code>, and <code>ATTEMPT</code>.</p>
   * @public
   */
  sphere: string | undefined;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>QueryObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. </p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * <p>Contains the output of QueryObjects.</p>
 * @public
 */
export interface QueryObjectsOutput {
  /**
   * <p>The identifiers that match the query selectors.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   * @public
   */
  hasMoreResults?: boolean | undefined;
}

/**
 * <p>Contains the parameters for RemoveTags.</p>
 * @public
 */
export interface RemoveTagsInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>Contains the output of RemoveTags.</p>
 * @public
 */
export interface RemoveTagsOutput {}

/**
 * <p>Contains the parameters for ReportTaskProgress.</p>
 * @public
 */
export interface ReportTaskProgressInput {
  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Key-value pairs that define the properties of the ReportTaskProgressInput object.</p>
   * @public
   */
  fields?: Field[] | undefined;
}

/**
 * <p>Contains the output of ReportTaskProgress.</p>
 * @public
 */
export interface ReportTaskProgressOutput {
  /**
   * <p>If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.</p>
   * @public
   */
  canceled: boolean | undefined;
}

/**
 * <p>Contains the parameters for ReportTaskRunnerHeartbeat.</p>
 * @public
 */
export interface ReportTaskRunnerHeartbeatInput {
  /**
   * <p>The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner
   *             launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application.
   *             If you have written a custom task runner, you should assign a unique identifier for the task runner.</p>
   * @public
   */
  taskrunnerId: string | undefined;

  /**
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code>. There are no wildcard values permitted in <code>workerGroup</code>; the string
   *             must be an exact, case-sensitive, match.</p>
   * @public
   */
  workerGroup?: string | undefined;

  /**
   * <p>The public DNS name of the task runner.</p>
   * @public
   */
  hostname?: string | undefined;
}

/**
 * <p>Contains the output of ReportTaskRunnerHeartbeat.</p>
 * @public
 */
export interface ReportTaskRunnerHeartbeatOutput {
  /**
   * <p>Indicates whether the calling task runner should terminate.</p>
   * @public
   */
  terminate: boolean | undefined;
}

/**
 * <p>Contains the parameters for SetStatus.</p>
 * @public
 */
export interface SetStatusInput {
  /**
   * <p>The ID of the pipeline that contains the objects.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.</p>
   * @public
   */
  objectIds: string[] | undefined;

  /**
   * <p>The status to be set on all the objects specified in <code>objectIds</code>. For components, use <code>PAUSE</code> or <code>RESUME</code>.
   *             For instances, use <code>TRY_CANCEL</code>, <code>RERUN</code>, or <code>MARK_FINISHED</code>.</p>
   * @public
   */
  status: string | undefined;
}

/**
 * <p>Contains the parameters for SetTaskStatus.</p>
 * @public
 */
export interface SetTaskStatusInput {
  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>If <code>FINISHED</code>, the task successfully completed. If <code>FAILED</code>, the task ended unsuccessfully. Preconditions use false.</p>
   * @public
   */
  taskStatus: TaskStatus | undefined;

  /**
   * <p>If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object.
   *             It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.</p>
   * @public
   */
  errorId?: string | undefined;

  /**
   * <p>If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object.
   *             It is used to display error information to the user. The web service does not parse this value.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object.
   *             It is used to display error information to the user. The web service does not parse this value.</p>
   * @public
   */
  errorStackTrace?: string | undefined;
}

/**
 * <p>Contains the output of SetTaskStatus.</p>
 * @public
 */
export interface SetTaskStatusOutput {}

/**
 * <p>Contains the parameters for ValidatePipelineDefinition.</p>
 * @public
 */
export interface ValidatePipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   * @public
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline changes to validate against the pipeline.</p>
   * @public
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The parameter objects used with the pipeline.</p>
   * @public
   */
  parameterObjects?: ParameterObject[] | undefined;

  /**
   * <p>The parameter values used with the pipeline.</p>
   * @public
   */
  parameterValues?: ParameterValue[] | undefined;
}

/**
 * <p>Contains the output of ValidatePipelineDefinition.</p>
 * @public
 */
export interface ValidatePipelineDefinitionOutput {
  /**
   * <p>Any validation errors that were found.</p>
   * @public
   */
  validationErrors?: ValidationError[] | undefined;

  /**
   * <p>Any validation warnings that were found.</p>
   * @public
   */
  validationWarnings?: ValidationWarning[] | undefined;

  /**
   * <p>Indicates whether there were validation errors.</p>
   * @public
   */
  errored: boolean | undefined;
}
