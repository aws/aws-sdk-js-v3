// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

/**
 * <p>Access is denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 * @public
 */
export class ConflictingOperationException extends __BaseException {
  readonly name = "ConflictingOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that conflicts with this operation.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that conflicts with this operation.</p>
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
 * <p>IoT SiteWise can't process your request right now. Try again later.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
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
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
 * <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>The resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that already exists.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that already exists.</p>
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
 * <p>The requested resource can't be found.</p>
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
 * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
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
 * <p>The requested service is unavailable.</p>
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
 * <p>The precondition in one or more of the request-header fields evaluated to
 *         <code>FALSE</code>.</p>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name = "PreconditionFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource on which precondition failed with this operation.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource on which precondition failed with this operation.</p>
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
 * <p>The query timed out.</p>
 * @public
 */
export class QueryTimeoutException extends __BaseException {
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
 * <p>The validation failed for this query.</p>
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

/**
 * <p>You are not authorized.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
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
 * <p>You've reached the quota for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits and
 *         requirements</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The name of the resource with too many tags.</p>
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
