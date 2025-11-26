// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { NetworkFirewallServiceException as __BaseException } from "./NetworkFirewallServiceException";

/**
 * <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
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
 * <p>Unable to locate a resource using the parameters that you provided.</p>
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
 * <p>Unable to process the request due to throttling limitations.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
 * <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
 * @public
 */
export class InsufficientCapacityException extends __BaseException {
  readonly name = "InsufficientCapacityException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The token you provided is stale or isn't valid for the operation. </p>
 * @public
 */
export class InvalidTokenException extends __BaseException {
  readonly name = "InvalidTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
 * <p>The operation you requested isn't supported by Network Firewall. </p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The policy statement failed validation.</p>
 * @public
 */
export class InvalidResourcePolicyException extends __BaseException {
  readonly name = "InvalidResourcePolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourcePolicyException, __BaseException>) {
    super({
      name: "InvalidResourcePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourcePolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to send logs to a configured logging destination. </p>
 * @public
 */
export class LogDestinationPermissionException extends __BaseException {
  readonly name = "LogDestinationPermissionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LogDestinationPermissionException, __BaseException>) {
    super({
      name: "LogDestinationPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LogDestinationPermissionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unable to change the resource because your account doesn't own it. </p>
 * @public
 */
export class ResourceOwnerCheckException extends __BaseException {
  readonly name = "ResourceOwnerCheckException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceOwnerCheckException, __BaseException>) {
    super({
      name: "ResourceOwnerCheckException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceOwnerCheckException.prototype);
    this.Message = opts.Message;
  }
}
