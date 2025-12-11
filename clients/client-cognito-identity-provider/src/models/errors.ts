// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

/**
 * <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
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
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason code of the exception.</p>
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
 * <p>This exception is thrown when a user isn't authorized.</p>
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
 * <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
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
 * <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
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
 * <p>This exception is thrown when you're trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 * @public
 */
export class UserImportInProgressException extends __BaseException {
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
 * <p>This exception is thrown when a user isn't found.</p>
 * @public
 */
export class UserNotFoundException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 * @public
 */
export class InvalidLambdaResponseException extends __BaseException {
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
 * <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
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
 * <p>This exception is thrown when the user has made too many failed attempts for a given
 *             action, such as sign-in.</p>
 * @public
 */
export class TooManyFailedAttemptsException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 * @public
 */
export class UnexpectedLambdaException extends __BaseException {
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
 * <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
 * @public
 */
export class UserLambdaValidationException extends __BaseException {
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
 * <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 * @public
 */
export class CodeDeliveryFailureException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
 * @public
 */
export class InvalidPasswordException extends __BaseException {
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
 * <p>This exception is returned when the role provided for SMS configuration doesn't have
 *             permission to publish using Amazon SNS.</p>
 * @public
 */
export class InvalidSmsRoleAccessPolicyException extends __BaseException {
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
 * <p>This exception is thrown when the trust relationship is not valid for the role
 *             provided for SMS configuration. This can happen if you don't trust
 *                 <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 * @public
 */
export class InvalidSmsRoleTrustRelationshipException extends __BaseException {
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
 * <p>This exception is thrown when a precondition is not met.</p>
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
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
 * <p>The request failed because the user is in an unsupported state.</p>
 * @public
 */
export class UnsupportedUserStateException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito encounters a user name that already
 *             exists in the user pool.</p>
 * @public
 */
export class UsernameExistsException extends __BaseException {
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
 * <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different user
 *             profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 * @public
 */
export class AliasExistsException extends __BaseException {
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
 * <p>This exception is thrown when the user pool configuration is not valid.</p>
 * @public
 */
export class InvalidUserPoolConfigurationException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
 * @public
 */
export class InvalidEmailRoleAccessPolicyException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito can't find a multi-factor authentication
 *             (MFA) method.</p>
 * @public
 */
export class MFAMethodNotFoundException extends __BaseException {
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
 * <p>This exception is thrown when a password reset is required.</p>
 * @public
 */
export class PasswordResetRequiredException extends __BaseException {
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
 * <p>Exception that is thrown when you attempt to perform an operation that isn't enabled
 *             for the user pool client.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
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
 * <p>This exception is thrown when a user isn't confirmed successfully.</p>
 * @public
 */
export class UserNotConfirmedException extends __BaseException {
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
 * <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 * @public
 */
export class UserPoolAddOnNotEnabledException extends __BaseException {
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
 * <p>This exception is thrown if the provided code doesn't match what the server was
 *             expecting.</p>
 * @public
 */
export class CodeMismatchException extends __BaseException {
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
 * <p>This exception is thrown if a code has expired.</p>
 * @public
 */
export class ExpiredCodeException extends __BaseException {
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
 * <p>The message returned when a user's new password matches a previous password and
 *             doesn't comply with the password-history policy.</p>
 * @public
 */
export class PasswordHistoryPolicyViolationException extends __BaseException {
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
 * <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 * @public
 */
export class SoftwareTokenMFANotFoundException extends __BaseException {
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
 * <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
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
 * <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
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
 * <p>This exception is thrown when the challenge from <code>StartWebAuthn</code>
 *             registration has expired.</p>
 * @public
 */
export class WebAuthnChallengeNotFoundException extends __BaseException {
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
 * <p>This exception is thrown when the access token is for a different client than the one
 *             in the original <code>StartWebAuthnRegistration</code> request.</p>
 * @public
 */
export class WebAuthnClientMismatchException extends __BaseException {
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
 * <p>This exception is thrown when a user presents passkey credentials from an unsupported
 *             device or provider.</p>
 * @public
 */
export class WebAuthnCredentialNotSupportedException extends __BaseException {
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
 * <p>This exception is thrown when the passkey feature isn't enabled for the user
 *             pool.</p>
 * @public
 */
export class WebAuthnNotEnabledException extends __BaseException {
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
 * <p>This exception is thrown when the passkey credential's registration origin does not
 *             align with the user pool relying party id.</p>
 * @public
 */
export class WebAuthnOriginNotAllowedException extends __BaseException {
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
 * <p>This exception is thrown when the given passkey credential is associated with a
 *             different relying party ID than the user pool relying party ID.</p>
 * @public
 */
export class WebAuthnRelyingPartyMismatchException extends __BaseException {
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
 * <p>This exception is thrown when a user attempts to confirm a device with a device key
 *             that already exists.</p>
 * @public
 */
export class DeviceKeyExistsException extends __BaseException {
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
 * <p>This exception is thrown when Amazon Cognito encounters a group that already exists in the user
 *             pool.</p>
 * @public
 */
export class GroupExistsException extends __BaseException {
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
 * <p>This exception is thrown when the provider is already supported by the user
 *             pool.</p>
 * @public
 */
export class DuplicateProviderException extends __BaseException {
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
 * <p>This exception is thrown when you attempt to apply a managed login branding style to
 *             an app client that already has an assigned style.</p>
 * @public
 */
export class ManagedLoginBrandingExistsException extends __BaseException {
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
 * <p>Terms document names must be unique to the app client. This exception is thrown when
 *             you attempt to create terms documents with a duplicate <code>TermsName</code>.</p>
 * @public
 */
export class TermsExistsException extends __BaseException {
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
 * <p>This exception is thrown when a feature you attempted to configure isn't
 *             available in your current feature plan.</p>
 * @public
 */
export class FeatureUnavailableInTierException extends __BaseException {
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
 * <p>This exception is thrown when you've attempted to change your feature plan but
 *             the operation isn't permitted.</p>
 * @public
 */
export class TierChangeNotAllowedException extends __BaseException {
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
 * <p>This exception is thrown when a user pool tag can't be set or updated.</p>
 * @public
 */
export class UserPoolTaggingException extends __BaseException {
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
 * <p>This exception is thrown when the specified OAuth flow is not valid.</p>
 * @public
 */
export class InvalidOAuthFlowException extends __BaseException {
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
 * <p>This exception is thrown when the specified scope doesn't exist.</p>
 * @public
 */
export class ScopeDoesNotExistException extends __BaseException {
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
 * <p>This exception is thrown when the specified identifier isn't supported.</p>
 * @public
 */
export class UnsupportedIdentityProviderException extends __BaseException {
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
 * <p>This exception is throw when your application requests token refresh with a refresh
 *             token that has been invalidated by refresh-token rotation.</p>
 * @public
 */
export class RefreshTokenReuseException extends __BaseException {
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
 * <p>Exception that is thrown when the request isn't authorized. This can happen due to an
 *             invalid access token in the request.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
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
 * <p>Exception that is thrown when an unsupported token is passed to an operation.</p>
 * @public
 */
export class UnsupportedTokenTypeException extends __BaseException {
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
 * <p>This exception is thrown when a user pool doesn't have a configured relying party
 *             id or a user pool domain.</p>
 * @public
 */
export class WebAuthnConfigurationMissingException extends __BaseException {
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
 * <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
 * @public
 */
export class EnableSoftwareTokenMFAException extends __BaseException {
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
