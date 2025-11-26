// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ParameterExceptionField } from "./enums";
import { DisallowedFeature } from "./models_0";
import { WAFV2ServiceException as __BaseException } from "./WAFV2ServiceException";

/**
 * <p>The operation failed because the specified WAF feature isn't supported by the CloudFront pricing plan associated with the web ACL.</p>
 * @public
 */
export class WAFFeatureNotIncludedInPricingPlanException extends __BaseException {
  readonly name = "WAFFeatureNotIncludedInPricingPlanException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The names of the disallowed WAF features.</p>
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
 * <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 * @public
 */
export class WAFInternalErrorException extends __BaseException {
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
 * <p>The operation isn't valid. </p>
 * @public
 */
export class WAFInvalidOperationException extends __BaseException {
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
 * <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFInvalidParameterException extends __BaseException {
  readonly name = "WAFInvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The settings where the invalid parameter was found. </p>
   * @public
   */
  Field?: ParameterExceptionField | undefined;

  /**
   * <p>The invalid parameter that resulted in the exception. </p>
   * @public
   */
  Parameter?: string | undefined;

  /**
   * <p>Additional information about the exception.</p>
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
 * <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 * @public
 */
export class WAFLimitsExceededException extends __BaseException {
  readonly name = "WAFLimitsExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>Source type for the exception. </p>
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
 * <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 * @public
 */
export class WAFNonexistentItemException extends __BaseException {
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
 * <p>WAF couldn’t retrieve a resource that you specified for this operation.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. Verify the resource specifications in your request
 *        parameters and then retry the operation.</p>
 * @public
 */
export class WAFUnavailableEntityException extends __BaseException {
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
 * <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
 * @public
 */
export class WAFExpiredManagedRuleGroupVersionException extends __BaseException {
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
 * <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 * @public
 */
export class WAFInvalidResourceException extends __BaseException {
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
 * <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 * @public
 */
export class WAFSubscriptionNotFoundException extends __BaseException {
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
 * <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 * @public
 */
export class WAFDuplicateItemException extends __BaseException {
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
 * <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 * @public
 */
export class WAFOptimisticLockException extends __BaseException {
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
 * <p>An error occurred during the tagging operation. Retry your request.</p>
 * @public
 */
export class WAFTagOperationException extends __BaseException {
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
 * <p>WAF couldn’t perform your tagging operation because of an internal error. Retry
 *          your request.</p>
 * @public
 */
export class WAFTagOperationInternalErrorException extends __BaseException {
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
 * <p>The operation failed because you are inspecting the web request body, headers, or
 *          cookies without specifying how to handle oversize components. Rules that inspect the body
 *          must either provide an <code>OversizeHandling</code> configuration or they must be preceded
 *          by a <code>SizeConstraintStatement</code> that blocks the body content from being too
 *          large. Rules that inspect the headers or cookies must provide an
 *             <code>OversizeHandling</code> configuration. </p>
 *          <p>Provide the handling configuration and retry your operation.</p>
 *          <p>Alternately, you can suppress this warning by adding the following tag to the resource
 *          that you provide to this operation: <code>Tag</code>
 *             (key:<code>WAF:OversizeFieldsHandlingConstraintOptOut</code>,
 *          value:<code>true</code>).</p>
 * @public
 */
export class WAFConfigurationWarningException extends __BaseException {
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
 * <p>WAF couldn’t perform the operation because your resource is being used by another
 *          resource or it’s associated with another resource. </p>
 * @public
 */
export class WAFAssociatedItemException extends __BaseException {
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
 * <p>The rule that you've named doesn't aggregate solely on the IP address or solely on the forwarded IP address. This call
 *            is only available for rate-based rules with an <code>AggregateKeyType</code> setting of <code>IP</code> or <code>FORWARDED_IP</code>.</p>
 * @public
 */
export class WAFUnsupportedAggregateKeyTypeException extends __BaseException {
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
 * <p>The operation failed because you don't have the permissions that your logging
 *          configuration requires. For information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *          in the <i>WAF Developer Guide</i>.</p>
 * @public
 */
export class WAFLogDestinationPermissionIssueException extends __BaseException {
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
 * <p>WAF is not able to access the service linked role. This can be caused by a
 *          previous <code>PutLoggingConfiguration</code> request, which can lock the service linked
 *          role for about 20 seconds. Please try your request again. The service linked role can also
 *          be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the
 *          role for 15 minutes or more. If you recently made a call to
 *             <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request
 *          again. If you receive this same exception again, you will have to wait additional time
 *          until the role is unlocked.</p>
 * @public
 */
export class WAFServiceLinkedRoleErrorException extends __BaseException {
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
 * <p>The operation failed because the specified policy isn't in the proper format. </p>
 *          <p>The policy specifications must conform to the following:</p>
 *          <ul>
 *             <li>
 *                <p>The policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and
 *              <code>wafv2:PutFirewallManagerRuleGroups</code> and may optionally specify <code>wafv2:GetRuleGroup</code>.
 *                  WAF rejects any extra actions or wildcard actions in the policy.</p>
 *             </li>
 *             <li>
 *                <p>The policy must not include a <code>Resource</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
 * @public
 */
export class WAFInvalidPermissionPolicyException extends __BaseException {
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
