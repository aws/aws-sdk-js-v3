// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { STSServiceException as __BaseException } from "./STSServiceException";

/**
 * <p>The web identity token that was passed is expired or is not valid. Get a new identity
 *             token from the identity provider and then retry the request.</p>
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
 * <p>The request was rejected because the context assertion that was provided is invalid.
 *             This can happen if the context assertion supplied in the <code>ProvidedContexts</code>
 *             parameter is malformed, has expired, or does not match a trusted context provider.</p>
 * @public
 */
export class InvalidContextAssertionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sts#InvalidContextAssertionException";
  readonly name = "InvalidContextAssertionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContextAssertionException, __BaseException>) {
    super({
      name: "InvalidContextAssertionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContextAssertionException.prototype);
  }
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *             describes the specific error.</p>
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
 * <p>The request was rejected because the session token exceeded the maximum allowed size.
 *             The error message reports the session token size and the maximum allowed size, both in
 *             bytes. Session policies and session tags add to the session token size. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in
 *             the <i>IAM User Guide</i>.</p>
 *          <p>You might receive this error even though you meet the individual session policy and
 *             session tag limits. Monitor <code>SessionTokenUtilization</code> to track how close the
 *             session token is to the maximum allowed size. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length">IAM and STS Entity Character Limits</a> in the <i>IAM User
 *                 Guide</i>.</p>
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
 * <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate
 *             STS in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-activate-deactivate">Activating and Deactivating STS in an Amazon Web Services Region</a> in the <i>IAM
 *                 User Guide</i>.</p>
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
 * <p>The identity provider (IdP) reported that authentication failed. This might be because
 *             the claim is invalid.</p>
 *          <p>If this error is returned for the <code>AssumeRoleWithWebIdentity</code> operation, it
 *             can also mean that the claim has expired or has been explicitly revoked. </p>
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
 * <p>The web identity token that was passed could not be validated by Amazon Web Services. Get a new
 *             identity token from the identity provider and then retry the request.</p>
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
 * <p>The request could not be fulfilled because the identity provider (IDP) that was asked
 *             to verify the incoming identity token could not be reached. This is often a transient
 *             error caused by network conditions. Retry the request a limited number of times so that
 *             you don't exceed the request rate. If the error persists, the identity provider might be
 *             down or not responding.</p>
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
