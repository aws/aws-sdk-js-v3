// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { EvaluatedEffect, PolicyType, StatementEffect } from "./enums";

/**
 * An entity that a policy is attached to, identified by its ARN.
 *
 * @public
 */
export interface AttachedTo {
  /**
   * The ARN of the entity that the policy is attached to. The ARN format depends on the policy type:
   *
   * - For identity, session, and permissions boundary policies, this is the principal ARN (for example, an IAM role or user ARN).
   * - For resource-based policies, this is the resource ARN.
   * - For organization control policies (SCPs and RCPs), this is the AWS Organizations ARN of the account, organizational unit, or root.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationDetailsInput {
  /**
   * The authorization ID received in the access denied error message. This ID identifies the specific request to retrieve details for.
   *
   * @public
   */
  authorizationId: string | undefined;

  /**
   * The pagination token from a previous call, used to retrieve the next page of evaluations. Omit this value on the first call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A statement that matched during evaluation.
 *
 * @public
 */
export interface MatchedStatement {
  /**
   * The statement ID (Sid). If the statement has no Sid, one is generated for reference.
   *
   * @public
   */
  sid?: string | undefined;

  /**
   * The evaluated effect of this statement. Valid values:
   *
   * - `ALLOW` - The statement allows the action.
   * - `DENY` - The statement denies the action.
   *
   * @public
   */
  evaluatedEffect?: StatementEffect | undefined;
}

/**
 * A policy that matched during evaluation, referenced by URI. The URI corresponds to a policy in the top-level policies list.
 *
 * @public
 */
export interface MatchedPolicy {
  /**
   * The URI of the policy. This cross-references an entry in the top-level policies list. The value depends on the policy type:
   *
   * - For managed policies, this is the policy ARN.
   * - For inline policies, this is an opaque identifier.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The statements within the policy that matched during the evaluation.
   *
   * @public
   */
  matchedStatements?: MatchedStatement[] | undefined;
}

/**
 * Represents an individual evaluation for a single action and resource pair. This includes the context, the resulting effect, and any policies that matched.
 *
 * @public
 */
export interface Evaluation {
  /**
   * The action evaluated for this request (for example, `iam:PassRole`).
   *
   * @public
   */
  action: string | undefined;

  /**
   * The resource that the action targeted. This is typically a resource ARN, but can be a wildcard ARN that matches multiple resources, or empty for actions that are not resource-specific.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The context keys and values specific to this evaluation. These are applied on top of the request context.
   *
   * @public
   */
  context?: Record<string, __DocumentType> | undefined;

  /**
   * The result of the evaluation. Valid values:
   *
   * - `ALLOW` - The action was allowed.
   * - `EXPLICIT_DENY` - The action was explicitly denied by a policy.
   * - `IMPLICIT_DENY` - The action was denied because no policy allowed it.
   *
   * @public
   */
  evaluatedEffect?: EvaluatedEffect | undefined;

  /**
   * The policies that matched during evaluation of this action and resource. An implicit denial produces no matched policies.
   *
   * @public
   */
  matchedPolicies?: MatchedPolicy[] | undefined;
}

/**
 * Contains details about a policy evaluated during authorization. Details include the policy type, whether it is inline or managed, a URI that identifies it, and the entities it is attached to.
 *
 * @public
 */
export interface PolicyInfo {
  /**
   * The type of policy. Valid values:
   *
   * - `IDENTITY_BASED_POLICY` - An identity-based policy attached to an IAM user, group, or role.
   * - `PERMISSIONS_BOUNDARY` - A permissions boundary for an IAM entity.
   * - `RESOURCE_BASED_POLICY` - A resource-based policy attached to a resource.
   * - `RESOURCE_CONTROL_POLICY` - A resource control policy (RCP) in AWS Organizations.
   * - `SERVICE_CONTROL_POLICY` - A service control policy (SCP) in AWS Organizations.
   * - `SESSION_POLICY` - A session policy passed during role assumption or federation.
   * - `VPC_ENDPOINT_POLICY` - A VPC endpoint policy.
   *
   * @public
   */
  type?: PolicyType | undefined;

  /**
   * Specifies whether this is an inline policy (`true`) or a managed policy (`false`).
   *
   * @public
   */
  inline?: boolean | undefined;

  /**
   * A URI that identifies the policy. Use this URI to cross-reference the policy with the matching policies in each evaluation. The value depends on the policy type:
   *
   * - For managed policies, this is the policy ARN.
   * - For inline policies, which have no ARN, this is an opaque identifier.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The entities that the policy is attached to. For identity, session, and resource-based policies, this is typically a single entity. For organization control policies (SCPs and RCPs), it can be multiple entities at different levels of the organization hierarchy.
   *
   * @public
   */
  attachedTo?: AttachedTo[] | undefined;
}

/**
 * @public
 */
export interface GetRequestAuthorizationDetailsOutput {
  /**
   * The request context is the set of context keys and values that apply to the entire request and are shared by all evaluations.
   *
   * @public
   */
  requestContext: Record<string, __DocumentType> | undefined;

  /**
   * The list of evaluations for this request. Each evaluation shows how a single action and resource pair was evaluated. This includes the context, the effect, and any policies that matched.
   *
   * @public
   */
  evaluations: Evaluation[] | undefined;

  /**
   * The list of policies that were evaluated.
   *
   * @public
   */
  policies: PolicyInfo[] | undefined;

  /**
   * The pagination token for retrieving the next page of evaluations. This value is absent when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}
