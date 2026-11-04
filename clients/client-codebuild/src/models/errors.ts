// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CodeBuildServiceException as __BaseException } from "./CodeBuildServiceException";

/**
 * An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.
 *
 * @public
 */
export class AccountLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#AccountLimitExceededException";
  readonly name = "AccountLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountLimitExceededException, __BaseException>) {
    super({
      name: "AccountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountLimitExceededException.prototype);
  }
}

/**
 * The CodeBuild access has been suspended for the calling Amazon Web Services account.
 *
 * @public
 */
export class AccountSuspendedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#AccountSuspendedException";
  readonly name = "AccountSuspendedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSuspendedException, __BaseException>) {
    super({
      name: "AccountSuspendedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSuspendedException.prototype);
  }
}

/**
 * The input value that was provided is not valid.
 *
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#InvalidInputException";
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same settings already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#ResourceAlreadyExistsException";
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
 * There was a problem with the underlying OAuth provider.
 *
 * @public
 */
export class OAuthProviderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#OAuthProviderException";
  readonly name = "OAuthProviderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OAuthProviderException, __BaseException>) {
    super({
      name: "OAuthProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OAuthProviderException.prototype);
  }
}

/**
 * The specified Amazon Web Services resource cannot be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.codebuild#ResourceNotFoundException";
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
