// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ParameterExceptionField } from "./enums";
import type { DisallowedFeature } from "./models_0";
import { WAFV2ServiceException as __BaseException } from "./WAFV2ServiceException";

/**
 * The operation failed because the specified WAF feature isn't supported by the CloudFront pricing plan associated with the web ACL.
 *
 * @public
 */
export class WAFFeatureNotIncludedInPricingPlanException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFFeatureNotIncludedInPricingPlanException";
  readonly name = "WAFFeatureNotIncludedInPricingPlanException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The names of the disallowed WAF features.
   *
   * @public
   */
  DisallowedFeatures?: DisallowedFeature[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFFeatureNotIncludedInPricingPlanException, __BaseException>) {
    super({
      name: "WAFFeatureNotIncludedInPricingPlanException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFFeatureNotIncludedInPricingPlanException.prototype);
    this.Message = opts.Message;
    this.DisallowedFeatures = opts.DisallowedFeatures;
  }
}

/**
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @public
 */
export class WAFInternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFInternalErrorException";
  readonly name = "WAFInternalErrorException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The operation isn't valid.
 *
 * @public
 */
export class WAFInvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFInvalidOperationException";
  readonly name = "WAFInvalidOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @public
 */
export class WAFInvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFInvalidParameterException";
  readonly name = "WAFInvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * The settings where the invalid parameter was found.
   *
   * @public
   */
  Field?: ParameterExceptionField | undefined;

  /**
   * The invalid parameter that resulted in the exception.
   *
   * @public
   */
  Parameter?: string | undefined;

  /**
   * Additional information about the exception.
   *
   * @public
   */
  Reason?: string | undefined;

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
    this.Field = opts.Field;
    this.Parameter = opts.Parameter;
    this.Reason = opts.Reason;
  }
}

/**
 * WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of `WebACL` objects that you can create for an Amazon Web Services account. For more information, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export class WAFLimitsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFLimitsExceededException";
  readonly name = "WAFLimitsExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * Source type for the exception.
   *
   * @public
   */
  SourceType?: string | undefined;
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
    this.Message = opts.Message;
    this.SourceType = opts.SourceType;
  }
}

/**
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @public
 */
export class WAFNonexistentItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFNonexistentItemException";
  readonly name = "WAFNonexistentItemException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t retrieve a resource that you specified for this operation. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate. Verify the resource specifications in your request parameters and then retry the operation.
 *
 * @public
 */
export class WAFUnavailableEntityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFUnavailableEntityException";
  readonly name = "WAFUnavailableEntityException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFUnavailableEntityException, __BaseException>) {
    super({
      name: "WAFUnavailableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFUnavailableEntityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The operation failed because the specified version for the managed rule group has expired. You can retrieve the available versions for the managed rule group by calling ListAvailableManagedRuleGroupVersions.
 *
 * @public
 */
export class WAFExpiredManagedRuleGroupVersionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFExpiredManagedRuleGroupVersionException";
  readonly name = "WAFExpiredManagedRuleGroupVersionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFExpiredManagedRuleGroupVersionException, __BaseException>) {
    super({
      name: "WAFExpiredManagedRuleGroupVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFExpiredManagedRuleGroupVersionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t perform the operation because the resource that you requested isn’t valid. Check the resource, and try again.
 *
 * @public
 */
export class WAFInvalidResourceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFInvalidResourceException";
  readonly name = "WAFInvalidResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidResourceException, __BaseException>) {
    super({
      name: "WAFInvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You tried to use a managed rule group that's available by subscription, but you aren't subscribed to it yet.
 *
 * @public
 */
export class WAFSubscriptionNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFSubscriptionNotFoundException";
  readonly name = "WAFSubscriptionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t perform the operation because the resource that you tried to save is a duplicate of an existing one.
 *
 * @public
 */
export class WAFDuplicateItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFDuplicateItemException";
  readonly name = "WAFDuplicateItemException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFDuplicateItemException, __BaseException>) {
    super({
      name: "WAFDuplicateItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFDuplicateItemException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t save your changes because you tried to update or delete a resource that has changed since you last retrieved it. Get the resource again, make any changes you need to make to the new copy, and retry your operation.
 *
 * @public
 */
export class WAFOptimisticLockException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFOptimisticLockException";
  readonly name = "WAFOptimisticLockException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFOptimisticLockException, __BaseException>) {
    super({
      name: "WAFOptimisticLockException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFOptimisticLockException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An error occurred during the tagging operation. Retry your request.
 *
 * @public
 */
export class WAFTagOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFTagOperationException";
  readonly name = "WAFTagOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t perform your tagging operation because of an internal error. Retry your request.
 *
 * @public
 */
export class WAFTagOperationInternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFTagOperationInternalErrorException";
  readonly name = "WAFTagOperationInternalErrorException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The operation failed because you are inspecting the web request body, headers, or cookies without specifying how to handle oversize components. Rules that inspect the body must either provide an `OversizeHandling` configuration or they must be preceded by a `SizeConstraintStatement` that blocks the body content from being too large. Rules that inspect the headers or cookies must provide an `OversizeHandling` configuration.
 *
 * Provide the handling configuration and retry your operation.
 *
 * Alternately, you can suppress this warning by adding the following tag to the resource that you provide to this operation: `Tag` (key:`WAF:OversizeFieldsHandlingConstraintOptOut`, value:`true`).
 *
 * @public
 */
export class WAFConfigurationWarningException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFConfigurationWarningException";
  readonly name = "WAFConfigurationWarningException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFConfigurationWarningException, __BaseException>) {
    super({
      name: "WAFConfigurationWarningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFConfigurationWarningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * WAF couldn’t perform the operation because your resource is being used by another resource or it’s associated with another resource.
 *
 * @public
 */
export class WAFAssociatedItemException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFAssociatedItemException";
  readonly name = "WAFAssociatedItemException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFAssociatedItemException, __BaseException>) {
    super({
      name: "WAFAssociatedItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFAssociatedItemException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The rule that you've named doesn't aggregate solely on the IP address or solely on the forwarded IP address. This call is only available for rate-based rules with an `AggregateKeyType` setting of `IP` or `FORWARDED_IP`.
 *
 * @public
 */
export class WAFUnsupportedAggregateKeyTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFUnsupportedAggregateKeyTypeException";
  readonly name = "WAFUnsupportedAggregateKeyTypeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFUnsupportedAggregateKeyTypeException, __BaseException>) {
    super({
      name: "WAFUnsupportedAggregateKeyTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFUnsupportedAggregateKeyTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The operation failed because you don't have the permissions that your logging configuration requires. For information, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export class WAFLogDestinationPermissionIssueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFLogDestinationPermissionIssueException";
  readonly name = "WAFLogDestinationPermissionIssueException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFLogDestinationPermissionIssueException, __BaseException>) {
    super({
      name: "WAFLogDestinationPermissionIssueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFLogDestinationPermissionIssueException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * WAF is not able to access the service linked role. This can be caused by a previous `PutLoggingConfiguration` request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous `DeleteServiceLinkedRole` request, which can lock the role for 15 minutes or more. If you recently made a call to `DeleteServiceLinkedRole`, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.
 *
 * @public
 */
export class WAFServiceLinkedRoleErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException";
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
 * The operation failed because the specified policy isn't in the proper format.
 *
 * The policy specifications must conform to the following:
 *
 * - The policy must be composed using IAM Policy version 2012-10-17.
 * - The policy must include specifications for `Effect`, `Action`, and `Principal`.
 * - `Effect` must specify `Allow`.
 * - `Action` must specify `wafv2:CreateWebACL`, `wafv2:UpdateWebACL`, and `wafv2:PutFirewallManagerRuleGroups` and may optionally specify `wafv2:GetRuleGroup`. WAF rejects any extra actions or wildcard actions in the policy.
 * - The policy must not include a `Resource` parameter.
 *
 * For more information, see [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).
 *
 * @public
 */
export class WAFInvalidPermissionPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.wafv2#WAFInvalidPermissionPolicyException";
  readonly name = "WAFInvalidPermissionPolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}
