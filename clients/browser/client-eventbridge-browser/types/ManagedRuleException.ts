import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 */
export interface ManagedRuleException
  extends __ServiceException__<_ManagedRuleExceptionDetails> {
  name: "ManagedRuleException";
}

export interface _ManagedRuleExceptionDetails {}
