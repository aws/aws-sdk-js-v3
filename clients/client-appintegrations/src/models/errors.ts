// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppIntegrationsServiceException as __BaseException } from "./AppIntegrationsServiceException";

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
 * <p>A resource with the specified name already exists.</p>
 * @public
 */
export class DuplicateResourceException extends __BaseException {
  readonly name = "DuplicateResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
 * <p>The request is not valid. </p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
 * <p>The allowed quota for the resource has been exceeded.</p>
 * @public
 */
export class ResourceQuotaExceededException extends __BaseException {
  readonly name = "ResourceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceQuotaExceededException, __BaseException>) {
    super({
      name: "ResourceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The throttling limit has been exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
 * <p>The operation is not supported.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
