// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DataPipelineServiceException as __BaseException } from "./DataPipelineServiceException";

/**
 * @public
 * <p>A value or list of parameter values. </p>
 */
export interface ParameterValue {
  /**
   * @public
   * <p>The ID of the parameter value.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for ActivatePipeline.</p>
 */
export interface ActivatePipelineInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>A list of parameter values to pass to the pipeline at activation.</p>
   */
  parameterValues?: ParameterValue[];

  /**
   * @public
   * <p>The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.</p>
   */
  startTimestamp?: Date;
}

/**
 * @public
 * <p>Contains the output of ActivatePipeline.</p>
 */
export interface ActivatePipelineOutput {}

/**
 * @public
 * <p>An internal service error occurred.</p>
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
  }
}

/**
 * @public
 * <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * @public
 * <p>The specified pipeline has been deleted.</p>
 */
export class PipelineDeletedException extends __BaseException {
  readonly name: "PipelineDeletedException" = "PipelineDeletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineDeletedException, __BaseException>) {
    super({
      name: "PipelineDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineDeletedException.prototype);
  }
}

/**
 * @public
 * <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 */
export class PipelineNotFoundException extends __BaseException {
  readonly name: "PipelineNotFoundException" = "PipelineNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNotFoundException, __BaseException>) {
    super({
      name: "PipelineNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline.
 *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key name of a tag defined by a user.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The optional value portion of a tag defined by a user.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The tags to add, as key/value pairs.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 * <p>Contains the output of AddTags.</p>
 */
export interface AddTagsOutput {}

/**
 * @public
 * <p>Contains the parameters for CreatePipeline.</p>
 */
export interface CreatePipelineInput {
  /**
   * @public
   * <p>The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account,
   *             because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline.
   *             You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this
   *             parameter to ensure idempotency during repeated calls to <code>CreatePipeline</code>. For example, if the
   *             first call to <code>CreatePipeline</code> does not succeed, you can pass in the same unique identifier and
   *             pipeline name combination on a subsequent call to <code>CreatePipeline</code>. <code>CreatePipeline</code>
   *             ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not
   *             created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the
   *             name and unique identifier combination is scoped to the AWS account or IAM user credentials.</p>
   */
  uniqueId: string | undefined;

  /**
   * @public
   * <p>The description for the pipeline.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a>
   *             in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output of CreatePipeline.</p>
 */
export interface CreatePipelineOutput {
  /**
   * @public
   * <p>The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for DeactivatePipeline.</p>
 */
export interface DeactivatePipelineInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>Indicates whether to cancel any running objects. The default is true,
   *           which sets the state of any running objects to <code>CANCELED</code>.
   *           If this value is false, the pipeline is deactivated after all
   *           running objects finish.</p>
   */
  cancelActive?: boolean;
}

/**
 * @public
 * <p>Contains the output of DeactivatePipeline.</p>
 */
export interface DeactivatePipelineOutput {}

/**
 * @public
 * <p>Contains the parameters for DeletePipeline.</p>
 */
export interface DeletePipelineInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;
}

/**
 * @public
 * <p>Contains the parameters for DescribeObjects.</p>
 */
export interface DescribeObjectsInput {
  /**
   * @public
   * <p>The ID of the pipeline that contains the object definitions.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.</p>
   */
  objectIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.</p>
   */
  evaluateExpressions?: boolean;

  /**
   * @public
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>DescribeObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;
}

/**
 * @public
 * <p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>
 */
export interface Field {
  /**
   * @public
   * <p>The field identifier.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The field value, expressed as a String.</p>
   */
  stringValue?: string;

  /**
   * @public
   * <p>The field value, expressed as the identifier of another object.</p>
   */
  refValue?: string;
}

/**
 * @public
 * <p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>
 */
export interface PipelineObject {
  /**
   * @public
   * <p>The ID of the object.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the object.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Key-value pairs that define the properties of the object.</p>
   */
  fields: Field[] | undefined;
}

/**
 * @public
 * <p>Contains the output of DescribeObjects.</p>
 */
export interface DescribeObjectsOutput {
  /**
   * @public
   * <p>An array of object definitions.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * @public
   * <p>The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>Indicates whether there are more results to return.</p>
   */
  hasMoreResults?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for DescribePipelines.</p>
 */
export interface DescribePipelinesInput {
  /**
   * @public
   * <p>The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call.
   *             To obtain pipeline IDs, call <a>ListPipelines</a>.</p>
   */
  pipelineIds: string[] | undefined;
}

/**
 * @public
 * <p>Contains pipeline metadata.</p>
 */
export interface PipelineDescription {
  /**
   * @public
   * <p>The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   */
  fields: Field[] | undefined;

  /**
   * @public
   * <p>Description of the pipeline.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines.
   *             For more information, see <a href="http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>Contains the output of DescribePipelines.</p>
 */
export interface DescribePipelinesOutput {
  /**
   * @public
   * <p>An array of descriptions for the specified pipelines.</p>
   */
  pipelineDescriptionList: PipelineDescription[] | undefined;
}

/**
 * @public
 * <p>Contains the parameters for EvaluateExpression.</p>
 */
export interface EvaluateExpressionInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The ID of the object.</p>
   */
  objectId: string | undefined;

  /**
   * @public
   * <p>The expression to evaluate.</p>
   */
  expression: string | undefined;
}

/**
 * @public
 * <p>Contains the output of EvaluateExpression.</p>
 */
export interface EvaluateExpressionOutput {
  /**
   * @public
   * <p>The evaluated expression.</p>
   */
  evaluatedExpression: string | undefined;
}

/**
 * @public
 * <p>The specified task was not found. </p>
 */
export class TaskNotFoundException extends __BaseException {
  readonly name: "TaskNotFoundException" = "TaskNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskNotFoundException, __BaseException>) {
    super({
      name: "TaskNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>Contains the parameters for GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The version of the pipeline definition to retrieve. Set this parameter to <code>latest</code> (default)
   *             to use the last definition saved to the pipeline or <code>active</code> to use the last definition
   *             that was activated.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>The attributes allowed or specified with a parameter object.</p>
 */
export interface ParameterAttribute {
  /**
   * @public
   * <p>The field identifier.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string | undefined;
}

/**
 * @public
 * <p>Contains information about a parameter object.</p>
 */
export interface ParameterObject {
  /**
   * @public
   * <p>The ID of the parameter object. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The attributes of the parameter object.</p>
   */
  attributes: ParameterAttribute[] | undefined;
}

/**
 * @public
 * <p>Contains the output of GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionOutput {
  /**
   * @public
   * <p>The objects defined in the pipeline.</p>
   */
  pipelineObjects?: PipelineObject[];

  /**
   * @public
   * <p>The parameter objects used in the pipeline definition.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * @public
   * <p>The parameter values used in the pipeline definition.</p>
   */
  parameterValues?: ParameterValue[];
}

/**
 * @public
 * <p>Contains the parameters for ListPipelines.</p>
 */
export interface ListPipelinesInput {
  /**
   * @public
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>ListPipelines</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;
}

/**
 * @public
 * <p>Contains the name and identifier of a pipeline.</p>
 */
export interface PipelineIdName {
  /**
   * @public
   * <p>The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Contains the output of ListPipelines.</p>
 */
export interface ListPipelinesOutput {
  /**
   * @public
   * <p>The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call
   *             <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.</p>
   */
  pipelineIdList: PipelineIdName[] | undefined;

  /**
   * @public
   * <p>The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;
}

/**
 * @public
 * <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance.
 *             For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i>
 *             Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
 */
export interface InstanceIdentity {
  /**
   * @public
   * <p>A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.</p>
   */
  document?: string;

  /**
   * @public
   * <p>A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.</p>
   */
  signature?: string;
}

/**
 * @public
 * <p>Contains the parameters for PollForTask.</p>
 */
export interface PollForTaskInput {
  /**
   * @public
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code> in the call to <code>PollForTask</code>. There are no wildcard values permitted in
   *             <code>workerGroup</code>; the string must be an exact, case-sensitive, match.</p>
   */
  workerGroup: string | undefined;

  /**
   * @public
   * <p>The public DNS name of the calling task runner.</p>
   */
  hostname?: string;

  /**
   * @public
   * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using <code>http://169.254.169.254/latest/meta-data/instance-id</code>. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
   */
  instanceIdentity?: InstanceIdentity;
}

/**
 * @public
 * <p>Contains information about a pipeline task that is assigned to a task runner.</p>
 */
export interface TaskObject {
  /**
   * @public
   * <p>An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The ID of the pipeline that provided the task.</p>
   */
  pipelineId?: string;

  /**
   * @public
   * <p>The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.</p>
   */
  attemptId?: string;

  /**
   * @public
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   */
  objects?: Record<string, PipelineObject>;
}

/**
 * @public
 * <p>Contains the output of PollForTask.</p>
 */
export interface PollForTaskOutput {
  /**
   * @public
   * <p>The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>,
   *             which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a>
   *             and <a>SetTaskStatus</a>.</p>
   */
  taskObject?: TaskObject;
}

/**
 * @public
 * <p>Contains the parameters for PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The objects that define the pipeline. These objects overwrite the existing pipeline definition.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * @public
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * @public
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: ParameterValue[];
}

/**
 * @public
 * <p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationError {
  /**
   * @public
   * <p>The identifier of the object that contains the validation error.</p>
   */
  id?: string;

  /**
   * @public
   * <p>A description of the validation error.</p>
   */
  errors?: string[];
}

/**
 * @public
 * <p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationWarning {
  /**
   * @public
   * <p>The identifier of the object that contains the validation warning.</p>
   */
  id?: string;

  /**
   * @public
   * <p>A description of the validation warning.</p>
   */
  warnings?: string[];
}

/**
 * @public
 * <p>Contains the output of PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionOutput {
  /**
   * @public
   * <p>The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationErrors?: ValidationError[];

  /**
   * @public
   * <p>The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationWarnings?: ValidationWarning[];

  /**
   * @public
   * <p>Indicates whether there were validation errors, and the pipeline definition is stored but cannot be
   *             activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.</p>
   */
  errored: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const OperatorType = {
  Between: "BETWEEN",
  Equal: "EQ",
  GreaterThanOrEqual: "GE",
  LessThanOrEqual: "LE",
  ReferenceEqual: "REF_EQ",
} as const;

/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

/**
 * @public
 * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
 */
export interface Operator {
  /**
   * @public
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
   */
  type?: OperatorType;

  /**
   * @public
   * <p>The value that the actual field value will be compared with.</p>
   */
  values?: string[];
}

/**
 * @public
 * <p>A comparision that is used to determine whether a query should return this object.</p>
 */
export interface Selector {
  /**
   * @public
   * <p>The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.</p>
   */
  fieldName?: string;

  /**
   * @public
   * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
   */
  operator?: Operator;
}

/**
 * @public
 * <p>Defines the query to run against an object.</p>
 */
export interface Query {
  /**
   * @public
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   */
  selectors?: Selector[];
}

/**
 * @public
 * <p>Contains the parameters for QueryObjects.</p>
 */
export interface QueryObjectsInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The query that defines the objects to be returned. The <code>Query</code> object can contain a maximum of ten selectors.
   *             The conditions in the query are limited to top-level String fields in the object.
   *             These filters can be applied to components, instances, and attempts.</p>
   */
  query?: Query;

  /**
   * @public
   * <p>Indicates whether the query applies to components or instances. The possible values are:
   *             <code>COMPONENT</code>, <code>INSTANCE</code>, and <code>ATTEMPT</code>.</p>
   */
  sphere: string | undefined;

  /**
   * @public
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>QueryObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. </p>
   */
  limit?: number;
}

/**
 * @public
 * <p>Contains the output of QueryObjects.</p>
 */
export interface QueryObjectsOutput {
  /**
   * @public
   * <p>The identifiers that match the query selectors.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;
}

/**
 * @public
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {}

/**
 * @public
 * <p>Contains the parameters for ReportTaskProgress.</p>
 */
export interface ReportTaskProgressInput {
  /**
   * @public
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>Key-value pairs that define the properties of the ReportTaskProgressInput object.</p>
   */
  fields?: Field[];
}

/**
 * @public
 * <p>Contains the output of ReportTaskProgress.</p>
 */
export interface ReportTaskProgressOutput {
  /**
   * @public
   * <p>If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.</p>
   */
  canceled: boolean | undefined;
}

/**
 * @public
 * <p>Contains the parameters for ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatInput {
  /**
   * @public
   * <p>The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner
   *             launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application.
   *             If you have written a custom task runner, you should assign a unique identifier for the task runner.</p>
   */
  taskrunnerId: string | undefined;

  /**
   * @public
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code>. There are no wildcard values permitted in <code>workerGroup</code>; the string
   *             must be an exact, case-sensitive, match.</p>
   */
  workerGroup?: string;

  /**
   * @public
   * <p>The public DNS name of the task runner.</p>
   */
  hostname?: string;
}

/**
 * @public
 * <p>Contains the output of ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatOutput {
  /**
   * @public
   * <p>Indicates whether the calling task runner should terminate.</p>
   */
  terminate: boolean | undefined;
}

/**
 * @public
 * <p>Contains the parameters for SetStatus.</p>
 */
export interface SetStatusInput {
  /**
   * @public
   * <p>The ID of the pipeline that contains the objects.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.</p>
   */
  objectIds: string[] | undefined;

  /**
   * @public
   * <p>The status to be set on all the objects specified in <code>objectIds</code>. For components, use <code>PAUSE</code> or <code>RESUME</code>.
   *             For instances, use <code>TRY_CANCEL</code>, <code>RERUN</code>, or <code>MARK_FINISHED</code>.</p>
   */
  status: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  FAILED: "FAILED",
  FALSE: "FALSE",
  FINISHED: "FINISHED",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * <p>Contains the parameters for SetTaskStatus.</p>
 */
export interface SetTaskStatusInput {
  /**
   * @public
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>If <code>FINISHED</code>, the task successfully completed. If <code>FAILED</code>, the task ended unsuccessfully. Preconditions use false.</p>
   */
  taskStatus: TaskStatus | undefined;

  /**
   * @public
   * <p>If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object.
   *             It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.</p>
   */
  errorId?: string;

  /**
   * @public
   * <p>If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object.
   *             It is used to display error information to the user. The web service does not parse this value.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object.
   *             It is used to display error information to the user. The web service does not parse this value.</p>
   */
  errorStackTrace?: string;
}

/**
 * @public
 * <p>Contains the output of SetTaskStatus.</p>
 */
export interface SetTaskStatusOutput {}

/**
 * @public
 * <p>Contains the parameters for ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionInput {
  /**
   * @public
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * @public
   * <p>The objects that define the pipeline changes to validate against the pipeline.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * @public
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * @public
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: ParameterValue[];
}

/**
 * @public
 * <p>Contains the output of ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionOutput {
  /**
   * @public
   * <p>Any validation errors that were found.</p>
   */
  validationErrors?: ValidationError[];

  /**
   * @public
   * <p>Any validation warnings that were found.</p>
   */
  validationWarnings?: ValidationWarning[];

  /**
   * @public
   * <p>Indicates whether there were validation errors.</p>
   */
  errored: boolean | undefined;
}
