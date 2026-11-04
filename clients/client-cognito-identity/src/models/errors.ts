// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CognitoIdentityServiceException as __BaseException } from "./CognitoIdentityServiceException";

/**
 * Thrown when the service encounters an error during processing the request.
 *
 * @public
 */
export class InternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#InternalErrorException";
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
 * Thrown for missing or bad input parameter(s).
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#InvalidParameterException";
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
 * Thrown when the total number of user pools has exceeded a preset limit.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#LimitExceededException";
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
 * Thrown when a user is not authorized to access the requested resource.
 *
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#NotAuthorizedException";
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
 * Thrown when a user tries to use a login which is already linked to another account.
 *
 * @public
 */
export class ResourceConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#ResourceConflictException";
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
 * Thrown when a request is throttled.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#TooManyRequestsException";
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
 * Thrown when the requested resource (for example, a dataset or record) does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#ResourceNotFoundException";
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
 * An exception thrown when a dependent service such as Facebook or Twitter is not responding
 *
 * @public
 */
export class ExternalServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#ExternalServiceException";
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
 * If you provided authentication information in the request, the identity pool has no authenticated role configured, or STS returned an error response to the request to assume the authenticated role from the identity pool. If you provided no authentication information in the request, the identity pool has no unauthenticated role configured, or STS returned an error response to the request to assume the unauthenticated role from the identity pool.
 *
 * Your role trust policy must grant `AssumeRoleWithWebIdentity` permissions to `cognito-identity.amazonaws.com`.
 *
 * @public
 */
export class InvalidIdentityPoolConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException";
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
 * The provided developer user identifier is already registered with Cognito under a different identity ID.
 *
 * @public
 */
export class DeveloperUserAlreadyRegisteredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException";
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
 * Thrown if there are parallel requests to modify a resource.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentity#ConcurrentModificationException";
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
