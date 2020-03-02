import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains the parameters for ActivatePipeline.</p>
 */
export interface ActivatePipelineInput {
  __type?: "ActivatePipelineInput";
  /**
   * <p>A list of parameter values to pass to the pipeline at activation.</p>
   */
  parameterValues?: Array<ParameterValue>;

  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution.</p>
   */
  startTimestamp?: Date;
}

export namespace ActivatePipelineInput {
  export function isa(o: any): o is ActivatePipelineInput {
    return __isa(o, "ActivatePipelineInput");
  }
}

/**
 * <p>Contains the output of ActivatePipeline.</p>
 */
export interface ActivatePipelineOutput {
  __type?: "ActivatePipelineOutput";
}

export namespace ActivatePipelineOutput {
  export function isa(o: any): o is ActivatePipelineOutput {
    return __isa(o, "ActivatePipelineOutput");
  }
}

/**
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The tags to add, as key/value pairs.</p>
   */
  tags: Array<Tag> | undefined;
}

export namespace AddTagsInput {
  export function isa(o: any): o is AddTagsInput {
    return __isa(o, "AddTagsInput");
  }
}

/**
 * <p>Contains the output of AddTags.</p>
 */
export interface AddTagsOutput {
  __type?: "AddTagsOutput";
}

export namespace AddTagsOutput {
  export function isa(o: any): o is AddTagsOutput {
    return __isa(o, "AddTagsOutput");
  }
}

/**
 * <p>Contains the parameters for CreatePipeline.</p>
 */
export interface CreatePipelineInput {
  __type?: "CreatePipelineInput";
  /**
   * <p>The description for the pipeline.</p>
   */
  description?: string;

  /**
   * <p>The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a>
   *             in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Array<Tag>;

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
}

export namespace CreatePipelineInput {
  export function isa(o: any): o is CreatePipelineInput {
    return __isa(o, "CreatePipelineInput");
  }
}

/**
 * <p>Contains the output of CreatePipeline.</p>
 */
export interface CreatePipelineOutput {
  __type?: "CreatePipelineOutput";
  /**
   * <p>The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;
}

export namespace CreatePipelineOutput {
  export function isa(o: any): o is CreatePipelineOutput {
    return __isa(o, "CreatePipelineOutput");
  }
}

/**
 * <p>Contains the parameters for DeactivatePipeline.</p>
 */
export interface DeactivatePipelineInput {
  __type?: "DeactivatePipelineInput";
  /**
   * <p>Indicates whether to cancel any running objects. The default is true,
   *           which sets the state of any running objects to <code>CANCELED</code>.
   *           If this value is false, the pipeline is deactivated after all
   *           running objects finish.</p>
   */
  cancelActive?: boolean;

  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;
}

export namespace DeactivatePipelineInput {
  export function isa(o: any): o is DeactivatePipelineInput {
    return __isa(o, "DeactivatePipelineInput");
  }
}

/**
 * <p>Contains the output of DeactivatePipeline.</p>
 */
export interface DeactivatePipelineOutput {
  __type?: "DeactivatePipelineOutput";
}

export namespace DeactivatePipelineOutput {
  export function isa(o: any): o is DeactivatePipelineOutput {
    return __isa(o, "DeactivatePipelineOutput");
  }
}

/**
 * <p>Contains the parameters for DeletePipeline.</p>
 */
export interface DeletePipelineInput {
  __type?: "DeletePipelineInput";
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;
}

export namespace DeletePipelineInput {
  export function isa(o: any): o is DeletePipelineInput {
    return __isa(o, "DeletePipelineInput");
  }
}

/**
 * <p>Contains the parameters for DescribeObjects.</p>
 */
export interface DescribeObjectsInput {
  __type?: "DescribeObjectsInput";
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

  /**
   * <p>The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.</p>
   */
  objectIds: Array<string> | undefined;

  /**
   * <p>The ID of the pipeline that contains the object definitions.</p>
   */
  pipelineId: string | undefined;
}

export namespace DescribeObjectsInput {
  export function isa(o: any): o is DescribeObjectsInput {
    return __isa(o, "DescribeObjectsInput");
  }
}

/**
 * <p>Contains the output of DescribeObjects.</p>
 */
export interface DescribeObjectsOutput {
  __type?: "DescribeObjectsOutput";
  /**
   * <p>Indicates whether there are more results to return.</p>
   */
  hasMoreResults?: boolean;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>DescribeObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>An array of object definitions.</p>
   */
  pipelineObjects: Array<PipelineObject> | undefined;
}

export namespace DescribeObjectsOutput {
  export function isa(o: any): o is DescribeObjectsOutput {
    return __isa(o, "DescribeObjectsOutput");
  }
}

/**
 * <p>Contains the parameters for DescribePipelines.</p>
 */
export interface DescribePipelinesInput {
  __type?: "DescribePipelinesInput";
  /**
   * <p>The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call.
   *             To obtain pipeline IDs, call <a>ListPipelines</a>.</p>
   */
  pipelineIds: Array<string> | undefined;
}

export namespace DescribePipelinesInput {
  export function isa(o: any): o is DescribePipelinesInput {
    return __isa(o, "DescribePipelinesInput");
  }
}

/**
 * <p>Contains the output of DescribePipelines.</p>
 */
export interface DescribePipelinesOutput {
  __type?: "DescribePipelinesOutput";
  /**
   * <p>An array of descriptions for the specified pipelines.</p>
   */
  pipelineDescriptionList: Array<PipelineDescription> | undefined;
}

export namespace DescribePipelinesOutput {
  export function isa(o: any): o is DescribePipelinesOutput {
    return __isa(o, "DescribePipelinesOutput");
  }
}

/**
 * <p>Contains the parameters for EvaluateExpression.</p>
 */
export interface EvaluateExpressionInput {
  __type?: "EvaluateExpressionInput";
  /**
   * <p>The expression to evaluate.</p>
   */
  expression: string | undefined;

  /**
   * <p>The ID of the object.</p>
   */
  objectId: string | undefined;

  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;
}

export namespace EvaluateExpressionInput {
  export function isa(o: any): o is EvaluateExpressionInput {
    return __isa(o, "EvaluateExpressionInput");
  }
}

/**
 * <p>Contains the output of EvaluateExpression.</p>
 */
export interface EvaluateExpressionOutput {
  __type?: "EvaluateExpressionOutput";
  /**
   * <p>The evaluated expression.</p>
   */
  evaluatedExpression: string | undefined;
}

export namespace EvaluateExpressionOutput {
  export function isa(o: any): o is EvaluateExpressionOutput {
    return __isa(o, "EvaluateExpressionOutput");
  }
}

/**
 * <p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>
 */
export interface Field {
  __type?: "Field";
  /**
   * <p>The field identifier.</p>
   */
  key: string | undefined;

  /**
   * <p>The field value, expressed as the identifier of another object.</p>
   */
  refValue?: string;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue?: string;
}

export namespace Field {
  export function isa(o: any): o is Field {
    return __isa(o, "Field");
  }
}

/**
 * <p>Contains the parameters for GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionInput {
  __type?: "GetPipelineDefinitionInput";
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
  export function isa(o: any): o is GetPipelineDefinitionInput {
    return __isa(o, "GetPipelineDefinitionInput");
  }
}

/**
 * <p>Contains the output of GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionOutput {
  __type?: "GetPipelineDefinitionOutput";
  /**
   * <p>The parameter objects used in the pipeline definition.</p>
   */
  parameterObjects?: Array<ParameterObject>;

  /**
   * <p>The parameter values used in the pipeline definition.</p>
   */
  parameterValues?: Array<ParameterValue>;

  /**
   * <p>The objects defined in the pipeline.</p>
   */
  pipelineObjects?: Array<PipelineObject>;
}

export namespace GetPipelineDefinitionOutput {
  export function isa(o: any): o is GetPipelineDefinitionOutput {
    return __isa(o, "GetPipelineDefinitionOutput");
  }
}

/**
 * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance.
 *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i>
 *             Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
 */
export interface InstanceIdentity {
  __type?: "InstanceIdentity";
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
  export function isa(o: any): o is InstanceIdentity {
    return __isa(o, "InstanceIdentity");
  }
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace InternalServiceError {
  export function isa(o: any): o is InternalServiceError {
    return __isa(o, "InternalServiceError");
  }
}

/**
 * <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>Contains the parameters for ListPipelines.</p>
 */
export interface ListPipelinesInput {
  __type?: "ListPipelinesInput";
  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>ListPipelines</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;
}

export namespace ListPipelinesInput {
  export function isa(o: any): o is ListPipelinesInput {
    return __isa(o, "ListPipelinesInput");
  }
}

/**
 * <p>Contains the output of ListPipelines.</p>
 */
export interface ListPipelinesOutput {
  __type?: "ListPipelinesOutput";
  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>ListPipelinesOutput</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>The pipeline identifiers. If you require additional information about the pipelines, you can use these identifiers to call
   *             <a>DescribePipelines</a> and <a>GetPipelineDefinition</a>.</p>
   */
  pipelineIdList: Array<PipelineIdName> | undefined;
}

export namespace ListPipelinesOutput {
  export function isa(o: any): o is ListPipelinesOutput {
    return __isa(o, "ListPipelinesOutput");
  }
}

/**
 * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
 */
export interface Operator {
  __type?: "Operator";
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
  values?: Array<string>;
}

export namespace Operator {
  export function isa(o: any): o is Operator {
    return __isa(o, "Operator");
  }
}

export enum OperatorType {
  Between = "BETWEEN",
  Equal = "EQ",
  GreaterThanOrEqual = "GE",
  LessThanOrEqual = "LE",
  ReferenceEqual = "REF_EQ"
}

/**
 * <p>The attributes allowed or specified with a parameter object.</p>
 */
export interface ParameterAttribute {
  __type?: "ParameterAttribute";
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
  export function isa(o: any): o is ParameterAttribute {
    return __isa(o, "ParameterAttribute");
  }
}

/**
 * <p>Contains information about a parameter object.</p>
 */
export interface ParameterObject {
  __type?: "ParameterObject";
  /**
   * <p>The attributes of the parameter object.</p>
   */
  attributes: Array<ParameterAttribute> | undefined;

  /**
   * <p>The ID of the parameter object.</p>
   */
  id: string | undefined;
}

export namespace ParameterObject {
  export function isa(o: any): o is ParameterObject {
    return __isa(o, "ParameterObject");
  }
}

/**
 * <p>A value or list of parameter values.</p>
 */
export interface ParameterValue {
  __type?: "ParameterValue";
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
  export function isa(o: any): o is ParameterValue {
    return __isa(o, "ParameterValue");
  }
}

/**
 * <p>The specified pipeline has been deleted.</p>
 */
export interface PipelineDeletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PipelineDeletedException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace PipelineDeletedException {
  export function isa(o: any): o is PipelineDeletedException {
    return __isa(o, "PipelineDeletedException");
  }
}

/**
 * <p>Contains pipeline metadata.</p>
 */
export interface PipelineDescription {
  __type?: "PipelineDescription";
  /**
   * <p>Description of the pipeline.</p>
   */
  description?: string;

  /**
   * <p>A list of read-only fields that contain metadata about the pipeline: @userId, @accountId, and @pipelineState.</p>
   */
  fields: Array<Field> | undefined;

  /**
   * <p>The name of the pipeline.</p>
   */
  name: string | undefined;

  /**
   * <p>The pipeline identifier that was assigned by AWS Data Pipeline. This is a string of the form <code>df-297EG78HU43EEXAMPLE</code>.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>A list of tags to associated with a pipeline. Tags let you control access to pipelines.
   *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
   */
  tags?: Array<Tag>;
}

export namespace PipelineDescription {
  export function isa(o: any): o is PipelineDescription {
    return __isa(o, "PipelineDescription");
  }
}

/**
 * <p>Contains the name and identifier of a pipeline.</p>
 */
export interface PipelineIdName {
  __type?: "PipelineIdName";
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
  export function isa(o: any): o is PipelineIdName {
    return __isa(o, "PipelineIdName");
  }
}

/**
 * <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 */
export interface PipelineNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "PipelineNotFoundException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace PipelineNotFoundException {
  export function isa(o: any): o is PipelineNotFoundException {
    return __isa(o, "PipelineNotFoundException");
  }
}

/**
 * <p>Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.</p>
 */
export interface PipelineObject {
  __type?: "PipelineObject";
  /**
   * <p>Key-value pairs that define the properties of the object.</p>
   */
  fields: Array<Field> | undefined;

  /**
   * <p>The ID of the object.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the object.</p>
   */
  name: string | undefined;
}

export namespace PipelineObject {
  export function isa(o: any): o is PipelineObject {
    return __isa(o, "PipelineObject");
  }
}

/**
 * <p>Contains the parameters for PollForTask.</p>
 */
export interface PollForTaskInput {
  __type?: "PollForTaskInput";
  /**
   * <p>The public DNS name of the calling task runner.</p>
   */
  hostname?: string;

  /**
   * <p>Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using <code>http://169.254.169.254/latest/meta-data/instance-id</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p>
   */
  instanceIdentity?: InstanceIdentity;

  /**
   * <p>The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created.
   *             You can only specify a single value for <code>workerGroup</code> in the call to <code>PollForTask</code>. There are no wildcard values permitted in
   *             <code>workerGroup</code>; the string must be an exact, case-sensitive, match.</p>
   */
  workerGroup: string | undefined;
}

export namespace PollForTaskInput {
  export function isa(o: any): o is PollForTaskInput {
    return __isa(o, "PollForTaskInput");
  }
}

/**
 * <p>Contains the output of PollForTask.</p>
 */
export interface PollForTaskOutput {
  __type?: "PollForTaskOutput";
  /**
   * <p>The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>,
   *             which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a>
   *             and <a>SetTaskStatus</a>.</p>
   */
  taskObject?: TaskObject;
}

export namespace PollForTaskOutput {
  export function isa(o: any): o is PollForTaskOutput {
    return __isa(o, "PollForTaskOutput");
  }
}

/**
 * <p>Contains the parameters for PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionInput {
  __type?: "PutPipelineDefinitionInput";
  /**
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: Array<ParameterObject>;

  /**
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: Array<ParameterValue>;

  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline. These objects overwrite the existing pipeline definition.</p>
   */
  pipelineObjects: Array<PipelineObject> | undefined;
}

export namespace PutPipelineDefinitionInput {
  export function isa(o: any): o is PutPipelineDefinitionInput {
    return __isa(o, "PutPipelineDefinitionInput");
  }
}

/**
 * <p>Contains the output of PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionOutput {
  __type?: "PutPipelineDefinitionOutput";
  /**
   * <p>Indicates whether there were validation errors, and the pipeline definition is stored but cannot be
   *             activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.</p>
   */
  errored: boolean | undefined;

  /**
   * <p>The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationErrors?: Array<ValidationError>;

  /**
   * <p>The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationWarnings?: Array<ValidationWarning>;
}

export namespace PutPipelineDefinitionOutput {
  export function isa(o: any): o is PutPipelineDefinitionOutput {
    return __isa(o, "PutPipelineDefinitionOutput");
  }
}

/**
 * <p>Defines the query to run against an object.</p>
 */
export interface Query {
  __type?: "Query";
  /**
   * <p>List of selectors that define the query. An object must satisfy all of the selectors to match the query.</p>
   */
  selectors?: Array<Selector>;
}

export namespace Query {
  export function isa(o: any): o is Query {
    return __isa(o, "Query");
  }
}

/**
 * <p>Contains the parameters for QueryObjects.</p>
 */
export interface QueryObjectsInput {
  __type?: "QueryObjectsInput";
  /**
   * <p>The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. </p>
   */
  limit?: number;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty.
   *            As long as there are more results, continue to call <code>QueryObjects</code> with
   *            the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;

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
}

export namespace QueryObjectsInput {
  export function isa(o: any): o is QueryObjectsInput {
    return __isa(o, "QueryObjectsInput");
  }
}

/**
 * <p>Contains the output of QueryObjects.</p>
 */
export interface QueryObjectsOutput {
  __type?: "QueryObjectsOutput";
  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;

  /**
   * <p>The identifiers that match the query selectors.</p>
   */
  ids?: Array<string>;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code>
   *            again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;
}

export namespace QueryObjectsOutput {
  export function isa(o: any): o is QueryObjectsOutput {
    return __isa(o, "QueryObjectsOutput");
  }
}

/**
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
  __type?: "RemoveTagsInput";
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace RemoveTagsInput {
  export function isa(o: any): o is RemoveTagsInput {
    return __isa(o, "RemoveTagsInput");
  }
}

/**
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {
  __type?: "RemoveTagsOutput";
}

export namespace RemoveTagsOutput {
  export function isa(o: any): o is RemoveTagsOutput {
    return __isa(o, "RemoveTagsOutput");
  }
}

/**
 * <p>Contains the parameters for ReportTaskProgress.</p>
 */
export interface ReportTaskProgressInput {
  __type?: "ReportTaskProgressInput";
  /**
   * <p>Key-value pairs that define the properties of the ReportTaskProgressInput object.</p>
   */
  fields?: Array<Field>;

  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;
}

export namespace ReportTaskProgressInput {
  export function isa(o: any): o is ReportTaskProgressInput {
    return __isa(o, "ReportTaskProgressInput");
  }
}

/**
 * <p>Contains the output of ReportTaskProgress.</p>
 */
export interface ReportTaskProgressOutput {
  __type?: "ReportTaskProgressOutput";
  /**
   * <p>If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.</p>
   */
  canceled: boolean | undefined;
}

export namespace ReportTaskProgressOutput {
  export function isa(o: any): o is ReportTaskProgressOutput {
    return __isa(o, "ReportTaskProgressOutput");
  }
}

/**
 * <p>Contains the parameters for ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatInput {
  __type?: "ReportTaskRunnerHeartbeatInput";
  /**
   * <p>The public DNS name of the task runner.</p>
   */
  hostname?: string;

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
}

export namespace ReportTaskRunnerHeartbeatInput {
  export function isa(o: any): o is ReportTaskRunnerHeartbeatInput {
    return __isa(o, "ReportTaskRunnerHeartbeatInput");
  }
}

/**
 * <p>Contains the output of ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatOutput {
  __type?: "ReportTaskRunnerHeartbeatOutput";
  /**
   * <p>Indicates whether the calling task runner should terminate.</p>
   */
  terminate: boolean | undefined;
}

export namespace ReportTaskRunnerHeartbeatOutput {
  export function isa(o: any): o is ReportTaskRunnerHeartbeatOutput {
    return __isa(o, "ReportTaskRunnerHeartbeatOutput");
  }
}

/**
 * <p>A comparison that is used to determine whether a query should return this object.</p>
 */
export interface Selector {
  __type?: "Selector";
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
  export function isa(o: any): o is Selector {
    return __isa(o, "Selector");
  }
}

/**
 * <p>Contains the parameters for SetStatus.</p>
 */
export interface SetStatusInput {
  __type?: "SetStatusInput";
  /**
   * <p>The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types.</p>
   */
  objectIds: Array<string> | undefined;

  /**
   * <p>The ID of the pipeline that contains the objects.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The status to be set on all the objects specified in <code>objectIds</code>. For components, use <code>PAUSE</code> or <code>RESUME</code>.
   *             For instances, use <code>TRY_CANCEL</code>, <code>RERUN</code>, or <code>MARK_FINISHED</code>.</p>
   */
  status: string | undefined;
}

export namespace SetStatusInput {
  export function isa(o: any): o is SetStatusInput {
    return __isa(o, "SetStatusInput");
  }
}

/**
 * <p>Contains the parameters for SetTaskStatus.</p>
 */
export interface SetTaskStatusInput {
  __type?: "SetTaskStatusInput";
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

  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string | undefined;

  /**
   * <p>If <code>FINISHED</code>, the task successfully completed. If <code>FAILED</code>, the task ended unsuccessfully. Preconditions use false.</p>
   */
  taskStatus: TaskStatus | string | undefined;
}

export namespace SetTaskStatusInput {
  export function isa(o: any): o is SetTaskStatusInput {
    return __isa(o, "SetTaskStatusInput");
  }
}

/**
 * <p>Contains the output of SetTaskStatus.</p>
 */
export interface SetTaskStatusOutput {
  __type?: "SetTaskStatusOutput";
}

export namespace SetTaskStatusOutput {
  export function isa(o: any): o is SetTaskStatusOutput {
    return __isa(o, "SetTaskStatusOutput");
  }
}

/**
 * <p>Tags are key/value pairs defined by a user and associated with a pipeline to control access. AWS Data Pipeline allows you to associate ten tags per pipeline.
 *             For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html">Controlling User Access to Pipelines</a> in the <i>AWS Data Pipeline Developer Guide</i>.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>The specified task was not found.</p>
 */
export interface TaskNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TaskNotFoundException";
  $fault: "client";
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}

export namespace TaskNotFoundException {
  export function isa(o: any): o is TaskNotFoundException {
    return __isa(o, "TaskNotFoundException");
  }
}

/**
 * <p>Contains information about a pipeline task that is assigned to a task runner.</p>
 */
export interface TaskObject {
  __type?: "TaskObject";
  /**
   * <p>The ID of the pipeline task attempt object. AWS Data Pipeline uses this value to track how many times a task is attempted.</p>
   */
  attemptId?: string;

  /**
   * <p>Connection information for the location where the task runner will publish the output of the task.</p>
   */
  objects?: { [key: string]: PipelineObject };

  /**
   * <p>The ID of the pipeline that provided the task.</p>
   */
  pipelineId?: string;

  /**
   * <p>An internal identifier for the task. This ID is passed to the <a>SetTaskStatus</a> and <a>ReportTaskProgress</a> actions.</p>
   */
  taskId?: string;
}

export namespace TaskObject {
  export function isa(o: any): o is TaskObject {
    return __isa(o, "TaskObject");
  }
}

export enum TaskStatus {
  FAILED = "FAILED",
  FALSE = "FALSE",
  FINISHED = "FINISHED"
}

/**
 * <p>Contains the parameters for ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionInput {
  __type?: "ValidatePipelineDefinitionInput";
  /**
   * <p>The parameter objects used with the pipeline.</p>
   */
  parameterObjects?: Array<ParameterObject>;

  /**
   * <p>The parameter values used with the pipeline.</p>
   */
  parameterValues?: Array<ParameterValue>;

  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string | undefined;

  /**
   * <p>The objects that define the pipeline changes to validate against the pipeline.</p>
   */
  pipelineObjects: Array<PipelineObject> | undefined;
}

export namespace ValidatePipelineDefinitionInput {
  export function isa(o: any): o is ValidatePipelineDefinitionInput {
    return __isa(o, "ValidatePipelineDefinitionInput");
  }
}

/**
 * <p>Contains the output of ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionOutput {
  __type?: "ValidatePipelineDefinitionOutput";
  /**
   * <p>Indicates whether there were validation errors.</p>
   */
  errored: boolean | undefined;

  /**
   * <p>Any validation errors that were found.</p>
   */
  validationErrors?: Array<ValidationError>;

  /**
   * <p>Any validation warnings that were found.</p>
   */
  validationWarnings?: Array<ValidationWarning>;
}

export namespace ValidatePipelineDefinitionOutput {
  export function isa(o: any): o is ValidatePipelineDefinitionOutput {
    return __isa(o, "ValidatePipelineDefinitionOutput");
  }
}

/**
 * <p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationError {
  __type?: "ValidationError";
  /**
   * <p>A description of the validation error.</p>
   */
  errors?: Array<string>;

  /**
   * <p>The identifier of the object that contains the validation error.</p>
   */
  id?: string;
}

export namespace ValidationError {
  export function isa(o: any): o is ValidationError {
    return __isa(o, "ValidationError");
  }
}

/**
 * <p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface ValidationWarning {
  __type?: "ValidationWarning";
  /**
   * <p>The identifier of the object that contains the validation warning.</p>
   */
  id?: string;

  /**
   * <p>A description of the validation warning.</p>
   */
  warnings?: Array<string>;
}

export namespace ValidationWarning {
  export function isa(o: any): o is ValidationWarning {
    return __isa(o, "ValidationWarning");
  }
}
