// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

/**
 * Access is denied.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#AccessDeniedException";
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
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @public
 */
export class ConflictingOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ConflictingOperationException";
  readonly name = "ConflictingOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource that conflicts with this operation.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The ARN of the resource that conflicts with this operation.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingOperationException, __BaseException>) {
    super({
      name: "ConflictingOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingOperationException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#InvalidRequestException";
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
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The resource already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource that already exists.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The ARN of the resource that already exists.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * The requested resource can't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ResourceNotFoundException";
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
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ThrottlingException";
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
 * The requested service is unavailable.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ServiceUnavailableException";
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
 * The precondition in one or more of the request-header fields evaluated to `FALSE`.
 *
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#PreconditionFailedException";
  readonly name = "PreconditionFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource on which precondition failed with this operation.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The ARN of the resource on which precondition failed with this operation.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * The query timed out.
 *
 * @public
 */
export class QueryTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#QueryTimeoutException";
  readonly name = "QueryTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTimeoutException, __BaseException>) {
    super({
      name: "QueryTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTimeoutException.prototype);
  }
}

/**
 * The validation failed for this query.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#ValidationException";
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
 * You are not authorized.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * You've reached the quota for the number of tags allowed for a resource. For more information, see [Tag naming limits and requirements](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions) in the *Amazon Web Services General Reference*.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotsitewise#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * The name of the resource with too many tags.
   *
   * @public
   */
  resourceName?: string | undefined;

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
    this.resourceName = opts.resourceName;
  }
}
