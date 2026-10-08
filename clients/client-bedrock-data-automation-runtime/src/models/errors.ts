// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  BedrockDataAutomationRuntimeServiceException as __BaseException,
} from "./BedrockDataAutomationRuntimeServiceException";

/**
 * This exception will be thrown when customer does not have access to API.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception is for any internal un-expected service errors.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#InternalServerException";
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
 * This exception will be thrown when resource provided from customer not found.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#ResourceNotFoundException";
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
 * This exception will be thrown when customer reached API TPS limit.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception will be thrown when customer provided invalid parameters.
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#ValidationException";
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

/**
 * This exception will be thrown when service quota is exceeded.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#ServiceQuotaExceededException";
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
 * This exception will be thrown when service is temporarily unavailable.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.bedrockdataautomationruntime#ServiceUnavailableException";
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
