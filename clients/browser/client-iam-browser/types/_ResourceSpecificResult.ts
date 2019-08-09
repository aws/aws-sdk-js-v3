import { _Statement, _UnmarshalledStatement } from "./_Statement";

/**
 * <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
 */
export interface _ResourceSpecificResult {
  /**
   * <p>The name of the simulated resource, in Amazon Resource Name (ARN) format.</p>
   */
  EvalResourceName: string;

  /**
   * <p>The result of the simulation of the simulated API operation on the resource specified in <code>EvalResourceName</code>.</p>
   */
  EvalResourceDecision: "allowed" | "explicitDeny" | "implicitDeny" | string;

  /**
   * <p>A list of the statements in the input policies that determine the result for this part of the simulation. Remember that even if multiple statements allow the operation on the resource, if <i>any</i> statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Array<_Statement> | Iterable<_Statement>;

  /**
   * <p>A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when a list of ARNs is included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify individual resources, by setting <code>ResourceArns</code> to "*" or by not including the <code>ResourceArns</code> parameter, then any missing context values are instead included under the <code>EvaluationResults</code> section. To discover the context keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: Array<string> | Iterable<string>;

  /**
   * <p>Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access.</p>
   */
  EvalDecisionDetails?:
    | { [key: string]: "allowed" | "explicitDeny" | "implicitDeny" | string }
    | Iterable<[string, "allowed" | "explicitDeny" | "implicitDeny" | string]>;
}

export interface _UnmarshalledResourceSpecificResult
  extends _ResourceSpecificResult {
  /**
   * <p>A list of the statements in the input policies that determine the result for this part of the simulation. Remember that even if multiple statements allow the operation on the resource, if <i>any</i> statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Array<_UnmarshalledStatement>;

  /**
   * <p>A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when a list of ARNs is included in the <code>ResourceArns</code> parameter instead of "*". If you do not specify individual resources, by setting <code>ResourceArns</code> to "*" or by not including the <code>ResourceArns</code> parameter, then any missing context values are instead included under the <code>EvaluationResults</code> section. To discover the context keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: Array<string>;

  /**
   * <p>Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access.</p>
   */
  EvalDecisionDetails?: {
    [key: string]: "allowed" | "explicitDeny" | "implicitDeny" | string;
  };
}
