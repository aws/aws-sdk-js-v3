// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { XRayServiceException as __BaseException } from "./XRayServiceException";

/**
 * The request is missing required parameters or has invalid parameters.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#InvalidRequestException";
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
 * The request exceeds the maximum number of requests per second.
 *
 * @public
 */
export class ThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#ThrottledException";
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is correct.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * You have reached the maximum number of sampling rules.
 *
 * @public
 */
export class RuleLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#RuleLimitExceededException";
  readonly name = "RuleLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleLimitExceededException, __BaseException>) {
    super({
      name: "RuleLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A policy revision id was provided which does not match the latest policy revision. This exception is also if a policy revision id of 0 is provided via `PutResourcePolicy` and a policy with the same name already exists.
 *
 * @public
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#InvalidPolicyRevisionIdException";
  readonly name = "InvalidPolicyRevisionIdException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyRevisionIdException, __BaseException>) {
    super({
      name: "InvalidPolicyRevisionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyRevisionIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The provided resource policy would prevent the caller of this request from calling PutResourcePolicy in the future.
 *
 * @public
 */
export class LockoutPreventionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#LockoutPreventionException";
  readonly name = "LockoutPreventionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LockoutPreventionException, __BaseException>) {
    super({
      name: "LockoutPreventionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LockoutPreventionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Invalid policy document provided in request.
 *
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#MalformedPolicyDocumentException";
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Exceeded the maximum number of resource policies for a target Amazon Web Services account.
 *
 * @public
 */
export class PolicyCountLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#PolicyCountLimitExceededException";
  readonly name = "PolicyCountLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyCountLimitExceededException, __BaseException>) {
    super({
      name: "PolicyCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Exceeded the maximum size for a resource policy.
 *
 * @public
 */
export class PolicySizeLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#PolicySizeLimitExceededException";
  readonly name = "PolicySizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicySizeLimitExceededException, __BaseException>) {
    super({
      name: "PolicySizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicySizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.xray#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}
