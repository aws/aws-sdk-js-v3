// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GameLiftServiceException as __BaseException } from "./GameLiftServiceException";

/**
 * <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
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
 * <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not supported in the Region specified.</p>
 * @public
 */
export class UnsupportedRegionException extends __BaseException {
  readonly name = "UnsupportedRegionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedRegionException, __BaseException>) {
    super({
      name: "UnsupportedRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
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
 * <p>The specified game server group has no available game servers to fulfill a
 *                 <code>ClaimGameServer</code> request. Clients can retry such requests immediately or
 *             after a waiting period.</p>
 * @public
 */
export class OutOfCapacityException extends __BaseException {
  readonly name = "OutOfCapacityException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutOfCapacityException, __BaseException>) {
    super({
      name: "OutOfCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutOfCapacityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The client failed authentication. Clients should not retry such requests.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
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
 * <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 * @public
 */
export class TaggingFailedException extends __BaseException {
  readonly name = "TaggingFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaggingFailedException, __BaseException>) {
    super({
      name: "TaggingFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaggingFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The operation failed because Amazon GameLift Servers has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
 * @public
 */
export class NotReadyException extends __BaseException {
  readonly name = "NotReadyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotReadyException, __BaseException>) {
    super({
      name: "NotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidFleetStatusException extends __BaseException {
  readonly name = "InvalidFleetStatusException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFleetStatusException, __BaseException>) {
    super({
      name: "InvalidFleetStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFleetStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 * @public
 */
export class FleetCapacityExceededException extends __BaseException {
  readonly name = "FleetCapacityExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FleetCapacityExceededException, __BaseException>) {
    super({
      name: "FleetCapacityExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FleetCapacityExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A game session with this custom ID string already exists in this fleet. Resolve this
 *             conflict before retrying this request.</p>
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
 * <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
 * @public
 */
export class TerminalRoutingStrategyException extends __BaseException {
  readonly name = "TerminalRoutingStrategyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TerminalRoutingStrategyException, __BaseException>) {
    super({
      name: "TerminalRoutingStrategyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TerminalRoutingStrategyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The game instance is currently full and cannot allow the requested player(s) to join.
 *             Clients can retry such requests immediately or after a waiting period.</p>
 * @public
 */
export class GameSessionFullException extends __BaseException {
  readonly name = "GameSessionFullException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GameSessionFullException, __BaseException>) {
    super({
      name: "GameSessionFullException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GameSessionFullException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 * @public
 */
export class InvalidGameSessionStatusException extends __BaseException {
  readonly name = "InvalidGameSessionStatusException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGameSessionStatusException, __BaseException>) {
    super({
      name: "InvalidGameSessionStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGameSessionStatusException.prototype);
    this.Message = opts.Message;
  }
}
