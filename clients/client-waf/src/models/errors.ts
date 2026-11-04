// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { MigrationErrorType, ParameterExceptionField, ParameterExceptionReason } from "./enums";
import { WAFServiceException as __BaseException } from "./WAFServiceException";

/**
 * The name specified is invalid.
 *
 * @public
 */
export class WAFDisallowedNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFDisallowedNameException";
  readonly name = "WAFDisallowedNameException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFDisallowedNameException, __BaseException>) {
    super({
      name: "WAFDisallowedNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFDisallowedNameException.prototype);
  }
}

/**
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @public
 */
export class WAFInternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInternalErrorException";
  readonly name = "WAFInternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInternalErrorException, __BaseException>) {
    super({
      name: "WAFInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInternalErrorException.prototype);
  }
}

/**
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @public
 */
export class WAFInvalidAccountException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInvalidAccountException";
  readonly name = "WAFInvalidAccountException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidAccountException, __BaseException>) {
    super({
      name: "WAFInvalidAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidAccountException.prototype);
  }
}

/**
 * The operation failed because AWS WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified an invalid parameter name.
 * - You specified an invalid value.
 * - You tried to update an object (`ByteMatchSet`, `IPSet`, `Rule`, or `WebACL`) using an action other than `INSERT` or `DELETE`.
 * - You tried to create a `WebACL` with a `DefaultAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to create a `RateBasedRule` with a `RateKey` value other than `IP`.
 * - You tried to update a `WebACL` with a `WafAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to update a `ByteMatchSet` with a `FieldToMatch` `Type` other than HEADER, METHOD, QUERY_STRING, URI, or BODY.
 * - You tried to update a `ByteMatchSet` with a `Field` of `HEADER` but no value for `Data`.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.
 *
 * @public
 */
export class WAFInvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInvalidParameterException";
  readonly name = "WAFInvalidParameterException" as const;
  readonly $fault = "client" as const;
  field?: ParameterExceptionField | undefined;
  parameter?: string | undefined;
  reason?: ParameterExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidParameterException, __BaseException>) {
    super({
      name: "WAFInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidParameterException.prototype);
    this.field = opts.field;
    this.parameter = opts.parameter;
    this.reason = opts.reason;
  }
}

/**
 * The operation exceeds a resource limit, for example, the maximum number of `WebACL` objects that you can create for an AWS account. For more information, see [Limits](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide*.
 *
 * @public
 */
export class WAFLimitsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFLimitsExceededException";
  readonly name = "WAFLimitsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFLimitsExceededException, __BaseException>) {
    super({
      name: "WAFLimitsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFLimitsExceededException.prototype);
  }
}

/**
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @public
 */
export class WAFStaleDataException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFStaleDataException";
  readonly name = "WAFStaleDataException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFStaleDataException, __BaseException>) {
    super({
      name: "WAFStaleDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFStaleDataException.prototype);
  }
}

/**
 * @public
 */
export class WAFBadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFBadRequestException";
  readonly name = "WAFBadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFBadRequestException, __BaseException>) {
    super({
      name: "WAFBadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFBadRequestException.prototype);
  }
}

/**
 * @public
 */
export class WAFTagOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFTagOperationException";
  readonly name = "WAFTagOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFTagOperationException, __BaseException>) {
    super({
      name: "WAFTagOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFTagOperationException.prototype);
  }
}

/**
 * @public
 */
export class WAFTagOperationInternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFTagOperationInternalErrorException";
  readonly name = "WAFTagOperationInternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFTagOperationInternalErrorException, __BaseException>) {
    super({
      name: "WAFTagOperationInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFTagOperationInternalErrorException.prototype);
  }
}

/**
 * The operation failed due to a problem with the migration. The failure cause is provided in the exception, in the `MigrationErrorType`:
 *
 * - `ENTITY_NOT_SUPPORTED` - The web ACL has an unsupported entity but the `IgnoreUnsupportedType` is not set to true.
 * - `ENTITY_NOT_FOUND` - The web ACL doesn't exist.
 * - `S3_BUCKET_NO_PERMISSION` - You don't have permission to perform the `PutObject` action to the specified Amazon S3 bucket.
 * - `S3_BUCKET_NOT_ACCESSIBLE` - The bucket policy doesn't allow AWS WAF to perform the `PutObject` action in the bucket.
 * - `S3_BUCKET_NOT_FOUND` - The S3 bucket doesn't exist.
 * - `S3_BUCKET_INVALID_REGION` - The S3 bucket is not in the same Region as the web ACL.
 * - `S3_INTERNAL_ERROR` - AWS WAF failed to create the template in the S3 bucket for another reason.
 *
 * @public
 */
export class WAFEntityMigrationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFEntityMigrationException";
  readonly name = "WAFEntityMigrationException" as const;
  readonly $fault = "client" as const;
  MigrationErrorType?: MigrationErrorType | undefined;
  MigrationErrorReason?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFEntityMigrationException, __BaseException>) {
    super({
      name: "WAFEntityMigrationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFEntityMigrationException.prototype);
    this.MigrationErrorType = opts.MigrationErrorType;
    this.MigrationErrorReason = opts.MigrationErrorReason;
  }
}

/**
 * The operation failed because there was nothing to do. For example:
 *
 * - You tried to remove a `Rule` from a `WebACL`, but the `Rule` isn't in the specified `WebACL`.
 * - You tried to remove an IP address from an `IPSet`, but the IP address isn't in the specified `IPSet`.
 * - You tried to remove a `ByteMatchTuple` from a `ByteMatchSet`, but the `ByteMatchTuple` isn't in the specified `WebACL`.
 * - You tried to add a `Rule` to a `WebACL`, but the `Rule` already exists in the specified `WebACL`.
 * - You tried to add a `ByteMatchTuple` to a `ByteMatchSet`, but the `ByteMatchTuple` already exists in the specified `WebACL`.
 *
 * @public
 */
export class WAFInvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInvalidOperationException";
  readonly name = "WAFInvalidOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidOperationException, __BaseException>) {
    super({
      name: "WAFInvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidOperationException.prototype);
  }
}

/**
 * The operation failed because the referenced object doesn't exist.
 *
 * @public
 */
export class WAFNonexistentItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFNonexistentItemException";
  readonly name = "WAFNonexistentItemException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFNonexistentItemException, __BaseException>) {
    super({
      name: "WAFNonexistentItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFNonexistentItemException.prototype);
  }
}

/**
 * The operation failed because you tried to delete an object that isn't empty. For example:
 *
 * - You tried to delete a `WebACL` that still contains one or more `Rule` objects.
 * - You tried to delete a `Rule` that still contains one or more `ByteMatchSet` objects or other predicates.
 * - You tried to delete a `ByteMatchSet` that contains one or more `ByteMatchTuple` objects.
 * - You tried to delete an `IPSet` that references one or more IP addresses.
 *
 * @public
 */
export class WAFNonEmptyEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFNonEmptyEntityException";
  readonly name = "WAFNonEmptyEntityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFNonEmptyEntityException, __BaseException>) {
    super({
      name: "WAFNonEmptyEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFNonEmptyEntityException.prototype);
  }
}

/**
 * The operation failed because you tried to delete an object that is still in use. For example:
 *
 * - You tried to delete a `ByteMatchSet` that is still referenced by a `Rule`.
 * - You tried to delete a `Rule` that is still referenced by a `WebACL`.
 *
 * @public
 */
export class WAFReferencedItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFReferencedItemException";
  readonly name = "WAFReferencedItemException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFReferencedItemException, __BaseException>) {
    super({
      name: "WAFReferencedItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFReferencedItemException.prototype);
  }
}

/**
 * AWS WAF is not able to access the service linked role. This can be caused by a previous `PutLoggingConfiguration` request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous `DeleteServiceLinkedRole` request, which can lock the role for 15 minutes or more. If you recently made a `DeleteServiceLinkedRole`, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.
 *
 * @public
 */
export class WAFServiceLinkedRoleErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFServiceLinkedRoleErrorException";
  readonly name = "WAFServiceLinkedRoleErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFServiceLinkedRoleErrorException, __BaseException>) {
    super({
      name: "WAFServiceLinkedRoleErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFServiceLinkedRoleErrorException.prototype);
  }
}

/**
 * The operation failed because the specified policy is not in the proper format.
 *
 * The policy is subject to the following restrictions:
 *
 * - You can attach only one policy with each `PutPermissionPolicy` request.
 * - The policy must include an `Effect`, `Action` and `Principal`.
 * - `Effect` must specify `Allow`.
 * - The `Action` in the policy must be `waf:UpdateWebACL`, `waf-regional:UpdateWebACL`, `waf:GetRuleGroup` and `waf-regional:GetRuleGroup` . Any extra or wildcard actions in the policy will be rejected.
 * - The policy cannot include a `Resource` parameter.
 * - The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.
 * - The user making the request must be the owner of the RuleGroup.
 * - Your policy must be composed using IAM Policy version 2012-10-17.
 *
 * @public
 */
export class WAFInvalidPermissionPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInvalidPermissionPolicyException";
  readonly name = "WAFInvalidPermissionPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidPermissionPolicyException, __BaseException>) {
    super({
      name: "WAFInvalidPermissionPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidPermissionPolicyException.prototype);
  }
}

/**
 * The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:
 *
 * - You tried to add a `Rule` to or delete a `Rule` from a `WebACL` that doesn't exist.
 * - You tried to add a `ByteMatchSet` to or delete a `ByteMatchSet` from a `Rule` that doesn't exist.
 * - You tried to add an IP address to or delete an IP address from an `IPSet` that doesn't exist.
 * - You tried to add a `ByteMatchTuple` to or delete a `ByteMatchTuple` from a `ByteMatchSet` that doesn't exist.
 *
 * @public
 */
export class WAFNonexistentContainerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFNonexistentContainerException";
  readonly name = "WAFNonexistentContainerException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFNonexistentContainerException, __BaseException>) {
    super({
      name: "WAFNonexistentContainerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFNonexistentContainerException.prototype);
  }
}

/**
 * The regular expression (regex) you specified in `RegexPatternString` is invalid.
 *
 * @public
 */
export class WAFInvalidRegexPatternException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFInvalidRegexPatternException";
  readonly name = "WAFInvalidRegexPatternException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidRegexPatternException, __BaseException>) {
    super({
      name: "WAFInvalidRegexPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidRegexPatternException.prototype);
  }
}

/**
 * The specified subscription does not exist.
 *
 * @public
 */
export class WAFSubscriptionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.waf#WAFSubscriptionNotFoundException";
  readonly name = "WAFSubscriptionNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFSubscriptionNotFoundException, __BaseException>) {
    super({
      name: "WAFSubscriptionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFSubscriptionNotFoundException.prototype);
  }
}
