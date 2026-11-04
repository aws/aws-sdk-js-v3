// smithy-typescript generated code
import type {
  AccountRoleStatus,
  CustomerPolicyScopeIdType,
  CustomerPolicyStatus,
  DependentServiceName,
  DestinationType,
  EntryType,
  EntryViolationReason,
  FailedItemReason,
  FirewallDeploymentModel,
  MarketplaceSubscriptionOnboardingStatus,
  NetworkAclRuleAction,
  NetworkFirewallOverrideAction,
  OrganizationStatus,
  PolicyComplianceStatusType,
  RemediationActionType,
  ResourceSetStatus,
  ResourceTagLogicalOperator,
  RuleOrder,
  SecurityServiceType,
  StreamExceptionPolicy,
  TargetType,
  ThirdPartyFirewall,
  ThirdPartyFirewallAssociationStatus,
  ViolationReason,
} from "./enums";

/**
 * Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to.
 *
 * @public
 */
export interface AccountScope {
  /**
   * The list of accounts within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of `ExcludeSpecifiedAccounts`. If `ExcludeSpecifiedAccounts` is set to `true`, then the Firewall Manager administrator can apply policies to all members of the organization except for the accounts in this list. If `ExcludeSpecifiedAccounts` is set to `false`, then the Firewall Manager administrator can only apply policies to the accounts in this list.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * A boolean value that indicates if the administrator can apply policies to all accounts within an organization. If true, the administrator can apply policies to all accounts within the organization. You can either enable management of all accounts through this operation, or you can specify a list of accounts to manage in `AccountScope$Accounts`. You cannot specify both.
   *
   * @public
   */
  AllAccountsEnabled?: boolean | undefined;

  /**
   * A boolean value that excludes the accounts in `AccountScope$Accounts` from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all members of the organization except for the accounts listed in `AccountScope$Accounts`. You can either specify a list of accounts to exclude by `AccountScope$Accounts`, or you can enable management of all accounts by `AccountScope$AllAccountsEnabled`. You cannot specify both.
   *
   * @public
   */
  ExcludeSpecifiedAccounts?: boolean | undefined;
}

/**
 * Describes a remediation action target.
 *
 * @public
 */
export interface ActionTarget {
  /**
   * The ID of the remediation target.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * A description of the remediation action target.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains high level information about the Firewall Manager administrator account.
 *
 * @public
 */
export interface AdminAccountSummary {
  /**
   * The Amazon Web Services account ID of the Firewall Manager administrator's account.
   *
   * @public
   */
  AdminAccount?: string | undefined;

  /**
   * A boolean value that indicates if the administrator is the default administrator. If true, then this is the default administrator account. The default administrator can manage third-party firewalls and has full administrative scope. There is only one default administrator account per organization. For information about Firewall Manager default administrator accounts, see [Managing Firewall Manager administrators](https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html) in the *Firewall Manager Developer Guide*.
   *
   * @public
   */
  DefaultAdmin?: boolean | undefined;

  /**
   * The current status of the request to onboard a member account as an Firewall Manager administrator.
   *
   * - `ONBOARDING` - The account is onboarding to Firewall Manager as an administrator.
   * - `ONBOARDING_COMPLETE` - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their AdminScope.
   * - `OFFBOARDING` - The account is being removed as an Firewall Manager administrator.
   * - `OFFBOARDING_COMPLETE` - The account has been removed as an Firewall Manager administrator.
   *
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see [Managing organizational units (OUs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) in the *Organizations User Guide*.
 *
 * @public
 */
export interface OrganizationalUnitScope {
  /**
   * The list of OUs within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of `OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits`. If `OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits` is set to `true`, then the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs in this list. If `OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits` is set to `false`, then the Firewall Manager administrator can only apply policies to the OUs in this list.
   *
   * @public
   */
  OrganizationalUnits?: string[] | undefined;

  /**
   * A boolean value that indicates if the administrator can apply policies to all OUs within an organization. If true, the administrator can manage all OUs within the organization. You can either enable management of all OUs through this operation, or you can specify OUs to manage in `OrganizationalUnitScope$OrganizationalUnits`. You cannot specify both.
   *
   * @public
   */
  AllOrganizationalUnitsEnabled?: boolean | undefined;

  /**
   * A boolean value that excludes the OUs in `OrganizationalUnitScope$OrganizationalUnits` from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs listed in `OrganizationalUnitScope$OrganizationalUnits`. You can either specify a list of OUs to exclude by `OrganizationalUnitScope$OrganizationalUnits`, or you can enable management of all OUs by `OrganizationalUnitScope$AllOrganizationalUnitsEnabled`. You cannot specify both.
   *
   * @public
   */
  ExcludeSpecifiedOrganizationalUnits?: boolean | undefined;
}

/**
 * Defines the policy types that the specified Firewall Manager administrator can manage.
 *
 * @public
 */
export interface PolicyTypeScope {
  /**
   * The list of policy types that the specified Firewall Manager administrator can manage.
   *
   * @public
   */
  PolicyTypes?: SecurityServiceType[] | undefined;

  /**
   * Allows the specified Firewall Manager administrator to manage all Firewall Manager policy types, except for third-party policy types. Third-party policy types can only be managed by the Firewall Manager default administrator.
   *
   * @public
   */
  AllPolicyTypesEnabled?: boolean | undefined;
}

/**
 * Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage.
 *
 * @public
 */
export interface RegionScope {
  /**
   * The Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * Allows the specified Firewall Manager administrator to manage all Amazon Web Services Regions.
   *
   * @public
   */
  AllRegionsEnabled?: boolean | undefined;
}

/**
 * Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see [Managing Firewall Manager administrators](https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html) in the *Firewall Manager Developer Guide*.
 *
 * @public
 */
export interface AdminScope {
  /**
   * Defines the accounts that the specified Firewall Manager administrator can apply policies to.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * Defines the Organizations organizational units that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see [Managing organizational units (OUs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) in the *Organizations User Guide*.
   *
   * @public
   */
  OrganizationalUnitScope?: OrganizationalUnitScope | undefined;

  /**
   * Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.
   *
   * @public
   */
  RegionScope?: RegionScope | undefined;

  /**
   * Defines the Firewall Manager policy types that the specified Firewall Manager administrator can create and manage.
   *
   * @public
   */
  PolicyTypeScope?: PolicyTypeScope | undefined;
}

/**
 * An individual Firewall Manager application.
 *
 * @public
 */
export interface App {
  /**
   * The application's name.
   *
   * @public
   */
  AppName: string | undefined;

  /**
   * The IP protocol name or number. The name can be one of `tcp`, `udp`, or `icmp`. For information on possible numbers, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * The application's port number, for example `80`.
   *
   * @public
   */
  Port: number | undefined;
}

/**
 * An Firewall Manager applications list.
 *
 * @public
 */
export interface AppsListData {
  /**
   * The ID of the Firewall Manager applications list.
   *
   * @public
   */
  ListId?: string | undefined;

  /**
   * The name of the Firewall Manager applications list.
   *
   * @public
   */
  ListName: string | undefined;

  /**
   * A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list.
   *
   * @public
   */
  ListUpdateToken?: string | undefined;

  /**
   * The time that the Firewall Manager applications list was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time that the Firewall Manager applications list was last updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * An array of applications in the Firewall Manager applications list.
   *
   * @public
   */
  AppsList: App[] | undefined;

  /**
   * A map of previous version numbers to their corresponding `App` object arrays.
   *
   * @public
   */
  PreviousAppsList?: Record<string, App[]> | undefined;
}

/**
 * Details of the Firewall Manager applications list.
 *
 * @public
 */
export interface AppsListDataSummary {
  /**
   * The Amazon Resource Name (ARN) of the applications list.
   *
   * @public
   */
  ListArn?: string | undefined;

  /**
   * The ID of the applications list.
   *
   * @public
   */
  ListId?: string | undefined;

  /**
   * The name of the applications list.
   *
   * @public
   */
  ListName?: string | undefined;

  /**
   * An array of `App` objects in the Firewall Manager applications list.
   *
   * @public
   */
  AppsList?: App[] | undefined;
}

/**
 * @public
 */
export interface AssociateAdminAccountRequest {
  /**
   * The Amazon Web Services account ID to associate with Firewall Manager as the Firewall Manager default administrator account. This account must be a member account of the organization in Organizations whose resources you want to protect. For more information about Organizations, see [Managing the Amazon Web Services Accounts in Your Organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html).
   *
   * @public
   */
  AdminAccount: string | undefined;
}

/**
 * @public
 */
export interface AssociateThirdPartyFirewallRequest {
  /**
   * The name of the third-party firewall vendor.
   *
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 */
export interface AssociateThirdPartyFirewallResponse {
  /**
   * The current status for setting a Firewall Manager policy administrator's account as an administrator of the third-party firewall tenant.
   *
   * - `ONBOARDING` - The Firewall Manager policy administrator is being designated as a tenant administrator.
   * - `ONBOARD_COMPLETE` - The Firewall Manager policy administrator is designated as a tenant administrator.
   * - `OFFBOARDING` - The Firewall Manager policy administrator is being removed as a tenant administrator.
   * - `OFFBOARD_COMPLETE` - The Firewall Manager policy administrator has been removed as a tenant administrator.
   * - `NOT_EXIST` - The Firewall Manager policy administrator doesn't exist as a tenant administrator.
   *
   * @public
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | undefined;
}

/**
 * Violation detail for network interfaces associated with an EC2 instance.
 *
 * @public
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * The resource ID of the network interface.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * List of security groups that violate the rules specified in the primary security group of the Firewall Manager policy.
   *
   * @public
   */
  ViolatingSecurityGroups?: string[] | undefined;
}

/**
 * Violation detail for an EC2 instance resource.
 *
 * @public
 */
export interface AwsEc2InstanceViolation {
  /**
   * The resource ID of the EC2 instance.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * Violation detail for network interfaces associated with the EC2 instance.
   *
   * @public
   */
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourceRequest {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * The uniform resource identifiers (URIs) of resources that should be associated to the resource set. The URIs must be Amazon Resource Names (ARNs).
   *
   * @public
   */
  Items: string[] | undefined;
}

/**
 * Details of a resource that failed when trying to update it's association to a resource set.
 *
 * @public
 */
export interface FailedItem {
  /**
   * The univeral resource indicator (URI) of the resource that failed.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * The reason the resource's association could not be updated.
   *
   * @public
   */
  Reason?: FailedItemReason | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourceResponse {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * The resources that failed to associate to the resource set.
   *
   * @public
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceRequest {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * The uniform resource identifiers (URI) of resources that should be disassociated from the resource set. The URIs must be Amazon Resource Names (ARNs).
   *
   * @public
   */
  Items: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceResponse {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * The resources that failed to disassociate from the resource set.
   *
   * @public
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteAppsListRequest {
  /**
   * The ID of the applications list that you want to delete. You can retrieve this ID from `PutAppsList`, `ListAppsLists`, and `GetAppsList`.
   *
   * @public
   */
  ListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationChannelRequest {}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * The ID of the policy that you want to delete. You can retrieve this ID from `PutPolicy` and `ListPolicies`.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * If `True`, the request performs cleanup according to the policy type.
   *
   * For WAF and Shield Advanced policies, the cleanup does the following:
   *
   * - Deletes rule groups created by Firewall Manager
   * - Removes web ACLs from in-scope resources
   * - Deletes web ACLs that contain no rules or rule groups
   *
   * For security group policies, the cleanup does the following for each security group in the policy:
   *
   * - Disassociates the security group from in-scope resources
   * - Deletes the security group if it was created through Firewall Manager and if it's no longer associated with any resources through another policy
   *
   * > **Note:** For security group common policies, even if set to `False`, Firewall Manager deletes all security groups created by Firewall Manager that aren't associated with any other resources through another policy.
   *
   * After the cleanup, in-scope resources are no longer protected by web ACLs in this policy. Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you create and accounts that you associate with the policy. When creating the policy, if you specify that only resources in specific accounts or with specific tags are in scope of the policy, those accounts and resources are handled by the policy. All others are out of scope. If you don't specify tags or accounts, all resources are in scope.
   *
   * @public
   */
  DeleteAllPolicyResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProtocolsListRequest {
  /**
   * The ID of the protocols list that you want to delete. You can retrieve this ID from `PutProtocolsList`, `ListProtocolsLists`, and `GetProtocolsLost`.
   *
   * @public
   */
  ListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAdminAccountRequest {}

/**
 * @public
 */
export interface DisassociateThirdPartyFirewallRequest {
  /**
   * The name of the third-party firewall vendor.
   *
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 */
export interface DisassociateThirdPartyFirewallResponse {
  /**
   * The current status for the disassociation of a Firewall Manager administrators account with a third-party firewall.
   *
   * @public
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | undefined;
}

/**
 * @public
 */
export interface GetAdminAccountRequest {}

/**
 * @public
 */
export interface GetAdminAccountResponse {
  /**
   * The account that is set as the Firewall Manager default administrator.
   *
   * @public
   */
  AdminAccount?: string | undefined;

  /**
   * The status of the account that you set as the Firewall Manager default administrator.
   *
   * @public
   */
  RoleStatus?: AccountRoleStatus | undefined;
}

/**
 * @public
 */
export interface GetAdminScopeRequest {
  /**
   * The administrator account that you want to get the details for.
   *
   * @public
   */
  AdminAccount: string | undefined;
}

/**
 * @public
 */
export interface GetAdminScopeResponse {
  /**
   * Contains details about the administrative scope of the requested account.
   *
   * @public
   */
  AdminScope?: AdminScope | undefined;

  /**
   * The current status of the request to onboard a member account as an Firewall Manager administrator.
   *
   * - `ONBOARDING` - The account is onboarding to Firewall Manager as an administrator.
   * - `ONBOARDING_COMPLETE` - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their AdminScope.
   * - `OFFBOARDING` - The account is being removed as an Firewall Manager administrator.
   * - `OFFBOARDING_COMPLETE` - The account has been removed as an Firewall Manager administrator.
   *
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * @public
 */
export interface GetAppsListRequest {
  /**
   * The ID of the Firewall Manager applications list that you want the details for.
   *
   * @public
   */
  ListId: string | undefined;

  /**
   * Specifies whether the list to retrieve is a default list owned by Firewall Manager.
   *
   * @public
   */
  DefaultList?: boolean | undefined;
}

/**
 * @public
 */
export interface GetAppsListResponse {
  /**
   * Information about the specified Firewall Manager applications list.
   *
   * @public
   */
  AppsList?: AppsListData | undefined;

  /**
   * The Amazon Resource Name (ARN) of the applications list.
   *
   * @public
   */
  AppsListArn?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailRequest {
  /**
   * The ID of the policy that you want to get the details for. `PolicyId` is returned by `PutPolicy` and by `ListPolicies`.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Web Services account that owns the resources that you want to get the details for.
   *
   * @public
   */
  MemberAccount: string | undefined;
}

/**
 * Details of the resource that is not protected by the policy.
 *
 * @public
 */
export interface ComplianceViolator {
  /**
   * The resource ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The reason that the resource is not protected by the policy.
   *
   * @public
   */
  ViolationReason?: ViolationReason | undefined;

  /**
   * The resource type. This is in the format shown in the [Amazon Web Services Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html). For example: `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::CloudFront::Distribution`, or `AWS::NetworkFirewall::FirewallPolicy`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Metadata about the resource that doesn't comply with the policy scope.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, `EvaluationLimitExceeded` is set to `True`.
 *
 * @public
 */
export interface PolicyComplianceDetail {
  /**
   * The Amazon Web Services account that created the Firewall Manager policy.
   *
   * @public
   */
  PolicyOwner?: string | undefined;

  /**
   * The ID of the Firewall Manager policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  MemberAccount?: string | undefined;

  /**
   * An array of resources that aren't protected by the WAF or Shield Advanced policy or that aren't in compliance with the security group policy.
   *
   * @public
   */
  Violators?: ComplianceViolator[] | undefined;

  /**
   * Indicates if over 100 resources are noncompliant with the Firewall Manager policy.
   *
   * @public
   */
  EvaluationLimitExceeded?: boolean | undefined;

  /**
   * A timestamp that indicates when the returned information should be considered out of date.
   *
   * @public
   */
  ExpiredAt?: Date | undefined;

  /**
   * Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.
   *
   * @public
   */
  IssueInfoMap?: Partial<Record<DependentServiceName, string>> | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailResponse {
  /**
   * Information about the resources and the policy that you specified in the `GetComplianceDetail` request.
   *
   * @public
   */
  PolicyComplianceDetail?: PolicyComplianceDetail | undefined;
}

/**
 * @public
 */
export interface GetNotificationChannelRequest {}

/**
 * @public
 */
export interface GetNotificationChannelResponse {
  /**
   * The SNS topic that records Firewall Manager activity.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The IAM role that is used by Firewall Manager to record activity to SNS.
   *
   * @public
   */
  SnsRoleName?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The ID of the Firewall Manager policy that you want the details for.
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. If you add more than one tag to a policy, you can specify whether to combine them using the logical AND operator or the logical OR operator. For more information, see [Working with Tag Editor](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html).
 *
 * Every resource tag must have a string value, either a non-empty string or an empty string. If you don't provide a value for a resource tag, Firewall Manager saves the value as an empty string: "". When Firewall Manager compares tags, it only matches two tags if they have the same key and the same value. A tag with an empty string value only matches with tags that also have an empty string value.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The resource tag key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The resource tag value. To specify an empty string value, either don't provide this or specify it as "".
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * ICMP protocol: The ICMP type and code.
 *
 * @public
 */
export interface NetworkAclIcmpTypeCode {
  /**
   * ICMP code.
   *
   * @public
   */
  Code?: number | undefined;

  /**
   * ICMP type.
   *
   * @public
   */
  Type?: number | undefined;
}

/**
 * TCP or UDP protocols: The range of ports the rule applies to.
 *
 * @public
 */
export interface NetworkAclPortRange {
  /**
   * The beginning port number of the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The ending port number of the range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * Describes a rule in a network ACL.
 *
 * Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the network ACL, Amazon Web Services processes the entries in the network ACL according to the rule numbers, in ascending order.
 *
 * When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy, you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.
 *
 * @public
 */
export interface NetworkAclEntry {
  /**
   * ICMP protocol: The ICMP type and code.
   *
   * @public
   */
  IcmpTypeCode?: NetworkAclIcmpTypeCode | undefined;

  /**
   * The protocol number. A value of "-1" means all protocols.
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * TCP or UDP protocols: The range of ports the rule applies to.
   *
   * @public
   */
  PortRange?: NetworkAclPortRange | undefined;

  /**
   * The IPv4 network range to allow or deny, in CIDR notation.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The IPv6 network range to allow or deny, in CIDR notation.
   *
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * Indicates whether to allow or deny the traffic that matches the rule.
   *
   * @public
   */
  RuleAction: NetworkAclRuleAction | undefined;

  /**
   * Indicates whether the rule is an egress, or outbound, rule (applied to traffic leaving the subnet). If it's not an egress rule, then it's an ingress, or inbound, rule.
   *
   * @public
   */
  Egress: boolean | undefined;
}

/**
 * The configuration of the first and last rules for the network ACL policy, and the remediation settings for each.
 *
 * @public
 */
export interface NetworkAclEntrySet {
  /**
   * The rules that you want to run first in the Firewall Manager managed network ACLs.
   *
   * > **Note:** Provide these in the order in which you want them to run. Firewall Manager will assign the specific rule numbers for you, in the network ACLs that it creates.
   *
   * You must specify at least one first entry or one last entry in any network ACL policy.
   *
   * @public
   */
  FirstEntries?: NetworkAclEntry[] | undefined;

  /**
   * Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
   *
   * If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the *Firewall Manager Developer Guide*.
   *
   * @public
   */
  ForceRemediateForFirstEntries: boolean | undefined;

  /**
   * The rules that you want to run last in the Firewall Manager managed network ACLs.
   *
   * > **Note:** Provide these in the order in which you want them to run. Firewall Manager will assign the specific rule numbers for you, in the network ACLs that it creates.
   *
   * You must specify at least one first entry or one last entry in any network ACL policy.
   *
   * @public
   */
  LastEntries?: NetworkAclEntry[] | undefined;

  /**
   * Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
   *
   * If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the *Firewall Manager Developer Guide*.
   *
   * @public
   */
  ForceRemediateForLastEntries: boolean | undefined;
}

/**
 * Defines a Firewall Manager network ACL policy. This is used in the `PolicyOption` of a `SecurityServicePolicyData` for a `Policy`, when the `SecurityServicePolicyData` type is set to `NETWORK_ACL_COMMON`.
 *
 * For information about network ACLs, see [Control traffic to subnets using network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) in the *Amazon Virtual Private Cloud User Guide*.
 *
 * @public
 */
export interface NetworkAclCommonPolicy {
  /**
   * The definition of the first and last rules for the network ACL policy.
   *
   * @public
   */
  NetworkAclEntrySet: NetworkAclEntrySet | undefined;
}

/**
 * Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see [Network Firewall example architectures with routing](https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html) in the *Network Firewall Developer Guide*.
 *
 * @public
 */
export interface NetworkFirewallPolicy {
  /**
   * Defines the deployment model to use for the firewall policy. To use a distributed model, set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `NULL`.
   *
   * @public
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | undefined;
}

/**
 * Configures the deployment model for the third-party firewall.
 *
 * @public
 */
export interface ThirdPartyFirewallPolicy {
  /**
   * Defines the deployment model to use for the third-party firewall policy.
   *
   * @public
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | undefined;
}

/**
 * Contains the settings to configure a network ACL policy, a Network Firewall firewall policy deployment model, or a third-party firewall policy.
 *
 * @public
 */
export interface PolicyOption {
  /**
   * Defines the deployment model to use for the firewall policy.
   *
   * @public
   */
  NetworkFirewallPolicy?: NetworkFirewallPolicy | undefined;

  /**
   * Defines the policy options for a third-party firewall policy.
   *
   * @public
   */
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy | undefined;

  /**
   * Defines a Firewall Manager network ACL policy.
   *
   * @public
   */
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy | undefined;
}

/**
 * Details about the security service that is being used to protect the resources.
 *
 * @public
 */
export interface SecurityServicePolicyData {
  /**
   * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting Amazon Web Services Support.
   *
   * @public
   */
  Type: SecurityServiceType | undefined;

  /**
   * Details about the service that are specific to the service type, in JSON format.
   *
   * - Example: `DNS_FIREWALL`
   *
   *   `"\{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10\}],\"postProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911\}]\}"`
   *
   *   > **Note:** Valid values for `preProcessRuleGroups` are between 1 and 99. Valid values for `postProcessRuleGroups` are between 9901 and 10000.
   * - Example: `IMPORT_NETWORK_FIREWALL`
   *
   *   `"\{\"type\":\"IMPORT_NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":\{\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-west-2:000000000000:stateless-rulegroup\/rg1\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:drop\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:pass\"],\"networkFirewallStatelessCustomActions\":[],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-west-2:aws-managed:stateful-rulegroup\/ThreatSignaturesEmergingEventsStrictOrder\",\"priority\":8\}],\"networkFirewallStatefulEngineOptions\":\{\"ruleOrder\":\"STRICT_ORDER\"\},\"networkFirewallStatefulDefaultActions\":[\"aws:drop_strict\"]\}\}"`
   *
   *   `"\{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10\}],\"postProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911\}]\}"`
   *
   *   > **Note:** Valid values for `preProcessRuleGroups` are between 1 and 99. Valid values for `postProcessRuleGroups` are between 9901 and 10000.
   * - Example: `NETWORK_FIREWALL` - Centralized deployment model
   *
   *   `"\{\"type\":\"NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":\{\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\},\"firewallDeploymentModel\":\{\"centralizedFirewallDeploymentModel\":\{\"centralizedFirewallOrchestrationConfig\":\{\"inspectionVpcIds\":[\{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"\}],\"firewallCreationConfig\":\{\"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\}]\}\},\"allowedIPV4CidrList\":[]\}\}\}\}"`
   *
   *   To use the centralized deployment model, you must set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `CENTRALIZED`.
   * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration
   *
   *   `"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"OFF\"\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\}"`
   *
   *   With automatic Availbility Zone configuration, Firewall Manager chooses which Availability Zones to create the endpoints in. To use the distributed deployment model, you must set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `NULL`.
   * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration and route management
   *
   *   `"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"]\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\": \"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\}"`
   *
   *   To use the distributed deployment model, you must set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `NULL`.
   * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration
   *
   *   `"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\", \"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\},\{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"fragmentmetricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"firewallCreationConfig\":\{ \"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\},\{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[ \"10.0.0.0/28\"]\}]\} \},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"OFF\",\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":boolean\}\}"`
   *
   *   With custom Availability Zone configuration, you define which specific Availability Zones to create endpoints in by configuring `firewallCreationConfig`. To configure the Availability Zones in `firewallCreationConfig`, specify either the `availabilityZoneName` or `availabilityZoneId` parameter, not both parameters.
   *
   *   To use the distributed deployment model, you must set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `NULL`.
   * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration and route management
   *
   *   `"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\},\{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"fragmentmetricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"firewallCreationConfig\":\{\"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\},\{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\}]\}\},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"],\"routeManagementConfig\":\{\"allowCrossAZTrafficIfNoEndpoint\":true\}\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":boolean\}\}"`
   *
   *   To use the distributed deployment model, you must set [PolicyOption](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html) to `NULL`.
   * - Example: `SECURITY_GROUPS_COMMON`
   *
   *   `"\{\"type\":\"SECURITY_GROUPS_COMMON\",\"securityGroups\":[\{\"id\":\"sg-03b1f67d69ed00197\"\}],\"revertManualSecurityGroupChanges\":true,\"exclusiveResourceSecurityGroupManagement\":true,\"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"enableSecurityGroupReferencesDistribution\":true\}"`
   * - Example: `SECURITY_GROUPS_COMMON` - Security group tag distribution
   *
   *   `""\{\"type\":\"SECURITY_GROUPS_COMMON\",\"securityGroups\":[\{\"id\":\"sg-000e55995d61a06bd\"\}],\"revertManualSecurityGroupChanges\":true,\"exclusiveResourceSecurityGroupManagement\":false,\"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":false,\"enableTagDistribution\":true\}""`
   *
   *   Firewall Manager automatically distributes tags from the primary group to the security groups created by this policy. To use security group tag distribution, you must also set `revertManualSecurityGroupChanges` to `true`, otherwise Firewall Manager won't be able to create the policy. When you enable `revertManualSecurityGroupChanges`, Firewall Manager identifies and reports when the security groups created by this policy become non-compliant.
   *
   *   Firewall Manager won't distribute system tags added by Amazon Web Services services into the replica security groups. System tags begin with the `aws:` prefix.
   * - Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as well as to those in VPCs that the account owns
   *
   *   `"\{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[\{\"id\":\" sg-000e55995d61a06bd\"\}]\}"`
   * - Example: `SECURITY_GROUPS_CONTENT_AUDIT`
   *
   *   `"\{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"preManagedOptions\":[\{\"denyProtocolAllValue\":true\},\{\"auditSgDirection\":\{\"type\":\"ALL\"\}\}],\"securityGroups\":[\{\"id\":\"sg-049b2393a25468971\"\}],\"securityGroupAction\":\{\"type\":\"ALLOW\"\}\}"`
   *
   *   The security group action for content audit can be `ALLOW` or `DENY`. For `ALLOW`, all in-scope security group rules must be within the allowed range of the policy's security group rules. For `DENY`, all in-scope security group rules must not contain a value or a range that matches a rule value or range in the policy security group.
   * - Example: `SECURITY_GROUPS_USAGE_AUDIT`
   *
   *   `"\{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true,\"optionalDelayForUnusedInMinutes\":60\}"`
   * - Example: `SHIELD_ADVANCED` with web ACL management
   *
   *   `"\{\"type\":\"SHIELD_ADVANCED\",\"optimizeUnassociatedWebACL\":true\}"`
   *
   *   If you set `optimizeUnassociatedWebACL` to `true`, Firewall Manager creates web ACLs in accounts within the policy scope if the web ACLs will be used by at least one resource. Firewall Manager creates web ACLs in the accounts within policy scope only if the web ACLs will be used by at least one resource. If at any time an account comes into policy scope, Firewall Manager automatically creates a web ACL in the account if at least one resource will use the web ACL.
   *
   *   Upon enablement, Firewall Manager performs a one-time cleanup of unused web ACLs in your account. The cleanup process can take several hours. If a resource leaves policy scope after Firewall Manager creates a web ACL, Firewall Manager doesn't disassociate the resource from the web ACL. If you want Firewall Manager to clean up the web ACL, you must first manually disassociate the resources from the web ACL, and then enable the manage unused web ACLs option in your policy.
   *
   *   If you set `optimizeUnassociatedWebACL` to `false`, and Firewall Manager automatically creates an empty web ACL in each account that's within policy scope.
   * - Specification for `SHIELD_ADVANCED` for Amazon CloudFront distributions
   *
   *   `"\{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": \{\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\", \"automaticResponseAction\":\"BLOCK|COUNT\"\}, \"overrideCustomerWebaclClassic\":true|false, \"optimizeUnassociatedWebACL\":true|false\}"`
   *
   *   For example: `"\{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": \{\"automaticResponseStatus\":\"ENABLED\", \"automaticResponseAction\":\"COUNT\"\}\}"`
   *
   *   The default value for `automaticResponseStatus` is `IGNORED`. The value for `automaticResponseAction` is only required when `automaticResponseStatus` is set to `ENABLED`. The default value for `overrideCustomerWebaclClassic` is `false`.
   *
   *   For other resource types that you can protect with a Shield Advanced policy, this `ManagedServiceData` configuration is an empty string.
   * - Example: `THIRD_PARTY_FIREWALL`
   *
   *   Replace `THIRD_PARTY_FIREWALL_NAME` with the name of the third-party firewall.
   *
   *   `"\{ "type":"THIRD_PARTY_FIREWALL", "thirdPartyFirewall":"THIRD_PARTY_FIREWALL_NAME", "thirdPartyFirewallConfig":\{ "thirdPartyFirewallPolicyList":["global-1"] \}, "firewallDeploymentModel":\{ "distributedFirewallDeploymentModel":\{ "distributedFirewallOrchestrationConfig":\{ "firewallCreationConfig":\{ "endpointLocation":\{ "availabilityZoneConfigList":[ \{ "availabilityZoneName":"$\{AvailabilityZone\}" \} ] \} \}, "allowedIPV4CidrList":[ ] \} \} \} \}"`
   * - Example: `WAFV2` - Account takeover prevention, Bot Control managed rule groups, optimize unassociated web ACL, and rule action override
   *
   *   `"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesATPRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesATPRuleSet\":\{\"loginPath\":\"/loginpath\",\"requestInspection\":\{\"payloadType\":\"FORM_ENCODED|JSON\",\"usernameField\":\{\"identifier\":\"/form/username\"\},\"passwordField\":\{\"identifier\":\"/form/password\"\}\}\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\},\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesBotControlRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesBotControlRuleSet\":\{\"inspectionLevel\":\"TARGETED|COMMON\"\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true,\"ruleActionOverrides\":[\{\"name\":\"Rule1\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\},\{\"name\":\"Rule2\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\}]\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true,\"optimizeUnassociatedWebACL\":true\}"`
   *
   *   - Bot Control - For information about `AWSManagedRulesBotControlRuleSet` managed rule groups, see [AWSManagedRulesBotControlRuleSet](https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesBotControlRuleSet.html) in the *WAF API Reference*.
   *   - Fraud Control account takeover prevention (ATP) - For information about the properties available for `AWSManagedRulesATPRuleSet` managed rule groups, see [AWSManagedRulesATPRuleSet](https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesATPRuleSet.html) in the *WAF API Reference*.
   *   - Optimize unassociated web ACL - If you set `optimizeUnassociatedWebACL` to `true`, Firewall Manager creates web ACLs in accounts within the policy scope if the web ACLs will be used by at least one resource. Firewall Manager creates web ACLs in the accounts within policy scope only if the web ACLs will be used by at least one resource. If at any time an account comes into policy scope, Firewall Manager automatically creates a web ACL in the account if at least one resource will use the web ACL.
   *
   *     Upon enablement, Firewall Manager performs a one-time cleanup of unused web ACLs in your account. The cleanup process can take several hours. If a resource leaves policy scope after Firewall Manager creates a web ACL, Firewall Manager disassociates the resource from the web ACL, but won't clean up the unused web ACL. Firewall Manager only cleans up unused web ACLs when you first enable management of unused web ACLs in a policy.
   *
   *     If you set `optimizeUnassociatedWebACL` to `false` Firewall Manager doesn't manage unused web ACLs, and Firewall Manager automatically creates an empty web ACL in each account that's within policy scope.
   *   - Rule action overrides - Firewall Manager supports rule action overrides only for managed rule groups. To configure a `RuleActionOverrides` add the `Name` of the rule to override, and `ActionToUse`, which is the new action to use for the rule. For information about using rule action override, see [RuleActionOverride](https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleActionOverride.html) in the *WAF API Reference*.
   * - Example: `WAFV2` - `CAPTCHA` and `Challenge` configs
   *
   *   `"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\"\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true,\"captchaConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":500\}\},\"challengeConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":800\}\},\"tokenDomains\":[\"google.com\",\"amazon.com\"],\"associationConfig\":\{\"requestBody\":\{\"CLOUDFRONT\":\{\"defaultSizeInspectionLimit\":\"KB_16\"\}\}\}\}"`
   *
   *   - `CAPTCHA` and `Challenge` configs - If you update the policy's values for `associationConfig`, `captchaConfig`, `challengeConfig`, or `tokenDomains`, Firewall Manager will overwrite your local web ACLs to contain the new value(s). However, if you don't update the policy's `associationConfig`, `captchaConfig`, `challengeConfig`, or `tokenDomains` values, the values in your local web ACLs will remain unchanged. For information about association configs, see [AssociationConfig](https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociationConfig.html). For information about CAPTCHA and Challenge configs, see [CaptchaConfig](https://docs.aws.amazon.com/waf/latest/APIReference/API_CaptchaConfig.html) and [ChallengeConfig](https://docs.aws.amazon.com/waf/latest/APIReference/API_ChallengeConfig.html) in the *WAF API Reference*.
   *   - `defaultSizeInspectionLimit` - Specifies the maximum size of the web request body component that an associated Amazon CloudFront distribution should send to WAF for inspection. For more information, see [DefaultSizeInspectionLimit](https://docs.aws.amazon.com/waf/latest/APIReference/API_RequestBodyAssociatedResourceTypeConfig.html#WAF-Type-RequestBodyAssociatedResourceTypeConfig-DefaultSizeInspectionLimit) in the *WAF API Reference*.
   * - Example: `WAFV2` - Firewall Manager support for WAF managed rule group versioning
   *
   *   `"\{\"preProcessRuleGroups\":[\{\"ruleGroupType\":\"ManagedRuleGroup\",\"overrideAction\":\{\"type\":\"NONE\"\},\"sampledRequestsEnabled\":true,\"managedRuleGroupIdentifier\":\{\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\",\"vendorName\":\"AWS\",\"managedRuleGroupConfigs\":null\}\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"tokenDomains\":null,\"customResponse\":null,\"type\":\"WAFV2\",\"overrideCustomerWebACLAssociation\":false,\"sampledRequestsEnabledForDefaultActions\":true,\"optimizeUnassociatedWebACL\":true,\"webACLSource\":\"RETROFIT_EXISTING\"\}"`
   *
   *   To use a specific version of a WAF managed rule group in your Firewall Manager policy, you must set `versionEnabled` to `true`, and set `version` to the version you'd like to use. If you don't set `versionEnabled` to `true`, or if you omit `versionEnabled`, then Firewall Manager uses the default version of the WAF managed rule group.
   * - Example: `WAFV2` - Logging configurations
   *
   *   `"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null, \"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\": \{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\", \"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\"\} ,\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[], \"sampledRequestsEnabled\":true\}],\"postProcessRuleGroups\":[], \"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\" :null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\" :false,\"loggingConfiguration\":\{\"logDestinationConfigs\": [\"arn:aws:s3:::aws-waf-logs-example-bucket\"] ,\"redactedFields\":[],\"loggingFilterConfigs\":\{\"defaultBehavior\":\"KEEP\", \"filters\":[\{\"behavior\":\"KEEP\",\"requirement\":\"MEETS_ALL\", \"conditions\":[\{\"actionCondition\":\"CAPTCHA\"\},\{\"actionCondition\": \"CHALLENGE\"\}, \{\"actionCondition\":\"EXCLUDED_AS_COUNT\"\}]\}]\}\},\"sampledRequestsEnabledForDefaultActions\":true\}"`
   *
   *   Firewall Manager supports Amazon Kinesis Data Firehose and Amazon S3 as the `logDestinationConfigs` in your `loggingConfiguration`. For information about WAF logging configurations, see [LoggingConfiguration](https://docs.aws.amazon.com/waf/latest/APIReference/API_LoggingConfiguration.html) in the *WAF API Reference*
   *
   *   In the `loggingConfiguration`, you can specify one `logDestinationConfigs`. Optionally provide as many as 20 `redactedFields`. The `RedactedFieldType` must be one of `URI`, `QUERY_STRING`, `HEADER`, or `METHOD`.
   * - Example: `WAF Classic`
   *
   *   `"\{\"ruleGroups\":[\{\"id\":\"78cb36c0-1b5e-4d7d-82b2-cf48d3ad9659\",\"overrideAction\":\{\"type\":\"NONE\"\}\}],\"overrideCustomerWebACLAssociation\":true,\"defaultAction\":\{\"type\":\"ALLOW\"\},\"type\":\"WAF\"\}"`
   *
   * @public
   */
  ManagedServiceData?: string | undefined;

  /**
   * Contains the settings to configure a network ACL policy, a Network Firewall firewall policy deployment model, or a third-party firewall policy.
   *
   * @public
   */
  PolicyOption?: PolicyOption | undefined;
}

/**
 * An Firewall Manager policy.
 *
 * @public
 */
export interface Policy {
  /**
   * The ID of the Firewall Manager policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The name of the Firewall Manager policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * A unique identifier for each update to the policy. When issuing a `PutPolicy` request, the `PolicyUpdateToken` in the request must match the `PolicyUpdateToken` of the current policy version. To get the `PolicyUpdateToken` of the current policy version, use a `GetPolicy` request.
   *
   * @public
   */
  PolicyUpdateToken?: string | undefined;

  /**
   * Details about the security service that is being used to protect the resources.
   *
   * @public
   */
  SecurityServicePolicyData: SecurityServicePolicyData | undefined;

  /**
   * The type of resource protected by or in scope of the policy. This is in the format shown in the [Amazon Web Services Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html). To apply this policy to multiple resource types, specify a resource type of `ResourceTypeList` and then specify the resource types in a `ResourceTypeList`.
   *
   * The following are valid resource types for each Firewall Manager policy type:
   *
   * - Amazon Web Services WAF Classic - `AWS::ApiGateway::Stage`, `AWS::CloudFront::Distribution`, and `AWS::ElasticLoadBalancingV2::LoadBalancer`.
   * - WAF - `AWS::ApiGateway::Stage`, `AWS::ElasticLoadBalancingV2::LoadBalancer`, and `AWS::CloudFront::Distribution`.
   * - Shield Advanced - `AWS::ElasticLoadBalancingV2::LoadBalancer`, `AWS::ElasticLoadBalancing::LoadBalancer`, `AWS::EC2::EIP`, and `AWS::CloudFront::Distribution`.
   * - Network ACL - `AWS::EC2::Subnet`.
   * - Security group usage audit - `AWS::EC2::SecurityGroup`.
   * - Security group content audit - `AWS::EC2::SecurityGroup`, `AWS::EC2::NetworkInterface`, and `AWS::EC2::Instance`.
   * - DNS Firewall, Network Firewall, and third-party firewall - `AWS::EC2::VPC`.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * An array of `ResourceType` objects. Use this only to specify multiple resource types. To specify a single resource type, use `ResourceType`.
   *
   * @public
   */
  ResourceTypeList?: string[] | undefined;

  /**
   * An array of `ResourceTag` objects.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * If set to `True`, resources with the tags that are specified in the `ResourceTag` array are not in scope of the policy. If set to `False`, and the `ResourceTag` array is not null, only resources with the specified tags are in scope of the policy.
   *
   * @public
   */
  ExcludeResourceTags: boolean | undefined;

  /**
   * Indicates if the policy should be automatically applied to new resources.
   *
   * @public
   */
  RemediationEnabled: boolean | undefined;

  /**
   * Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope.
   *
   * By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources.
   *
   * This option is not available for Shield Advanced or WAF Classic policies.
   *
   * @public
   */
  DeleteUnusedFMManagedResources?: boolean | undefined;

  /**
   * Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to include in the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
   *
   * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
   *
   * You can specify account IDs, OUs, or a combination:
   *
   * - Specify account IDs by setting the key to `ACCOUNT`. For example, the following is a valid map: `\{“ACCOUNT” : [“accountID1”, “accountID2”]\}`.
   * - Specify OUs by setting the key to `ORG_UNIT`. For example, the following is a valid map: `\{“ORG_UNIT” : [“ouid111”, “ouid112”]\}`.
   * - Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `\{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]\}`.
   *
   * @public
   */
  IncludeMap?: Partial<Record<CustomerPolicyScopeIdType, string[]>> | undefined;

  /**
   * Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
   *
   * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
   *
   * You can specify account IDs, OUs, or a combination:
   *
   * - Specify account IDs by setting the key to `ACCOUNT`. For example, the following is a valid map: `\{“ACCOUNT” : [“accountID1”, “accountID2”]\}`.
   * - Specify OUs by setting the key to `ORG_UNIT`. For example, the following is a valid map: `\{“ORG_UNIT” : [“ouid111”, “ouid112”]\}`.
   * - Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `\{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]\}`.
   *
   * @public
   */
  ExcludeMap?: Partial<Record<CustomerPolicyScopeIdType, string[]>> | undefined;

  /**
   * The unique identifiers of the resource sets used by the policy.
   *
   * @public
   */
  ResourceSetIds?: string[] | undefined;

  /**
   * Your description of the Firewall Manager policy.
   *
   * @public
   */
  PolicyDescription?: string | undefined;

  /**
   * Indicates whether the policy is in or out of an admin's policy or Region scope.
   *
   * - `ACTIVE` - The administrator can manage and delete the policy.
   * - `OUT_OF_ADMIN_SCOPE` - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.
   *
   * @public
   */
  PolicyStatus?: CustomerPolicyStatus | undefined;

  /**
   * Specifies whether to combine multiple resource tags with AND, so that a resource must have all tags to be included or excluded, or OR, so that a resource must have at least one tag.
   *
   * Default: `AND`
   *
   * @public
   */
  ResourceTagLogicalOperator?: ResourceTagLogicalOperator | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * Information about the specified Firewall Manager policy.
   *
   * @public
   */
  Policy?: Policy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the specified policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetProtectionStatusRequest {
  /**
   * The ID of the policy for which you want to get the attack information.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Web Services account that is in scope of the policy that you want to get the details for.
   *
   * @public
   */
  MemberAccountId?: string | undefined;

  /**
   * The start of the time period to query for the attacks. This is a `timestamp` type. The request syntax listing indicates a `number` type because the default used by Firewall Manager is Unix time in seconds. However, any valid `timestamp` format is allowed.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time period to query for the attacks. This is a `timestamp` type. The request syntax listing indicates a `number` type because the default used by Firewall Manager is Unix time in seconds. However, any valid `timestamp` format is allowed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * If you specify a value for `MaxResults` and you have more objects than the number that you specify for `MaxResults`, Firewall Manager returns a `NextToken` value in the response, which you can use to retrieve another group of objects. For the second and subsequent `GetProtectionStatus` requests, specify the value of `NextToken` from the previous response to get information about another batch of objects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the number of objects that you want Firewall Manager to return for this request. If you have more objects than the number that you specify for `MaxResults`, the response includes a `NextToken` value that you can use to get another batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetProtectionStatusResponse {
  /**
   * The ID of the Firewall Manager administrator account for this policy.
   *
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * The service type that is protected by the policy. Currently, this is always `SHIELD_ADVANCED`.
   *
   * @public
   */
  ServiceType?: SecurityServiceType | undefined;

  /**
   * Details about the attack, including the following:
   *
   * - Attack type
   * - Account ID
   * - ARN of the resource attacked
   * - Start time of the attack
   * - End time of the attack (ongoing attacks will not have an end time)
   *
   * The details are in JSON format.
   *
   * @public
   */
  Data?: string | undefined;

  /**
   * If you have more objects than the number that you specified for `MaxResults` in the request, the response includes a `NextToken` value. To list more objects, submit another `GetProtectionStatus` request, and specify the `NextToken` value from the response in the `NextToken` value in the next request.
   *
   * Amazon Web Services SDKs provide auto-pagination that identify `NextToken` in a response and make subsequent request calls automatically on your behalf. However, this feature is not supported by `GetProtectionStatus`. You must submit subsequent requests with `NextToken` using your own processes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProtocolsListRequest {
  /**
   * The ID of the Firewall Manager protocols list that you want the details for.
   *
   * @public
   */
  ListId: string | undefined;

  /**
   * Specifies whether the list to retrieve is a default list owned by Firewall Manager.
   *
   * @public
   */
  DefaultList?: boolean | undefined;
}

/**
 * An Firewall Manager protocols list.
 *
 * @public
 */
export interface ProtocolsListData {
  /**
   * The ID of the Firewall Manager protocols list.
   *
   * @public
   */
  ListId?: string | undefined;

  /**
   * The name of the Firewall Manager protocols list.
   *
   * @public
   */
  ListName: string | undefined;

  /**
   * A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list.
   *
   * @public
   */
  ListUpdateToken?: string | undefined;

  /**
   * The time that the Firewall Manager protocols list was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time that the Firewall Manager protocols list was last updated.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * An array of protocols in the Firewall Manager protocols list.
   *
   * @public
   */
  ProtocolsList: string[] | undefined;

  /**
   * A map of previous version numbers to their corresponding protocol arrays.
   *
   * @public
   */
  PreviousProtocolsList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetProtocolsListResponse {
  /**
   * Information about the specified Firewall Manager protocols list.
   *
   * @public
   */
  ProtocolsList?: ProtocolsListData | undefined;

  /**
   * The Amazon Resource Name (ARN) of the specified protocols list.
   *
   * @public
   */
  ProtocolsListArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * A set of resources to include in a policy.
 *
 * @public
 */
export interface ResourceSet {
  /**
   * A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The descriptive name of the resource set. You can't change the name of a resource set after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the resource set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An optional token that you can use for optimistic locking. Firewall Manager returns a token to your requests that access the resource set. The token marks the state of the resource set resource at the time of the request. Update tokens are not allowed when creating a resource set. After creation, each subsequent update call to the resource set requires the update token.
   *
   * To make an unconditional change to the resource set, omit the token in your update request. Without the token, Firewall Manager performs your updates regardless of whether the resource set has changed since you last retrieved it.
   *
   * To make a conditional change to the resource set, provide the token in your update request. Firewall Manager uses the token to ensure that the resource set hasn't changed since you last retrieved it. If it has changed, the operation fails with an `InvalidTokenException`. If this happens, retrieve the resource set again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.
   *
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * Determines the resources that can be associated to the resource set. Depending on your setting for max results and the number of resource sets, a single call might not return the full list.
   *
   * @public
   */
  ResourceTypeList: string[] | undefined;

  /**
   * The last time that the resource set was changed.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * Indicates whether the resource set is in or out of an admin's Region scope.
   *
   * - `ACTIVE` - The administrator can manage and delete the resource set.
   * - `OUT_OF_ADMIN_SCOPE` - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.
   *
   * @public
   */
  ResourceSetStatus?: ResourceSetStatus | undefined;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * Information about the specified resource set.
   *
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource set.
   *
   * @public
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface GetThirdPartyFirewallAssociationStatusRequest {
  /**
   * The name of the third-party firewall vendor.
   *
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 */
export interface GetThirdPartyFirewallAssociationStatusResponse {
  /**
   * The current status for setting a Firewall Manager policy administrators account as an administrator of the third-party firewall tenant.
   *
   * - `ONBOARDING` - The Firewall Manager policy administrator is being designated as a tenant administrator.
   * - `ONBOARD_COMPLETE` - The Firewall Manager policy administrator is designated as a tenant administrator.
   * - `OFFBOARDING` - The Firewall Manager policy administrator is being removed as a tenant administrator.
   * - `OFFBOARD_COMPLETE` - The Firewall Manager policy administrator has been removed as a tenant administrator.
   * - `NOT_EXIST` - The Firewall Manager policy administrator doesn't exist as a tenant administrator.
   *
   * @public
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | undefined;

  /**
   * The status for subscribing to the third-party firewall vendor in the Amazon Web Services Marketplace.
   *
   * - `NO_SUBSCRIPTION` - The Firewall Manager policy administrator isn't subscribed to the third-party firewall service in the Amazon Web Services Marketplace.
   * - `NOT_COMPLETE` - The Firewall Manager policy administrator is in the process of subscribing to the third-party firewall service in the Amazon Web Services Marketplace, but doesn't yet have an active subscription.
   * - `COMPLETE` - The Firewall Manager policy administrator has an active subscription to the third-party firewall service in the Amazon Web Services Marketplace.
   *
   * @public
   */
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus | undefined;
}

/**
 * @public
 */
export interface GetViolationDetailsRequest {
  /**
   * The ID of the Firewall Manager policy that you want the details for. You can get violation details for the following policy types:
   *
   * - WAF
   * - DNS Firewall
   * - Imported Network Firewall
   * - Network Firewall
   * - Security group content audit
   * - Network ACL
   * - Third-party firewall
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Web Services account ID that you want the details for.
   *
   * @public
   */
  MemberAccount: string | undefined;

  /**
   * The ID of the resource that has violations.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The resource type. This is in the format shown in the [Amazon Web Services Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html). Supported resource types are: `AWS::WAFv2::WebACL`, `AWS::EC2::Instance`, `AWS::EC2::NetworkInterface`, `AWS::EC2::SecurityGroup`, `AWS::NetworkFirewall::FirewallPolicy`, and `AWS::EC2::Subnet`.
   *
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.
 *
 * @public
 */
export interface Tag {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The reference rule that partially matches the `ViolationTarget` rule and violation reason.
 *
 * @public
 */
export interface PartialMatch {
  /**
   * The reference rule from the primary security group of the Firewall Manager policy.
   *
   * @public
   */
  Reference?: string | undefined;

  /**
   * The violation reason.
   *
   * @public
   */
  TargetViolationReasons?: string[] | undefined;
}

/**
 * Describes a set of permissions for a security group rule.
 *
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * The IPv4 ranges for the security group rule.
   *
   * @public
   */
  IPV4Range?: string | undefined;

  /**
   * The IPv6 ranges for the security group rule.
   *
   * @public
   */
  IPV6Range?: string | undefined;

  /**
   * The ID of the prefix list for the security group rule.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of `-1` indicates all ICMP/ICMPv6 types.
   *
   * @public
   */
  FromPort?: number | undefined;

  /**
   * The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of `-1` indicates all ICMP/ICMPv6 codes.
   *
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * Remediation option for the rule specified in the `ViolationTarget`.
 *
 * @public
 */
export interface SecurityGroupRemediationAction {
  /**
   * The remediation action that will be performed.
   *
   * @public
   */
  RemediationActionType?: RemediationActionType | undefined;

  /**
   * Brief description of the action that will be performed.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The final state of the rule specified in the `ViolationTarget` after it is remediated.
   *
   * @public
   */
  RemediationResult?: SecurityGroupRuleDescription | undefined;

  /**
   * Indicates if the current action is the default action.
   *
   * @public
   */
  IsDefaultAction?: boolean | undefined;
}

/**
 * Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
 *
 * @public
 */
export interface AwsVPCSecurityGroupViolation {
  /**
   * The security group rule that is being evaluated.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * A description of the security group that violates the policy.
   *
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * List of rules specified in the security group of the Firewall Manager policy that partially match the `ViolationTarget` rule.
   *
   * @public
   */
  PartialMatches?: PartialMatch[] | undefined;

  /**
   * Remediation options for the rule specified in the `ViolationTarget`.
   *
   * @public
   */
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[] | undefined;
}

/**
 * A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.
 *
 * @public
 */
export interface DnsDuplicateRuleGroupViolation {
  /**
   * Information about the VPC ID.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * A description of the violation that specifies the rule group and VPC.
   *
   * @public
   */
  ViolationTargetDescription?: string | undefined;
}

/**
 * The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.
 *
 * @public
 */
export interface DnsRuleGroupLimitExceededViolation {
  /**
   * Information about the VPC ID.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * A description of the violation that specifies the rule group and VPC.
   *
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * The number of rule groups currently associated with the VPC.
   *
   * @public
   */
  NumberOfRuleGroupsAlreadyAssociated?: number | undefined;
}

/**
 * A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.
 *
 * @public
 */
export interface DnsRuleGroupPriorityConflictViolation {
  /**
   * Information about the VPC ID.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * A description of the violation that specifies the VPC and the rule group that's already associated with it.
   *
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * The priority setting of the two conflicting rule groups.
   *
   * @public
   */
  ConflictingPriority?: number | undefined;

  /**
   * The ID of the Firewall Manager DNS Firewall policy that was already applied to the VPC. This policy contains the rule group that's already associated with the VPC.
   *
   * @public
   */
  ConflictingPolicyId?: string | undefined;

  /**
   * The priorities of rule groups that are already associated with the VPC. To retry your operation, choose priority settings that aren't in this list for the rule groups in your new DNS Firewall policy.
   *
   * @public
   */
  UnavailablePriorities?: number[] | undefined;
}

/**
 * Contains details about the firewall subnet that violates the policy scope.
 *
 * @public
 */
export interface FirewallSubnetIsOutOfScopeViolation {
  /**
   * The ID of the firewall subnet that violates the policy scope.
   *
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * The VPC ID of the firewall subnet that violates the policy scope.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Availability Zone of the firewall subnet that violates the policy scope.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the firewall subnet that violates the policy scope.
   *
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;

  /**
   * The VPC endpoint ID of the firewall subnet that violates the policy scope.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * The violation details for a firewall subnet's VPC endpoint that's deleted or missing.
 *
 * @public
 */
export interface FirewallSubnetMissingVPCEndpointViolation {
  /**
   * The ID of the firewall that this VPC endpoint is associated with.
   *
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * The resource ID of the VPC associated with the deleted VPC subnet.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The name of the Availability Zone of the deleted VPC subnet.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone of the deleted VPC subnet.
   *
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;
}

/**
 * Describes a single rule in a network ACL.
 *
 * @public
 */
export interface EntryDescription {
  /**
   * Describes a rule in a network ACL.
   *
   * Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the network ACL, Amazon Web Services processes the entries in the network ACL according to the rule numbers, in ascending order.
   *
   * When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy, you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.
   *
   * @public
   */
  EntryDetail?: NetworkAclEntry | undefined;

  /**
   * The rule number for the entry. ACL entries are processed in ascending order by rule number. In a Firewall Manager network ACL policy, Firewall Manager assigns rule numbers.
   *
   * @public
   */
  EntryRuleNumber?: number | undefined;

  /**
   * Specifies whether the entry is managed by Firewall Manager or by a user, and, for Firewall Manager-managed entries, specifies whether the entry is among those that run first in the network ACL or those that run last.
   *
   * @public
   */
  EntryType?: EntryType | undefined;
}

/**
 * Detailed information about an entry violation in a network ACL. The violation is against the network ACL specification inside the Firewall Manager network ACL policy. This data object is part of `InvalidNetworkAclEntriesViolation`.
 *
 * @public
 */
export interface EntryViolation {
  /**
   * The Firewall Manager-managed network ACL entry that is involved in the entry violation.
   *
   * @public
   */
  ExpectedEntry?: EntryDescription | undefined;

  /**
   * The evaluation location within the ordered list of entries where the `ExpectedEntry` should be, according to the network ACL policy specifications.
   *
   * @public
   */
  ExpectedEvaluationOrder?: string | undefined;

  /**
   * The evaluation location within the ordered list of entries where the `ExpectedEntry` is currently located.
   *
   * @public
   */
  ActualEvaluationOrder?: string | undefined;

  /**
   * The entry that's currently in the `ExpectedEvaluationOrder` location, in place of the expected entry.
   *
   * @public
   */
  EntryAtExpectedEvaluationOrder?: EntryDescription | undefined;

  /**
   * The list of entries that are in conflict with `ExpectedEntry`.
   *
   * @public
   */
  EntriesWithConflicts?: EntryDescription[] | undefined;

  /**
   * Descriptions of the violations that Firewall Manager found for these entries.
   *
   * @public
   */
  EntryViolationReasons?: EntryViolationReason[] | undefined;
}

/**
 * Violation detail for the entries in a network ACL resource.
 *
 * @public
 */
export interface InvalidNetworkAclEntriesViolation {
  /**
   * The VPC where the violation was found.
   *
   * @public
   */
  Vpc?: string | undefined;

  /**
   * The subnet that's associated with the network ACL.
   *
   * @public
   */
  Subnet?: string | undefined;

  /**
   * The Availability Zone where the network ACL is in use.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * The network ACL containing the entry violations.
   *
   * @public
   */
  CurrentAssociatedNetworkAcl?: string | undefined;

  /**
   * Detailed information about the entry violations in the network ACL.
   *
   * @public
   */
  EntryViolations?: EntryViolation[] | undefined;
}

/**
 * Describes a route in a route table.
 *
 * @public
 */
export interface Route {
  /**
   * The type of destination for the route.
   *
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * The type of target for the route.
   *
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * The destination of the route.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The route's target.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
 *
 * @public
 */
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * The subnet that has an inactive state.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * Information about the route table ID.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Information about the route or routes that are in violation.
   *
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;
}

/**
 * Information about the expected route in the route table.
 *
 * @public
 */
export interface ExpectedRoute {
  /**
   * Information about the IPv4 CIDR block.
   *
   * @public
   */
  IpV4Cidr?: string | undefined;

  /**
   * Information about the ID of the prefix list for the route.
   *
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * Information about the IPv6 CIDR block.
   *
   * @public
   */
  IpV6Cidr?: string | undefined;

  /**
   * Information about the contributing subnets.
   *
   * @public
   */
  ContributingSubnets?: string[] | undefined;

  /**
   * Information about the allowed targets.
   *
   * @public
   */
  AllowedTargets?: string[] | undefined;

  /**
   * Information about the route table ID.
   *
   * @public
   */
  RouteTableId?: string | undefined;
}

/**
 * Violation detail for the subnet for which internet traffic that hasn't been inspected.
 *
 * @public
 */
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * The subnet ID.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The subnet Availability Zone.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * Information about the route table ID.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The route or routes that are in violation.
   *
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * Information about whether the route table is used in another Availability Zone.
   *
   * @public
   */
  IsRouteTableUsedInDifferentAZ?: boolean | undefined;

  /**
   * Information about the subnet route table for the current firewall.
   *
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * The expected endpoint for the current firewall.
   *
   * @public
   */
  ExpectedFirewallEndpoint?: string | undefined;

  /**
   * The firewall subnet ID.
   *
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * The firewall subnet routes that are expected.
   *
   * @public
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[] | undefined;

  /**
   * The actual firewall subnet routes.
   *
   * @public
   */
  ActualFirewallSubnetRoutes?: Route[] | undefined;

  /**
   * The internet gateway ID.
   *
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * The current route table for the internet gateway.
   *
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * The internet gateway routes that are expected.
   *
   * @public
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[] | undefined;

  /**
   * The actual internet gateway routes.
   *
   * @public
   */
  ActualInternetGatewayRoutes?: Route[] | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary.
 *
 * @public
 */
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * The subnets that are affected.
   *
   * @public
   */
  AffectedSubnets?: string[] | undefined;

  /**
   * The route table ID.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * Information about whether the route table is used in another Availability Zone.
   *
   * @public
   */
  IsRouteTableUsedInDifferentAZ?: boolean | undefined;

  /**
   * The route that's in violation.
   *
   * @public
   */
  ViolatingRoute?: Route | undefined;

  /**
   * The subnet route table for the current firewall.
   *
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * The firewall endpoint that's expected.
   *
   * @public
   */
  ExpectedFirewallEndpoint?: string | undefined;

  /**
   * The actual firewall endpoint.
   *
   * @public
   */
  ActualFirewallEndpoint?: string | undefined;

  /**
   * The expected subnet ID for the firewall.
   *
   * @public
   */
  ExpectedFirewallSubnetId?: string | undefined;

  /**
   * The actual subnet ID for the firewall.
   *
   * @public
   */
  ActualFirewallSubnetId?: string | undefined;

  /**
   * The firewall subnet routes that are expected.
   *
   * @public
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[] | undefined;

  /**
   * The actual firewall subnet routes that are expected.
   *
   * @public
   */
  ActualFirewallSubnetRoutes?: Route[] | undefined;

  /**
   * The internet gateway ID.
   *
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * The route table for the current internet gateway.
   *
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * The expected routes for the internet gateway.
   *
   * @public
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[] | undefined;

  /**
   * The actual internet gateway routes.
   *
   * @public
   */
  ActualInternetGatewayRoutes?: Route[] | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Violation detail for an expected route missing in Network Firewall.
 *
 * @public
 */
export interface NetworkFirewallMissingExpectedRoutesViolation {
  /**
   * The target of the violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The expected routes.
   *
   * @public
   */
  ExpectedRoutes?: ExpectedRoute[] | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
 *
 * @public
 */
export interface NetworkFirewallMissingExpectedRTViolation {
  /**
   * The ID of the Network Firewall or VPC resource that's in violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a violating subnet.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of a violating subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The resource ID of the current route table that's associated with the subnet, if one is available.
   *
   * @public
   */
  CurrentRouteTable?: string | undefined;

  /**
   * The resource ID of the route table that should be associated with the subnet.
   *
   * @public
   */
  ExpectedRouteTable?: string | undefined;
}

/**
 * Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.
 *
 * @public
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * The ID of the Network Firewall or VPC resource that's in violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a violating subnet.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of a violating subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The reason the resource has this violation, if one is available.
   *
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet.
 *
 * @public
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * The ID of the Network Firewall or VPC resource that's in violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a violating subnet.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of a violating subnet.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The reason the resource has this violation, if one is available.
   *
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.
 *
 * @public
 */
export interface StatefulEngineOptions {
  /**
   * Indicates how to manage the order of stateful rule evaluation for the policy. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the *Network Firewall Developer Guide*.
   *
   * Default: `DEFAULT_ACTION_ORDER`
   *
   * @public
   */
  RuleOrder?: RuleOrder | undefined;

  /**
   * Indicates how Network Firewall should handle traffic when a network connection breaks midstream.
   *
   * - `DROP` - Fail closed and drop all subsequent traffic going to the firewall.
   * - `CONTINUE` - Continue to apply rules to subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on context. For example, with a stateful rule that drops HTTP traffic, Network Firewall won't match subsequent traffic because the it won't have the context from session initialization, which defines the application layer protocol as HTTP. However, a TCP-layer rule using a `flow:stateless` rule would still match, and so would the `aws:drop_strict` default action.
   * - `REJECT` - Fail closed and drop all subsequent traffic going to the firewall. With this option, Network Firewall also sends a TCP reject packet back to the client so the client can immediately establish a new session. With the new session, Network Firewall will have context and will apply rules appropriately.
   *
   *   For applications that are reliant on long-lived TCP connections that trigger Gateway Load Balancer idle timeouts, this is the recommended setting.
   * - `FMS_IGNORE` - Firewall Manager doesn't monitor or modify the Network Firewall stream exception policy settings.
   *
   * For more information, see [Stream exception policy in your firewall policy](https://docs.aws.amazon.com/network-firewall/latest/developerguide/stream-exception-policy.html) in the *Network Firewall Developer Guide*.
   *
   * Default: `FMS_IGNORE`
   *
   * @public
   */
  StreamExceptionPolicy?: StreamExceptionPolicy | undefined;
}

/**
 * The setting that allows the policy owner to change the behavior of the rule group within a policy.
 *
 * @public
 */
export interface NetworkFirewallStatefulRuleGroupOverride {
  /**
   * The action that changes the rule group from `DROP` to `ALERT`. This only applies to managed rule groups.
   *
   * @public
   */
  Action?: NetworkFirewallOverrideAction | undefined;
}

/**
 * Network Firewall stateful rule group, used in a NetworkFirewallPolicyDescription.
 *
 * @public
 */
export interface StatefulRuleGroup {
  /**
   * The name of the rule group.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The resource ID of the rule group.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * An integer setting that indicates the order in which to run the stateful rule groups in a single Network Firewall firewall policy. This setting only applies to firewall policies that specify the `STRICT_ORDER` rule order in the stateful engine options settings.
   *
   * Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy. For information about
   *
   * You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The action that allows the policy owner to override the behavior of the rule group within a policy.
   *
   * @public
   */
  Override?: NetworkFirewallStatefulRuleGroupOverride | undefined;
}

/**
 * Network Firewall stateless rule group, used in a NetworkFirewallPolicyDescription.
 *
 * @public
 */
export interface StatelessRuleGroup {
  /**
   * The name of the rule group.
   *
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * The resource ID of the rule group.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The priority of the rule group. Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * The definition of the Network Firewall firewall policy.
 *
 * @public
 */
export interface NetworkFirewallPolicyDescription {
  /**
   * The stateless rule groups that are used in the Network Firewall firewall policy.
   *
   * @public
   */
  StatelessRuleGroups?: StatelessRuleGroup[] | undefined;

  /**
   * The actions to take on packets that don't match any of the stateless rule groups.
   *
   * @public
   */
  StatelessDefaultActions?: string[] | undefined;

  /**
   * The actions to take on packet fragments that don't match any of the stateless rule groups.
   *
   * @public
   */
  StatelessFragmentDefaultActions?: string[] | undefined;

  /**
   * Names of custom actions that are available for use in the stateless default actions settings.
   *
   * @public
   */
  StatelessCustomActions?: string[] | undefined;

  /**
   * The stateful rule groups that are used in the Network Firewall firewall policy.
   *
   * @public
   */
  StatefulRuleGroups?: StatefulRuleGroup[] | undefined;

  /**
   * The default actions to take on a packet that doesn't match any stateful rules. The stateful default action is optional, and is only valid when using the strict rule order.
   *
   * Valid values of the stateful default action:
   *
   * - aws:drop_strict
   * - aws:drop_established
   * - aws:alert_strict
   * - aws:alert_established
   *
   * @public
   */
  StatefulDefaultActions?: string[] | undefined;

  /**
   * Additional options governing how Network Firewall handles stateful rules. The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.
   *
   * @public
   */
  StatefulEngineOptions?: StatefulEngineOptions | undefined;
}

/**
 * Violation detail for Network Firewall for a firewall policy that has a different NetworkFirewallPolicyDescription than is required by the Firewall Manager policy.
 *
 * @public
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * The ID of the Network Firewall or VPC resource that's in violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The policy that's currently in use in the individual account.
   *
   * @public
   */
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription | undefined;

  /**
   * The policy that should be in use in the individual account in order to be compliant.
   *
   * @public
   */
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription | undefined;
}

/**
 * Violation detail for an unexpected route that's present in a route table.
 *
 * @public
 */
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * The subnet ID for the firewall.
   *
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * The routes that are in violation.
   *
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The endpoint of the firewall.
   *
   * @public
   */
  FirewallEndpoint?: string | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Violation detail for an unexpected gateway route that’s present in a route table.
 *
 * @public
 */
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * Information about the gateway ID.
   *
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * The routes that are in violation.
   *
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * Information about the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * Information about the VPC ID.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Information about the `CreateNetworkAcl` action in Amazon EC2. This is a remediation option in `RemediationAction`.
 *
 * @public
 */
export interface CreateNetworkAclAction {
  /**
   * Brief description of this remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The VPC that's associated with the remediation action.
   *
   * @public
   */
  Vpc?: ActionTarget | undefined;

  /**
   * Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.
   *
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * Information about the `CreateNetworkAclEntries` action in Amazon EC2. This is a remediation option in `RemediationAction`.
 *
 * @public
 */
export interface CreateNetworkAclEntriesAction {
  /**
   * Brief description of this remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The network ACL that's associated with the remediation action.
   *
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * Lists the entries that the remediation action would create.
   *
   * @public
   */
  NetworkAclEntriesToBeCreated?: EntryDescription[] | undefined;

  /**
   * Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.
   *
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * Information about the `DeleteNetworkAclEntries` action in Amazon EC2. This is a remediation option in `RemediationAction`.
 *
 * @public
 */
export interface DeleteNetworkAclEntriesAction {
  /**
   * Brief description of this remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The network ACL that's associated with the remediation action.
   *
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * Lists the entries that the remediation action would delete.
   *
   * @public
   */
  NetworkAclEntriesToBeDeleted?: EntryDescription[] | undefined;

  /**
   * Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.
   *
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
 *
 * @public
 */
export interface EC2AssociateRouteTableAction {
  /**
   * A description of the EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;

  /**
   * The ID of the subnet for the EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  SubnetId?: ActionTarget | undefined;

  /**
   * The ID of the gateway to be used with the EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  GatewayId?: ActionTarget | undefined;
}

/**
 * An action that copies the EC2 route table for use in remediation.
 *
 * @public
 */
export interface EC2CopyRouteTableAction {
  /**
   * A description of the copied EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The VPC ID of the copied EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  VpcId: ActionTarget | undefined;

  /**
   * The ID of the copied EC2 route table that is associated with the remediation action.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * Information about the CreateRoute action in Amazon EC2.
 *
 * @public
 */
export interface EC2CreateRouteAction {
  /**
   * A description of CreateRoute action in Amazon EC2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the IPv4 CIDR address block used for the destination match.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * Information about the ID of a prefix list used for the destination match.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * Information about the IPv6 CIDR block destination.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * Information about the ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
   *
   * @public
   */
  VpcEndpointId?: ActionTarget | undefined;

  /**
   * Information about the ID of an internet gateway or virtual private gateway attached to your VPC.
   *
   * @public
   */
  GatewayId?: ActionTarget | undefined;

  /**
   * Information about the ID of the route table for the route.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * Information about the CreateRouteTable action in Amazon EC2.
 *
 * @public
 */
export interface EC2CreateRouteTableAction {
  /**
   * A description of the CreateRouteTable action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the ID of a VPC.
   *
   * @public
   */
  VpcId: ActionTarget | undefined;
}

/**
 * Information about the DeleteRoute action in Amazon EC2.
 *
 * @public
 */
export interface EC2DeleteRouteAction {
  /**
   * A description of the DeleteRoute action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * Information about the ID of the prefix list for the route.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * Information about the IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * Information about the ID of the route table.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * Information about the ReplaceRoute action in Amazon EC2.
 *
 * @public
 */
export interface EC2ReplaceRouteAction {
  /**
   * A description of the ReplaceRoute action in Amazon EC2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
   *
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * Information about the ID of the prefix list for the route.
   *
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * Information about the IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.
   *
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * Information about the ID of an internet gateway or virtual private gateway.
   *
   * @public
   */
  GatewayId?: ActionTarget | undefined;

  /**
   * Information about the ID of the route table.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * Information about the ReplaceRouteTableAssociation action in Amazon EC2.
 *
 * @public
 */
export interface EC2ReplaceRouteTableAssociationAction {
  /**
   * A description of the ReplaceRouteTableAssociation action in Amazon EC2.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the association ID.
   *
   * @public
   */
  AssociationId: ActionTarget | undefined;

  /**
   * Information about the ID of the new route table to associate with the subnet.
   *
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * Contains information about the actions that you can take to remediate scope violations caused by your policy's `FirewallCreationConfig`. `FirewallCreationConfig` is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.
 *
 * @public
 */
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  /**
   * Describes the remedial action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `FirewallCreationConfig` that you can copy into your current policy's [SecurityServiceData](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html) in order to remedy scope violations.
   *
   * @public
   */
  FirewallCreationConfig?: string | undefined;
}

/**
 * Information about the `ReplaceNetworkAclAssociation` action in Amazon EC2. This is a remediation option in `RemediationAction`.
 *
 * @public
 */
export interface ReplaceNetworkAclAssociationAction {
  /**
   * Brief description of this remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Describes a remediation action target.
   *
   * @public
   */
  AssociationId?: ActionTarget | undefined;

  /**
   * The network ACL that's associated with the remediation action.
   *
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.
   *
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * Information about an individual action you can take to remediate a violation.
 *
 * @public
 */
export interface RemediationAction {
  /**
   * A description of a remediation action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the CreateRoute action in the Amazon EC2 API.
   *
   * @public
   */
  EC2CreateRouteAction?: EC2CreateRouteAction | undefined;

  /**
   * Information about the ReplaceRoute action in the Amazon EC2 API.
   *
   * @public
   */
  EC2ReplaceRouteAction?: EC2ReplaceRouteAction | undefined;

  /**
   * Information about the DeleteRoute action in the Amazon EC2 API.
   *
   * @public
   */
  EC2DeleteRouteAction?: EC2DeleteRouteAction | undefined;

  /**
   * Information about the CopyRouteTable action in the Amazon EC2 API.
   *
   * @public
   */
  EC2CopyRouteTableAction?: EC2CopyRouteTableAction | undefined;

  /**
   * Information about the ReplaceRouteTableAssociation action in the Amazon EC2 API.
   *
   * @public
   */
  EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction | undefined;

  /**
   * Information about the AssociateRouteTable action in the Amazon EC2 API.
   *
   * @public
   */
  EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction | undefined;

  /**
   * Information about the CreateRouteTable action in the Amazon EC2 API.
   *
   * @public
   */
  EC2CreateRouteTableAction?: EC2CreateRouteTableAction | undefined;

  /**
   * The remedial action to take when updating a firewall configuration.
   *
   * @public
   */
  FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction | undefined;

  /**
   * Information about the `CreateNetworkAcl` action in Amazon EC2.
   *
   * @public
   */
  CreateNetworkAclAction?: CreateNetworkAclAction | undefined;

  /**
   * Information about the `ReplaceNetworkAclAssociation` action in Amazon EC2.
   *
   * @public
   */
  ReplaceNetworkAclAssociationAction?: ReplaceNetworkAclAssociationAction | undefined;

  /**
   * Information about the `CreateNetworkAclEntries` action in Amazon EC2.
   *
   * @public
   */
  CreateNetworkAclEntriesAction?: CreateNetworkAclEntriesAction | undefined;

  /**
   * Information about the `DeleteNetworkAclEntries` action in Amazon EC2.
   *
   * @public
   */
  DeleteNetworkAclEntriesAction?: DeleteNetworkAclEntriesAction | undefined;
}

/**
 * An ordered list of actions you can take to remediate a violation.
 *
 * @public
 */
export interface RemediationActionWithOrder {
  /**
   * Information about an action you can take to remediate a violation.
   *
   * @public
   */
  RemediationAction?: RemediationAction | undefined;

  /**
   * The order of the remediation actions in the list.
   *
   * @public
   */
  Order?: number | undefined;
}

/**
 * A list of remediation actions.
 *
 * @public
 */
export interface PossibleRemediationAction {
  /**
   * A description of the list of remediation actions.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ordered list of remediation actions.
   *
   * @public
   */
  OrderedRemediationActions: RemediationActionWithOrder[] | undefined;

  /**
   * Information about whether an action is taken by default.
   *
   * @public
   */
  IsDefaultAction?: boolean | undefined;
}

/**
 * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
 *
 * @public
 */
export interface PossibleRemediationActions {
  /**
   * A description of the possible remediation actions list.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the actions.
   *
   * @public
   */
  Actions?: PossibleRemediationAction[] | undefined;
}

/**
 * Contains details about the route endpoint that violates the policy scope.
 *
 * @public
 */
export interface RouteHasOutOfScopeEndpointViolation {
  /**
   * The ID of the subnet associated with the route that violates the policy scope.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The VPC ID of the route that violates the policy scope.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the route table.
   *
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * The list of routes that violate the route table.
   *
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * The subnet's Availability Zone.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * The ID of the subnet's Availability Zone.
   *
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;

  /**
   * The route table associated with the current firewall subnet.
   *
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * The ID of the firewall subnet.
   *
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * The list of firewall subnet routes.
   *
   * @public
   */
  FirewallSubnetRoutes?: Route[] | undefined;

  /**
   * The ID of the Internet Gateway.
   *
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * The current route table associated with the Internet Gateway.
   *
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * The routes in the route table associated with the Internet Gateway.
   *
   * @public
   */
  InternetGatewayRoutes?: Route[] | undefined;
}

/**
 * The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.
 *
 * @public
 */
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  /**
   * The ID of the third-party firewall or VPC resource that's causing the violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a fireawll subnet that's causing the violation.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of the firewall subnet that's causing the violation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The resource ID of the current route table that's associated with the subnet, if one is available.
   *
   * @public
   */
  CurrentRouteTable?: string | undefined;

  /**
   * The resource ID of the route table that should be associated with the subnet.
   *
   * @public
   */
  ExpectedRouteTable?: string | undefined;
}

/**
 * The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.
 *
 * @public
 */
export interface ThirdPartyFirewallMissingFirewallViolation {
  /**
   * The ID of the third-party firewall that's causing the violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a third-party firewall.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of the third-party firewall that's causing the violation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The reason the resource is causing this violation, if a reason is available.
   *
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.
 *
 * @public
 */
export interface ThirdPartyFirewallMissingSubnetViolation {
  /**
   * The ID of the third-party firewall or VPC resource that's causing the violation.
   *
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * The resource ID of the VPC associated with a subnet that's causing the violation.
   *
   * @public
   */
  VPC?: string | undefined;

  /**
   * The Availability Zone of a subnet that's causing the violation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The reason the resource is causing the violation, if a reason is available.
   *
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * The violation details for a web ACL whose configuration is incompatible with the Firewall Manager policy.
 *
 * @public
 */
export interface WebACLHasIncompatibleConfigurationViolation {
  /**
   * The Amazon Resource Name (ARN) of the web ACL.
   *
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * Information about the problems that Firewall Manager encountered with the web ACL configuration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The violation details for a web ACL that's associated with at least one resource that's out of scope of the Firewall Manager policy.
 *
 * @public
 */
export interface WebACLHasOutOfScopeResourcesViolation {
  /**
   * The Amazon Resource Name (ARN) of the web ACL.
   *
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * An array of Amazon Resource Name (ARN) for the resources that are out of scope of the policy and are associated with the web ACL.
   *
   * @public
   */
  OutOfScopeResourceList?: string[] | undefined;
}

/**
 * Violation detail based on resource type.
 *
 * @public
 */
export interface ResourceViolation {
  /**
   * Violation detail for security groups.
   *
   * @public
   */
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation | undefined;

  /**
   * Violation detail for a network interface.
   *
   * @public
   */
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation | undefined;

  /**
   * Violation detail for an EC2 instance.
   *
   * @public
   */
  AwsEc2InstanceViolation?: AwsEc2InstanceViolation | undefined;

  /**
   * Violation detail for an Network Firewall policy that indicates that a subnet has no Firewall Manager managed firewall in its VPC.
   *
   * @public
   */
  NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation | undefined;

  /**
   * Violation detail for an Network Firewall policy that indicates that an Availability Zone is missing the expected Firewall Manager managed subnet.
   *
   * @public
   */
  NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation | undefined;

  /**
   * Violation detail for an Network Firewall policy that indicates that a subnet is not associated with the expected Firewall Manager managed route table.
   *
   * @public
   */
  NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation | undefined;

  /**
   * Violation detail for an Network Firewall policy that indicates that a firewall policy in an individual account has been modified in a way that makes it noncompliant. For example, the individual account owner might have deleted a rule group, changed the priority of a stateless rule group, or changed a policy default action.
   *
   * @public
   */
  NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation | undefined;

  /**
   * Violation detail for the subnet for which internet traffic hasn't been inspected.
   *
   * @public
   */
  NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation | undefined;

  /**
   * The route configuration is invalid.
   *
   * @public
   */
  NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation | undefined;

  /**
   * Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.
   *
   * @public
   */
  NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation | undefined;

  /**
   * There's an unexpected firewall route.
   *
   * @public
   */
  NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation | undefined;

  /**
   * There's an unexpected gateway route.
   *
   * @public
   */
  NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation | undefined;

  /**
   * Expected routes are missing from Network Firewall.
   *
   * @public
   */
  NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation | undefined;

  /**
   * Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.
   *
   * @public
   */
  DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation | undefined;

  /**
   * Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.
   *
   * @public
   */
  DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation | undefined;

  /**
   * Violation detail for a DNS Firewall policy that indicates that the VPC reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed.
   *
   * @public
   */
  DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation | undefined;

  /**
   * Contains details about the firewall subnet that violates the policy scope.
   *
   * @public
   */
  FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation | undefined;

  /**
   * Contains details about the route endpoint that violates the policy scope.
   *
   * @public
   */
  RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation | undefined;

  /**
   * The violation details for a third-party firewall that's been deleted.
   *
   * @public
   */
  ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation | undefined;

  /**
   * The violation details for a third-party firewall's subnet that's been deleted.
   *
   * @public
   */
  ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation | undefined;

  /**
   * The violation details for a third-party firewall that has the Firewall Manager managed route table that was associated with the third-party firewall has been deleted.
   *
   * @public
   */
  ThirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation | undefined;

  /**
   * The violation details for a third-party firewall's VPC endpoint subnet that was deleted.
   *
   * @public
   */
  FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation | undefined;

  /**
   * Violation detail for the entries in a network ACL resource.
   *
   * @public
   */
  InvalidNetworkAclEntriesViolation?: InvalidNetworkAclEntriesViolation | undefined;

  /**
   * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
   *
   * @public
   */
  PossibleRemediationActions?: PossibleRemediationActions | undefined;

  /**
   * The violation details for a web ACL whose configuration is incompatible with the Firewall Manager policy.
   *
   * @public
   */
  WebACLHasIncompatibleConfigurationViolation?: WebACLHasIncompatibleConfigurationViolation | undefined;

  /**
   * The violation details for a web ACL that's associated with at least one resource that's out of scope of the Firewall Manager policy.
   *
   * @public
   */
  WebACLHasOutOfScopeResourcesViolation?: WebACLHasOutOfScopeResourcesViolation | undefined;
}

/**
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
 *
 * @public
 */
export interface ViolationDetail {
  /**
   * The ID of the Firewall Manager policy that the violation details were requested for.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Web Services account that the violation details were requested for.
   *
   * @public
   */
  MemberAccount: string | undefined;

  /**
   * The resource ID that the violation details were requested for.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The resource type that the violation details were requested for.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * List of violations for the requested resource.
   *
   * @public
   */
  ResourceViolations: ResourceViolation[] | undefined;

  /**
   * The `ResourceTag` objects associated with the resource.
   *
   * @public
   */
  ResourceTags?: Tag[] | undefined;

  /**
   * Brief description for the requested resource.
   *
   * @public
   */
  ResourceDescription?: string | undefined;
}

/**
 * @public
 */
export interface GetViolationDetailsResponse {
  /**
   * Violation detail for a resource.
   *
   * @public
   */
  ViolationDetail?: ViolationDetail | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationResponse {
  /**
   * A list of Firewall Manager administrator accounts within the organization that were onboarded as administrators by AssociateAdminAccount or PutAdminAccount.
   *
   * @public
   */
  AdminAccounts?: AdminAccountSummary[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountResponse {
  /**
   * The list of accounts who manage member accounts within their AdminScope.
   *
   * @public
   */
  AdminAccounts?: string[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsListsRequest {
  /**
   * Specifies whether the lists to retrieve are default lists owned by Firewall Manager.
   *
   * @public
   */
  DefaultLists?: boolean | undefined;

  /**
   * If you specify a value for `MaxResults` in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify this, Firewall Manager returns all available objects.
   *
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * @public
 */
export interface ListAppsListsResponse {
  /**
   * An array of `AppsListDataSummary` objects.
   *
   * @public
   */
  AppsLists?: AppsListDataSummary[] | undefined;

  /**
   * If you specify a value for `MaxResults` in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceStatusRequest {
  /**
   * The ID of the Firewall Manager policy that you want the details for.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * If you specify a value for `MaxResults` and you have more `PolicyComplianceStatus` objects than the number that you specify for `MaxResults`, Firewall Manager returns a `NextToken` value in the response that allows you to list another group of `PolicyComplianceStatus` objects. For the second and subsequent `ListComplianceStatus` requests, specify the value of `NextToken` from the previous response to get information about another batch of `PolicyComplianceStatus` objects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the number of `PolicyComplianceStatus` objects that you want Firewall Manager to return for this request. If you have more `PolicyComplianceStatus` objects than the number that you specify for `MaxResults`, the response includes a `NextToken` value that you can use to get another batch of `PolicyComplianceStatus` objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
 *
 * @public
 */
export interface EvaluationResult {
  /**
   * Describes an Amazon Web Services account's compliance with the Firewall Manager policy.
   *
   * @public
   */
  ComplianceStatus?: PolicyComplianceStatusType | undefined;

  /**
   * The number of resources that are noncompliant with the specified policy. For WAF and Shield Advanced policies, a resource is considered noncompliant if it is not associated with the policy. For security group policies, a resource is considered noncompliant if it doesn't comply with the rules of the policy and remediation is disabled or not possible.
   *
   * @public
   */
  ViolatorCount?: number | undefined;

  /**
   * Indicates that over 100 resources are noncompliant with the Firewall Manager policy.
   *
   * @public
   */
  EvaluationLimitExceeded?: boolean | undefined;
}

/**
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
 *
 * @public
 */
export interface PolicyComplianceStatus {
  /**
   * The Amazon Web Services account that created the Firewall Manager policy.
   *
   * @public
   */
  PolicyOwner?: string | undefined;

  /**
   * The ID of the Firewall Manager policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The name of the Firewall Manager policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The member account ID.
   *
   * @public
   */
  MemberAccount?: string | undefined;

  /**
   * An array of `EvaluationResult` objects.
   *
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * Timestamp of the last update to the `EvaluationResult` objects.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.
   *
   * @public
   */
  IssueInfoMap?: Partial<Record<DependentServiceName, string>> | undefined;
}

/**
 * @public
 */
export interface ListComplianceStatusResponse {
  /**
   * An array of `PolicyComplianceStatus` objects.
   *
   * @public
   */
  PolicyComplianceStatusList?: PolicyComplianceStatus[] | undefined;

  /**
   * If you have more `PolicyComplianceStatus` objects than the number that you specified for `MaxResults` in the request, the response includes a `NextToken` value. To list more `PolicyComplianceStatus` objects, submit another `ListComplianceStatus` request, and specify the `NextToken` value from the response in the `NextToken` value in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * The Amazon Web Services account IDs to discover resources in. Only one account is supported per request. The account must be a member of your organization.
   *
   * @public
   */
  MemberAccountIds: string[] | undefined;

  /**
   * The type of resources to discover.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A resource in the organization that's available to be associated with a Firewall Manager resource set.
 *
 * @public
 */
export interface DiscoveredResource {
  /**
   * The universal resource identifier (URI) of the discovered resource.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the discovered resource.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The type of the discovered resource.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The name of the discovered resource.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * Details of the resources that were discovered.
   *
   * @public
   */
  Items?: DiscoveredResource[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsRequest {
  /**
   * If you specify a value for `MaxResults` and you have more account IDs than the number that you specify for `MaxResults`, Firewall Manager returns a `NextToken` value in the response that allows you to list another group of IDs. For the second and subsequent `ListMemberAccountsRequest` requests, specify the value of `NextToken` from the previous response to get information about another batch of member account IDs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the number of member account IDs that you want Firewall Manager to return for this request. If you have more IDs than the number that you specify for `MaxResults`, the response includes a `NextToken` value that you can use to get another batch of member account IDs.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsResponse {
  /**
   * An array of account IDs.
   *
   * @public
   */
  MemberAccounts?: string[] | undefined;

  /**
   * If you have more member account IDs than the number that you specified for `MaxResults` in the request, the response includes a `NextToken` value. To list more IDs, submit another `ListMemberAccounts` request, and specify the `NextToken` value from the response in the `NextToken` value in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * If you specify a value for `MaxResults` and you have more `PolicySummary` objects than the number that you specify for `MaxResults`, Firewall Manager returns a `NextToken` value in the response that allows you to list another group of `PolicySummary` objects. For the second and subsequent `ListPolicies` requests, specify the value of `NextToken` from the previous response to get information about another batch of `PolicySummary` objects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the number of `PolicySummary` objects that you want Firewall Manager to return for this request. If you have more `PolicySummary` objects than the number that you specify for `MaxResults`, the response includes a `NextToken` value that you can use to get another batch of `PolicySummary` objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details of the Firewall Manager policy.
 *
 * @public
 */
export interface PolicySummary {
  /**
   * The Amazon Resource Name (ARN) of the specified policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * The ID of the specified policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The name of the specified policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The type of resource protected by or in scope of the policy. This is in the format shown in the [Amazon Web Services Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html).
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an WAF policy, a Shield Advanced policy, or a security group policy.
   *
   * @public
   */
  SecurityServiceType?: SecurityServiceType | undefined;

  /**
   * Indicates if the policy should be automatically applied to new resources.
   *
   * @public
   */
  RemediationEnabled?: boolean | undefined;

  /**
   * Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope.
   *
   * By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources.
   *
   * This option is not available for Shield Advanced or WAF Classic policies.
   *
   * @public
   */
  DeleteUnusedFMManagedResources?: boolean | undefined;

  /**
   * Indicates whether the policy is in or out of an admin's policy or Region scope.
   *
   * - `ACTIVE` - The administrator can manage and delete the policy.
   * - `OUT_OF_ADMIN_SCOPE` - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.
   *
   * @public
   */
  PolicyStatus?: CustomerPolicyStatus | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * An array of `PolicySummary` objects.
   *
   * @public
   */
  PolicyList?: PolicySummary[] | undefined;

  /**
   * If you have more `PolicySummary` objects than the number that you specified for `MaxResults` in the request, the response includes a `NextToken` value. To list more `PolicySummary` objects, submit another `ListPolicies` request, and specify the `NextToken` value from the response in the `NextToken` value in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtocolsListsRequest {
  /**
   * Specifies whether the lists to retrieve are default lists owned by Firewall Manager.
   *
   * @public
   */
  DefaultLists?: boolean | undefined;

  /**
   * If you specify a value for `MaxResults` in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * If you don't specify this, Firewall Manager returns all available objects.
   *
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * Details of the Firewall Manager protocols list.
 *
 * @public
 */
export interface ProtocolsListDataSummary {
  /**
   * The Amazon Resource Name (ARN) of the specified protocols list.
   *
   * @public
   */
  ListArn?: string | undefined;

  /**
   * The ID of the specified protocols list.
   *
   * @public
   */
  ListId?: string | undefined;

  /**
   * The name of the specified protocols list.
   *
   * @public
   */
  ListName?: string | undefined;

  /**
   * An array of protocols in the Firewall Manager protocols list.
   *
   * @public
   */
  ProtocolsList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListProtocolsListsResponse {
  /**
   * An array of `ProtocolsListDataSummary` objects.
   *
   * @public
   */
  ProtocolsLists?: ProtocolsListDataSummary[] | undefined;

  /**
   * If you specify a value for `MaxResults` in your list request, and you have more objects than the maximum, Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetResourcesRequest {
  /**
   * A unique identifier for the resource set, used in a request to refer to the resource set.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Details of a resource that is associated to an Firewall Manager resource set.
 *
 * @public
 */
export interface Resource {
  /**
   * The resource's universal resource indicator (URI).
   *
   * @public
   */
  URI: string | undefined;

  /**
   * The Amazon Web Services account ID that the associated resource belongs to.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetResourcesResponse {
  /**
   * An array of the associated resources' uniform resource identifiers (URI).
   *
   * @public
   */
  Items: Resource[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that you want Firewall Manager to return for this request. If more objects are available, in the response, Firewall Manager provides a `NextToken` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summarizes the resource sets used in a policy.
 *
 * @public
 */
export interface ResourceSetSummary {
  /**
   * A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The descriptive name of the resource set. You can't change the name of a resource set after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the resource set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The last time that the resource set was changed.
   *
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * Indicates whether the resource set is in or out of an admin's Region scope.
   *
   * - `ACTIVE` - The administrator can manage and delete the resource set.
   * - `OUT_OF_ADMIN_SCOPE` - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.
   *
   * @public
   */
  ResourceSetStatus?: ResourceSetStatus | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsResponse {
  /**
   * An array of `ResourceSetSummary` objects.
   *
   * @public
   */
  ResourceSets?: ResourceSetSummary[] | undefined;

  /**
   * When you request a list of objects with a `MaxResults` setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Firewall Manager returns a `NextToken` value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists.
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
   * The tags associated with the resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  /**
   * The name of the third-party firewall vendor.
   *
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;

  /**
   * If the previous response included a `NextToken` element, the specified third-party firewall vendor is associated with more third-party firewall policies. To get more third-party firewall policies, submit another `ListThirdPartyFirewallFirewallPoliciesRequest` request.
   *
   * For the value of `NextToken`, specify the value of `NextToken` from the previous response. If the previous response didn't include a `NextToken` element, there are no more third-party firewall policies to get.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of third-party firewall policies that you want Firewall Manager to return. If the specified third-party firewall vendor is associated with more than `MaxResults` firewall policies, the response includes a `NextToken` element. `NextToken` contains an encrypted token that identifies the first third-party firewall policies that Firewall Manager will return if you submit another request.
   *
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * Configures the third-party firewall's firewall policy.
 *
 * @public
 */
export interface ThirdPartyFirewallFirewallPolicy {
  /**
   * The ID of the specified firewall policy.
   *
   * @public
   */
  FirewallPolicyId?: string | undefined;

  /**
   * The name of the specified firewall policy.
   *
   * @public
   */
  FirewallPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  /**
   * A list that contains one `ThirdPartyFirewallFirewallPolicies` element for each third-party firewall policies that the specified third-party firewall vendor is associated with. Each `ThirdPartyFirewallFirewallPolicies` element contains the firewall policy name and ID.
   *
   * @public
   */
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[] | undefined;

  /**
   * The value that you will use for `NextToken` in the next `ListThirdPartyFirewallFirewallPolicies` request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountRequest {
  /**
   * The Amazon Web Services account ID to add as an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by AssociateAdminAccount. For more information about Organizations, see [Managing the Amazon Web Services Accounts in Your Organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html).
   *
   * @public
   */
  AdminAccount: string | undefined;

  /**
   * Configures the resources that the specified Firewall Manager administrator can manage. As a best practice, set the administrative scope according to the principles of least privilege. Only grant the administrator the specific resources or permissions that they need to perform the duties of their role.
   *
   * @public
   */
  AdminScope?: AdminScope | undefined;
}

/**
 * @public
 */
export interface PutAppsListRequest {
  /**
   * The details of the Firewall Manager applications list to be created.
   *
   * @public
   */
  AppsList: AppsListData | undefined;

  /**
   * The tags associated with the resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAppsListResponse {
  /**
   * The details of the Firewall Manager applications list.
   *
   * @public
   */
  AppsList?: AppsListData | undefined;

  /**
   * The Amazon Resource Name (ARN) of the applications list.
   *
   * @public
   */
  AppsListArn?: string | undefined;
}

/**
 * @public
 */
export interface PutNotificationChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the SNS topic that collects notifications from Firewall Manager.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record Firewall Manager activity.
   *
   * @public
   */
  SnsRoleName: string | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * The details of the Firewall Manager policy to be created.
   *
   * @public
   */
  Policy: Policy | undefined;

  /**
   * The tags to add to the Amazon Web Services resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * The details of the Firewall Manager policy.
   *
   * @public
   */
  Policy?: Policy | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface PutProtocolsListRequest {
  /**
   * The details of the Firewall Manager protocols list to be created.
   *
   * @public
   */
  ProtocolsList: ProtocolsListData | undefined;

  /**
   * The tags associated with the resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutProtocolsListResponse {
  /**
   * The details of the Firewall Manager protocols list.
   *
   * @public
   */
  ProtocolsList?: ProtocolsListData | undefined;

  /**
   * The Amazon Resource Name (ARN) of the protocols list.
   *
   * @public
   */
  ProtocolsListArn?: string | undefined;
}

/**
 * @public
 */
export interface PutResourceSetRequest {
  /**
   * Details about the resource set to be created or updated.>
   *
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * Retrieves the tags associated with the specified resource set. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourceSetResponse {
  /**
   * Details about the resource set.
   *
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource set.
   *
   * @public
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  TagList: Tag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
