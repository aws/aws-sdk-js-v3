// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MigrationErrorType, ParameterExceptionField, ParameterExceptionReason } from "./enums";
import { WAFRegionalServiceException as __BaseException } from "./WAFRegionalServiceException";

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 * @public
 */
export class WAFInternalErrorException extends __BaseException {
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
 * <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 * @public
 */
export class WAFInvalidAccountException extends __BaseException {
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
 * <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 * @public
 */
export class WAFInvalidParameterException extends __BaseException {
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
 * <p>The operation failed because the referenced object doesn't exist.</p>
 * @public
 */
export class WAFNonexistentItemException extends __BaseException {
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
 * <p>The operation failed because the entity
 *       referenced is temporarily unavailable. Retry your request.</p>
 * @public
 */
export class WAFUnavailableEntityException extends __BaseException {
  readonly name = "WAFUnavailableEntityException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The name specified is invalid.</p>
 * @public
 */
export class WAFDisallowedNameException extends __BaseException {
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
 * <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create
 * 			for an AWS account. For more information, see
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 * @public
 */
export class WAFLimitsExceededException extends __BaseException {
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
 * <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 * @public
 */
export class WAFStaleDataException extends __BaseException {
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
 * <p></p>
 * @public
 */
export class WAFBadRequestException extends __BaseException {
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
 * <p></p>
 * @public
 */
export class WAFTagOperationException extends __BaseException {
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
 * <p></p>
 * @public
 */
export class WAFTagOperationInternalErrorException extends __BaseException {
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
 * <p>The operation failed due to a problem with the migration. The failure cause is provided in the exception, in the <code>MigrationErrorType</code>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ENTITY_NOT_SUPPORTED</code> - The web ACL has an unsupported entity but the <code>IgnoreUnsupportedType</code> is not set to true.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ENTITY_NOT_FOUND</code> - The web ACL doesn't exist.  </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NO_PERMISSION</code> - You don't have permission to perform the <code>PutObject</code> action to the specified Amazon S3 bucket.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NOT_ACCESSIBLE</code> - The bucket policy doesn't allow AWS WAF to perform the <code>PutObject</code> action in the bucket.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_NOT_FOUND</code> - The S3 bucket doesn't exist. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_BUCKET_INVALID_REGION</code> - The S3 bucket is not in the same Region as the web ACL.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>S3_INTERNAL_ERROR</code> - AWS WAF failed to create the template in the S3 bucket for another reason.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFEntityMigrationException extends __BaseException {
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
 * <p>The operation failed because there was nothing to do. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 * 					isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the
 * 					specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 *                already exists in the specified <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFInvalidOperationException extends __BaseException {
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
 * <p>The operation failed because you tried to delete an object that isn't empty. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects
 * 				or other predicates.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFNonEmptyEntityException extends __BaseException {
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
 * <p>The operation failed because you tried to delete an object that is still in use. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFReferencedItemException extends __BaseException {
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
 * <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
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
 * <p>The operation failed because the specified policy is not in the proper format. </p>
 *          <p>The policy is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p>
 *             </li>
 *             <li>
 *
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p>
 *             </li>
 *             <li>
 *                <p>The policy cannot include a <code>Resource</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the RuleGroup.</p>
 *             </li>
 *             <li>
 *                <p>Your policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFInvalidPermissionPolicyException extends __BaseException {
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
 * <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>
 * 				that doesn't exist.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class WAFNonexistentContainerException extends __BaseException {
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
 * <p>The regular expression (regex) you specified in <code>RegexPatternString</code> is invalid.</p>
 * @public
 */
export class WAFInvalidRegexPatternException extends __BaseException {
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
 * <p>The specified subscription does not exist.</p>
 * @public
 */
export class WAFSubscriptionNotFoundException extends __BaseException {
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
