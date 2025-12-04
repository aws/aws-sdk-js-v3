// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { TransferServiceException as __BaseException } from "./TransferServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is thrown when the client submits a malformed request.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name = "ResourceExistsException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.Resource = opts.Resource;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  Resource: string | undefined;
  ResourceType: string | undefined;
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
    this.Resource = opts.Resource;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  RetryAfterSeconds?: string | undefined;
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer protocol-enabled server that has VPC as the endpoint type and the server's <code>VpcEndpointID</code> is not in the available state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}
