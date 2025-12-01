// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlacierServiceException as __BaseException } from "./GlacierServiceException";

/**
 * <p>Returned if a parameter of the request is incorrectly specified.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>400 Bad Request</p>
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
 * <p>Returned if a required header or parameter is missing from the request.</p>
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  readonly name = "MissingParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>400 Bad Request</p>
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
 * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>404 Not Found</p>
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
 * <p>Returned if the service cannot complete the request.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Server</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>500 Internal Server Error</p>
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
 * <p>Returned if the request results in a vault or account limit being exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>400 Bad Request</p>
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
 * <p>Returned if there is insufficient capacity to process this expedited request. This
 *          error only applies to expedited retrievals and not to standard or bulk
 *          retrievals.</p>
 * @public
 */
export class InsufficientCapacityException extends __BaseException {
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
 * <p>Returned if a retrieval job would exceed the current data policy's retrieval rate
 *          limit. For more information about data retrieval policies,</p>
 * @public
 */
export class PolicyEnforcedException extends __BaseException {
  readonly name = "PolicyEnforcedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>PolicyEnforcedException</p>
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
 * <p>Returned if, when uploading an archive, Amazon S3 Glacier times out while receiving the
 *          upload.</p>
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Client</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>408 Request Timeout</p>
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
