// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { XRayServiceException as __BaseException } from "./XRayServiceException";

/**
 * <p>The request is missing required parameters or has invalid parameters.</p>
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
 * <p>The request exceeds the maximum number of requests per second.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
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
 * <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>You have reached the maximum number of sampling rules.</p>
 * @public
 */
export class RuleLimitExceededException extends __BaseException {
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
 * <p>A policy revision id was provided which does not match the latest policy revision. This exception is also
 *     if a policy revision id of 0 is provided via <code>PutResourcePolicy</code> and a policy with the same name already exists.</p>
 * @public
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
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
 * <p>The provided resource policy would prevent the caller of this request from calling PutResourcePolicy in the future.</p>
 * @public
 */
export class LockoutPreventionException extends __BaseException {
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
 * <p>Invalid policy document provided in request.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
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
 * <p>Exceeded the maximum number of resource policies for a target Amazon Web Services account.</p>
 * @public
 */
export class PolicyCountLimitExceededException extends __BaseException {
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
 * <p>Exceeded the maximum size for a resource policy.</p>
 * @public
 */
export class PolicySizeLimitExceededException extends __BaseException {
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
 * <p>You have exceeded the maximum number of tags you can apply to this resource.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
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
