// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

/**
 * This exception is thrown when you don't have sufficient permissions to perform the requested operation.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#AccessDeniedException";
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
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @public
 */
export class InternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InternalErrorException";
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
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * The reason code of the exception.
   *
   * @public
   */
  reasonCode?: string | undefined;

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
    this.reasonCode = opts.reasonCode;
  }
}

/**
 * This exception is thrown when a user isn't authorized.
 *
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#NotAuthorizedException";
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
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @public
 */
export class OperationNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#OperationNotEnabledException";
  readonly name = "OperationNotEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotEnabledException, __BaseException>) {
    super({
      name: "OperationNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotEnabledException.prototype);
  }
}

/**
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException";
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
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#TooManyRequestsException";
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
 * This exception is thrown when you're trying to modify a user pool while a user import job is in progress for that pool.
 *
 * @public
 */
export class UserImportInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserImportInProgressException";
  readonly name = "UserImportInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserImportInProgressException, __BaseException>) {
    super({
      name: "UserImportInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserImportInProgressException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters an internal server error.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#LimitExceededException";
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
 * This exception is thrown when a user isn't found.
 *
 * @public
 */
export class UserNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserNotFoundException";
  readonly name = "UserNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundException, __BaseException>) {
    super({
      name: "UserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters an invalid Lambda response.
 *
 * @public
 */
export class InvalidLambdaResponseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException";
  readonly name = "InvalidLambdaResponseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaResponseException, __BaseException>) {
    super({
      name: "InvalidLambdaResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaResponseException.prototype);
  }
}

/**
 * This exception is thrown when the user has made too many failed attempts for a given action, such as sign-in.
 *
 * @public
 */
export class TooManyFailedAttemptsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException";
  readonly name = "TooManyFailedAttemptsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFailedAttemptsException, __BaseException>) {
    super({
      name: "TooManyFailedAttemptsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFailedAttemptsException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters an unexpected exception with Lambda.
 *
 * @public
 */
export class UnexpectedLambdaException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException";
  readonly name = "UnexpectedLambdaException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnexpectedLambdaException, __BaseException>) {
    super({
      name: "UnexpectedLambdaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnexpectedLambdaException.prototype);
  }
}

/**
 * This exception is thrown when the Amazon Cognito service encounters a user validation exception with the Lambda service.
 *
 * @public
 */
export class UserLambdaValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException";
  readonly name = "UserLambdaValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserLambdaValidationException, __BaseException>) {
    super({
      name: "UserLambdaValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserLambdaValidationException.prototype);
  }
}

/**
 * This exception is thrown when a verification code fails to deliver successfully.
 *
 * @public
 */
export class CodeDeliveryFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException";
  readonly name = "CodeDeliveryFailureException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeDeliveryFailureException, __BaseException>) {
    super({
      name: "CodeDeliveryFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeDeliveryFailureException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters an invalid password.
 *
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidPasswordException";
  readonly name = "InvalidPasswordException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
  }
}

/**
 * This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS.
 *
 * @public
 */
export class InvalidSmsRoleAccessPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException";
  readonly name = "InvalidSmsRoleAccessPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSmsRoleAccessPolicyException, __BaseException>) {
    super({
      name: "InvalidSmsRoleAccessPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSmsRoleAccessPolicyException.prototype);
  }
}

/**
 * This exception is thrown when the trust relationship is not valid for the role provided for SMS configuration. This can happen if you don't trust `cognito-idp.amazonaws.com` or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.
 *
 * @public
 */
export class InvalidSmsRoleTrustRelationshipException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException";
  readonly name = "InvalidSmsRoleTrustRelationshipException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSmsRoleTrustRelationshipException, __BaseException>) {
    super({
      name: "InvalidSmsRoleTrustRelationshipException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSmsRoleTrustRelationshipException.prototype);
  }
}

/**
 * This exception is thrown when a precondition is not met.
 *
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException";
  readonly name = "PreconditionNotMetException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
  }
}

/**
 * The request failed because the user is in an unsupported state.
 *
 * @public
 */
export class UnsupportedUserStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException";
  readonly name = "UnsupportedUserStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUserStateException, __BaseException>) {
    super({
      name: "UnsupportedUserStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserStateException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
 *
 * @public
 */
export class UsernameExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UsernameExistsException";
  readonly name = "UsernameExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsernameExistsException, __BaseException>) {
    super({
      name: "UsernameExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsernameExistsException.prototype);
  }
}

/**
 * This exception is thrown when a user isn't confirmed successfully.
 *
 * @public
 */
export class UserNotConfirmedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException";
  readonly name = "UserNotConfirmedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotConfirmedException, __BaseException>) {
    super({
      name: "UserNotConfirmedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotConfirmedException.prototype);
  }
}

/**
 * This exception is thrown when a user tries to confirm the account with an email address or phone number that has already been supplied as an alias for a different user profile. This exception indicates that an account with this email address or phone already exists in a user pool that you've configured to use email address or phone number as a sign-in alias.
 *
 * @public
 */
export class AliasExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#AliasExistsException";
  readonly name = "AliasExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AliasExistsException, __BaseException>) {
    super({
      name: "AliasExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AliasExistsException.prototype);
  }
}

/**
 * This exception is thrown when the user pool configuration is not valid.
 *
 * @public
 */
export class InvalidUserPoolConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException";
  readonly name = "InvalidUserPoolConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserPoolConfigurationException, __BaseException>) {
    super({
      name: "InvalidUserPoolConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserPoolConfigurationException.prototype);
  }
}

/**
 * This exception is thrown when a feature that you attempted to use or configure isn't included in your user pool's current feature plan. This can occur when:
 *
 * - You configure a feature that your feature plan doesn't support.
 * - You make a request that uses a feature that requires a higher feature plan.
 *
 * To resolve this issue, upgrade your user pool to a feature plan that includes the feature.
 *
 * @public
 */
export class FeatureUnavailableInTierException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#FeatureUnavailableInTierException";
  readonly name = "FeatureUnavailableInTierException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureUnavailableInTierException, __BaseException>) {
    super({
      name: "FeatureUnavailableInTierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureUnavailableInTierException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP status code: 400.
 *
 * @public
 */
export class InvalidEmailRoleAccessPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException";
  readonly name = "InvalidEmailRoleAccessPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEmailRoleAccessPolicyException, __BaseException>) {
    super({
      name: "InvalidEmailRoleAccessPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEmailRoleAccessPolicyException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito can't find a multi-factor authentication (MFA) method.
 *
 * @public
 */
export class MFAMethodNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException";
  readonly name = "MFAMethodNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MFAMethodNotFoundException, __BaseException>) {
    super({
      name: "MFAMethodNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MFAMethodNotFoundException.prototype);
  }
}

/**
 * This exception is thrown when a password reset is required.
 *
 * @public
 */
export class PasswordResetRequiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException";
  readonly name = "PasswordResetRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordResetRequiredException, __BaseException>) {
    super({
      name: "PasswordResetRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordResetRequiredException.prototype);
  }
}

/**
 * Exception that is thrown when you attempt to perform an operation that isn't enabled for the user pool client.
 *
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnsupportedOperationException";
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * This exception is thrown when user pool add-ons aren't enabled.
 *
 * @public
 */
export class UserPoolAddOnNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException";
  readonly name = "UserPoolAddOnNotEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserPoolAddOnNotEnabledException, __BaseException>) {
    super({
      name: "UserPoolAddOnNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserPoolAddOnNotEnabledException.prototype);
  }
}

/**
 * This exception is thrown if the provided code doesn't match what the server was expecting.
 *
 * @public
 */
export class CodeMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#CodeMismatchException";
  readonly name = "CodeMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeMismatchException, __BaseException>) {
    super({
      name: "CodeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeMismatchException.prototype);
  }
}

/**
 * This exception is thrown if a code has expired.
 *
 * @public
 */
export class ExpiredCodeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ExpiredCodeException";
  readonly name = "ExpiredCodeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredCodeException, __BaseException>) {
    super({
      name: "ExpiredCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredCodeException.prototype);
  }
}

/**
 * The message returned when a user's new password matches a previous password and doesn't comply with the password-history policy.
 *
 * @public
 */
export class PasswordHistoryPolicyViolationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#PasswordHistoryPolicyViolationException";
  readonly name = "PasswordHistoryPolicyViolationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordHistoryPolicyViolationException, __BaseException>) {
    super({
      name: "PasswordHistoryPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordHistoryPolicyViolationException.prototype);
  }
}

/**
 * This exception is thrown when the software token time-based one-time password (TOTP) multi-factor authentication (MFA) isn't activated for the user pool.
 *
 * @public
 */
export class SoftwareTokenMFANotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException";
  readonly name = "SoftwareTokenMFANotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SoftwareTokenMFANotFoundException, __BaseException>) {
    super({
      name: "SoftwareTokenMFANotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SoftwareTokenMFANotFoundException.prototype);
  }
}

/**
 * This exception is thrown if two or more modifications are happening concurrently.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException";
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
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * This exception is thrown when the challenge from `StartWebAuthn` registration has expired.
 *
 * @public
 */
export class WebAuthnChallengeNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnChallengeNotFoundException";
  readonly name = "WebAuthnChallengeNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnChallengeNotFoundException, __BaseException>) {
    super({
      name: "WebAuthnChallengeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnChallengeNotFoundException.prototype);
  }
}

/**
 * This exception is thrown when the access token is for a different client than the one in the original `StartWebAuthnRegistration` request.
 *
 * @public
 */
export class WebAuthnClientMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnClientMismatchException";
  readonly name = "WebAuthnClientMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnClientMismatchException, __BaseException>) {
    super({
      name: "WebAuthnClientMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnClientMismatchException.prototype);
  }
}

/**
 * This exception is thrown when a user presents passkey credentials from an unsupported device or provider.
 *
 * @public
 */
export class WebAuthnCredentialNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnCredentialNotSupportedException";
  readonly name = "WebAuthnCredentialNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnCredentialNotSupportedException, __BaseException>) {
    super({
      name: "WebAuthnCredentialNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnCredentialNotSupportedException.prototype);
  }
}

/**
 * This exception is thrown when the passkey feature isn't enabled for the user pool.
 *
 * @public
 */
export class WebAuthnNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnNotEnabledException";
  readonly name = "WebAuthnNotEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnNotEnabledException, __BaseException>) {
    super({
      name: "WebAuthnNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnNotEnabledException.prototype);
  }
}

/**
 * This exception is thrown when the passkey credential's registration origin does not align with the user pool relying party id.
 *
 * @public
 */
export class WebAuthnOriginNotAllowedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnOriginNotAllowedException";
  readonly name = "WebAuthnOriginNotAllowedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnOriginNotAllowedException, __BaseException>) {
    super({
      name: "WebAuthnOriginNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnOriginNotAllowedException.prototype);
  }
}

/**
 * This exception is thrown when the given passkey credential is associated with a different relying party ID than the user pool relying party ID.
 *
 * @public
 */
export class WebAuthnRelyingPartyMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnRelyingPartyMismatchException";
  readonly name = "WebAuthnRelyingPartyMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnRelyingPartyMismatchException, __BaseException>) {
    super({
      name: "WebAuthnRelyingPartyMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnRelyingPartyMismatchException.prototype);
  }
}

/**
 * This exception is thrown when a user attempts to confirm a device with a device key that already exists.
 *
 * @public
 */
export class DeviceKeyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#DeviceKeyExistsException";
  readonly name = "DeviceKeyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceKeyExistsException, __BaseException>) {
    super({
      name: "DeviceKeyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceKeyExistsException.prototype);
  }
}

/**
 * This exception is thrown when Amazon Cognito encounters a group that already exists in the user pool.
 *
 * @public
 */
export class GroupExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#GroupExistsException";
  readonly name = "GroupExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GroupExistsException, __BaseException>) {
    super({
      name: "GroupExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GroupExistsException.prototype);
  }
}

/**
 * This exception is thrown when the provider is already supported by the user pool.
 *
 * @public
 */
export class DuplicateProviderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#DuplicateProviderException";
  readonly name = "DuplicateProviderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateProviderException, __BaseException>) {
    super({
      name: "DuplicateProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateProviderException.prototype);
  }
}

/**
 * This exception is thrown when you attempt to apply a managed login branding style to an app client that already has an assigned style.
 *
 * @public
 */
export class ManagedLoginBrandingExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ManagedLoginBrandingExistsException";
  readonly name = "ManagedLoginBrandingExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedLoginBrandingExistsException, __BaseException>) {
    super({
      name: "ManagedLoginBrandingExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedLoginBrandingExistsException.prototype);
  }
}

/**
 * Terms document names must be unique to the app client. This exception is thrown when you attempt to create terms documents with a duplicate `TermsName`.
 *
 * @public
 */
export class TermsExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#TermsExistsException";
  readonly name = "TermsExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TermsExistsException, __BaseException>) {
    super({
      name: "TermsExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TermsExistsException.prototype);
  }
}

/**
 * This exception is thrown when you've attempted to change your feature plan but the operation isn't permitted.
 *
 * @public
 */
export class TierChangeNotAllowedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#TierChangeNotAllowedException";
  readonly name = "TierChangeNotAllowedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TierChangeNotAllowedException, __BaseException>) {
    super({
      name: "TierChangeNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TierChangeNotAllowedException.prototype);
  }
}

/**
 * This exception is thrown when a user pool tag can't be set or updated.
 *
 * @public
 */
export class UserPoolTaggingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException";
  readonly name = "UserPoolTaggingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserPoolTaggingException, __BaseException>) {
    super({
      name: "UserPoolTaggingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserPoolTaggingException.prototype);
  }
}

/**
 * This exception is thrown when the specified OAuth flow is not valid.
 *
 * @public
 */
export class InvalidOAuthFlowException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException";
  readonly name = "InvalidOAuthFlowException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOAuthFlowException, __BaseException>) {
    super({
      name: "InvalidOAuthFlowException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOAuthFlowException.prototype);
  }
}

/**
 * This exception is thrown when the specified scope doesn't exist.
 *
 * @public
 */
export class ScopeDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException";
  readonly name = "ScopeDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScopeDoesNotExistException, __BaseException>) {
    super({
      name: "ScopeDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScopeDoesNotExistException.prototype);
  }
}

/**
 * This exception is thrown when the specified identifier isn't supported.
 *
 * @public
 */
export class UnsupportedIdentityProviderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException";
  readonly name = "UnsupportedIdentityProviderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedIdentityProviderException, __BaseException>) {
    super({
      name: "UnsupportedIdentityProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedIdentityProviderException.prototype);
  }
}

/**
 * This exception is throw when your application requests token refresh with a refresh token that has been invalidated by refresh-token rotation.
 *
 * @public
 */
export class RefreshTokenReuseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#RefreshTokenReuseException";
  readonly name = "RefreshTokenReuseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RefreshTokenReuseException, __BaseException>) {
    super({
      name: "RefreshTokenReuseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RefreshTokenReuseException.prototype);
  }
}

/**
 * Exception that is thrown when the request isn't authorized. This can happen due to an invalid access token in the request.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * Exception that is thrown when an unsupported token is passed to an operation.
 *
 * @public
 */
export class UnsupportedTokenTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#UnsupportedTokenTypeException";
  readonly name = "UnsupportedTokenTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedTokenTypeException, __BaseException>) {
    super({
      name: "UnsupportedTokenTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedTokenTypeException.prototype);
  }
}

/**
 * This exception is thrown when a user pool doesn't have a configured relying party id or a user pool domain.
 *
 * @public
 */
export class WebAuthnConfigurationMissingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#WebAuthnConfigurationMissingException";
  readonly name = "WebAuthnConfigurationMissingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnConfigurationMissingException, __BaseException>) {
    super({
      name: "WebAuthnConfigurationMissingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnConfigurationMissingException.prototype);
  }
}

/**
 * The request exceeded your account's service quota. To increase your limit, use or submit a Service Quotas increase request.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * This exception is thrown when there is a code mismatch and the service fails to configure the software token TOTP multi-factor authentication (MFA).
 *
 * @public
 */
export class EnableSoftwareTokenMFAException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException";
  readonly name = "EnableSoftwareTokenMFAException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EnableSoftwareTokenMFAException, __BaseException>) {
    super({
      name: "EnableSoftwareTokenMFAException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EnableSoftwareTokenMFAException.prototype);
  }
}
