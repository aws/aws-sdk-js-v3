// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTJobsDataPlaneServiceException as __BaseException } from "./IoTJobsDataPlaneServiceException";

/**
 * <p>The certificate is invalid.</p>
 * @public
 */
export class CertificateValidationException extends __BaseException {
  readonly name = "CertificateValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateValidationException, __BaseException>) {
    super({
      name: "CertificateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateValidationException.prototype);
  }
}

/**
 * <p>A conflict has occurred when performing the API request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A conflict occurred while performing the API request on the resource ID.</p>
   * @public
   */
  resourceId?: string | undefined;

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
    this.resourceId = opts.resourceId;
  }
}

/**
 * <p>The contents of the request were invalid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>The job is in a terminal state.</p>
 * @public
 */
export class TerminalStateException extends __BaseException {
  readonly name = "TerminalStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TerminalStateException, __BaseException>) {
    super({
      name: "TerminalStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TerminalStateException.prototype);
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The payload associated with the exception.</p>
   * @public
   */
  payload?: Uint8Array | undefined;

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
    this.payload = opts.payload;
  }
}

/**
 * <p>An internal server error occurred when performing the API request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>An update attempted to change the job execution to a state that is invalid because of
 *          the job execution's current state (for example, an attempt to change a request in state
 *          SUCCESS to state IN_PROGRESS). In this case, the body of the error message also contains
 *          the executionState field.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name = "InvalidStateTransitionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
  }
}

/**
 * <p>The service quota has been exceeded for this request.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>A validation error occurred when performing the API request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}
