// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CognitoIdentityServiceException as __BaseException } from "./CognitoIdentityServiceException";

/**
 * <p>Thrown when the service encounters an error during processing the request.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * <p>Thrown for missing or bad input parameter(s).</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
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
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  readonly name = "NotAuthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
  }
}

/**
 * <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
  }
}

/**
 * <p>Thrown when a request is throttled.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
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
 * <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 * @public
 */
export class ExternalServiceException extends __BaseException {
  readonly name = "ExternalServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExternalServiceException, __BaseException>) {
    super({
      name: "ExternalServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExternalServiceException.prototype);
  }
}

/**
 * <p>If you provided authentication information in the request, the identity pool has no
 *          authenticated role configured, or STS returned an error response to the
 *          request to assume the authenticated role from the identity pool. If you provided no
 *          authentication information in the request, the identity pool has no unauthenticated role
 *          configured, or STS returned an error response to the request to assume the
 *          unauthenticated role from the identity pool.</p>
 *          <p>Your role trust policy must grant <code>AssumeRoleWithWebIdentity</code> permissions to <code>cognito-identity.amazonaws.com</code>.</p>
 * @public
 */
export class InvalidIdentityPoolConfigurationException extends __BaseException {
  readonly name = "InvalidIdentityPoolConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIdentityPoolConfigurationException, __BaseException>) {
    super({
      name: "InvalidIdentityPoolConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
  }
}

/**
 * <p>The provided developer user identifier is already registered with Cognito under a
 *          different identity ID.</p>
 * @public
 */
export class DeveloperUserAlreadyRegisteredException extends __BaseException {
  readonly name = "DeveloperUserAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeveloperUserAlreadyRegisteredException, __BaseException>) {
    super({
      name: "DeveloperUserAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
  }
}

/**
 * <p>Thrown if there are parallel requests to modify a resource.</p>
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
