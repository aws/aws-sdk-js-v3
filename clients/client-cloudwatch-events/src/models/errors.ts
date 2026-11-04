// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudWatchEventsServiceException as __BaseException } from "./CloudWatchEventsServiceException";

/**
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#ConcurrentModificationException";
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
 * This exception occurs due to unexpected causes.
 *
 * @public
 */
export class InternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#InternalException";
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
 * The specified state is not a valid state for an event source.
 *
 * @public
 */
export class InvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#InvalidStateException";
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
 * The operation you are attempting is not available in this region.
 *
 * @public
 */
export class OperationDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#OperationDisabledException";
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
 * An entity that you specified does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#ResourceNotFoundException";
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
 * An error occurred because a replay can be canceled only when the state is Running or Starting.
 *
 * @public
 */
export class IllegalStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#IllegalStatusException";
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
 * The request failed because it attempted to create resource beyond the allowed service quota.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#LimitExceededException";
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
 * The resource you are trying to create already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException";
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
 * The event pattern is not valid.
 *
 * @public
 */
export class InvalidEventPatternException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#InvalidEventPatternException";
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
 * This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that service. If you see this error in response to `DeleteRule` or `RemoveTargets`, you can use the `Force` parameter in those calls to delete the rule or remove targets from the rule. You cannot modify these managed rules by using `DisableRule`, `EnableRule`, `PutTargets`, `PutRule`, `TagResource`, or `UntagResource`.
 *
 * @public
 */
export class ManagedRuleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#ManagedRuleException";
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
 * The event bus policy is too long. For more information, see the limits.
 *
 * @public
 */
export class PolicyLengthExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchevents#PolicyLengthExceededException";
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
