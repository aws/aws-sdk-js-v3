// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { FMSServiceException as __BaseException } from "./FMSServiceException";

/**
 * @public
 * @enum
 */
export const AccountRoleStatus = {
  Creating: "CREATING",
  Deleted: "DELETED",
  Deleting: "DELETING",
  PendingDeletion: "PENDING_DELETION",
  Ready: "READY",
} as const;

/**
 * @public
 */
export type AccountRoleStatus = (typeof AccountRoleStatus)[keyof typeof AccountRoleStatus];

/**
 * <p>Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to.</p>
 * @public
 */
export interface AccountScope {
  /**
   * <p>The list of accounts within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>ExcludeSpecifiedAccounts</code>. If <code>ExcludeSpecifiedAccounts</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all members of the organization except for the accounts in this list. If <code>ExcludeSpecifiedAccounts</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the accounts in this list.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>A boolean value that indicates if the administrator can apply policies to all accounts within an organization. If true, the administrator can apply policies to all accounts within the organization. You can either enable management of all accounts through this operation, or you can specify a list of accounts to manage in <code>AccountScope$Accounts</code>. You cannot specify both.</p>
   * @public
   */
  AllAccountsEnabled?: boolean | undefined;

  /**
   * <p>A boolean value that excludes the accounts in <code>AccountScope$Accounts</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all members of the organization except for the accounts listed in <code>AccountScope$Accounts</code>. You can either specify a list of accounts to exclude by <code>AccountScope$Accounts</code>, or you can enable management of all accounts by <code>AccountScope$AllAccountsEnabled</code>. You cannot specify both.</p>
   * @public
   */
  ExcludeSpecifiedAccounts?: boolean | undefined;
}

/**
 * <p>Describes a remediation action target.</p>
 * @public
 */
export interface ActionTarget {
  /**
   * <p>The ID of the remediation target.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>A description of the remediation action target.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrganizationStatus = {
  Offboarding: "OFFBOARDING",
  OffboardingComplete: "OFFBOARDING_COMPLETE",
  Onboarding: "ONBOARDING",
  OnboardingComplete: "ONBOARDING_COMPLETE",
} as const;

/**
 * @public
 */
export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus];

/**
 * <p>Contains high level information about the Firewall Manager administrator account.</p>
 * @public
 */
export interface AdminAccountSummary {
  /**
   * <p>The Amazon Web Services account ID of the Firewall Manager administrator's account.</p>
   * @public
   */
  AdminAccount?: string | undefined;

  /**
   * <p>A boolean value that indicates if the administrator is the default administrator. If true, then this is the default administrator account. The default administrator can manage third-party firewalls and has full administrative scope. There is only one default administrator account per organization. For information about Firewall Manager default administrator accounts, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
   * @public
   */
  DefaultAdmin?: boolean | undefined;

  /**
   * <p>The current status of the request to onboard a member account as an Firewall Manager administrator.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING</code> - The account is onboarding to Firewall Manager as an administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING_COMPLETE</code> - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their <a>AdminScope</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING</code> - The account is being removed as an Firewall Manager administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING_COMPLETE</code> - The account has been removed as an Firewall Manager administrator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * <p>Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs)
 * </a> in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export interface OrganizationalUnitScope {
  /**
   * <p>The list of OUs within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code>. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs in this list. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the OUs in this list.</p>
   * @public
   */
  OrganizationalUnits?: string[] | undefined;

  /**
   * <p>A boolean value that indicates if the administrator can apply policies to all OUs within an organization. If true, the administrator can manage all OUs within the organization. You can either enable management of all OUs through this operation, or you can specify OUs to manage in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You cannot specify both.</p>
   * @public
   */
  AllOrganizationalUnitsEnabled?: boolean | undefined;

  /**
   * <p>A boolean value that excludes the OUs in <code>OrganizationalUnitScope$OrganizationalUnits</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs listed in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You can either specify a list of OUs to exclude by <code>OrganizationalUnitScope$OrganizationalUnits</code>, or you can enable management of all OUs by <code>OrganizationalUnitScope$AllOrganizationalUnitsEnabled</code>. You cannot specify both.</p>
   * @public
   */
  ExcludeSpecifiedOrganizationalUnits?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SecurityServiceType = {
  DNS_FIREWALL: "DNS_FIREWALL",
  IMPORT_NETWORK_FIREWALL: "IMPORT_NETWORK_FIREWALL",
  NETWORK_ACL_COMMON: "NETWORK_ACL_COMMON",
  NETWORK_FIREWALL: "NETWORK_FIREWALL",
  SECURITY_GROUPS_COMMON: "SECURITY_GROUPS_COMMON",
  SECURITY_GROUPS_CONTENT_AUDIT: "SECURITY_GROUPS_CONTENT_AUDIT",
  SECURITY_GROUPS_USAGE_AUDIT: "SECURITY_GROUPS_USAGE_AUDIT",
  SHIELD_ADVANCED: "SHIELD_ADVANCED",
  THIRD_PARTY_FIREWALL: "THIRD_PARTY_FIREWALL",
  WAF: "WAF",
  WAFV2: "WAFV2",
} as const;

/**
 * @public
 */
export type SecurityServiceType = (typeof SecurityServiceType)[keyof typeof SecurityServiceType];

/**
 * <p>Defines the policy types that the specified Firewall Manager administrator can manage.</p>
 * @public
 */
export interface PolicyTypeScope {
  /**
   * <p>The list of policy types that the specified Firewall Manager administrator can manage.</p>
   * @public
   */
  PolicyTypes?: SecurityServiceType[] | undefined;

  /**
   * <p>Allows the specified Firewall Manager administrator to manage all Firewall Manager policy types, except for third-party policy types. Third-party policy types can only be managed by the Firewall Manager default administrator.</p>
   * @public
   */
  AllPolicyTypesEnabled?: boolean | undefined;
}

/**
 * <p>Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage.</p>
 * @public
 */
export interface RegionScope {
  /**
   * <p>The Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>Allows the specified Firewall Manager administrator to manage all Amazon Web Services Regions.</p>
   * @public
   */
  AllRegionsEnabled?: boolean | undefined;
}

/**
 * <p>Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
 * @public
 */
export interface AdminScope {
  /**
   * <p>Defines the accounts that the specified Firewall Manager administrator can apply policies to.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>Defines the Organizations organizational units that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs)
   * </a> in the <i>Organizations User Guide</i>.</p>
   * @public
   */
  OrganizationalUnitScope?: OrganizationalUnitScope | undefined;

  /**
   * <p>Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.</p>
   * @public
   */
  RegionScope?: RegionScope | undefined;

  /**
   * <p>Defines the Firewall Manager policy types that the specified Firewall Manager administrator can create and manage.</p>
   * @public
   */
  PolicyTypeScope?: PolicyTypeScope | undefined;
}

/**
 * <p>An individual Firewall Manager application.</p>
 * @public
 */
export interface App {
  /**
   * <p>The application's name.</p>
   * @public
   */
  AppName: string | undefined;

  /**
   * <p>The IP protocol name or number. The name can be one of <code>tcp</code>, <code>udp</code>, or <code>icmp</code>. For information on possible numbers, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>.</p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>The application's port number, for example <code>80</code>.</p>
   * @public
   */
  Port: number | undefined;
}

/**
 * <p>An Firewall Manager applications list.</p>
 * @public
 */
export interface AppsListData {
  /**
   * <p>The ID of the Firewall Manager applications list.</p>
   * @public
   */
  ListId?: string | undefined;

  /**
   * <p>The name of the Firewall Manager applications list.</p>
   * @public
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   * @public
   */
  ListUpdateToken?: string | undefined;

  /**
   * <p>The time that the Firewall Manager applications list was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time that the Firewall Manager applications list was last updated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>An array of applications in the Firewall Manager applications list.</p>
   * @public
   */
  AppsList: App[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding <code>App</code> object arrays.</p>
   * @public
   */
  PreviousAppsList?: Record<string, App[]> | undefined;
}

/**
 * <p>Details of the Firewall Manager applications list.</p>
 * @public
 */
export interface AppsListDataSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   * @public
   */
  ListArn?: string | undefined;

  /**
   * <p>The ID of the applications list.</p>
   * @public
   */
  ListId?: string | undefined;

  /**
   * <p>The name of the applications list.</p>
   * @public
   */
  ListName?: string | undefined;

  /**
   * <p>An array of <code>App</code> objects in the Firewall Manager applications list.</p>
   * @public
   */
  AppsList?: App[] | undefined;
}

/**
 * @public
 */
export interface AssociateAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID to associate with Firewall Manager as the Firewall Manager
   *       default administrator account. This account must be
   *       a member account of the organization in Organizations whose resources you want to protect.
   *         For more information about Organizations, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.  </p>
   * @public
   */
  AdminAccount: string | undefined;
}

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The parameters of the request were invalid.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ThirdPartyFirewall = {
  FORTIGATE_CLOUD_NATIVE_FIREWALL: "FORTIGATE_CLOUD_NATIVE_FIREWALL",
  PALO_ALTO_NETWORKS_CLOUD_NGFW: "PALO_ALTO_NETWORKS_CLOUD_NGFW",
} as const;

/**
 * @public
 */
export type ThirdPartyFirewall = (typeof ThirdPartyFirewall)[keyof typeof ThirdPartyFirewall];

/**
 * @public
 */
export interface AssociateThirdPartyFirewallRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 * @enum
 */
export const ThirdPartyFirewallAssociationStatus = {
  NOT_EXIST: "NOT_EXIST",
  OFFBOARDING: "OFFBOARDING",
  OFFBOARD_COMPLETE: "OFFBOARD_COMPLETE",
  ONBOARDING: "ONBOARDING",
  ONBOARD_COMPLETE: "ONBOARD_COMPLETE",
} as const;

/**
 * @public
 */
export type ThirdPartyFirewallAssociationStatus =
  (typeof ThirdPartyFirewallAssociationStatus)[keyof typeof ThirdPartyFirewallAssociationStatus];

/**
 * @public
 */
export interface AssociateThirdPartyFirewallResponse {
  /**
   * <p>The current status for setting a Firewall Manager policy administrator's account as an administrator of the third-party firewall tenant.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING</code> - The Firewall Manager policy administrator is being designated as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONBOARD_COMPLETE</code> - The Firewall Manager policy administrator is designated as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING</code> - The Firewall Manager policy administrator is being removed as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARD_COMPLETE</code> - The Firewall Manager policy administrator has been removed as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_EXIST</code> - The Firewall Manager policy administrator doesn't exist as a tenant administrator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | undefined;
}

/**
 * <p>Violation detail for network interfaces associated with an EC2 instance.</p>
 * @public
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * <p>The resource ID of the network interface.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>List of security groups that violate the rules specified in the primary security group of the Firewall Manager policy.</p>
   * @public
   */
  ViolatingSecurityGroups?: string[] | undefined;
}

/**
 * <p>Violation detail for an EC2 instance resource.</p>
 * @public
 */
export interface AwsEc2InstanceViolation {
  /**
   * <p>The resource ID of the EC2 instance.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>Violation detail for network interfaces associated with the EC2 instance.</p>
   * @public
   */
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourceRequest {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The uniform resource identifiers (URIs) of resources that should be associated to the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
   * @public
   */
  Items: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailedItemReason = {
  NotValidAccountId: "NOT_VALID_ACCOUNT_ID",
  NotValidArn: "NOT_VALID_ARN",
  NotValidPartition: "NOT_VALID_PARTITION",
  NotValidRegion: "NOT_VALID_REGION",
  NotValidResourceType: "NOT_VALID_RESOURCE_TYPE",
  NotValidService: "NOT_VALID_SERVICE",
} as const;

/**
 * @public
 */
export type FailedItemReason = (typeof FailedItemReason)[keyof typeof FailedItemReason];

/**
 * <p>Details of a resource that failed when trying to update it's association to a resource set.</p>
 * @public
 */
export interface FailedItem {
  /**
   * <p>The univeral resource indicator (URI) of the resource that failed.</p>
   * @public
   */
  URI?: string | undefined;

  /**
   * <p>The reason the resource's association could not be updated.</p>
   * @public
   */
  Reason?: FailedItemReason | undefined;
}

/**
 * @public
 */
export interface BatchAssociateResourceResponse {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The resources that failed to associate to the resource set.</p>
   * @public
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceRequest {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The uniform resource identifiers (URI) of resources that should be disassociated from the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
   * @public
   */
  Items: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceResponse {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The resources that failed to disassociate from the resource set.</p>
   * @public
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteAppsListRequest {
  /**
   * <p>The ID of the applications list that you want to delete. You can retrieve this ID from
   *       <code>PutAppsList</code>, <code>ListAppsLists</code>, and <code>GetAppsList</code>.</p>
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
   * <p>The ID of the policy that you want to delete. You can retrieve this ID from
   *         <code>PutPolicy</code> and <code>ListPolicies</code>.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>If <code>True</code>, the request performs cleanup according to the policy type. </p>
   *          <p>For WAF and Shield Advanced policies, the cleanup does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Deletes rule groups created by Firewall Manager</p>
   *             </li>
   *             <li>
   *                <p>Removes web ACLs from in-scope resources</p>
   *             </li>
   *             <li>
   *                <p>Deletes web ACLs that contain no rules or rule groups</p>
   *             </li>
   *          </ul>
   *          <p>For security group policies, the cleanup does the following for each security group in
   *       the policy:</p>
   *          <ul>
   *             <li>
   *                <p>Disassociates the security group from in-scope resources </p>
   *             </li>
   *             <li>
   *                <p>Deletes the security group if it was created through Firewall Manager and if it's
   *           no longer associated with any resources through another policy</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For security group common policies, even if set to <code>False</code>, Firewall Manager deletes all security groups created by Firewall Manager that aren't associated with any other resources through another policy.</p>
   *          </note>
   *          <p>After the cleanup, in-scope resources are no longer protected by web ACLs in this policy.
   *       Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you
   *       create and accounts that you associate with the policy. When creating the policy, if you
   *       specify that only resources in specific accounts or with specific tags are in scope of the
   *       policy, those accounts and resources are handled by the policy. All others are out of scope.
   *       If you don't specify tags or accounts, all resources are in scope. </p>
   * @public
   */
  DeleteAllPolicyResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProtocolsListRequest {
  /**
   * <p>The ID of the protocols list that you want to delete. You can retrieve this ID from
   *       <code>PutProtocolsList</code>, <code>ListProtocolsLists</code>, and <code>GetProtocolsLost</code>.</p>
   * @public
   */
  ListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
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
   * <p>The name of the third-party firewall vendor.</p>
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 */
export interface DisassociateThirdPartyFirewallResponse {
  /**
   * <p>The current status for the disassociation of a Firewall Manager administrators account with a third-party firewall.</p>
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
   * <p>The account that is set as the Firewall Manager default administrator.</p>
   * @public
   */
  AdminAccount?: string | undefined;

  /**
   * <p>The status of the account that you set as the Firewall Manager
   *       default administrator.</p>
   * @public
   */
  RoleStatus?: AccountRoleStatus | undefined;
}

/**
 * @public
 */
export interface GetAdminScopeRequest {
  /**
   * <p>The administrator account that you want to get the details for.</p>
   * @public
   */
  AdminAccount: string | undefined;
}

/**
 * @public
 */
export interface GetAdminScopeResponse {
  /**
   * <p>Contains details about the administrative scope of the requested account.</p>
   * @public
   */
  AdminScope?: AdminScope | undefined;

  /**
   * <p>The current status of the request to onboard a member account as an Firewall Manager administrator.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING</code> - The account is onboarding to Firewall Manager as an administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING_COMPLETE</code> - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their <a>AdminScope</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING</code> - The account is being removed as an Firewall Manager administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING_COMPLETE</code> - The account has been removed as an Firewall Manager administrator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * @public
 */
export interface GetAppsListRequest {
  /**
   * <p>The ID of the Firewall Manager applications list that you want the details for.</p>
   * @public
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   * @public
   */
  DefaultList?: boolean | undefined;
}

/**
 * @public
 */
export interface GetAppsListResponse {
  /**
   * <p>Information about the specified Firewall Manager applications list.</p>
   * @public
   */
  AppsList?: AppsListData | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   * @public
   */
  AppsListArn?: string | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailRequest {
  /**
   * <p>The ID of the policy that you want to get the details for. <code>PolicyId</code> is
   *       returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the resources that you want to get the details for.</p>
   * @public
   */
  MemberAccount: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DependentServiceName = {
  AWSConfig: "AWSCONFIG",
  AWSShieldAdvanced: "AWSSHIELD_ADVANCED",
  AWSVirtualPrivateCloud: "AWSVPC",
  AWSWAF: "AWSWAF",
} as const;

/**
 * @public
 */
export type DependentServiceName = (typeof DependentServiceName)[keyof typeof DependentServiceName];

/**
 * @public
 * @enum
 */
export const ViolationReason = {
  BlackHoleRouteDetected: "BLACK_HOLE_ROUTE_DETECTED",
  BlackHoleRouteDetectedInFirewallSubnet: "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET",
  FMSCreatedSecurityGroupEdited: "FMS_CREATED_SECURITY_GROUP_EDITED",
  FirewallSubnetIsOutOfScope: "FIREWALL_SUBNET_IS_OUT_OF_SCOPE",
  FirewallSubnetMissingExpectedRoute: "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE",
  FirewallSubnetMissingVPCEndpoint: "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT",
  InternetGatewayMissingExpectedRoute: "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE",
  InternetTrafficNotInspected: "INTERNET_TRAFFIC_NOT_INSPECTED",
  InvalidNetworkAclEntry: "INVALID_NETWORK_ACL_ENTRY",
  InvalidRouteConfiguration: "INVALID_ROUTE_CONFIGURATION",
  MissingExpectedRouteTable: "MISSING_EXPECTED_ROUTE_TABLE",
  MissingFirewall: "MISSING_FIREWALL",
  MissingFirewallSubnetInAZ: "MISSING_FIREWALL_SUBNET_IN_AZ",
  MissingTargetGateway: "MISSING_TARGET_GATEWAY",
  NetworkFirewallPolicyModified: "NETWORK_FIREWALL_POLICY_MODIFIED",
  ResourceIncorrectWebAcl: "RESOURCE_INCORRECT_WEB_ACL",
  ResourceMissingDnsFirewall: "RESOURCE_MISSING_DNS_FIREWALL",
  ResourceMissingSecurityGroup: "RESOURCE_MISSING_SECURITY_GROUP",
  ResourceMissingShieldProtection: "RESOURCE_MISSING_SHIELD_PROTECTION",
  ResourceMissingWebAcl: "RESOURCE_MISSING_WEB_ACL",
  ResourceMissingWebaclOrShieldProtection: "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION",
  ResourceViolatesAuditSecurityGroup: "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP",
  RouteHasOutOfScopeEndpoint: "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT",
  SecurityGroupRedundant: "SECURITY_GROUP_REDUNDANT",
  SecurityGroupUnused: "SECURITY_GROUP_UNUSED",
  TrafficInspectionCrossesAZBoundary: "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY",
  UnexpectedFirewallRoutes: "UNEXPECTED_FIREWALL_ROUTES",
  UnexpectedTargetGatewayRoutes: "UNEXPECTED_TARGET_GATEWAY_ROUTES",
  WebACLConfigurationOrScopeOfUse: "WEB_ACL_CONFIGURATION_OR_SCOPE_OF_USE",
  WebAclMissingRuleGroup: "WEB_ACL_MISSING_RULE_GROUP",
} as const;

/**
 * @public
 */
export type ViolationReason = (typeof ViolationReason)[keyof typeof ViolationReason];

/**
 * <p>Details of the resource that is not protected by the policy.</p>
 * @public
 */
export interface ComplianceViolator {
  /**
   * <p>The resource ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The reason that the resource is not protected by the policy.</p>
   * @public
   */
  ViolationReason?: ViolationReason | undefined;

  /**
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. For example:
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>,
   *         <code>AWS::CloudFront::Distribution</code>, or
   *         <code>AWS::NetworkFirewall::FirewallPolicy</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Metadata about the resource that doesn't comply with the policy scope.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * <p>Describes
 *       the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are
 *       noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 * @public
 */
export interface PolicyComplianceDetail {
  /**
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   * @public
   */
  PolicyOwner?: string | undefined;

  /**
   * <p>The ID of the Firewall Manager policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  MemberAccount?: string | undefined;

  /**
   * <p>An array of resources that aren't protected by the WAF or Shield Advanced policy or
   *       that aren't in compliance with the security group policy.</p>
   * @public
   */
  Violators?: ComplianceViolator[] | undefined;

  /**
   * <p>Indicates if over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   * @public
   */
  EvaluationLimitExceeded?: boolean | undefined;

  /**
   * <p>A timestamp that indicates when the returned information should be considered out of
   *       date.</p>
   * @public
   */
  ExpiredAt?: Date | undefined;

  /**
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   * @public
   */
  IssueInfoMap?: Partial<Record<DependentServiceName, string>> | undefined;
}

/**
 * @public
 */
export interface GetComplianceDetailResponse {
  /**
   * <p>Information about the resources and the policy that you specified in the
   *         <code>GetComplianceDetail</code> request.</p>
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
   * <p>The SNS topic that records Firewall Manager activity. </p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The IAM role that is used by Firewall Manager to record activity to SNS.</p>
   * @public
   */
  SnsRoleName?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomerPolicyScopeIdType = {
  ACCOUNT: "ACCOUNT",
  ORG_UNIT: "ORG_UNIT",
} as const;

/**
 * @public
 */
export type CustomerPolicyScopeIdType = (typeof CustomerPolicyScopeIdType)[keyof typeof CustomerPolicyScopeIdType];

/**
 * @public
 * @enum
 */
export const CustomerPolicyStatus = {
  ACTIVE: "ACTIVE",
  OUT_OF_ADMIN_SCOPE: "OUT_OF_ADMIN_SCOPE",
} as const;

/**
 * @public
 */
export type CustomerPolicyStatus = (typeof CustomerPolicyStatus)[keyof typeof CustomerPolicyStatus];

/**
 * @public
 * @enum
 */
export const ResourceTagLogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type ResourceTagLogicalOperator = (typeof ResourceTagLogicalOperator)[keyof typeof ResourceTagLogicalOperator];

/**
 * <p>The resource tags that Firewall Manager uses to determine if a particular resource
 *       should be included or excluded from the Firewall Manager policy. Tags enable you to
 *       categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or
 *       environment. Each tag consists of a key and an optional value. If you add more than one tag to a policy, you can
 *       specify whether to combine them using the logical AND operator or the logical OR operator. For more information, see
 *     <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.</p>
 *          <p>Every resource tag must have a string value, either a non-empty string or an empty string. If you don't
 *         provide a value for a resource tag, Firewall Manager saves the value as an empty string: "". When Firewall Manager compares tags, it only
 *             matches two tags if they have the same key and the same value. A tag with an empty string value only
 *             matches with tags that also have an empty string value. </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The resource tag key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The resource tag value. To specify an empty string value, either don't provide this or specify it as "". </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>ICMP protocol: The ICMP type and code.</p>
 * @public
 */
export interface NetworkAclIcmpTypeCode {
  /**
   * <p>ICMP code. </p>
   * @public
   */
  Code?: number | undefined;

  /**
   * <p>ICMP type. </p>
   * @public
   */
  Type?: number | undefined;
}

/**
 * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
 * @public
 */
export interface NetworkAclPortRange {
  /**
   * <p>The beginning port number of the range. </p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The ending port number of the range. </p>
   * @public
   */
  To?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkAclRuleAction = {
  ALLOW: "allow",
  DENY: "deny",
} as const;

/**
 * @public
 */
export type NetworkAclRuleAction = (typeof NetworkAclRuleAction)[keyof typeof NetworkAclRuleAction];

/**
 * <p>Describes a rule in a network ACL.</p>
 *          <p>Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining
 * whether a packet should be allowed in or out of a subnet associated with the network ACL, Amazon Web Services processes the
 *        entries in the network ACL according to the rule numbers, in ascending order. </p>
 *          <p>When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy,
 *    you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order
 *        that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.</p>
 * @public
 */
export interface NetworkAclEntry {
  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   * @public
   */
  IcmpTypeCode?: NetworkAclIcmpTypeCode | undefined;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. </p>
   * @public
   */
  Protocol: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   * @public
   */
  PortRange?: NetworkAclPortRange | undefined;

  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   * @public
   */
  Ipv6CidrBlock?: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   * @public
   */
  RuleAction: NetworkAclRuleAction | undefined;

  /**
   * <p>Indicates whether the rule is an egress, or outbound, rule (applied to traffic leaving the subnet). If it's not
   *    an egress rule, then it's an ingress, or inbound, rule.</p>
   * @public
   */
  Egress: boolean | undefined;
}

/**
 * <p>The configuration of the first and last rules for the network ACL policy, and the remediation settings for each. </p>
 * @public
 */
export interface NetworkAclEntrySet {
  /**
   * <p>The rules that you want to run first in the Firewall Manager managed network ACLs. </p>
   *          <note>
   *             <p>Provide these in the order in which you want them to run. Firewall Manager will assign
   *            the specific rule numbers for you, in the network ACLs that it creates. </p>
   *          </note>
   *          <p>You must specify at least one first entry or one last entry in any network ACL policy. </p>
   * @public
   */
  FirstEntries?: NetworkAclEntry[] | undefined;

  /**
   * <p>Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy
   *        violations that involve conflicts between the custom entries and the policy entries. </p>
   *          <p>If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to
   *    remediate. For more information about the remediation behavior, see
   * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation">Remediation for managed network ACLs</a>
   *    in the <i>Firewall Manager Developer Guide</i>.</p>
   * @public
   */
  ForceRemediateForFirstEntries: boolean | undefined;

  /**
   * <p>The rules that you want to run last in the Firewall Manager managed network ACLs. </p>
   *          <note>
   *             <p>Provide these in the order in which you want them to run. Firewall Manager will assign
   *            the specific rule numbers for you, in the network ACLs that it creates. </p>
   *          </note>
   *          <p>You must specify at least one first entry or one last entry in any network ACL policy. </p>
   * @public
   */
  LastEntries?: NetworkAclEntry[] | undefined;

  /**
   * <p>Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy
   *        violations that involve conflicts between the custom entries and the policy entries. </p>
   *          <p>If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to
   *    remediate. For more information about the remediation behavior, see
   * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation">Remediation for managed network ACLs</a>
   *    in the <i>Firewall Manager Developer Guide</i>.</p>
   * @public
   */
  ForceRemediateForLastEntries: boolean | undefined;
}

/**
 * <p>Defines a Firewall Manager network ACL policy. This is used in the <code>PolicyOption</code> of a <code>SecurityServicePolicyData</code> for a <code>Policy</code>, when
 *            the <code>SecurityServicePolicyData</code> type is set to <code>NETWORK_ACL_COMMON</code>. </p>
 *          <p>For information about network ACLs, see
 *                                 <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Control traffic to subnets using network ACLs</a>
 *                                 in the <i>Amazon Virtual Private Cloud User Guide</i>. </p>
 * @public
 */
export interface NetworkAclCommonPolicy {
  /**
   * <p>The definition of the first and last rules for the network ACL policy. </p>
   * @public
   */
  NetworkAclEntrySet: NetworkAclEntrySet | undefined;
}

/**
 * @public
 * @enum
 */
export const FirewallDeploymentModel = {
  CENTRALIZED: "CENTRALIZED",
  DISTRIBUTED: "DISTRIBUTED",
} as const;

/**
 * @public
 */
export type FirewallDeploymentModel = (typeof FirewallDeploymentModel)[keyof typeof FirewallDeploymentModel];

/**
 * <p>Configures the firewall policy deployment model of Network Firewall. For information about
 *          Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example
 *             architectures with routing</a> in the <i>Network Firewall Developer
 *          Guide</i>.</p>
 * @public
 */
export interface NetworkFirewallPolicy {
  /**
   * <p>Defines the deployment model to use for the firewall policy. To use a distributed model,
   *          set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>.</p>
   * @public
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | undefined;
}

/**
 * <p>Configures the deployment model for the third-party firewall.</p>
 * @public
 */
export interface ThirdPartyFirewallPolicy {
  /**
   * <p>Defines the deployment model to use for the third-party firewall policy.</p>
   * @public
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | undefined;
}

/**
 * <p>Contains the settings to configure a network ACL policy, a Network Firewall firewall policy deployment model, or a third-party firewall policy.</p>
 * @public
 */
export interface PolicyOption {
  /**
   * <p>Defines the deployment model to use for the firewall policy.</p>
   * @public
   */
  NetworkFirewallPolicy?: NetworkFirewallPolicy | undefined;

  /**
   * <p>Defines the policy options for a third-party firewall policy.</p>
   * @public
   */
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy | undefined;

  /**
   * <p>Defines a Firewall Manager network ACL policy. </p>
   * @public
   */
  NetworkAclCommonPolicy?: NetworkAclCommonPolicy | undefined;
}

/**
 * <p>Details about the security service that is being used to protect the resources.</p>
 * @public
 */
export interface SecurityServicePolicyData {
  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy. For security group policies, Firewall Manager supports one security group for
   *       each common policy and for each content audit policy. This is an adjustable limit that you can
   *       increase by contacting Amazon Web Services Support.</p>
   * @public
   */
  Type: SecurityServiceType | undefined;

  /**
   * <p>Details about the service that are specific to the service type, in JSON format. </p>
   *          <ul>
   *             <li>
   *                <p>Example: <code>DNS_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10\}],\"postProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911\}]\}"</code>
   *                </p>
   *                <note>
   *                   <p>Valid values for <code>preProcessRuleGroups</code> are between 1 and 99. Valid
   *                  values for <code>postProcessRuleGroups</code> are between 9901 and 10000.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Example: <code>IMPORT_NETWORK_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"IMPORT_NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":\{\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-west-2:000000000000:stateless-rulegroup\/rg1\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:drop\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:pass\"],\"networkFirewallStatelessCustomActions\":[],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-west-2:aws-managed:stateful-rulegroup\/ThreatSignaturesEmergingEventsStrictOrder\",\"priority\":8\}],\"networkFirewallStatefulEngineOptions\":\{\"ruleOrder\":\"STRICT_ORDER\"\},\"networkFirewallStatefulDefaultActions\":[\"aws:drop_strict\"]\}\}"</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10\}],\"postProcessRuleGroups\":[\{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911\}]\}"</code>
   *                </p>
   *                <note>
   *                   <p>Valid values for <code>preProcessRuleGroups</code> are between 1 and 99. Valid
   *                  values for <code>postProcessRuleGroups</code> are between 9901 and 10000.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Centralized deployment
   *              model</p>
   *                <p>
   *                   <code>"\{\"type\":\"NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":\{\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\},\"firewallDeploymentModel\":\{\"centralizedFirewallDeploymentModel\":\{\"centralizedFirewallOrchestrationConfig\":\{\"inspectionVpcIds\":[\{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"\}],\"firewallCreationConfig\":\{\"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\}]\}\},\"allowedIPV4CidrList\":[]\}\}\}\}"</code>
   *                </p>
   *                <p> To use the centralized deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                 <code>CENTRALIZED</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               automatic Availability Zone configuration</p>
   *                <p>
   *                   <code>
   *                 "\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"OFF\"\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\}"
   *               </code>
   *                </p>
   *                <p> With automatic Availbility Zone configuration, Firewall Manager chooses which Availability Zones to create the endpoints in. To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               automatic Availability Zone configuration and route management</p>
   *                <p>
   *                   <code>
   *                 "\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"]\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\": \"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":true\}\}"
   *               </code>
   *                </p>
   *                <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               custom Availability Zone configuration</p>
   *                <p>
   *                   <code>"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\", \"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\},\{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"fragmentmetricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"firewallCreationConfig\":\{ \"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\},\{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[ \"10.0.0.0/28\"]\}]\} \},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"OFF\",\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":boolean\}\}"
   *               </code>
   *                </p>
   *                <p>
   *              With custom Availability Zone configuration,
   *              you define which specific Availability Zones to create endpoints in by configuring
   *                 <code>firewallCreationConfig</code>. To configure the Availability Zones in <code>firewallCreationConfig</code>, specify either the <code>availabilityZoneName</code> or <code>availabilityZoneId</code> parameter, not both parameters.
   *            </p>
   *                <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               custom Availability Zone configuration and route management</p>
   *                <p>
   *                   <code>"\{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1\}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[\{\"actionName\":\"customActionName\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"metricdimensionvalue\"\}]\}\}\},\{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":\{\"publishMetricAction\":\{\"dimensions\":[\{\"value\":\"fragmentmetricdimensionvalue\"\}]\}\}\}],\"networkFirewallStatefulRuleGroupReferences\":[\{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"\}],\"networkFirewallOrchestrationConfig\":\{\"firewallCreationConfig\":\{\"endpointLocation\":\{\"availabilityZoneConfigList\":[\{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\},\{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]\}]\}\},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"],\"routeManagementConfig\":\{\"allowCrossAZTrafficIfNoEndpoint\":true\}\},\"networkFirewallLoggingConfiguration\":\{\"logDestinationConfigs\":[\{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\},\{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":\{\"bucketName\":\"s3-bucket-name\"\}\}],\"overrideExistingConfig\":boolean\}\}"
   *               </code>
   *                </p>
   *                <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_COMMON\",\"securityGroups\":[\{\"id\":\"sg-03b1f67d69ed00197\"\}],\"revertManualSecurityGroupChanges\":true,\"exclusiveResourceSecurityGroupManagement\":true,\"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"enableSecurityGroupReferencesDistribution\":true\}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code> - Security group tag distribution
   *            </p>
   *                <p>
   *                   <code>""\{\"type\":\"SECURITY_GROUPS_COMMON\",\"securityGroups\":[\{\"id\":\"sg-000e55995d61a06bd\"\}],\"revertManualSecurityGroupChanges\":true,\"exclusiveResourceSecurityGroupManagement\":false,\"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":false,\"enableTagDistribution\":true\}""</code>
   *                </p>
   *                <p>
   *              Firewall Manager automatically distributes tags from the primary group to the security groups created by this policy. To use security group tag distribution, you must also set <code>revertManualSecurityGroupChanges</code> to <code>true</code>, otherwise Firewall Manager won't be able to create the policy. When you enable <code>revertManualSecurityGroupChanges</code>, Firewall Manager identifies and reports when the security groups created by this policy become non-compliant.
   *            </p>
   *                <p>
   *              Firewall Manager won't distribute system tags added by Amazon Web Services services into the replica security groups. System tags begin with the <code>aws:</code> prefix.
   *            </p>
   *             </li>
   *             <li>
   *                <p>Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as
   *               well as to those in VPCs that the account owns </p>
   *                <p>
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false,
   *                  \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[\{\"id\":\"
   *                  sg-000e55995d61a06bd\"\}]\}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_CONTENT_AUDIT</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"preManagedOptions\":[\{\"denyProtocolAllValue\":true\},\{\"auditSgDirection\":\{\"type\":\"ALL\"\}\}],\"securityGroups\":[\{\"id\":\"sg-049b2393a25468971\"\}],\"securityGroupAction\":\{\"type\":\"ALLOW\"\}\}"</code>
   *                </p>
   *                <p>The security group action for content audit can be <code>ALLOW</code> or
   *                  <code>DENY</code>. For <code>ALLOW</code>, all in-scope security group rules must
   *               be within the allowed range of the policy's security group rules. For
   *                  <code>DENY</code>, all in-scope security group rules must not contain a value or a
   *               range that matches a rule value or range in the policy security group.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_USAGE_AUDIT</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true,\"optionalDelayForUnusedInMinutes\":60\}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SHIELD_ADVANCED</code> with web ACL management</p>
   *                <p>
   *                   <code>"\{\"type\":\"SHIELD_ADVANCED\",\"optimizeUnassociatedWebACL\":true\}"</code>
   *                </p>
   *                <p>If you set <code>optimizeUnassociatedWebACL</code> to <code>true</code>, Firewall Manager creates web ACLs in accounts within the policy scope if the web ACLs will be used by at least one resource. Firewall Manager creates web ACLs in the accounts within policy scope only if the web ACLs will be used by at least one resource. If at any time an account comes into policy scope, Firewall Manager automatically creates a web ACL in the account if at least one resource will use the web ACL.</p>
   *                <p>Upon enablement, Firewall Manager performs a one-time cleanup of unused web ACLs in your account. The cleanup process can take several hours. If a resource leaves policy scope after Firewall Manager creates a web ACL, Firewall Manager doesn't disassociate the resource from the web ACL. If you want Firewall Manager to clean up the web ACL, you must first manually disassociate the resources from the web ACL, and then enable the manage unused web ACLs option in your policy.</p>
   *                <p>If you set <code>optimizeUnassociatedWebACL</code> to <code>false</code>, and Firewall Manager automatically creates an empty web ACL in each account that's within policy scope.</p>
   *             </li>
   *             <li>
   *                <p>Specification for <code>SHIELD_ADVANCED</code> for Amazon CloudFront distributions </p>
   *                <p>
   *                   <code>"\{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": \{\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\", \"automaticResponseAction\":\"BLOCK|COUNT\"\}, \"overrideCustomerWebaclClassic\":true|false, \"optimizeUnassociatedWebACL\":true|false\}"</code>
   *                </p>
   *                <p>For example:
   *                  <code>"\{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\":
   *                  \{\"automaticResponseStatus\":\"ENABLED\",
   *                  \"automaticResponseAction\":\"COUNT\"\}\}"</code>
   *                </p>
   *                <p>The default value for <code>automaticResponseStatus</code> is
   *                  <code>IGNORED</code>. The value for <code>automaticResponseAction</code> is only
   *               required when <code>automaticResponseStatus</code> is set to <code>ENABLED</code>.
   *               The default value for <code>overrideCustomerWebaclClassic</code> is
   *                  <code>false</code>.</p>
   *                <p>For other resource types that you can protect with a Shield Advanced policy, this
   *                  <code>ManagedServiceData</code> configuration is an empty string.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>THIRD_PARTY_FIREWALL</code>
   *                </p>
   *                <p>Replace <code>THIRD_PARTY_FIREWALL_NAME</code> with the name of the third-party firewall.</p>
   *                <p>
   *                   <code>"\{
   *               "type":"THIRD_PARTY_FIREWALL",
   *               "thirdPartyFirewall":"THIRD_PARTY_FIREWALL_NAME",
   *               "thirdPartyFirewallConfig":\{
   *                 "thirdPartyFirewallPolicyList":["global-1"]
   *               \},
   * 	          "firewallDeploymentModel":\{
   *                 "distributedFirewallDeploymentModel":\{
   *                   "distributedFirewallOrchestrationConfig":\{
   *                     "firewallCreationConfig":\{
   *                       "endpointLocation":\{
   *                         "availabilityZoneConfigList":[
   *                           \{
   *                             "availabilityZoneName":"$\{AvailabilityZone\}"
   *                           \}
   *                         ]
   *                       \}
   *                     \},
   *                     "allowedIPV4CidrList":[
   *                     ]
   *                   \}
   *                 \}
   *               \}
   *             \}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> - Account takeover prevention, Bot Control managed rule groups, optimize unassociated web ACL, and rule action override
   *            </p>
   *                <p>
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesATPRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesATPRuleSet\":\{\"loginPath\":\"/loginpath\",\"requestInspection\":\{\"payloadType\":\"FORM_ENCODED|JSON\",\"usernameField\":\{\"identifier\":\"/form/username\"\},\"passwordField\":\{\"identifier\":\"/form/password\"\}\}\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\},\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesBotControlRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesBotControlRuleSet\":\{\"inspectionLevel\":\"TARGETED|COMMON\"\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true,\"ruleActionOverrides\":[\{\"name\":\"Rule1\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\},\{\"name\":\"Rule2\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\}]\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true,\"optimizeUnassociatedWebACL\":true\}"</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Bot Control - For information about <code>AWSManagedRulesBotControlRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesBotControlRuleSet.html">AWSManagedRulesBotControlRuleSet</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Fraud Control account takeover prevention (ATP) - For information about the properties available for <code>AWSManagedRulesATPRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesATPRuleSet.html">AWSManagedRulesATPRuleSet</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Optimize unassociated web ACL - If you set <code>optimizeUnassociatedWebACL</code> to <code>true</code>, Firewall Manager creates web ACLs in accounts within the policy scope if the web ACLs will be used by at least one resource. Firewall Manager creates web ACLs in the accounts within policy scope only if the web ACLs will be used by at least one resource. If at any time an account comes into policy scope, Firewall Manager automatically creates a web ACL in the account if at least one resource will use the web ACL.</p>
   *                      <p>Upon enablement, Firewall Manager performs a one-time cleanup of unused web ACLs in your account. The cleanup process can take several hours. If a resource leaves policy scope after Firewall Manager creates a web ACL, Firewall Manager disassociates the resource from the web ACL, but won't clean up the unused web ACL. Firewall Manager only cleans up unused web ACLs when you first enable management of unused web ACLs in a policy.</p>
   *                      <p>If you set <code>optimizeUnassociatedWebACL</code> to <code>false</code> Firewall Manager doesn't manage unused web ACLs, and Firewall Manager automatically creates an empty web ACL in each account that's within policy scope.</p>
   *                   </li>
   *                   <li>
   *                      <p>Rule action overrides - Firewall Manager supports rule action overrides only for managed rule groups. To configure a <code>RuleActionOverrides</code> add the <code>Name</code> of the rule to override, and <code>ActionToUse</code>, which is the new action to use for the rule. For information about using rule action override, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleActionOverride.html">RuleActionOverride</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> -  <code>CAPTCHA</code> and <code>Challenge</code> configs
   *            </p>
   *                <p>
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\"\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true,\"captchaConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":500\}\},\"challengeConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":800\}\},\"tokenDomains\":[\"google.com\",\"amazon.com\"],\"associationConfig\":\{\"requestBody\":\{\"CLOUDFRONT\":\{\"defaultSizeInspectionLimit\":\"KB_16\"\}\}\}\}"</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CAPTCHA</code> and <code>Challenge</code> configs - If you update the policy's values for <code>associationConfig</code>, <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code>, Firewall Manager will overwrite your local web ACLs to contain the new value(s). However, if you don't update the policy's <code>associationConfig</code>, <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code> values, the values in your local web ACLs will remain unchanged. For information about association configs, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociationConfig.html">AssociationConfig</a>. For information about CAPTCHA and Challenge configs, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_CaptchaConfig.html">CaptchaConfig</a> and <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_ChallengeConfig.html">ChallengeConfig</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>defaultSizeInspectionLimit</code> - Specifies the maximum size of the web request body component that an associated Amazon CloudFront distribution should send to WAF for inspection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_RequestBodyAssociatedResourceTypeConfig.html#WAF-Type-RequestBodyAssociatedResourceTypeConfig-DefaultSizeInspectionLimit">DefaultSizeInspectionLimit</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> -  Firewall Manager support for WAF managed rule group versioning
   *           </p>
   *                <p>
   *                   <code>"\{\"preProcessRuleGroups\":[\{\"ruleGroupType\":\"ManagedRuleGroup\",\"overrideAction\":\{\"type\":\"NONE\"\},\"sampledRequestsEnabled\":true,\"managedRuleGroupIdentifier\":\{\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\",\"vendorName\":\"AWS\",\"managedRuleGroupConfigs\":null\}\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"tokenDomains\":null,\"customResponse\":null,\"type\":\"WAFV2\",\"overrideCustomerWebACLAssociation\":false,\"sampledRequestsEnabledForDefaultActions\":true,\"optimizeUnassociatedWebACL\":true,\"webACLSource\":\"RETROFIT_EXISTING\"\}"</code>
   *                </p>
   *                <p>
   *             To use a specific version of a WAF managed rule group in your Firewall Manager policy, you must set <code>versionEnabled</code> to <code>true</code>, and set <code>version</code> to the version you'd like to use. If you don't set <code>versionEnabled</code> to <code>true</code>, or if you omit <code>versionEnabled</code>, then Firewall Manager uses the default version of the WAF managed rule group.
   *           </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> - Logging configurations
   *            </p>
   *                <p>
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null, \"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\": \{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\", \"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\"\} ,\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[], \"sampledRequestsEnabled\":true\}],\"postProcessRuleGroups\":[], \"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\" :null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\" :false,\"loggingConfiguration\":\{\"logDestinationConfigs\": [\"arn:aws:s3:::aws-waf-logs-example-bucket\"] ,\"redactedFields\":[],\"loggingFilterConfigs\":\{\"defaultBehavior\":\"KEEP\", \"filters\":[\{\"behavior\":\"KEEP\",\"requirement\":\"MEETS_ALL\", \"conditions\":[\{\"actionCondition\":\"CAPTCHA\"\},\{\"actionCondition\": \"CHALLENGE\"\}, \{\"actionCondition\":\"EXCLUDED_AS_COUNT\"\}]\}]\}\},\"sampledRequestsEnabledForDefaultActions\":true\}"</code>
   *                </p>
   *                <p>Firewall Manager supports Amazon Kinesis Data Firehose and Amazon S3 as the <code>logDestinationConfigs</code> in your <code>loggingConfiguration</code>. For information about WAF logging configurations, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_LoggingConfiguration.html">LoggingConfiguration</a> in the <i>WAF API Reference</i>
   *                </p>
   *                <p>In the <code>loggingConfiguration</code>, you can specify one
   *                  <code>logDestinationConfigs</code>. Optionally provide as many as 20
   *                  <code>redactedFields</code>. The <code>RedactedFieldType</code> must be one of
   *                  <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or
   *                  <code>METHOD</code>.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAF Classic</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"ruleGroups\":[\{\"id\":\"78cb36c0-1b5e-4d7d-82b2-cf48d3ad9659\",\"overrideAction\":\{\"type\":\"NONE\"\}\}],\"overrideCustomerWebACLAssociation\":true,\"defaultAction\":\{\"type\":\"ALLOW\"\},\"type\":\"WAF\"\}"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ManagedServiceData?: string | undefined;

  /**
   * <p>Contains the settings to configure a network ACL policy, a Network Firewall firewall policy deployment model, or a third-party firewall policy.</p>
   * @public
   */
  PolicyOption?: PolicyOption | undefined;
}

/**
 * <p>An Firewall Manager policy.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>The ID of the Firewall Manager policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The name of the Firewall Manager policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code>
   *       request, the <code>PolicyUpdateToken</code> in the request must match the
   *         <code>PolicyUpdateToken</code> of the current policy version. To get the
   *         <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code>
   *       request.</p>
   * @public
   */
  PolicyUpdateToken?: string | undefined;

  /**
   * <p>Details about the security service that is being used to protect the resources.</p>
   * @public
   */
  SecurityServicePolicyData: SecurityServicePolicyData | undefined;

  /**
   * <p>The type of resource protected by or in scope of the policy. This is in the format shown
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *                     To apply this policy to multiple resource types, specify a resource type of <code>ResourceTypeList</code> and then specify the resource types in a <code>ResourceTypeList</code>.</p>
   *          <p>The following are valid resource types for each Firewall Manager policy type:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services WAF Classic - <code>AWS::ApiGateway::Stage</code>, <code>AWS::CloudFront::Distribution</code>, and <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>.</p>
   *             </li>
   *             <li>
   *                <p>WAF - <code>AWS::ApiGateway::Stage</code>, <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, and <code>AWS::CloudFront::Distribution</code>.</p>
   *             </li>
   *             <li>
   *                <p>Shield Advanced - <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, <code>AWS::ElasticLoadBalancing::LoadBalancer</code>, <code>AWS::EC2::EIP</code>, and <code>AWS::CloudFront::Distribution</code>.</p>
   *             </li>
   *             <li>
   *                <p>Network ACL - <code>AWS::EC2::Subnet</code>.</p>
   *             </li>
   *             <li>
   *                <p>Security group usage audit - <code>AWS::EC2::SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>Security group content audit - <code>AWS::EC2::SecurityGroup</code>, <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>.</p>
   *             </li>
   *             <li>
   *                <p>DNS Firewall, Network Firewall, and third-party firewall - <code>AWS::EC2::VPC</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>An array of <code>ResourceType</code> objects. Use this only to specify multiple resource types. To specify a single resource type, use <code>ResourceType</code>.</p>
   * @public
   */
  ResourceTypeList?: string[] | undefined;

  /**
   * <p>An array of <code>ResourceTag</code> objects.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>If set to <code>True</code>, resources with the tags that are specified in the
   *         <code>ResourceTag</code> array are not in scope of the policy. If set to <code>False</code>,
   *       and the <code>ResourceTag</code> array is not null, only resources with the specified tags are
   *       in scope of the policy.</p>
   * @public
   */
  ExcludeResourceTags: boolean | undefined;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   * @public
   */
  RemediationEnabled: boolean | undefined;

  /**
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *    that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *    from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   * @public
   */
  DeleteUnusedFMManagedResources?: boolean | undefined;

  /**
   * <p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to include in the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *          <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager
   *           applies the policy to all accounts specified by the <code>IncludeMap</code>, and
   *           does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager
   *             applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p>
   *          <p>You can specify account IDs, OUs, or a combination: </p>
   *          <ul>
   *             <li>
   *                <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map:
   *       <code>\{“ACCOUNT” : [“accountID1”, “accountID2”]\}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map:
   *   <code>\{“ORG_UNIT” : [“ouid111”, “ouid112”]\}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map:
   *       <code>\{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IncludeMap?: Partial<Record<CustomerPolicyScopeIdType, string[]>> | undefined;

  /**
   * <p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to exclude from the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *          <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager
   *           applies the policy to all accounts specified by the <code>IncludeMap</code>, and
   *           does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager
   *             applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p>
   *          <p>You can specify account IDs, OUs, or a combination: </p>
   *          <ul>
   *             <li>
   *                <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map:
   *       <code>\{“ACCOUNT” : [“accountID1”, “accountID2”]\}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map:
   *   <code>\{“ORG_UNIT” : [“ouid111”, “ouid112”]\}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map:
   *       <code>\{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]\}</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ExcludeMap?: Partial<Record<CustomerPolicyScopeIdType, string[]>> | undefined;

  /**
   * <p>The unique identifiers of the resource sets used by the policy.</p>
   * @public
   */
  ResourceSetIds?: string[] | undefined;

  /**
   * <p>Your description of the Firewall Manager policy.</p>
   * @public
   */
  PolicyDescription?: string | undefined;

  /**
   * <p>Indicates whether the policy is in or out of an admin's policy or Region scope.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The administrator can manage and delete the policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyStatus?: CustomerPolicyStatus | undefined;

  /**
   * <p>Specifies whether to combine multiple resource tags with AND,
   *          so that a resource must have all tags to be included or excluded, or OR,
   *          so that a resource must have at least one tag.</p>
   *          <p>Default: <code>AND</code>
   *          </p>
   * @public
   */
  ResourceTagLogicalOperator?: ResourceTagLogicalOperator | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>Information about the specified Firewall Manager policy.</p>
   * @public
   */
  Policy?: Policy | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * <p>The value of the <code>Type</code> parameter is invalid.</p>
 * @public
 */
export class InvalidTypeException extends __BaseException {
  readonly name: "InvalidTypeException" = "InvalidTypeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetProtectionStatusRequest {
  /**
   * <p>The ID of the policy for which you want to get the attack information.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that is in scope of the policy that you want to get the details
   *          for.</p>
   * @public
   */
  MemberAccountId?: string | undefined;

  /**
   * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *           request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *          request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify
   *          for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of
   *          objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code>
   *          from the previous response to get information about another batch of objects.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the number of objects that you want Firewall Manager to return for this request. If you have more
   *         objects than the number that you specify for <code>MaxResults</code>, the response includes a
   *          <code>NextToken</code> value that you can use to get another batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetProtectionStatusResponse {
  /**
   * <p>The ID of the Firewall Manager administrator account for this policy.</p>
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * <p>The service type that is protected by the policy. Currently, this is always
   *             <code>SHIELD_ADVANCED</code>.</p>
   * @public
   */
  ServiceType?: SecurityServiceType | undefined;

  /**
   * <p>Details about the attack, including the following:</p>
   *          <ul>
   *             <li>
   *                <p>Attack type</p>
   *             </li>
   *             <li>
   *                <p>Account ID</p>
   *             </li>
   *             <li>
   *                <p>ARN of the resource attacked</p>
   *             </li>
   *             <li>
   *                <p>Start time of the attack</p>
   *             </li>
   *             <li>
   *                <p>End time of the attack (ongoing attacks will not have an end time)</p>
   *             </li>
   *          </ul>
   *          <p>The details are in JSON format. </p>
   * @public
   */
  Data?: string | undefined;

  /**
   * <p>If you have more objects than the number that you specified for <code>MaxResults</code> in the request,
   *          the response includes a <code>NextToken</code> value. To list more objects, submit another
   *          <code>GetProtectionStatus</code> request, and specify the <code>NextToken</code> value from the response in the
   *          <code>NextToken</code> value in the next request.</p>
   *          <p>Amazon Web Services SDKs provide auto-pagination that identify <code>NextToken</code> in a response and
   *          make subsequent request calls automatically on your behalf. However, this feature is not
   *          supported by <code>GetProtectionStatus</code>. You must submit subsequent requests with
   *             <code>NextToken</code> using your own processes. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProtocolsListRequest {
  /**
   * <p>The ID of the Firewall Manager protocols list that you want the details for.</p>
   * @public
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   * @public
   */
  DefaultList?: boolean | undefined;
}

/**
 * <p>An Firewall Manager protocols list.</p>
 * @public
 */
export interface ProtocolsListData {
  /**
   * <p>The ID of the Firewall Manager protocols list.</p>
   * @public
   */
  ListId?: string | undefined;

  /**
   * <p>The name of the Firewall Manager protocols list.</p>
   * @public
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   * @public
   */
  ListUpdateToken?: string | undefined;

  /**
   * <p>The time that the Firewall Manager protocols list was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time that the Firewall Manager protocols list was last updated.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   * @public
   */
  ProtocolsList: string[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding protocol arrays.</p>
   * @public
   */
  PreviousProtocolsList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface GetProtocolsListResponse {
  /**
   * <p>Information about the specified Firewall Manager protocols list.</p>
   * @public
   */
  ProtocolsList?: ProtocolsListData | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   * @public
   */
  ProtocolsListArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceSetStatus = {
  ACTIVE: "ACTIVE",
  OUT_OF_ADMIN_SCOPE: "OUT_OF_ADMIN_SCOPE",
} as const;

/**
 * @public
 */
export type ResourceSetStatus = (typeof ResourceSetStatus)[keyof typeof ResourceSetStatus];

/**
 * <p>A set of resources to include in a policy.</p>
 * @public
 */
export interface ResourceSet {
  /**
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the resource set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An optional token that you can use for optimistic locking. Firewall Manager returns a token to your requests that access the resource set. The token marks the state of the resource set resource at the time of the request. Update tokens are not allowed when creating a resource set. After creation, each subsequent update call to the resource set requires the update token.
   * </p>
   *          <p>To make an unconditional change to the resource set, omit the token in your update request. Without the token, Firewall Manager performs your updates regardless of whether the resource set has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the resource set, provide the token in your update request. Firewall Manager uses the token to ensure that the resource set hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the resource set again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   * @public
   */
  UpdateToken?: string | undefined;

  /**
   * <p>Determines the resources that can be associated to the resource set. Depending on
   *          your setting for max results and the number of resource sets, a single call might not
   *          return the full list.</p>
   * @public
   */
  ResourceTypeList: string[] | undefined;

  /**
   * <p>The last time that the resource set was changed.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>Indicates whether the resource set is in or out of an admin's Region scope.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The administrator can manage and delete the resource set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceSetStatus?: ResourceSetStatus | undefined;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * <p>Information about the specified resource set.</p>
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   * @public
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface GetThirdPartyFirewallAssociationStatusRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketplaceSubscriptionOnboardingStatus = {
  COMPLETE: "COMPLETE",
  NOT_COMPLETE: "NOT_COMPLETE",
  NO_SUBSCRIPTION: "NO_SUBSCRIPTION",
} as const;

/**
 * @public
 */
export type MarketplaceSubscriptionOnboardingStatus =
  (typeof MarketplaceSubscriptionOnboardingStatus)[keyof typeof MarketplaceSubscriptionOnboardingStatus];

/**
 * @public
 */
export interface GetThirdPartyFirewallAssociationStatusResponse {
  /**
   * <p>The current status for setting a Firewall Manager policy administrators account as an administrator of the third-party firewall tenant.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONBOARDING</code> - The Firewall Manager policy administrator is being designated as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONBOARD_COMPLETE</code> - The Firewall Manager policy administrator is designated as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARDING</code> - The Firewall Manager policy administrator is being removed as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFFBOARD_COMPLETE</code> - The Firewall Manager policy administrator has been removed as a tenant administrator.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_EXIST</code> - The Firewall Manager policy administrator doesn't exist as a tenant administrator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | undefined;

  /**
   * <p>The status for subscribing to the third-party firewall vendor in the Amazon Web Services Marketplace.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NO_SUBSCRIPTION</code> - The Firewall Manager policy administrator isn't subscribed to the third-party firewall service in the Amazon Web Services Marketplace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_COMPLETE</code> - The Firewall Manager policy administrator is in the process of subscribing to the third-party firewall service in the Amazon Web Services Marketplace, but doesn't yet have an active subscription.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code> - The Firewall Manager policy administrator has an active subscription to the third-party firewall service in the Amazon Web Services Marketplace.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus | undefined;
}

/**
 * @public
 */
export interface GetViolationDetailsRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for. You can get violation details for the following policy types:</p>
   *          <ul>
   *             <li>
   *                <p>WAF</p>
   *             </li>
   *             <li>
   *                <p>DNS Firewall</p>
   *             </li>
   *             <li>
   *                <p>Imported Network Firewall</p>
   *             </li>
   *             <li>
   *                <p>Network Firewall</p>
   *             </li>
   *             <li>
   *                <p>Security group content audit</p>
   *             </li>
   *             <li>
   *                <p>Network ACL</p>
   *             </li>
   *             <li>
   *                <p>Third-party firewall</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that you want the details for.</p>
   * @public
   */
  MemberAccount: string | undefined;

  /**
   * <p>The ID of the resource that has violations.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *       Supported resource types are:
   *       <code>AWS::WAFv2::WebACL</code>,
   *       <code>AWS::EC2::Instance</code>,
   *       <code>AWS::EC2::NetworkInterface</code>,
   *       <code>AWS::EC2::SecurityGroup</code>,
   *       <code>AWS::NetworkFirewall::FirewallPolicy</code>, and
   *       <code>AWS::EC2::Subnet</code>.
   *    </p>
   * @public
   */
  ResourceType: string | undefined;
}

/**
 * <p>A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  </p>
 * @public
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.  </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.</p>
 * @public
 */
export interface PartialMatch {
  /**
   * <p>The reference rule from the primary security group of the Firewall Manager policy.</p>
   * @public
   */
  Reference?: string | undefined;

  /**
   * <p>The violation reason.</p>
   * @public
   */
  TargetViolationReasons?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RemediationActionType = {
  Modify: "MODIFY",
  Remove: "REMOVE",
} as const;

/**
 * @public
 */
export type RemediationActionType = (typeof RemediationActionType)[keyof typeof RemediationActionType];

/**
 * <p>Describes a set of permissions for a security group rule.</p>
 * @public
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The IPv4 ranges for the security group rule.</p>
   * @public
   */
  IPV4Range?: string | undefined;

  /**
   * <p>The IPv6 ranges for the security group rule.</p>
   * @public
   */
  IPV6Range?: string | undefined;

  /**
   * <p>The ID of the prefix list for the security group rule.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of <code>-1</code> indicates all ICMP/ICMPv6 types.</p>
   * @public
   */
  FromPort?: number | undefined;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes.</p>
   * @public
   */
  ToPort?: number | undefined;
}

/**
 * <p>Remediation option for the rule specified in the <code>ViolationTarget</code>.</p>
 * @public
 */
export interface SecurityGroupRemediationAction {
  /**
   * <p>The remediation action that will be performed.</p>
   * @public
   */
  RemediationActionType?: RemediationActionType | undefined;

  /**
   * <p>Brief description of the action that will be performed.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The final state of the rule specified in the <code>ViolationTarget</code> after it is remediated.</p>
   * @public
   */
  RemediationResult?: SecurityGroupRuleDescription | undefined;

  /**
   * <p>Indicates if the current action is the default action.</p>
   * @public
   */
  IsDefaultAction?: boolean | undefined;
}

/**
 * <p>Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.</p>
 * @public
 */
export interface AwsVPCSecurityGroupViolation {
  /**
   * <p>The security group rule that is being evaluated.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>A description of the security group that violates the policy.</p>
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * <p>List of rules specified in the security group of the Firewall Manager policy that partially match the <code>ViolationTarget</code> rule.</p>
   * @public
   */
  PartialMatches?: PartialMatch[] | undefined;

  /**
   * <p>Remediation options for the rule specified in the <code>ViolationTarget</code>.</p>
   * @public
   */
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[] | undefined;
}

/**
 * <p>A DNS Firewall rule group that Firewall Manager
 *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
 * @public
 */
export interface DnsDuplicateRuleGroupViolation {
  /**
   * <p>Information about the VPC ID. </p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   * @public
   */
  ViolationTargetDescription?: string | undefined;
}

/**
 * <p>The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. </p>
 * @public
 */
export interface DnsRuleGroupLimitExceededViolation {
  /**
   * <p>Information about the VPC ID. </p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * <p>The number of rule groups currently associated with the VPC.  </p>
   * @public
   */
  NumberOfRuleGroupsAlreadyAssociated?: number | undefined;
}

/**
 * <p>A rule group that Firewall Manager
 *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
 * @public
 */
export interface DnsRuleGroupPriorityConflictViolation {
  /**
   * <p>Information about the VPC ID. </p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>A description of the violation that specifies the VPC and the rule group that's already associated with it.</p>
   * @public
   */
  ViolationTargetDescription?: string | undefined;

  /**
   * <p>The priority setting of the two conflicting rule groups.</p>
   * @public
   */
  ConflictingPriority?: number | undefined;

  /**
   * <p>The ID of the Firewall Manager DNS Firewall policy that was already applied to the VPC.
   *        This policy contains the rule group that's already associated with the VPC. </p>
   * @public
   */
  ConflictingPolicyId?: string | undefined;

  /**
   * <p>The priorities of rule groups that are already associated with the VPC. To retry your operation,
   *        choose priority settings that aren't in this list for the rule groups in your new DNS Firewall policy. </p>
   * @public
   */
  UnavailablePriorities?: number[] | undefined;
}

/**
 * <p>Contains details about the firewall subnet that violates the policy scope.</p>
 * @public
 */
export interface FirewallSubnetIsOutOfScopeViolation {
  /**
   * <p>The ID of the firewall subnet that violates the policy scope.</p>
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * <p>The VPC ID of the firewall subnet that violates the policy scope.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Availability Zone of the firewall subnet that violates the policy scope.</p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone ID of the firewall subnet that violates the policy scope.</p>
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;

  /**
   * <p>The VPC endpoint ID of the firewall subnet that violates the policy scope.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * <p>The violation details for a firewall subnet's VPC endpoint that's deleted or missing.</p>
 * @public
 */
export interface FirewallSubnetMissingVPCEndpointViolation {
  /**
   * <p>The ID of the firewall that this VPC endpoint is associated with.</p>
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with the deleted VPC subnet.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The name of the Availability Zone of the deleted VPC subnet.</p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone of the deleted VPC subnet.</p>
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EntryType = {
  CustomEntry: "CUSTOM_ENTRY",
  FMSManagedFirstEntry: "FMS_MANAGED_FIRST_ENTRY",
  FMSManagedLastEntry: "FMS_MANAGED_LAST_ENTRY",
} as const;

/**
 * @public
 */
export type EntryType = (typeof EntryType)[keyof typeof EntryType];

/**
 * <p>Describes a single rule in a network ACL.</p>
 * @public
 */
export interface EntryDescription {
  /**
   * <p>Describes a rule in a network ACL.</p>
   *          <p>Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining
   * whether a packet should be allowed in or out of a subnet associated with the network ACL, Amazon Web Services processes the
   *        entries in the network ACL according to the rule numbers, in ascending order. </p>
   *          <p>When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy,
   *    you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order
   *        that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.</p>
   * @public
   */
  EntryDetail?: NetworkAclEntry | undefined;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number. In a Firewall Manager network ACL policy, Firewall Manager
   *    assigns rule numbers. </p>
   * @public
   */
  EntryRuleNumber?: number | undefined;

  /**
   * <p>Specifies whether the entry is managed by Firewall Manager or by a user, and, for Firewall Manager-managed entries, specifies whether the entry
   *            is among those that run first in the network ACL or those that run last. </p>
   * @public
   */
  EntryType?: EntryType | undefined;
}

/**
 * @public
 * @enum
 */
export const EntryViolationReason = {
  EntryConflict: "ENTRY_CONFLICT",
  IncorrectEntryOrder: "INCORRECT_ENTRY_ORDER",
  MissingExpectedEntry: "MISSING_EXPECTED_ENTRY",
} as const;

/**
 * @public
 */
export type EntryViolationReason = (typeof EntryViolationReason)[keyof typeof EntryViolationReason];

/**
 * <p>Detailed information about an entry violation in a network ACL. The violation is against the network ACL specification inside the
 *            Firewall Manager network ACL policy. This data object is part of <code>InvalidNetworkAclEntriesViolation</code>.</p>
 * @public
 */
export interface EntryViolation {
  /**
   * <p>The Firewall Manager-managed network ACL entry that is involved in the entry violation. </p>
   * @public
   */
  ExpectedEntry?: EntryDescription | undefined;

  /**
   * <p>The evaluation location within the ordered list of entries where the <code>ExpectedEntry</code> should be, according to the network ACL policy specifications. </p>
   * @public
   */
  ExpectedEvaluationOrder?: string | undefined;

  /**
   * <p>The evaluation location within the ordered list of entries where the <code>ExpectedEntry</code> is currently located. </p>
   * @public
   */
  ActualEvaluationOrder?: string | undefined;

  /**
   * <p>The entry that's currently in the <code>ExpectedEvaluationOrder</code> location, in place of the expected entry. </p>
   * @public
   */
  EntryAtExpectedEvaluationOrder?: EntryDescription | undefined;

  /**
   * <p>The list of entries that are in conflict with <code>ExpectedEntry</code>. </p>
   * @public
   */
  EntriesWithConflicts?: EntryDescription[] | undefined;

  /**
   * <p>Descriptions of the violations that Firewall Manager found for these entries. </p>
   * @public
   */
  EntryViolationReasons?: EntryViolationReason[] | undefined;
}

/**
 * <p>Violation detail for the entries in a network ACL resource.</p>
 * @public
 */
export interface InvalidNetworkAclEntriesViolation {
  /**
   * <p>The VPC where the violation was found. </p>
   * @public
   */
  Vpc?: string | undefined;

  /**
   * <p>The subnet that's associated with the network ACL.</p>
   * @public
   */
  Subnet?: string | undefined;

  /**
   * <p>The Availability Zone where the network ACL is in use. </p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>The network ACL containing the entry violations. </p>
   * @public
   */
  CurrentAssociatedNetworkAcl?: string | undefined;

  /**
   * <p>Detailed information about the entry violations in the network ACL. </p>
   * @public
   */
  EntryViolations?: EntryViolation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
  PrefixList: "PREFIX_LIST",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const TargetType = {
  CarrierGateway: "CARRIER_GATEWAY",
  EgressOnlyInternetGateway: "EGRESS_ONLY_INTERNET_GATEWAY",
  Gateway: "GATEWAY",
  Instance: "INSTANCE",
  LocalGateway: "LOCAL_GATEWAY",
  NatGateway: "NAT_GATEWAY",
  NetworkInterface: "NETWORK_INTERFACE",
  TransitGateway: "TRANSIT_GATEWAY",
  VPCEndpoint: "VPC_ENDPOINT",
  VPCPeeringConnection: "VPC_PEERING_CONNECTION",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * <p>Describes a route in a route table.</p>
 * @public
 */
export interface Route {
  /**
   * <p>The type of destination for the route.</p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p>The type of target for the route.</p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>The destination of the route.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The route's target.</p>
   * @public
   */
  Target?: string | undefined;
}

/**
 * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
 * @public
 */
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * <p>The subnet that has an inactive state.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>Information about the route table ID.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Information about the route or routes that are in violation.</p>
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;
}

/**
 * <p>Information about the expected route in the route table.</p>
 * @public
 */
export interface ExpectedRoute {
  /**
   * <p>Information about the IPv4 CIDR block.</p>
   * @public
   */
  IpV4Cidr?: string | undefined;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   * @public
   */
  PrefixListId?: string | undefined;

  /**
   * <p>Information about the IPv6 CIDR block.</p>
   * @public
   */
  IpV6Cidr?: string | undefined;

  /**
   * <p>Information about the contributing subnets.</p>
   * @public
   */
  ContributingSubnets?: string[] | undefined;

  /**
   * <p>Information about the allowed targets.</p>
   * @public
   */
  AllowedTargets?: string[] | undefined;

  /**
   * <p>Information about the route table ID.</p>
   * @public
   */
  RouteTableId?: string | undefined;
}

/**
 * <p>Violation detail for the subnet for which internet traffic that hasn't been inspected.</p>
 * @public
 */
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * <p>The subnet ID.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The subnet Availability Zone.</p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>Information about the route table ID.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The route or routes that are in violation.</p>
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   * @public
   */
  IsRouteTableUsedInDifferentAZ?: boolean | undefined;

  /**
   * <p>Information about the subnet route table for the current firewall.</p>
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * <p>The expected endpoint for the current firewall.</p>
   * @public
   */
  ExpectedFirewallEndpoint?: string | undefined;

  /**
   * <p>The firewall subnet ID.</p>
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * <p>The firewall subnet routes that are expected.</p>
   * @public
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[] | undefined;

  /**
   * <p>The actual firewall subnet routes.</p>
   * @public
   */
  ActualFirewallSubnetRoutes?: Route[] | undefined;

  /**
   * <p>The internet gateway ID.</p>
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * <p>The current route table for the internet gateway.</p>
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * <p>The internet gateway routes that are expected.</p>
   * @public
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[] | undefined;

  /**
   * <p>The actual internet gateway routes.</p>
   * @public
   */
  ActualInternetGatewayRoutes?: Route[] | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Violation detail for the improperly configured subnet route. It's possible there is a missing route table route,
 *       or a configuration that causes traffic to cross an Availability Zone boundary.</p>
 * @public
 */
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * <p>The subnets that are affected.</p>
   * @public
   */
  AffectedSubnets?: string[] | undefined;

  /**
   * <p>The route table ID.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   * @public
   */
  IsRouteTableUsedInDifferentAZ?: boolean | undefined;

  /**
   * <p>The route that's in violation.</p>
   * @public
   */
  ViolatingRoute?: Route | undefined;

  /**
   * <p>The subnet route table for the current firewall.</p>
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * <p>The firewall endpoint that's expected.</p>
   * @public
   */
  ExpectedFirewallEndpoint?: string | undefined;

  /**
   * <p>The actual firewall endpoint.</p>
   * @public
   */
  ActualFirewallEndpoint?: string | undefined;

  /**
   * <p>The expected subnet ID for the firewall.</p>
   * @public
   */
  ExpectedFirewallSubnetId?: string | undefined;

  /**
   * <p>The actual subnet ID for the firewall.</p>
   * @public
   */
  ActualFirewallSubnetId?: string | undefined;

  /**
   * <p>The firewall subnet routes that are expected.</p>
   * @public
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[] | undefined;

  /**
   * <p>The actual firewall subnet routes that are expected.</p>
   * @public
   */
  ActualFirewallSubnetRoutes?: Route[] | undefined;

  /**
   * <p>The internet gateway ID.</p>
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * <p>The route table for the current internet gateway.</p>
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * <p>The expected routes for the internet gateway.</p>
   * @public
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[] | undefined;

  /**
   * <p>The actual internet gateway routes.</p>
   * @public
   */
  ActualInternetGatewayRoutes?: Route[] | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Violation detail for an expected route missing in Network Firewall.</p>
 * @public
 */
export interface NetworkFirewallMissingExpectedRoutesViolation {
  /**
   * <p>The target of the violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The expected routes.</p>
   * @public
   */
  ExpectedRoutes?: ExpectedRoute[] | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Violation detail for Network Firewall for a subnet that's not associated to the expected
 *        Firewall Manager managed route table.</p>
 * @public
 */
export interface NetworkFirewallMissingExpectedRTViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   * @public
   */
  CurrentRouteTable?: string | undefined;

  /**
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   * @public
   */
  ExpectedRouteTable?: string | undefined;
}

/**
 * <p>Violation detail for Network Firewall for a subnet that doesn't have a
 *        Firewall Manager managed firewall in its VPC. </p>
 * @public
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The reason the resource has this violation, if one is available. </p>
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * <p>Violation detail for Network Firewall for an Availability Zone that's
 *        missing the expected Firewall Manager managed subnet.</p>
 * @public
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The reason the resource has this violation, if one is available. </p>
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleOrder = {
  DEFAULT_ACTION_ORDER: "DEFAULT_ACTION_ORDER",
  STRICT_ORDER: "STRICT_ORDER",
} as const;

/**
 * @public
 */
export type RuleOrder = (typeof RuleOrder)[keyof typeof RuleOrder];

/**
 * @public
 * @enum
 */
export const StreamExceptionPolicy = {
  CONTINUE: "CONTINUE",
  DROP: "DROP",
  FMS_IGNORE: "FMS_IGNORE",
  REJECT: "REJECT",
} as const;

/**
 * @public
 */
export type StreamExceptionPolicy = (typeof StreamExceptionPolicy)[keyof typeof StreamExceptionPolicy];

/**
 * <p>Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.</p>
 * @public
 */
export interface StatefulEngineOptions {
  /**
   * <p>Indicates how to manage the order of stateful rule evaluation for the policy.
   * Stateful rules are provided to the rule engine
   * as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more
   * information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.</p>
   *          <p>Default: <code>DEFAULT_ACTION_ORDER</code>
   *          </p>
   * @public
   */
  RuleOrder?: RuleOrder | undefined;

  /**
   * <p>Indicates how Network Firewall should handle traffic when a network connection breaks midstream.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DROP</code> - Fail closed and drop all subsequent traffic going to the firewall.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Continue to apply rules to subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on context. For example, with a stateful rule that drops HTTP traffic, Network Firewall won't match subsequent traffic because the it won't have the context from session initialization, which defines the application layer protocol as HTTP. However, a TCP-layer rule using a <code>flow:stateless</code> rule would still match, and so would the <code>aws:drop_strict</code> default action. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> - Fail closed and drop all subsequent traffic going to the firewall. With this option, Network Firewall also sends a TCP reject packet back to the client so the client can immediately establish a new session. With the new session, Network Firewall will have context and will apply rules appropriately.</p>
   *                <p>For applications that are reliant on long-lived TCP connections that trigger Gateway Load Balancer idle timeouts, this is the recommended setting. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FMS_IGNORE</code> - Firewall Manager doesn't monitor or modify the Network Firewall stream exception policy settings. </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stream-exception-policy.html">Stream exception policy in your firewall policy</a>
   *           in the <i>Network Firewall Developer Guide</i>.</p>
   *          <p>Default: <code>FMS_IGNORE</code>
   *          </p>
   * @public
   */
  StreamExceptionPolicy?: StreamExceptionPolicy | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkFirewallOverrideAction = {
  DROP_TO_ALERT: "DROP_TO_ALERT",
} as const;

/**
 * @public
 */
export type NetworkFirewallOverrideAction =
  (typeof NetworkFirewallOverrideAction)[keyof typeof NetworkFirewallOverrideAction];

/**
 * <p>The setting that allows the policy owner to change the behavior of the rule group within a policy.</p>
 * @public
 */
export interface NetworkFirewallStatefulRuleGroupOverride {
  /**
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.</p>
   * @public
   */
  Action?: NetworkFirewallOverrideAction | undefined;
}

/**
 * <p>Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 * @public
 */
export interface StatefulRuleGroup {
  /**
   * <p>The name of the rule group.</p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The resource ID of the rule group.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>An integer setting that indicates the order in which to run the stateful rule groups in a single
   * Network Firewall firewall policy. This setting only applies to firewall policies that specify the <code>STRICT_ORDER</code>
   * rule order in the stateful engine options settings.</p>
   *          <p>
   *   Network Firewall evalutes each stateful rule group against a packet starting with the group that has
   * the lowest priority setting. You must ensure that the priority settings are unique within each policy. For information about
   * </p>
   *          <p>
   *   You can change the priority settings of your rule groups at any time. To make it easier to insert rule
   * groups later, number them so there's a wide range in between, for example use 100, 200, and so on.
   * </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The action that allows the policy owner to override the behavior of the rule group within a policy.</p>
   * @public
   */
  Override?: NetworkFirewallStatefulRuleGroupOverride | undefined;
}

/**
 * <p>Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 * @public
 */
export interface StatelessRuleGroup {
  /**
   * <p>The name of the rule group.</p>
   * @public
   */
  RuleGroupName?: string | undefined;

  /**
   * <p>The resource ID of the rule group.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The priority of the rule group. Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting. </p>
   * @public
   */
  Priority?: number | undefined;
}

/**
 * <p>The definition of the Network Firewall firewall policy.</p>
 * @public
 */
export interface NetworkFirewallPolicyDescription {
  /**
   * <p>The stateless rule groups that are used in the Network Firewall firewall policy. </p>
   * @public
   */
  StatelessRuleGroups?: StatelessRuleGroup[] | undefined;

  /**
   * <p>The actions to take on packets that don't match any of the stateless rule groups. </p>
   * @public
   */
  StatelessDefaultActions?: string[] | undefined;

  /**
   * <p>The actions to take on packet fragments that don't match any of the stateless rule groups. </p>
   * @public
   */
  StatelessFragmentDefaultActions?: string[] | undefined;

  /**
   * <p>Names of custom actions that are available for use in the stateless default actions settings.</p>
   * @public
   */
  StatelessCustomActions?: string[] | undefined;

  /**
   * <p>The stateful rule groups that are used in the Network Firewall firewall policy. </p>
   * @public
   */
  StatefulRuleGroups?: StatefulRuleGroup[] | undefined;

  /**
   * <p>The default actions to take on a packet that doesn't match any stateful rules. The stateful default
   * action is optional, and is only valid when using the strict rule order.</p>
   *          <p>
   *   Valid values of the stateful default action:
   * </p>
   *          <ul>
   *             <li>
   *                <p>aws:drop_strict</p>
   *             </li>
   *             <li>
   *                <p>aws:drop_established</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_strict</p>
   *             </li>
   *             <li>
   *                <p>aws:alert_established</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatefulDefaultActions?: string[] | undefined;

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The stateful rule groups
   * that you use in your policy must have stateful rule options settings that are compatible with these
   * settings.</p>
   * @public
   */
  StatefulEngineOptions?: StatefulEngineOptions | undefined;
}

/**
 * <p>Violation detail for Network Firewall for a firewall policy that has a different
 *        <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. </p>
 * @public
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The policy that's currently in use in the individual account. </p>
   * @public
   */
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription | undefined;

  /**
   * <p>The policy that should be in use in the individual account in order to be compliant. </p>
   * @public
   */
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription | undefined;
}

/**
 * <p>Violation detail for an unexpected route that's present in a route table.</p>
 * @public
 */
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * <p>The subnet ID for the firewall.</p>
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * <p>The routes that are in violation.</p>
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The endpoint of the firewall.</p>
   * @public
   */
  FirewallEndpoint?: string | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Violation detail for an unexpected gateway route that’s present in a route table.</p>
 * @public
 */
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * <p>Information about the gateway ID.</p>
   * @public
   */
  GatewayId?: string | undefined;

  /**
   * <p>The routes that are in violation.</p>
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * <p>Information about the  route table.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>Information about the VPC ID.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Information about the <code>CreateNetworkAcl</code> action in Amazon EC2. This is a remediation option in <code>RemediationAction</code>.</p>
 * @public
 */
export interface CreateNetworkAclAction {
  /**
   * <p>Brief description of this remediation action. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The VPC that's associated with the remediation action.</p>
   * @public
   */
  Vpc?: ActionTarget | undefined;

  /**
   * <p>Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.</p>
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * <p>Information about the <code>CreateNetworkAclEntries</code> action in Amazon EC2. This is a remediation option in <code>RemediationAction</code>.</p>
 * @public
 */
export interface CreateNetworkAclEntriesAction {
  /**
   * <p>Brief description of this remediation action. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The network ACL that's associated with the remediation action.</p>
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * <p>Lists the entries that the remediation action would create.</p>
   * @public
   */
  NetworkAclEntriesToBeCreated?: EntryDescription[] | undefined;

  /**
   * <p>Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.</p>
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * <p>Information about the <code>DeleteNetworkAclEntries</code> action in Amazon EC2. This is a remediation option in <code>RemediationAction</code>. </p>
 * @public
 */
export interface DeleteNetworkAclEntriesAction {
  /**
   * <p>Brief description of this remediation action. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The network ACL that's associated with the remediation action.</p>
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * <p>Lists the entries that the remediation action would delete.</p>
   * @public
   */
  NetworkAclEntriesToBeDeleted?: EntryDescription[] | undefined;

  /**
   * <p>Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.</p>
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * <p>The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.</p>
 * @public
 */
export interface EC2AssociateRouteTableAction {
  /**
   * <p>A description of the EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;

  /**
   * <p>The ID of the subnet for the EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  SubnetId?: ActionTarget | undefined;

  /**
   * <p>The ID of the gateway to be used with the EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  GatewayId?: ActionTarget | undefined;
}

/**
 * <p>An action that copies the EC2 route table for use in remediation.</p>
 * @public
 */
export interface EC2CopyRouteTableAction {
  /**
   * <p>A description of the copied EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The VPC ID of the copied EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  VpcId: ActionTarget | undefined;

  /**
   * <p>The ID of the copied EC2 route table that is associated with the remediation action.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the CreateRoute action in Amazon EC2.</p>
 * @public
 */
export interface EC2CreateRouteAction {
  /**
   * <p>A description of CreateRoute action in Amazon EC2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the IPv4 CIDR address block used for the destination match.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of a prefix list used for the destination match.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>Information about the IPv6 CIDR block destination.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   * @public
   */
  VpcEndpointId?: ActionTarget | undefined;

  /**
   * <p>Information about the ID of an internet gateway or virtual private gateway attached to your VPC.</p>
   * @public
   */
  GatewayId?: ActionTarget | undefined;

  /**
   * <p>Information about the ID of the route table for the route.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the CreateRouteTable action in Amazon EC2.</p>
 * @public
 */
export interface EC2CreateRouteTableAction {
  /**
   * <p>A description of the CreateRouteTable action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the ID of a VPC.</p>
   * @public
   */
  VpcId: ActionTarget | undefined;
}

/**
 * <p>Information about the DeleteRoute action in Amazon EC2.</p>
 * @public
 */
export interface EC2DeleteRouteAction {
  /**
   * <p>A description of the DeleteRoute action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>Information about the IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of the route table.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the ReplaceRoute action in Amazon EC2.</p>
 * @public
 */
export interface EC2ReplaceRouteAction {
  /**
   * <p>A description of the ReplaceRoute action in Amazon EC2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationCidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   * @public
   */
  DestinationPrefixListId?: string | undefined;

  /**
   * <p>Information about the IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   * @public
   */
  DestinationIpv6CidrBlock?: string | undefined;

  /**
   * <p>Information about the ID of an internet gateway or virtual private gateway.</p>
   * @public
   */
  GatewayId?: ActionTarget | undefined;

  /**
   * <p>Information about the ID of the route table.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the ReplaceRouteTableAssociation action in Amazon EC2.</p>
 * @public
 */
export interface EC2ReplaceRouteTableAssociationAction {
  /**
   * <p>A description of the ReplaceRouteTableAssociation action in Amazon EC2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the association ID.</p>
   * @public
   */
  AssociationId: ActionTarget | undefined;

  /**
   * <p>Information about the ID of the new route table to associate with the subnet.</p>
   * @public
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Contains information about the actions that you can take to remediate scope violations
 *          caused by your policy's <code>FirewallCreationConfig</code>.
 *             <code>FirewallCreationConfig</code> is an optional configuration that you can use to
 *          choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.</p>
 * @public
 */
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  /**
   * <p>Describes the remedial action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>FirewallCreationConfig</code> that you can copy into your current policy's
   *             <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html">SecurityServiceData</a> in order to remedy scope violations.</p>
   * @public
   */
  FirewallCreationConfig?: string | undefined;
}

/**
 * <p>Information about the <code>ReplaceNetworkAclAssociation</code> action in Amazon EC2. This is a remediation option in <code>RemediationAction</code>.</p>
 * @public
 */
export interface ReplaceNetworkAclAssociationAction {
  /**
   * <p>Brief description of this remediation action. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Describes a remediation action target.</p>
   * @public
   */
  AssociationId?: ActionTarget | undefined;

  /**
   * <p>The network ACL that's associated with the remediation action.</p>
   * @public
   */
  NetworkAclId?: ActionTarget | undefined;

  /**
   * <p>Indicates whether it is possible for Firewall Manager to perform this remediation action. A false value indicates that auto remediation is disabled or Firewall Manager is unable to perform the action due to a conflict of some kind.</p>
   * @public
   */
  FMSCanRemediate?: boolean | undefined;
}

/**
 * <p>Information about an individual action you can take to remediate a violation.</p>
 * @public
 */
export interface RemediationAction {
  /**
   * <p>A description of a remediation action.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the CreateRoute action in the Amazon EC2 API.</p>
   * @public
   */
  EC2CreateRouteAction?: EC2CreateRouteAction | undefined;

  /**
   * <p>Information about the ReplaceRoute action in the Amazon EC2 API.</p>
   * @public
   */
  EC2ReplaceRouteAction?: EC2ReplaceRouteAction | undefined;

  /**
   * <p>Information about the DeleteRoute action in the Amazon EC2 API.</p>
   * @public
   */
  EC2DeleteRouteAction?: EC2DeleteRouteAction | undefined;

  /**
   * <p>Information about the CopyRouteTable action in the Amazon EC2 API.</p>
   * @public
   */
  EC2CopyRouteTableAction?: EC2CopyRouteTableAction | undefined;

  /**
   * <p>Information about the ReplaceRouteTableAssociation action in the Amazon EC2 API.</p>
   * @public
   */
  EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction | undefined;

  /**
   * <p>Information about the AssociateRouteTable action in the Amazon EC2 API.</p>
   * @public
   */
  EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction | undefined;

  /**
   * <p>Information about the CreateRouteTable action in the Amazon EC2 API.</p>
   * @public
   */
  EC2CreateRouteTableAction?: EC2CreateRouteTableAction | undefined;

  /**
   * <p>The remedial action to take when updating a firewall configuration.</p>
   * @public
   */
  FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction | undefined;

  /**
   * <p>Information about the <code>CreateNetworkAcl</code> action in Amazon EC2.</p>
   * @public
   */
  CreateNetworkAclAction?: CreateNetworkAclAction | undefined;

  /**
   * <p>Information about the <code>ReplaceNetworkAclAssociation</code> action in Amazon EC2. </p>
   * @public
   */
  ReplaceNetworkAclAssociationAction?: ReplaceNetworkAclAssociationAction | undefined;

  /**
   * <p>Information about the <code>CreateNetworkAclEntries</code> action in Amazon EC2.</p>
   * @public
   */
  CreateNetworkAclEntriesAction?: CreateNetworkAclEntriesAction | undefined;

  /**
   * <p>Information about the <code>DeleteNetworkAclEntries</code> action in Amazon EC2.</p>
   * @public
   */
  DeleteNetworkAclEntriesAction?: DeleteNetworkAclEntriesAction | undefined;
}

/**
 * <p>An ordered list of actions you can take to remediate a violation.</p>
 * @public
 */
export interface RemediationActionWithOrder {
  /**
   * <p>Information about an action you can take to remediate a violation.</p>
   * @public
   */
  RemediationAction?: RemediationAction | undefined;

  /**
   * <p>The order of the remediation actions in the list.</p>
   * @public
   */
  Order?: number | undefined;
}

/**
 * <p>A list of remediation actions.</p>
 * @public
 */
export interface PossibleRemediationAction {
  /**
   * <p>A description of the list of remediation actions.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ordered list of remediation actions.</p>
   * @public
   */
  OrderedRemediationActions: RemediationActionWithOrder[] | undefined;

  /**
   * <p>Information about whether an action is taken by default.</p>
   * @public
   */
  IsDefaultAction?: boolean | undefined;
}

/**
 * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
 * @public
 */
export interface PossibleRemediationActions {
  /**
   * <p>A description of the possible remediation actions list.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the actions.</p>
   * @public
   */
  Actions?: PossibleRemediationAction[] | undefined;
}

/**
 * <p>Contains details about the route endpoint that violates the policy scope.</p>
 * @public
 */
export interface RouteHasOutOfScopeEndpointViolation {
  /**
   * <p>The ID of the subnet associated with the route that violates the policy scope.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The VPC ID of the route that violates the policy scope.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the route table.</p>
   * @public
   */
  RouteTableId?: string | undefined;

  /**
   * <p>The list of routes that violate the route table.</p>
   * @public
   */
  ViolatingRoutes?: Route[] | undefined;

  /**
   * <p>The subnet's Availability Zone.</p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the subnet's Availability Zone.</p>
   * @public
   */
  SubnetAvailabilityZoneId?: string | undefined;

  /**
   * <p>The route table associated with the current firewall subnet.</p>
   * @public
   */
  CurrentFirewallSubnetRouteTable?: string | undefined;

  /**
   * <p>The ID of the firewall subnet.</p>
   * @public
   */
  FirewallSubnetId?: string | undefined;

  /**
   * <p>The list of firewall subnet routes.</p>
   * @public
   */
  FirewallSubnetRoutes?: Route[] | undefined;

  /**
   * <p>The ID of the Internet Gateway.</p>
   * @public
   */
  InternetGatewayId?: string | undefined;

  /**
   * <p>The current route table associated with the Internet Gateway.</p>
   * @public
   */
  CurrentInternetGatewayRouteTable?: string | undefined;

  /**
   * <p>The routes in the route table associated with the Internet Gateway.</p>
   * @public
   */
  InternetGatewayRoutes?: Route[] | undefined;
}

/**
 * <p>The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.</p>
 * @public
 */
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  /**
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a fireawll subnet that's causing the violation.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of the firewall subnet that's causing the violation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   * @public
   */
  CurrentRouteTable?: string | undefined;

  /**
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   * @public
   */
  ExpectedRouteTable?: string | undefined;
}

/**
 * <p>The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.</p>
 * @public
 */
export interface ThirdPartyFirewallMissingFirewallViolation {
  /**
   * <p>The ID of the third-party firewall that's causing the violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a third-party firewall.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of the third-party firewall that's causing the violation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The reason the resource is causing this violation, if a reason is available.</p>
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * <p>The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.</p>
 * @public
 */
export interface ThirdPartyFirewallMissingSubnetViolation {
  /**
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   * @public
   */
  ViolationTarget?: string | undefined;

  /**
   * <p>The resource ID of the VPC associated with a subnet that's causing the violation.</p>
   * @public
   */
  VPC?: string | undefined;

  /**
   * <p>The Availability Zone of a subnet that's causing the violation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The reason the resource is causing the violation, if a reason is available.</p>
   * @public
   */
  TargetViolationReason?: string | undefined;
}

/**
 * <p>The violation details for a web ACL whose configuration is incompatible with the Firewall Manager policy. </p>
 * @public
 */
export interface WebACLHasIncompatibleConfigurationViolation {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL. </p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>Information about the problems that Firewall Manager encountered with the web ACL configuration. </p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The violation details for a web ACL that's associated with at least one resource that's out of scope of the Firewall Manager policy. </p>
 * @public
 */
export interface WebACLHasOutOfScopeResourcesViolation {
  /**
   * <p>The Amazon Resource Name (ARN) of the web ACL. </p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>An array of Amazon Resource Name (ARN) for the resources that are out of scope of the policy and are associated with the web ACL. </p>
   * @public
   */
  OutOfScopeResourceList?: string[] | undefined;
}

/**
 * <p>Violation detail based on resource type.</p>
 * @public
 */
export interface ResourceViolation {
  /**
   * <p>Violation detail for security groups.</p>
   * @public
   */
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation | undefined;

  /**
   * <p>Violation detail for a network interface.</p>
   * @public
   */
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation | undefined;

  /**
   * <p>Violation detail for an EC2 instance.</p>
   * @public
   */
  AwsEc2InstanceViolation?: AwsEc2InstanceViolation | undefined;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet has no Firewall Manager
   *         managed firewall in its VPC. </p>
   * @public
   */
  NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation | undefined;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that an Availability Zone is
   *        missing the expected Firewall Manager managed subnet.</p>
   * @public
   */
  NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation | undefined;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet
   *       is not associated with the expected Firewall Manager managed route table. </p>
   * @public
   */
  NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation | undefined;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a firewall policy
   *        in an individual account has been modified in a way that makes it noncompliant.
   *        For example, the individual account owner might have deleted a rule group,
   *        changed the priority of a stateless rule group, or changed a policy default action.</p>
   * @public
   */
  NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation | undefined;

  /**
   * <p>Violation detail for the subnet for which internet traffic hasn't been inspected.</p>
   * @public
   */
  NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation | undefined;

  /**
   * <p>The route configuration is invalid.</p>
   * @public
   */
  NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation | undefined;

  /**
   * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
   * @public
   */
  NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation | undefined;

  /**
   * <p>There's an unexpected firewall route.</p>
   * @public
   */
  NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation | undefined;

  /**
   * <p>There's an unexpected gateway route.</p>
   * @public
   */
  NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation | undefined;

  /**
   * <p>Expected routes are missing from Network Firewall.</p>
   * @public
   */
  NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation | undefined;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
   * @public
   */
  DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation | undefined;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
   * @public
   */
  DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation | undefined;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that the VPC reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed. </p>
   * @public
   */
  DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation | undefined;

  /**
   * <p>Contains details about the firewall subnet that violates the policy scope.</p>
   * @public
   */
  FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation | undefined;

  /**
   * <p>Contains details about the route endpoint that violates the policy scope.</p>
   * @public
   */
  RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation | undefined;

  /**
   * <p>The violation details for a third-party firewall that's been deleted.</p>
   * @public
   */
  ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation | undefined;

  /**
   * <p>The violation details for a third-party firewall's subnet that's been deleted.</p>
   * @public
   */
  ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation | undefined;

  /**
   * <p>The violation details for a third-party firewall that has the Firewall Manager managed route table that was associated with the third-party firewall has been deleted.</p>
   * @public
   */
  ThirdPartyFirewallMissingExpectedRouteTableViolation?:
    | ThirdPartyFirewallMissingExpectedRouteTableViolation
    | undefined;

  /**
   * <p>The violation details for a third-party firewall's VPC endpoint subnet that was deleted.</p>
   * @public
   */
  FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation | undefined;

  /**
   * <p>Violation detail for the entries in a network ACL resource.</p>
   * @public
   */
  InvalidNetworkAclEntriesViolation?: InvalidNetworkAclEntriesViolation | undefined;

  /**
   * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
   * @public
   */
  PossibleRemediationActions?: PossibleRemediationActions | undefined;

  /**
   * <p>The violation details for a web ACL whose configuration is incompatible with the Firewall Manager policy. </p>
   * @public
   */
  WebACLHasIncompatibleConfigurationViolation?: WebACLHasIncompatibleConfigurationViolation | undefined;

  /**
   * <p>The violation details for a web ACL that's associated with at least one resource that's out of scope of the Firewall Manager policy. </p>
   * @public
   */
  WebACLHasOutOfScopeResourcesViolation?: WebACLHasOutOfScopeResourcesViolation | undefined;
}

/**
 * <p>Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
 * @public
 */
export interface ViolationDetail {
  /**
   * <p>The ID of the Firewall Manager policy that the violation details were requested for.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that the violation details were requested for.</p>
   * @public
   */
  MemberAccount: string | undefined;

  /**
   * <p>The resource ID that the violation details were requested for.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type that the violation details were requested for.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>List of violations for the requested resource.</p>
   * @public
   */
  ResourceViolations: ResourceViolation[] | undefined;

  /**
   * <p>The <code>ResourceTag</code> objects associated with the resource.</p>
   * @public
   */
  ResourceTags?: Tag[] | undefined;

  /**
   * <p>Brief description for the requested resource.</p>
   * @public
   */
  ResourceDescription?: string | undefined;
}

/**
 * @public
 */
export interface GetViolationDetailsResponse {
  /**
   * <p>Violation detail for a resource.</p>
   * @public
   */
  ViolationDetail?: ViolationDetail | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *       objects are available, in the response, Firewall Manager provides a
   *      <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationResponse {
  /**
   * <p>A list of Firewall Manager administrator accounts within the organization that were onboarded as administrators by <a>AssociateAdminAccount</a> or <a>PutAdminAccount</a>.</p>
   * @public
   */
  AdminAccounts?: AdminAccountSummary[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *       objects are available, in the response, Firewall Manager provides a
   *      <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountResponse {
  /**
   * <p>The list of accounts who manage member accounts within their <a>AdminScope</a>.</p>
   * @public
   */
  AdminAccounts?: string[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   * @public
   */
  DefaultLists?: boolean | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * @public
 */
export interface ListAppsListsResponse {
  /**
   * <p>An array of <code>AppsListDataSummary</code> objects.</p>
   * @public
   */
  AppsLists?: AppsListDataSummary[] | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComplianceStatusRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicyComplianceStatus</code> objects.
   *       For the second and subsequent <code>ListComplianceStatus</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicyComplianceStatus</code> objects.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want
   *       Firewall Manager to return for this request. If you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyComplianceStatusType = {
  Compliant: "COMPLIANT",
  NonCompliant: "NON_COMPLIANT",
} as const;

/**
 * @public
 */
export type PolicyComplianceStatusType = (typeof PolicyComplianceStatusType)[keyof typeof PolicyComplianceStatusType];

/**
 * <p>Describes the compliance status for the account. An account is considered noncompliant if
 *       it includes resources that are not protected by the specified policy or that don't comply with
 *       the policy.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>Describes an Amazon Web Services account's compliance with the Firewall Manager policy.</p>
   * @public
   */
  ComplianceStatus?: PolicyComplianceStatusType | undefined;

  /**
   * <p>The number of resources that are noncompliant with the specified policy. For WAF and
   *       Shield Advanced policies, a resource is considered noncompliant if it is not associated with
   *       the policy. For security group policies, a resource is considered noncompliant if it doesn't
   *       comply with the rules of the policy and remediation is disabled or not possible.</p>
   * @public
   */
  ViolatorCount?: number | undefined;

  /**
   * <p>Indicates that over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   * @public
   */
  EvaluationLimitExceeded?: boolean | undefined;
}

/**
 * <p>Indicates whether the account is compliant with the specified policy. An account is
 *       considered noncompliant if it includes resources that are not protected by the policy, for
 *       WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group
 *       policies.</p>
 * @public
 */
export interface PolicyComplianceStatus {
  /**
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   * @public
   */
  PolicyOwner?: string | undefined;

  /**
   * <p>The ID of the Firewall Manager policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The name of the Firewall Manager policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The member account ID.</p>
   * @public
   */
  MemberAccount?: string | undefined;

  /**
   * <p>An array of <code>EvaluationResult</code> objects.</p>
   * @public
   */
  EvaluationResults?: EvaluationResult[] | undefined;

  /**
   * <p>Timestamp of the last update to the <code>EvaluationResult</code> objects.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   * @public
   */
  IssueInfoMap?: Partial<Record<DependentServiceName, string>> | undefined;
}

/**
 * @public
 */
export interface ListComplianceStatusResponse {
  /**
   * <p>An array of <code>PolicyComplianceStatus</code> objects.</p>
   * @public
   */
  PolicyComplianceStatusList?: PolicyComplianceStatus[] | undefined;

  /**
   * <p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you
   *       specified for <code>MaxResults</code> in the request, the response includes a
   *         <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects,
   *       submit another <code>ListComplianceStatus</code> request, and specify the
   *         <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The Amazon Web Services account IDs to discover resources in. Only one account is supported per request. The account must be a member of your organization.</p>
   * @public
   */
  MemberAccountIds: string[] | undefined;

  /**
   * <p>The type of resources to discover.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *       objects are available, in the response, Firewall Manager provides a
   *      <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A resource in the organization that's available to be associated with a Firewall Manager resource set.</p>
 * @public
 */
export interface DiscoveredResource {
  /**
   * <p>The universal resource identifier (URI) of the discovered resource.</p>
   * @public
   */
  URI?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the discovered resource.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The type of the discovered resource.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The name of the discovered resource.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * <p>Details of the resources that were discovered.</p>
   * @public
   */
  Items?: DiscoveredResource[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsRequest {
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the
   *       number that you specify for <code>MaxResults</code>, Firewall Manager returns a
   *         <code>NextToken</code> value in the response that allows you to list another group of IDs.
   *       For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the
   *       value of <code>NextToken</code> from the previous response to get information about another
   *       batch of member account IDs.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the number of member account IDs that you want Firewall Manager to return
   *       for this request. If you have more IDs than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of member account IDs.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsResponse {
  /**
   * <p>An array of account IDs.</p>
   * @public
   */
  MemberAccounts?: string[] | undefined;

  /**
   * <p>If you have more member account IDs than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify
   *       the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicySummary</code> objects than the number that you specify for
   *         <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicySummary</code> objects. For the
   *       second and subsequent <code>ListPolicies</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicySummary</code> objects.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the number of <code>PolicySummary</code> objects that you want Firewall Manager to return for this request. If you have more <code>PolicySummary</code> objects than
   *       the number that you specify for <code>MaxResults</code>, the response includes a
   *         <code>NextToken</code> value that you can use to get another batch of
   *         <code>PolicySummary</code> objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Details of the Firewall Manager policy. </p>
 * @public
 */
export interface PolicySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The ID of the specified policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The name of the specified policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The type of resource protected by or in scope of the policy. This is in the format shown
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy.</p>
   * @public
   */
  SecurityServiceType?: SecurityServiceType | undefined;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   * @public
   */
  RemediationEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *    that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *    from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   * @public
   */
  DeleteUnusedFMManagedResources?: boolean | undefined;

  /**
   * <p>Indicates whether the policy is in or out of an admin's policy or Region scope.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The administrator can manage and delete the policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the policy, but they can't edit or delete the policy. Existing policy protections stay in place. Any new resources that come into scope of the policy won't be protected.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyStatus?: CustomerPolicyStatus | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>An array of <code>PolicySummary</code> objects.</p>
   * @public
   */
  PolicyList?: PolicySummary[] | undefined;

  /**
   * <p>If you have more <code>PolicySummary</code> objects than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more <code>PolicySummary</code> objects, submit another
   *         <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the
   *       response in the <code>NextToken</code> value in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProtocolsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   * @public
   */
  DefaultLists?: boolean | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>Details of the Firewall Manager protocols list.</p>
 * @public
 */
export interface ProtocolsListDataSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   * @public
   */
  ListArn?: string | undefined;

  /**
   * <p>The ID of the specified protocols list.</p>
   * @public
   */
  ListId?: string | undefined;

  /**
   * <p>The name of the specified protocols list.</p>
   * @public
   */
  ListName?: string | undefined;

  /**
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   * @public
   */
  ProtocolsList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListProtocolsListsResponse {
  /**
   * <p>An array of <code>ProtocolsListDataSummary</code> objects.</p>
   * @public
   */
  ProtocolsLists?: ProtocolsListDataSummary[] | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetResourcesRequest {
  /**
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *       objects are available, in the response, Firewall Manager provides a
   *      <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details of a resource that is associated to an Firewall Manager resource set.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The resource's universal resource indicator (URI).</p>
   * @public
   */
  URI: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the associated resource belongs to.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetResourcesResponse {
  /**
   * <p>An array of the associated resources' uniform resource identifiers (URI).</p>
   * @public
   */
  Items: Resource[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *       objects are available, in the response, Firewall Manager provides a
   *      <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summarizes the resource sets used in a policy.</p>
 * @public
 */
export interface ResourceSetSummary {
  /**
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the resource set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The last time that the resource set was changed.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>Indicates whether the resource set is in or out of an admin's Region scope.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The administrator can manage and delete the resource set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_ADMIN_SCOPE</code> - The administrator can view the resource set, but they can't edit or delete the resource set. Existing protections stay in place. Any new resource that come into scope of the resource set won't be protected.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceSetStatus?: ResourceSetStatus | undefined;
}

/**
 * @public
 */
export interface ListResourceSetsResponse {
  /**
   * <p>An array of <code>ResourceSetSummary</code> objects.</p>
   * @public
   */
  ResourceSets?: ResourceSetSummary[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *      for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *      value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   * @public
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;

  /**
   * <p>If the previous response included a <code>NextToken</code> element, the specified third-party firewall vendor is associated with more
   * third-party firewall policies. To get more third-party firewall policies, submit another <code>ListThirdPartyFirewallFirewallPoliciesRequest</code> request.</p>
   *          <p>
   *   For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response.
   *   If the previous response didn't include a <code>NextToken</code> element, there are no more third-party firewall policies to
   *   get.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of third-party firewall policies that you want Firewall Manager to return. If
   * the specified third-party firewall vendor is associated with more than <code>MaxResults</code> firewall policies, the response includes a
   * <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first third-party firewall policies
   * that Firewall Manager will return if you submit another request.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>Configures the third-party firewall's firewall policy.</p>
 * @public
 */
export interface ThirdPartyFirewallFirewallPolicy {
  /**
   * <p>The ID of the specified firewall policy.</p>
   * @public
   */
  FirewallPolicyId?: string | undefined;

  /**
   * <p>The name of the specified firewall policy.</p>
   * @public
   */
  FirewallPolicyName?: string | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  /**
   * <p>A list that contains one <code>ThirdPartyFirewallFirewallPolicies</code> element for each third-party firewall policies that the specified
   * third-party firewall vendor is associated with. Each <code>ThirdPartyFirewallFirewallPolicies</code> element contains the firewall policy name and ID.</p>
   * @public
   */
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[] | undefined;

  /**
   * <p>The value that you will use for <code>NextToken</code> in the next <code>ListThirdPartyFirewallFirewallPolicies</code> request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID to add as an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. For more information about Organizations, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.</p>
   * @public
   */
  AdminAccount: string | undefined;

  /**
   * <p>Configures the resources that the specified Firewall Manager administrator can manage. As a best practice, set the administrative scope according to the principles of least privilege. Only grant the administrator the specific resources or permissions that they need to perform the duties of their role.</p>
   * @public
   */
  AdminScope?: AdminScope | undefined;
}

/**
 * @public
 */
export interface PutAppsListRequest {
  /**
   * <p>The details of the Firewall Manager applications list to be created.</p>
   * @public
   */
  AppsList: AppsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAppsListResponse {
  /**
   * <p>The details of the Firewall Manager applications list.</p>
   * @public
   */
  AppsList?: AppsListData | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   * @public
   */
  AppsListArn?: string | undefined;
}

/**
 * @public
 */
export interface PutNotificationChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from
   *       Firewall Manager.</p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record
   *       Firewall Manager activity. </p>
   * @public
   */
  SnsRoleName: string | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * <p>The details of the Firewall Manager policy to be created.</p>
   * @public
   */
  Policy: Policy | undefined;

  /**
   * <p>The tags to add to the Amazon Web Services resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * <p>The details of the Firewall Manager policy.</p>
   * @public
   */
  Policy?: Policy | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface PutProtocolsListRequest {
  /**
   * <p>The details of the Firewall Manager protocols list to be created.</p>
   * @public
   */
  ProtocolsList: ProtocolsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutProtocolsListResponse {
  /**
   * <p>The details of the Firewall Manager protocols list.</p>
   * @public
   */
  ProtocolsList?: ProtocolsListData | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the protocols list.</p>
   * @public
   */
  ProtocolsListArn?: string | undefined;
}

/**
 * @public
 */
export interface PutResourceSetRequest {
  /**
   * <p>Details about the resource set to be created or updated.></p>
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>Retrieves the tags associated with the specified resource set. Tags are key:value pairs that
   *          you can use to categorize and manage your resources, for purposes like billing. For
   *          example, you might set the tag key to "customer" and the value to the customer name or ID.
   *          You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourceSetResponse {
  /**
   * <p>Details about the resource set.</p>
   * @public
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   * @public
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
