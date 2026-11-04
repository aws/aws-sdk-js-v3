// smithy-typescript generated code
import type {
  ActionCompletionStrategy,
  AdditionalSecurityRequirement,
  ApprovalTeamStatus,
  ApprovalTeamStatusCode,
  ApproverLastActivity,
  FilterField,
  IdentitySourceStatus,
  IdentitySourceStatusCode,
  IdentitySourceType,
  IdentityStatus,
  MfaSyncStatus,
  MfaType,
  Operator,
  PolicyStatus,
  PolicyType,
  SessionExecutionStatus,
  SessionResponse,
  SessionStatus,
  SessionStatusCode,
  UpdateAction,
} from "./enums";

/**
 * Strategy for how an approval team grants approval.
 *
 * @public
 */
export interface MofNApprovalStrategy {
  /**
   * Minimum number of approvals (M) required for a total number of approvers (N).
   *
   * @public
   */
  MinApprovalsRequired: number | undefined;
}

/**
 * Strategy for how an approval team grants approval.
 *
 * @public
 */
export type ApprovalStrategy =
  | ApprovalStrategy.MofNMember
  | ApprovalStrategy.$UnknownMember;

/**
 * @public
 */
export namespace ApprovalStrategy {
  /**
   * Minimum number of approvals (M) required for a total number of approvers (N).
   *
   * @public
   */
  export interface MofNMember {
    MofN: MofNApprovalStrategy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    MofN?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    MofN: (value: MofNApprovalStrategy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains details for how an approval team grants approval.
 *
 * @public
 */
export type ApprovalStrategyResponse =
  | ApprovalStrategyResponse.MofNMember
  | ApprovalStrategyResponse.$UnknownMember;

/**
 * @public
 */
export namespace ApprovalStrategyResponse {
  /**
   * Minimum number of approvals (M) required for a total number of approvers (N).
   *
   * @public
   */
  export interface MofNMember {
    MofN: MofNApprovalStrategy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    MofN?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    MofN: (value: MofNApprovalStrategy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains details for an approver.
 *
 * @public
 */
export interface ApprovalTeamRequestApprover {
  /**
   * ID for the user.
   *
   * @public
   */
  PrimaryIdentityId: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.
   *
   * @public
   */
  PrimaryIdentitySourceArn: string | undefined;
}

/**
 * Contains the Amazon Resource Name (ARN) for a policy. Policies define what operations a team that define the permissions for team resources.
 *
 * @public
 */
export interface PolicyReference {
  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalTeamRequest {
  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services populates this field.
   *
   * > **Note:**
   * >
   * > **What is idempotency?**
   * >
   * > When you make a mutating API request, the request typically returns a result before the operation's asynchronous workflows have completed. Operations might also time out or encounter other server issues before they complete, even though the request has already returned a result. This could make it difficult to determine whether the request succeeded or not, and could lead to multiple retries to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation is completed multiple times. This means that you might create more resources than you intended.
   * >
   * > *Idempotency* ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * An `ApprovalStrategy` object. Contains details for how the team grants approval.
   *
   * @public
   */
  ApprovalStrategy: ApprovalStrategy | undefined;

  /**
   * An array of `ApprovalTeamRequesterApprovers` objects. Contains details for the approvers in the team.
   *
   * @public
   */
  Approvers: ApprovalTeamRequestApprover[] | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * An array of `PolicyReference` objects. Contains a list of policies that define the permissions for team resources.
   *
   * @public
   */
  Policies: PolicyReference[] | undefined;

  /**
   * Name of the team.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Tags you want to attach to the team.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApprovalTeamResponse {
  /**
   * Timestamp when the team was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) for the team that was created.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the team that was created.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Version ID for the team that was created. When a team is updated, the version ID changes.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInactiveApprovalTeamVersionRequest {
  /**
   * Amaazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Version ID for the team.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInactiveApprovalTeamVersionResponse {}

/**
 * @public
 */
export interface GetApprovalTeamRequest {
  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * MFA configuration and sycnronization status for an approver
 *
 * @public
 */
export interface MfaMethod {
  /**
   * The type of MFA configuration used by the approver
   *
   * @public
   */
  Type: MfaType | undefined;

  /**
   * Indicates if the approver's MFA device is in-sync with the Identity Source
   *
   * @public
   */
  SyncStatus: MfaSyncStatus | undefined;
}

/**
 * Contains details for an approver.
 *
 * @public
 */
export interface GetApprovalTeamResponseApprover {
  /**
   * ID for the approver.
   *
   * @public
   */
  ApproverId?: string | undefined;

  /**
   * Timestamp when the approver responded to an approval team invitation.
   *
   * @public
   */
  ResponseTime?: Date | undefined;

  /**
   * ID for the user.
   *
   * @public
   */
  PrimaryIdentityId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.
   *
   * @public
   */
  PrimaryIdentitySourceArn?: string | undefined;

  /**
   * Status for the identity source. For example, if an approver has accepted a team invitation with a user authentication method managed by the identity source.
   *
   * @public
   */
  PrimaryIdentityStatus?: IdentityStatus | undefined;

  /**
   * Last Activity performed by the approver.
   *
   * @public
   */
  LastActivity?: ApproverLastActivity | undefined;

  /**
   * Timestamp when the approver last responded to an operation or invitation request.
   *
   * @public
   */
  LastActivityTime?: Date | undefined;

  /**
   * Amazon Resource Name (ARN) for the pending baseline session.
   *
   * @public
   */
  PendingBaselineSessionArn?: string | undefined;

  /**
   * Multi-factor authentication configuration for the approver
   *
   * @public
   */
  MfaMethods?: MfaMethod[] | undefined;
}

/**
 * Contains details for the pending updates for an approval team, if applicable.
 *
 * @public
 */
export interface PendingUpdate {
  /**
   * Version ID for the team.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An `ApprovalStrategyResponse` object. Contains details for how the team grants approval.
   *
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * Total number of approvers in the team.
   *
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * Status for the team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * Status code for the update. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * Message describing the status for the team.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * An array of `GetApprovalTeamResponseApprover` objects. Contains details for the approvers in the team.
   *
   * @public
   */
  Approvers?: GetApprovalTeamResponseApprover[] | undefined;

  /**
   * Timestamp when the update request was initiated.
   *
   * @public
   */
  UpdateInitiationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApprovalTeamResponse {
  /**
   * Timestamp when the team was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * An `ApprovalStrategyResponse` object. Contains details for how the team grants approval.
   *
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * Total number of approvers in the team.
   *
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * An array of `GetApprovalTeamResponseApprover` objects. Contains details for the approvers in the team.
   *
   * @public
   */
  Approvers?: GetApprovalTeamResponseApprover[] | undefined;

  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Name of the approval team.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Status for the team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * Status code for the approval team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * Message describing the status for the team.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  UpdateSessionArn?: string | undefined;

  /**
   * Version ID for the team.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * An array of `PolicyReference` objects. Contains a list of policies that define the permissions for team resources.
   *
   * @public
   */
  Policies?: PolicyReference[] | undefined;

  /**
   * Timestamp when the team was last updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * A `PendingUpdate` object. Contains details for the pending updates for the team, if applicable.
   *
   * @public
   */
  PendingUpdate?: PendingUpdate | undefined;
}

/**
 * @public
 */
export interface ListApprovalTeamsRequest {
  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains details for an approval team
 *
 * @public
 */
export interface ListApprovalTeamsResponseApprovalTeam {
  /**
   * Timestamp when the team was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * An `ApprovalStrategyResponse` object. Contains details for how an approval team grants approval.
   *
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * Total number of approvers in the team.
   *
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the team.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Status for the team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * Status code for the team. For more information, see [Team health](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*.
   *
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * Message describing the status for the team.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovalTeamsResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `ListApprovalTeamsResponseApprovalTeam` objects. Contains details for approval teams.
   *
   * @public
   */
  ApprovalTeams?: ListApprovalTeamsResponseApprovalTeam[] | undefined;
}

/**
 * @public
 */
export interface StartActiveApprovalTeamDeletionRequest {
  /**
   * Number of days between when the team approves the delete request and when the team is deleted.
   *
   * @public
   */
  PendingWindowDays?: number | undefined;

  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartActiveApprovalTeamDeletionResponse {
  /**
   * Timestamp when the deletion process is scheduled to complete.
   *
   * @public
   */
  DeletionCompletionTime?: Date | undefined;

  /**
   * Timestamp when the deletion process was initiated.
   *
   * @public
   */
  DeletionStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartApprovalTeamBaselineRequest {
  /**
   * Amazon Resource Name (ARN) for the approval team.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Array of approver IDs.
   *
   * @public
   */
  ApproverIds?: string[] | undefined;
}

/**
 * @public
 */
export interface StartApprovalTeamBaselineResponse {
  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  BaselineSessionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalTeamRequest {
  /**
   * An `ApprovalStrategy` object. Contains details for how the team grants approval.
   *
   * @public
   */
  ApprovalStrategy?: ApprovalStrategy | undefined;

  /**
   * An array of `ApprovalTeamRequestApprover` objects. Contains details for the approvers in the team.
   *
   * @public
   */
  Approvers?: ApprovalTeamRequestApprover[] | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of `UpdateAction` to perform when updating the team.
   *
   * @public
   */
  UpdateActions?: UpdateAction[] | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalTeamResponse {
  /**
   * Version ID for the team that was created. When an approval team is updated, the version ID changes.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  PolicyVersionArn: string | undefined;
}

/**
 * Contains details for the version of a policy. Policies define what operations a team that define the permissions for team resources.
 *
 * @public
 */
export interface PolicyVersion {
  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * Verison ID
   *
   * @public
   */
  VersionId: number | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * Determines if the specified policy is the default for the team.
   *
   * @public
   */
  IsDefault: boolean | undefined;

  /**
   * Name of the policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Status for the policy. For example, if the policy is [attachable](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html) or [deprecated](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-deprecated.html).
   *
   * @public
   */
  Status: PolicyStatus | undefined;

  /**
   * Timestamp when the policy was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Timestamp when the policy was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * Document that contains the policy contents.
   *
   * @public
   */
  Document: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * A `PolicyVersion` object. Contains details for the version of the policy. Policies define the permissions for team resources.
   *
   * @public
   */
  PolicyVersion: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The type of policy
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * Amazon Resource Name (ARN) for the policy version.
   *
   * @public
   */
  PolicyVersionArn?: string | undefined;

  /**
   * Name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Document that contains the contents for the policy.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * IAM Identity Center credentials. For more information see, [IAM Identity Center](http://aws.amazon.com/identity-center/) .
 *
 * @public
 */
export interface IamIdentityCenter {
  /**
   * Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * Amazon Web Services Region where the IAM Identity Center instance is located.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.
 *
 * @public
 */
export interface IdentitySourceParameters {
  /**
   * IAM Identity Center credentials.
   *
   * @public
   */
  IamIdentityCenter?: IamIdentityCenter | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceRequest {
  /**
   * A `IdentitySourceParameters` object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceParameters: IdentitySourceParameters | undefined;

  /**
   * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services populates this field.
   *
   * > **Note:**
   * >
   * > **What is idempotency?**
   * >
   * > When you make a mutating API request, the request typically returns a result before the operation's asynchronous workflows have completed. Operations might also time out or encounter other server issues before they complete, even though the request has already returned a result. This could make it difficult to determine whether the request succeeded or not, and could lead to multiple retries to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation is completed multiple times. This means that you might create more resources than you intended.
   * >
   * > *Idempotency* ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Tag you want to attach to the identity source.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceResponse {
  /**
   * The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source that was created.
   *
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * Timestamp when the identity source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIdentitySourceRequest {
  /**
   * Amazon Resource Name (ARN) for identity source.
   *
   * @public
   */
  IdentitySourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetIdentitySourceRequest {
  /**
   * Amazon Resource Name (ARN) for the identity source.
   *
   * @public
   */
  IdentitySourceArn: string | undefined;
}

/**
 * IAM Identity Center credentials. For more information see, [IAM Identity Center](http://aws.amazon.com/identity-center/) .
 *
 * @public
 */
export interface IamIdentityCenterForGet {
  /**
   * Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * URL for the approval portal associated with the IAM Identity Center instance.
   *
   * @public
   */
  ApprovalPortalUrl?: string | undefined;

  /**
   * Amazon Web Services Region where the IAM Identity Center instance is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance. For more information, see [Identity source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @public
 */
export type IdentitySourceParametersForGet =
  | IdentitySourceParametersForGet.IamIdentityCenterMember
  | IdentitySourceParametersForGet.$UnknownMember;

/**
 * @public
 */
export namespace IdentitySourceParametersForGet {
  /**
   * IAM Identity Center credentials.
   *
   * @public
   */
  export interface IamIdentityCenterMember {
    IamIdentityCenter: IamIdentityCenterForGet;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IamIdentityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IamIdentityCenter: (value: IamIdentityCenterForGet) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetIdentitySourceResponse {
  /**
   * The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * A `IdentitySourceParameters` object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceParameters?: IdentitySourceParametersForGet | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source.
   *
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * Timestamp when the identity source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Status for the identity source. For example, if the identity source is `ACTIVE`.
   *
   * @public
   */
  Status?: IdentitySourceStatus | undefined;

  /**
   * Status code of the identity source.
   *
   * @public
   */
  StatusCode?: IdentitySourceStatusCode | undefined;

  /**
   * Message describing the status for the identity source.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesRequest {
  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * IAM Identity Center credentials. For more information see, [IAM Identity Center](http://aws.amazon.com/identity-center/) .
 *
 * @public
 */
export interface IamIdentityCenterForList {
  /**
   * Amazon Resource Name (ARN) for the IAM Identity Center instance.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * URL for the approval portal associated with the IAM Identity Center instance.
   *
   * @public
   */
  ApprovalPortalUrl?: string | undefined;

  /**
   * Amazon Web Services Region where the IAM Identity Center instance is located.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance. For more information, see [Identity source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @public
 */
export type IdentitySourceParametersForList =
  | IdentitySourceParametersForList.IamIdentityCenterMember
  | IdentitySourceParametersForList.$UnknownMember;

/**
 * @public
 */
export namespace IdentitySourceParametersForList {
  /**
   * IAM Identity Center credentials.
   *
   * @public
   */
  export interface IamIdentityCenterMember {
    IamIdentityCenter: IamIdentityCenterForList;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    IamIdentityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    IamIdentityCenter: (value: IamIdentityCenterForList) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains details for an identity source. For more information, see [Identity source](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html) in the *Multi-party approval User Guide*.
 *
 * @public
 */
export interface IdentitySourceForList {
  /**
   * The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * A `IdentitySourceParametersForList` object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.
   *
   * @public
   */
  IdentitySourceParameters?: IdentitySourceParametersForList | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source.
   *
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * Timestamp when the identity source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Status for the identity source. For example, if the identity source is `ACTIVE`.
   *
   * @public
   */
  Status?: IdentitySourceStatus | undefined;

  /**
   * Status code of the identity source.
   *
   * @public
   */
  StatusCode?: IdentitySourceStatusCode | undefined;

  /**
   * Message describing the status for the identity source.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A `IdentitySources`. Contains details for identity sources.
   *
   * @public
   */
  IdentitySources?: IdentitySourceForList[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains details for a policy. Policies define what operations a team that define the permissions for team resources.
 *
 * @public
 */
export interface Policy {
  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Determines if the specified policy is the default for the team.
   *
   * @public
   */
  DefaultVersion: number | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * Name of the policy.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `Policy` objects. Contains a list of policies that define the permissions for team resources.
   *
   * @public
   */
  Policies?: Policy[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * Contains details for the version of a policy. Policies define what operations a team that define the permissions for team resources.
 *
 * @public
 */
export interface PolicyVersionSummary {
  /**
   * Amazon Resource Name (ARN) for the team.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the policy.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * Version ID for the policy.
   *
   * @public
   */
  VersionId: number | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * Determines if the specified policy is the default for the team.
   *
   * @public
   */
  IsDefault: boolean | undefined;

  /**
   * Name of the policy
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Status for the policy. For example, if the policy is [attachable](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html) or [deprecated](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-deprecated.html).
   *
   * @public
   */
  Status: PolicyStatus | undefined;

  /**
   * Timestamp when the policy was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Timestamp when the policy was last updated.
   *
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `PolicyVersionSummary` objects. Contains details for the version of the policies that define the permissions for team resources.
   *
   * @public
   */
  PolicyVersions?: PolicyVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains details about a policy for a resource.
 *
 * @public
 */
export interface ListResourcePoliciesResponseResourcePolicy {
  /**
   * Amazon Resource Name (ARN) for policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * Name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `ListResourcePoliciesResponseResourcePolicy` objects. Contains details about the policy for the resource.
   *
   * @public
   */
  ResourcePolicies?: ListResourcePoliciesResponseResourcePolicy[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Amazon Resource Name (ARN) for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags attached to the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CancelSessionRequest {
  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  SessionArn: string | undefined;
}

/**
 * @public
 */
export interface CancelSessionResponse {}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  SessionArn: string | undefined;
}

/**
 * Contains details for an approver response in an approval session.
 *
 * @public
 */
export interface GetSessionResponseApproverResponse {
  /**
   * ID for the approver.
   *
   * @public
   */
  ApproverId?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.
   *
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * ID for the identity source. The identity source manages the user authentication for approvers.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * Response to the operation request.
   *
   * @public
   */
  Response?: SessionResponse | undefined;

  /**
   * Timestamp when a approver responded to the operation request.
   *
   * @public
   */
  ResponseTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  SessionArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the approval team.
   *
   * @public
   */
  ApprovalTeamArn?: string | undefined;

  /**
   * Name of the approval team.
   *
   * @public
   */
  ApprovalTeamName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the protected operation.
   *
   * @public
   */
  ProtectedResourceArn?: string | undefined;

  /**
   * An `ApprovalStrategyResponse` object. Contains details for how the team grants approval
   *
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * Total number of approvers in the session.
   *
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * Timestamp when the session was initiated.
   *
   * @public
   */
  InitiationTime?: Date | undefined;

  /**
   * Timestamp when the session will expire.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Timestamp when the session completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * Description for the session.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Metadata for the session.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * Status for the session. For example, if the team has approved the requested operation.
   *
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * Status code of the session.
   *
   * @public
   */
  StatusCode?: SessionStatusCode | undefined;

  /**
   * Message describing the status for session.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Status for the protected operation. For example, if the operation is `PENDING`.
   *
   * @public
   */
  ExecutionStatus?: SessionExecutionStatus | undefined;

  /**
   * Name of the protected operation.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * [Service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) for the service associated with the protected operation.
   *
   * @public
   */
  RequesterServicePrincipal?: string | undefined;

  /**
   * [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-request) that made the operation request.
   *
   * @public
   */
  RequesterPrincipalArn?: string | undefined;

  /**
   * ID for the account that made the operation request.
   *
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * Amazon Web Services Region where the operation request originated.
   *
   * @public
   */
  RequesterRegion?: string | undefined;

  /**
   * Message from the account that made the operation request
   *
   * @public
   */
  RequesterComment?: string | undefined;

  /**
   * Strategy for executing the protected operation. `AUTO_COMPLETION_UPON_APPROVAL` means the operation is automatically executed using the requester's permissions, if approved.
   *
   * @public
   */
  ActionCompletionStrategy?: ActionCompletionStrategy | undefined;

  /**
   * An array of `GetSessionResponseApproverResponse` objects. Contains details for approver responses in the session.
   *
   * @public
   */
  ApproverResponses?: GetSessionResponseApproverResponse[] | undefined;

  /**
   * A list of `AdditionalSecurityRequirement` applied to the session.
   *
   * @public
   */
  AdditionalSecurityRequirements?: AdditionalSecurityRequirement[] | undefined;
}

/**
 * Contains the filter to apply to requests. You can specify up to 10 filters for a request.
 *
 * @public
 */
export interface Filter {
  /**
   * Name of the filter to use.
   *
   * > **Note:**
   * >
   * > **Supported filters**
   * >
   * > The supported filters for ListSessions are: `ActionName`, `SessionStatus`, and `InitationTime`.
   *
   * @public
   */
  FieldName?: FilterField | undefined;

  /**
   * Operator to use for filtering.
   *
   * - `EQ`: Equal to the specified value
   * - `NE`: Not equal to the specified value
   * - `GT`: Greater than the specified value
   * - `LT`: Less than the specified value
   * - `GTE`: Greater than or equal to the specified value
   * - `LTE`: Less than or equal to the specified value
   * - `CONTAINS`: Contains the specified value
   * - `NOT_CONTAINS`: Does not contain the specified value
   * - `BETWEEN`: Between two values, inclusive of the specified values.
   *
   * > **Note:**
   * >
   * > **Supported operators for each filter**:
   * >
   * > - `ActionName`: `EQ` | `NE` | `CONTAINS` | `NOT_CONTAINS`
   * > - `SessionStatus`: `EQ` | `NE`
   * > - `InitiationTime`: `GT` | `LT` | `GTE` | `LTE` | `BETWEEN`
   *
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * Value to use for filtering. For the `BETWEEN` operator, specify values in the format `a AND b` (`AND` is case-insensitive).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * Amazon Resource Name (ARN) for the approval team.
   *
   * @public
   */
  ApprovalTeamArn: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `Filter` objects. Contains the filter to apply when listing sessions.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains details for an approval session. For more information, see [Session](https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html) in the *Multi-party approval User Guide*
 *
 * @public
 */
export interface ListSessionsResponseSession {
  /**
   * Amazon Resource Name (ARN) for the session.
   *
   * @public
   */
  SessionArn?: string | undefined;

  /**
   * Name of the approval team.
   *
   * @public
   */
  ApprovalTeamName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the approval team.
   *
   * @public
   */
  ApprovalTeamArn?: string | undefined;

  /**
   * Timestamp when the session was initiated.
   *
   * @public
   */
  InitiationTime?: Date | undefined;

  /**
   * Timestamp when the session was expire.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Timestamp when the session was completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * Description for the team.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Name of the protected operation.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the protected operation.
   *
   * @public
   */
  ProtectedResourceArn?: string | undefined;

  /**
   * [Service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) for the service associated with the protected operation.
   *
   * @public
   */
  RequesterServicePrincipal?: string | undefined;

  /**
   * [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-request) that made the operation request.
   *
   * @public
   */
  RequesterPrincipalArn?: string | undefined;

  /**
   * Amazon Web Services Region where the operation request originated.
   *
   * @public
   */
  RequesterRegion?: string | undefined;

  /**
   * ID for the account that made the operation request.
   *
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * Status for the protected operation. For example, if the operation is `PENDING`.
   *
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * Status code of the session.
   *
   * @public
   */
  StatusCode?: SessionStatusCode | undefined;

  /**
   * Message describing the status for session.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Strategy for executing the protected operation. `AUTO_COMPLETION_UPON_APPROVAL` means the operation is executed automatically using the requester's permissions, if approved.
   *
   * @public
   */
  ActionCompletionStrategy?: ActionCompletionStrategy | undefined;

  /**
   * A list of `AdditionalSecurityRequirement` applied to the session.
   *
   * @public
   */
  AdditionalSecurityRequirements?: AdditionalSecurityRequirement[] | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a next call to the operation to get more output. You can repeat this until the `NextToken` response element returns `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `ListSessionsResponseSession` objects. Contains details for the sessions.
   *
   * @public
   */
  Sessions?: ListSessionsResponseSession[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Name (ARN) for the resource you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags that you have added to the specified resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Amazon Resource Name (ARN) for the resource you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Array of tag key-value pairs that you want to untag.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
