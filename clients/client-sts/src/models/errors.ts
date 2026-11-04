// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { STSServiceException as __BaseException } from "./STSServiceException";

/**
 * The web identity token that was passed is expired or is not valid. Get a new identity token from the identity provider and then retry the request.
 *
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#ExpiredTokenException";
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
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#MalformedPolicyDocumentException";
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
 * The request was rejected because the total packed size of the session policies and session tags combined was too large. An Amazon Web Services conversion compresses the session policy document, session policy ARNs, and session tags into a packed binary format that has a separate limit. The error message indicates by percentage how close the policies and tags are to the upper size limit. For more information, see [Passing Session Tags in STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html) in the *IAM User Guide*.
 *
 * You could receive this error even though you meet other defined session policy and session tag limits. For more information, see [IAM and STS Entity Character Limits](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length) in the *IAM User Guide*.
 *
 * @public
 */
export class PackedPolicyTooLargeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#PackedPolicyTooLargeException";
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
 * STS is not activated in the requested region for the account that is being asked to generate credentials. The account administrator must use the IAM console to activate STS in that region. For more information, see [Activating and Deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate) in the *IAM User Guide*.
 *
 * @public
 */
export class RegionDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#RegionDisabledException";
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
 * The identity provider (IdP) reported that authentication failed. This might be because the claim is invalid.
 *
 * If this error is returned for the `AssumeRoleWithWebIdentity` operation, it can also mean that the claim has expired or has been explicitly revoked.
 *
 * @public
 */
export class IDPRejectedClaimException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#IDPRejectedClaimException";
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
 * The web identity token that was passed could not be validated by Amazon Web Services. Get a new identity token from the identity provider and then retry the request.
 *
 * @public
 */
export class InvalidIdentityTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#InvalidIdentityTokenException";
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
 * The request could not be fulfilled because the identity provider (IDP) that was asked to verify the incoming identity token could not be reached. This is often a transient error caused by network conditions. Retry the request a limited number of times so that you don't exceed the request rate. If the error persists, the identity provider might be down or not responding.
 *
 * @public
 */
export class IDPCommunicationErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#IDPCommunicationErrorException";
  readonly name = "IDPCommunicationErrorException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
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
 * The error returned if the message passed to `DecodeAuthorizationMessage` was invalid. This can happen if the token contains invalid characters, such as line breaks, or if the message has expired.
 *
 * @public
 */
export class InvalidAuthorizationMessageException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#InvalidAuthorizationMessageException";
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
 * The trade-in token provided in the request has expired and can no longer be exchanged for credentials. Request a new token and retry the operation.
 *
 * @public
 */
export class ExpiredTradeInTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#ExpiredTradeInTokenException";
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
 * The requested token payload size exceeds the maximum allowed size. Reduce the number of request tags included in the `GetWebIdentityToken` API call to reduce the token payload size.
 *
 * @public
 */
export class JWTPayloadSizeExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#JWTPayloadSizeExceededException";
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
 * The outbound web identity federation feature is not enabled for this account. To use this feature, you must first enable it through the Amazon Web Services Management Console or API.
 *
 * @public
 */
export class OutboundWebIdentityFederationDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#OutboundWebIdentityFederationDisabledException";
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
 * The requested token duration would extend the session beyond its original expiration time. You cannot use this operation to extend the lifetime of a session beyond what was granted when the session was originally created.
 *
 * @public
 */
export class SessionDurationEscalationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#SessionDurationEscalationException";
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
