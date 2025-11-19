// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { STSServiceException as __BaseException } from "./STSServiceException";

/**
 * <p>The web identity token that was passed is expired or is not valid. Get a new identity
 *             token from the identity provider and then retry the request.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name = "ExpiredTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
  }
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *             describes the specific error.</p>
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
 * <p>The request was rejected because the total packed size of the session policies and
 *             session tags combined was too large. An Amazon Web Services conversion compresses the session policy
 *             document, session policy ARNs, and session tags into a packed binary format that has a
 *             separate limit. The error message indicates by percentage how close the policies and
 *             tags are to the upper size limit. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in
 *             the <i>IAM User Guide</i>.</p>
 *          <p>You could receive this error even though you meet other defined session policy and
 *             session tag limits. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length">IAM and STS Entity Character Limits</a> in the <i>IAM User
 *                 Guide</i>.</p>
 * @public
 */
export class PackedPolicyTooLargeException extends __BaseException {
  readonly name = "PackedPolicyTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PackedPolicyTooLargeException, __BaseException>) {
    super({
      name: "PackedPolicyTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
  }
}

/**
 * <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate
 *             STS in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate">Activating and Deactivating STS in an Amazon Web Services Region</a> in the <i>IAM
 *                 User Guide</i>.</p>
 * @public
 */
export class RegionDisabledException extends __BaseException {
  readonly name = "RegionDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegionDisabledException, __BaseException>) {
    super({
      name: "RegionDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegionDisabledException.prototype);
  }
}

/**
 * <p>The identity provider (IdP) reported that authentication failed. This might be because
 *             the claim is invalid.</p>
 *          <p>If this error is returned for the <code>AssumeRoleWithWebIdentity</code> operation, it
 *             can also mean that the claim has expired or has been explicitly revoked. </p>
 * @public
 */
export class IDPRejectedClaimException extends __BaseException {
  readonly name = "IDPRejectedClaimException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IDPRejectedClaimException, __BaseException>) {
    super({
      name: "IDPRejectedClaimException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
  }
}

/**
 * <p>The web identity token that was passed could not be validated by Amazon Web Services. Get a new
 *             identity token from the identity provider and then retry the request.</p>
 * @public
 */
export class InvalidIdentityTokenException extends __BaseException {
  readonly name = "InvalidIdentityTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIdentityTokenException, __BaseException>) {
    super({
      name: "InvalidIdentityTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
  }
}

/**
 * <p>The request could not be fulfilled because the identity provider (IDP) that was asked
 *             to verify the incoming identity token could not be reached. This is often a transient
 *             error caused by network conditions. Retry the request a limited number of times so that
 *             you don't exceed the request rate. If the error persists, the identity provider might be
 *             down or not responding.</p>
 * @public
 */
export class IDPCommunicationErrorException extends __BaseException {
  readonly name = "IDPCommunicationErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IDPCommunicationErrorException, __BaseException>) {
    super({
      name: "IDPCommunicationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
  }
}

/**
 * <p>The error returned if the message passed to <code>DecodeAuthorizationMessage</code>
 *             was invalid. This can happen if the token contains invalid characters, such as line
 *             breaks, or if the message has expired.</p>
 * @public
 */
export class InvalidAuthorizationMessageException extends __BaseException {
  readonly name = "InvalidAuthorizationMessageException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthorizationMessageException, __BaseException>) {
    super({
      name: "InvalidAuthorizationMessageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
  }
}

/**
 * <p>The trade-in token provided in the request has expired and can no longer be exchanged
 *             for credentials. Request a new token and retry the operation.</p>
 * @public
 */
export class ExpiredTradeInTokenException extends __BaseException {
  readonly name = "ExpiredTradeInTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTradeInTokenException, __BaseException>) {
    super({
      name: "ExpiredTradeInTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTradeInTokenException.prototype);
  }
}

/**
 * <p>The requested token payload size exceeds the maximum allowed size. Reduce the number of request tags included in the <code>GetWebIdentityToken</code> API call to reduce the token payload size.</p>
 * @public
 */
export class JWTPayloadSizeExceededException extends __BaseException {
  readonly name = "JWTPayloadSizeExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JWTPayloadSizeExceededException, __BaseException>) {
    super({
      name: "JWTPayloadSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JWTPayloadSizeExceededException.prototype);
  }
}

/**
 * <p>The outbound web identity federation feature is not enabled for this account. To use
 *             this feature, you must first enable it through the Amazon Web Services Management Console or API.</p>
 * @public
 */
export class OutboundWebIdentityFederationDisabledException extends __BaseException {
  readonly name = "OutboundWebIdentityFederationDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutboundWebIdentityFederationDisabledException, __BaseException>) {
    super({
      name: "OutboundWebIdentityFederationDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutboundWebIdentityFederationDisabledException.prototype);
  }
}

/**
 * <p>The requested token duration would extend the session beyond its original expiration time.
 *             You cannot use this operation to extend the lifetime of a session beyond what was granted when the session was originally created.</p>
 * @public
 */
export class SessionDurationEscalationException extends __BaseException {
  readonly name = "SessionDurationEscalationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionDurationEscalationException, __BaseException>) {
    super({
      name: "SessionDurationEscalationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionDurationEscalationException.prototype);
  }
}
