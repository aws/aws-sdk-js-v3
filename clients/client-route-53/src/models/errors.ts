// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { Route53ServiceException as __BaseException } from "./Route53ServiceException";

/**
 * Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request.
 *
 * @public
 */
export class ConcurrentModification extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#ConcurrentModification";
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
 * The input is not valid.
 *
 * @public
 */
export class InvalidInput extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidInput";
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
 * The key-signing key (KSK) status isn't valid or another KSK has the status `INTERNAL_FAILURE`.
 *
 * @public
 */
export class InvalidKeySigningKeyStatus extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidKeySigningKeyStatus";
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
 * The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC signing.
 *
 * @public
 */
export class InvalidKMSArn extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidKMSArn";
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
 * Your hosted zone status isn't valid for this operation. In the hosted zone, change the status to enable `DNSSEC` or disable `DNSSEC`.
 *
 * @public
 */
export class InvalidSigningStatus extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidSigningStatus";
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
 * The specified key-signing key (KSK) doesn't exist.
 *
 * @public
 */
export class NoSuchKeySigningKey extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchKeySigningKey";
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
 * The cause of this error depends on the operation that you're performing:
 *
 * - **Create a public hosted zone:** Two hosted zones that have the same name or that have a parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a delegation set that shares one or more name servers with the existing hosted zone. For more information, see [CreateReusableDelegationSet](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html).
 * - **Create a private hosted zone:** A hosted zone with the specified name already exists and is already associated with the Amazon VPC that you specified.
 * - **Associate VPCs with a private hosted zone:** The VPC that you specified is already associated with another hosted zone that has the same name.
 *
 * @public
 */
export class ConflictingDomainExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#ConflictingDomainExists";
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
 * The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.
 *
 * @public
 */
export class InvalidVPCId extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidVPCId";
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
 * This operation can't be completed because the current account has reached the limit on the resource you are trying to create. To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @public
 */
export class LimitsExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#LimitsExceeded";
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
 * No hosted zone exists with the ID that you specified.
 *
 * @public
 */
export class NoSuchHostedZone extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchHostedZone";
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
 * Associating the specified VPC with the specified hosted zone has not been authorized.
 *
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NotAuthorizedException";
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
 * If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an `HTTP 400 error` (`Bad request`). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
 *
 * @public
 */
export class PriorRequestNotComplete extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#PriorRequestNotComplete";
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
 * You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a VPC with a public hosted zone.
 *
 * @public
 */
export class PublicZoneVPCAssociation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#PublicZoneVPCAssociation";
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
 * This CIDR block is already in use.
 *
 * @public
 */
export class CidrBlockInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#CidrBlockInUseException";
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
 * The CIDR collection version you provided, doesn't match the one in the `ListCidrCollections` operation.
 *
 * @public
 */
export class CidrCollectionVersionMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#CidrCollectionVersionMismatchException";
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
 * The CIDR collection you specified, doesn't exist.
 *
 * @public
 */
export class NoSuchCidrCollectionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchCidrCollectionException";
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
 * This exception contains a list of messages that might contain one or more error messages. Each error message indicates one error in the change batch.
 *
 * @public
 */
export class InvalidChangeBatch extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidChangeBatch";
  readonly name = "InvalidChangeBatch" as const;
  readonly $fault = "client" as const;
  /**
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
 * No health check exists with the specified ID.
 *
 * @public
 */
export class NoSuchHealthCheck extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchHealthCheck";
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
 * The limit on the number of requests per second was exceeded.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#ThrottlingException";
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
 * A CIDR collection with this name and a different caller reference already exists in this account.
 *
 * @public
 */
export class CidrCollectionAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#CidrCollectionAlreadyExistsException";
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
 * The health check you're attempting to create already exists. Amazon Route 53 returns this error when you submit a request that has the following values:
 *
 * - The same value for `CallerReference` as an existing health check, and one or more values that differ from the existing health check that has the same caller reference.
 * - The same value for `CallerReference` as a health check that you created and later deleted, regardless of the other settings in the request.
 *
 * @public
 */
export class HealthCheckAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HealthCheckAlreadyExists";
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
 * This health check can't be created because the current account has reached the limit on the number of active health checks.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * For information about how to get the current limit for an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html). To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * You have reached the maximum number of active health checks for an Amazon Web Services account. To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @public
 */
export class TooManyHealthChecks extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyHealthChecks";
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
 * You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Route 53 generates this error, contact Customer Support.
 *
 * @public
 */
export class DelegationSetNotAvailable extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DelegationSetNotAvailable";
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
 * A reusable delegation set with the specified ID does not exist.
 *
 * @public
 */
export class DelegationSetNotReusable extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DelegationSetNotReusable";
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
 * The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created with the specified `CallerReference`.
 *
 * @public
 */
export class HostedZoneAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HostedZoneAlreadyExists";
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
 * The specified domain name is not valid.
 *
 * @public
 */
export class InvalidDomainName extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidDomainName";
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
 * A reusable delegation set with the specified ID does not exist.
 *
 * @public
 */
export class NoSuchDelegationSet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchDelegationSet";
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
 * This operation can't be completed either because the current account has reached the limit on the number of hosted zones or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * To get the current limit on hosted zones that can be created by an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To get the current limit on hosted zones that can be associated with a reusable delegation set, see [GetReusableDelegationSetLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @public
 */
export class TooManyHostedZones extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyHostedZones";
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
 * Parameter name is not valid.
 *
 * @public
 */
export class InvalidArgument extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidArgument";
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
 * The key-signing key (KSK) name that you specified isn't a valid name.
 *
 * @public
 */
export class InvalidKeySigningKeyName extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidKeySigningKeyName";
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
 * You've already created a key-signing key (KSK) with this name or with the same customer managed key ARN.
 *
 * @public
 */
export class KeySigningKeyAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#KeySigningKeyAlreadyExists";
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
 * You've reached the limit for the number of key-signing keys (KSKs). Remove at least one KSK, and then try again.
 *
 * @public
 */
export class TooManyKeySigningKeys extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyKeySigningKeys";
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
 * Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes include the following:
 *
 * - There is no resource policy that specifies the log group ARN in the value for `Resource`.
 * - The resource policy that includes the log group ARN in the value for `Resource` doesn't have the necessary permissions.
 * - The resource policy hasn't finished propagating yet.
 * - The Key management service (KMS) key you specified doesn’t exist or it can’t be used with the log group associated with query log. Update or provide a resource policy to grant permissions for the KMS key.
 * - The Key management service (KMS) key you specified is marked as disabled for the log group associated with query log. Update or provide a resource policy to grant permissions for the KMS key.
 *
 * @public
 */
export class InsufficientCloudWatchLogsResourcePolicy extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InsufficientCloudWatchLogsResourcePolicy";
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
 * There is no CloudWatch Logs log group with the specified ARN.
 *
 * @public
 */
export class NoSuchCloudWatchLogsLogGroup extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchCloudWatchLogsLogGroup";
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
 * You can create only one query logging configuration for a hosted zone, and a query logging configuration already exists for this hosted zone.
 *
 * @public
 */
export class QueryLoggingConfigAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#QueryLoggingConfigAlreadyExists";
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
 * A delegation set with the same owner and caller reference combination has already been created.
 *
 * @public
 */
export class DelegationSetAlreadyCreated extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DelegationSetAlreadyCreated";
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
 * The specified delegation set has already been marked as reusable.
 *
 * @public
 */
export class DelegationSetAlreadyReusable extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DelegationSetAlreadyReusable";
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
 * The specified HostedZone can't be found.
 *
 * @public
 */
export class HostedZoneNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HostedZoneNotFound";
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
 * The format of the traffic policy document that you specified in the `Document` element is not valid.
 *
 * @public
 */
export class InvalidTrafficPolicyDocument extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidTrafficPolicyDocument";
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
 * This traffic policy can't be created because the current account has reached the limit on the number of traffic policies.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * To get the current limit for an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @public
 */
export class TooManyTrafficPolicies extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyTrafficPolicies";
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
 * A traffic policy that has the same value for `Name` already exists.
 *
 * @public
 */
export class TrafficPolicyAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TrafficPolicyAlreadyExists";
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
 * No traffic policy exists with the specified ID.
 *
 * @public
 */
export class NoSuchTrafficPolicy extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchTrafficPolicy";
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
 * This traffic policy instance can't be created because the current account has reached the limit on the number of traffic policy instances.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * For information about how to get the current limit for an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @public
 */
export class TooManyTrafficPolicyInstances extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyTrafficPolicyInstances";
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
 * There is already a traffic policy instance with the specified ID.
 *
 * @public
 */
export class TrafficPolicyInstanceAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TrafficPolicyInstanceAlreadyExists";
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
 * This traffic policy version can't be created because you've reached the limit of 1000 on the number of versions that you can create for the current traffic policy.
 *
 * To create more traffic policy versions, you can use [GetTrafficPolicy](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html) to get the traffic policy document for a specified traffic policy version, and then use [CreateTrafficPolicy](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html) to create a new traffic policy using the traffic policy document.
 *
 * @public
 */
export class TooManyTrafficPolicyVersionsForCurrentPolicy extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyTrafficPolicyVersionsForCurrentPolicy";
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
 * You've created the maximum number of authorizations that can be created for the specified hosted zone. To authorize another VPC to be associated with the hosted zone, submit a `DeleteVPCAssociationAuthorization` request to remove an existing authorization. To get a list of existing authorizations, submit a `ListVPCAssociationAuthorizations` request.
 *
 * @public
 */
export class TooManyVPCAssociationAuthorizations extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TooManyVPCAssociationAuthorizations";
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
 * The key-signing key (KSK) is specified in a parent DS record.
 *
 * @public
 */
export class KeySigningKeyInParentDSRecord extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#KeySigningKeyInParentDSRecord";
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
 * The key-signing key (KSK) that you specified can't be deactivated because it's the only KSK for a currently-enabled DNSSEC. Disable DNSSEC signing, or add or enable another KSK.
 *
 * @public
 */
export class KeySigningKeyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#KeySigningKeyInUse";
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
 * This CIDR collection is in use, and isn't empty.
 *
 * @public
 */
export class CidrCollectionInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#CidrCollectionInUseException";
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
 * This error code is not in use.
 *
 * @deprecated deprecated.
 * @public
 */
export class HealthCheckInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HealthCheckInUse";
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
 * The hosted zone contains resource records that are not SOA or NS records.
 *
 * @public
 */
export class HostedZoneNotEmpty extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HostedZoneNotEmpty";
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
 * There is no DNS query logging configuration with the specified ID.
 *
 * @public
 */
export class NoSuchQueryLoggingConfig extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchQueryLoggingConfig";
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
 * The specified delegation contains associated hosted zones which must be deleted before the reusable delegation set can be deleted.
 *
 * @public
 */
export class DelegationSetInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DelegationSetInUse";
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
 * One or more traffic policy instances were created by using the specified traffic policy.
 *
 * @public
 */
export class TrafficPolicyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#TrafficPolicyInUse";
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
 * No traffic policy instance exists with the specified ID.
 *
 * @public
 */
export class NoSuchTrafficPolicyInstance extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchTrafficPolicyInstance";
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
 * The VPC that you specified is not authorized to be associated with the hosted zone.
 *
 * @public
 */
export class VPCAssociationAuthorizationNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#VPCAssociationAuthorizationNotFound";
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
 * The hosted zone doesn't have any DNSSEC resources.
 *
 * @public
 */
export class DNSSECNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#DNSSECNotFound";
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
 * The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.
 *
 * @public
 */
export class LastVPCAssociation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#LastVPCAssociation";
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
 * The specified VPC and hosted zone are not currently associated.
 *
 * @public
 */
export class VPCAssociationNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#VPCAssociationNotFound";
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
 * The hosted zone nameservers don't match the parent nameservers. The hosted zone and parent must have the same nameservers.
 *
 * @public
 */
export class HostedZonePartiallyDelegated extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HostedZonePartiallyDelegated";
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
 * A key-signing key (KSK) with `ACTIVE` status wasn't found.
 *
 * @public
 */
export class KeySigningKeyWithActiveStatusNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#KeySigningKeyWithActiveStatusNotFound";
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
 * A change with the specified change ID does not exist.
 *
 * @public
 */
export class NoSuchChange extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchChange";
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
 * Amazon Route 53 doesn't support the specified geographic location. For a list of supported geolocation codes, see the [GeoLocation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html) data type.
 *
 * @public
 */
export class NoSuchGeoLocation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchGeoLocation";
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
 * The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.
 *
 * @public
 */
export class IncompatibleVersion extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#IncompatibleVersion";
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
 * The specified hosted zone is a public hosted zone, not a private hosted zone.
 *
 * @public
 */
export class HostedZoneNotPrivate extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HostedZoneNotPrivate";
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
 * The CIDR collection location doesn't match any locations in your account.
 *
 * @public
 */
export class NoSuchCidrLocationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#NoSuchCidrLocationException";
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
 * The value that you specified to get the second or subsequent page of results is invalid.
 *
 * @public
 */
export class InvalidPaginationToken extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#InvalidPaginationToken";
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
 * The value of `HealthCheckVersion` in the request doesn't match the value of `HealthCheckVersion` in the health check.
 *
 * @public
 */
export class HealthCheckVersionMismatch extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#HealthCheckVersionMismatch";
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
 * You tried to update a traffic policy instance by using a traffic policy version that has a different DNS type than the current type for the instance. You specified the type in the JSON document in the `CreateTrafficPolicy` or `CreateTrafficPolicyVersion`request.
 *
 * @public
 */
export class ConflictingTypes extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.route53#ConflictingTypes";
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
