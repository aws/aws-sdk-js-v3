// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SocialMessagingServiceException as __BaseException } from "./SocialMessagingServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedByMetaException extends __BaseException {
  readonly name = "AccessDeniedByMetaException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedByMetaException, __BaseException>) {
    super({
      name: "AccessDeniedByMetaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedByMetaException.prototype);
  }
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>Thrown when performing an action because a dependency would be broken.</p>
 * @public
 */
export class DependencyException extends __BaseException {
  readonly name = "DependencyException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyException, __BaseException>) {
    super({
      name: "DependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyException.prototype);
  }
}

/**
 * <p>One or more parameters provided to the action are not valid.</p>
 * @public
 */
export class InvalidParametersException extends __BaseException {
  readonly name = "InvalidParametersException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParametersException, __BaseException>) {
    super({
      name: "InvalidParametersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParametersException.prototype);
  }
}

/**
 * <p>The request was denied because it would exceed one or more service quotas or limits.</p>
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottledRequestException extends __BaseException {
  readonly name = "ThrottledRequestException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledRequestException, __BaseException>) {
    super({
      name: "ThrottledRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledRequestException.prototype);
  }
}

/**
 * <p>The request contains an invalid parameter value. </p>
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
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
  }
}

/**
 * <p>The resource was not found.</p>
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
