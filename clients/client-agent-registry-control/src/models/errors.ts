// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AgentRegistryControlServiceException as __BaseException } from "./AgentRegistryControlServiceException";
import type { ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";

/**
 * <p>The caller is not authorized to perform the requested action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#AccessDeniedException";
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
 * <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#InternalServerException";
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
 * <p>The requested resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#ResourceNotFoundException";
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
 * <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#ThrottlingException";
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
 * <p>The request failed validation of one or more input fields.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The list of input fields that failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The request conflicts with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request would exceed a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentregistrycontrol#ServiceQuotaExceededException";
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
