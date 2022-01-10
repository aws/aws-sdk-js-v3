import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The resource with the name requested already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export interface CancelResourceRequestInput {
  /**
   * <p>The <code>RequestToken</code> of the <code>ProgressEvent</code> object returned by the
   *       resource operation request.</p>
   */
  RequestToken: string | undefined;
}

export namespace CancelResourceRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelResourceRequestInput): any => ({
    ...obj,
  });
}

export enum HandlerErrorCode {
  ACCESS_DENIED = "AccessDenied",
  ALREADY_EXISTS = "AlreadyExists",
  GENERAL_SERVICE_EXCEPTION = "GeneralServiceException",
  INTERNAL_FAILURE = "InternalFailure",
  INVALID_CREDENTIALS = "InvalidCredentials",
  INVALID_REQUEST = "InvalidRequest",
  NETWORK_FAILURE = "NetworkFailure",
  NOT_FOUND = "NotFound",
  NOT_STABILIZED = "NotStabilized",
  NOT_UPDATABLE = "NotUpdatable",
  RESOURCE_CONFLICT = "ResourceConflict",
  SERVICE_INTERNAL_ERROR = "ServiceInternalError",
  SERVICE_LIMIT_EXCEEDED = "ServiceLimitExceeded",
  SERVICE_TIMEOUT = "ServiceTimeout",
  THROTTLING = "Throttling",
}

export enum Operation {
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

export enum OperationStatus {
  CANCEL_COMPLETE = "CANCEL_COMPLETE",
  CANCEL_IN_PROGRESS = "CANCEL_IN_PROGRESS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Represents the current status of a resource operation request. For more information, see
 *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 */
export interface ProgressEvent {
  /**
   * <p>The name of the resource type used in the operation.</p>
   */
  TypeName?: string;

  /**
   * <p>The primary identifier for the resource.</p>
   *          <note>
   *             <p>In some cases, the resource identifier may be available before the resource operation
   *         has reached a status of <code>SUCCESS</code>.</p>
   *          </note>
   */
  Identifier?: string;

  /**
   * <p>The unique token representing this resource operation request.</p>
   *          <p>Use the <code>RequestToken</code> with <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> to return the current status of a resource operation
   *       request.</p>
   */
  RequestToken?: string;

  /**
   * <p>The resource operation type.</p>
   */
  Operation?: Operation | string;

  /**
   * <p>The current status of the resource operation request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The resource operation has not yet started.</p>
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
   */
  OperationStatus?: OperationStatus | string;

  /**
   * <p>When the resource operation request was initiated.</p>
   */
  EventTime?: Date;

  /**
   * <p>A JSON string containing the resource model, consisting of each resource property and its
   *       current value.</p>
   */
  ResourceModel?: string;

  /**
   * <p>Any message explaining the current status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>For requests with a status of <code>FAILED</code>, the associated error code.</p>
   *          <p>For error code definitions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test-contract-errors.html">Handler error codes</a> in the <i>CloudFormation Command
   *         Line Interface User Guide for Extension Development</i>.</p>
   */
  ErrorCode?: HandlerErrorCode | string;

  /**
   * <p>When to next request the status of this resource operation request.</p>
   */
  RetryAfter?: Date;
}

export namespace ProgressEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProgressEvent): any => ({
    ...obj,
    ...(obj.ResourceModel && { ResourceModel: SENSITIVE_STRING }),
  });
}

export interface CancelResourceRequestOutput {
  /**
   * <p>Represents the current status of a resource operation request. For more information, see
   *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  ProgressEvent?: ProgressEvent;
}

export namespace CancelResourceRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelResourceRequestOutput): any => ({
    ...obj,
    ...(obj.ProgressEvent && { ProgressEvent: ProgressEvent.filterSensitiveLog(obj.ProgressEvent) }),
  });
}

/**
 * <p>The resource is currently being modified by another operation.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "server";
  Message?: string;
}

/**
 * <p>A resource operation with the specified request token cannot be found.</p>
 */
export interface RequestTokenNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RequestTokenNotFoundException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The specified client token has already been used in another resource request.</p>
 *          <p>It is best practice for client tokens to be unique for each resource operation request.
 *       However, client token expire after 36 hours.</p>
 */
export interface ClientTokenConflictException extends __SmithyException, $MetadataBearer {
  name: "ClientTokenConflictException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>Another resource operation is currently being performed on this resource.</p>
 */
export interface ConcurrentOperationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentOperationException";
  $fault: "client";
  Message?: string;
}

export interface CreateResourceInput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.</p>
   */
  TypeVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.</p>
   *          <p>If you do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Structured data format representing the desired state of the resource, consisting of that
   *       resource's properties and their desired values. </p>
   *          <note>
   *             <p>Cloud Control API currently supports JSON as a structured data format.</p>
   *          </note>
   *
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
   *       topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>Amazon Web Services
   *         CloudFormation Users Guide</i>.</p>
   */
  DesiredState: string | undefined;
}

export namespace CreateResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceInput): any => ({
    ...obj,
    ...(obj.DesiredState && { DesiredState: SENSITIVE_STRING }),
  });
}

export interface CreateResourceOutput {
  /**
   * <p>Represents the current status of the resource creation request.</p>
   *          <p>After you have initiated a resource creation request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>CreateResource</code>.</p>
   */
  ProgressEvent?: ProgressEvent;
}

export namespace CreateResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceOutput): any => ({
    ...obj,
    ...(obj.ProgressEvent && { ProgressEvent: ProgressEvent.filterSensitiveLog(obj.ProgressEvent) }),
  });
}

/**
 * <p>The resource handler has returned that the downstream service generated an error that does
 *       not map to any other handler error code.</p>
 */
export interface GeneralServiceException extends __SmithyException, $MetadataBearer {
  name: "GeneralServiceException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 */
export interface HandlerFailureException extends __SmithyException, $MetadataBearer {
  name: "HandlerFailureException";
  $fault: "server";
  Message?: string;
}

/**
 * <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 */
export interface HandlerInternalFailureException extends __SmithyException, $MetadataBearer {
  name: "HandlerInternalFailureException";
  $fault: "server";
  Message?: string;
}

/**
 * <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 */
export interface InvalidCredentialsException extends __SmithyException, $MetadataBearer {
  name: "InvalidCredentialsException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The resource handler has returned that the request could not be completed due to
 *       networking issues, such as a failure to receive a response from the server.</p>
 */
export interface NetworkFailureException extends __SmithyException, $MetadataBearer {
  name: "NetworkFailureException";
  $fault: "server";
  Message?: string;
}

/**
 * <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 */
export interface NotStabilizedException extends __SmithyException, $MetadataBearer {
  name: "NotStabilizedException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore cannot be updated.</p>
 */
export interface NotUpdatableException extends __SmithyException, $MetadataBearer {
  name: "NotUpdatableException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>Cloud Control API has not received a valid response from the resource handler, due to a
 *       configuration error. This includes issues such as the resource handler returning an invalid
 *       response, or timing out.</p>
 */
export interface PrivateTypeException extends __SmithyException, $MetadataBearer {
  name: "PrivateTypeException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and cannot be acted upon until that operation is
 *       finished.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>A resource with the specified identifier cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 */
export interface ServiceInternalErrorException extends __SmithyException, $MetadataBearer {
  name: "ServiceInternalErrorException";
  $fault: "server";
  Message?: string;
}

/**
 * <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 */
export interface ServiceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceLimitExceededException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The specified extension does not exist in the CloudFormation registry.</p>
 */
export interface TypeNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TypeNotFoundException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>The specified resource does not support this resource operation.</p>
 */
export interface UnsupportedActionException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedActionException";
  $fault: "client";
  Message?: string;
}

export interface DeleteResourceInput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.</p>
   */
  TypeVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.</p>
   *          <p>If you do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier: string | undefined;
}

export namespace DeleteResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceInput): any => ({
    ...obj,
  });
}

export interface DeleteResourceOutput {
  /**
   * <p>Represents the current status of the resource deletion request.</p>
   *          <p>After you have initiated a resource deletion request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
   */
  ProgressEvent?: ProgressEvent;
}

export namespace DeleteResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceOutput): any => ({
    ...obj,
    ...(obj.ProgressEvent && { ProgressEvent: ProgressEvent.filterSensitiveLog(obj.ProgressEvent) }),
  });
}

export interface GetResourceInput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.</p>
   */
  TypeVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier: string | undefined;
}

export namespace GetResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents information about a provisioned resource.</p>
 */
export interface ResourceDescription {
  /**
   * <p>The primary identifier for the resource.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying
   *         resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier?: string;

  /**
   * <p>A list of the resource properties and their current values.</p>
   */
  Properties?: string;
}

export namespace ResourceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDescription): any => ({
    ...obj,
    ...(obj.Properties && { Properties: SENSITIVE_STRING }),
  });
}

export interface GetResourceOutput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName?: string;

  /**
   * <p>Represents information about a provisioned resource.</p>
   */
  ResourceDescription?: ResourceDescription;
}

export namespace GetResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceOutput): any => ({
    ...obj,
    ...(obj.ResourceDescription && {
      ResourceDescription: ResourceDescription.filterSensitiveLog(obj.ResourceDescription),
    }),
  });
}

export interface GetResourceRequestStatusInput {
  /**
   * <p>A unique token used to track the progress of the resource operation request.</p>
   *          <p>Request tokens are included in the <code>ProgressEvent</code> type returned by a resource
   *       operation request.</p>
   */
  RequestToken: string | undefined;
}

export namespace GetResourceRequestStatusInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceRequestStatusInput): any => ({
    ...obj,
  });
}

export interface GetResourceRequestStatusOutput {
  /**
   * <p>Represents the current status of the resource operation request.</p>
   */
  ProgressEvent?: ProgressEvent;
}

export namespace GetResourceRequestStatusOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceRequestStatusOutput): any => ({
    ...obj,
    ...(obj.ProgressEvent && { ProgressEvent: ProgressEvent.filterSensitiveLog(obj.ProgressEvent) }),
  });
}

/**
 * <p>The filter criteria to use in determining the requests returned.</p>
 */
export interface ResourceRequestStatusFilter {
  /**
   * <p>The operation types to include in the filter.</p>
   */
  Operations?: (Operation | string)[];

  /**
   * <p>The operation statuses to include in the filter.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation has been requested, but not yet initiated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The operation is currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>: The operation has successfully completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_IN_PROGRESS</code>: The operation is currently in the process of being
   *           canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_COMPLETE</code>: The operation has been canceled.</p>
   *             </li>
   *          </ul>
   */
  OperationStatuses?: (OperationStatus | string)[];
}

export namespace ResourceRequestStatusFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceRequestStatusFilter): any => ({
    ...obj,
  });
}

export interface ListResourceRequestsInput {
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   *          <p>The default is <code>20</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The filter criteria to apply to the requests returned.</p>
   */
  ResourceRequestStatusFilter?: ResourceRequestStatusFilter;
}

export namespace ListResourceRequestsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceRequestsInput): any => ({
    ...obj,
  });
}

export interface ListResourceRequestsOutput {
  /**
   * <p>The requests that match the specified filter criteria.</p>
   */
  ResourceRequestStatusSummaries?: ProgressEvent[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListResources</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to null.</p>
   */
  NextToken?: string;
}

export namespace ListResourceRequestsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceRequestsOutput): any => ({
    ...obj,
    ...(obj.ResourceRequestStatusSummaries && {
      ResourceRequestStatusSummaries: obj.ResourceRequestStatusSummaries.map((item) =>
        ProgressEvent.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListResourcesInput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.</p>
   */
  TypeVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   *          <p>The default is <code>20</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The resource model to use to select the resources to return.</p>
   */
  ResourceModel?: string;
}

export namespace ListResourcesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesInput): any => ({
    ...obj,
    ...(obj.ResourceModel && { ResourceModel: SENSITIVE_STRING }),
  });
}

export interface ListResourcesOutput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName?: string;

  /**
   * <p>Information about the specified resources, including primary identifier and resource
   *       model.</p>
   */
  ResourceDescriptions?: ResourceDescription[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call <code>ListResources</code> again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to null.</p>
   */
  NextToken?: string;
}

export namespace ListResourcesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesOutput): any => ({
    ...obj,
    ...(obj.ResourceDescriptions && {
      ResourceDescriptions: obj.ResourceDescriptions.map((item) => ResourceDescription.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateResourceInput {
  /**
   * <p>The name of the resource type.</p>
   */
  TypeName: string | undefined;

  /**
   * <p>For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.</p>
   */
  TypeVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.</p>
   *          <p>A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.</p>
   *          <p>If you do not specify a client token, one is generated for inclusion in the request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency">Ensuring resource operation requests are unique</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>A JavaScript Object Notation (JSON) document listing the patch operations that represent
   *       the updates to apply to the current resource properties. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html#resource-operations-update-patch">Composing the patch document</a> in the <i>Amazon Web Services Cloud Control API User
   *       Guide</i>.</p>
   */
  PatchDocument: string | undefined;
}

export namespace UpdateResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceInput): any => ({
    ...obj,
    ...(obj.PatchDocument && { PatchDocument: SENSITIVE_STRING }),
  });
}

export interface UpdateResourceOutput {
  /**
   * <p>Represents the current status of the resource update request.</p>
   *          <p>Use the <code>RequestToken</code> of the <code>ProgressEvent</code> with <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> to return the current status of a resource operation
   *       request.</p>
   */
  ProgressEvent?: ProgressEvent;
}

export namespace UpdateResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceOutput): any => ({
    ...obj,
    ...(obj.ProgressEvent && { ProgressEvent: ProgressEvent.filterSensitiveLog(obj.ProgressEvent) }),
  });
}
