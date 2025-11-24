// smithy-typescript generated code
import { HandlerErrorCode, Operation, OperationStatus } from "./enums";

/**
 * @public
 */
export interface CancelResourceRequestInput {
  /**
   * <p>The <code>RequestToken</code> of the <code>ProgressEvent</code> object returned by the
   *       resource operation request.</p>
   * @public
   */
  RequestToken: string | undefined;
}

/**
 * <p>Represents the current status of a resource operation request. For more information, see
 *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 * @public
 */
export interface ProgressEvent {
  /**
   * <p>The name of the resource type used in the operation.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The primary identifier for the resource.</p>
   *          <note>
   *             <p>In some cases, the resource identifier may be available before the resource operation
   *         has reached a status of <code>SUCCESS</code>.</p>
   *          </note>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The unique token representing this resource operation request.</p>
   *          <p>Use the <code>RequestToken</code> with <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> to return the current status of a resource operation
   *       request.</p>
   * @public
   */
  RequestToken?: string | undefined;

  /**
   * <p>The unique token representing the Hooks operation for the request.</p>
   * @public
   */
  HooksRequestToken?: string | undefined;

  /**
   * <p>The resource operation type.</p>
   * @public
   */
  Operation?: Operation | undefined;

  /**
   * <p>The current status of the resource operation request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The resource operation hasn't yet started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The resource operation is currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>: The resource operation has successfully completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The resource operation has failed. Refer to the error code and
   *           status message for more information.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_IN_PROGRESS</code>: The resource operation is in the process of being
   *           canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_COMPLETE</code>: The resource operation has been canceled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OperationStatus?: OperationStatus | undefined;

  /**
   * <p>When the resource operation request was initiated.</p>
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * <p>A JSON string containing the resource model, consisting of each resource property and its
   *       current value.</p>
   * @public
   */
  ResourceModel?: string | undefined;

  /**
   * <p>Any message explaining the current status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>For requests with a status of <code>FAILED</code>, the associated error code.</p>
   *          <p>For error code definitions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test-contract-errors.html">Handler error codes</a> in the <i>CloudFormation Command
   *         Line Interface User Guide for Extension Development</i>.</p>
   * @public
   */
  ErrorCode?: HandlerErrorCode | undefined;

  /**
   * <p>When to next request the status of this resource operation request.</p>
   * @public
   */
  RetryAfter?: Date | undefined;
}

/**
 * @public
 */
export interface CancelResourceRequestOutput {
  /**
   * <p>Represents the current status of a resource operation request. For more information, see
   *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface CreateResourceInput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource
   *                                      operation. If you do not specify a resource version, CloudFormation
   *                                      uses the default version.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management
   *                                     (IAM) role for Cloud Control API to use when performing this resource
   *                                     operation. The role specified must have the permissions required for this
   *                                     operation. The necessary permissions for each event handler are defined in the
   *                                     <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code>
   *                                     section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type
   *                                     definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using
   *                                     your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying
   *                                     credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a
   *                                      best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can
   *                                      accurately distinguish between request retries and new resource requests. You
   *                                      might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource
   *                                      request with the same client token is treated as a new request.</p>
   *          <p>If you
   *                                      do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring
   *                                      resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User
   *                                      Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Structured data format representing the desired state of the resource, consisting of that
   *       resource's properties and their desired values.</p>
   *          <note>
   *             <p>Cloud Control API currently supports JSON as a structured data format.</p>
   *          </note>
   *          <p>Specify the desired state as one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>A JSON blob</p>
   *             </li>
   *             <li>
   *                <p>A local path containing the desired state in JSON data format</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html#resource-operations-create-desiredstate">Composing the desired state of the resource</a> in the <i>Amazon Web Services Cloud Control API User
   *         Guide</i>.</p>
   *          <p>For more information about the properties of a specific resource, refer to the related
   *       topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>
   * @public
   */
  DesiredState: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceOutput {
  /**
   * <p>Represents the current status of the resource creation request.</p>
   *          <p>After you have initiated a resource creation request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>CreateResource</code>.</p>
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface DeleteResourceInput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource
   *                                      operation. If you do not specify a resource version, CloudFormation
   *                                      uses the default version.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management
   *                                     (IAM) role for Cloud Control API to use when performing this resource
   *                                     operation. The role specified must have the permissions required for this
   *                                     operation. The necessary permissions for each event handler are defined in the
   *                                     <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code>
   *                                     section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type
   *                                     definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using
   *                                     your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying
   *                                     credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a
   *                                      best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can
   *                                      accurately distinguish between request retries and new resource requests. You
   *                                      might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource
   *                                      request with the same client token is treated as a new request.</p>
   *          <p>If you
   *                                      do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring
   *                                      resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User
   *                                      Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier
   *                                             defined for the resource type in its resource schema. You can only specify
   *                                             one identifier. Primary identifiers can be specified as a string or JSON;
   *                                             secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of
   *                                             multiple resource properties strung together), to specify the primary
   *                                             identifier as a string, list the property values <i>in the order
   *                                             they are specified</i> in the primary identifier definition,
   *                                             separated by <code>|</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying
   *                                             resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceOutput {
  /**
   * <p>Represents the current status of the resource deletion request.</p>
   *          <p>After you have initiated a resource deletion request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface GetResourceInput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource
   *                                      operation. If you do not specify a resource version, CloudFormation
   *                                      uses the default version.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management
   *                                     (IAM) role for Cloud Control API to use when performing this resource
   *                                     operation. The role specified must have the permissions required for this
   *                                     operation. The necessary permissions for each event handler are defined in the
   *                                     <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code>
   *                                     section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type
   *                                     definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using
   *                                     your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying
   *                                     credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier
   *                                             defined for the resource type in its resource schema. You can only specify
   *                                             one identifier. Primary identifiers can be specified as a string or JSON;
   *                                             secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of
   *                                             multiple resource properties strung together), to specify the primary
   *                                             identifier as a string, list the property values <i>in the order
   *                                             they are specified</i> in the primary identifier definition,
   *                                             separated by <code>|</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying
   *                                             resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>Represents information about a provisioned resource.</p>
 * @public
 */
export interface ResourceDescription {
  /**
   * <p>The primary identifier for the resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying
   *         resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>A list of the resource properties and their current values.</p>
   * @public
   */
  Properties?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceOutput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>Represents information about a provisioned resource.</p>
   * @public
   */
  ResourceDescription?: ResourceDescription | undefined;
}

/**
 * @public
 */
export interface GetResourceRequestStatusInput {
  /**
   * <p>A unique token used to track the progress of the resource operation request.</p>
   *          <p>Request tokens are included in the <code>ProgressEvent</code> type returned by a resource
   *       operation request.</p>
   * @public
   */
  RequestToken: string | undefined;
}

/**
 * <p>Represents the current status of applicable Hooks for a resource operation request. It contains list of
 *       Hook invocation information for the resource specified in the request since the same target can invoke multiple Hooks.
 *       For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests with Amazon Web Services Cloud Control API
 *     </a>.</p>
 * @public
 */
export interface HookProgressEvent {
  /**
   * <p>The type name of the Hook being invoked.</p>
   * @public
   */
  HookTypeName?: string | undefined;

  /**
   * <p>The type version of the Hook being invoked.</p>
   * @public
   */
  HookTypeVersionId?: string | undefined;

  /**
   * <p>The ARN of the Hook being invoked.</p>
   * @public
   */
  HookTypeArn?: string | undefined;

  /**
   * <p>States whether the Hook is invoked before or after resource provisioning.</p>
   * @public
   */
  InvocationPoint?: string | undefined;

  /**
   * <p>The status of the Hook invocation. The following are potential statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOOK_PENDING</code>: The Hook was added to the invocation plan, but not yet invoked.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_IN_PROGRESS</code>: The Hook was invoked, but hasn't completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_SUCCEEDED</code>: The Hook invocation is complete with a successful result.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_FAILED</code>: The Hook invocation is complete with a failed result.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_FAILED</code>: The Hook invocation didn't complete successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  HookStatus?: string | undefined;

  /**
   * <p>The time that the Hook invocation request initiated.</p>
   * @public
   */
  HookEventTime?: Date | undefined;

  /**
   * <p>The message explaining the current Hook status.</p>
   * @public
   */
  HookStatusMessage?: string | undefined;

  /**
   * <p>The failure mode of the invocation. The following are the potential statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAIL</code>: This will fail the Hook invocation and the request associated with it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN</code>: This will fail the Hook invocation, but not the request associated with it.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureMode?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceRequestStatusOutput {
  /**
   * <p>Represents the current status of the resource operation request.</p>
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;

  /**
   * <p>Lists Hook invocations for the specified target in the request. This is a list since the same target can invoke multiple Hooks.</p>
   * @public
   */
  HooksProgressEvent?: HookProgressEvent[] | undefined;
}

/**
 * <p>The filter criteria to use in determining the requests returned.</p>
 * @public
 */
export interface ResourceRequestStatusFilter {
  /**
   * <p>The operation types to include in the filter.</p>
   * @public
   */
  Operations?: Operation[] | undefined;

  /**
   * <p>The operation statuses to include in the filter.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation has been requested, but not yet initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The operation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>: The operation completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_IN_PROGRESS</code>: The operation is in the process of being
   *           canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_COMPLETE</code>: The operation has been canceled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OperationStatuses?: OperationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListResourceRequestsInput {
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   *          <p>The default is <code>20</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results,
   *                                    the response object's <code>NextToken</code> parameter value is set to a token.
   *                                    To retrieve the next set of results, call this action again and assign that token to
   *                                    the request object's <code>NextToken</code> parameter. If there are no remaining
   *                                    results, the previous response object's <code>NextToken</code> parameter is set to
   *                                    <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filter criteria to apply to the requests returned.</p>
   * @public
   */
  ResourceRequestStatusFilter?: ResourceRequestStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListResourceRequestsOutput {
  /**
   * <p>The requests that match the specified filter criteria.</p>
   * @public
   */
  ResourceRequestStatusSummaries?: ProgressEvent[] | undefined;

  /**
   * <p>If the request doesn't return all of the remaining results,
   *                                     <code>NextToken</code> is set to a token. To retrieve the next set of results, call
   *                                     <code>ListResources</code> again and assign that token to the request object's
   *                                     <code>NextToken</code> parameter. If the request returns all results,
   *                                     <code>NextToken</code> is set to null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesInput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource
   *                                      operation. If you do not specify a resource version, CloudFormation
   *                                      uses the default version.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management
   *                                     (IAM) role for Cloud Control API to use when performing this resource
   *                                     operation. The role specified must have the permissions required for this
   *                                     operation. The necessary permissions for each event handler are defined in the
   *                                     <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code>
   *                                     section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type
   *                                     definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using
   *                                     your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying
   *                                     credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results,
   *                                    the response object's <code>NextToken</code> parameter value is set to a token.
   *                                    To retrieve the next set of results, call this action again and assign that token to
   *                                    the request object's <code>NextToken</code> parameter. If there are no remaining
   *                                    results, the previous response object's <code>NextToken</code> parameter is set to
   *                                    <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The resource model to use to select the resources to return.</p>
   * @public
   */
  ResourceModel?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesOutput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>Information about the specified resources, including primary identifier and resource
   *       model.</p>
   * @public
   */
  ResourceDescriptions?: ResourceDescription[] | undefined;

  /**
   * <p>If the request doesn't return all of the remaining results,
   *                                     <code>NextToken</code> is set to a token. To retrieve the next set of results, call
   *                                     <code>ListResources</code> again and assign that token to the request object's
   *                                     <code>NextToken</code> parameter. If the request returns all results,
   *                                     <code>NextToken</code> is set to null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceInput {
  /**
   * <p>The name of the resource type.</p>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource
   *                                      operation. If you do not specify a resource version, CloudFormation
   *                                      uses the default version.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management
   *                                     (IAM) role for Cloud Control API to use when performing this resource
   *                                     operation. The role specified must have the permissions required for this
   *                                     operation. The necessary permissions for each event handler are defined in the
   *                                     <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code>
   *                                     section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type
   *                                     definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using
   *                                     your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying
   *                                     credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a
   *                                      best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can
   *                                      accurately distinguish between request retries and new resource requests. You
   *                                      might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource
   *                                      request with the same client token is treated as a new request.</p>
   *          <p>If you
   *                                      do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring
   *                                      resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User
   *                                      Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier
   *                                             defined for the resource type in its resource schema. You can only specify
   *                                             one identifier. Primary identifiers can be specified as a string or JSON;
   *                                             secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of
   *                                             multiple resource properties strung together), to specify the primary
   *                                             identifier as a string, list the property values <i>in the order
   *                                             they are specified</i> in the primary identifier definition,
   *                                             separated by <code>|</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying
   *                                             resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A JavaScript Object Notation (JSON) document listing the patch operations that represent
   *       the updates to apply to the current resource properties. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html#resource-operations-update-patch">Composing the patch document</a> in the <i>Amazon Web Services Cloud Control API User
   *       Guide</i>.</p>
   * @public
   */
  PatchDocument: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceOutput {
  /**
   * <p>Represents the current status of the resource update request.</p>
   *          <p>Use the <code>RequestToken</code> of the <code>ProgressEvent</code> with <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> to return the current status of a resource operation
   *       request.</p>
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}
