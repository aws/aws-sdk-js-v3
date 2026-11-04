// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ChimeSDKMeetingsServiceException as __BaseException } from "./ChimeSDKMeetingsServiceException";

/**
 * The input parameters don't match the service's restrictions.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The client is permanently forbidden from making the request.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The request exceeds the resource limit.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more of the resources in the request does not exist in the system.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request ID associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The service encountered an unexpected error.
 *
 * @public
 */
export class ServiceFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ServiceFailureException";
  readonly name = "ServiceFailureException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The ID of the failed request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The service is currently unavailable.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The number of seconds the caller should wait before retrying.
   *
   * @public
   */
  RetryAfterSeconds?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * The number of customer requests exceeds the request rate limit.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The ID of the request that exceeded the throttling limit.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The user isn't authorized to request a resource.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The request was well-formed but was unable to be followed due to semantic errors.
 *
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#UnprocessableEntityException";
  readonly name = "UnprocessableEntityException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The request id associated with the call responsible for the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Multiple instances of the same request have been made simultaneously.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The ID of the request involved in the conflict.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The resource that you want to tag couldn't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The ID of the resource that couldn't be found.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The name of the resource that couldn't be found.
   *
   * @public
   */
  ResourceName?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * Too many tags were added to the specified resource.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.chimesdkmeetings#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * The ID of the request that contains too many tags.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The name of the resource that received too many tags.
   *
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
    this.ResourceName = opts.ResourceName;
  }
}
