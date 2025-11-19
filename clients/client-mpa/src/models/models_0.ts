// smithy-typescript generated code
import {
  ActionCompletionStrategy,
  ApprovalTeamStatus,
  ApprovalTeamStatusCode,
  FilterField,
  IdentitySourceStatus,
  IdentitySourceStatusCode,
  IdentitySourceType,
  IdentityStatus,
  Operator,
  PolicyStatus,
  PolicyType,
  SessionExecutionStatus,
  SessionResponse,
  SessionStatus,
  SessionStatusCode,
} from "./enums";

/**
 * <p>Strategy for how an approval team grants approval.</p>
 * @public
 */
export interface MofNApprovalStrategy {
  /**
   * <p>Minimum number of approvals (M) required for a total number of approvers (N).</p>
   * @public
   */
  MinApprovalsRequired: number | undefined;
}

/**
 * <p>Strategy for how an approval team grants approval.</p>
 * @public
 */
export type ApprovalStrategy = ApprovalStrategy.MofNMember | ApprovalStrategy.$UnknownMember;

/**
 * @public
 */
export namespace ApprovalStrategy {
  /**
   * <p>Minimum number of approvals (M) required for a total number of approvers (N).</p>
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
 * <p>Contains details for how an approval team grants approval.</p>
 * @public
 */
export type ApprovalStrategyResponse = ApprovalStrategyResponse.MofNMember | ApprovalStrategyResponse.$UnknownMember;

/**
 * @public
 */
export namespace ApprovalStrategyResponse {
  /**
   * <p>Minimum number of approvals (M) required for a total number of approvers (N).</p>
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
 * <p>Contains details for an approver.</p>
 * @public
 */
export interface ApprovalTeamRequestApprover {
  /**
   * <p>ID for the user.</p>
   * @public
   */
  PrimaryIdentityId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.</p>
   * @public
   */
  PrimaryIdentitySourceArn: string | undefined;
}

/**
 * <p>Contains the Amazon Resource Name (ARN) for a policy. Policies define what operations a team that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export interface PolicyReference {
  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalTeamRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services populates this field.</p> <note> <p> <b>What is idempotency?</b> </p> <p>When you make a mutating API request, the request typically returns a result before the operation's asynchronous workflows have completed. Operations might also time out or encounter other server issues before they complete, even though the request has already returned a result. This could make it difficult to determine whether the request succeeded or not, and could lead to multiple retries to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation is completed multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p> </note>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>An <code>ApprovalStrategy</code> object. Contains details for how the team grants approval.</p>
   * @public
   */
  ApprovalStrategy: ApprovalStrategy | undefined;

  /**
   * <p>An array of <code>ApprovalTeamRequesterApprovers</code> objects. Contains details for the approvers in the team.</p>
   * @public
   */
  Approvers: ApprovalTeamRequestApprover[] | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>An array of <code>PolicyReference</code> objects. Contains a list of policies that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Policies: PolicyReference[] | undefined;

  /**
   * <p>Name of the team.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Tags you want to attach to the team.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApprovalTeamResponse {
  /**
   * <p>Timestamp when the team was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the team that was created.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Name of the team that was created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Version ID for the team that was created. When a team is updated, the version ID changes.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInactiveApprovalTeamVersionRequest {
  /**
   * <p>Amaazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Version ID for the team.</p>
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
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Contains details for an approver.</p>
 * @public
 */
export interface GetApprovalTeamResponseApprover {
  /**
   * <p>ID for the approver.</p>
   * @public
   */
  ApproverId?: string | undefined;

  /**
   * <p>Timestamp when the approver responded to an approval team invitation.</p>
   * @public
   */
  ResponseTime?: Date | undefined;

  /**
   * <p>ID for the user.</p>
   * @public
   */
  PrimaryIdentityId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.</p>
   * @public
   */
  PrimaryIdentitySourceArn?: string | undefined;

  /**
   * <p>Status for the identity source. For example, if an approver has accepted a team invitation with a user authentication method managed by the identity source.</p>
   * @public
   */
  PrimaryIdentityStatus?: IdentityStatus | undefined;
}

/**
 * <p>Contains details for the pending updates for an approval team, if applicable.</p>
 * @public
 */
export interface PendingUpdate {
  /**
   * <p>Version ID for the team.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An <code>ApprovalStrategyResponse</code> object. Contains details for how the team grants approval.</p>
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * <p>Total number of approvers in the team.</p>
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * <p>Status for the team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * <p>Status code for the update. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * <p>Message describing the status for the team.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>An array of <code>GetApprovalTeamResponseApprover </code> objects. Contains details for the approvers in the team.</p>
   * @public
   */
  Approvers?: GetApprovalTeamResponseApprover[] | undefined;

  /**
   * <p>Timestamp when the update request was initiated.</p>
   * @public
   */
  UpdateInitiationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApprovalTeamResponse {
  /**
   * <p>Timestamp when the team was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>An <code>ApprovalStrategyResponse</code> object. Contains details for how the team grants approval.</p>
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * <p>Total number of approvers in the team.</p>
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * <p>An array of <code>GetApprovalTeamResponseApprover </code> objects. Contains details for the approvers in the team.</p>
   * @public
   */
  Approvers?: GetApprovalTeamResponseApprover[] | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Name of the approval team.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Status for the team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * <p>Status code for the approval team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * <p>Message describing the status for the team.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the session.</p>
   * @public
   */
  UpdateSessionArn?: string | undefined;

  /**
   * <p>Version ID for the team.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>An array of <code>PolicyReference</code> objects. Contains a list of policies that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Policies?: PolicyReference[] | undefined;

  /**
   * <p>Timestamp when the team was last updated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>A <code>PendingUpdate</code> object. Contains details for the pending updates for the team, if applicable.</p>
   * @public
   */
  PendingUpdate?: PendingUpdate | undefined;
}

/**
 * @public
 */
export interface ListApprovalTeamsRequest {
  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains details for an approval team</p>
 * @public
 */
export interface ListApprovalTeamsResponseApprovalTeam {
  /**
   * <p>Timestamp when the team was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>An <code>ApprovalStrategyResponse</code> object. Contains details for how an approval team grants approval.</p>
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * <p>Total number of approvers in the team.</p>
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Name of the team.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Status for the team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Status?: ApprovalTeamStatus | undefined;

  /**
   * <p>Status code for the team. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Team health</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  StatusCode?: ApprovalTeamStatusCode | undefined;

  /**
   * <p>Message describing the status for the team.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovalTeamsResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>ListApprovalTeamsResponseApprovalTeam</code> objects. Contains details for approval teams.</p>
   * @public
   */
  ApprovalTeams?: ListApprovalTeamsResponseApprovalTeam[] | undefined;
}

/**
 * @public
 */
export interface StartActiveApprovalTeamDeletionRequest {
  /**
   * <p>Number of days between when the team approves the delete request and when the team is deleted.</p>
   * @public
   */
  PendingWindowDays?: number | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StartActiveApprovalTeamDeletionResponse {
  /**
   * <p>Timestamp when the deletion process is scheduled to complete.</p>
   * @public
   */
  DeletionCompletionTime?: Date | undefined;

  /**
   * <p>Timestamp when the deletion process was initiated.</p>
   * @public
   */
  DeletionStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalTeamRequest {
  /**
   * <p>An <code>ApprovalStrategy</code> object. Contains details for how the team grants approval.</p>
   * @public
   */
  ApprovalStrategy?: ApprovalStrategy | undefined;

  /**
   * <p>An array of <code>ApprovalTeamRequestApprover</code> objects. Contains details for the approvers in the team.</p>
   * @public
   */
  Approvers?: ApprovalTeamRequestApprover[] | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalTeamResponse {
  /**
   * <p>Version ID for the team that was created. When an approval team is updated, the version ID changes.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  PolicyVersionArn: string | undefined;
}

/**
 * <p>Contains details for the version of a policy. Policies define what operations a team that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export interface PolicyVersion {
  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>Verison ID</p>
   * @public
   */
  VersionId: number | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>Determines if the specified policy is the default for the team.</p>
   * @public
   */
  IsDefault: boolean | undefined;

  /**
   * <p>Name of the policy.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Status for the policy. For example, if the policy is <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html">attachable</a> or <a href="https://docs.aws.amazon.com/access_policies_managed-deprecated.html">deprecated</a>.</p>
   * @public
   */
  Status: PolicyStatus | undefined;

  /**
   * <p>Timestamp when the policy was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp when the policy was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>Document that contains the policy contents.</p>
   * @public
   */
  Document: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>A <code>PolicyVersion</code> object. Contains details for the version of the policy. Policies define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  PolicyVersion: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The type of policy</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the policy version.</p>
   * @public
   */
  PolicyVersionArn?: string | undefined;

  /**
   * <p>Name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Document that contains the contents for the policy.</p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * <p>IAM Identity Center credentials. For more information see, <a href="http://aws.amazon.com/identity-center/">IAM Identity Center</a> .</p>
 * @public
 */
export interface IamIdentityCenter {
  /**
   * <p>Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>Amazon Web Services Region where the IAM Identity Center instance is located.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</p>
 * @public
 */
export interface IdentitySourceParameters {
  /**
   * <p>IAM Identity Center credentials.</p>
   * @public
   */
  IamIdentityCenter?: IamIdentityCenter | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceRequest {
  /**
   * <p>A <code> IdentitySourceParameters</code> object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceParameters: IdentitySourceParameters | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services populates this field.</p> <note> <p> <b>What is idempotency?</b> </p> <p>When you make a mutating API request, the request typically returns a result before the operation's asynchronous workflows have completed. Operations might also time out or encounter other server issues before they complete, even though the request has already returned a result. This could make it difficult to determine whether the request succeeded or not, and could lead to multiple retries to ensure that the operation completes successfully. However, if the original request and the subsequent retries are successful, the operation is completed multiple times. This means that you might create more resources than you intended.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.</p> </note>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Tag you want to attach to the identity source.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdentitySourceResponse {
  /**
   * <p>The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source that was created.</p>
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * <p>Timestamp when the identity source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteIdentitySourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) for identity source.</p>
   * @public
   */
  IdentitySourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetIdentitySourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the identity source.</p>
   * @public
   */
  IdentitySourceArn: string | undefined;
}

/**
 * <p>IAM Identity Center credentials. For more information see, <a href="http://aws.amazon.com/identity-center/">IAM Identity Center</a> .</p>
 * @public
 */
export interface IamIdentityCenterForGet {
  /**
   * <p>Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>URL for the approval portal associated with the IAM Identity Center instance.</p>
   * @public
   */
  ApprovalPortalUrl?: string | undefined;

  /**
   * <p>Amazon Web Services Region where the IAM Identity Center instance is located.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity source</a> in the <i>Multi-party approval User Guide</i>.</p>
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
   * <p>IAM Identity Center credentials.</p>
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
   * <p>The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * <p>A <code> IdentitySourceParameters</code> object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceParameters?: IdentitySourceParametersForGet | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source.</p>
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * <p>Timestamp when the identity source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Status for the identity source. For example, if the identity source is <code>ACTIVE</code>.</p>
   * @public
   */
  Status?: IdentitySourceStatus | undefined;

  /**
   * <p>Status code of the identity source.</p>
   * @public
   */
  StatusCode?: IdentitySourceStatusCode | undefined;

  /**
   * <p>Message describing the status for the identity source.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesRequest {
  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>IAM Identity Center credentials. For more information see, <a href="http://aws.amazon.com/identity-center/">IAM Identity Center</a> .</p>
 * @public
 */
export interface IamIdentityCenterForList {
  /**
   * <p>Amazon Resource Name (ARN) for the IAM Identity Center instance.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>URL for the approval portal associated with the IAM Identity Center instance.</p>
   * @public
   */
  ApprovalPortalUrl?: string | undefined;

  /**
   * <p>Amazon Web Services Region where the IAM Identity Center instance is located.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity source</a> in the <i>Multi-party approval User Guide</i>.</p>
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
   * <p>IAM Identity Center credentials.</p>
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
 * <p>Contains details for an identity source. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Identity source</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export interface IdentitySourceForList {
  /**
   * <p>The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceType?: IdentitySourceType | undefined;

  /**
   * <p>A <code>IdentitySourceParametersForList</code> object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</p>
   * @public
   */
  IdentitySourceParameters?: IdentitySourceParametersForList | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source.</p>
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * <p>Timestamp when the identity source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Status for the identity source. For example, if the identity source is <code>ACTIVE</code>.</p>
   * @public
   */
  Status?: IdentitySourceStatus | undefined;

  /**
   * <p>Status code of the identity source.</p>
   * @public
   */
  StatusCode?: IdentitySourceStatusCode | undefined;

  /**
   * <p>Message describing the status for the identity source.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentitySourcesResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A <code>IdentitySources</code>. Contains details for identity sources.</p>
   * @public
   */
  IdentitySources?: IdentitySourceForList[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains details for a policy. Policies define what operations a team that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Determines if the specified policy is the default for the team.</p>
   * @public
   */
  DefaultVersion: number | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>Name of the policy.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>Policy</code> objects. Contains a list of policies that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  Policies?: Policy[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * <p>Contains details for the version of a policy. Policies define what operations a team that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export interface PolicyVersionSummary {
  /**
   * <p>Amazon Resource Name (ARN) for the team.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the policy.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>Version ID for the policy.</p>
   * @public
   */
  VersionId: number | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>Determines if the specified policy is the default for the team.</p>
   * @public
   */
  IsDefault: boolean | undefined;

  /**
   * <p>Name of the policy</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Status for the policy. For example, if the policy is <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_attach-policy.html">attachable</a> or <a href="https://docs.aws.amazon.com/access_policies_managed-deprecated.html">deprecated</a>.</p>
   * @public
   */
  Status: PolicyStatus | undefined;

  /**
   * <p>Timestamp when the policy was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp when the policy was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>PolicyVersionSummary</code> objects. Contains details for the version of the policies that define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
   * @public
   */
  PolicyVersions?: PolicyVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains details about a policy for a resource.</p>
 * @public
 */
export interface ListResourcePoliciesResponseResourcePolicy {
  /**
   * <p>Amazon Resource Name (ARN) for policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  PolicyType?: PolicyType | undefined;

  /**
   * <p>Name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>ListResourcePoliciesResponseResourcePolicy</code> objects. Contains details about the policy for the resource.</p>
   * @public
   */
  ResourcePolicies?: ListResourcePoliciesResponseResourcePolicy[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CancelSessionRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the session.</p>
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
   * <p>Amazon Resource Name (ARN) for the session.</p>
   * @public
   */
  SessionArn: string | undefined;
}

/**
 * <p>Contains details for an approver response in an approval session.</p>
 * @public
 */
export interface GetSessionResponseApproverResponse {
  /**
   * <p>ID for the approver.</p>
   * @public
   */
  ApproverId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the identity source. The identity source manages the user authentication for approvers.</p>
   * @public
   */
  IdentitySourceArn?: string | undefined;

  /**
   * <p>ID for the identity source. The identity source manages the user authentication for approvers.</p>
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * <p>Response to the operation request.</p>
   * @public
   */
  Response?: SessionResponse | undefined;

  /**
   * <p>Timestamp when a approver responded to the operation request.</p>
   * @public
   */
  ResponseTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>Amazon Resource Name (ARN) for the session.</p>
   * @public
   */
  SessionArn?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the approval team.</p>
   * @public
   */
  ApprovalTeamArn?: string | undefined;

  /**
   * <p>Name of the approval team.</p>
   * @public
   */
  ApprovalTeamName?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the protected operation.</p>
   * @public
   */
  ProtectedResourceArn?: string | undefined;

  /**
   * <p>An <code>ApprovalStrategyResponse</code> object. Contains details for how the team grants approval</p>
   * @public
   */
  ApprovalStrategy?: ApprovalStrategyResponse | undefined;

  /**
   * <p>Total number of approvers in the session.</p>
   * @public
   */
  NumberOfApprovers?: number | undefined;

  /**
   * <p>Timestamp when the session was initiated.</p>
   * @public
   */
  InitiationTime?: Date | undefined;

  /**
   * <p>Timestamp when the session will expire.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>Timestamp when the session completed.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>Description for the session.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Metadata for the session.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>Status for the session. For example, if the team has approved the requested operation.</p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>Status code of the session.</p>
   * @public
   */
  StatusCode?: SessionStatusCode | undefined;

  /**
   * <p>Message describing the status for session.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Status for the protected operation. For example, if the operation is <code>PENDING</code>.</p>
   * @public
   */
  ExecutionStatus?: SessionExecutionStatus | undefined;

  /**
   * <p>Name of the protected operation.</p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">Service principal</a> for the service associated with the protected operation.</p>
   * @public
   */
  RequesterServicePrincipal?: string | undefined;

  /**
   * <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-request">IAM principal</a> that made the operation request.</p>
   * @public
   */
  RequesterPrincipalArn?: string | undefined;

  /**
   * <p>ID for the account that made the operation request.</p>
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * <p>Amazon Web Services Region where the operation request originated.</p>
   * @public
   */
  RequesterRegion?: string | undefined;

  /**
   * <p>Message from the account that made the operation request</p>
   * @public
   */
  RequesterComment?: string | undefined;

  /**
   * <p>Strategy for executing the protected operation. <code>AUTO_COMPLETION_UPON_APPROVAL</code> means the operation is automatically executed using the requester's permissions, if approved.</p>
   * @public
   */
  ActionCompletionStrategy?: ActionCompletionStrategy | undefined;

  /**
   * <p>An array of <code>GetSessionResponseApproverResponse</code> objects. Contains details for approver responses in the session.</p>
   * @public
   */
  ApproverResponses?: GetSessionResponseApproverResponse[] | undefined;
}

/**
 * <p>Contains the filter to apply to requests. You can specify up to 10 filters for a request.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Name of the filter to use.</p> <note> <p> <b>Supported filters</b> </p> <p>The supported filters for <a>ListSessions</a> are: <code>ActionName</code>, <code>SessionStatus</code>, and <code>InitationTime</code>.</p> </note>
   * @public
   */
  FieldName?: FilterField | undefined;

  /**
   * <p>Operator to use for filtering.</p> <ul> <li> <p> <code>EQ</code>: Equal to the specified value</p> </li> <li> <p> <code>NE</code>: Not equal to the specified value</p> </li> <li> <p> <code>GT</code>: Greater than the specified value</p> </li> <li> <p> <code>LT</code>: Less than the specified value</p> </li> <li> <p> <code>GTE</code>: Greater than or equal to the specified value</p> </li> <li> <p> <code>LTE</code>: Less than or equal to the specified value</p> </li> <li> <p> <code>CONTAINS</code>: Contains the specified value</p> </li> <li> <p> <code>NOT_CONTAINS</code>: Does not contain the specified value</p> </li> <li> <p> <code>BETWEEN</code>: Between two values, inclusive of the specified values.</p> </li> </ul> <note> <p> <b>Supported operators for each filter</b>:</p> <ul> <li> <p> <code>ActionName</code>: <code>EQ</code> | <code>NE</code> | <code>CONTAINS</code> | <code>NOT_CONTAINS</code> </p> </li> <li> <p> <code>SessionStatus</code>: <code>EQ</code> | <code>NE</code> </p> </li> <li> <p> <code>InitiationTime</code>: <code>GT</code> | <code>LT</code> | <code>GTE</code> | <code>LTE</code> | <code>BETWEEN</code> </p> </li> </ul> </note>
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * <p>Value to use for filtering. For the <code>BETWEEN</code> operator, specify values in the format <code>a AND b</code> (<code>AND</code> is case-insensitive).</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the approval team.</p>
   * @public
   */
  ApprovalTeamArn: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>Filter</code> objects. Contains the filter to apply when listing sessions.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains details for an approval session. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-health.html">Session</a> in the <i>Multi-party approval User Guide</i> </p>
 * @public
 */
export interface ListSessionsResponseSession {
  /**
   * <p>Amazon Resource Name (ARN) for the session.</p>
   * @public
   */
  SessionArn?: string | undefined;

  /**
   * <p>Name of the approval team.</p>
   * @public
   */
  ApprovalTeamName?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the approval team.</p>
   * @public
   */
  ApprovalTeamArn?: string | undefined;

  /**
   * <p>Timestamp when the session was initiated.</p>
   * @public
   */
  InitiationTime?: Date | undefined;

  /**
   * <p>Timestamp when the session was expire.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>Timestamp when the session was completed.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>Description for the team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Name of the protected operation.</p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the protected operation.</p>
   * @public
   */
  ProtectedResourceArn?: string | undefined;

  /**
   * <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">Service principal</a> for the service associated with the protected operation.</p>
   * @public
   */
  RequesterServicePrincipal?: string | undefined;

  /**
   * <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-request">IAM principal</a> that made the operation request.</p>
   * @public
   */
  RequesterPrincipalArn?: string | undefined;

  /**
   * <p>Amazon Web Services Region where the operation request originated.</p>
   * @public
   */
  RequesterRegion?: string | undefined;

  /**
   * <p>ID for the account that made the operation request.</p>
   * @public
   */
  RequesterAccountId?: string | undefined;

  /**
   * <p>Status for the protected operation. For example, if the operation is <code>PENDING</code>.</p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>Status code of the session.</p>
   * @public
   */
  StatusCode?: SessionStatusCode | undefined;

  /**
   * <p>Message describing the status for session.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Strategy for executing the protected operation. <code>AUTO_COMPLETION_UPON_APPROVAL</code> means the operation is executed automatically using the requester's permissions, if approved.</p>
   * @public
   */
  ActionCompletionStrategy?: ActionCompletionStrategy | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a next call to the operation to get more output. You can repeat this until the <code>NextToken</code> response element returns <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>ListSessionsResponseSession</code> objects. Contains details for the sessions.</p>
   * @public
   */
  Sessions?: ListSessionsResponseSession[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the resource you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags that you have added to the specified resource.</p>
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
   * <p>Amazon Resource Name (ARN) for the resource you want to untag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Array of tag key-value pairs that you want to untag.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
