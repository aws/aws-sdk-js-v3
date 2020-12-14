import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A value or list of parameter values.</p>
 */
export interface ParameterValue {
  /**
   * <p>The ID of the parameter value.</p>
   */
  id: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string | undefined;
}

export namespace ParameterValue {
  export const filterSensitiveLog = (obj: ParameterValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ActivatePipeline.</p>
 */
export interface ActivatePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>A list of parameter values to pass to the pipeline at activation.</p>
   */
  parameterValues?: ParameterValue[];

  /**
   * <p>The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.</p>
   */
  startTimestamp?: Date;
}

export namespace ActivatePipelineInput {
  export const filterSensitiveLog = (obj: ActivatePipelineInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ActivatePipeline.</p>
 */
export interface ActivatePipelineOutput {}

export namespace ActivatePipelineOutput {
  export const filterSensitiveLog = (obj: ActivatePipelineOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceError extends __SmithyException, $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace InternalServiceError {
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj,
  });
}

/**
 * <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified pipeline has been deleted.</p>
 */
export interface PipelineDeletedException extends __SmithyException, $MetadataBearer {
  name: "PipelineDeletedException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace PipelineDeletedException {
  export const filterSensitiveLog = (obj: PipelineDeletedException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 */
export interface PipelineNotFoundException extends __SmithyException, $MetadataBearer {
  name: "PipelineNotFoundException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace PipelineNotFoundException {
  export const filterSensitiveLog = (obj: PipelineNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline.
 *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key name of a tag defined by a user.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  key: string | undefined;

  /**
   * <p>The optional value portion of a tag defined by a user.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The tags to add, as key/value pairs.</p>
   */
  tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of AddTags.</p>
 */
export interface AddTagsOutput {}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreatePipeline.</p>
 */
export interface CreatePipelineInput {
  /**
   * <p>The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.</p>
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
   */
  uniqueId: string | undefined;

  /**
   * <p>The description for the pipeline.</p>
   */
  description?: string;

  /**
   * <p>A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a>
   *             in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Tag[];
}

export namespace CreatePipelineInput {
  export const filterSensitiveLog = (obj: CreatePipelineInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreatePipeline.</p>
 */
export interface CreatePipelineOutput {
  /**
   * <p>The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;
}

export namespace CreatePipelineOutput {
  export const filterSensitiveLog = (obj: CreatePipelineOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeactivatePipeline.</p>
 */
export interface DeactivatePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>Indicates whether to cancel any running objects. The default is true,
   *           which sets the state of any running objects to <code>CANCELED</code>.
   *           If this value is false, the pipeline is deactivated after all
   *           running objects finish.</p>
   */
  cancelActive?: boolean;
}

export namespace DeactivatePipelineInput {
  export const filterSensitiveLog = (obj: DeactivatePipelineInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DeactivatePipeline.</p>
 */
export interface DeactivatePipelineOutput {}

export namespace DeactivatePipelineOutput {
  export const filterSensitiveLog = (obj: DeactivatePipelineOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DeletePipeline.</p>
 */
export interface DeletePipelineInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;
}

export namespace DeletePipelineInput {
  export const filterSensitiveLog = (obj: DeletePipelineInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribeObjects.</p>
 */
export interface DescribeObjectsInput {
  /**
   * <p>The ID of the pipeline that contains the object definitions.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.</p>
   */
  objectIds: string[] | undefined;

  /**
   * <p>Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.</p>
   */
  evaluateExpressions?: boolean;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>DescribeObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;
}

export namespace DescribeObjectsInput {
  export const filterSensitiveLog = (obj: DescribeObjectsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>
 */
export interface Field {
  /**
   * <p>The field identifier.</p>
   */
  key: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue?: string;

  /**
   * <p>The field value, expressed as the identifier of another object.</p>
   */
  refValue?: string;
}

export namespace Field {
  export const filterSensitiveLog = (obj: Field): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>
 */
export interface PipelineObject {
  /**
   * <p>The ID of the object.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the object.</p>
   */
  name: string | undefined;

  /**
   * <p>Key-value pairs that define the properties of the object.</p>
   */
  fields: Field[] | undefined;
}

export namespace PipelineObject {
  export const filterSensitiveLog = (obj: PipelineObject): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribeObjects.</p>
 */
export interface DescribeObjectsOutput {
  /**
   * <p>An array of object definitions.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results to return.</p>
   */
  hasMoreResults?: boolean;
}

export namespace DescribeObjectsOutput {
  export const filterSensitiveLog = (obj: DescribeObjectsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for DescribePipelines.</p>
 */
export interface DescribePipelinesInput {
  /**
   * <p>The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call.
   *             To obtain pipeline IDs, call <a>ListPipelines</a>.</p>
   */
  pipelineIds: string[] | undefined;
}

export namespace DescribePipelinesInput {
  export const filterSensitiveLog = (obj: DescribePipelinesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains pipeline metadata.</p>
 */
export interface PipelineDescription {
  /**
   * <p>The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   */
  fields: Field[] | undefined;

  /**
   * <p>Description of the pipeline.</p>
   */
  description?: string;

  /**
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Tag[];
}

export namespace PipelineDescription {
  export const filterSensitiveLog = (obj: PipelineDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of DescribePipelines.</p>
 */
export interface DescribePipelinesOutput {
  /**
   * <p>An array of descriptions for the specified pipelines.</p>
   */
  pipelineDescriptionList: PipelineDescription[] | undefined;
}

export namespace DescribePipelinesOutput {
  export const filterSensitiveLog = (obj: DescribePipelinesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for EvaluateExpression.</p>
 */
export interface EvaluateExpressionInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The ID of the object.</p>
   */
  objectId: string | undefined;

  /**
   * <p>The expression to evaluate.</p>
   */
  expression: string | undefined;
}

export namespace EvaluateExpressionInput {
  export const filterSensitiveLog = (obj: EvaluateExpressionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of EvaluateExpression.</p>
 */
export interface EvaluateExpressionOutput {
  /**
   * <p>The evaluated expression.</p>
   */
  evaluatedExpression: string | undefined;
}

export namespace EvaluateExpressionOutput {
  export const filterSensitiveLog = (obj: EvaluateExpressionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified task was not found.</p>
 */
export interface TaskNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TaskNotFoundException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace TaskNotFoundException {
  export const filterSensitiveLog = (obj: TaskNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The version of the pipeline definition to retrieve. Set this parameter to <code>latest</code> (default)
   *             to use the last definition saved to the pipeline or <code>active</code> to use the last definition
   *             that was activated.</p>
   */
  version?: string;
}

export namespace GetPipelineDefinitionInput {
  export const filterSensitiveLog = (obj: GetPipelineDefinitionInput): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes allowed or specified with a parameter object.</p>
 */
export interface ParameterAttribute {
  /**
   * <p>The field identifier.</p>
   */
  key: string | undefined;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string | undefined;
}

export namespace ParameterAttribute {
  export const filterSensitiveLog = (obj: ParameterAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a parameter object.</p>
 */
export interface ParameterObject {
  /**
   * <p>The ID of the parameter object.</p>
   */
  id: string | undefined;

  /**
   * <p>The attributes of the parameter object.</p>
   */
  attributes: ParameterAttribute[] | undefined;
}

export namespace ParameterObject {
  export const filterSensitiveLog = (obj: ParameterObject): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionOutput {
  /**
   * <p>The objects defined in the pipeline.</p>
   */
  pipelineObjects?: PipelineObject[];

  /**
   * <p>The parameter objects used in the pipeline definition.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * <p>The parameter values used in the pipeline definition.</p>
   */
  parameterValues?: ParameterValue[];
}

export namespace GetPipelineDefinitionOutput {
  export const filterSensitiveLog = (obj: GetPipelineDefinitionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ListPipelines.</p>
 */
export interface ListPipelinesInput {
  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>ListPipelines</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;
}

export namespace ListPipelinesInput {
  export const filterSensitiveLog = (obj: ListPipelinesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name and identifier of a pipeline.</p>
 */
export interface PipelineIdName {
  /**
   * <p>The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  id?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;
}

export namespace PipelineIdName {
  export const filterSensitiveLog = (obj: PipelineIdName): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ListPipelines.</p>
 */
export interface ListPipelinesOutput {
  /**
   * <p>The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call
   *             <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.</p>
   */
  pipelineIdList: PipelineIdName[] | undefined;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;
}

export namespace ListPipelinesOutput {
  export const filterSensitiveLog = (obj: ListPipelinesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance.
 *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i>
 *             Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
 */
export interface InstanceIdentity {
  /**
   * <p>A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.</p>
   */
  document?: string;

  /**
   * <p>A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.</p>
   */
  signature?: string;
}

export namespace InstanceIdentity {
  export const filterSensitiveLog = (obj: InstanceIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PollForTask.</p>
 */
export interface PollForTaskInput {
  /**
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code> in the call to <code>PollForTask</code>. There are no wildcard values permitted in
   *             <code>workerGroup</code>; the string must be an exact, case-sensitive, match.</p>
   */
  workerGroup: string | undefined;

  /**
   * <p>The public DNS name of the calling task runner.</p>
   */
  hostname?: string;

  /**
   * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using <code>http://169.254.169.254/latest/meta-data/instance-id</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
   */
  instanceIdentity?: InstanceIdentity;
}

export namespace PollForTaskInput {
  export const filterSensitiveLog = (obj: PollForTaskInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a pipeline task that is assigned to a task runner.</p>
 */
export interface TaskObject {
  /**
   * <p>An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.</p>
   */
  taskId?: string;

  /**
   * <p>The ID of the pipeline that provided the task.</p>
   */
  pipelineId?: string;

  /**
   * <p>The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.</p>
   */
  attemptId?: string;

  /**
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   */
  objects?: { [key: string]: PipelineObject };
}

export namespace TaskObject {
  export const filterSensitiveLog = (obj: TaskObject): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PollForTask.</p>
 */
export interface PollForTaskOutput {
  /**
   * <p>The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>,
   *             which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a>
   *             and <a>SetTaskStatus</a>.</p>
   */
  taskObject?: TaskObject;
}

export namespace PollForTaskOutput {
  export const filterSensitiveLog = (obj: PollForTaskOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline. These objects overwrite the existing pipeline definition.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: ParameterValue[];
}

export namespace PutPipelineDefinitionInput {
  export const filterSensitiveLog = (obj: PutPipelineDefinitionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationError {
  /**
   * <p>The identifier of the object that contains the validation error.</p>
   */
  id?: string;

  /**
   * <p>A description of the validation error.</p>
   */
  errors?: string[];
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationWarning {
  /**
   * <p>The identifier of the object that contains the validation warning.</p>
   */
  id?: string;

  /**
   * <p>A description of the validation warning.</p>
   */
  warnings?: string[];
}

export namespace ValidationWarning {
  export const filterSensitiveLog = (obj: ValidationWarning): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionOutput {
  /**
   * <p>The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationErrors?: ValidationError[];

  /**
   * <p>The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationWarnings?: ValidationWarning[];

  /**
   * <p>Indicates whether there were validation errors, and the pipeline definition is stored but cannot be
   *             activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.</p>
   */
  errored: boolean | undefined;
}

export namespace PutPipelineDefinitionOutput {
  export const filterSensitiveLog = (obj: PutPipelineDefinitionOutput): any => ({
    ...obj,
  });
}

export enum OperatorType {
  Between = "BETWEEN",
  Equal = "EQ",
  GreaterThanOrEqual = "GE",
  LessThanOrEqual = "LE",
  ReferenceEqual = "REF_EQ",
}

/**
 * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
 */
export interface Operator {
  /**
   * <p>
   *             The logical operation to be performed: equal (<code>EQ</code>), equal reference (<code>REF_EQ</code>), less than or equal (<code>LE</code>), greater than or equal (<code>GE</code>), or between (<code>BETWEEN</code>). Equal reference (<code>REF_EQ</code>) can be used only with reference fields. The other comparison types can be used only with String fields. The comparison types you can use apply only to certain object fields, as detailed below.
   *         </p>
   *         <p>The comparison operators EQ and REF_EQ act on the following fields:</p>
   *         <ul>
   *             <li>
   *                <p>name</p>
   *             </li>
   *             <li>
   *                <p>@sphere</p>
   *             </li>
   *             <li>
   *                <p>parent</p>
   *             </li>
   *             <li>
   *                <p>@componentParent</p>
   *             </li>
   *             <li>
   *                <p>@instanceParent</p>
   *             </li>
   *             <li>
   *                <p>@status</p>
   *             </li>
   *             <li>
   *                <p>@scheduledStartTime</p>
   *             </li>
   *             <li>
   *                <p>@scheduledEndTime</p>
   *             </li>
   *             <li>
   *                <p>@actualStartTime</p>
   *             </li>
   *             <li>
   *                <p>@actualEndTime</p>
   *             </li>
   *          </ul>
   *
   *         <p>
   *             The comparison operators <code>GE</code>, <code>LE</code>, and <code>BETWEEN</code> act on the following fields:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>@scheduledStartTime</p>
   *             </li>
   *             <li>
   *                <p>@scheduledEndTime</p>
   *             </li>
   *             <li>
   *                <p>@actualStartTime</p>
   *             </li>
   *             <li>
   *                <p>@actualEndTime</p>
   *             </li>
   *          </ul>
   *         <p>Note that fields beginning with the at sign (@) are read-only and set by the web service. When you name fields, you should choose names containing only alpha-numeric values, as symbols may be reserved by AWS Data Pipeline. User-defined fields that you add to a pipeline should prefix their name with the string "my".</p>
   */
  type?: OperatorType | string;

  /**
   * <p>The value that the actual field value will be compared with.</p>
   */
  values?: string[];
}

export namespace Operator {
  export const filterSensitiveLog = (obj: Operator): any => ({
    ...obj,
  });
}

/**
 * <p>A comparison that is used to determine whether a query should return this object.</p>
 */
export interface Selector {
  /**
   * <p>The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.</p>
   */
  fieldName?: string;

  /**
   * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
   */
  operator?: Operator;
}

export namespace Selector {
  export const filterSensitiveLog = (obj: Selector): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the query to run against an object.</p>
 */
export interface Query {
  /**
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   */
  selectors?: Selector[];
}

export namespace Query {
  export const filterSensitiveLog = (obj: Query): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for QueryObjects.</p>
 */
export interface QueryObjectsInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The query that defines the objects to be returned. The <code>Query</code> object can contain a maximum of ten selectors.
   *             The conditions in the query are limited to top-level String fields in the object.
   *             These filters can be applied to components, instances, and attempts.</p>
   */
  query?: Query;

  /**
   * <p>Indicates whether the query applies to components or instances. The possible values are:
   *             <code>COMPONENT</code>, <code>INSTANCE</code>, and <code>ATTEMPT</code>.</p>
   */
  sphere: string | undefined;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>QueryObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. </p>
   */
  limit?: number;
}

export namespace QueryObjectsInput {
  export const filterSensitiveLog = (obj: QueryObjectsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of QueryObjects.</p>
 */
export interface QueryObjectsOutput {
  /**
   * <p>The identifiers that match the query selectors.</p>
   */
  ids?: string[];

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;
}

export namespace QueryObjectsOutput {
  export const filterSensitiveLog = (obj: QueryObjectsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace RemoveTagsInput {
  export const filterSensitiveLog = (obj: RemoveTagsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {}

export namespace RemoveTagsOutput {
  export const filterSensitiveLog = (obj: RemoveTagsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ReportTaskProgress.</p>
 */
export interface ReportTaskProgressInput {
  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Key-value pairs that define the properties of the ReportTaskProgressInput object.</p>
   */
  fields?: Field[];
}

export namespace ReportTaskProgressInput {
  export const filterSensitiveLog = (obj: ReportTaskProgressInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ReportTaskProgress.</p>
 */
export interface ReportTaskProgressOutput {
  /**
   * <p>If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.</p>
   */
  canceled: boolean | undefined;
}

export namespace ReportTaskProgressOutput {
  export const filterSensitiveLog = (obj: ReportTaskProgressOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatInput {
  /**
   * <p>The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application. If you have written a custom task runner, you should assign a unique identifier for the task runner.</p>
   */
  taskrunnerId: string | undefined;

  /**
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code>. There are no wildcard values permitted in <code>workerGroup</code>; the string
   *             must be an exact, case-sensitive, match.</p>
   */
  workerGroup?: string;

  /**
   * <p>The public DNS name of the task runner.</p>
   */
  hostname?: string;
}

export namespace ReportTaskRunnerHeartbeatInput {
  export const filterSensitiveLog = (obj: ReportTaskRunnerHeartbeatInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatOutput {
  /**
   * <p>Indicates whether the calling task runner should terminate.</p>
   */
  terminate: boolean | undefined;
}

export namespace ReportTaskRunnerHeartbeatOutput {
  export const filterSensitiveLog = (obj: ReportTaskRunnerHeartbeatOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for SetStatus.</p>
 */
export interface SetStatusInput {
  /**
   * <p>The ID of the pipeline that contains the objects.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.</p>
   */
  objectIds: string[] | undefined;

  /**
   * <p>The status to be set on all the objects specified in <code>objectIds</code>. For components, use <code>PAUSE</code> or <code>RESUME</code>.
   *             For instances, use <code>TRY_CANCEL</code>, <code>RERUN</code>, or <code>MARK_FINISHED</code>.</p>
   */
  status: string | undefined;
}

export namespace SetStatusInput {
  export const filterSensitiveLog = (obj: SetStatusInput): any => ({
    ...obj,
  });
}

export enum TaskStatus {
  FAILED = "FAILED",
  FALSE = "FALSE",
  FINISHED = "FINISHED",
}

/**
 * <p>Contains the parameters for SetTaskStatus.</p>
 */
export interface SetTaskStatusInput {
  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;

  /**
   * <p>If <code>FINISHED</code>, the task successfully completed. If <code>FAILED</code>, the task ended unsuccessfully. Preconditions use false.</p>
   */
  taskStatus: TaskStatus | string | undefined;

  /**
   * <p>If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object. It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system.</p>
   */
  errorId?: string;

  /**
   * <p>If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.</p>
   */
  errorMessage?: string;

  /**
   * <p>If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value.</p>
   */
  errorStackTrace?: string;
}

export namespace SetTaskStatusInput {
  export const filterSensitiveLog = (obj: SetTaskStatusInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of SetTaskStatus.</p>
 */
export interface SetTaskStatusOutput {}

export namespace SetTaskStatusOutput {
  export const filterSensitiveLog = (obj: SetTaskStatusOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline changes to validate against the pipeline.</p>
   */
  pipelineObjects: PipelineObject[] | undefined;

  /**
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: ParameterObject[];

  /**
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: ParameterValue[];
}

export namespace ValidatePipelineDefinitionInput {
  export const filterSensitiveLog = (obj: ValidatePipelineDefinitionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionOutput {
  /**
   * <p>Any validation errors that were found.</p>
   */
  validationErrors?: ValidationError[];

  /**
   * <p>Any validation warnings that were found.</p>
   */
  validationWarnings?: ValidationWarning[];

  /**
   * <p>Indicates whether there were validation errors.</p>
   */
  errored: boolean | undefined;
}

export namespace ValidatePipelineDefinitionOutput {
  export const filterSensitiveLog = (obj: ValidatePipelineDefinitionOutput): any => ({
    ...obj,
  });
}
