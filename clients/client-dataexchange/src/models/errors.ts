// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DataExchangeServiceException as __BaseException } from "./DataExchangeServiceException";
import type { ExceptionCause, LimitName, ResourceType } from "./enums";

/**
 * Access to the resource is denied.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Access to the resource is denied.
   *
   * @public
   */
  Message: string | undefined;
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
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The request couldn't be completed because it conflicted with the current state of the resource.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The unique identifier for the resource with the conflict.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the resource with the conflict.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * An exception occurred with the service.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * The message identifying the service exception that occurred.
   *
   * @public
   */
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The resource couldn't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The resource couldn't be found.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The unique identifier for the resource that couldn't be found.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource that couldn't be found.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * The limit on the number of requests per second was exceeded.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * The limit on the number of requests per second was exceeded.
   *
   * @public
   */
  Message: string | undefined;
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
 * The request was invalid.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The message that informs you about what was invalid about the request.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The unique identifier for the resource that couldn't be found.
   *
   * @public
   */
  ExceptionCause?: ExceptionCause | undefined;
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
    this.Message = opts.Message;
    this.ExceptionCause = opts.ExceptionCause;
  }
}

/**
 * The request has exceeded the quotas imposed by the service.
 *
 * @public
 */
export class ServiceLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.dataexchange#ServiceLimitExceededException";
  readonly name = "ServiceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The name of the limit that was reached.
   *
   * @public
   */
  LimitName?: LimitName | undefined;

  /**
   * The value of the exceeded limit.
   *
   * @public
   */
  LimitValue?: number | undefined;

  /**
   * The request has exceeded the quotas imposed by the service.
   *
   * @public
   */
  Message: string | undefined;
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
    this.LimitName = opts.LimitName;
    this.LimitValue = opts.LimitValue;
    this.Message = opts.Message;
  }
}
