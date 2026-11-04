// smithy-typescript generated code
import type {
  AccessAdvisorUsageGranularityType,
  AssertionEncryptionModeType,
  AssignmentStatusType,
  AttachmentType,
  ContextKeyTypeEnum,
  DeletionTaskStatusType,
  EncodingType,
  EntityType,
  FeatureType,
  GlobalEndpointTokenVersion,
  JobStatusType,
  ManagedByTypeType,
  ParameterTypeType,
  PermissionCheckResultType,
  PermissionCheckStatusType,
  PermissionsBoundaryAttachmentType,
  PolicyEvaluationDecisionType,
  PolicyIdentifierPolicyType,
  PolicyOwnerEntityType,
  PolicyParameterTypeEnum,
  PolicyScopeType,
  PolicySourceType,
  PolicyType,
  PolicyUsageType,
  ReportFormatType,
  ReportStateType,
  SortKeyType,
  StateType,
  StatusType,
  SummaryKeyType,
  SummaryStateType,
} from "./enums";

/**
 * @public
 */
export interface AcceptDelegationRequestRequest {
  /**
   * The unique identifier of the delegation request to accept.
   *
   * @public
   */
  DelegationRequestId: string | undefined;
}

/**
 * An object that contains details about when a principal in the reported Organizations entity last attempted to access an Amazon Web Services service. A principal can be an IAM user, an IAM role, or the Amazon Web Services account root user within the reported Organizations entity.
 *
 * This data type is a response element in the [GetOrganizationsAccessReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html) operation.
 *
 * @public
 */
export interface AccessDetail {
  /**
   * The name of the service in which access was attempted.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The namespace of the service in which access was attempted.
   *
   * To learn the service namespace of a service, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *Service Authorization Reference*. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, `(service prefix: a4b)`. For more information about service namespaces, see [Amazon Web Services service namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * The Region where the last service access attempt occurred.
   *
   * This field is null if no principals in the reported Organizations entity attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The path of the Organizations entity (root, organizational unit, or account) from which an authenticated principal last attempted to access the service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no principals (IAM users, IAM roles, or root user) in the reported Organizations entity attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  EntityPath?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when an authenticated principal most recently attempted to access the service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no principals in the reported Organizations entity attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAuthenticatedTime?: Date | undefined;

  /**
   * The number of accounts with authenticated principals (root user, IAM users, and IAM roles) that attempted to access the service in the tracking period.
   *
   * @public
   */
  TotalAuthenticatedEntities?: number | undefined;
}

/**
 * Contains information about an Amazon Web Services access key.
 *
 * This data type is used as a response element in the [CreateAccessKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html) and [ListAccessKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html) operations.
 *
 * > **Note:** The `SecretAccessKey` value is returned only in response to [CreateAccessKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html). You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.
 *
 * @public
 */
export interface AccessKey {
  /**
   * The name of the IAM user that the access key is associated with.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID for this access key.
   *
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * The status of the access key. `Active` means that the key is valid for API calls, while `Inactive` means it is not.
   *
   * @public
   */
  Status: StatusType | undefined;

  /**
   * The secret key used to sign requests.
   *
   * @public
   */
  SecretAccessKey: string | undefined;

  /**
   * The date when the access key was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.
 *
 * This data type is used as a response element in the [GetAccessKeyLastUsed](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html) operation.
 *
 * @public
 */
export interface AccessKeyLastUsed {
  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the access key was most recently used. This field is null in the following situations:
   *
   * - The user does not have an access key.
   * - An access key exists but has not been used since IAM began tracking this information.
   * - There is no sign-in data associated with the user.
   *
   * @public
   */
  LastUsedDate?: Date | undefined;

  /**
   * The name of the Amazon Web Services service with which this access key was most recently used. The value of this field is "N/A" in the following situations:
   *
   * - The user does not have an access key.
   * - An access key exists but has not been used since IAM started tracking this information.
   * - There is no sign-in data associated with the user.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The Amazon Web Services Region where this access key was most recently used. The value for this field is "N/A" in the following situations:
   *
   * - The user does not have an access key.
   * - An access key exists but has not been used since IAM began tracking this information.
   * - There is no sign-in data associated with the user.
   *
   * For more information about Amazon Web Services Regions, see [Regions and endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * Contains information about an Amazon Web Services access key, without its secret key.
 *
 * This data type is used as a response element in the [ListAccessKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html) operation.
 *
 * @public
 */
export interface AccessKeyMetadata {
  /**
   * The name of the IAM user that the key is associated with.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The ID for this access key.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The status of the access key. `Active` means that the key is valid for API calls; `Inactive` means it is not.
   *
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * The date when the access key was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * Contains the list of replacement values for a single template parameter used when creating a role from a role template.
 *
 * @public
 */
export interface ReplacementValueEntry {
  /**
   * The list of replacement values for the template parameter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface AcquireRoleRequest {
  /**
   * The Amazon Resource Name (ARN) of the role template to create the role from.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The minor version of the role template to use. If you do not specify a minor version, the service uses the template's default minor version.
   *
   * @public
   */
  TemplateMinorVersion?: number | undefined;

  /**
   * A map of values to substitute for the parameters that are defined in the role template version. Each key is a parameter name from the template, and each value is a structure that contains the replacement values for that parameter.
   *
   * @public
   */
  ReplacementValues?: Record<string, ReplacementValueEntry> | undefined;
}

/**
 * Contains information about an attached permissions boundary.
 *
 * An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.
 *
 * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface AttachedPermissionsBoundary {
  /**
   * The permissions boundary usage type that indicates what type of IAM resource is used as the permissions boundary for an entity. This data type can only have a value of `Policy`.
   *
   * @public
   */
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | undefined;

  /**
   * The ARN of the policy used to set the permissions boundary for the user or role.
   *
   * @public
   */
  PermissionsBoundaryArn?: string | undefined;
}

/**
 * Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see [Regions where data is tracked](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period) in the *IAM user Guide*.
 *
 * This data type is returned as a response element in the [GetRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html) and [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operations.
 *
 * @public
 */
export interface RoleLastUsed {
  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601) that the role was last used.
   *
   * This field is null if the role has not been used within the IAM tracking period. For more information about the tracking period, see [Regions where data is tracked](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period) in the *IAM User Guide*.
   *
   * @public
   */
  LastUsedDate?: Date | undefined;

  /**
   * The name of the Amazon Web Services Region in which the role was last used.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Contains information about the role template that a role was created from.
 *
 * @public
 */
export interface SourceRoleTemplate {
  /**
   * The Amazon Resource Name (ARN) of the role template that the role was created from.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The minor version of the role template that was used to create the role.
   *
   * @public
   */
  TemplateMinorVersion: number | undefined;
}

/**
 * A structure that represents user-provided metadata that can be associated with an IAM resource. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key name that can be used to look up or retrieve the associated value. For example, `Department` or `Cost Center` are common choices.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with this tag. For example, tags with a key name of `Department` could have values such as `Human Resources`, `Accounting`, and `Support`. Tags with a key name of `Cost Center` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
 *
 * @public
 */
export interface Role {
  /**
   * The path to the role. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The friendly name that identifies the role.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The stable and unique string identifying the role. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  RoleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and how to use them in policies, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide* guide.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the role was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The policy that grants an entity permission to assume the role.
   *
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * A description of the role that you provide.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The maximum session duration (in seconds) for the specified role. Anyone who uses the CLI, or API to assume the role can specify the duration using the optional `DurationSeconds` API parameter or `duration-seconds` CLI parameter.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * The ARN of the policy used to set the permissions boundary for the role.
   *
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * A list of tags that are attached to the role. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see [Regions where data is tracked](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period) in the *IAM user Guide*.
   *
   * @public
   */
  RoleLastUsed?: RoleLastUsed | undefined;

  /**
   * Contains information about the role template that this role was created from. This member is present only for roles created with [AcquireRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html).
   *
   * @public
   */
  SourceRoleTemplate?: SourceRoleTemplate | undefined;
}

/**
 * @public
 */
export interface AcquireRoleResponse {
  /**
   * A structure that contains details about the IAM role that was created.
   *
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface AddClientIDToOpenIDConnectProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to add the client ID to. You can get a list of OIDC provider ARNs by using the [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) operation.
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * The client ID (also known as audience) to add to the IAM OpenID Connect provider resource.
   *
   * @public
   */
  ClientID: string | undefined;
}

/**
 * @public
 */
export interface AddRoleToInstanceProfileRequest {
  /**
   * The name of the instance profile to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * The name of the role to add.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface AddUserToGroupRequest {
  /**
   * The name of the group to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name of the user to add.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface AssociateDelegationRequestRequest {
  /**
   * The unique identifier of the delegation request to associate.
   *
   * @public
   */
  DelegationRequestId: string | undefined;
}

/**
 * Contains information about an attached policy.
 *
 * An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the [ListAttachedGroupPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html), [ListAttachedRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html), [ListAttachedUserPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html), and [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operations.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface AttachedPolicy {
  /**
   * The friendly name of the attached policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface AttachGroupPolicyRequest {
  /**
   * The name (friendly name, not ARN) of the group to attach the policy to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to attach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AttachRolePolicyRequest {
  /**
   * The name (friendly name, not ARN) of the role to attach the policy to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to attach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AttachUserPolicyRequest {
  /**
   * The name (friendly name, not ARN) of the IAM user to attach the policy to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to attach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface ChangePasswordRequest {
  /**
   * The IAM user's current password.
   *
   * @public
   */
  OldPassword: string | undefined;

  /**
   * The new password. The new password must conform to the Amazon Web Services account's password policy, if one exists.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (`\u0020`) through the end of the ASCII character range (`\u00FF`). You can also include the tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.
   *
   * @public
   */
  NewPassword: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessKeyRequest {
  /**
   * The name of the IAM user that the new key will belong to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * Contains the response to a successful [CreateAccessKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html) request.
 *
 * @public
 */
export interface CreateAccessKeyResponse {
  /**
   * A structure with details about the access key.
   *
   * @public
   */
  AccessKey: AccessKey | undefined;
}

/**
 * @public
 */
export interface CreateAccountAliasRequest {
  /**
   * The account alias to create.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.
   *
   * @public
   */
  AccountAlias: string | undefined;
}

/**
 * Contains information about a policy parameter used to customize delegated permissions.
 *
 * @public
 */
export interface PolicyParameter {
  /**
   * The name of the policy parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The allowed values for the policy parameter.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The data type of the policy parameter value.
   *
   * @public
   */
  Type?: PolicyParameterTypeEnum | undefined;
}

/**
 * Contains information about the permissions being delegated in a delegation request.
 *
 * @public
 */
export interface DelegationPermission {
  /**
   * This ARN maps to a pre-registered policy content for this partner. See the partner onboarding documentation to understand how to create a delegation template.
   *
   * @public
   */
  PolicyTemplateArn?: string | undefined;

  /**
   * A list of policy parameters that define the scope and constraints of the delegated permissions.
   *
   * @public
   */
  Parameters?: PolicyParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateDelegationRequestRequest {
  /**
   * The Amazon Web Services account ID this delegation request is targeted to.
   *
   * If the account ID is not known, this parameter can be omitted, resulting in a request that can be associated by any account. If the account ID passed, then the created delegation request can only be associated with an identity of that target account.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * A description of the delegation request.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The permissions to be delegated in this delegation request.
   *
   * @public
   */
  Permissions: DelegationPermission | undefined;

  /**
   * A message explaining the reason for the delegation request.
   *
   * Requesters can utilize this field to add a custom note to the delegation request. This field is different from the description such that this is to be utilized for a custom messaging on a case-by-case basis.
   *
   * For example, if the current delegation request is in response to a previous request being rejected, this explanation can be added to the request via this field.
   *
   * @public
   */
  RequestMessage?: string | undefined;

  /**
   * The workflow ID associated with the requestor.
   *
   * This is the unique identifier on the partner side that can be used to track the progress of the request.
   *
   * IAM maintains a uniqueness check on this workflow id for each request - if a workflow id for an existing request is passed, this API call will fail.
   *
   * @public
   */
  RequestorWorkflowId: string | undefined;

  /**
   * The URL to redirect to after the delegation request is processed.
   *
   * This URL is used by the IAM console to show a link to the customer to re-load the partner workflow.
   *
   * @public
   */
  RedirectUrl?: string | undefined;

  /**
   * The notification channel for updates about the delegation request.
   *
   * At this time,only SNS topic ARNs are accepted for notification. This topic ARN must have a resource policy granting `SNS:Publish` permission to the IAM service principal (`iam.amazonaws.com`). See [partner onboarding documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation-partner-guide.html) for more details.
   *
   * @public
   */
  NotificationChannel: string | undefined;

  /**
   * The duration for which the delegated session should remain active, in seconds.
   *
   * The active time window for the session starts when the customer calls the [SendDelegationToken](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SendDelegationToken.html) API.
   *
   * @public
   */
  SessionDuration: number | undefined;

  /**
   * Specifies whether the delegation token should only be sent by the owner.
   *
   * This flag prevents any party other than the owner from calling `SendDelegationToken` API for this delegation request. This behavior becomes useful when the delegation request owner needs to be present for subsequent partner interactions, but the delegation request was sent to a more privileged user for approval due to the owner lacking sufficient delegation permissions.
   *
   * @public
   */
  OnlySendByOwner?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDelegationRequestResponse {
  /**
   * A deep link URL to the Amazon Web Services Management Console for managing the delegation request.
   *
   * For a console based workflow, partners should redirect the customer to this URL. If the customer is not logged in to any Amazon Web Services account, the Amazon Web Services workflow will automatically direct the customer to log in and then display the delegation request approval page.
   *
   * @public
   */
  ConsoleDeepLink?: string | undefined;

  /**
   * The unique identifier for the created delegation request.
   *
   * @public
   */
  DelegationRequestId?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The path to the group. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The name of the group to create. Do not include the path in this value.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * @public
   */
  GroupName: string | undefined;
}

/**
 * Contains information about an IAM group entity.
 *
 * This data type is used as a response element in the following operations:
 *
 * - [CreateGroup](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html)
 * - [GetGroup](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html)
 * - [ListGroups](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html)
 *
 * @public
 */
export interface Group {
  /**
   * The path to the group. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The friendly name that identifies the group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The stable and unique string identifying the group. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) specifying the group. For more information about ARNs and how to use them in policies, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the group was created.
   *
   * @public
   */
  CreateDate: Date | undefined;
}

/**
 * Contains the response to a successful [CreateGroup](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html) request.
 *
 * @public
 */
export interface CreateGroupResponse {
  /**
   * A structure containing details about the new group.
   *
   * @public
   */
  Group: Group | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileRequest {
  /**
   * The name of the instance profile to create.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * The path to the instance profile. For more information about paths, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * A list of tags that you want to attach to the newly created IAM instance profile. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about an instance profile.
 *
 * This data type is used as a response element in the following operations:
 *
 * - [CreateInstanceProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html)
 * - [GetInstanceProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html)
 * - [ListInstanceProfiles](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html)
 * - [ListInstanceProfilesForRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html)
 *
 * @public
 */
export interface InstanceProfile {
  /**
   * The path to the instance profile. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The name identifying the instance profile.
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * The stable and unique string identifying the instance profile. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  InstanceProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) specifying the instance profile. For more information about ARNs and how to use them in policies, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date when the instance profile was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The role associated with the instance profile.
   *
   * @public
   */
  Roles: Role[] | undefined;

  /**
   * A list of tags that are attached to the instance profile. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreateInstanceProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html) request.
 *
 * @public
 */
export interface CreateInstanceProfileResponse {
  /**
   * A structure containing details about the new instance profile.
   *
   * @public
   */
  InstanceProfile: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface CreateLoginProfileRequest {
  /**
   * The name of the IAM user to create a password for. The user must already exist.
   *
   * This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an [AssumeRoot](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html) session to omit the user name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The new password for the user.
   *
   * This parameter must be omitted when you make the request with an [AssumeRoot](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html) session. It is required in all other cases.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (`\u0020`) through the end of the ASCII character range (`\u00FF`). You can also include the tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * Specifies whether the user is required to set a new password on next sign-in.
   *
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * Contains the user name and password create date for a user.
 *
 * This data type is used as a response element in the [CreateLoginProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html) and [GetLoginProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html) operations.
 *
 * @public
 */
export interface LoginProfile {
  /**
   * The name of the user, which can be used for signing in to the Amazon Web Services Management Console.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The date when the password for the user was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * Specifies whether the user is required to set a new password on next sign-in.
   *
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * Contains the response to a successful [CreateLoginProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html) request.
 *
 * @public
 */
export interface CreateLoginProfileResponse {
  /**
   * A structure containing the user name and password create date.
   *
   * @public
   */
  LoginProfile: LoginProfile | undefined;
}

/**
 * @public
 */
export interface CreateOpenIDConnectProviderRequest {
  /**
   * The URL of the identity provider. The URL must begin with `https://` and should correspond to the `iss` claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like `https://server.example.org` or `https://example.com`. The URL should not contain a port number.
   *
   * You cannot register the same provider multiple times in a single Amazon Web Services account. If you try to submit a URL that has already been used for an OpenID Connect provider in the Amazon Web Services account, you will get an error.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * Provides a list of client IDs, also known as audiences. When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. This is the value that's sent as the `client_id` parameter on OAuth requests.
   *
   * You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider.
   *
   * There is no defined format for a client ID. The `CreateOpenIDConnectProviderRequest` operation accepts client IDs up to 255 characters long.
   *
   * @public
   */
  ClientIDList?: string[] | undefined;

  /**
   * A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificates. Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates.
   *
   * This parameter is optional. If it is not included, IAM will retrieve and use the top intermediate certificate authority (CA) thumbprint of the OpenID Connect identity provider server certificate.
   *
   * The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string.
   *
   * For example, assume that the OIDC provider is `server.example.com` and the provider stores its keys at https://keys.server.example.com/openid-connect. In that case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by `https://keys.server.example.com.`
   *
   * For more information about obtaining the OIDC provider thumbprint, see [Obtaining the thumbprint for an OpenID Connect provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html) in the *IAM user Guide*.
   *
   * > **Note:** If your OIDC provider's discovery endpoint and JWKS endpoint (`jwks_uri`) use different certificates or hosts, include the thumbprints for both endpoints in this list.
   *
   * @public
   */
  ThumbprintList?: string[] | undefined;

  /**
   * A list of tags that you want to attach to the new IAM OpenID Connect (OIDC) provider. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html) request.
 *
 * @public
 */
export interface CreateOpenIDConnectProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created. For more information, see [OpenIDConnectProviderListEntry](https://docs.aws.amazon.com/IAM/latest/APIReference/API_OpenIDConnectProviderListEntry.html).
   *
   * @public
   */
  OpenIDConnectProviderArn?: string | undefined;

  /**
   * A list of tags that are attached to the new IAM OIDC provider. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * The friendly name of the policy.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The path for the policy.
   *
   * For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * > **Note:** You cannot use an asterisk (*) in the path name.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The JSON policy document that you want to use as the content for the new policy.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * A friendly description of the policy.
   *
   * Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
   *
   * The policy description is immutable. After a value is assigned, it cannot be changed.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of tags that you want to attach to the new IAM customer managed policy. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about a managed policy.
 *
 * This data type is used as a response element in the [CreatePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html), [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html), and [ListPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html) operations.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface Policy {
  /**
   * The friendly name (not ARN) identifying the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The stable and unique string identifying the policy.
   *
   * For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The path to the policy.
   *
   * For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The identifier for the version of the policy that is set as the default version.
   *
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * The number of entities (users, groups, and roles) that the policy is attached to.
   *
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * The number of entities (users and roles) for which the policy is used to set the permissions boundary.
   *
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * Specifies whether the policy can be attached to an IAM user, group, or role.
   *
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * A friendly description of the policy.
   *
   * This element is included in the response to the [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html) operation. It is not included in the response to the [ListPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html) operation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the policy was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the policy was last updated.
   *
   * When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.
   *
   * @public
   */
  UpdateDate?: Date | undefined;

  /**
   * A list of tags that are attached to the instance profile. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreatePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html) request.
 *
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * A structure containing details about the new policy.
   *
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface CreatePolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new version.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The JSON policy document that you want to use as the content for this new version of the policy.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * Specifies whether to set this version as the policy's default version.
   *
   * When this parameter is `true`, the new policy version becomes the operative version. That is, it becomes the version that is in effect for the IAM users, groups, and roles that the policy is attached to.
   *
   * For more information about managed policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
   *
   * @public
   */
  SetAsDefault?: boolean | undefined;
}

/**
 * Contains information about a version of a managed policy.
 *
 * This data type is used as a response element in the [CreatePolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html), [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html), [ListPolicyVersions](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html), and [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operations.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface PolicyVersion {
  /**
   * The policy document.
   *
   * The policy document is returned in the response to the [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html) and [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operations. It is not returned in the response to the [CreatePolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html) or [ListPolicyVersions](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html) operations.
   *
   * The policy document returned in this structure is URL-encoded compliant with [RFC 3986](https://tools.ietf.org/html/rfc3986). You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the `decode` method of the `java.net.URLDecoder` utility class in the Java SDK. Other languages and SDKs provide similar functionality.
   *
   * @public
   */
  Document?: string | undefined;

  /**
   * The identifier for the policy version.
   *
   * Policy version identifiers always begin with `v` (always lowercase). When a policy is created, the first policy version is `v1`.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Specifies whether the policy version is set as the policy's default version.
   *
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the policy version was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * Contains the response to a successful [CreatePolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html) request.
 *
 * @public
 */
export interface CreatePolicyVersionResponse {
  /**
   * A structure containing details about the new policy version.
   *
   * @public
   */
  PolicyVersion?: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface CreateRoleRequest {
  /**
   * The path to the role. For more information about paths, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The name of the role to create.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The trust relationship policy document that grants an entity permission to assume the role.
   *
   * In IAM, you must provide a JSON policy that has been converted to a string. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * Upon success, the response includes the same trust policy in JSON format.
   *
   * @public
   */
  AssumeRolePolicyDocument: string | undefined;

  /**
   * A description of the role.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.
   *
   * Anyone who assumes the role from the CLI or API can use the `DurationSeconds` API parameter or the `duration-seconds` CLI parameter to request a longer session. The `MaxSessionDuration` setting determines the maximum duration that can be requested using the `DurationSeconds` parameter. If users don't specify a value for the `DurationSeconds` parameter, their security credentials are valid for one hour by default. This applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * The ARN of the managed policy that is used to set the permissions boundary for the role.
   *
   * A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: string | undefined;

  /**
   * A list of tags that you want to attach to the new role. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) request.
 *
 * @public
 */
export interface CreateRoleResponse {
  /**
   * A structure containing details about the new role.
   *
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateSAMLProviderRequest {
  /**
   * An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP.
   *
   * For more information, see [About SAML 2.0-based federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html) in the *IAM User Guide*
   *
   * @public
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * The name of the provider to create.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of tags that you want to attach to the new IAM SAML provider. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the encryption setting for the SAML provider.
   *
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * The private key generated from your external identity provider. The private key must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML assertions.
   *
   * @public
   */
  AddPrivateKey?: string | undefined;
}

/**
 * Contains the response to a successful [CreateSAMLProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html) request.
 *
 * @public
 */
export interface CreateSAMLProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.
   *
   * @public
   */
  SAMLProviderArn?: string | undefined;

  /**
   * A list of tags that are attached to the new IAM SAML provider. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceLinkedRoleRequest {
  /**
   * The service principal for the Amazon Web Services service to which this role is attached. You use a string similar to a URL but without the http:// in front. For example: `elasticbeanstalk.amazonaws.com`.
   *
   * Service principals are unique and case-sensitive. To find the exact service principal for your service-linked role, see [Amazon Web Services services that work with IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html) in the *IAM User Guide*. Look for the services that have **Yes** in the **Service-Linked Role** column. Choose the **Yes** link to view the service-linked role documentation for that service.
   *
   * @public
   */
  AWSServiceName: string | undefined;

  /**
   * The description of the role.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different `CustomSuffix` for each request. Otherwise the request fails with a duplicate role name error. For example, you could add `-1` or `-debug` to the suffix.
   *
   * Some services do not support the `CustomSuffix` parameter. If you provide an optional suffix and the operation fails, try the operation again without the suffix.
   *
   * @public
   */
  CustomSuffix?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceLinkedRoleResponse {
  /**
   * A [Role](https://docs.aws.amazon.com/IAM/latest/APIReference/API_Role.html) object that contains details about the newly created role.
   *
   * @public
   */
  Role?: Role | undefined;
}

/**
 * @public
 */
export interface CreateServiceSpecificCredentialRequest {
  /**
   * The name of the IAM user that is to be associated with the credentials. The new service-specific credentials have the same permissions as the associated user except that they can be used only to access the specified service.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The name of the Amazon Web Services service that is to be associated with the credentials. The service you specify here is the only service that can be accessed using these credentials.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The number of days until the service specific credential expires. This field is only valid for services that support long-term API keys and must be a positive integer. When not specified, the credential will not expire.
   *
   * To see which services support long-term API keys, refer to [API keys for Amazon Web Services services](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_api_keys_for_aws_services.html) in the *IAM User Guide*.
   *
   * @public
   */
  CredentialAgeDays?: number | undefined;
}

/**
 * Contains the details of a service-specific credential.
 *
 * @public
 */
export interface ServiceSpecificCredential {
  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the service-specific credential were created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The date and time when the service specific credential expires. This field is only present for Bedrock API keys and CloudWatch Logs API keys that were created with an expiration period.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The name of the service associated with the service-specific credential.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The generated user name for the service-specific credential. This value is generated by combining the IAM user's name combined with the ID number of the Amazon Web Services account, as in `jane-at-123456789012`, for example. This value cannot be configured by the user.
   *
   * @public
   */
  ServiceUserName?: string | undefined;

  /**
   * The generated password for the service-specific credential.
   *
   * @public
   */
  ServicePassword?: string | undefined;

  /**
   * For Bedrock API keys and CloudWatch Logs API keys, this is the public portion of the credential that includes the IAM user name and a suffix containing version and creation information.
   *
   * @public
   */
  ServiceCredentialAlias?: string | undefined;

  /**
   * For Bedrock API keys and CloudWatch Logs API keys, this is the secret portion of the credential that should be used to authenticate API calls. This value is returned only when the credential is created.
   *
   * @public
   */
  ServiceCredentialSecret?: string | undefined;

  /**
   * The unique identifier for the service-specific credential.
   *
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * The name of the IAM user associated with the service-specific credential.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The status of the service-specific credential. `Active` means that the key is valid for API calls, while `Inactive` means it is not.
   *
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface CreateServiceSpecificCredentialResponse {
  /**
   * A structure that contains information about the newly created service-specific credential.
   *
   * > **Important:** This is the only time that the password for this credential set is available. It cannot be recovered later. Instead, you must reset the password with [ResetServiceSpecificCredential](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html).
   *
   * @public
   */
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The path for the user name. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The name of the user to create.
   *
   * IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ARN of the managed policy that is used to set the permissions boundary for the user.
   *
   * A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: string | undefined;

  /**
   * A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about an IAM user entity.
 *
 * This data type is used as a response element in the following operations:
 *
 * - [CreateUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html)
 * - [GetUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html)
 * - [ListUsers](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html)
 *
 * @public
 */
export interface User {
  /**
   * The path to the user. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * The ARN of the policy used to set the permissions boundary for the user.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The friendly name identifying the user.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The stable and unique string identifying the user. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the user was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the user's password was last used to sign in to an Amazon Web Services website. For a list of Amazon Web Services websites that capture a user's last sign-in time, see the [Credential reports](https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html) topic in the *IAM User Guide*. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value), then it indicates that they never signed in with a password. This can be because:
   *
   * - The user never had a password.
   * - A password exists but has not been used since IAM started tracking this information on October 20, 2014.
   *
   * A null value does not mean that the user *never* had a password. Also, if the user does not currently have a password but had one in the past, then this field contains the date and time the most recent password was used.
   *
   * This value is returned only in the [GetUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html) and [ListUsers](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html) operations.
   *
   * @public
   */
  PasswordLastUsed?: Date | undefined;

  /**
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * A list of tags that are associated with the user. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreateUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html) request.
 *
 * @public
 */
export interface CreateUserResponse {
  /**
   * A structure with details about the new IAM user.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface CreateVirtualMFADeviceRequest {
  /**
   * The path for the virtual MFA device. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The name of the virtual MFA device, which must be unique. Use with path to uniquely identify a virtual MFA device.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  VirtualMFADeviceName: string | undefined;

  /**
   * A list of tags that you want to attach to the new IAM virtual MFA device. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * > **Note:** If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about a virtual MFA device.
 *
 * @public
 */
export interface VirtualMFADevice {
  /**
   * The serial number associated with `VirtualMFADevice`.
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * The base32 seed defined as specified in [RFC3548](https://tools.ietf.org/html/rfc3548.txt). The `Base32StringSeed` is base32-encoded.
   *
   * @public
   */
  Base32StringSeed?: Uint8Array | undefined;

  /**
   * A QR code PNG image that encodes `otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String` where `$virtualMFADeviceName` is one of the create call arguments. `AccountName` is the user name if set (otherwise, the account ID otherwise), and `Base32String` is the seed in base32 format. The `Base32String` value is base64-encoded.
   *
   * @public
   */
  QRCodePNG?: Uint8Array | undefined;

  /**
   * The IAM user associated with this virtual MFA device.
   *
   * @public
   */
  User?: User | undefined;

  /**
   * The date and time on which the virtual MFA device was enabled.
   *
   * @public
   */
  EnableDate?: Date | undefined;

  /**
   * A list of tags that are attached to the virtual MFA device. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [CreateVirtualMFADevice](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html) request.
 *
 * @public
 */
export interface CreateVirtualMFADeviceResponse {
  /**
   * A structure containing details about the new virtual MFA device.
   *
   * @public
   */
  VirtualMFADevice: VirtualMFADevice | undefined;
}

/**
 * @public
 */
export interface DeactivateMFADeviceRequest {
  /**
   * The name of the user whose MFA device you want to deactivate.
   *
   * This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an [AssumeRoot](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html) session to omit the user name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
   *
   * @public
   */
  SerialNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessKeyRequest {
  /**
   * The name of the user whose access key pair you want to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The access key ID for the access key ID and secret access key you want to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  AccessKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAliasRequest {
  /**
   * The name of the account alias to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.
   *
   * @public
   */
  AccountAlias: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The name of the IAM group to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupPolicyRequest {
  /**
   * The name (friendly name, not ARN) identifying the group that the policy is embedded in.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name identifying the policy document to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileRequest {
  /**
   * The name of the instance profile to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoginProfileRequest {
  /**
   * The name of the user whose password you want to delete.
   *
   * This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an [AssumeRoot](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html) session to omit the user name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpenIDConnectProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to delete. You can get a list of OpenID Connect provider resource ARNs by using the [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) operation.
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to delete.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a version.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The policy version to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits.
   *
   * For more information about managed policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleRequest {
  /**
   * The name of the role to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRolePermissionsBoundaryRequest {
  /**
   * The name (friendly name, not ARN) of the IAM role from which you want to remove the permissions boundary.
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRolePolicyRequest {
  /**
   * The name (friendly name, not ARN) identifying the role that the policy is embedded in.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The name of the inline policy to delete from the specified IAM role.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSAMLProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the SAML provider to delete.
   *
   * @public
   */
  SAMLProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerCertificateRequest {
  /**
   * The name of the server certificate you want to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedRoleRequest {
  /**
   * The name of the service-linked role to be deleted.
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedRoleResponse {
  /**
   * The deletion task identifier that you can use to check the status of the deletion. This identifier is returned in the format `task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid>`.
   *
   * @public
   */
  DeletionTaskId: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSpecificCredentialRequest {
  /**
   * The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The unique identifier of the service-specific credential. You can get this value by calling [ListServiceSpecificCredentials](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSigningCertificateRequest {
  /**
   * The name of the user the signing certificate belongs to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The ID of the signing certificate to delete.
   *
   * The format of this parameter, as described by its [regex](http://wikipedia.org/wiki/regex) pattern, is a string of characters that can be upper- or lower-cased letters or digits.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSSHPublicKeyRequest {
  /**
   * The name of the IAM user associated with the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The unique identifier for the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  SSHPublicKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The name of the user to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPermissionsBoundaryRequest {
  /**
   * The name (friendly name, not ARN) of the IAM user from which you want to remove the permissions boundary.
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPolicyRequest {
  /**
   * The name (friendly name, not ARN) identifying the user that the policy is embedded in.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The name identifying the policy document to delete.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualMFADeviceRequest {
  /**
   * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
   *
   * @public
   */
  SerialNumber: string | undefined;
}

/**
 * @public
 */
export interface DetachGroupPolicyRequest {
  /**
   * The name (friendly name, not ARN) of the IAM group to detach the policy from.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to detach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachRolePolicyRequest {
  /**
   * The name (friendly name, not ARN) of the IAM role to detach the policy from.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to detach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachUserPolicyRequest {
  /**
   * The name (friendly name, not ARN) of the IAM user to detach the policy from.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM policy you want to detach.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationsRootCredentialsManagementRequest {}

/**
 * @public
 */
export interface DisableOrganizationsRootCredentialsManagementResponse {
  /**
   * The unique identifier (ID) of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The features enabled for centralized root access for member accounts in your organization.
   *
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationsRootSessionsRequest {}

/**
 * @public
 */
export interface DisableOrganizationsRootSessionsResponse {
  /**
   * The unique identifier (ID) of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The features you have enabled for centralized root access of member accounts in your organization.
   *
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface EnableMFADeviceRequest {
  /**
   * The name of the IAM user for whom you want to enable the MFA device.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * An authentication code emitted by the device.
   *
   * The format for this parameter is a string of six digits.
   *
   * > **Important:** Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can [resync the device](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html).
   *
   * @public
   */
  AuthenticationCode1: string | undefined;

  /**
   * A subsequent authentication code emitted by the device.
   *
   * The format for this parameter is a string of six digits.
   *
   * > **Important:** Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can [resync the device](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html).
   *
   * @public
   */
  AuthenticationCode2: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationsRootCredentialsManagementRequest {}

/**
 * @public
 */
export interface EnableOrganizationsRootCredentialsManagementResponse {
  /**
   * The unique identifier (ID) of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The features you have enabled for centralized root access.
   *
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationsRootSessionsRequest {}

/**
 * @public
 */
export interface EnableOrganizationsRootSessionsResponse {
  /**
   * The unique identifier (ID) of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The features you have enabled for centralized root access.
   *
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface EnableOutboundWebIdentityFederationResponse {
  /**
   * A unique issuer URL for your Amazon Web Services account that hosts the OpenID Connect (OIDC) discovery endpoints at `/.well-known/openid-configuration and /.well-known/jwks.json`. The OpenID Connect (OIDC) discovery endpoints contain verification keys and metadata necessary for token verification.
   *
   * @public
   */
  IssuerIdentifier?: string | undefined;
}

/**
 * Contains the response to a successful [GenerateCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html) request.
 *
 * @public
 */
export interface GenerateCredentialReportResponse {
  /**
   * Information about the state of the credential report.
   *
   * @public
   */
  State?: ReportStateType | undefined;

  /**
   * Information about the credential report.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GenerateOrganizationsAccessReportRequest {
  /**
   * The path of the Organizations entity (root, OU, or account). You can build an entity path using the known structure of your organization. For example, assume that your account ID is `123456789012` and its parent OU ID is `ou-rge0-awsabcde`. The organization root ID is `r-f6g7h8i9j0example` and your organization ID is `o-a1b2c3d4e5`. Your entity path is `o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012`.
   *
   * @public
   */
  EntityPath: string | undefined;

  /**
   * The identifier of the Organizations service control policy (SCP). This parameter is optional.
   *
   * This ID is used to generate information about when an account principal that is limited by the SCP attempted to access an Amazon Web Services service.
   *
   * @public
   */
  OrganizationsPolicyId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateOrganizationsAccessReportResponse {
  /**
   * The job identifier that you can use in the [GetOrganizationsAccessReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html) operation.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateServiceLastAccessedDetailsRequest {
  /**
   * The ARN of the IAM resource (user, group, role, or managed policy) used to generate information about when the resource was last used in an attempt to access an Amazon Web Services service.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The level of detail that you want to generate. You can specify whether you want to generate information about the last attempt to access services or actions. If you specify service-level granularity, this operation generates only service data. If you specify action-level granularity, it generates service and action data. If you don't include this optional parameter, the operation generates service data.
   *
   * @public
   */
  Granularity?: AccessAdvisorUsageGranularityType | undefined;
}

/**
 * @public
 */
export interface GenerateServiceLastAccessedDetailsResponse {
  /**
   * The `JobId` that you can use in the [GetServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html) or [GetServiceLastAccessedDetailsWithEntities](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html) operations. The `JobId` returned by `GenerateServiceLastAccessedDetail` must be used by the same role within a session, or by the same user when used to call `GetServiceLastAccessedDetail`.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessKeyLastUsedRequest {
  /**
   * The identifier of an access key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  AccessKeyId: string | undefined;
}

/**
 * Contains the response to a successful [GetAccessKeyLastUsed](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html) request. It is also returned as a member of the [AccessKeyMetaData](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AccessKeyMetaData.html) structure returned by the [ListAccessKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html) action.
 *
 * @public
 */
export interface GetAccessKeyLastUsedResponse {
  /**
   * The name of the IAM user that owns this access key.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Contains information about the last time the access key was used.
   *
   * @public
   */
  AccessKeyLastUsed?: AccessKeyLastUsed | undefined;
}

/**
 * @public
 */
export interface GetAccountAuthorizationDetailsRequest {
  /**
   * A list of entity types used to filter the results. Only the entities that match the types you specify are included in the output. Use the value `LocalManagedPolicy` to include customer managed policies.
   *
   * The format for this parameter is a comma-separated (if more than one) list of strings. Each string value in the list must be one of the valid values listed below.
   *
   * @public
   */
  Filter?: EntityType[] | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains information about an IAM policy, including the policy document.
 *
 * This data type is used as a response element in the [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operation.
 *
 * @public
 */
export interface PolicyDetail {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The policy document.
   *
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * Contains information about an IAM group, including all of the group's policies.
 *
 * This data type is used as a response element in the [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operation.
 *
 * @public
 */
export interface GroupDetail {
  /**
   * The path to the group. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The friendly name that identifies the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The stable and unique string identifying the group. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the group was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A list of the inline policies embedded in the group.
   *
   * @public
   */
  GroupPolicyList?: PolicyDetail[] | undefined;

  /**
   * A list of the managed policies attached to the group.
   *
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;
}

/**
 * Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.
 *
 * This data type is used as a response element in the [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operation.
 *
 * For more information about managed policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface ManagedPolicyDetail {
  /**
   * The friendly name (not ARN) identifying the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The stable and unique string identifying the policy.
   *
   * For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The path to the policy.
   *
   * For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The identifier for the version of the policy that is set as the default (operative) version.
   *
   * For more information about policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
   *
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * The number of principal entities (users, groups, and roles) that the policy is attached to.
   *
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * The number of entities (users and roles) for which the policy is used as the permissions boundary.
   *
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * Specifies whether the policy can be attached to an IAM user, group, or role.
   *
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * A friendly description of the policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the policy was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the policy was last updated.
   *
   * When a policy has only one version, this field contains the date and time when the policy was created. When a policy has more than one version, this field contains the date and time when the most recent policy version was created.
   *
   * @public
   */
  UpdateDate?: Date | undefined;

  /**
   * A list containing information about the versions of the policy.
   *
   * @public
   */
  PolicyVersionList?: PolicyVersion[] | undefined;
}

/**
 * Contains information about an IAM role, including all of the role's policies.
 *
 * This data type is used as a response element in the [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operation.
 *
 * @public
 */
export interface RoleDetail {
  /**
   * The path to the role. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The friendly name that identifies the role.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The stable and unique string identifying the role. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  RoleId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the role was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The trust policy that grants permission to assume the role.
   *
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * A list of instance profiles that contain this role.
   *
   * @public
   */
  InstanceProfileList?: InstanceProfile[] | undefined;

  /**
   * A list of inline policies embedded in the role. These policies are the role's access (permissions) policies.
   *
   * @public
   */
  RolePolicyList?: PolicyDetail[] | undefined;

  /**
   * A list of managed policies attached to the role. These policies are the role's access (permissions) policies.
   *
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;

  /**
   * The ARN of the policy used to set the permissions boundary for the role.
   *
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * A list of tags that are attached to the role. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see [Regions where data is tracked](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period) in the *IAM User Guide*.
   *
   * @public
   */
  RoleLastUsed?: RoleLastUsed | undefined;
}

/**
 * Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.
 *
 * This data type is used as a response element in the [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) operation.
 *
 * @public
 */
export interface UserDetail {
  /**
   * The path to the user. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The friendly name identifying the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The stable and unique string identifying the user. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the user was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A list of the inline policies embedded in the user.
   *
   * @public
   */
  UserPolicyList?: PolicyDetail[] | undefined;

  /**
   * A list of IAM groups that the user is in.
   *
   * @public
   */
  GroupList?: string[] | undefined;

  /**
   * A list of the managed policies attached to the user.
   *
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;

  /**
   * The ARN of the policy used to set the permissions boundary for the user.
   *
   * For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * A list of tags that are associated with the user. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [GetAccountAuthorizationDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html) request.
 *
 * @public
 */
export interface GetAccountAuthorizationDetailsResponse {
  /**
   * A list containing information about IAM users.
   *
   * @public
   */
  UserDetailList?: UserDetail[] | undefined;

  /**
   * A list containing information about IAM groups.
   *
   * @public
   */
  GroupDetailList?: GroupDetail[] | undefined;

  /**
   * A list containing information about IAM roles.
   *
   * @public
   */
  RoleDetailList?: RoleDetail[] | undefined;

  /**
   * A list containing information about managed policies.
   *
   * @public
   */
  Policies?: ManagedPolicyDetail[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains information about the account password policy.
 *
 * This data type is used as a response element in the [GetAccountPasswordPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html) operation.
 *
 * @public
 */
export interface PasswordPolicy {
  /**
   * Minimum length to require for IAM user passwords.
   *
   * @public
   */
  MinimumPasswordLength?: number | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one of the following symbols:
   *
   * ! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '
   *
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one numeric character (0 to 9).
   *
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one uppercase character (A to Z).
   *
   * @public
   */
  RequireUppercaseCharacters?: boolean | undefined;

  /**
   * Specifies whether IAM user passwords must contain at least one lowercase character (a to z).
   *
   * @public
   */
  RequireLowercaseCharacters?: boolean | undefined;

  /**
   * Specifies whether IAM users are allowed to change their own password. Gives IAM users permissions to `iam:ChangePassword` for only their user and to the `iam:GetAccountPasswordPolicy` action. This option does not attach a permissions policy to each user, rather the permissions are applied at the account-level for all users by IAM.
   *
   * @public
   */
  AllowUsersToChangePassword?: boolean | undefined;

  /**
   * Indicates whether passwords in the account expire. Returns true if `MaxPasswordAge` contains a value greater than 0. Returns false if MaxPasswordAge is 0 or not present.
   *
   * @public
   */
  ExpirePasswords?: boolean | undefined;

  /**
   * The number of days that an IAM user password is valid.
   *
   * @public
   */
  MaxPasswordAge?: number | undefined;

  /**
   * Specifies the number of previous passwords that IAM users are prevented from reusing.
   *
   * @public
   */
  PasswordReusePrevention?: number | undefined;

  /**
   * Specifies whether IAM users are prevented from setting a new password via the Amazon Web Services Management Console after their password has expired. The IAM user cannot access the console until an administrator resets the password. IAM users with `iam:ChangePassword` permission and active access keys can reset their own expired console password using the CLI or API.
   *
   * @public
   */
  HardExpiry?: boolean | undefined;
}

/**
 * Contains the response to a successful [GetAccountPasswordPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html) request.
 *
 * @public
 */
export interface GetAccountPasswordPolicyResponse {
  /**
   * A structure that contains details about the account's password policy.
   *
   * @public
   */
  PasswordPolicy: PasswordPolicy | undefined;
}

/**
 * @public
 */
export interface GetAccountPropertiesRequest {}

/**
 * @public
 */
export interface GetAccountPropertiesResponse {
  /**
   * A map of account property key-value pairs. Keys are in the format `Namespace/PropertyName`.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * Contains the response to a successful [GetAccountSummary](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html) request.
 *
 * @public
 */
export interface GetAccountSummaryResponse {
  /**
   * A set of key–value pairs containing information about IAM entity usage and IAM quotas.
   *
   * @public
   */
  SummaryMap?: Partial<Record<SummaryKeyType, number>> | undefined;
}

/**
 * @public
 */
export interface GetContextKeysForCustomPolicyRequest {
  /**
   * A list of policies for which you want the list of context keys referenced in those policies. Each document is specified as a string containing the complete, valid JSON text of an IAM policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyInputList: string[] | undefined;
}

/**
 * Contains the response to a successful [GetContextKeysForPrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html) or [GetContextKeysForCustomPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html) request.
 *
 * @public
 */
export interface GetContextKeysForPolicyResponse {
  /**
   * The list of context keys that are referenced in the input policies.
   *
   * @public
   */
  ContextKeyNames?: string[] | undefined;
}

/**
 * @public
 */
export interface GetContextKeysForPrincipalPolicyRequest {
  /**
   * The ARN of a user, group, or role whose policies contain the context keys that you want listed. If you specify a user, the list includes context keys that are found in all policies that are attached to the user. The list also includes all groups that the user is a member of. If you pick a group or a role, then it includes only those context keys that are found in policies attached to that entity. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicySourceArn: string | undefined;

  /**
   * An optional list of additional policies for which you want the list of context keys that are referenced.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyInputList?: string[] | undefined;
}

/**
 * Contains the response to a successful [GetCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html) request.
 *
 * @public
 */
export interface GetCredentialReportResponse {
  /**
   * Contains the credential report. The report is Base64-encoded.
   *
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * The format (MIME type) of the credential report.
   *
   * @public
   */
  ReportFormat?: ReportFormatType | undefined;

  /**
   * The date and time when the credential report was created, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601).
   *
   * @public
   */
  GeneratedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDelegationRequestRequest {
  /**
   * The unique identifier of the delegation request to retrieve.
   *
   * @public
   */
  DelegationRequestId: string | undefined;

  /**
   * Specifies whether to perform a permission check for the delegation request.
   *
   * If set to true, the `GetDelegationRequest` API call will start a permission check process. This process calculates whether the caller has sufficient permissions to cover the asks from this delegation request.
   *
   * Setting this parameter to true does not guarantee an answer in the response. See the `PermissionCheckStatus` and the `PermissionCheckResult` response attributes for further details.
   *
   * @public
   */
  DelegationPermissionCheck?: boolean | undefined;
}

/**
 * Contains information about a delegation request, including its status, permissions, and associated metadata.
 *
 * @public
 */
export interface DelegationRequest {
  /**
   * The unique identifier for the delegation request.
   *
   * @public
   */
  DelegationRequestId?: string | undefined;

  /**
   * Amazon Web Services account ID of the owner of the delegation request.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Description of the delegation request. This is a message that is provided by the Amazon Web Services partner that filed the delegation request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A custom message that is added to the delegation request by the partner.
   *
   * This element is different from the `Description` element such that this is a request specific message injected by the partner. The `Description` is typically a generic explanation of what the delegation request is targeted to do.
   *
   * @public
   */
  RequestMessage?: string | undefined;

  /**
   * Contains information about the permissions being delegated in a delegation request.
   *
   * @public
   */
  Permissions?: DelegationPermission | undefined;

  /**
   * JSON content of the associated permission policy of this delegation request.
   *
   * @public
   */
  PermissionPolicy?: string | undefined;

  /**
   * If the `PermissionPolicy` includes role creation permissions, this element will include the list of permissions boundary policies associated with the role creation. See [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) for more details about IAM permission boundaries.
   *
   * @public
   */
  RolePermissionRestrictionArns?: string[] | undefined;

  /**
   * ARN of the owner of this delegation request.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ApproverId?: string | undefined;

  /**
   * The state of this delegation request.
   *
   * See the [Understanding the Request Lifecycle](https://docs.aws.amazon.com/IAM/latest/UserGuide/temporary-delegation-building-integration.html#temporary-delegation-request-lifecycle) for an explanation of how these states are transitioned.
   *
   * @public
   */
  State?: StateType | undefined;

  /**
   * The expiry time of this delegation request
   *
   * See the [Understanding the Request Lifecycle](https://docs.aws.amazon.com/IAM/latest/UserGuide/temporary-delegation-building-integration.html#temporary-delegation-request-lifecycle) for details on the life time of a delegation request at each state.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Identity of the requestor of this delegation request. This will be an Amazon Web Services account ID.
   *
   * @public
   */
  RequestorId?: string | undefined;

  /**
   * A friendly name of the requestor.
   *
   * @public
   */
  RequestorName?: string | undefined;

  /**
   * Creation date (timestamp) of this delegation request.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The life-time of the requested session credential.
   *
   * @public
   */
  SessionDuration?: number | undefined;

  /**
   * A URL to be redirected to once the delegation request is approved. Partners provide this URL when creating the delegation request.
   *
   * @public
   */
  RedirectUrl?: string | undefined;

  /**
   * Notes added to this delegation request, if this request was updated via the [UpdateDelegationRequest](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateDelegationRequest.html) API.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Reasons for rejecting this delegation request, if this request was rejected. See also [RejectDelegationRequest](https://docs.aws.amazon.com/IAM/latest/APIReference/API_RejectDelegationRequest.html) API documentation.
   *
   * @public
   */
  RejectionReason?: string | undefined;

  /**
   * A flag indicating whether the [SendDelegationToken](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SendDelegationToken.html) must be called by the owner of this delegation request. This is set by the requesting partner.
   *
   * @public
   */
  OnlySendByOwner?: boolean | undefined;

  /**
   * Last updated timestamp of the request.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDelegationRequestResponse {
  /**
   * The delegation request object containing all details about the request.
   *
   * @public
   */
  DelegationRequest?: DelegationRequest | undefined;

  /**
   * The status of the permission check for the delegation request.
   *
   * This value indicates the status of the process to check whether the caller has sufficient permissions to cover the requested actions in the delegation request. Since this is an asynchronous process, there are three potential values:
   *
   * - `IN_PROGRESS` : The permission check process has started.
   * - `COMPLETED` : The permission check process has completed. The `PermissionCheckResult` will include the result.
   * - `FAILED` : The permission check process has failed.
   *
   * @public
   */
  PermissionCheckStatus?: PermissionCheckStatusType | undefined;

  /**
   * The result of the permission check, indicating whether the caller has sufficient permissions to cover the requested permissions. This is an approximate result.
   *
   * - `ALLOWED` : The caller has sufficient permissions cover all the requested permissions.
   * - `DENIED` : The caller does not have sufficient permissions to cover all the requested permissions.
   * - `UNSURE` : It is not possible to determine whether the caller has all the permissions needed. This output is most likely for cases when the caller has permissions with conditions.
   *
   * @public
   */
  PermissionCheckResult?: PermissionCheckResultType | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The name of the group.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [GetGroup](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html) request.
 *
 * @public
 */
export interface GetGroupResponse {
  /**
   * A structure that contains details about the group.
   *
   * @public
   */
  Group: Group | undefined;

  /**
   * A list of users in the group.
   *
   * @public
   */
  Users: User[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupPolicyRequest {
  /**
   * The name of the group the policy is associated with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name of the policy document to get.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * Contains the response to a successful [GetGroupPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html) request.
 *
 * @public
 */
export interface GetGroupPolicyResponse {
  /**
   * The group the policy is associated with.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * IAM stores policies in JSON format. However, resources that were created using CloudFormation templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface GetHumanReadableSummaryRequest {
  /**
   * Arn of the entity to be summarized. At this time, the only supported entity type is `delegation-request`
   *
   * @public
   */
  EntityArn: string | undefined;

  /**
   * A string representing the locale to use for the summary generation. The supported locale strings are based on the [Supported languages of the Amazon Web Services Management Console](/awsconsolehelpdocs/latest/gsg/change-language.html#supported-languages).
   *
   * @public
   */
  Locale?: string | undefined;
}

/**
 * @public
 */
export interface GetHumanReadableSummaryResponse {
  /**
   * Summary content in the specified locale. Summary content is non-empty only if the `SummaryState` is `AVAILABLE`.
   *
   * @public
   */
  SummaryContent?: string | undefined;

  /**
   * The locale that this response was generated for. This maps to the input locale.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * State of summary generation. This generation process is asynchronous and this attribute indicates the state of the generation process.
   *
   * @public
   */
  SummaryState?: SummaryStateType | undefined;
}

/**
 * @public
 */
export interface GetInstanceProfileRequest {
  /**
   * The name of the instance profile to get information about.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;
}

/**
 * Contains the response to a successful [GetInstanceProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html) request.
 *
 * @public
 */
export interface GetInstanceProfileResponse {
  /**
   * A structure containing details about the instance profile.
   *
   * @public
   */
  InstanceProfile: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface GetLoginProfileRequest {
  /**
   * The name of the user whose login profile you want to retrieve.
   *
   * This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an [AssumeRoot](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html) session to omit the user name.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * Contains the response to a successful [GetLoginProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html) request.
 *
 * @public
 */
export interface GetLoginProfileResponse {
  /**
   * A structure containing the user name and the profile creation date for the user.
   *
   * @public
   */
  LoginProfile: LoginProfile | undefined;
}

/**
 * @public
 */
export interface GetMFADeviceRequest {
  /**
   * Serial number that uniquely identifies the MFA device. For this API, we only accept FIDO security key [ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html).
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * The friendly name identifying the user.
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * @public
 */
export interface GetMFADeviceResponse {
  /**
   * The friendly name identifying the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Serial number that uniquely identifies the MFA device. For this API, we only accept FIDO security key [ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html).
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * The date that a specified user's MFA device was first enabled.
   *
   * @public
   */
  EnableDate?: Date | undefined;

  /**
   * The certifications of a specified user's MFA device. We currently provide FIPS-140-2, FIPS-140-3, and FIDO certification levels obtained from [FIDO Alliance Metadata Service (MDS)](https://fidoalliance.org/metadata/).
   *
   * @public
   */
  Certifications?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOpenIDConnectProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get information for. You can get a list of OIDC provider resource ARNs by using the [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) operation.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;
}

/**
 * Contains the response to a successful [GetOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html) request.
 *
 * @public
 */
export interface GetOpenIDConnectProviderResponse {
  /**
   * The URL that the IAM OIDC provider resource object is associated with. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
   *
   * @public
   */
  ClientIDList?: string[] | undefined;

  /**
   * A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
   *
   * @public
   */
  ThumbprintList?: string[] | undefined;

  /**
   * The date and time when the IAM OIDC provider resource object was created in the Amazon Web Services account.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A list of tags that are attached to the specified IAM OIDC provider. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetOrganizationsAccessReportRequest {
  /**
   * The identifier of the request generated by the [GenerateOrganizationsAccessReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html) operation.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The key that is used to sort the results. If you choose the namespace key, the results are returned in alphabetical order. If you choose the time key, the results are sorted numerically by the date and time.
   *
   * @public
   */
  SortKey?: SortKeyType | undefined;
}

/**
 * Contains information about the reason that the operation failed.
 *
 * This data type is used as a response element in the [GetOrganizationsAccessReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html), [GetServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html), and [GetServiceLastAccessedDetailsWithEntities](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html) operations.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * Detailed information about the reason that the operation failed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The error code associated with the operation failure.
   *
   * @public
   */
  Code: string | undefined;
}

/**
 * @public
 */
export interface GetOrganizationsAccessReportResponse {
  /**
   * The status of the job.
   *
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the report job was created.
   *
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the generated report job was completed or failed.
   *
   * This field is null if the job is still in progress, as indicated by a job status value of `IN_PROGRESS`.
   *
   * @public
   */
  JobCompletionDate?: Date | undefined;

  /**
   * The number of services that the applicable SCPs allow account principals to access.
   *
   * @public
   */
  NumberOfServicesAccessible?: number | undefined;

  /**
   * The number of services that account principals are allowed but did not attempt to access.
   *
   * @public
   */
  NumberOfServicesNotAccessed?: number | undefined;

  /**
   * An object that contains details about the most recent attempt to access the service.
   *
   * @public
   */
  AccessDetails?: AccessDetail[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains information about the reason that the operation failed.
   *
   * This data type is used as a response element in the [GetOrganizationsAccessReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html), [GetServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html), and [GetServiceLastAccessedDetailsWithEntities](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html) operations.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetOutboundWebIdentityFederationInfoResponse {
  /**
   * A unique issuer URL for your Amazon Web Services account that hosts the OpenID Connect (OIDC) discovery endpoints at `/.well-known/openid-configuration and /.well-known/jwks.json`. The OpenID Connect (OIDC) discovery endpoints contain verification keys and metadata necessary for token verification.
   *
   * @public
   */
  IssuerIdentifier?: string | undefined;

  /**
   * Indicates whether outbound identity federation is currently enabled for your Amazon Web Services account. When true, IAM principals in the account can call the `GetWebIdentityToken` API to obtain JSON Web Tokens (JWTs) for authentication with external services.
   *
   * @public
   */
  JwtVendingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the managed policy that you want information about.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * Contains the response to a successful [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html) request.
 *
 * @public
 */
export interface GetPolicyResponse {
  /**
   * A structure containing details about the policy.
   *
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the managed policy that you want information about.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * Identifies the policy version to retrieve.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * Contains the response to a successful [GetPolicyVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html) request.
 *
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * A structure containing details about the policy version.
   *
   * @public
   */
  PolicyVersion?: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface GetRoleRequest {
  /**
   * The name of the IAM role to get information about.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * Contains the response to a successful [GetRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html) request.
 *
 * @public
 */
export interface GetRoleResponse {
  /**
   * A structure containing details about the IAM role.
   *
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface GetRolePolicyRequest {
  /**
   * The name of the role associated with the policy.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The name of the policy document to get.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * Contains the response to a successful [GetRolePolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html) request.
 *
 * @public
 */
export interface GetRolePolicyResponse {
  /**
   * The role the policy is associated with.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * IAM stores policies in JSON format. However, resources that were created using CloudFormation templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface GetRoleTemplateVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the role template whose version you want to retrieve.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * The minor version of the role template to retrieve. If you do not specify a minor version, the service returns the template's default minor version.
   *
   * @public
   */
  MinorVersion?: number | undefined;
}

/**
 * Contains an inline policy template that the service embeds in roles that you create from a role template.
 *
 * @public
 */
export interface InlinePolicy {
  /**
   * The name of the inline policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The inline policy document.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * Defines a parameter that a role template accepts. You supply values for these parameters when you create a role with [AcquireRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html).
 *
 * @public
 */
export interface ParameterDefinition {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the parameter. Valid values are `String`, `StringList`, `Number`, `NumberList`, `Arn`, and `ArnList`.
   *
   * @public
   */
  Type: ParameterTypeType | undefined;

  /**
   * An optional subtype that further constrains the values that are allowed for the parameter.
   *
   * @public
   */
  SubType?: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether you must supply a value for the parameter when you create a role from the template.
   *
   * @public
   */
  IsRequired?: boolean | undefined;

  /**
   * The value that the service uses for the parameter when you do not supply one.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * Specifies whether you can change the parameter value after you create the role.
   *
   * @public
   */
  Immutable?: boolean | undefined;
}

/**
 * Represents a tag that is applied to roles that are created from a role template. The key and value can include `@\{parameter\}` placeholders that are replaced with template parameter values when the role is created.
 *
 * @public
 */
export interface TagTemplate {
  /**
   * The key name of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with the tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains information about a version of an IAM role template, including the configuration that is used to create roles with [AcquireRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html). This structure is returned as a response element by the [GetRoleTemplateVersion](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRoleTemplateVersion.html) operation.
 *
 * @public
 */
export interface RoleTemplateVersion {
  /**
   * The Amazon Resource Name (ARN) that identifies the role template.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The friendly name that identifies the role template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The identifier of the role template version.
   *
   * @public
   */
  TemplateVersionId?: string | undefined;

  /**
   * The description of the role template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The major version number of the role template.
   *
   * @public
   */
  MajorVersion?: number | undefined;

  /**
   * The minor version that the service uses by default when you create a role from this template without specifying a minor version.
   *
   * @public
   */
  DefaultMinorVersion?: number | undefined;

  /**
   * Indicates that the role template is managed by an Amazon Web Services service.
   *
   * @public
   */
  ManagedByType?: ManagedByTypeType | undefined;

  /**
   * The identifier of the Amazon Web Services service that manages the role template.
   *
   * @public
   */
  ManagedByValue?: string | undefined;

  /**
   * Specifies whether the role template is enabled. When a template is disabled, you cannot create roles from it.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The minor version number of this role template version.
   *
   * @public
   */
  MinorVersion?: number | undefined;

  /**
   * The pattern that is used to generate the name of a role that is created from this template. The pattern can include `@\{parameter\}` placeholders that are replaced with the values you supply in the `ReplacementValues` parameter of [AcquireRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html).
   *
   * @public
   */
  RoleNamePattern?: string | undefined;

  /**
   * The pattern that is used to generate the path of a role that is created from this template.
   *
   * @public
   */
  RolePathPattern?: string | undefined;

  /**
   * The pattern that is used to generate the description of a role that is created from this template.
   *
   * @public
   */
  RoleDescriptionPattern?: string | undefined;

  /**
   * The trust policy template that grants an entity permission to assume roles that you create from this template.
   *
   * @public
   */
  AssumeRolePolicyDocumentTemplate?: string | undefined;

  /**
   * A list of inline policy templates that the service embeds in roles that you create from this template.
   *
   * @public
   */
  InlinePolicyTemplates?: InlinePolicy[] | undefined;

  /**
   * A list of the ARNs of the managed policies that the service attaches to roles that you create from this template.
   *
   * @public
   */
  ManagedPolicyArns?: string[] | undefined;

  /**
   * The ARN of the policy that sets the permissions boundary for roles that you create from this template.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PermissionBoundaryArn?: string | undefined;

  /**
   * A list of the parameters that are defined for this role template version. You supply values for these parameters when you create a role with [AcquireRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html).
   *
   * @public
   */
  ParametersDefinition?: ParameterDefinition[] | undefined;

  /**
   * A list of tag templates that are applied to roles that are created from this template.
   *
   * @public
   */
  RoleTagsTemplate?: TagTemplate[] | undefined;

  /**
   * The maximum session duration (in seconds) for roles that are created from this template.
   *
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * Specifies whether this specific minor version of the role template is enabled.
   *
   * @public
   */
  VersionEnabled?: boolean | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the role template version was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the role template version was last updated.
   *
   * @public
   */
  UpdateTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRoleTemplateVersionResponse {
  /**
   * A structure that contains details about the requested role template version.
   *
   * @public
   */
  RoleTemplateVersion: RoleTemplateVersion | undefined;
}

/**
 * @public
 */
export interface GetSAMLProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get information about.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  SAMLProviderArn: string | undefined;
}

/**
 * Contains the private keys for the SAML provider.
 *
 * This data type is used as a response element in the [GetSAMLProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html) operation.
 *
 * @public
 */
export interface SAMLPrivateKey {
  /**
   * The unique identifier for the SAML private key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time](http://www.iso.org/iso/iso8601) format, when the private key was uploaded.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * Contains the response to a successful [GetSAMLProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html) request.
 *
 * @public
 */
export interface GetSAMLProviderResponse {
  /**
   * The unique identifier assigned to the SAML provider.
   *
   * @public
   */
  SAMLProviderUUID?: string | undefined;

  /**
   * The XML metadata document that includes information about an identity provider.
   *
   * @public
   */
  SAMLMetadataDocument?: string | undefined;

  /**
   * The date and time when the SAML provider was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The expiration date and time for the SAML provider.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * A list of tags that are attached to the specified IAM SAML provider. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the encryption setting for the SAML provider.
   *
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * The private key metadata for the SAML provider.
   *
   * @public
   */
  PrivateKeyList?: SAMLPrivateKey[] | undefined;
}

/**
 * @public
 */
export interface GetServerCertificateRequest {
  /**
   * The name of the server certificate you want to retrieve information about.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;
}

/**
 * Contains information about a server certificate without its certificate body, certificate chain, and private key.
 *
 * This data type is used as a response element in the [UploadServerCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html) and [ListServerCertificates](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html) operations.
 *
 * @public
 */
export interface ServerCertificateMetadata {
  /**
   * The path to the server certificate. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The name that identifies the server certificate.
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * The stable and unique string identifying the server certificate. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  ServerCertificateId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) specifying the server certificate. For more information about ARNs and how to use them in policies, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date when the server certificate was uploaded.
   *
   * @public
   */
  UploadDate?: Date | undefined;

  /**
   * The date on which the certificate is set to expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * Contains information about a server certificate.
 *
 * This data type is used as a response element in the [GetServerCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html) operation.
 *
 * @public
 */
export interface ServerCertificate {
  /**
   * The meta information of the server certificate, such as its name, path, ID, and ARN.
   *
   * @public
   */
  ServerCertificateMetadata: ServerCertificateMetadata | undefined;

  /**
   * The contents of the public key certificate.
   *
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * The contents of the public key certificate chain.
   *
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * A list of tags that are attached to the server certificate. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the response to a successful [GetServerCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html) request.
 *
 * @public
 */
export interface GetServerCertificateResponse {
  /**
   * A structure containing details about the server certificate.
   *
   * @public
   */
  ServerCertificate: ServerCertificate | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsRequest {
  /**
   * The ID of the request generated by the [GenerateServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html) operation. The `JobId` returned by `GenerateServiceLastAccessedDetail` must be used by the same role within a session, or by the same user when used to call `GetServiceLastAccessedDetail`.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains details about the most recent attempt to access an action within the service.
 *
 * This data type is used as a response element in the [GetServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html) operation.
 *
 * @public
 */
export interface TrackedActionLastAccessed {
  /**
   * The name of the tracked action to which access was attempted. Tracked actions are actions that report activity to IAM.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  LastAccessedEntity?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when an authenticated entity most recently attempted to access the tracked service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAccessedTime?: Date | undefined;

  /**
   * The Region from which the authenticated entity (user or role) last attempted to access the tracked action. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAccessedRegion?: string | undefined;
}

/**
 * Contains details about the most recent attempt to access the service.
 *
 * This data type is used as a response element in the [GetServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html) operation.
 *
 * @public
 */
export interface ServiceLastAccessed {
  /**
   * The name of the service in which access was attempted.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when an authenticated entity most recently attempted to access the service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAuthenticated?: Date | undefined;

  /**
   * The namespace of the service in which access was attempted.
   *
   * To learn the service namespace of a service, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *Service Authorization Reference*. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, `(service prefix: a4b)`. For more information about service namespaces, see [Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * The ARN of the authenticated entity (user or role) that last attempted to access the service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAuthenticatedEntity?: string | undefined;

  /**
   * The Region from which the authenticated entity (user or role) last attempted to access the service. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAuthenticatedRegion?: string | undefined;

  /**
   * The total number of authenticated principals (root user, IAM users, or IAM roles) that have attempted to access the service.
   *
   * This field is null if no principals attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  TotalAuthenticatedEntities?: number | undefined;

  /**
   * An object that contains details about the most recent attempt to access a tracked action within the service.
   *
   * This field is null if there no tracked actions or if the principal did not use the tracked actions within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period). This field is also null if the report was generated at the service level and not the action level. For more information, see the `Granularity` field in [GenerateServiceLastAccessedDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html).
   *
   * @public
   */
  TrackedActionsLastAccessed?: TrackedActionLastAccessed[] | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsResponse {
  /**
   * The status of the job.
   *
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * The type of job. Service jobs return information about when each service was last accessed. Action jobs also include information about when tracked actions within the service were last accessed.
   *
   * @public
   */
  JobType?: AccessAdvisorUsageGranularityType | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the report job was created.
   *
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * A `ServiceLastAccessed` object that contains details about the most recent attempt to access the service.
   *
   * @public
   */
  ServicesLastAccessed: ServiceLastAccessed[] | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the generated report job was completed or failed.
   *
   * This field is null if the job is still in progress, as indicated by a job status value of `IN_PROGRESS`.
   *
   * @public
   */
  JobCompletionDate: Date | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An object that contains details about the reason the operation failed.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * The ID of the request generated by the `GenerateServiceLastAccessedDetails` operation.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The service namespace for an Amazon Web Services service. Provide the service namespace to learn when the IAM entity last attempted to access the specified service.
   *
   * To learn the service namespace for a service, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *IAM User Guide*. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, `(service prefix: a4b)`. For more information about service namespaces, see [Amazon Web Services service namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains details about the specified entity (user or role).
 *
 * This data type is an element of the [EntityDetails](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EntityDetails.html) object.
 *
 * @public
 */
export interface EntityInfo {
  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the entity (user or role).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of entity (user or role).
   *
   * @public
   */
  Type: PolicyOwnerEntityType | undefined;

  /**
   * The identifier of the entity (user or role).
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The path to the entity (user or role). For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified Amazon Web Services service.
 *
 * This data type is a response element in the [GetServiceLastAccessedDetailsWithEntities](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html) operation.
 *
 * @public
 */
export interface EntityDetails {
  /**
   * The `EntityInfo` object that contains details about the entity (user or role).
   *
   * @public
   */
  EntityInfo: EntityInfo | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the authenticated entity last attempted to access Amazon Web Services. Amazon Web Services does not report unauthenticated requests.
   *
   * This field is null if no IAM entities attempted to access the service within the [tracking period](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period).
   *
   * @public
   */
  LastAuthenticated?: Date | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * The status of the job.
   *
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the report job was created.
   *
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the generated report job was completed or failed.
   *
   * This field is null if the job is still in progress, as indicated by a job status value of `IN_PROGRESS`.
   *
   * @public
   */
  JobCompletionDate: Date | undefined;

  /**
   * An `EntityDetailsList` object that contains details about when an IAM entity (user or role) used group or policy permissions in an attempt to access the specified Amazon Web Services service.
   *
   * @public
   */
  EntityDetailsList: EntityDetails[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An object that contains details about the reason the operation failed.
   *
   * @public
   */
  Error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetServiceLinkedRoleDeletionStatusRequest {
  /**
   * The deletion task identifier. This identifier is returned by the [DeleteServiceLinkedRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html) operation in the format `task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid>`.
   *
   * @public
   */
  DeletionTaskId: string | undefined;
}

/**
 * An object that contains details about how a service-linked role is used, if that information is returned by the service.
 *
 * This data type is used as a response element in the [GetServiceLinkedRoleDeletionStatus](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html) operation.
 *
 * @public
 */
export interface RoleUsageType {
  /**
   * The name of the Region where the service-linked role is being used.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The name of the resource that is using the service-linked role.
   *
   * @public
   */
  Resources?: string[] | undefined;
}

/**
 * The reason that the service-linked role deletion failed.
 *
 * This data type is used as a response element in the [GetServiceLinkedRoleDeletionStatus](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html) operation.
 *
 * @public
 */
export interface DeletionTaskFailureReasonType {
  /**
   * A short description of the reason that the service-linked role deletion failed.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * A list of objects that contains details about the service-linked role deletion failure, if that information is returned by the service. If the service-linked role has active sessions or if any resources that were used by the role have not been deleted from the linked service, the role can't be deleted. This parameter includes a list of the resources that are associated with the role and the Region in which the resources are being used.
   *
   * @public
   */
  RoleUsageList?: RoleUsageType[] | undefined;
}

/**
 * @public
 */
export interface GetServiceLinkedRoleDeletionStatusResponse {
  /**
   * The status of the deletion.
   *
   * @public
   */
  Status: DeletionTaskStatusType | undefined;

  /**
   * An object that contains details about the reason the deletion failed.
   *
   * @public
   */
  Reason?: DeletionTaskFailureReasonType | undefined;
}

/**
 * @public
 */
export interface GetSSHPublicKeyRequest {
  /**
   * The name of the IAM user associated with the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The unique identifier for the SSH public key.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
   *
   * @public
   */
  Encoding: EncodingType | undefined;
}

/**
 * Contains information about an SSH public key.
 *
 * This data type is used as a response element in the [GetSSHPublicKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html) and [UploadSSHPublicKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html) operations.
 *
 * @public
 */
export interface SSHPublicKey {
  /**
   * The name of the IAM user associated with the SSH public key.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The unique identifier for the SSH public key.
   *
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * The MD5 message digest of the SSH public key.
   *
   * @public
   */
  Fingerprint: string | undefined;

  /**
   * The SSH public key.
   *
   * @public
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * The status of the SSH public key. `Active` means that the key can be used for authentication with an CodeCommit repository. `Inactive` means that the key cannot be used.
   *
   * @public
   */
  Status: StatusType | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the SSH public key was uploaded.
   *
   * @public
   */
  UploadDate?: Date | undefined;
}

/**
 * Contains the response to a successful [GetSSHPublicKey](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html) request.
 *
 * @public
 */
export interface GetSSHPublicKeyResponse {
  /**
   * A structure containing details about the SSH public key.
   *
   * @public
   */
  SSHPublicKey?: SSHPublicKey | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * The name of the user to get information about.
   *
   * This parameter is optional. If it is not included, it defaults to the user making the request. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;
}

/**
 * Contains the response to a successful [GetUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html) request.
 *
 * @public
 */
export interface GetUserResponse {
  /**
   * A structure containing details about the IAM user.
   *
   * > **Important:**
   * >
   * > Due to a service issue, password last used data does not include password use from May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects [last sign-in](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html) dates shown in the IAM console and password last used dates in the [IAM credential report](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html), and returned by this operation. If users signed in during the affected time, the password last used date that is returned is the date the user last signed in before May 3, 2018. For users that signed in after May 23, 2018 14:08 PDT, the returned password last used date is accurate.
   * >
   * > You can use password last used information to identify unused credentials for deletion. For example, you might delete users who did not sign in to Amazon Web Services in the last 90 days. In cases like this, we recommend that you adjust your evaluation window to include dates after May 23, 2018. Alternatively, if your users use access keys to access Amazon Web Services programmatically you can refer to access key last used information because it is accurate for all dates.
   *
   * @public
   */
  User: User | undefined;
}

/**
 * @public
 */
export interface GetUserPolicyRequest {
  /**
   * The name of the user who the policy is associated with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The name of the policy document to get.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * Contains the response to a successful [GetUserPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html) request.
 *
 * @public
 */
export interface GetUserPolicyResponse {
  /**
   * The user the policy is associated with.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * IAM stores policies in JSON format. However, resources that were created using CloudFormation templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface ListAccessKeysRequest {
  /**
   * The name of the user.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListAccessKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html) request.
 *
 * @public
 */
export interface ListAccessKeysResponse {
  /**
   * A list of objects containing metadata about the access keys.
   *
   * @public
   */
  AccessKeyMetadata: AccessKeyMetadata[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAliasesRequest {
  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListAccountAliases](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html) request.
 *
 * @public
 */
export interface ListAccountAliasesResponse {
  /**
   * A list of aliases associated with the account. Amazon Web Services supports only one alias per account.
   *
   * @public
   */
  AccountAliases: string[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedGroupPoliciesRequest {
  /**
   * The name (friendly name, not ARN) of the group to list attached policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListAttachedGroupPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html) request.
 *
 * @public
 */
export interface ListAttachedGroupPoliciesResponse {
  /**
   * A list of the attached policies.
   *
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedRolePoliciesRequest {
  /**
   * The name (friendly name, not ARN) of the role to list attached policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListAttachedRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html) request.
 *
 * @public
 */
export interface ListAttachedRolePoliciesResponse {
  /**
   * A list of the attached policies.
   *
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedUserPoliciesRequest {
  /**
   * The name (friendly name, not ARN) of the user to list attached policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListAttachedUserPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html) request.
 *
 * @public
 */
export interface ListAttachedUserPoliciesResponse {
  /**
   * A list of the attached policies.
   *
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegationRequestsRequest {
  /**
   * The owner ID to filter delegation requests by.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM may return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDelegationRequestsResponse {
  /**
   * A list of delegation requests that match the specified criteria.
   *
   * @public
   */
  DelegationRequests?: DelegationRequest[] | undefined;

  /**
   * When `isTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items.
   *
   * @public
   */
  isTruncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListEntitiesForPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy for which you want the versions.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The entity type to use for filtering the results.
   *
   * For example, when `EntityFilter` is `Role`, only the roles that are attached to the specified policy are returned. This parameter is optional. If it is not included, all attached entities (users, groups, and roles) are returned. The argument for this parameter must be one of the valid values listed below.
   *
   * @public
   */
  EntityFilter?: EntityType | undefined;

  /**
   * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all entities.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * The policy usage method to use for filtering the results.
   *
   * To list only permissions policies, set `PolicyUsageFilter` to `PermissionsPolicy`. To list only the policies used to set permissions boundaries, set the value to `PermissionsBoundary`.
   *
   * This parameter is optional. If it is not included, all policies are returned.
   *
   * @public
   */
  PolicyUsageFilter?: PolicyUsageType | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about a group that a managed policy is attached to.
 *
 * This data type is used as a response element in the [ListEntitiesForPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html) operation.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface PolicyGroup {
  /**
   * The name (friendly name, not ARN) identifying the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The stable and unique string identifying the group. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * Contains information about a role that a managed policy is attached to.
 *
 * This data type is used as a response element in the [ListEntitiesForPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html) operation.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface PolicyRole {
  /**
   * The name (friendly name, not ARN) identifying the role.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The stable and unique string identifying the role. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  RoleId?: string | undefined;
}

/**
 * Contains information about a user that a managed policy is attached to.
 *
 * This data type is used as a response element in the [ListEntitiesForPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html) operation.
 *
 * For more information about managed policies, refer to [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface PolicyUser {
  /**
   * The name (friendly name, not ARN) identifying the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The stable and unique string identifying the user. For more information about IDs, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * Contains the response to a successful [ListEntitiesForPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html) request.
 *
 * @public
 */
export interface ListEntitiesForPolicyResponse {
  /**
   * A list of IAM groups that the policy is attached to.
   *
   * @public
   */
  PolicyGroups?: PolicyGroup[] | undefined;

  /**
   * A list of IAM users that the policy is attached to.
   *
   * @public
   */
  PolicyUsers?: PolicyUser[] | undefined;

  /**
   * A list of IAM roles that the policy is attached to.
   *
   * @public
   */
  PolicyRoles?: PolicyRole[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupPoliciesRequest {
  /**
   * The name of the group to list policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListGroupPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html) request.
 *
 * @public
 */
export interface ListGroupPoliciesResponse {
  /**
   * A list of policy names.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The path prefix for filtering the results. For example, the prefix `/division_abc/subdivision_xyz/` gets all groups whose path starts with `/division_abc/subdivision_xyz/`.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/), listing all groups. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListGroups](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html) request.
 *
 * @public
 */
export interface ListGroupsResponse {
  /**
   * A list of groups.
   *
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsForUserRequest {
  /**
   * The name of the user to list groups for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListGroupsForUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html) request.
 *
 * @public
 */
export interface ListGroupsForUserResponse {
  /**
   * A list of groups.
   *
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesRequest {
  /**
   * The path prefix for filtering the results. For example, the prefix `/application_abc/component_xyz/` gets all instance profiles whose path starts with `/application_abc/component_xyz/`.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/), listing all instance profiles. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListInstanceProfiles](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html) request.
 *
 * @public
 */
export interface ListInstanceProfilesResponse {
  /**
   * A list of instance profiles.
   *
   * @public
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesForRoleRequest {
  /**
   * The name of the role to list instance profiles for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListInstanceProfilesForRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html) request.
 *
 * @public
 */
export interface ListInstanceProfilesForRoleResponse {
  /**
   * A list of instance profiles.
   *
   * @public
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfileTagsRequest {
  /**
   * The name of the IAM instance profile whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfileTagsResponse {
  /**
   * The list of tags that are currently attached to the IAM instance profile. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListMFADevicesRequest {
  /**
   * The name of the user whose MFA devices you want to list.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about an MFA device.
 *
 * This data type is used as a response element in the [ListMFADevices](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html) operation.
 *
 * @public
 */
export interface MFADevice {
  /**
   * The user with whom the MFA device is associated.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * The date when the MFA device was enabled for the user.
   *
   * @public
   */
  EnableDate: Date | undefined;
}

/**
 * Contains the response to a successful [ListMFADevices](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html) request.
 *
 * @public
 */
export interface ListMFADevicesResponse {
  /**
   * A list of MFA devices.
   *
   * @public
   */
  MFADevices: MFADevice[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListMFADeviceTagsRequest {
  /**
   * The unique identifier for the IAM virtual MFA device whose tags you want to see. For virtual MFA devices, the serial number is the same as the ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListMFADeviceTagsResponse {
  /**
   * The list of tags that are currently attached to the virtual MFA device. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProvidersRequest {}

/**
 * Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
 *
 * @public
 */
export interface OpenIDConnectProviderListEntry {
  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Contains the response to a successful [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) request.
 *
 * @public
 */
export interface ListOpenIDConnectProvidersResponse {
  /**
   * The list of IAM OIDC provider resource objects defined in the Amazon Web Services account.
   *
   * @public
   */
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[] | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProviderTagsRequest {
  /**
   * The ARN of the OpenID Connect (OIDC) identity provider whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProviderTagsResponse {
  /**
   * The list of tags that are currently attached to the OpenID Connect (OIDC) identity provider. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationsFeaturesRequest {}

/**
 * @public
 */
export interface ListOrganizationsFeaturesResponse {
  /**
   * The unique identifier (ID) of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * Specifies the features that are currently available in your organization.
   *
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * The scope to use for filtering the results.
   *
   * To list only Amazon Web Services managed policies, set `Scope` to `AWS`. To list only the customer managed policies in your Amazon Web Services account, set `Scope` to `Local`.
   *
   * This parameter is optional. If it is not included, or if it is set to `All`, all policies are returned.
   *
   * @public
   */
  Scope?: PolicyScopeType | undefined;

  /**
   * A flag to filter the results to only the attached policies.
   *
   * When `OnlyAttached` is `true`, the returned list contains only the policies that are attached to an IAM user, group, or role. When `OnlyAttached` is `false`, or when the parameter is not included, all policies are returned.
   *
   * @public
   */
  OnlyAttached?: boolean | undefined;

  /**
   * The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * The policy usage method to use for filtering the results.
   *
   * To list only permissions policies, set `PolicyUsageFilter` to `PermissionsPolicy`. To list only the policies used to set permissions boundaries, set the value to `PermissionsBoundary`.
   *
   * This parameter is optional. If it is not included, all policies are returned.
   *
   * @public
   */
  PolicyUsageFilter?: PolicyUsageType | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html) request.
 *
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * A list of policies.
   *
   * @public
   */
  Policies?: Policy[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesGrantingServiceAccessRequest {
  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The ARN of the IAM identity (user, group, or role) whose policies you want to list.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The service namespace for the Amazon Web Services services whose policies you want to list.
   *
   * To learn the service namespace for a service, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *IAM User Guide*. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, `(service prefix: a4b)`. For more information about service namespaces, see [Amazon Web Services service namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ServiceNamespaces: string[] | undefined;
}

/**
 * Contains details about the permissions policies that are attached to the specified identity (user, group, or role).
 *
 * This data type is an element of the [ListPoliciesGrantingServiceAccessEntry](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccessEntry.html) object.
 *
 * @public
 */
export interface PolicyGrantingServiceAccess {
  /**
   * The policy name.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy type. For more information about these policy types, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html) in the *IAM User Guide*.
   *
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.
   *
   * For more information about ARNs, go to [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The type of entity (user or role) that used the policy to access the service to which the inline policy is attached.
   *
   * This field is null for managed policies. For more information about these policy types, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html) in the *IAM User Guide*.
   *
   * @public
   */
  EntityType?: PolicyOwnerEntityType | undefined;

  /**
   * The name of the entity (user or role) to which the inline policy is attached.
   *
   * This field is null for managed policies. For more information about these policy types, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html) in the *IAM User Guide*.
   *
   * @public
   */
  EntityName?: string | undefined;
}

/**
 * Contains details about the permissions policies that are attached to the specified identity (user, group, or role).
 *
 * This data type is used as a response element in the [ListPoliciesGrantingServiceAccess](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html) operation.
 *
 * @public
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * The namespace of the service that was accessed.
   *
   * To learn the service namespace of a service, see [Actions, resources, and condition keys for Amazon Web Services services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *Service Authorization Reference*. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, `(service prefix: a4b)`. For more information about service namespaces, see [Amazon Web Services service namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ServiceNamespace?: string | undefined;

  /**
   * The `PoliciesGrantingServiceAccess` object that contains details about the policy.
   *
   * @public
   */
  Policies?: PolicyGrantingServiceAccess[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesGrantingServiceAccessResponse {
  /**
   * A `ListPoliciesGrantingServiceAccess` object that contains details about the permissions policies attached to the specified identity (user, group, or role).
   *
   * @public
   */
  PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyTagsRequest {
  /**
   * The ARN of the IAM customer managed policy whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListPolicyTagsResponse {
  /**
   * The list of tags that are currently attached to the IAM customer managed policy. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy for which you want the versions.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListPolicyVersions](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html) request.
 *
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * A list of policy versions.
   *
   * For more information about managed policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
   *
   * @public
   */
  Versions?: PolicyVersion[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRolePoliciesRequest {
  /**
   * The name of the role to list policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html) request.
 *
 * @public
 */
export interface ListRolePoliciesResponse {
  /**
   * A list of policy names.
   *
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRolesRequest {
  /**
   * The path prefix for filtering the results. For example, the prefix `/application_abc/component_xyz/` gets all roles whose path starts with `/application_abc/component_xyz/`.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/), listing all roles. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListRoles](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html) request.
 *
 * @public
 */
export interface ListRolesResponse {
  /**
   * A list of roles.
   *
   * @public
   */
  Roles: Role[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRoleTagsRequest {
  /**
   * The name of the IAM role for which you want to see the list of tags.
   *
   * This parameter accepts (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListRoleTagsResponse {
  /**
   * The list of tags that are currently attached to the role. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListSAMLProvidersRequest {}

/**
 * Contains the list of SAML providers for this account.
 *
 * @public
 */
export interface SAMLProviderListEntry {
  /**
   * The Amazon Resource Name (ARN) of the SAML provider.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The expiration date and time for the SAML provider.
   *
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * The date and time when the SAML provider was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * Contains the response to a successful [ListSAMLProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html) request.
 *
 * @public
 */
export interface ListSAMLProvidersResponse {
  /**
   * The list of SAML provider resource objects defined in IAM for this Amazon Web Services account.
   *
   * @public
   */
  SAMLProviderList?: SAMLProviderListEntry[] | undefined;
}

/**
 * @public
 */
export interface ListSAMLProviderTagsRequest {
  /**
   * The ARN of the Security Assertion Markup Language (SAML) identity provider whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListSAMLProviderTagsResponse {
  /**
   * The list of tags that are currently attached to the Security Assertion Markup Language (SAML) identity provider. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServerCertificatesRequest {
  /**
   * The path prefix for filtering the results. For example: `/company/servercerts` would get all server certificates for which the path starts with `/company/servercerts`.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/), listing all server certificates. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListServerCertificates](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html) request.
 *
 * @public
 */
export interface ListServerCertificatesResponse {
  /**
   * A list of server certificates.
   *
   * @public
   */
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServerCertificateTagsRequest {
  /**
   * The name of the IAM server certificate whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListServerCertificateTagsResponse {
  /**
   * The list of tags that are currently attached to the IAM server certificate. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceSpecificCredentialsRequest {
  /**
   * The name of the user whose service-specific credentials you want information about. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Filters the returned results to only those for the specified Amazon Web Services service. If not specified, then Amazon Web Services returns service-specific credentials for all services.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * A flag indicating whether to list service specific credentials for all users. This parameter cannot be specified together with UserName. When true, returns all credentials associated with the specified service.
   *
   * @public
   */
  AllUsers?: boolean | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker from the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains additional details about a service-specific credential.
 *
 * @public
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * The name of the IAM user associated with the service-specific credential.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The status of the service-specific credential. `Active` means that the key is valid for API calls, while `Inactive` means it is not.
   *
   * @public
   */
  Status: StatusType | undefined;

  /**
   * The generated user name for the service-specific credential.
   *
   * @public
   */
  ServiceUserName?: string | undefined;

  /**
   * For Bedrock API keys and CloudWatch Logs API keys, this is the public portion of the credential that includes the IAM user name and a suffix containing version and creation information.
   *
   * @public
   */
  ServiceCredentialAlias?: string | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the service-specific credential were created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The date and time when the service specific credential expires. This field is only present for Bedrock API keys and CloudWatch Logs API keys that were created with an expiration period.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The unique identifier for the service-specific credential.
   *
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * The name of the service associated with the service-specific credential.
   *
   * @public
   */
  ServiceName: string | undefined;
}

/**
 * @public
 */
export interface ListServiceSpecificCredentialsResponse {
  /**
   * A list of structures that each contain details about a service-specific credential.
   *
   * @public
   */
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[] | undefined;

  /**
   * When IsTruncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the Marker request parameter to retrieve more items.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSigningCertificatesRequest {
  /**
   * The name of the IAM user whose signing certificates you want to examine.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about an X.509 signing certificate.
 *
 * This data type is used as a response element in the [UploadSigningCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html) and [ListSigningCertificates](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html) operations.
 *
 * @public
 */
export interface SigningCertificate {
  /**
   * The name of the user the signing certificate is associated with.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ID for the signing certificate.
   *
   * @public
   */
  CertificateId: string | undefined;

  /**
   * The contents of the signing certificate.
   *
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * The status of the signing certificate. `Active` means that the key is valid for API calls, while `Inactive` means it is not.
   *
   * @public
   */
  Status: StatusType | undefined;

  /**
   * The date when the signing certificate was uploaded.
   *
   * @public
   */
  UploadDate?: Date | undefined;
}

/**
 * Contains the response to a successful [ListSigningCertificates](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html) request.
 *
 * @public
 */
export interface ListSigningCertificatesResponse {
  /**
   * A list of the user's signing certificate information.
   *
   * @public
   */
  Certificates: SigningCertificate[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListSSHPublicKeysRequest {
  /**
   * The name of the IAM user to list SSH public keys for. If none is specified, the `UserName` field is determined implicitly based on the Amazon Web Services access key used to sign the request.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about an SSH public key, without the key's body or fingerprint.
 *
 * This data type is used as a response element in the [ListSSHPublicKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html) operation.
 *
 * @public
 */
export interface SSHPublicKeyMetadata {
  /**
   * The name of the IAM user associated with the SSH public key.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The unique identifier for the SSH public key.
   *
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * The status of the SSH public key. `Active` means that the key can be used for authentication with an CodeCommit repository. `Inactive` means that the key cannot be used.
   *
   * @public
   */
  Status: StatusType | undefined;

  /**
   * The date and time, in [ISO 8601 date-time format](http://www.iso.org/iso/iso8601), when the SSH public key was uploaded.
   *
   * @public
   */
  UploadDate: Date | undefined;
}

/**
 * Contains the response to a successful [ListSSHPublicKeys](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html) request.
 *
 * @public
 */
export interface ListSSHPublicKeysResponse {
  /**
   * A list of the SSH public keys assigned to IAM user.
   *
   * @public
   */
  SSHPublicKeys?: SSHPublicKeyMetadata[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUserPoliciesRequest {
  /**
   * The name of the user to list policies for.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListUserPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html) request.
 *
 * @public
 */
export interface ListUserPoliciesResponse {
  /**
   * A list of policy names.
   *
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The path prefix for filtering the results. For example: `/division_abc/subdivision_xyz/`, which would get all user names whose path starts with `/division_abc/subdivision_xyz/`.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/), listing all user names. This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListUsers](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html) request.
 *
 * @public
 */
export interface ListUsersResponse {
  /**
   * A list of users.
   *
   * @public
   */
  Users: User[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUserTagsRequest {
  /**
   * The name of the IAM user whose tags you want to see.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListUserTagsResponse {
  /**
   * The list of tags that are currently attached to the user. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListVirtualMFADevicesRequest {
  /**
   * The status (`Unassigned` or `Assigned`) of the devices to list. If you do not specify an `AssignmentStatus`, the operation defaults to `Any`, which lists both assigned and unassigned virtual MFA devices.,
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatusType | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the response to a successful [ListVirtualMFADevices](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html) request.
 *
 * @public
 */
export interface ListVirtualMFADevicesResponse {
  /**
   * The list of virtual MFA devices in the current account that match the `AssignmentStatus` value that was passed in the request.
   *
   * @public
   */
  VirtualMFADevices: VirtualMFADevice[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface PutAccountPropertiesRequest {
  /**
   * A map of property key-value pairs to set. All keys must belong to the same namespace.
   *
   * Each key uses the format `Namespace/PropertyName`. The key must contain exactly one `/` separating the namespace from the property name, and cannot start or end with `/`.
   *
   * The service validates each value based on the property key's expected type. For example, boolean properties expect `true` or `false`.
   *
   * @public
   */
  Properties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutAccountPropertiesResponse {}

/**
 * @public
 */
export interface PutGroupPolicyRequest {
  /**
   * The name of the group to associate the policy with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name of the policy document.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutRolePermissionsBoundaryRequest {
  /**
   * The name (friendly name, not ARN) of the IAM role for which you want to set the permissions boundary.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The ARN of the managed policy that is used to set the permissions boundary for the role.
   *
   * A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary: string | undefined;
}

/**
 * @public
 */
export interface PutRolePolicyRequest {
  /**
   * The name of the role to associate the policy with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The name of the policy document.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutUserPermissionsBoundaryRequest {
  /**
   * The name (friendly name, not ARN) of the IAM user for which you want to set the permissions boundary.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The ARN of the managed policy that is used to set the permissions boundary for the user.
   *
   * A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
   *
   * For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
   *
   * @public
   */
  PermissionsBoundary: string | undefined;
}

/**
 * @public
 */
export interface PutUserPolicyRequest {
  /**
   * The name of the user to associate the policy with.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The name of the policy document.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The policy document.
   *
   * You must provide policies in JSON format in IAM. However, for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface RejectDelegationRequestRequest {
  /**
   * The unique identifier of the delegation request to reject.
   *
   * @public
   */
  DelegationRequestId: string | undefined;

  /**
   * Optional notes explaining the reason for rejecting the delegation request.
   *
   * @public
   */
  Notes?: string | undefined;
}

/**
 * @public
 */
export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client ID from. You can get a list of OIDC provider ARNs by using the [ListOpenIDConnectProviders](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html) operation.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * The client ID (also known as audience) to remove from the IAM OIDC provider resource. For more information about client IDs, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
   *
   * @public
   */
  ClientID: string | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromInstanceProfileRequest {
  /**
   * The name of the instance profile to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * The name of the role to remove.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface RemoveUserFromGroupRequest {
  /**
   * The name of the group to update.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The name of the user to remove.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface ResetServiceSpecificCredentialRequest {
  /**
   * The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The unique identifier of the service-specific credential.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that can consist of any upper or lowercased letter or digit.
   *
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;
}

/**
 * @public
 */
export interface ResetServiceSpecificCredentialResponse {
  /**
   * A structure with details about the updated service-specific credential, including the new password.
   *
   * > **Important:** This is the **only** time that you can access the password. You cannot recover the password later, but you can reset it again.
   *
   * @public
   */
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}

/**
 * @public
 */
export interface ResyncMFADeviceRequest {
  /**
   * The name of the user whose MFA device you want to resynchronize.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Serial number that uniquely identifies the MFA device.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * An authentication code emitted by the device.
   *
   * The format for this parameter is a sequence of six digits.
   *
   * @public
   */
  AuthenticationCode1: string | undefined;

  /**
   * A subsequent authentication code emitted by the device.
   *
   * The format for this parameter is a sequence of six digits.
   *
   * @public
   */
  AuthenticationCode2: string | undefined;
}

/**
 * @public
 */
export interface SendDelegationTokenRequest {
  /**
   * The unique identifier of the delegation request for which to send the token.
   *
   * @public
   */
  DelegationRequestId: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM policy whose default version you want to set.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The version of the policy to set as the default (operative) version.
   *
   * For more information about managed policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the *IAM User Guide*.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface SetSecurityTokenServicePreferencesRequest {
  /**
   * The version of the global endpoint token. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens.
   *
   * For information, see [Activating and deactivating STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the *IAM User Guide*.
   *
   * @public
   */
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | undefined;
}

/**
 * Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the `Condition` elements of the input policies.
 *
 * This data type is used as an input parameter to [SimulateCustomPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html) and [SimulatePrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html).
 *
 * @public
 */
export interface ContextEntry {
  /**
   * The full name of a condition context key, including the service prefix. For example, `aws:SourceIp` or `s3:VersionId`.
   *
   * @public
   */
  ContextKeyName?: string | undefined;

  /**
   * The value (or values, if the condition context key supports multiple values) to provide to the simulation when the key is referenced by a `Condition` element in an input policy.
   *
   * @public
   */
  ContextKeyValues?: string[] | undefined;

  /**
   * The data type of the value (or values) specified in the `ContextKeyValues` parameter.
   *
   * @public
   */
  ContextKeyType?: ContextKeyTypeEnum | undefined;
}

/**
 * Represents one level of an Organizations hierarchy—the organization root, an organizational unit (OU), or an account—together with the service control policies (SCPs) that apply at that level. Each element in the list represents one level of the hierarchy, ordered from the organization root down to the account.
 *
 * For more information about SCPs, see [Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) in the *Organizations User Guide*.
 *
 * @public
 */
export interface OrderedOrganizationPolicyType {
  /**
   * A list of SCP documents that apply at this level of the Organizations hierarchy. Each document is specified as a string containing the complete, valid JSON text of an SCP.
   *
   * @public
   */
  ServiceControlPolicyInputList?: string[] | undefined;
}

/**
 * @public
 */
export interface SimulateCustomPolicyRequest {
  /**
   * A list of policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. Do not include any resource-based policies in this parameter. Any resource-based policy must be submitted with the `ResourcePolicy` parameter. The policies cannot be "scope-down" policies, such as you could include in a call to [GetFederationToken](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html) or one of the [AssumeRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html) API operations. In other words, do not use policies designed to restrict what a user can do while using the temporary credentials.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyInputList: string[] | undefined;

  /**
   * The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that an IAM entity can have. You can input only one permissions boundary when you pass a policy to this operation. For more information about permissions boundaries, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*. The policy input is specified as a string that contains the complete, valid JSON text of a permissions boundary policy.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PermissionsBoundaryPolicyInputList?: string[] | undefined;

  /**
   * An ordered list of service control policies (SCPs) to include in the simulation. Each element represents one level of an Organizations hierarchy, from the organization root to the account.
   *
   * The simulator evaluates SCPs in the order that you provide, consistent with how Organizations enforces SCPs. The first element must represent the organization root, and the last element must represent the account. Any elements between them represent organizational units (OUs) in descending order.
   *
   * Use this parameter to simulate the effect of an SCP hierarchy without calling [SimulatePrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html).
   *
   * @public
   */
  OrderedOrganizationPolicyInputList?: OrderedOrganizationPolicyType[] | undefined;

  /**
   * A list of names of API operations to evaluate in the simulation. Each operation is evaluated against each resource. Each operation must include the service identifier, such as `iam:CreateUser`. This operation does not support using wildcards (*) in an action name.
   *
   * @public
   */
  ActionNames: string[] | undefined;

  /**
   * A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is not provided, then the value defaults to `*` (all resources). Each API in the `ActionNames` parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. You can simulate resources that don't exist in your account.
   *
   * The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the `ResourcePolicy` parameter.
   *
   * If you include a `ResourcePolicy`, then it must be applicable to all of the resources included in the simulation or you receive an invalid input error.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * > **Note:** Simulation of resource-based policies isn't supported for IAM roles.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * > **Note:** Simulation of resource-based policies isn't supported for IAM roles.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * An ARN representing the Amazon Web Services account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If `ResourceOwner` is specified, it is also used as the account owner of any `ResourcePolicy` included in the simulation. If the `ResourceOwner` parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in `CallerArn`. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user `CallerArn`.
   *
   * The ARN for an account uses the following syntax: `arn:aws:iam::AWS-account-ID:root`. For example, to represent the account with the 112233445566 ID, use the following ARN: `arn:aws:iam::112233445566-ID:root`.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The ARN of the IAM user, group, or role that you want to use as the simulated caller of the API operations. `CallerArn` is required if you include a `ResourcePolicy` so that the policy's `Principal` element has a value to use in evaluating the policy.
   *
   * You cannot specify the ARN of an assumed role, federated user, or a service principal.
   *
   * @public
   */
  CallerArn?: string | undefined;

  /**
   * A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permissions policies, the corresponding value is supplied.
   *
   * @public
   */
  ContextEntries?: ContextEntry[] | undefined;

  /**
   * Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation.
   *
   * Each of the Amazon EC2 scenarios requires that you specify instance, image, and security group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the network interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the Amazon EC2 scenario options, see [Supported platforms](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html) in the *Amazon EC2 User Guide*.
   *
   * - **EC2-VPC-InstanceStore**
   *
   *   instance, image, security group, network interface
   * - **EC2-VPC-InstanceStore-Subnet**
   *
   *   instance, image, security group, network interface, subnet
   * - **EC2-VPC-EBS**
   *
   *   instance, image, security group, network interface, volume
   * - **EC2-VPC-EBS-Subnet**
   *
   *   instance, image, security group, network interface, subnet, volume
   *
   * @public
   */
  ResourceHandlingOption?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the row and column of a location of a `Statement` element in a policy document.
 *
 * This data type is used as a member of the `Statement` type.
 *
 * @public
 */
export interface Position {
  /**
   * The line containing the specified position in the document.
   *
   * @public
   */
  Line?: number | undefined;

  /**
   * The column in the line containing the specified position in the document.
   *
   * @public
   */
  Column?: number | undefined;
}

/**
 * Contains a reference to a `Statement` element in a policy document that determines the result of the simulation.
 *
 * This data type is used by the `MatchedStatements` member of the `EvaluationResult` type.
 *
 * @public
 */
export interface Statement {
  /**
   * The identifier of the policy that was provided as an input.
   *
   * @public
   */
  SourcePolicyId?: string | undefined;

  /**
   * The type of the policy.
   *
   * @public
   */
  SourcePolicyType?: PolicySourceType | undefined;

  /**
   * The row and column of the beginning of the `Statement` in an IAM policy.
   *
   * @public
   */
  StartPosition?: Position | undefined;

  /**
   * The row and column of the end of a `Statement` in an IAM policy.
   *
   * @public
   */
  EndPosition?: Position | undefined;
}

/**
 * Contains information about the effect that Organizations has on a policy simulation.
 *
 * @public
 */
export interface OrganizationsDecisionDetail {
  /**
   * Specifies whether the simulated operation is allowed by the Organizations service control policies that impact the simulated user's account.
   *
   * @public
   */
  AllowedByOrganizations?: boolean | undefined;
}

/**
 * Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
 *
 * @public
 */
export interface PermissionsBoundaryDecisionDetail {
  /**
   * Specifies whether an action is allowed by a permissions boundary that is applied to an IAM entity (user or role). A value of `true` means that the permissions boundary does not deny the action. This means that the policy includes an `Allow` statement that matches the request. In this case, if an identity-based policy also allows the action, the request is allowed. A value of `false` means that either the requested action is not allowed (implicitly denied) or that the action is explicitly denied by the permissions boundary. In both of these cases, the action is not allowed, regardless of the identity-based policy.
   *
   * @public
   */
  AllowedByPermissionsBoundary?: boolean | undefined;
}

/**
 * Contains the result of the simulation of a single API operation call on a single resource.
 *
 * This data type is used by a member of the [EvaluationResult](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EvaluationResult.html) data type.
 *
 * @public
 */
export interface ResourceSpecificResult {
  /**
   * The name of the simulated resource, in Amazon Resource Name (ARN) format.
   *
   * @public
   */
  EvalResourceName: string | undefined;

  /**
   * The result of the simulation of the simulated API operation on the resource specified in `EvalResourceName`.
   *
   * @public
   */
  EvalResourceDecision: PolicyEvaluationDecisionType | undefined;

  /**
   * A list of the statements in the input policies that determine the result for this part of the simulation. Remember that even if multiple statements allow the operation on the resource, if *any* statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.
   *
   * @public
   */
  MatchedStatements?: Statement[] | undefined;

  /**
   * A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when a list of ARNs is included in the `ResourceArns` parameter instead of "*". If you do not specify individual resources, by setting `ResourceArns` to "*" or by not including the `ResourceArns` parameter, then any missing context values are instead included under the `EvaluationResults` section. To discover the context keys used by a set of policies, you can call [GetContextKeysForCustomPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html) or [GetContextKeysForPrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html).
   *
   * @public
   */
  MissingContextValues?: string[] | undefined;

  /**
   * Additional details about the results of the evaluation decision on a single resource. This parameter is returned only for cross-account simulations. This parameter explains how each policy type contributes to the resource-specific evaluation decision.
   *
   * @public
   */
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;

  /**
   * Contains information about the effect that a permissions boundary has on a policy simulation when that boundary is applied to an IAM entity.
   *
   * @public
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;
}

/**
 * Contains the results of a simulation.
 *
 * This data type is used by the return parameter of `SimulateCustomPolicy` and `SimulatePrincipalPolicy`.
 *
 * > **Important:**
 * >
 * > The simulator now returns a single `EvaluationResult` per action, regardless of how many resource ARNs are provided. Previously, simulating one action against N resources returned N evaluation results, each containing the same aggregate decision. The top-level fields (`EvalDecision`, `MatchedStatements`, `MissingContextValues`, `EvalDecisionDetails`) now represent the *aggregate* decision across all requested resources. The top-level `EvalDecision` reflects the most restrictive decision across all resources (for example, if any resource produces `explicitDeny`, the top-level decision is `explicitDeny`).
 * >
 * > To see the decision for each individual resource, use `ResourceSpecificResults`. If your application parses evaluation results per resource ARN, update your code to read per-resource decisions from `ResourceSpecificResults` rather than from the top-level result.
 *
 * @public
 */
export interface EvaluationResult {
  /**
   * The name of the API operation tested on the indicated resource.
   *
   * @public
   */
  EvalActionName: string | undefined;

  /**
   * The ARN template for the simulated resource type (for example, `arn:$\{Partition\}:s3:::$\{BucketName\}/$\{KeyName\}`), or `*` if no ARN format is defined for the action. This is not a specific customer-provided resource ARN. To find the decision for a specific resource, use `ResourceSpecificResults`.
   *
   * > **Note:** If you previously relied on `EvalResourceName` to identify which specific resource a result applies to, you must now use the `EvalResourceName` field within individual entries in `ResourceSpecificResults` instead.
   *
   * @public
   */
  EvalResourceName?: string | undefined;

  /**
   * The result of the simulation.
   *
   * @public
   */
  EvalDecision: PolicyEvaluationDecisionType | undefined;

  /**
   * A list of the statements in the input policies that determine the result for this scenario. Remember that even if multiple statements allow the operation on the resource, if only one statement denies that operation, then the explicit deny overrides any allow. In addition, the deny statement is the only entry included in the result.
   *
   * In the top-level result, this field contains the union of matched statements across all requested resources. Only statements that contributed to the reported decision are included. For per-resource matched statements, see `ResourceSpecificResults`. This field doesn't include statements from service control policies (SCPs). Only statements from identity-based and resource-based policies appear here.
   *
   * @public
   */
  MatchedStatements?: Statement[] | undefined;

  /**
   * A list of context keys that are required by the included input policies but that were not provided by one of the input parameters. This list is used when the resource in a simulation is "*", either explicitly, or when the `ResourceArns` parameter blank. If you include a list of resources, then any missing context values are instead included under the `ResourceSpecificResults` section. To discover the context keys used by a set of policies, you can call [GetContextKeysForCustomPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html) or [GetContextKeysForPrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html).
   *
   * In the top-level result, this field contains the deduplicated set of missing context values across all requested resources. This field doesn't include context keys referenced by service control policies (SCPs). Only context keys referenced by identity-based and resource-based policies appear here.
   *
   * @public
   */
  MissingContextValues?: string[] | undefined;

  /**
   * A structure that details how Organizations and its service control policies affect the results of the simulation. Only applies if the simulated user's account is part of an organization.
   *
   * For resources that don't support organization-level evaluation, this field is omitted from the top-level result. For per-resource details, see `ResourceSpecificResults`.
   *
   * @public
   */
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail | undefined;

  /**
   * Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
   *
   * @public
   */
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail | undefined;

  /**
   * Additional details about the results of the cross-account evaluation decision. This parameter is populated for only cross-account simulations. It contains a brief summary of how each policy type contributes to the final evaluation decision.
   *
   * In the top-level result, this map reports the most restrictive decision per policy type across all requested resources.
   *
   * If the simulation evaluates policies within the same account and includes a resource ARN, then the parameter is present but the response is empty. If the simulation evaluates policies within the same account and specifies all resources (`*`), then the parameter is not returned.
   *
   * When you make a cross-account request, Amazon Web Services evaluates the request in the trusting account and the trusted account. The request is allowed only if both evaluations return `true`. For more information about how policies are evaluated, see [Evaluating policies within a single account](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics).
   *
   * If an Organizations SCP included in the evaluation denies access, the simulation ends. In this case, policy evaluation does not proceed any further and this parameter is not returned.
   *
   * @public
   */
  EvalDecisionDetails?: Record<string, PolicyEvaluationDecisionType> | undefined;

  /**
   * The individual results of the simulation of the API operation specified in EvalActionName on each resource.
   *
   * @public
   */
  ResourceSpecificResults?: ResourceSpecificResult[] | undefined;
}

/**
 * Contains the response to a successful [SimulatePrincipalPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html) or [SimulateCustomPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html) request.
 *
 * @public
 */
export interface SimulatePolicyResponse {
  /**
   * The results of the simulation.
   *
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * A flag that indicates whether there are more items to return. If your results were truncated, you can make a subsequent pagination request using the `Marker` request parameter to retrieve more items. Note that IAM might return fewer than the `MaxItems` number of results even when there are more results available. We recommend that you check `IsTruncated` after every call to ensure that you receive all your results.
   *
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * When `IsTruncated` is `true`, this element is present and contains the value to use for the `Marker` parameter in a subsequent pagination request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Identifies one or more inline policies that are embedded in IAM users, groups, or roles, by the name of the policy together with the type and name of the entity that it is attached to. Wildcard characters in the entity name can match multiple entities, so a single identifier can select more than one attached inline policy.
 *
 * @public
 */
export interface InlinePolicyIdentifierType {
  /**
   * The name of the inline policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The type of IAM entity that the inline policy is attached to.
   *
   * @public
   */
  AttachmentType: AttachmentType | undefined;

  /**
   * The name of the IAM user, group, or role that the inline policy is attached to. Wildcard characters are supported to match multiple entities: use at most one `*` (matches any sequence of characters, including none), and any number of `?` (each matches exactly one character).
   *
   * @public
   */
  AttachmentName: string | undefined;
}

/**
 * Identifies one or more policies as a union type. Specify exactly one of `PolicyType`, `PolicyArn`, or `InlinePolicyIdentifier` to identify policies by their type, by Amazon Resource Name (ARN), or by the name of an inline policy and the entity it is attached to.
 *
 * @public
 */
export type PolicyIdentifier =
  | PolicyIdentifier.InlinePolicyIdentifierMember
  | PolicyIdentifier.PolicyArnMember
  | PolicyIdentifier.PolicyTypeMember
  | PolicyIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace PolicyIdentifier {
  /**
   * The policy type to identify. All policies of the specified type are matched.
   *
   * @public
   */
  export interface PolicyTypeMember {
    PolicyType: PolicyIdentifierPolicyType;
    PolicyArn?: never;
    InlinePolicyIdentifier?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services managed policy or a customer managed policy that is attached to an IAM user, group, or role. Wildcard characters are supported in the resource name portion of the ARN to match multiple managed policies: use at most one `*` (matches any sequence of characters, including none), and any number of `?` (each matches exactly one character).
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  export interface PolicyArnMember {
    PolicyType?: never;
    PolicyArn: string;
    InlinePolicyIdentifier?: never;
    $unknown?: never;
  }

  /**
   * An inline policy identifier consisting of a policy name and the entity it is attached to. Wildcard characters (`*` and `?`) in the entity name can match multiple entities.
   *
   * @public
   */
  export interface InlinePolicyIdentifierMember {
    PolicyType?: never;
    PolicyArn?: never;
    InlinePolicyIdentifier: InlinePolicyIdentifierType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PolicyType?: never;
    PolicyArn?: never;
    InlinePolicyIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PolicyType: (value: PolicyIdentifierPolicyType) => T;
    PolicyArn: (value: string) => T;
    InlinePolicyIdentifier: (value: InlinePolicyIdentifierType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SimulatePrincipalPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to include in the simulation. If you specify a user, group, or role, the simulation includes all policies that are associated with that entity. If you specify a user, the simulation also includes all policies that are attached to any groups the user belongs to.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  PolicySourceArn: string | undefined;

  /**
   * An optional list of additional policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PolicyInputList?: string[] | undefined;

  /**
   * The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that the entity can have. You can input only one permissions boundary when you pass a policy to this operation. An IAM entity can only have one permissions boundary in effect at a time. For example, if a permissions boundary is attached to an entity and you pass in a different permissions boundary policy using this parameter, then the new permissions boundary policy is used for the simulation. For more information about permissions boundaries, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*. The policy input is specified as a string containing the complete, valid JSON text of a permissions boundary policy.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * @public
   */
  PermissionsBoundaryPolicyInputList?: string[] | undefined;

  /**
   * A list of policies to exclude from the simulation. Use this parameter to test what the simulation result would be if a policy were removed, without changing which policies are actually attached to the principal identified by `PolicySourceArn`.
   *
   * Each entry is a [PolicyIdentifier](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PolicyIdentifier.html) that identifies one or more policies to exclude by policy type, by Amazon Resource Name (ARN), or by the name of an inline policy and the entity it is attached to.
   *
   * Syntactically invalid identifiers, such as malformed ARNs or wildcards in disallowed positions, cause the request to fail with an `InvalidInput` error. Syntactically valid identifiers that don't match any attached policy are ignored. Resource control policies (RCPs) are not supported in this release; identifiers that target RCPs are also ignored.
   *
   * @public
   */
  PolicyExclusionList?: PolicyIdentifier[] | undefined;

  /**
   * A list of names of API operations to evaluate in the simulation. Each operation is evaluated for each resource. Each operation must include the service identifier, such as `iam:CreateUser`.
   *
   * @public
   */
  ActionNames: string[] | undefined;

  /**
   * A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is not provided, then the value defaults to `*` (all resources). Each API in the `ActionNames` parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. You can simulate resources that don't exist in your account.
   *
   * The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the `ResourcePolicy` parameter.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * > **Note:** Simulation of resource-based policies isn't supported for IAM roles.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   *
   * - Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
   * - The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
   * - The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)
   *
   * > **Note:** Simulation of resource-based policies isn't supported for IAM roles.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * An Amazon Web Services account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If `ResourceOwner` is specified, it is also used as the account owner of any `ResourcePolicy` included in the simulation. If the `ResourceOwner` parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in `CallerArn`. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user `CallerArn`.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The ARN of the IAM user, group, or role that you want to specify as the simulated caller of the API operations. If you do not specify a `CallerArn`, it defaults to the ARN of the user, group, or role that you specify in `PolicySourceArn`. If you include both a `PolicySourceArn` (for example, `arn:aws:iam::123456789012:user/David`) and a `CallerArn` (for example, `arn:aws:iam::123456789012:user/Bob`), the result is that you simulate calling the API operations as Bob, as if Bob had David's policies.
   *
   * You can specify the ARN of an IAM user, group, or role. You cannot specify the ARN of an assumed role, federated user, or a service principal.
   *
   * `CallerArn` is required if you include a `ResourcePolicy` and the `PolicySourceArn` is not the ARN for an IAM user, group, or role. This is required so that the resource-based policy's `Principal` element has a value to use in evaluating the policy.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  CallerArn?: string | undefined;

  /**
   * A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permissions policies, the corresponding value is supplied.
   *
   * @public
   */
  ContextEntries?: ContextEntry[] | undefined;

  /**
   * Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation.
   *
   * Each of the Amazon EC2 scenarios requires that you specify instance, image, and security group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the network interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the Amazon EC2 scenario options, see [Supported platforms](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html) in the *Amazon EC2 User Guide*.
   *
   * - **EC2-VPC-InstanceStore**
   *
   *   instance, image, security group, network interface
   * - **EC2-VPC-InstanceStore-Subnet**
   *
   *   instance, image, security group, network interface, subnet
   * - **EC2-VPC-EBS**
   *
   *   instance, image, security group, network interface, volume
   * - **EC2-VPC-EBS-Subnet**
   *
   *   instance, image, security group, network interface, subnet, volume
   *
   * @public
   */
  ResourceHandlingOption?: string | undefined;

  /**
   * Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the `IsTruncated` response element is `true`.
   *
   * If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the `IsTruncated` response element returns `true`, and `Marker` contains a value to include in the subsequent call that tells the service where to continue from.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the `Marker` element in the response that you received to indicate where the next call should start.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface TagInstanceProfileRequest {
  /**
   * The name of the IAM instance profile to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM instance profile. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagMFADeviceRequest {
  /**
   * The unique identifier for the IAM virtual MFA device to which you want to add tags. For virtual MFA devices, the serial number is the same as the ARN.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM virtual MFA device. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagOpenIDConnectProviderRequest {
  /**
   * The ARN of the OIDC identity provider in IAM to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * The list of tags that you want to attach to the OIDC identity provider in IAM. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagPolicyRequest {
  /**
   * The ARN of the IAM customer managed policy to which you want to add tags.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM customer managed policy. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagRoleRequest {
  /**
   * The name of the IAM role to which you want to add tags.
   *
   * This parameter accepts (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * The list of tags that you want to attach to the IAM role. Each tag consists of a key name and an associated value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}
