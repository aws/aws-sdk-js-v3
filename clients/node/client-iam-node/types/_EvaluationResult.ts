import { _Statement, _UnmarshalledStatement } from "./_Statement";
import {
  _OrganizationsDecisionDetail,
  _UnmarshalledOrganizationsDecisionDetail
} from "./_OrganizationsDecisionDetail";
import {
  _ResourceSpecificResult,
  _UnmarshalledResourceSpecificResult
} from "./_ResourceSpecificResult";

/**
 * <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
 */
export interface _EvaluationResult {
  /**
   * <p>The name of the API operation tested on the indicated resource.</p>
   */
  EvalActionName: string;

  /**
   * <p>The ARN of the resource that the indicated API operation was tested on.</p>
   */
  EvalResourceName?: string;

  /**
   * <p>The result of the simulation.</p>
   */
  EvalDecision: "allowed" | "explicitDeny" | "implicitDeny" | string;

  /**
   * <p>A list of the statements in the input policies that determine the result for this scenario. Remember that even if multiple statements allow the operation on the resource, if only one statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Array<_Statement> | Iterable<_Statement>;

  /**
   * <p>A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when the resource in a simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter blank. If you include a list of resources, then any missing context values are instead included under the <code>ResourceSpecificResults</code> section. To discover the context keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: Array<string> | Iterable<string>;

  /**
   * <p>A structure that details how Organizations and its service control policies affect the results of the simulation. Only applies if the simulated user's account is part of an organization.</p>
   */
  OrganizationsDecisionDetail?: _OrganizationsDecisionDetail;

  /**
   * <p>Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html">How IAM Roles Differ from Resource-based Policies</a> </p>
   */
  EvalDecisionDetails?:
    | { [key: string]: "allowed" | "explicitDeny" | "implicitDeny" | string }
    | Iterable<[string, "allowed" | "explicitDeny" | "implicitDeny" | string]>;

  /**
   * <p>The individual results of the simulation of the API operation specified in EvalActionName on each resource.</p>
   */
  ResourceSpecificResults?:
    | Array<_ResourceSpecificResult>
    | Iterable<_ResourceSpecificResult>;
}

export interface _UnmarshalledEvaluationResult extends _EvaluationResult {
  /**
   * <p>A list of the statements in the input policies that determine the result for this scenario. Remember that even if multiple statements allow the operation on the resource, if only one statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.</p>
   */
  MatchedStatements?: Array<_UnmarshalledStatement>;

  /**
   * <p>A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when the resource in a simulation is "*", either explicitly, or when the <code>ResourceArns</code> parameter blank. If you include a list of resources, then any missing context values are instead included under the <code>ResourceSpecificResults</code> section. To discover the context keys used by a set of policies, you can call <a>GetContextKeysForCustomPolicy</a> or <a>GetContextKeysForPrincipalPolicy</a>.</p>
   */
  MissingContextValues?: Array<string>;

  /**
   * <p>A structure that details how Organizations and its service control policies affect the results of the simulation. Only applies if the simulated user's account is part of an organization.</p>
   */
  OrganizationsDecisionDetail?: _UnmarshalledOrganizationsDecisionDetail;

  /**
   * <p>Additional details about the results of the evaluation decision. When there are both IAM policies and resource policies, this parameter explains how each set of policies contributes to the final evaluation decision. When simulating cross-account access to a resource, both the resource-based policy and the caller's IAM policy must grant access. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html">How IAM Roles Differ from Resource-based Policies</a> </p>
   */
  EvalDecisionDetails?: {
    [key: string]: "allowed" | "explicitDeny" | "implicitDeny" | string;
  };

  /**
   * <p>The individual results of the simulation of the API operation specified in EvalActionName on each resource.</p>
   */
  ResourceSpecificResults?: Array<_UnmarshalledResourceSpecificResult>;
}
