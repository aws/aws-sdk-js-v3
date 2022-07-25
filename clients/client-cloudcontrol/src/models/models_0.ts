// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CloudControlServiceException as __BaseException } from "./CloudControlServiceException";

/**
 * <p>The resource with the name requested already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

export interface CancelResourceRequestInput {
  /**
   * <p>The <code>RequestToken</code> of the <code>ProgressEvent</code> object returned by the
   *       resource operation request.</p>
   */
  RequestToken: string | undefined;
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

export interface CancelResourceRequestOutput {
  /**
   * <p>Represents the current status of a resource operation request. For more information, see
   *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  ProgressEvent?: ProgressEvent;
}

/**
 * <p>The resource is currently being modified by another operation.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource operation with the specified request token can't be found.</p>
 */
export class RequestTokenNotFoundException extends __BaseException {
  readonly name: "RequestTokenNotFoundException" = "RequestTokenNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTokenNotFoundException, __BaseException>) {
    super({
      name: "RequestTokenNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTokenNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified client token has already been used in another resource request.</p>
 *          <p>It's best practice for client tokens to be unique for each resource operation request.
 *       However, client token expire after 36 hours.</p>
 */
export class ClientTokenConflictException extends __BaseException {
  readonly name: "ClientTokenConflictException" = "ClientTokenConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientTokenConflictException, __BaseException>) {
    super({
      name: "ClientTokenConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientTokenConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Another resource operation is currently being performed on this resource.</p>
 */
export class ConcurrentOperationException extends __BaseException {
  readonly name: "ConcurrentOperationException" = "ConcurrentOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentOperationException, __BaseException>) {
    super({
      name: "ConcurrentOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentOperationException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
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
   *       resource's properties and their desired values.</p>
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
   *       topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>
   */
  DesiredState: string | undefined;
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

/**
 * <p>The resource handler has returned that the downstream service generated an error that
 *       doesn't map to any other handler error code.</p>
 */
export class GeneralServiceException extends __BaseException {
  readonly name: "GeneralServiceException" = "GeneralServiceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GeneralServiceException, __BaseException>) {
    super({
      name: "GeneralServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GeneralServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 */
export class HandlerFailureException extends __BaseException {
  readonly name: "HandlerFailureException" = "HandlerFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandlerFailureException, __BaseException>) {
    super({
      name: "HandlerFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HandlerFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 */
export class HandlerInternalFailureException extends __BaseException {
  readonly name: "HandlerInternalFailureException" = "HandlerInternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandlerInternalFailureException, __BaseException>) {
    super({
      name: "HandlerInternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HandlerInternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 */
export class InvalidCredentialsException extends __BaseException {
  readonly name: "InvalidCredentialsException" = "InvalidCredentialsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCredentialsException, __BaseException>) {
    super({
      name: "InvalidCredentialsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCredentialsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the request couldn't be completed due to networking
 *       issues, such as a failure to receive a response from the server.</p>
 */
export class NetworkFailureException extends __BaseException {
  readonly name: "NetworkFailureException" = "NetworkFailureException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkFailureException, __BaseException>) {
    super({
      name: "NetworkFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 */
export class NotStabilizedException extends __BaseException {
  readonly name: "NotStabilizedException" = "NotStabilizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotStabilizedException, __BaseException>) {
    super({
      name: "NotStabilizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotStabilizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore can't be updated.</p>
 */
export class NotUpdatableException extends __BaseException {
  readonly name: "NotUpdatableException" = "NotUpdatableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotUpdatableException, __BaseException>) {
    super({
      name: "NotUpdatableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotUpdatableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cloud Control API hasn't received a valid response from the resource handler, due to a configuration
 *       error. This includes issues such as the resource handler returning an invalid response, or
 *       timing out.</p>
 */
export class PrivateTypeException extends __BaseException {
  readonly name: "PrivateTypeException" = "PrivateTypeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PrivateTypeException, __BaseException>) {
    super({
      name: "PrivateTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PrivateTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and can't be acted upon until that operation is
 *       finished.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource with the specified identifier can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 */
export class ServiceInternalErrorException extends __BaseException {
  readonly name: "ServiceInternalErrorException" = "ServiceInternalErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceInternalErrorException, __BaseException>) {
    super({
      name: "ServiceInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceInternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 */
export class TypeNotFoundException extends __BaseException {
  readonly name: "TypeNotFoundException" = "TypeNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeNotFoundException, __BaseException>) {
    super({
      name: "TypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource doesn't support this resource operation.</p>
 */
export class UnsupportedActionException extends __BaseException {
  readonly name: "UnsupportedActionException" = "UnsupportedActionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedActionException, __BaseException>) {
    super({
      name: "UnsupportedActionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedActionException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
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
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
   *                <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-handlers">handlers</a>
   *             </code> section of the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">resource type definition schema</a>.</p>
   *          <p>If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions">Specifying credentials</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier for the resource.</p>
   *          <p>You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.</p>
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html">Identifying resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  Identifier: string | undefined;
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

export interface GetResourceRequestStatusInput {
  /**
   * <p>A unique token used to track the progress of the resource operation request.</p>
   *          <p>Request tokens are included in the <code>ProgressEvent</code> type returned by a resource
   *       operation request.</p>
   */
  RequestToken: string | undefined;
}

export interface GetResourceRequestStatusOutput {
  /**
   * <p>Represents the current status of the resource operation request.</p>
   */
  ProgressEvent?: ProgressEvent;
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
   */
  OperationStatuses?: (OperationStatus | string)[];
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
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
   * <p>Reserved.</p>
   */
  MaxResults?: number;

  /**
   * <p>The resource model to use to select the resources to return.</p>
   */
  ResourceModel?: string;
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the <code>
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
   *          <p>For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values <i>in the order they are specified</i> in the primary identifier definition, separated by <code>|</code>.</p>
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

export interface UpdateResourceOutput {
  /**
   * <p>Represents the current status of the resource update request.</p>
   *          <p>Use the <code>RequestToken</code> of the <code>ProgressEvent</code> with <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> to return the current status of a resource operation
   *       request.</p>
   */
  ProgressEvent?: ProgressEvent;
}

/**
 * @internal
 */
export const CancelResourceRequestInputFilterSensitiveLog = (obj: CancelResourceRequestInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProgressEventFilterSensitiveLog = (obj: ProgressEvent): any => ({
  ...obj,
  ...(obj.ResourceModel && { ResourceModel: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CancelResourceRequestOutputFilterSensitiveLog = (obj: CancelResourceRequestOutput): any => ({
  ...obj,
  ...(obj.ProgressEvent && { ProgressEvent: ProgressEventFilterSensitiveLog(obj.ProgressEvent) }),
});

/**
 * @internal
 */
export const CreateResourceInputFilterSensitiveLog = (obj: CreateResourceInput): any => ({
  ...obj,
  ...(obj.DesiredState && { DesiredState: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateResourceOutputFilterSensitiveLog = (obj: CreateResourceOutput): any => ({
  ...obj,
  ...(obj.ProgressEvent && { ProgressEvent: ProgressEventFilterSensitiveLog(obj.ProgressEvent) }),
});

/**
 * @internal
 */
export const DeleteResourceInputFilterSensitiveLog = (obj: DeleteResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceOutputFilterSensitiveLog = (obj: DeleteResourceOutput): any => ({
  ...obj,
  ...(obj.ProgressEvent && { ProgressEvent: ProgressEventFilterSensitiveLog(obj.ProgressEvent) }),
});

/**
 * @internal
 */
export const GetResourceInputFilterSensitiveLog = (obj: GetResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceDescriptionFilterSensitiveLog = (obj: ResourceDescription): any => ({
  ...obj,
  ...(obj.Properties && { Properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetResourceOutputFilterSensitiveLog = (obj: GetResourceOutput): any => ({
  ...obj,
  ...(obj.ResourceDescription && {
    ResourceDescription: ResourceDescriptionFilterSensitiveLog(obj.ResourceDescription),
  }),
});

/**
 * @internal
 */
export const GetResourceRequestStatusInputFilterSensitiveLog = (obj: GetResourceRequestStatusInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceRequestStatusOutputFilterSensitiveLog = (obj: GetResourceRequestStatusOutput): any => ({
  ...obj,
  ...(obj.ProgressEvent && { ProgressEvent: ProgressEventFilterSensitiveLog(obj.ProgressEvent) }),
});

/**
 * @internal
 */
export const ResourceRequestStatusFilterFilterSensitiveLog = (obj: ResourceRequestStatusFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceRequestsInputFilterSensitiveLog = (obj: ListResourceRequestsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceRequestsOutputFilterSensitiveLog = (obj: ListResourceRequestsOutput): any => ({
  ...obj,
  ...(obj.ResourceRequestStatusSummaries && {
    ResourceRequestStatusSummaries: obj.ResourceRequestStatusSummaries.map((item) =>
      ProgressEventFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListResourcesInputFilterSensitiveLog = (obj: ListResourcesInput): any => ({
  ...obj,
  ...(obj.ResourceModel && { ResourceModel: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListResourcesOutputFilterSensitiveLog = (obj: ListResourcesOutput): any => ({
  ...obj,
  ...(obj.ResourceDescriptions && {
    ResourceDescriptions: obj.ResourceDescriptions.map((item) => ResourceDescriptionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateResourceInputFilterSensitiveLog = (obj: UpdateResourceInput): any => ({
  ...obj,
  ...(obj.PatchDocument && { PatchDocument: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateResourceOutputFilterSensitiveLog = (obj: UpdateResourceOutput): any => ({
  ...obj,
  ...(obj.ProgressEvent && { ProgressEvent: ProgressEventFilterSensitiveLog(obj.ProgressEvent) }),
});
