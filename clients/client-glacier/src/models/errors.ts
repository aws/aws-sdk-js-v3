// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { GlacierServiceException as __BaseException } from "./GlacierServiceException";

/**
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 400 Bad Request
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if a required header or parameter is missing from the request.
 *
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#MissingParameterValueException";
  readonly name = "MissingParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * Client.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 400 Bad Request
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @public
 */
export class NoLongerSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#NoLongerSupportedException";
  readonly name = "NoLongerSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 400 Bad Request
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoLongerSupportedException, __BaseException>) {
    super({
      name: "NoLongerSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoLongerSupportedException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 404 Not Found
   *
   * @public
   */
  code?: string | undefined;

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
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if the service cannot complete the request.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * Server
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 500 Internal Server Error
   *
   * @public
   */
  code?: string | undefined;

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
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if the request results in a vault or account limit being exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 400 Bad Request
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if there is insufficient capacity to process this expedited request. This error only applies to expedited retrievals and not to standard or bulk retrievals.
 *
 * @public
 */
export class InsufficientCapacityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#InsufficientCapacityException";
  readonly name = "InsufficientCapacityException" as const;
  readonly $fault = "client" as const;
  type?: string | undefined;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if a retrieval job would exceed the current data policy's retrieval rate limit. For more information about data retrieval policies,
 *
 * @public
 */
export class PolicyEnforcedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#PolicyEnforcedException";
  readonly name = "PolicyEnforcedException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * PolicyEnforcedException
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyEnforcedException, __BaseException>) {
    super({
      name: "PolicyEnforcedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyEnforcedException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}

/**
 * Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.
 *
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.glacier#RequestTimeoutException";
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * Client
   *
   * @public
   */
  type?: string | undefined;

  /**
   * 408 Request Timeout
   *
   * @public
   */
  code?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    this.type = opts.type;
    this.code = opts.code;
  }
}
