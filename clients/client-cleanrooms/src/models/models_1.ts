// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ComputeConfiguration,
  DifferentialPrivacyAggregationType,
  DifferentialPrivacyPreviewParametersInput,
  Membership,
  MembershipProtectedQueryResultConfiguration,
  MembershipQueryLogStatus,
  PrivacyBudgetTemplateAutoRefresh,
  PrivacyBudgetTemplateParametersOutput,
  PrivacyBudgetType,
  ProtectedQuery,
  ProtectedQueryFilterSensitiveLog,
  ProtectedQueryResultConfiguration,
  ProtectedQuerySQLParameters,
} from "./models_0";

/**
 * <p>Specifies the updated epsilon and noise parameters to preview. The preview allows you to see how the maximum number of each type of aggregation function would change with the new parameters.</p>
 * @public
 */
export type PreviewPrivacyImpactParametersInput =
  | PreviewPrivacyImpactParametersInput.DifferentialPrivacyMember
  | PreviewPrivacyImpactParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PreviewPrivacyImpactParametersInput {
  /**
   * <p>An array that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPreviewParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreviewPrivacyImpactParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>Specifies the desired epsilon and noise parameters to preview.</p>
   * @public
   */
  parameters: PreviewPrivacyImpactParametersInput | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewAggregation {
  /**
   * <p>The type of aggregation function.</p>
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The maximum number of aggregations that the member who can query can run given the epsilon and noise parameters.</p>
   * @public
   */
  maxCount: number | undefined;
}

/**
 * <p>Information about the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyImpact {
  /**
   * <p>The number of aggregation functions that you can perform.</p>
   * @public
   */
  aggregations: DifferentialPrivacyPreviewAggregation[] | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export type PrivacyImpact = PrivacyImpact.DifferentialPrivacyMember | PrivacyImpact.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyImpact {
  /**
   * <p>An object that lists the number and type of aggregation functions you can perform.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyImpact;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyImpact) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyImpact, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactOutput {
  /**
   * <p>An estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters. This does not change the privacy budget.</p>
   * @public
   */
  privacyImpact: PrivacyImpact | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedQueryType = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type ProtectedQueryType = (typeof ProtectedQueryType)[keyof typeof ProtectedQueryType];

/**
 * @public
 */
export interface StartProtectedQueryInput {
  /**
   * <p>The type of the protected query to be started.</p>
   * @public
   */
  type: ProtectedQueryType | undefined;

  /**
   * <p>A unique identifier for the membership to run this query against. Currently accepts a
   *          membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p> The compute configuration for the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * <p>The protected query.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * <p>The unique identifier of the membership.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          membership.</p>
   * @public
   */
  queryLogStatus?: MembershipQueryLogStatus | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can
   *          receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * <p>The membership object.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
} as const;

/**
 * @public
 */
export type TargetProtectedQueryStatus = (typeof TargetProtectedQueryStatus)[keyof typeof TargetProtectedQueryStatus];

/**
 * @public
 */
export interface UpdateProtectedQueryInput {
  /**
   * <p>The identifier for a member of a protected query instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * <p>The target status of a query. Used to update the execution status of a currently running
   *          query.</p>
   * @public
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * <p>The protected query output.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to use for the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateParametersInput {
  /**
   * <p>The epsilon value that you want to use.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to use for the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateParametersInput =
  | PrivacyBudgetTemplateParametersInput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersInput {
  /**
   * <p>An object that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p>
   *          <important>
   *             <p>If you plan to regularly bring new data into the collaboration, you can use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queries across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p>
   *          </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies your parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersInput | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An object that defines the privacy budget template.</p>
 * @public
 */
export interface PrivacyBudgetTemplate {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p>
   *          <important>
   *             <p>If you plan to regularly bring new data into the collaboration, use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p>
   *          </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateOutput {
  /**
   * <p>A summary of the elements in the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template. </p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateOutput {}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateOutput {
  /**
   * <p>Returns the details of the privacy budget template that you requested.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget templates are retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the
   * `maxResults` value has not been met.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the privacy budget template. The summary includes membership information, collaboration information, and creation information.</p>
 * @public
 */
export interface PrivacyBudgetTemplateSummary {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesOutput {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array that summarizes the privacy budget templates. The summary includes collaboration information, creation information, and privacy budget type.</p>
   * @public
   */
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to update in the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateUpdateParameters {
  /**
   * <p>The updated epsilon value that you want to use.</p>
   * @public
   */
  epsilon?: number | undefined;

  /**
   * <p>The updated value of noise added per query. It is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery?: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to update in the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateUpdateParameters =
  | PrivacyBudgetTemplateUpdateParameters.DifferentialPrivacyMember
  | PrivacyBudgetTemplateUpdateParameters.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateUpdateParameters {
  /**
   * <p>An object that specifies the new values for the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateUpdateParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateUpdateParameters, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is updated in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template that you want to update.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters?: PrivacyBudgetTemplateUpdateParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateOutput {
  /**
   * <p>Summary of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of objects specifying each key name and value.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag
   *          from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const StartProtectedQueryInputFilterSensitiveLog = (obj: StartProtectedQueryInput): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.resultConfiguration && { resultConfiguration: obj.resultConfiguration }),
  ...(obj.computeConfiguration && { computeConfiguration: obj.computeConfiguration }),
});

/**
 * @internal
 */
export const StartProtectedQueryOutputFilterSensitiveLog = (obj: StartProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});

/**
 * @internal
 */
export const UpdateProtectedQueryOutputFilterSensitiveLog = (obj: UpdateProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});
