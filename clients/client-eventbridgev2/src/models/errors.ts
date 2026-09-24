// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { EventBridgeV2ServiceException as __BaseException } from "./EventBridgeV2ServiceException";

/**
 * The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
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
 * Another change to the resource is already in progress. Retry the request.
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request reuses the client token of an earlier request with different
 * parameters. Use a new client token, or resend the earlier request unchanged.
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because of an internal service error. Retry the request.
 * @public
 */
export class InternalException extends __BaseException {
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A request parameter is missing or not valid.
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request would exceed a service quota for the account.
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * A resource with the same name already exists.
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
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
 * The resource does not exist.
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

/**
 * The resource is in use and cannot be deleted. For example, an event bus with
 * subscribers or event sources cannot be deleted until they are deleted.
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A client-supplied precondition (e.g. ExpectedRevisionId on a resource-policy
 * write) did not match the current state of the resource. Retrying the same
 * request will fail again; re-read the resource and re-evaluate before retrying.
 *
 * A conditional request is not retry-safe on its own. If an earlier attempt
 * committed but its response never reached the caller, retrying fails with this
 * error, which is indistinguishable from another writer having won. Compare the
 * resource's current contents with what the request intended: a successful
 * attempt stores a revision ID the caller never saw, so the revision alone
 * cannot tell the two apart, but matching contents mean the change took effect.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * The configured schema registry could not be reached. Retry the request.
 * @public
 */
export class SchemaRegistryUnavailableException extends __BaseException {
  readonly name = "SchemaRegistryUnavailableException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchemaRegistryUnavailableException, __BaseException>) {
    super({
      name: "SchemaRegistryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchemaRegistryUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The policy document is larger than the account's resource policy size quota, or
 * larger than the service maximum.
 * @public
 */
export class PolicyLengthExceededException extends __BaseException {
  readonly name = "PolicyLengthExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyLengthExceededException, __BaseException>) {
    super({
      name: "PolicyLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The policy was rejected because it would grant public access to the event bus.
 * A statement grants public access when its principal is a wildcard and no
 * condition limits the callers to specific AWS accounts or principals. To fix
 * it, replace the wildcard principal with specific principals, or add a
 * condition that limits the callers to specific AWS accounts. Conditions on
 * event content (events:source, events:detail-type, events:Metadata/*) do not
 * identify the caller and do not make a wildcard principal non-public. Returned
 * only for the "default" policy; the "AWS_RAM" policy is composed by AWS
 * Resource Access Manager and never grants public access.
 * @public
 */
export class PublicPolicyException extends __BaseException {
  readonly name = "PublicPolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicPolicyException, __BaseException>) {
    super({
      name: "PublicPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicPolicyException.prototype);
    this.Message = opts.Message;
  }
}
