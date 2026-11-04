// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { IAMServiceException as __BaseException } from "./IAMServiceException";

/**
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#ConcurrentModificationException";
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
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @public
 */
export class NoSuchEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#NoSuchEntityException";
  readonly name = "NoSuchEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchEntityException, __BaseException>) {
    super({
      name: "NoSuchEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchEntityException.prototype);
  }
}

/**
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @public
 */
export class ServiceFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#ServiceFailureException";
  readonly name = "ServiceFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
  }
}

/**
 * The request was rejected because the account making the request is not the management account or delegated administrator account for [centralized root access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management).
 *
 * @public
 */
export class AccountNotManagementOrDelegatedAdministratorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#AccountNotManagementOrDelegatedAdministratorException";
  readonly name = "AccountNotManagementOrDelegatedAdministratorException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotManagementOrDelegatedAdministratorException, __BaseException>) {
    super({
      name: "AccountNotManagementOrDelegatedAdministratorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotManagementOrDelegatedAdministratorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#EntityAlreadyExistsException";
  readonly name = "EntityAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
  }
}

/**
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @public
 */
export class InvalidInputException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#InvalidInputException";
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
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#LimitExceededException";
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
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#MalformedPolicyDocumentException";
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
  }
}

/**
 * The request was rejected because the resulting role name conflicts with an existing role in the account.
 *
 * @public
 */
export class NameConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#NameConflictException";
  readonly name = "NameConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameConflictException, __BaseException>) {
    super({
      name: "NameConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameConflictException.prototype);
  }
}

/**
 * The request was rejected because someone modified the role template while the service was creating the role. Wait a few minutes and try the request again.
 *
 * @public
 */
export class RoleModifiedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#RoleModifiedException";
  readonly name = "RoleModifiedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RoleModifiedException, __BaseException>) {
    super({
      name: "RoleModifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RoleModifiedException.prototype);
  }
}

/**
 * The request was rejected because the specified role template is disabled. A disabled role template cannot be used to create new roles. Contact your administrator to enable the role template, or use a different role template.
 *
 * @public
 */
export class RoleTemplateDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#RoleTemplateDisabledException";
  readonly name = "RoleTemplateDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RoleTemplateDisabledException, __BaseException>) {
    super({
      name: "RoleTemplateDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RoleTemplateDisabledException.prototype);
  }
}

/**
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#UnmodifiableEntityException";
  readonly name = "UnmodifiableEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmodifiableEntityException, __BaseException>) {
    super({
      name: "UnmodifiableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
  }
}

/**
 * The request failed because Amazon Web Services service role policies can only be attached to the service-linked role for that service.
 *
 * @public
 */
export class PolicyNotAttachableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#PolicyNotAttachableException";
  readonly name = "PolicyNotAttachableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotAttachableException, __BaseException>) {
    super({
      name: "PolicyNotAttachableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotAttachableException.prototype);
  }
}

/**
 * The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.
 *
 * @public
 */
export class EntityTemporarilyUnmodifiableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#EntityTemporarilyUnmodifiableException";
  readonly name = "EntityTemporarilyUnmodifiableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityTemporarilyUnmodifiableException, __BaseException>) {
    super({
      name: "EntityTemporarilyUnmodifiableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityTemporarilyUnmodifiableException.prototype);
  }
}

/**
 * The request was rejected because the type of user for the transaction was incorrect.
 *
 * @public
 */
export class InvalidUserTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#InvalidUserTypeException";
  readonly name = "InvalidUserTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserTypeException, __BaseException>) {
    super({
      name: "InvalidUserTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserTypeException.prototype);
  }
}

/**
 * The request was rejected because the provided password did not meet the requirements imposed by the account password policy.
 *
 * @public
 */
export class PasswordPolicyViolationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#PasswordPolicyViolationException";
  readonly name = "PasswordPolicyViolationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordPolicyViolationException, __BaseException>) {
    super({
      name: "PasswordPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordPolicyViolationException.prototype);
  }
}

/**
 * The request failed because IAM cannot connect to the OpenID Connect identity provider URL.
 *
 * @public
 */
export class OpenIdIdpCommunicationErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#OpenIdIdpCommunicationErrorException";
  readonly name = "OpenIdIdpCommunicationErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpenIdIdpCommunicationErrorException, __BaseException>) {
    super({
      name: "OpenIdIdpCommunicationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpenIdIdpCommunicationErrorException.prototype);
  }
}

/**
 * The specified service does not support service-specific credentials.
 *
 * @public
 */
export class ServiceNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#ServiceNotSupportedException";
  readonly name = "ServiceNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotSupportedException, __BaseException>) {
    super({
      name: "ServiceNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotSupportedException.prototype);
  }
}

/**
 * The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.
 *
 * @public
 */
export class DeleteConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#DeleteConflictException";
  readonly name = "DeleteConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteConflictException, __BaseException>) {
    super({
      name: "DeleteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteConflictException.prototype);
  }
}

/**
 * The request was rejected because no organization is associated with your account.
 *
 * @public
 */
export class OrganizationNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#OrganizationNotFoundException";
  readonly name = "OrganizationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotFoundException, __BaseException>) {
    super({
      name: "OrganizationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because your organization does not have All features enabled. For more information, see [Available feature sets](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set) in the *Organizations User Guide*.
 *
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#OrganizationNotInAllFeaturesModeException";
  readonly name = "OrganizationNotInAllFeaturesModeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotInAllFeaturesModeException, __BaseException>) {
    super({
      name: "OrganizationNotInAllFeaturesModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the *Organizations User Guide*.
 *
 * @public
 */
export class ServiceAccessNotEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#ServiceAccessNotEnabledException";
  readonly name = "ServiceAccessNotEnabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAccessNotEnabledException, __BaseException>) {
    super({
      name: "ServiceAccessNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAccessNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because outbound identity federation is already disabled for your Amazon Web Services account. You cannot disable the feature multiple times
 *
 * @public
 */
export class FeatureDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#FeatureDisabledException";
  readonly name = "FeatureDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureDisabledException, __BaseException>) {
    super({
      name: "FeatureDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureDisabledException.prototype);
  }
}

/**
 * The request was rejected because the authentication code was not recognized. The error message describes the specific error.
 *
 * @public
 */
export class InvalidAuthenticationCodeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#InvalidAuthenticationCodeException";
  readonly name = "InvalidAuthenticationCodeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthenticationCodeException, __BaseException>) {
    super({
      name: "InvalidAuthenticationCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthenticationCodeException.prototype);
  }
}

/**
 * The request was rejected because the account making the request is not the management account for the organization.
 *
 * @public
 */
export class CallerIsNotManagementAccountException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#CallerIsNotManagementAccountException";
  readonly name = "CallerIsNotManagementAccountException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CallerIsNotManagementAccountException, __BaseException>) {
    super({
      name: "CallerIsNotManagementAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CallerIsNotManagementAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because outbound identity federation is already enabled for your Amazon Web Services account. You cannot enable the feature multiple times. To fetch the current configuration (including the unique issuer URL), use the `GetOutboundWebIdentityFederationInfo` operation.
 *
 * @public
 */
export class FeatureEnabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#FeatureEnabledException";
  readonly name = "FeatureEnabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureEnabledException, __BaseException>) {
    super({
      name: "FeatureEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureEnabledException.prototype);
  }
}

/**
 * The request failed because the maximum number of concurrent requests for this account are already running.
 *
 * @public
 */
export class ReportGenerationLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#ReportGenerationLimitExceededException";
  readonly name = "ReportGenerationLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReportGenerationLimitExceededException, __BaseException>) {
    super({
      name: "ReportGenerationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReportGenerationLimitExceededException.prototype);
  }
}

/**
 * The request was rejected because the most recent credential report has expired. To generate a new credential report, use [GenerateCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html). For more information about credential report expiration, see [Getting credential reports](https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html) in the *IAM User Guide*.
 *
 * @public
 */
export class CredentialReportExpiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#CredentialReportExpiredException";
  readonly name = "CredentialReportExpiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportExpiredException, __BaseException>) {
    super({
      name: "CredentialReportExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportExpiredException.prototype);
  }
}

/**
 * The request was rejected because the credential report does not exist. To generate a credential report, use [GenerateCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html).
 *
 * @public
 */
export class CredentialReportNotPresentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#CredentialReportNotPresentException";
  readonly name = "CredentialReportNotPresentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportNotPresentException, __BaseException>) {
    super({
      name: "CredentialReportNotPresentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportNotPresentException.prototype);
  }
}

/**
 * The request was rejected because the credential report is still being generated.
 *
 * @public
 */
export class CredentialReportNotReadyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#CredentialReportNotReadyException";
  readonly name = "CredentialReportNotReadyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportNotReadyException, __BaseException>) {
    super({
      name: "CredentialReportNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportNotReadyException.prototype);
  }
}

/**
 * The request was rejected because the public key encoding format is unsupported or unrecognized.
 *
 * @public
 */
export class UnrecognizedPublicKeyEncodingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException";
  readonly name = "UnrecognizedPublicKeyEncodingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnrecognizedPublicKeyEncodingException, __BaseException>) {
    super({
      name: "UnrecognizedPublicKeyEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnrecognizedPublicKeyEncodingException.prototype);
  }
}

/**
 * The request failed because a provided policy could not be successfully evaluated. An additional detailed message indicates the source of the failure.
 *
 * @public
 */
export class PolicyEvaluationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#PolicyEvaluationException";
  readonly name = "PolicyEvaluationException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyEvaluationException, __BaseException>) {
    super({
      name: "PolicyEvaluationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyEvaluationException.prototype);
  }
}

/**
 * The request was rejected because the public key certificate and the private key do not match.
 *
 * @public
 */
export class KeyPairMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#KeyPairMismatchException";
  readonly name = "KeyPairMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyPairMismatchException, __BaseException>) {
    super({
      name: "KeyPairMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyPairMismatchException.prototype);
  }
}

/**
 * The request was rejected because the certificate was malformed or expired. The error message describes the specific error.
 *
 * @public
 */
export class MalformedCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#MalformedCertificateException";
  readonly name = "MalformedCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedCertificateException, __BaseException>) {
    super({
      name: "MalformedCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedCertificateException.prototype);
  }
}

/**
 * The request was rejected because the same certificate is associated with an IAM user in the account.
 *
 * @public
 */
export class DuplicateCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#DuplicateCertificateException";
  readonly name = "DuplicateCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateCertificateException, __BaseException>) {
    super({
      name: "DuplicateCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateCertificateException.prototype);
  }
}

/**
 * The request was rejected because the certificate is invalid.
 *
 * @public
 */
export class InvalidCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#InvalidCertificateException";
  readonly name = "InvalidCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>) {
    super({
      name: "InvalidCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateException.prototype);
  }
}

/**
 * The request was rejected because the SSH public key is already associated with the specified IAM user.
 *
 * @public
 */
export class DuplicateSSHPublicKeyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#DuplicateSSHPublicKeyException";
  readonly name = "DuplicateSSHPublicKeyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateSSHPublicKeyException, __BaseException>) {
    super({
      name: "DuplicateSSHPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateSSHPublicKeyException.prototype);
  }
}

/**
 * The request was rejected because the public key is malformed or otherwise invalid.
 *
 * @public
 */
export class InvalidPublicKeyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iam#InvalidPublicKeyException";
  readonly name = "InvalidPublicKeyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPublicKeyException, __BaseException>) {
    super({
      name: "InvalidPublicKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPublicKeyException.prototype);
  }
}
