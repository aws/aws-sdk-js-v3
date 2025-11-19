// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudWatchEventsServiceException as __BaseException } from "./CloudWatchEventsServiceException";

/**
 * <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>This exception occurs due to unexpected causes.</p>
 * @public
 */
export class InternalException extends __BaseException {
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>The specified state is not a valid state for an event source.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The operation you are attempting is not available in this region.</p>
 * @public
 */
export class OperationDisabledException extends __BaseException {
  readonly name = "OperationDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationDisabledException, __BaseException>) {
    super({
      name: "OperationDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationDisabledException.prototype);
  }
}

/**
 * <p>An entity that you specified does not exist.</p>
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
 * <p>An error occurred because a replay can be canceled only when the state is Running or
 *       Starting.</p>
 * @public
 */
export class IllegalStatusException extends __BaseException {
  readonly name = "IllegalStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalStatusException, __BaseException>) {
    super({
      name: "IllegalStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalStatusException.prototype);
  }
}

/**
 * <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
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
 * <p>The resource you are trying to create already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The event pattern is not valid.</p>
 * @public
 */
export class InvalidEventPatternException extends __BaseException {
  readonly name = "InvalidEventPatternException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventPatternException, __BaseException>) {
    super({
      name: "InvalidEventPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventPatternException.prototype);
  }
}

/**
 * <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 * @public
 */
export class ManagedRuleException extends __BaseException {
  readonly name = "ManagedRuleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedRuleException, __BaseException>) {
    super({
      name: "ManagedRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedRuleException.prototype);
  }
}

/**
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 * @public
 */
export class PolicyLengthExceededException extends __BaseException {
  readonly name = "PolicyLengthExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}
