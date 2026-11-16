// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { CheckEffect, CheckType, EvaluatedEffect, PolicyType, StatementEffect } from "./enums";

/**
 * <p>An entity that a policy is attached to, identified by its ARN.</p>
 * @public
 */
export interface AttachedTo {
  /**
   * <p>The ARN of the entity that the policy is attached to. The ARN format depends on the policy type:</p> <ul> <li> <p>For identity, session, and permissions boundary policies, this is the principal ARN (for example, an IAM role or user ARN).</p> </li> <li> <p>For resource-based policies, this is the resource ARN.</p> </li> <li> <p>For organization control policies (SCPs and RCPs), this is the AWS Organizations ARN of the account, organizational unit, or root.</p> </li> </ul>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationDetailsInput {
  /**
   * <p>The authorization ID received in the access denied error message. This ID identifies the specific request to retrieve details for.</p>
   * @public
   */
  authorizationId: string | undefined;

  /**
   * <p>The pagination token from a previous call, used to retrieve the next page of evaluations. Omit this value on the first call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A statement that matched during evaluation.</p>
 * @public
 */
export interface MatchedStatement {
  /**
   * <p>The statement ID (Sid). If the statement has no Sid, one is generated for reference.</p>
   * @public
   */
  sid?: string | undefined;

  /**
   * <p>The evaluated effect of this statement. Valid values:</p> <ul> <li> <p> <code>ALLOW</code> - The statement allows the action.</p> </li> <li> <p> <code>DENY</code> - The statement denies the action.</p> </li> </ul>
   * @public
   */
  evaluatedEffect?: StatementEffect | undefined;
}

/**
 * <p>A policy that matched during evaluation, referenced by URI. The URI corresponds to a policy in the top-level policies list.</p>
 * @public
 */
export interface MatchedPolicy {
  /**
   * <p>The URI of the policy. This cross-references an entry in the top-level policies list. The value depends on the policy type:</p> <ul> <li> <p>For managed policies, this is the policy ARN.</p> </li> <li> <p>For inline policies, this is an opaque identifier.</p> </li> </ul>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The statements within the policy that matched during the evaluation.</p>
   * @public
   */
  matchedStatements?: MatchedStatement[] | undefined;
}

/**
 * <p>Represents one authorization requirement considered during an evaluation and its result.</p>
 * @public
 */
export interface Check {
  /**
   * <p>The type of requirement that the check evaluates. Valid values:</p> <ul> <li> <p> <code>SERVICE_CONTROL_POLICY</code> - The service control policies (SCPs) attached to one organization target, such as a root, organizational unit, or account, that apply to the principal.</p> </li> <li> <p> <code>RESOURCE_CONTROL_POLICY</code> - The resource control policies (RCPs) attached to one organization target that apply to the resource.</p> </li> <li> <p> <code>VPC_ENDPOINT</code> - The VPC endpoint policy for the endpoint through which the request passes.</p> </li> <li> <p> <code>RESOURCE</code> - The resource owner's resource-based policies, when the owner must allow the request separately, such as a cross-account request or a request to an AWS KMS key.</p> </li> <li> <p> <code>PRINCIPAL</code> - The principal's identity-based policies attached to the IAM user or role.</p> </li> <li> <p> <code>PERMISSIONS_BOUNDARY</code> - The permissions boundary on the IAM user or role.</p> </li> <li> <p> <code>SESSION</code> - The role session that made the request, decided by its session policies.</p> </li> </ul>
   * @public
   */
  checkType: CheckType | undefined;

  /**
   * <p>The result of evaluating this requirement. Valid values:</p> <ul> <li> <p> <code>ALLOW</code> - A statement that applies to this check allows the request.</p> </li> <li> <p> <code>EXPLICIT_DENY</code> - A deny statement that applies to this check matches.</p> </li> <li> <p> <code>IMPLICIT_DENY</code> - The check required an allow and nothing that applies to it allows the request.</p> </li> <li> <p> <code>NO_IMPACT</code> - No statement in this check matched, and no allow was needed because another path allowed the request.</p> </li> </ul>
   * @public
   */
  evaluatedEffect: CheckEffect | undefined;

  /**
   * <p>The ARN that distinguishes this check from other checks of the same type. This value is absent when the check type alone identifies the check. For SCP and RCP checks, this is the AWS Organizations ARN of the root, organizational unit, or account that the evaluated policies are attached to.</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The policy types used to satisfy this check, plus the type of every policy with a statement that matched in it. <code>matchedPolicies</code> lists matching policies in the top-level <code>policies</code> list.</p>
   * @public
   */
  relevantPolicyTypes?: PolicyType[] | undefined;

  /**
   * <p>Policies in this list have statements that matched for this check. Each URI corresponds to an entry in the top-level <code>policies</code> list. Only policies in the top-level list are included. The check effect can reflect a matched policy omitted from this list, so this list can be empty even when the effect is <code>ALLOW</code>.</p>
   * @public
   */
  matchedPolicies?: MatchedPolicy[] | undefined;
}

/**
 * <p>Represents an individual evaluation for a single action and resource pair. This includes the context, the resulting effect, and any policies that matched.</p>
 * @public
 */
export interface Evaluation {
  /**
   * <p>The action evaluated for this request (for example, <code>iam:PassRole</code>).</p>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The resource that the action targeted. This is typically a resource ARN, but can be a wildcard ARN that matches multiple resources, or empty for actions that are not resource-specific.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The context keys and values specific to this evaluation. These are applied on top of the request context.</p>
   * @public
   */
  context?: Record<string, __DocumentType> | undefined;

  /**
   * <p>The result of the evaluation. Valid values:</p> <ul> <li> <p> <code>ALLOW</code> - The action was allowed.</p> </li> <li> <p> <code>EXPLICIT_DENY</code> - The action was explicitly denied by a policy.</p> </li> <li> <p> <code>IMPLICIT_DENY</code> - The action was denied because at least one required authorization check had no matching allow statement.</p> </li> </ul>
   * @public
   */
  evaluatedEffect?: EvaluatedEffect | undefined;

  /**
   * <p> <code>matchedPolicies</code> is deprecated. Use <code>checks</code> instead. This value contains the policies that matched during evaluation of this action and resource.</p>
   *
   * @deprecated (since 2026-11-13) Use checks, which group matched policies by the requirement they apply to.
   * @public
   */
  matchedPolicies?: MatchedPolicy[] | undefined;

  /**
   * <p> <code>checks</code> contains the authorization checks that explain an evaluation result. Each check is one authorization requirement and reports its result and policies from the top-level <code>policies</code> list with matching statements. The output lists RCP checks from the organization root to the account, then SCP checks from the organization root to the account. It then lists VPC endpoint, resource, principal, permissions boundary, and session checks. When <code>checks</code> is present, an <code>EXPLICIT_DENY</code> evaluation includes an <code>EXPLICIT_DENY</code> check. When <code>checks</code> is present for an <code>IMPLICIT_DENY</code> evaluation, it includes an <code>IMPLICIT_DENY</code> check and no <code>EXPLICIT_DENY</code> check. For more information about how IAM evaluates policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic_policy-eval-denyallow.html">Policy evaluation logic</a>.</p> <p> <code>PRINCIPAL</code>, <code>PERMISSIONS_BOUNDARY</code>, and <code>SESSION</code> checks appear when they apply to the principal that made the request, even if none of their policies matched. A missing allow produces <code>IMPLICIT_DENY</code>, or <code>NO_IMPACT</code> when another path already allowed the request.</p> <p>Returned when the caller is in the request principal's account or organization. The absence of <code>checks</code> does not mean no authorization checks applied.</p>
   * @public
   */
  checks?: Check[] | undefined;
}

/**
 * <p>Contains details about a policy evaluated during authorization. Details include the policy type, whether it is inline or managed, a URI that identifies it, the entities it is attached to, and its source, if present.</p>
 * @public
 */
export interface PolicyInfo {
  /**
   * <p>The type of policy. Valid values:</p> <ul> <li> <p> <code>IDENTITY_BASED_POLICY</code> - An identity-based policy attached to an IAM user, group, or role.</p> </li> <li> <p> <code>PERMISSIONS_BOUNDARY</code> - A permissions boundary for an IAM entity.</p> </li> <li> <p> <code>RESOURCE_BASED_POLICY</code> - A resource-based policy attached to a resource. An AWS service can evaluate and report a policy kind it defines, such as a KMS grant, as <code>RESOURCE_BASED_POLICY</code>. <code>policySource</code> identifies the kind.</p> </li> <li> <p> <code>RESOURCE_CONTROL_POLICY</code> - A resource control policy (RCP) in AWS Organizations.</p> </li> <li> <p> <code>SERVICE_CONTROL_POLICY</code> - A service control policy (SCP) in AWS Organizations.</p> </li> <li> <p> <code>SESSION_POLICY</code> - A session policy passed during role assumption or federation.</p> </li> <li> <p> <code>VPC_ENDPOINT_POLICY</code> - A VPC endpoint policy.</p> </li> </ul>
   * @public
   */
  type?: PolicyType | undefined;

  /**
   * <p>Specifies whether this is an inline policy (<code>true</code>) or a managed policy (<code>false</code>).</p>
   * @public
   */
  inline?: boolean | undefined;

  /**
   * <p>A URI that identifies the policy. Use this URI to cross-reference the policy with the matching policies in each evaluation. To retrieve the policy document, pass this URI as the <code>policyUri</code> parameter of <code>GetRequestAuthorizationPolicy</code>, together with the same authorization ID. The value depends on the policy type:</p> <ul> <li> <p>For managed policies, this is the policy ARN.</p> </li> <li> <p>For inline policies, which have no ARN, this is an opaque identifier.</p> </li> </ul>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The entities that the policy is attached to. For identity, session, and resource-based policies, this is typically a single entity. For organization control policies (SCPs and RCPs), it can be multiple entities at different levels of the organization hierarchy.</p>
   * @public
   */
  attachedTo?: AttachedTo[] | undefined;

  /**
   * <p>What the policy was built from, such as a KMS key policy or grant. Absent for other policies.</p> <p>The <code>type</code> and <code>typeName</code> keys are always present. <code>type</code> identifies the policy-source kind. <code>typeName</code> is its readable name. Compare <code>type</code>, not <code>typeName</code>.</p> <p>A policy source can include additional keys that depend on its type. For example, a KMS grant includes a <code>grantId</code> key that identifies the grant. A grant has no ARN. Use the grant ID with the KMS key ARN in <code>attachedTo</code> to find the grant with the AWS KMS <code>ListGrants</code> operation.</p> <p>New types and keys can be added, so clients should ignore types and keys they don't recognize.</p>
   * @public
   */
  policySource?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationDetailsOutput {
  /**
   * <p>The request context is the set of context keys and values that apply to the entire request and are shared by all evaluations.</p>
   * @public
   */
  requestContext: Record<string, __DocumentType> | undefined;

  /**
   * <p>The list of evaluations for this request. Each evaluation shows how a single action and resource pair was evaluated. This includes the context, the effect, and any policies that matched.</p>
   * @public
   */
  evaluations: Evaluation[] | undefined;

  /**
   * <p>The list of policies that were evaluated.</p>
   * @public
   */
  policies: PolicyInfo[] | undefined;

  /**
   * <p>The pagination token for retrieving the next page of evaluations. This value is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationPolicyInput {
  /**
   * <p>The authorization ID received in the access denied error message. This ID identifies the request whose evaluated policy you want to retrieve.</p>
   * @public
   */
  authorizationId: string | undefined;

  /**
   * <p>The URI of the policy to retrieve. Use the <code>uri</code> value from the <code>policies</code> list returned by <code>GetRequestAuthorizationDetails</code> for the same authorization ID.</p>
   * @public
   */
  policyUri: string | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationPolicyOutput {
  /**
   * <p>The policy document evaluated for the denied request, returned as a JSON object.</p> <p>For some AWS services and policy types, this document includes all actions relevant to the service that processed the denied request, but might omit actions for other services.</p>
   * @public
   */
  policyDocument: __DocumentType | undefined;
}
