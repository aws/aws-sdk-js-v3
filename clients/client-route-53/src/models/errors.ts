// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53ServiceException as __BaseException } from "./Route53ServiceException";

/**
 * <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 * @public
 */
export class ConcurrentModification extends __BaseException {
  readonly name = "ConcurrentModification" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModification, __BaseException>) {
    super({
      name: "ConcurrentModification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModification.prototype);
  }
}

/**
 * <p>The input is not valid.</p>
 * @public
 */
export class InvalidInput extends __BaseException {
  readonly name = "InvalidInput" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInput, __BaseException>) {
    super({
      name: "InvalidInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInput.prototype);
  }
}

/**
 * <p>The key-signing key (KSK) status isn't valid or another KSK has the status
 * 				<code>INTERNAL_FAILURE</code>.</p>
 * @public
 */
export class InvalidKeySigningKeyStatus extends __BaseException {
  readonly name = "InvalidKeySigningKeyStatus" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeySigningKeyStatus, __BaseException>) {
    super({
      name: "InvalidKeySigningKeyStatus",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeySigningKeyStatus.prototype);
  }
}

/**
 * <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC
 * 			signing.</p>
 * @public
 */
export class InvalidKMSArn extends __BaseException {
  readonly name = "InvalidKMSArn" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKMSArn, __BaseException>) {
    super({
      name: "InvalidKMSArn",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKMSArn.prototype);
  }
}

/**
 * <p>Your hosted zone status isn't valid for this operation. In the hosted zone, change the
 * 			status to enable <code>DNSSEC</code> or disable <code>DNSSEC</code>.</p>
 * @public
 */
export class InvalidSigningStatus extends __BaseException {
  readonly name = "InvalidSigningStatus" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSigningStatus, __BaseException>) {
    super({
      name: "InvalidSigningStatus",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSigningStatus.prototype);
  }
}

/**
 * <p>The specified key-signing key (KSK) doesn't exist.</p>
 * @public
 */
export class NoSuchKeySigningKey extends __BaseException {
  readonly name = "NoSuchKeySigningKey" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchKeySigningKey, __BaseException>) {
    super({
      name: "NoSuchKeySigningKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchKeySigningKey.prototype);
  }
}

/**
 * <p>The cause of this error depends on the operation that you're performing:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create a public hosted zone:</b> Two hosted zones
 * 					that have the same name or that have a parent/child relationship (example.com
 * 					and test.example.com) can't have any common name servers. You tried to create a
 * 					hosted zone that has the same name as an existing hosted zone or that's the
 * 					parent or child of an existing hosted zone, and you specified a delegation set
 * 					that shares one or more name servers with the existing hosted zone. For more
 * 					information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create a private hosted zone:</b> A hosted zone
 * 					with the specified name already exists and is already associated with the Amazon
 * 					VPC that you specified.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Associate VPCs with a private hosted zone:</b>
 * 					The VPC that you specified is already associated with another hosted zone that
 * 					has the same name.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConflictingDomainExists extends __BaseException {
  readonly name = "ConflictingDomainExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingDomainExists, __BaseException>) {
    super({
      name: "ConflictingDomainExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingDomainExists.prototype);
  }
}

/**
 * <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 * @public
 */
export class InvalidVPCId extends __BaseException {
  readonly name = "InvalidVPCId" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVPCId, __BaseException>) {
    super({
      name: "InvalidVPCId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVPCId.prototype);
  }
}

/**
 * <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 * @public
 */
export class LimitsExceeded extends __BaseException {
  readonly name = "LimitsExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitsExceeded, __BaseException>) {
    super({
      name: "LimitsExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitsExceeded.prototype);
  }
}

/**
 * <p>No hosted zone exists with the ID that you specified.</p>
 * @public
 */
export class NoSuchHostedZone extends __BaseException {
  readonly name = "NoSuchHostedZone" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchHostedZone, __BaseException>) {
    super({
      name: "NoSuchHostedZone",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchHostedZone.prototype);
  }
}

/**
 * <p>Associating the specified VPC with the specified hosted zone has not been
 * 			authorized.</p>
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
 * <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 * @public
 */
export class PriorRequestNotComplete extends __BaseException {
  readonly name = "PriorRequestNotComplete" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PriorRequestNotComplete, __BaseException>) {
    super({
      name: "PriorRequestNotComplete",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PriorRequestNotComplete.prototype);
  }
}

/**
 * <p>You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't
 * 			support associating a VPC with a public hosted zone.</p>
 * @public
 */
export class PublicZoneVPCAssociation extends __BaseException {
  readonly name = "PublicZoneVPCAssociation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicZoneVPCAssociation, __BaseException>) {
    super({
      name: "PublicZoneVPCAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicZoneVPCAssociation.prototype);
  }
}

/**
 * <p>This CIDR block is already in use.</p>
 * @public
 */
export class CidrBlockInUseException extends __BaseException {
  readonly name = "CidrBlockInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CidrBlockInUseException, __BaseException>) {
    super({
      name: "CidrBlockInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CidrBlockInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CIDR collection version you provided, doesn't match the one in the
 * 				<code>ListCidrCollections</code> operation.</p>
 * @public
 */
export class CidrCollectionVersionMismatchException extends __BaseException {
  readonly name = "CidrCollectionVersionMismatchException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CidrCollectionVersionMismatchException, __BaseException>) {
    super({
      name: "CidrCollectionVersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CidrCollectionVersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CIDR collection you specified, doesn't exist.</p>
 * @public
 */
export class NoSuchCidrCollectionException extends __BaseException {
  readonly name = "NoSuchCidrCollectionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCidrCollectionException, __BaseException>) {
    super({
      name: "NoSuchCidrCollectionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCidrCollectionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception contains a list of messages that might contain one or more error
 * 			messages. Each error message indicates one error in the change batch.</p>
 * @public
 */
export class InvalidChangeBatch extends __BaseException {
  readonly name = "InvalidChangeBatch" as const;
  readonly $fault = "client" as const;
  /**
   * <p></p>
   * @public
   */
  messages?: string[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidChangeBatch, __BaseException>) {
    super({
      name: "InvalidChangeBatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidChangeBatch.prototype);
    this.messages = opts.messages;
  }
}

/**
 * <p>No health check exists with the specified ID.</p>
 * @public
 */
export class NoSuchHealthCheck extends __BaseException {
  readonly name = "NoSuchHealthCheck" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchHealthCheck, __BaseException>) {
    super({
      name: "NoSuchHealthCheck",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchHealthCheck.prototype);
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>A CIDR collection with this name and a different caller reference already exists in this account.</p>
 * @public
 */
export class CidrCollectionAlreadyExistsException extends __BaseException {
  readonly name = "CidrCollectionAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CidrCollectionAlreadyExistsException, __BaseException>) {
    super({
      name: "CidrCollectionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CidrCollectionAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The health check you're attempting to create already exists. Amazon Route 53 returns
 * 			this error when you submit a request that has the following values:</p>
 *          <ul>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as an existing health check,
 * 					and one or more values that differ from the existing health check that has the
 * 					same caller reference.</p>
 *             </li>
 *             <li>
 *                <p>The same value for <code>CallerReference</code> as a health check that you
 * 					created and later deleted, regardless of the other settings in the
 * 					request.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class HealthCheckAlreadyExists extends __BaseException {
  readonly name = "HealthCheckAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HealthCheckAlreadyExists, __BaseException>) {
    super({
      name: "HealthCheckAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HealthCheckAlreadyExists.prototype);
  }
}

/**
 * <p>This health check can't be created because the current account has reached the limit
 * 			on the number of active health checks.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *          <p>You have reached the maximum number of active health checks for an Amazon Web Services account. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 * @public
 */
export class TooManyHealthChecks extends __BaseException {
  readonly name = "TooManyHealthChecks" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHealthChecks, __BaseException>) {
    super({
      name: "TooManyHealthChecks",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHealthChecks.prototype);
  }
}

/**
 * <p>You can create a hosted zone that has the same name as an existing hosted zone
 * 			(example.com is common), but there is a limit to the number of hosted zones that have
 * 			the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 * @public
 */
export class DelegationSetNotAvailable extends __BaseException {
  readonly name = "DelegationSetNotAvailable" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegationSetNotAvailable, __BaseException>) {
    super({
      name: "DelegationSetNotAvailable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegationSetNotAvailable.prototype);
  }
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 * @public
 */
export class DelegationSetNotReusable extends __BaseException {
  readonly name = "DelegationSetNotReusable" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegationSetNotReusable, __BaseException>) {
    super({
      name: "DelegationSetNotReusable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegationSetNotReusable.prototype);
  }
}

/**
 * <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this
 * 			error when a hosted zone has already been created with the specified
 * 				<code>CallerReference</code>.</p>
 * @public
 */
export class HostedZoneAlreadyExists extends __BaseException {
  readonly name = "HostedZoneAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HostedZoneAlreadyExists, __BaseException>) {
    super({
      name: "HostedZoneAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HostedZoneAlreadyExists.prototype);
  }
}

/**
 * <p>The specified domain name is not valid.</p>
 * @public
 */
export class InvalidDomainName extends __BaseException {
  readonly name = "InvalidDomainName" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDomainName, __BaseException>) {
    super({
      name: "InvalidDomainName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDomainName.prototype);
  }
}

/**
 * <p>A reusable delegation set with the specified ID does not exist.</p>
 * @public
 */
export class NoSuchDelegationSet extends __BaseException {
  readonly name = "NoSuchDelegationSet" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDelegationSet, __BaseException>) {
    super({
      name: "NoSuchDelegationSet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDelegationSet.prototype);
  }
}

/**
 * <p>This operation can't be completed either because the current account has reached the
 * 			limit on the number of hosted zones or because you've reached the limit on the number of
 * 			hosted zones that can be associated with a reusable delegation set.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>To get the current limit on hosted zones that can be created by an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 *          <p>To get the current limit on hosted zones that can be associated with a reusable
 * 			delegation set, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html">GetReusableDelegationSetLimit</a>.</p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 * @public
 */
export class TooManyHostedZones extends __BaseException {
  readonly name = "TooManyHostedZones" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHostedZones, __BaseException>) {
    super({
      name: "TooManyHostedZones",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHostedZones.prototype);
  }
}

/**
 * <p>Parameter name is not valid.</p>
 * @public
 */
export class InvalidArgument extends __BaseException {
  readonly name = "InvalidArgument" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgument, __BaseException>) {
    super({
      name: "InvalidArgument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgument.prototype);
  }
}

/**
 * <p>The key-signing key (KSK) name that you specified isn't a valid name.</p>
 * @public
 */
export class InvalidKeySigningKeyName extends __BaseException {
  readonly name = "InvalidKeySigningKeyName" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeySigningKeyName, __BaseException>) {
    super({
      name: "InvalidKeySigningKeyName",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeySigningKeyName.prototype);
  }
}

/**
 * <p>You've already created a key-signing key (KSK) with this name or with the same customer managed key ARN.</p>
 * @public
 */
export class KeySigningKeyAlreadyExists extends __BaseException {
  readonly name = "KeySigningKeyAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeySigningKeyAlreadyExists, __BaseException>) {
    super({
      name: "KeySigningKeyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeySigningKeyAlreadyExists.prototype);
  }
}

/**
 * <p>You've reached the limit for the number of key-signing keys (KSKs). Remove at least
 * 			one KSK, and then try again.</p>
 * @public
 */
export class TooManyKeySigningKeys extends __BaseException {
  readonly name = "TooManyKeySigningKeys" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyKeySigningKeys, __BaseException>) {
    super({
      name: "TooManyKeySigningKeys",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyKeySigningKeys.prototype);
  }
}

/**
 * <p>Amazon Route 53 doesn't have the permissions required to create log streams and send
 * 			query logs to log streams. Possible causes include the following:</p>
 *          <ul>
 *             <li>
 *                <p>There is no resource policy that specifies the log group ARN in the value for
 * 						<code>Resource</code>.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy that includes the log group ARN in the value for
 * 						<code>Resource</code> doesn't have the necessary permissions.</p>
 *             </li>
 *             <li>
 *                <p>The resource policy hasn't finished propagating yet.</p>
 *             </li>
 *             <li>
 *                <p>The Key management service (KMS) key you specified doesn’t exist or it can’t
 * 					be used with the log group associated with query log. Update or provide a
 * 					resource policy to grant permissions for the KMS key.</p>
 *             </li>
 *             <li>
 *                <p>The Key management service (KMS) key you specified is marked as
 * 				disabled for the log group associated with query log. Update or provide
 * 				a resource policy to grant permissions for the KMS key.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InsufficientCloudWatchLogsResourcePolicy extends __BaseException {
  readonly name = "InsufficientCloudWatchLogsResourcePolicy" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCloudWatchLogsResourcePolicy, __BaseException>) {
    super({
      name: "InsufficientCloudWatchLogsResourcePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCloudWatchLogsResourcePolicy.prototype);
  }
}

/**
 * <p>There is no CloudWatch Logs log group with the specified ARN.</p>
 * @public
 */
export class NoSuchCloudWatchLogsLogGroup extends __BaseException {
  readonly name = "NoSuchCloudWatchLogsLogGroup" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCloudWatchLogsLogGroup, __BaseException>) {
    super({
      name: "NoSuchCloudWatchLogsLogGroup",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCloudWatchLogsLogGroup.prototype);
  }
}

/**
 * <p>You can create only one query logging configuration for a hosted zone, and a query
 * 			logging configuration already exists for this hosted zone.</p>
 * @public
 */
export class QueryLoggingConfigAlreadyExists extends __BaseException {
  readonly name = "QueryLoggingConfigAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryLoggingConfigAlreadyExists, __BaseException>) {
    super({
      name: "QueryLoggingConfigAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryLoggingConfigAlreadyExists.prototype);
  }
}

/**
 * <p>A delegation set with the same owner and caller reference combination has already been
 * 			created.</p>
 * @public
 */
export class DelegationSetAlreadyCreated extends __BaseException {
  readonly name = "DelegationSetAlreadyCreated" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegationSetAlreadyCreated, __BaseException>) {
    super({
      name: "DelegationSetAlreadyCreated",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegationSetAlreadyCreated.prototype);
  }
}

/**
 * <p>The specified delegation set has already been marked as reusable.</p>
 * @public
 */
export class DelegationSetAlreadyReusable extends __BaseException {
  readonly name = "DelegationSetAlreadyReusable" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegationSetAlreadyReusable, __BaseException>) {
    super({
      name: "DelegationSetAlreadyReusable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegationSetAlreadyReusable.prototype);
  }
}

/**
 * <p>The specified HostedZone can't be found.</p>
 * @public
 */
export class HostedZoneNotFound extends __BaseException {
  readonly name = "HostedZoneNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HostedZoneNotFound, __BaseException>) {
    super({
      name: "HostedZoneNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HostedZoneNotFound.prototype);
  }
}

/**
 * <p>The format of the traffic policy document that you specified in the
 * 				<code>Document</code> element is not valid.</p>
 * @public
 */
export class InvalidTrafficPolicyDocument extends __BaseException {
  readonly name = "InvalidTrafficPolicyDocument" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTrafficPolicyDocument, __BaseException>) {
    super({
      name: "InvalidTrafficPolicyDocument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTrafficPolicyDocument.prototype);
  }
}

/**
 * <p>This traffic policy can't be created because the current account has reached the limit
 * 			on the number of traffic policies.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>To get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. </p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 * @public
 */
export class TooManyTrafficPolicies extends __BaseException {
  readonly name = "TooManyTrafficPolicies" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrafficPolicies, __BaseException>) {
    super({
      name: "TooManyTrafficPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrafficPolicies.prototype);
  }
}

/**
 * <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 * @public
 */
export class TrafficPolicyAlreadyExists extends __BaseException {
  readonly name = "TrafficPolicyAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrafficPolicyAlreadyExists, __BaseException>) {
    super({
      name: "TrafficPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrafficPolicyAlreadyExists.prototype);
  }
}

/**
 * <p>No traffic policy exists with the specified ID.</p>
 * @public
 */
export class NoSuchTrafficPolicy extends __BaseException {
  readonly name = "NoSuchTrafficPolicy" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchTrafficPolicy, __BaseException>) {
    super({
      name: "NoSuchTrafficPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchTrafficPolicy.prototype);
  }
}

/**
 * <p>This traffic policy instance can't be created because the current account has reached
 * 			the limit on the number of traffic policy instances.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 * @public
 */
export class TooManyTrafficPolicyInstances extends __BaseException {
  readonly name = "TooManyTrafficPolicyInstances" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrafficPolicyInstances, __BaseException>) {
    super({
      name: "TooManyTrafficPolicyInstances",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrafficPolicyInstances.prototype);
  }
}

/**
 * <p>There is already a traffic policy instance with the specified ID.</p>
 * @public
 */
export class TrafficPolicyInstanceAlreadyExists extends __BaseException {
  readonly name = "TrafficPolicyInstanceAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrafficPolicyInstanceAlreadyExists, __BaseException>) {
    super({
      name: "TrafficPolicyInstanceAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrafficPolicyInstanceAlreadyExists.prototype);
  }
}

/**
 * <p>This traffic policy version can't be created because you've reached the limit of 1000
 * 			on the number of versions that you can create for the current traffic policy.</p>
 *          <p>To create more traffic policy versions, you can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>
 * 			to get the traffic policy document for a specified traffic policy version, and then use
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a> to create a new traffic policy using the traffic policy
 * 			document.</p>
 * @public
 */
export class TooManyTrafficPolicyVersionsForCurrentPolicy extends __BaseException {
  readonly name = "TooManyTrafficPolicyVersionsForCurrentPolicy" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrafficPolicyVersionsForCurrentPolicy, __BaseException>) {
    super({
      name: "TooManyTrafficPolicyVersionsForCurrentPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrafficPolicyVersionsForCurrentPolicy.prototype);
  }
}

/**
 * <p>You've created the maximum number of authorizations that can be created for the
 * 			specified hosted zone. To authorize another VPC to be associated with the hosted zone,
 * 			submit a <code>DeleteVPCAssociationAuthorization</code> request to remove an existing
 * 			authorization. To get a list of existing authorizations, submit a
 * 				<code>ListVPCAssociationAuthorizations</code> request.</p>
 * @public
 */
export class TooManyVPCAssociationAuthorizations extends __BaseException {
  readonly name = "TooManyVPCAssociationAuthorizations" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyVPCAssociationAuthorizations, __BaseException>) {
    super({
      name: "TooManyVPCAssociationAuthorizations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyVPCAssociationAuthorizations.prototype);
  }
}

/**
 * <p>The key-signing key (KSK) is specified in a parent DS record.</p>
 * @public
 */
export class KeySigningKeyInParentDSRecord extends __BaseException {
  readonly name = "KeySigningKeyInParentDSRecord" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeySigningKeyInParentDSRecord, __BaseException>) {
    super({
      name: "KeySigningKeyInParentDSRecord",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeySigningKeyInParentDSRecord.prototype);
  }
}

/**
 * <p>The key-signing key (KSK) that you specified can't be deactivated because it's the
 * 			only KSK for a currently-enabled DNSSEC. Disable DNSSEC signing, or add or enable
 * 			another KSK.</p>
 * @public
 */
export class KeySigningKeyInUse extends __BaseException {
  readonly name = "KeySigningKeyInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeySigningKeyInUse, __BaseException>) {
    super({
      name: "KeySigningKeyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeySigningKeyInUse.prototype);
  }
}

/**
 * <p>This CIDR collection is in use, and isn't empty.</p>
 * @public
 */
export class CidrCollectionInUseException extends __BaseException {
  readonly name = "CidrCollectionInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CidrCollectionInUseException, __BaseException>) {
    super({
      name: "CidrCollectionInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CidrCollectionInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This error code is not in use.</p>
 *
 * @deprecated deprecated
 * @public
 */
export class HealthCheckInUse extends __BaseException {
  readonly name = "HealthCheckInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HealthCheckInUse, __BaseException>) {
    super({
      name: "HealthCheckInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HealthCheckInUse.prototype);
  }
}

/**
 * <p>The hosted zone contains resource records that are not SOA or NS records.</p>
 * @public
 */
export class HostedZoneNotEmpty extends __BaseException {
  readonly name = "HostedZoneNotEmpty" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HostedZoneNotEmpty, __BaseException>) {
    super({
      name: "HostedZoneNotEmpty",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HostedZoneNotEmpty.prototype);
  }
}

/**
 * <p>There is no DNS query logging configuration with the specified ID.</p>
 * @public
 */
export class NoSuchQueryLoggingConfig extends __BaseException {
  readonly name = "NoSuchQueryLoggingConfig" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchQueryLoggingConfig, __BaseException>) {
    super({
      name: "NoSuchQueryLoggingConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchQueryLoggingConfig.prototype);
  }
}

/**
 * <p>The specified delegation contains associated hosted zones which must be deleted before
 * 			the reusable delegation set can be deleted.</p>
 * @public
 */
export class DelegationSetInUse extends __BaseException {
  readonly name = "DelegationSetInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegationSetInUse, __BaseException>) {
    super({
      name: "DelegationSetInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegationSetInUse.prototype);
  }
}

/**
 * <p>One or more traffic policy instances were created by using the specified traffic
 * 			policy.</p>
 * @public
 */
export class TrafficPolicyInUse extends __BaseException {
  readonly name = "TrafficPolicyInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrafficPolicyInUse, __BaseException>) {
    super({
      name: "TrafficPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrafficPolicyInUse.prototype);
  }
}

/**
 * <p>No traffic policy instance exists with the specified ID.</p>
 * @public
 */
export class NoSuchTrafficPolicyInstance extends __BaseException {
  readonly name = "NoSuchTrafficPolicyInstance" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchTrafficPolicyInstance, __BaseException>) {
    super({
      name: "NoSuchTrafficPolicyInstance",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchTrafficPolicyInstance.prototype);
  }
}

/**
 * <p>The VPC that you specified is not authorized to be associated with the hosted
 * 			zone.</p>
 * @public
 */
export class VPCAssociationAuthorizationNotFound extends __BaseException {
  readonly name = "VPCAssociationAuthorizationNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VPCAssociationAuthorizationNotFound, __BaseException>) {
    super({
      name: "VPCAssociationAuthorizationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VPCAssociationAuthorizationNotFound.prototype);
  }
}

/**
 * <p>The hosted zone doesn't have any DNSSEC resources.</p>
 * @public
 */
export class DNSSECNotFound extends __BaseException {
  readonly name = "DNSSECNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DNSSECNotFound, __BaseException>) {
    super({
      name: "DNSSECNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DNSSECNotFound.prototype);
  }
}

/**
 * <p>The VPC that you're trying to disassociate from the private hosted zone is the last
 * 			VPC that is associated with the hosted zone. Amazon Route 53 doesn't support
 * 			disassociating the last VPC from a hosted zone.</p>
 * @public
 */
export class LastVPCAssociation extends __BaseException {
  readonly name = "LastVPCAssociation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LastVPCAssociation, __BaseException>) {
    super({
      name: "LastVPCAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LastVPCAssociation.prototype);
  }
}

/**
 * <p>The specified VPC and hosted zone are not currently associated.</p>
 * @public
 */
export class VPCAssociationNotFound extends __BaseException {
  readonly name = "VPCAssociationNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VPCAssociationNotFound, __BaseException>) {
    super({
      name: "VPCAssociationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VPCAssociationNotFound.prototype);
  }
}

/**
 * <p>The hosted zone nameservers don't match the parent nameservers. The hosted zone and
 * 			parent must have the same nameservers.</p>
 * @public
 */
export class HostedZonePartiallyDelegated extends __BaseException {
  readonly name = "HostedZonePartiallyDelegated" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HostedZonePartiallyDelegated, __BaseException>) {
    super({
      name: "HostedZonePartiallyDelegated",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HostedZonePartiallyDelegated.prototype);
  }
}

/**
 * <p>A key-signing key (KSK) with <code>ACTIVE</code> status wasn't found.</p>
 * @public
 */
export class KeySigningKeyWithActiveStatusNotFound extends __BaseException {
  readonly name = "KeySigningKeyWithActiveStatusNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeySigningKeyWithActiveStatusNotFound, __BaseException>) {
    super({
      name: "KeySigningKeyWithActiveStatusNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeySigningKeyWithActiveStatusNotFound.prototype);
  }
}

/**
 * <p>A change with the specified change ID does not exist.</p>
 * @public
 */
export class NoSuchChange extends __BaseException {
  readonly name = "NoSuchChange" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchChange, __BaseException>) {
    super({
      name: "NoSuchChange",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchChange.prototype);
  }
}

/**
 * <p>Amazon Route 53 doesn't support the specified geographic location. For a list of
 * 			supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data
 * 			type.</p>
 * @public
 */
export class NoSuchGeoLocation extends __BaseException {
  readonly name = "NoSuchGeoLocation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchGeoLocation, __BaseException>) {
    super({
      name: "NoSuchGeoLocation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchGeoLocation.prototype);
  }
}

/**
 * <p>The resource you're trying to access is unsupported on this Amazon Route 53
 * 			endpoint.</p>
 * @public
 */
export class IncompatibleVersion extends __BaseException {
  readonly name = "IncompatibleVersion" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleVersion, __BaseException>) {
    super({
      name: "IncompatibleVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleVersion.prototype);
  }
}

/**
 * <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 * @public
 */
export class HostedZoneNotPrivate extends __BaseException {
  readonly name = "HostedZoneNotPrivate" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HostedZoneNotPrivate, __BaseException>) {
    super({
      name: "HostedZoneNotPrivate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HostedZoneNotPrivate.prototype);
  }
}

/**
 * <p>The CIDR collection location doesn't match any locations in your account.</p>
 * @public
 */
export class NoSuchCidrLocationException extends __BaseException {
  readonly name = "NoSuchCidrLocationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCidrLocationException, __BaseException>) {
    super({
      name: "NoSuchCidrLocationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCidrLocationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 * @public
 */
export class InvalidPaginationToken extends __BaseException {
  readonly name = "InvalidPaginationToken" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationToken, __BaseException>) {
    super({
      name: "InvalidPaginationToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationToken.prototype);
  }
}

/**
 * <p>The value of <code>HealthCheckVersion</code> in the request doesn't match the value of
 * 				<code>HealthCheckVersion</code> in the health check.</p>
 * @public
 */
export class HealthCheckVersionMismatch extends __BaseException {
  readonly name = "HealthCheckVersionMismatch" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HealthCheckVersionMismatch, __BaseException>) {
    super({
      name: "HealthCheckVersionMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HealthCheckVersionMismatch.prototype);
  }
}

/**
 * <p>You tried to update a traffic policy instance by using a traffic policy version that
 * 			has a different DNS type than the current type for the instance. You specified the type
 * 			in the JSON document in the <code>CreateTrafficPolicy</code> or
 * 				<code>CreateTrafficPolicyVersion</code>request. </p>
 * @public
 */
export class ConflictingTypes extends __BaseException {
  readonly name = "ConflictingTypes" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingTypes, __BaseException>) {
    super({
      name: "ConflictingTypes",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingTypes.prototype);
  }
}
