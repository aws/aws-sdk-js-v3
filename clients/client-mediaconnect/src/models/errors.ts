// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaConnectServiceException as __BaseException } from "./MediaConnectServiceException";

/**
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
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

/**
 * <p>You do not have sufficient access to perform this action. </p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The server encountered an internal error and is unable to complete the request. </p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the resources in the request does not exist in the system. </p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable or busy. </p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  Message: string | undefined;
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
 * <p>The request was denied due to request throttling. </p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised by Elemental MediaConnect when adding the flow output. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class AddFlowOutputs420Exception extends __BaseException {
  readonly name = "AddFlowOutputs420Exception" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AddFlowOutputs420Exception, __BaseException>) {
    super({
      name: "AddFlowOutputs420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AddFlowOutputs420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised by Elemental MediaConnect when creating the bridge. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateBridge420Exception extends __BaseException {
  readonly name = "CreateBridge420Exception" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateBridge420Exception, __BaseException>) {
    super({
      name: "CreateBridge420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateBridge420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised by Elemental MediaConnect when creating the flow. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateFlow420Exception extends __BaseException {
  readonly name = "CreateFlow420Exception" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateFlow420Exception, __BaseException>) {
    super({
      name: "CreateFlow420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateFlow420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised by Elemental MediaConnect when creating the gateway. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateGateway420Exception extends __BaseException {
  readonly name = "CreateGateway420Exception" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateGateway420Exception, __BaseException>) {
    super({
      name: "CreateGateway420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateGateway420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised by Elemental MediaConnect when granting the entitlement. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class GrantFlowEntitlements420Exception extends __BaseException {
  readonly name = "GrantFlowEntitlements420Exception" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GrantFlowEntitlements420Exception, __BaseException>) {
    super({
      name: "GrantFlowEntitlements420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GrantFlowEntitlements420Exception.prototype);
    this.Message = opts.Message;
  }
}
