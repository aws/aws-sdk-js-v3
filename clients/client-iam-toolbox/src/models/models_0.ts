// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { EvaluatedEffect, PolicyType, StatementEffect } from "./enums";

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
   * <p>The result of the evaluation. Valid values:</p> <ul> <li> <p> <code>ALLOW</code> - The action was allowed.</p> </li> <li> <p> <code>EXPLICIT_DENY</code> - The action was explicitly denied by a policy.</p> </li> <li> <p> <code>IMPLICIT_DENY</code> - The action was denied because no policy allowed it.</p> </li> </ul>
   * @public
   */
  evaluatedEffect?: EvaluatedEffect | undefined;

  /**
   * <p>The policies that matched during evaluation of this action and resource. An implicit denial produces no matched policies.</p>
   * @public
   */
  matchedPolicies?: MatchedPolicy[] | undefined;
}

/**
 * <p>Contains details about a policy evaluated during authorization. Details include the policy type, whether it is inline or managed, a URI that identifies it, and the entities it is attached to.</p>
 * @public
 */
export interface PolicyInfo {
  /**
   * <p>The type of policy. Valid values:</p> <ul> <li> <p> <code>IDENTITY_BASED_POLICY</code> - An identity-based policy attached to an IAM user, group, or role.</p> </li> <li> <p> <code>PERMISSIONS_BOUNDARY</code> - A permissions boundary for an IAM entity.</p> </li> <li> <p> <code>RESOURCE_BASED_POLICY</code> - A resource-based policy attached to a resource.</p> </li> <li> <p> <code>RESOURCE_CONTROL_POLICY</code> - A resource control policy (RCP) in AWS Organizations.</p> </li> <li> <p> <code>SERVICE_CONTROL_POLICY</code> - A service control policy (SCP) in AWS Organizations.</p> </li> <li> <p> <code>SESSION_POLICY</code> - A session policy passed during role assumption or federation.</p> </li> <li> <p> <code>VPC_ENDPOINT_POLICY</code> - A VPC endpoint policy.</p> </li> </ul>
   * @public
   */
  type?: PolicyType | undefined;

  /**
   * <p>Specifies whether this is an inline policy (<code>true</code>) or a managed policy (<code>false</code>).</p>
   * @public
   */
  inline?: boolean | undefined;

  /**
   * <p>A URI that identifies the policy. Use this URI to cross-reference the policy with the matching policies in each evaluation. The value depends on the policy type:</p> <ul> <li> <p>For managed policies, this is the policy ARN.</p> </li> <li> <p>For inline policies, which have no ARN, this is an opaque identifier.</p> </li> </ul>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The entities that the policy is attached to. For identity, session, and resource-based policies, this is typically a single entity. For organization control policies (SCPs and RCPs), it can be multiple entities at different levels of the organization hierarchy.</p>
   * @public
   */
  attachedTo?: AttachedTo[] | undefined;
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
