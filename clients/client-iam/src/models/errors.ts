// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IAMServiceException as __BaseException } from "./IAMServiceException";

/**
 * <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
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
 * <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 * @public
 */
export class NoSuchEntityException extends __BaseException {
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
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
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
 * <p>The request was rejected because the account making the request is not the management
 *       account or delegated administrator account for <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">centralized root
 *         access</a>.</p>
 * @public
 */
export class AccountNotManagementOrDelegatedAdministratorException extends __BaseException {
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
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
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
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
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
 * <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
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
 * <p>The request failed because Amazon Web Services service role policies can only be attached to the
 *       service-linked role for that service.</p>
 * @public
 */
export class PolicyNotAttachableException extends __BaseException {
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
 * <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
 * @public
 */
export class EntityTemporarilyUnmodifiableException extends __BaseException {
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
 * <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 * @public
 */
export class InvalidUserTypeException extends __BaseException {
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
 * <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 * @public
 */
export class PasswordPolicyViolationException extends __BaseException {
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
 * <p>The request failed because IAM cannot connect to the OpenID Connect identity provider
 *       URL.</p>
 * @public
 */
export class OpenIdIdpCommunicationErrorException extends __BaseException {
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
 * <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
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
 * <p>The specified service does not support service-specific credentials.</p>
 * @public
 */
export class ServiceNotSupportedException extends __BaseException {
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
 * <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 * @public
 */
export class DeleteConflictException extends __BaseException {
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
 * <p>The request was rejected because no organization is associated with your account.</p>
 * @public
 */
export class OrganizationNotFoundException extends __BaseException {
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
 * <p>The request was rejected because your organization does not have All features enabled. For
 *       more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set">Available feature sets</a> in the <i>Organizations User
 *       Guide</i>.</p>
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
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
 * <p>The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export class ServiceAccessNotEnabledException extends __BaseException {
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
 * <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 * @public
 */
export class InvalidAuthenticationCodeException extends __BaseException {
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
 * <p>The request was rejected because the account making the request is not the management
 *       account for the organization.</p>
 * @public
 */
export class CallerIsNotManagementAccountException extends __BaseException {
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
 * <p>The request failed because the maximum number of concurrent requests for this account are
 *       already running.</p>
 * @public
 */
export class ReportGenerationLimitExceededException extends __BaseException {
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
 * <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html">GenerateCredentialReport</a>. For more information about credential report expiration,
 *       see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting
 *         credential reports</a> in the <i>IAM User Guide</i>.</p>
 * @public
 */
export class CredentialReportExpiredException extends __BaseException {
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
 * <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html">GenerateCredentialReport</a>.</p>
 * @public
 */
export class CredentialReportNotPresentException extends __BaseException {
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
 * <p>The request was rejected because the credential report is still being generated.</p>
 * @public
 */
export class CredentialReportNotReadyException extends __BaseException {
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
 * <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 * @public
 */
export class UnrecognizedPublicKeyEncodingException extends __BaseException {
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
 * <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 * @public
 */
export class PolicyEvaluationException extends __BaseException {
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
 * <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 * @public
 */
export class KeyPairMismatchException extends __BaseException {
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
 * <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 * @public
 */
export class MalformedCertificateException extends __BaseException {
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
 * <p>The request was rejected because the same certificate is associated with an IAM user in
 *       the account.</p>
 * @public
 */
export class DuplicateCertificateException extends __BaseException {
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
 * <p>The request was rejected because the certificate is invalid.</p>
 * @public
 */
export class InvalidCertificateException extends __BaseException {
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
 * <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 * @public
 */
export class DuplicateSSHPublicKeyException extends __BaseException {
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
 * <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 * @public
 */
export class InvalidPublicKeyException extends __BaseException {
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
