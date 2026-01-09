// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFrontServiceException as __BaseException } from "./CloudFrontServiceException";

/**
 * <p>Access denied.</p>
 * @public
 */
export class AccessDenied extends __BaseException {
  readonly name = "AccessDenied" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDenied, __BaseException>) {
    super({
      name: "AccessDenied",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDenied.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The update contains modifications that are not allowed.</p>
 * @public
 */
export class IllegalUpdate extends __BaseException {
  readonly name = "IllegalUpdate" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalUpdate, __BaseException>) {
    super({
      name: "IllegalUpdate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalUpdate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An argument is invalid.</p>
 * @public
 */
export class InvalidArgument extends __BaseException {
  readonly name = "InvalidArgument" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified distribution does not exist.</p>
 * @public
 */
export class NoSuchDistribution extends __BaseException {
  readonly name = "NoSuchDistribution" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDistribution, __BaseException>) {
    super({
      name: "NoSuchDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 * @public
 */
export class TooManyDistributionCNAMEs extends __BaseException {
  readonly name = "TooManyDistributionCNAMEs" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionCNAMEs, __BaseException>) {
    super({
      name: "TooManyDistributionCNAMEs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionCNAMEs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity limit has been exceeded.</p>
 * @public
 */
export class EntityLimitExceeded extends __BaseException {
  readonly name = "EntityLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityLimitExceeded, __BaseException>) {
    super({
      name: "EntityLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity was not found.</p>
 * @public
 */
export class EntityNotFound extends __BaseException {
  readonly name = "EntityNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFound, __BaseException>) {
    super({
      name: "EntityNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The <code>If-Match</code> version is missing or not valid.</p>
 * @public
 */
export class InvalidIfMatchVersion extends __BaseException {
  readonly name = "InvalidIfMatchVersion" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIfMatchVersion, __BaseException>) {
    super({
      name: "InvalidIfMatchVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIfMatchVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 * @public
 */
export class PreconditionFailed extends __BaseException {
  readonly name = "PreconditionFailed" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailed, __BaseException>) {
    super({
      name: "PreconditionFailed",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailed.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Invalidation batch specified is too large.</p>
 * @public
 */
export class BatchTooLarge extends __BaseException {
  readonly name = "BatchTooLarge" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchTooLarge, __BaseException>) {
    super({
      name: "BatchTooLarge",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchTooLarge.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A cache policy with this name already exists. You must provide a unique name. To modify an existing cache policy, use <code>UpdateCachePolicy</code>.</p>
 * @public
 */
export class CachePolicyAlreadyExists extends __BaseException {
  readonly name = "CachePolicyAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CachePolicyAlreadyExists, __BaseException>) {
    super({
      name: "CachePolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CachePolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the cache policy because it is attached to one or more cache behaviors.</p>
 * @public
 */
export class CachePolicyInUse extends __BaseException {
  readonly name = "CachePolicyInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CachePolicyInUse, __BaseException>) {
    super({
      name: "CachePolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CachePolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't change the value of a public key.</p>
 * @public
 */
export class CannotChangeImmutablePublicKeyFields extends __BaseException {
  readonly name = "CannotChangeImmutablePublicKeyFields" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotChangeImmutablePublicKeyFields, __BaseException>) {
    super({
      name: "CannotChangeImmutablePublicKeyFields",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotChangeImmutablePublicKeyFields.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity cannot be deleted while it is in use.</p>
 * @public
 */
export class CannotDeleteEntityWhileInUse extends __BaseException {
  readonly name = "CannotDeleteEntityWhileInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDeleteEntityWhileInUse, __BaseException>) {
    super({
      name: "CannotDeleteEntityWhileInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDeleteEntityWhileInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity cannot be updated while it is in use.</p>
 * @public
 */
export class CannotUpdateEntityWhileInUse extends __BaseException {
  readonly name = "CannotUpdateEntityWhileInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotUpdateEntityWhileInUse, __BaseException>) {
    super({
      name: "CannotUpdateEntityWhileInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotUpdateEntityWhileInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CNAME specified is already defined for CloudFront.</p>
 * @public
 */
export class CNAMEAlreadyExists extends __BaseException {
  readonly name = "CNAMEAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CNAMEAlreadyExists, __BaseException>) {
    super({
      name: "CNAMEAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CNAMEAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
 * @public
 */
export class DistributionAlreadyExists extends __BaseException {
  readonly name = "DistributionAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DistributionAlreadyExists, __BaseException>) {
    super({
      name: "DistributionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DistributionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
 * @public
 */
export class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior extends __BaseException {
  readonly name = "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior, __BaseException>) {
    super({
      name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 * @public
 */
export class InconsistentQuantities extends __BaseException {
  readonly name = "InconsistentQuantities" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InconsistentQuantities, __BaseException>) {
    super({
      name: "InconsistentQuantities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InconsistentQuantities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The default root object file name is too big or contains an invalid character.</p>
 * @public
 */
export class InvalidDefaultRootObject extends __BaseException {
  readonly name = "InvalidDefaultRootObject" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDefaultRootObject, __BaseException>) {
    super({
      name: "InvalidDefaultRootObject",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDefaultRootObject.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An invalid error code was specified.</p>
 * @public
 */
export class InvalidErrorCode extends __BaseException {
  readonly name = "InvalidErrorCode" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidErrorCode, __BaseException>) {
    super({
      name: "InvalidErrorCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidErrorCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
 * @public
 */
export class InvalidForwardCookies extends __BaseException {
  readonly name = "InvalidForwardCookies" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidForwardCookies, __BaseException>) {
    super({
      name: "InvalidForwardCookies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidForwardCookies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A CloudFront function association is invalid.</p>
 * @public
 */
export class InvalidFunctionAssociation extends __BaseException {
  readonly name = "InvalidFunctionAssociation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFunctionAssociation, __BaseException>) {
    super({
      name: "InvalidFunctionAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFunctionAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified geo restriction parameter is not valid.</p>
 * @public
 */
export class InvalidGeoRestrictionParameter extends __BaseException {
  readonly name = "InvalidGeoRestrictionParameter" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGeoRestrictionParameter, __BaseException>) {
    super({
      name: "InvalidGeoRestrictionParameter",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGeoRestrictionParameter.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The headers specified are not valid for an Amazon S3 origin.</p>
 * @public
 */
export class InvalidHeadersForS3Origin extends __BaseException {
  readonly name = "InvalidHeadersForS3Origin" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHeadersForS3Origin, __BaseException>) {
    super({
      name: "InvalidHeadersForS3Origin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHeadersForS3Origin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified Lambda@Edge function association is invalid.</p>
 * @public
 */
export class InvalidLambdaFunctionAssociation extends __BaseException {
  readonly name = "InvalidLambdaFunctionAssociation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaFunctionAssociation, __BaseException>) {
    super({
      name: "InvalidLambdaFunctionAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaFunctionAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The location code specified is not valid.</p>
 * @public
 */
export class InvalidLocationCode extends __BaseException {
  readonly name = "InvalidLocationCode" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLocationCode, __BaseException>) {
    super({
      name: "InvalidLocationCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLocationCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The minimum protocol version specified is not valid.</p>
 * @public
 */
export class InvalidMinimumProtocolVersion extends __BaseException {
  readonly name = "InvalidMinimumProtocolVersion" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMinimumProtocolVersion, __BaseException>) {
    super({
      name: "InvalidMinimumProtocolVersion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMinimumProtocolVersion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 * @public
 */
export class InvalidOrigin extends __BaseException {
  readonly name = "InvalidOrigin" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOrigin, __BaseException>) {
    super({
      name: "InvalidOrigin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOrigin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin access control is not valid.</p>
 * @public
 */
export class InvalidOriginAccessControl extends __BaseException {
  readonly name = "InvalidOriginAccessControl" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginAccessControl, __BaseException>) {
    super({
      name: "InvalidOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin access identity is not valid or doesn't exist.</p>
 * @public
 */
export class InvalidOriginAccessIdentity extends __BaseException {
  readonly name = "InvalidOriginAccessIdentity" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginAccessIdentity, __BaseException>) {
    super({
      name: "InvalidOriginAccessIdentity",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginAccessIdentity.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The keep alive timeout specified for the origin is not valid.</p>
 * @public
 */
export class InvalidOriginKeepaliveTimeout extends __BaseException {
  readonly name = "InvalidOriginKeepaliveTimeout" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginKeepaliveTimeout, __BaseException>) {
    super({
      name: "InvalidOriginKeepaliveTimeout",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginKeepaliveTimeout.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The read timeout specified for the origin is not valid.</p>
 * @public
 */
export class InvalidOriginReadTimeout extends __BaseException {
  readonly name = "InvalidOriginReadTimeout" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOriginReadTimeout, __BaseException>) {
    super({
      name: "InvalidOriginReadTimeout",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOriginReadTimeout.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).</p>
 * @public
 */
export class InvalidProtocolSettings extends __BaseException {
  readonly name = "InvalidProtocolSettings" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidProtocolSettings, __BaseException>) {
    super({
      name: "InvalidProtocolSettings",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidProtocolSettings.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The query string parameters specified are not valid.</p>
 * @public
 */
export class InvalidQueryStringParameters extends __BaseException {
  readonly name = "InvalidQueryStringParameters" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryStringParameters, __BaseException>) {
    super({
      name: "InvalidQueryStringParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryStringParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
 * @public
 */
export class InvalidRelativePath extends __BaseException {
  readonly name = "InvalidRelativePath" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRelativePath, __BaseException>) {
    super({
      name: "InvalidRelativePath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRelativePath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
 * @public
 */
export class InvalidRequiredProtocol extends __BaseException {
  readonly name = "InvalidRequiredProtocol" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequiredProtocol, __BaseException>) {
    super({
      name: "InvalidRequiredProtocol",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequiredProtocol.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A response code is not valid.</p>
 * @public
 */
export class InvalidResponseCode extends __BaseException {
  readonly name = "InvalidResponseCode" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseCode, __BaseException>) {
    super({
      name: "InvalidResponseCode",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseCode.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The TTL order specified is not valid.</p>
 * @public
 */
export class InvalidTTLOrder extends __BaseException {
  readonly name = "InvalidTTLOrder" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTTLOrder, __BaseException>) {
    super({
      name: "InvalidTTLOrder",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTTLOrder.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A viewer certificate specified is not valid.</p>
 * @public
 */
export class InvalidViewerCertificate extends __BaseException {
  readonly name = "InvalidViewerCertificate" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidViewerCertificate, __BaseException>) {
    super({
      name: "InvalidViewerCertificate",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidViewerCertificate.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A web ACL ID specified is not valid. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>. To specify a web ACL created using WAF Classic, use the ACL ID, for example <code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 * @public
 */
export class InvalidWebACLId extends __BaseException {
  readonly name = "InvalidWebACLId" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWebACLId, __BaseException>) {
    super({
      name: "InvalidWebACLId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWebACLId.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 * @public
 */
export class MissingBody extends __BaseException {
  readonly name = "MissingBody" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingBody, __BaseException>) {
    super({
      name: "MissingBody",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingBody.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The cache policy does not exist.</p>
 * @public
 */
export class NoSuchCachePolicy extends __BaseException {
  readonly name = "NoSuchCachePolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCachePolicy, __BaseException>) {
    super({
      name: "NoSuchCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption doesn't exist.</p>
 * @public
 */
export class NoSuchFieldLevelEncryptionConfig extends __BaseException {
  readonly name = "NoSuchFieldLevelEncryptionConfig" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFieldLevelEncryptionConfig, __BaseException>) {
    super({
      name: "NoSuchFieldLevelEncryptionConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFieldLevelEncryptionConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No origin exists with the specified <code>Origin Id</code>.</p>
 * @public
 */
export class NoSuchOrigin extends __BaseException {
  readonly name = "NoSuchOrigin" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOrigin, __BaseException>) {
    super({
      name: "NoSuchOrigin",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOrigin.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin request policy does not exist.</p>
 * @public
 */
export class NoSuchOriginRequestPolicy extends __BaseException {
  readonly name = "NoSuchOriginRequestPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOriginRequestPolicy, __BaseException>) {
    super({
      name: "NoSuchOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The real-time log configuration does not exist.</p>
 * @public
 */
export class NoSuchRealtimeLogConfig extends __BaseException {
  readonly name = "NoSuchRealtimeLogConfig" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchRealtimeLogConfig, __BaseException>) {
    super({
      name: "NoSuchRealtimeLogConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchRealtimeLogConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The response headers policy does not exist.</p>
 * @public
 */
export class NoSuchResponseHeadersPolicy extends __BaseException {
  readonly name = "NoSuchResponseHeadersPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResponseHeadersPolicy, __BaseException>) {
    super({
      name: "NoSuchResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified real-time log configuration belongs to a different Amazon Web Services account.</p>
 * @public
 */
export class RealtimeLogConfigOwnerMismatch extends __BaseException {
  readonly name = "RealtimeLogConfigOwnerMismatch" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigOwnerMismatch, __BaseException>) {
    super({
      name: "RealtimeLogConfigOwnerMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigOwnerMismatch.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create more cache behaviors for the distribution.</p>
 * @public
 */
export class TooManyCacheBehaviors extends __BaseException {
  readonly name = "TooManyCacheBehaviors" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCacheBehaviors, __BaseException>) {
    super({
      name: "TooManyCacheBehaviors",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCacheBehaviors.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create anymore custom SSL/TLS certificates.</p>
 * @public
 */
export class TooManyCertificates extends __BaseException {
  readonly name = "TooManyCertificates" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCertificates, __BaseException>) {
    super({
      name: "TooManyCertificates",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCertificates.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
 * @public
 */
export class TooManyCookieNamesInWhiteList extends __BaseException {
  readonly name = "TooManyCookieNamesInWhiteList" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookieNamesInWhiteList, __BaseException>) {
    super({
      name: "TooManyCookieNamesInWhiteList",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookieNamesInWhiteList.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
 * @public
 */
export class TooManyDistributions extends __BaseException {
  readonly name = "TooManyDistributions" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributions, __BaseException>) {
    super({
      name: "TooManyDistributions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToCachePolicy extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToCachePolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToCachePolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToFieldLevelEncryptionConfig, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToFieldLevelEncryptionConfig.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of distributions that reference this key group is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToKeyGroup extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToKeyGroup" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToKeyGroup, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToKeyGroup",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToKeyGroup.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified origin access control.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToOriginAccessControl extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToOriginAccessControl" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToOriginAccessControl, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToOriginRequestPolicy extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToOriginRequestPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsAssociatedToResponseHeadersPolicy extends __BaseException {
  readonly name = "TooManyDistributionsAssociatedToResponseHeadersPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsAssociatedToResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyDistributionsAssociatedToResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsAssociatedToResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of distributions that are associated with a CloudFront function. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyDistributionsWithFunctionAssociations extends __BaseException {
  readonly name = "TooManyDistributionsWithFunctionAssociations" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyDistributionsWithFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause the maximum number of distributions with Lambda@Edge function associations per owner to be exceeded.</p>
 * @public
 */
export class TooManyDistributionsWithLambdaAssociations extends __BaseException {
  readonly name = "TooManyDistributionsWithLambdaAssociations" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithLambdaAssociations, __BaseException>) {
    super({
      name: "TooManyDistributionsWithLambdaAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithLambdaAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified Lambda@Edge function.</p>
 * @public
 */
export class TooManyDistributionsWithSingleFunctionARN extends __BaseException {
  readonly name = "TooManyDistributionsWithSingleFunctionARN" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyDistributionsWithSingleFunctionARN, __BaseException>) {
    super({
      name: "TooManyDistributionsWithSingleFunctionARN",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyDistributionsWithSingleFunctionARN.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of CloudFront function associations for this distribution. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyFunctionAssociations extends __BaseException {
  readonly name = "TooManyFunctionAssociations" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many headers in forwarded values.</p>
 * @public
 */
export class TooManyHeadersInForwardedValues extends __BaseException {
  readonly name = "TooManyHeadersInForwardedValues" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInForwardedValues, __BaseException>) {
    super({
      name: "TooManyHeadersInForwardedValues",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInForwardedValues.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of key groups referenced by this distribution is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyKeyGroupsAssociatedToDistribution extends __BaseException {
  readonly name = "TooManyKeyGroupsAssociatedToDistribution" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyKeyGroupsAssociatedToDistribution, __BaseException>) {
    super({
      name: "TooManyKeyGroupsAssociatedToDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyKeyGroupsAssociatedToDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more Lambda@Edge function associations than are allowed per distribution.</p>
 * @public
 */
export class TooManyLambdaFunctionAssociations extends __BaseException {
  readonly name = "TooManyLambdaFunctionAssociations" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLambdaFunctionAssociations, __BaseException>) {
    super({
      name: "TooManyLambdaFunctionAssociations",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLambdaFunctionAssociations.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many origin custom headers.</p>
 * @public
 */
export class TooManyOriginCustomHeaders extends __BaseException {
  readonly name = "TooManyOriginCustomHeaders" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginCustomHeaders, __BaseException>) {
    super({
      name: "TooManyOriginCustomHeaders",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginCustomHeaders.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
 * @public
 */
export class TooManyOriginGroupsPerDistribution extends __BaseException {
  readonly name = "TooManyOriginGroupsPerDistribution" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginGroupsPerDistribution, __BaseException>) {
    super({
      name: "TooManyOriginGroupsPerDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginGroupsPerDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot create more origins for the distribution.</p>
 * @public
 */
export class TooManyOrigins extends __BaseException {
  readonly name = "TooManyOrigins" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOrigins, __BaseException>) {
    super({
      name: "TooManyOrigins",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOrigins.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains too many query string parameters.</p>
 * @public
 */
export class TooManyQueryStringParameters extends __BaseException {
  readonly name = "TooManyQueryStringParameters" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringParameters, __BaseException>) {
    super({
      name: "TooManyQueryStringParameters",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringParameters.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more trusted signers than are allowed per distribution.</p>
 * @public
 */
export class TooManyTrustedSigners extends __BaseException {
  readonly name = "TooManyTrustedSigners" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrustedSigners, __BaseException>) {
    super({
      name: "TooManyTrustedSigners",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrustedSigners.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified key group does not exist.</p>
 * @public
 */
export class TrustedKeyGroupDoesNotExist extends __BaseException {
  readonly name = "TrustedKeyGroupDoesNotExist" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustedKeyGroupDoesNotExist, __BaseException>) {
    super({
      name: "TrustedKeyGroupDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustedKeyGroupDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of your trusted signers don't exist.</p>
 * @public
 */
export class TrustedSignerDoesNotExist extends __BaseException {
  readonly name = "TrustedSignerDoesNotExist" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustedSignerDoesNotExist, __BaseException>) {
    super({
      name: "TrustedSignerDoesNotExist",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustedSignerDoesNotExist.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity already exists. You must provide a unique entity.</p>
 * @public
 */
export class EntityAlreadyExists extends __BaseException {
  readonly name = "EntityAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExists, __BaseException>) {
    super({
      name: "EntityAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The tagging specified is not valid.</p>
 * @public
 */
export class InvalidTagging extends __BaseException {
  readonly name = "InvalidTagging" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagging, __BaseException>) {
    super({
      name: "InvalidTagging",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagging.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation is not supported in this Amazon Web Services Region.</p>
 * @public
 */
export class UnsupportedOperation extends __BaseException {
  readonly name = "UnsupportedOperation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperation, __BaseException>) {
    super({
      name: "UnsupportedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of cache policies for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCachePolicies extends __BaseException {
  readonly name = "TooManyCachePolicies" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCachePolicies, __BaseException>) {
    super({
      name: "TooManyCachePolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCachePolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of cookies in the cache policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCookiesInCachePolicy extends __BaseException {
  readonly name = "TooManyCookiesInCachePolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookiesInCachePolicy, __BaseException>) {
    super({
      name: "TooManyCookiesInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookiesInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of headers in the cache policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyHeadersInCachePolicy extends __BaseException {
  readonly name = "TooManyHeadersInCachePolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInCachePolicy, __BaseException>) {
    super({
      name: "TooManyHeadersInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of query strings in the cache policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyQueryStringsInCachePolicy extends __BaseException {
  readonly name = "TooManyQueryStringsInCachePolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringsInCachePolicy, __BaseException>) {
    super({
      name: "TooManyQueryStringsInCachePolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringsInCachePolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
 * @public
 */
export class CloudFrontOriginAccessIdentityAlreadyExists extends __BaseException {
  readonly name = "CloudFrontOriginAccessIdentityAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudFrontOriginAccessIdentityAlreadyExists, __BaseException>) {
    super({
      name: "CloudFrontOriginAccessIdentityAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudFrontOriginAccessIdentityAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
 * @public
 */
export class TooManyCloudFrontOriginAccessIdentities extends __BaseException {
  readonly name = "TooManyCloudFrontOriginAccessIdentities" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCloudFrontOriginAccessIdentities, __BaseException>) {
    super({
      name: "TooManyCloudFrontOriginAccessIdentities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCloudFrontOriginAccessIdentities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entity size limit was exceeded.</p>
 * @public
 */
export class EntitySizeLimitExceeded extends __BaseException {
  readonly name = "EntitySizeLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitySizeLimitExceeded, __BaseException>) {
    super({
      name: "EntitySizeLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitySizeLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A continuous deployment policy with this configuration already exists.</p>
 * @public
 */
export class ContinuousDeploymentPolicyAlreadyExists extends __BaseException {
  readonly name = "ContinuousDeploymentPolicyAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContinuousDeploymentPolicyAlreadyExists, __BaseException>) {
    super({
      name: "ContinuousDeploymentPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContinuousDeploymentPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A continuous deployment policy for this staging distribution already exists.</p>
 * @public
 */
export class StagingDistributionInUse extends __BaseException {
  readonly name = "StagingDistributionInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StagingDistributionInUse, __BaseException>) {
    super({
      name: "StagingDistributionInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StagingDistributionInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of continuous deployment policies for this Amazon Web Services account.</p>
 * @public
 */
export class TooManyContinuousDeploymentPolicies extends __BaseException {
  readonly name = "TooManyContinuousDeploymentPolicies" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyContinuousDeploymentPolicies, __BaseException>) {
    super({
      name: "TooManyContinuousDeploymentPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyContinuousDeploymentPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You cannot delete a continuous deployment policy that is associated with a primary distribution.</p>
 * @public
 */
export class ContinuousDeploymentPolicyInUse extends __BaseException {
  readonly name = "ContinuousDeploymentPolicyInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContinuousDeploymentPolicyInUse, __BaseException>) {
    super({
      name: "ContinuousDeploymentPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContinuousDeploymentPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An origin cannot contain both an origin access control (OAC) and an origin access identity (OAI).</p>
 * @public
 */
export class IllegalOriginAccessConfiguration extends __BaseException {
  readonly name = "IllegalOriginAccessConfiguration" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalOriginAccessConfiguration, __BaseException>) {
    super({
      name: "IllegalOriginAccessConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalOriginAccessConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An origin access control is associated with an origin whose domain name is not supported.</p>
 * @public
 */
export class InvalidDomainNameForOriginAccessControl extends __BaseException {
  readonly name = "InvalidDomainNameForOriginAccessControl" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDomainNameForOriginAccessControl, __BaseException>) {
    super({
      name: "InvalidDomainNameForOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDomainNameForOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The continuous deployment policy doesn't exist.</p>
 * @public
 */
export class NoSuchContinuousDeploymentPolicy extends __BaseException {
  readonly name = "NoSuchContinuousDeploymentPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchContinuousDeploymentPolicy, __BaseException>) {
    super({
      name: "NoSuchContinuousDeploymentPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchContinuousDeploymentPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront resource can't be associated.</p>
 * @public
 */
export class InvalidAssociation extends __BaseException {
  readonly name = "InvalidAssociation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAssociation, __BaseException>) {
    super({
      name: "InvalidAssociation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAssociation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption already exists.</p>
 * @public
 */
export class FieldLevelEncryptionConfigAlreadyExists extends __BaseException {
  readonly name = "FieldLevelEncryptionConfigAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionConfigAlreadyExists, __BaseException>) {
    super({
      name: "FieldLevelEncryptionConfigAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionConfigAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified profile for field-level encryption doesn't exist.</p>
 * @public
 */
export class NoSuchFieldLevelEncryptionProfile extends __BaseException {
  readonly name = "NoSuchFieldLevelEncryptionProfile" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFieldLevelEncryptionProfile, __BaseException>) {
    super({
      name: "NoSuchFieldLevelEncryptionProfile",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFieldLevelEncryptionProfile.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No profile specified for the field-level encryption query argument.</p>
 * @public
 */
export class QueryArgProfileEmpty extends __BaseException {
  readonly name = "QueryArgProfileEmpty" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryArgProfileEmpty, __BaseException>) {
    super({
      name: "QueryArgProfileEmpty",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryArgProfileEmpty.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of configurations for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionConfigs extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionConfigs" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionConfigs, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionConfigs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionConfigs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of content type profiles for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionContentTypeProfiles extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionContentTypeProfiles" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionContentTypeProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionContentTypeProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionContentTypeProfiles.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionQueryArgProfiles extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionQueryArgProfiles" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionQueryArgProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionQueryArgProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionQueryArgProfiles.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified profile for field-level encryption already exists.</p>
 * @public
 */
export class FieldLevelEncryptionProfileAlreadyExists extends __BaseException {
  readonly name = "FieldLevelEncryptionProfileAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileAlreadyExists, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 * @public
 */
export class FieldLevelEncryptionProfileSizeExceeded extends __BaseException {
  readonly name = "FieldLevelEncryptionProfileSizeExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileSizeExceeded, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileSizeExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileSizeExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified public key doesn't exist.</p>
 * @public
 */
export class NoSuchPublicKey extends __BaseException {
  readonly name = "NoSuchPublicKey" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchPublicKey, __BaseException>) {
    super({
      name: "NoSuchPublicKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchPublicKey.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of encryption entities for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionEncryptionEntities extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionEncryptionEntities" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionEncryptionEntities, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionEncryptionEntities",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionEncryptionEntities.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of field patterns for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionFieldPatterns extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionFieldPatterns" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionFieldPatterns, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionFieldPatterns",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionFieldPatterns.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of profiles for field-level encryption have been created.</p>
 * @public
 */
export class TooManyFieldLevelEncryptionProfiles extends __BaseException {
  readonly name = "TooManyFieldLevelEncryptionProfiles" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFieldLevelEncryptionProfiles, __BaseException>) {
    super({
      name: "TooManyFieldLevelEncryptionProfiles",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFieldLevelEncryptionProfiles.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A function with the same name already exists in this Amazon Web Services account. To create a function, you must provide a unique name. To update an existing function, use <code>UpdateFunction</code>.</p>
 * @public
 */
export class FunctionAlreadyExists extends __BaseException {
  readonly name = "FunctionAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionAlreadyExists, __BaseException>) {
    super({
      name: "FunctionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The function is too large. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class FunctionSizeLimitExceeded extends __BaseException {
  readonly name = "FunctionSizeLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionSizeLimitExceeded, __BaseException>) {
    super({
      name: "FunctionSizeLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionSizeLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of CloudFront functions for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyFunctions extends __BaseException {
  readonly name = "TooManyFunctions" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFunctions, __BaseException>) {
    super({
      name: "TooManyFunctions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFunctions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
 * @public
 */
export class TooManyInvalidationsInProgress extends __BaseException {
  readonly name = "TooManyInvalidationsInProgress" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyInvalidationsInProgress, __BaseException>) {
    super({
      name: "TooManyInvalidationsInProgress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyInvalidationsInProgress.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A key group with this name already exists. You must provide a unique name. To modify an existing key group, use <code>UpdateKeyGroup</code>.</p>
 * @public
 */
export class KeyGroupAlreadyExists extends __BaseException {
  readonly name = "KeyGroupAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyGroupAlreadyExists, __BaseException>) {
    super({
      name: "KeyGroupAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyGroupAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of key groups for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyKeyGroups extends __BaseException {
  readonly name = "TooManyKeyGroups" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyKeyGroups, __BaseException>) {
    super({
      name: "TooManyKeyGroups",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyKeyGroups.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of public keys in this key group is more than the maximum allowed. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyPublicKeysInKeyGroup extends __BaseException {
  readonly name = "TooManyPublicKeysInKeyGroup" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPublicKeysInKeyGroup, __BaseException>) {
    super({
      name: "TooManyPublicKeysInKeyGroup",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPublicKeysInKeyGroup.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A monitoring subscription already exists for the specified distribution.</p>
 * @public
 */
export class MonitoringSubscriptionAlreadyExists extends __BaseException {
  readonly name = "MonitoringSubscriptionAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MonitoringSubscriptionAlreadyExists, __BaseException>) {
    super({
      name: "MonitoringSubscriptionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MonitoringSubscriptionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An origin access control with the specified parameters already exists.</p>
 * @public
 */
export class OriginAccessControlAlreadyExists extends __BaseException {
  readonly name = "OriginAccessControlAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginAccessControlAlreadyExists, __BaseException>) {
    super({
      name: "OriginAccessControlAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginAccessControlAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of origin access controls in your Amazon Web Services account exceeds the maximum allowed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyOriginAccessControls extends __BaseException {
  readonly name = "TooManyOriginAccessControls" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginAccessControls, __BaseException>) {
    super({
      name: "TooManyOriginAccessControls",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginAccessControls.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An origin request policy with this name already exists. You must provide a unique name. To modify an existing origin request policy, use <code>UpdateOriginRequestPolicy</code>.</p>
 * @public
 */
export class OriginRequestPolicyAlreadyExists extends __BaseException {
  readonly name = "OriginRequestPolicyAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginRequestPolicyAlreadyExists, __BaseException>) {
    super({
      name: "OriginRequestPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginRequestPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of cookies in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCookiesInOriginRequestPolicy extends __BaseException {
  readonly name = "TooManyCookiesInOriginRequestPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCookiesInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyCookiesInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCookiesInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of headers in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyHeadersInOriginRequestPolicy extends __BaseException {
  readonly name = "TooManyHeadersInOriginRequestPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyHeadersInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyHeadersInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyHeadersInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of origin request policies for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyOriginRequestPolicies extends __BaseException {
  readonly name = "TooManyOriginRequestPolicies" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyOriginRequestPolicies, __BaseException>) {
    super({
      name: "TooManyOriginRequestPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyOriginRequestPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of query strings in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyQueryStringsInOriginRequestPolicy extends __BaseException {
  readonly name = "TooManyQueryStringsInOriginRequestPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyQueryStringsInOriginRequestPolicy, __BaseException>) {
    super({
      name: "TooManyQueryStringsInOriginRequestPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyQueryStringsInOriginRequestPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified public key already exists.</p>
 * @public
 */
export class PublicKeyAlreadyExists extends __BaseException {
  readonly name = "PublicKeyAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicKeyAlreadyExists, __BaseException>) {
    super({
      name: "PublicKeyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicKeyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
 * @public
 */
export class TooManyPublicKeys extends __BaseException {
  readonly name = "TooManyPublicKeys" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPublicKeys, __BaseException>) {
    super({
      name: "TooManyPublicKeys",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPublicKeys.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A real-time log configuration with this name already exists. You must provide a unique name. To modify an existing real-time log configuration, use <code>UpdateRealtimeLogConfig</code>.</p>
 * @public
 */
export class RealtimeLogConfigAlreadyExists extends __BaseException {
  readonly name = "RealtimeLogConfigAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigAlreadyExists, __BaseException>) {
    super({
      name: "RealtimeLogConfigAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of real-time log configurations for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyRealtimeLogConfigs extends __BaseException {
  readonly name = "TooManyRealtimeLogConfigs" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRealtimeLogConfigs, __BaseException>) {
    super({
      name: "TooManyRealtimeLogConfigs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRealtimeLogConfigs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A response headers policy with this name already exists. You must provide a unique name. To modify an existing response headers policy, use <code>UpdateResponseHeadersPolicy</code>.</p>
 * @public
 */
export class ResponseHeadersPolicyAlreadyExists extends __BaseException {
  readonly name = "ResponseHeadersPolicyAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponseHeadersPolicyAlreadyExists, __BaseException>) {
    super({
      name: "ResponseHeadersPolicyAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponseHeadersPolicyAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The length of the <code>Content-Security-Policy</code> header value in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooLongCSPInResponseHeadersPolicy extends __BaseException {
  readonly name = "TooLongCSPInResponseHeadersPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooLongCSPInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooLongCSPInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooLongCSPInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of custom headers in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyCustomHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name = "TooManyCustomHeadersInResponseHeadersPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCustomHeadersInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyCustomHeadersInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCustomHeadersInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of headers in <code>RemoveHeadersConfig</code> in the response headers policy exceeds the maximum.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyRemoveHeadersInResponseHeadersPolicy extends __BaseException {
  readonly name = "TooManyRemoveHeadersInResponseHeadersPolicy" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRemoveHeadersInResponseHeadersPolicy, __BaseException>) {
    super({
      name: "TooManyRemoveHeadersInResponseHeadersPolicy",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRemoveHeadersInResponseHeadersPolicy.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have reached the maximum number of response headers policies for this Amazon Web Services account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export class TooManyResponseHeadersPolicies extends __BaseException {
  readonly name = "TooManyResponseHeadersPolicies" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyResponseHeadersPolicies, __BaseException>) {
    super({
      name: "TooManyResponseHeadersPolicies",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyResponseHeadersPolicies.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The caller reference you attempted to create the streaming distribution with is associated with another distribution</p>
 * @public
 */
export class StreamingDistributionAlreadyExists extends __BaseException {
  readonly name = "StreamingDistributionAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamingDistributionAlreadyExists, __BaseException>) {
    super({
      name: "StreamingDistributionAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamingDistributionAlreadyExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 * @public
 */
export class TooManyStreamingDistributionCNAMEs extends __BaseException {
  readonly name = "TooManyStreamingDistributionCNAMEs" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyStreamingDistributionCNAMEs, __BaseException>) {
    super({
      name: "TooManyStreamingDistributionCNAMEs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyStreamingDistributionCNAMEs.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
 * @public
 */
export class TooManyStreamingDistributions extends __BaseException {
  readonly name = "TooManyStreamingDistributions" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyStreamingDistributions, __BaseException>) {
    super({
      name: "TooManyStreamingDistributions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyStreamingDistributions.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Deletion is not allowed for this entity.</p>
 * @public
 */
export class IllegalDelete extends __BaseException {
  readonly name = "IllegalDelete" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalDelete, __BaseException>) {
    super({
      name: "IllegalDelete",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalDelete.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Origin Access Identity specified is already in use.</p>
 * @public
 */
export class CloudFrontOriginAccessIdentityInUse extends __BaseException {
  readonly name = "CloudFrontOriginAccessIdentityInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudFrontOriginAccessIdentityInUse, __BaseException>) {
    super({
      name: "CloudFrontOriginAccessIdentityInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudFrontOriginAccessIdentityInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified origin access identity does not exist.</p>
 * @public
 */
export class NoSuchCloudFrontOriginAccessIdentity extends __BaseException {
  readonly name = "NoSuchCloudFrontOriginAccessIdentity" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchCloudFrontOriginAccessIdentity, __BaseException>) {
    super({
      name: "NoSuchCloudFrontOriginAccessIdentity",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchCloudFrontOriginAccessIdentity.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront resource hasn't been disabled yet.</p>
 * @public
 */
export class ResourceNotDisabled extends __BaseException {
  readonly name = "ResourceNotDisabled" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotDisabled, __BaseException>) {
    super({
      name: "ResourceNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotDisabled.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 * @public
 */
export class DistributionNotDisabled extends __BaseException {
  readonly name = "DistributionNotDisabled" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DistributionNotDisabled, __BaseException>) {
    super({
      name: "DistributionNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DistributionNotDisabled.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete this resource because it is in use.</p>
 * @public
 */
export class ResourceInUse extends __BaseException {
  readonly name = "ResourceInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration for field-level encryption is in use.</p>
 * @public
 */
export class FieldLevelEncryptionConfigInUse extends __BaseException {
  readonly name = "FieldLevelEncryptionConfigInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionConfigInUse, __BaseException>) {
    super({
      name: "FieldLevelEncryptionConfigInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionConfigInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified profile for field-level encryption is in use.</p>
 * @public
 */
export class FieldLevelEncryptionProfileInUse extends __BaseException {
  readonly name = "FieldLevelEncryptionProfileInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FieldLevelEncryptionProfileInUse, __BaseException>) {
    super({
      name: "FieldLevelEncryptionProfileInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FieldLevelEncryptionProfileInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the function because it's attached to one or more cache behaviors.</p>
 * @public
 */
export class FunctionInUse extends __BaseException {
  readonly name = "FunctionInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionInUse, __BaseException>) {
    super({
      name: "FunctionInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The function does not exist.</p>
 * @public
 */
export class NoSuchFunctionExists extends __BaseException {
  readonly name = "NoSuchFunctionExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchFunctionExists, __BaseException>) {
    super({
      name: "NoSuchFunctionExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchFunctionExists.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource that was specified is not valid.</p>
 * @public
 */
export class NoSuchResource extends __BaseException {
  readonly name = "NoSuchResource" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResource, __BaseException>) {
    super({
      name: "NoSuchResource",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResource.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A monitoring subscription does not exist for the specified distribution.</p>
 * @public
 */
export class NoSuchMonitoringSubscription extends __BaseException {
  readonly name = "NoSuchMonitoringSubscription" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchMonitoringSubscription, __BaseException>) {
    super({
      name: "NoSuchMonitoringSubscription",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchMonitoringSubscription.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The origin access control does not exist.</p>
 * @public
 */
export class NoSuchOriginAccessControl extends __BaseException {
  readonly name = "NoSuchOriginAccessControl" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchOriginAccessControl, __BaseException>) {
    super({
      name: "NoSuchOriginAccessControl",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchOriginAccessControl.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the origin access control because it's in use by one or more distributions.</p>
 * @public
 */
export class OriginAccessControlInUse extends __BaseException {
  readonly name = "OriginAccessControlInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginAccessControlInUse, __BaseException>) {
    super({
      name: "OriginAccessControlInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginAccessControlInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the origin request policy because it is attached to one or more cache behaviors.</p>
 * @public
 */
export class OriginRequestPolicyInUse extends __BaseException {
  readonly name = "OriginRequestPolicyInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OriginRequestPolicyInUse, __BaseException>) {
    super({
      name: "OriginRequestPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OriginRequestPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified public key is in use.</p>
 * @public
 */
export class PublicKeyInUse extends __BaseException {
  readonly name = "PublicKeyInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicKeyInUse, __BaseException>) {
    super({
      name: "PublicKeyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicKeyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the real-time log configuration because it is attached to one or more cache behaviors.</p>
 * @public
 */
export class RealtimeLogConfigInUse extends __BaseException {
  readonly name = "RealtimeLogConfigInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RealtimeLogConfigInUse, __BaseException>) {
    super({
      name: "RealtimeLogConfigInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RealtimeLogConfigInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cannot delete the response headers policy because it is attached to one or more cache behaviors in a CloudFront distribution.</p>
 * @public
 */
export class ResponseHeadersPolicyInUse extends __BaseException {
  readonly name = "ResponseHeadersPolicyInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponseHeadersPolicyInUse, __BaseException>) {
    super({
      name: "ResponseHeadersPolicyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponseHeadersPolicyInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified streaming distribution does not exist.</p>
 * @public
 */
export class NoSuchStreamingDistribution extends __BaseException {
  readonly name = "NoSuchStreamingDistribution" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchStreamingDistribution, __BaseException>) {
    super({
      name: "NoSuchStreamingDistribution",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchStreamingDistribution.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 * @public
 */
export class StreamingDistributionNotDisabled extends __BaseException {
  readonly name = "StreamingDistributionNotDisabled" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamingDistributionNotDisabled, __BaseException>) {
    super({
      name: "StreamingDistributionNotDisabled",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamingDistributionNotDisabled.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified invalidation does not exist.</p>
 * @public
 */
export class NoSuchInvalidation extends __BaseException {
  readonly name = "NoSuchInvalidation" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchInvalidation, __BaseException>) {
    super({
      name: "NoSuchInvalidation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchInvalidation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CloudFront function failed.</p>
 * @public
 */
export class TestFunctionFailed extends __BaseException {
  readonly name = "TestFunctionFailed" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TestFunctionFailed, __BaseException>) {
    super({
      name: "TestFunctionFailed",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, TestFunctionFailed.prototype);
    this.Message = opts.Message;
  }
}
