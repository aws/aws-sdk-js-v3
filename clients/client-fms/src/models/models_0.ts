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
 * @public
 * <p>Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to.</p>
 */
export interface AccountScope {
  /**
   * @public
   * <p>The list of accounts within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>ExcludeSpecifiedAccounts</code>. If <code>ExcludeSpecifiedAccounts</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all members of the organization except for the accounts in this list. If <code>ExcludeSpecifiedAccounts</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the accounts in this list.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>A boolean value that indicates if the administrator can apply policies to all accounts within an organization. If true, the administrator can apply policies to all accounts within the organization. You can either enable management of all accounts through this operation, or you can specify a list of accounts to manage in <code>AccountScope$Accounts</code>. You cannot specify both.</p>
   */
  AllAccountsEnabled?: boolean;

  /**
   * @public
   * <p>A boolean value that excludes the accounts in <code>AccountScope$Accounts</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all members of the organization except for the accounts listed in <code>AccountScope$Accounts</code>. You can either specify a list of accounts to exclude by <code>AccountScope$Accounts</code>, or you can enable management of all accounts by <code>AccountScope$AllAccountsEnabled</code>. You cannot specify both.</p>
   */
  ExcludeSpecifiedAccounts?: boolean;
}

/**
 * @public
 * <p>Describes a remediation action target.</p>
 */
export interface ActionTarget {
  /**
   * @public
   * <p>The ID of the remediation target.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>A description of the remediation action target.</p>
   */
  Description?: string;
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
 * @public
 * <p>Contains high level information about the Firewall Manager administrator account.</p>
 */
export interface AdminAccountSummary {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Firewall Manager administrator's account.</p>
   */
  AdminAccount?: string;

  /**
   * @public
   * <p>A boolean value that indicates if the administrator is the default administrator. If true, then this is the default administrator account. The default administrator can manage third-party firewalls and has full administrative scope. There is only one default administrator account per organization. For information about Firewall Manager default administrator accounts, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
   */
  DefaultAdmin?: boolean;

  /**
   * @public
   * <p>The current status of the request to onboard a member account as an Firewall Manager administator.</p>
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
   */
  Status?: OrganizationStatus;
}

/**
 * @public
 * <p>Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs)
 * </a> in the <i>Organizations User Guide</i>.</p>
 */
export interface OrganizationalUnitScope {
  /**
   * @public
   * <p>The list of OUs within the organization that the specified Firewall Manager administrator either can or cannot apply policies to, based on the value of <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code>. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>true</code>, then the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs in this list. If <code>OrganizationalUnitScope$ExcludeSpecifiedOrganizationalUnits</code> is set to <code>false</code>, then the Firewall Manager administrator can only apply policies to the OUs in this list.</p>
   */
  OrganizationalUnits?: string[];

  /**
   * @public
   * <p>A boolean value that indicates if the administrator can apply policies to all OUs within an organization. If true, the administrator can manage all OUs within the organization. You can either enable management of all OUs through this operation, or you can specify OUs to manage in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You cannot specify both.</p>
   */
  AllOrganizationalUnitsEnabled?: boolean;

  /**
   * @public
   * <p>A boolean value that excludes the OUs in <code>OrganizationalUnitScope$OrganizationalUnits</code> from the administrator's scope. If true, the Firewall Manager administrator can apply policies to all OUs in the organization except for the OUs listed in <code>OrganizationalUnitScope$OrganizationalUnits</code>. You can either specify a list of OUs to exclude by <code>OrganizationalUnitScope$OrganizationalUnits</code>, or you can enable management of all OUs by <code>OrganizationalUnitScope$AllOrganizationalUnitsEnabled</code>. You cannot specify both.</p>
   */
  ExcludeSpecifiedOrganizationalUnits?: boolean;
}

/**
 * @public
 * @enum
 */
export const SecurityServiceType = {
  DNS_FIREWALL: "DNS_FIREWALL",
  IMPORT_NETWORK_FIREWALL: "IMPORT_NETWORK_FIREWALL",
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
 * @public
 * <p>Defines the policy types that the specified Firewall Manager administrator can manage.</p>
 */
export interface PolicyTypeScope {
  /**
   * @public
   * <p>The list of policy types that the specified Firewall Manager administrator can manage.</p>
   */
  PolicyTypes?: SecurityServiceType[];

  /**
   * @public
   * <p>Allows the specified Firewall Manager administrator to manage all Firewall Manager policy types, except for third-party policy types. Third-party policy types can only be managed by the Firewall Manager default administrator.</p>
   */
  AllPolicyTypesEnabled?: boolean;
}

/**
 * @public
 * <p>Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage.</p>
 */
export interface RegionScope {
  /**
   * @public
   * <p>The Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.</p>
   */
  Regions?: string[];

  /**
   * @public
   * <p>Allows the specified Firewall Manager administrator to manage all Amazon Web Services Regions.</p>
   */
  AllRegionsEnabled?: boolean;
}

/**
 * @public
 * <p>Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
 */
export interface AdminScope {
  /**
   * @public
   * <p>Defines the accounts that the specified Firewall Manager administrator can apply policies to.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>Defines the Organizations organizational units that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs)
   * </a> in the <i>Organizations User Guide</i>.</p>
   */
  OrganizationalUnitScope?: OrganizationalUnitScope;

  /**
   * @public
   * <p>Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can perform actions in.</p>
   */
  RegionScope?: RegionScope;

  /**
   * @public
   * <p>Defines the Firewall Manager policy types that the specified Firewall Manager administrator can create and manage.</p>
   */
  PolicyTypeScope?: PolicyTypeScope;
}

/**
 * @public
 * <p>An individual Firewall Manager application.</p>
 */
export interface App {
  /**
   * @public
   * <p>The application's name.</p>
   */
  AppName: string | undefined;

  /**
   * @public
   * <p>The IP protocol name or number. The name can be one of <code>tcp</code>, <code>udp</code>, or <code>icmp</code>. For information on possible numbers, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>.</p>
   */
  Protocol: string | undefined;

  /**
   * @public
   * <p>The application's port number, for example <code>80</code>.</p>
   */
  Port: number | undefined;
}

/**
 * @public
 * <p>An Firewall Manager applications list.</p>
 */
export interface AppsListData {
  /**
   * @public
   * <p>The ID of the Firewall Manager applications list.</p>
   */
  ListId?: string;

  /**
   * @public
   * <p>The name of the Firewall Manager applications list.</p>
   */
  ListName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * @public
   * <p>The time that the Firewall Manager applications list was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The time that the Firewall Manager applications list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * @public
   * <p>An array of applications in the Firewall Manager applications list.</p>
   */
  AppsList: App[] | undefined;

  /**
   * @public
   * <p>A map of previous version numbers to their corresponding <code>App</code> object arrays.</p>
   */
  PreviousAppsList?: Record<string, App[]>;
}

/**
 * @public
 * <p>Details of the Firewall Manager applications list.</p>
 */
export interface AppsListDataSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  ListArn?: string;

  /**
   * @public
   * <p>The ID of the applications list.</p>
   */
  ListId?: string;

  /**
   * @public
   * <p>The name of the applications list.</p>
   */
  ListName?: string;

  /**
   * @public
   * <p>An array of <code>App</code> objects in the Firewall Manager applications list.</p>
   */
  AppsList?: App[];
}

/**
 * @public
 */
export interface AssociateAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID to associate with Firewall Manager as the Firewall Manager
   *       default administrator account. This account must be
   *       a member account of the organization in Organizations whose resources you want to protect.
   *         For more information about Organizations, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.  </p>
   */
  AdminAccount: string | undefined;
}

/**
 * @public
 * <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The parameters of the request were invalid.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The name of the third-party firewall vendor.</p>
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
   * @public
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
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
}

/**
 * @public
 * <p>Violation detail for network interfaces associated with an EC2 instance.</p>
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * @public
   * <p>The resource ID of the network interface.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>List of security groups that violate the rules specified in the primary security group of the Firewall Manager policy.</p>
   */
  ViolatingSecurityGroups?: string[];
}

/**
 * @public
 * <p>Violation detail for an EC2 instance resource.</p>
 */
export interface AwsEc2InstanceViolation {
  /**
   * @public
   * <p>The resource ID of the EC2 instance.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>Violation detail for network interfaces associated with the EC2 instance.</p>
   */
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
}

/**
 * @public
 */
export interface BatchAssociateResourceRequest {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The uniform resource identifiers (URIs) of resources that should be associated to the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
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
 * @public
 * <p>Details of a resource that failed when trying to update it's association to a resource set.</p>
 */
export interface FailedItem {
  /**
   * @public
   * <p>The univeral resource indicator (URI) of the resource that failed.</p>
   */
  URI?: string;

  /**
   * @public
   * <p>The reason the resource's association could not be updated.</p>
   */
  Reason?: FailedItemReason;
}

/**
 * @public
 */
export interface BatchAssociateResourceResponse {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The resources that failed to associate to the resource set.</p>
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceRequest {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The uniform resource identifiers (URI) of resources that should be disassociated from the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
   */
  Items: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateResourceResponse {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * @public
   * <p>The resources that failed to disassociate from the resource set.</p>
   */
  FailedItems: FailedItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteAppsListRequest {
  /**
   * @public
   * <p>The ID of the applications list that you want to delete. You can retrieve this ID from
   *       <code>PutAppsList</code>, <code>ListAppsLists</code>, and <code>GetAppsList</code>.</p>
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
   * @public
   * <p>The ID of the policy that you want to delete. You can retrieve this ID from
   *         <code>PutPolicy</code> and <code>ListPolicies</code>.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
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
   *          <p>After the cleanup, in-scope resources are no longer protected by web ACLs in this policy.
   *       Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you
   *       create and accounts that you associate with the policy. When creating the policy, if you
   *       specify that only resources in specific accounts or with specific tags are in scope of the
   *       policy, those accounts and resources are handled by the policy. All others are out of scope.
   *       If you don't specify tags or accounts, all resources are in scope. </p>
   */
  DeleteAllPolicyResources?: boolean;
}

/**
 * @public
 */
export interface DeleteProtocolsListRequest {
  /**
   * @public
   * <p>The ID of the protocols list that you want to delete. You can retrieve this ID from
   *       <code>PutProtocolsList</code>, <code>ListProtocolsLists</code>, and <code>GetProtocolsLost</code>.</p>
   */
  ListId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
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
   * @public
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;
}

/**
 * @public
 */
export interface DisassociateThirdPartyFirewallResponse {
  /**
   * @public
   * <p>The current status for the disassociation of a Firewall Manager administrators account with a third-party firewall.</p>
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
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
   * @public
   * <p>The account that is set as the Firewall Manager default administrator.</p>
   */
  AdminAccount?: string;

  /**
   * @public
   * <p>The status of the account that you set as the Firewall Manager
   *       default administrator.</p>
   */
  RoleStatus?: AccountRoleStatus;
}

/**
 * @public
 */
export interface GetAdminScopeRequest {
  /**
   * @public
   * <p>The administator account that you want to get the details for.</p>
   */
  AdminAccount: string | undefined;
}

/**
 * @public
 */
export interface GetAdminScopeResponse {
  /**
   * @public
   * <p>Contains details about the administrative scope of the requested account.</p>
   */
  AdminScope?: AdminScope;

  /**
   * @public
   * <p>The current status of the request to onboard a member account as an Firewall Manager administator.</p>
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
   */
  Status?: OrganizationStatus;
}

/**
 * @public
 */
export interface GetAppsListRequest {
  /**
   * @public
   * <p>The ID of the Firewall Manager applications list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

/**
 * @public
 */
export interface GetAppsListResponse {
  /**
   * @public
   * <p>Information about the specified Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

/**
 * @public
 */
export interface GetComplianceDetailRequest {
  /**
   * @public
   * <p>The ID of the policy that you want to get the details for. <code>PolicyId</code> is
   *       returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the resources that you want to get the details for.</p>
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
  WebAclMissingRuleGroup: "WEB_ACL_MISSING_RULE_GROUP",
} as const;

/**
 * @public
 */
export type ViolationReason = (typeof ViolationReason)[keyof typeof ViolationReason];

/**
 * @public
 * <p>Details of the resource that is not protected by the policy.</p>
 */
export interface ComplianceViolator {
  /**
   * @public
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The reason that the resource is not protected by the policy.</p>
   */
  ViolationReason?: ViolationReason;

  /**
   * @public
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. For example:
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>,
   *         <code>AWS::CloudFront::Distribution</code>, or
   *         <code>AWS::NetworkFirewall::FirewallPolicy</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Metadata about the resource that doesn't comply with the policy scope.</p>
   */
  Metadata?: Record<string, string>;
}

/**
 * @public
 * <p>Describes
 *       the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are
 *       noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 */
export interface PolicyComplianceDetail {
  /**
   * @public
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * @public
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  MemberAccount?: string;

  /**
   * @public
   * <p>An array of resources that aren't protected by the WAF or Shield Advanced policy or
   *       that aren't in compliance with the security group policy.</p>
   */
  Violators?: ComplianceViolator[];

  /**
   * @public
   * <p>Indicates if over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;

  /**
   * @public
   * <p>A timestamp that indicates when the returned information should be considered out of
   *       date.</p>
   */
  ExpiredAt?: Date;

  /**
   * @public
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: Record<DependentServiceName, string>;
}

/**
 * @public
 */
export interface GetComplianceDetailResponse {
  /**
   * @public
   * <p>Information about the resources and the policy that you specified in the
   *         <code>GetComplianceDetail</code> request.</p>
   */
  PolicyComplianceDetail?: PolicyComplianceDetail;
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
   * @public
   * <p>The SNS topic that records Firewall Manager activity. </p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The IAM role that is used by Firewall Manager to record activity to SNS.</p>
   */
  SnsRoleName?: string;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * @public
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
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
 * <p>The resource tags that Firewall Manager uses to determine if a particular resource
 *       should be included or excluded from the Firewall Manager policy. Tags enable you to
 *       categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or
 *       environment. Each tag consists of a key and an optional value. Firewall Manager combines the
 *       tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have
 *         all the specified tags to be included or excluded. For more information, see
 *     <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.</p>
 */
export interface ResourceTag {
  /**
   * @public
   * <p>The resource tag key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The resource tag value.</p>
   */
  Value?: string;
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
 * @public
 * <p>Configures the firewall policy deployment model of Network Firewall. For information about
 *          Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example
 *             architectures with routing</a> in the <i>Network Firewall Developer
 *          Guide</i>.</p>
 */
export interface NetworkFirewallPolicy {
  /**
   * @public
   * <p>Defines the deployment model to use for the firewall policy. To use a distributed model,
   *          set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>.</p>
   */
  FirewallDeploymentModel?: FirewallDeploymentModel;
}

/**
 * @public
 * <p>Configures the deployment model for the third-party firewall.</p>
 */
export interface ThirdPartyFirewallPolicy {
  /**
   * @public
   * <p>Defines the deployment model to use for the third-party firewall policy.</p>
   */
  FirewallDeploymentModel?: FirewallDeploymentModel;
}

/**
 * @public
 * <p>Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.</p>
 */
export interface PolicyOption {
  /**
   * @public
   * <p>Defines the deployment model to use for the firewall policy.</p>
   */
  NetworkFirewallPolicy?: NetworkFirewallPolicy;

  /**
   * @public
   * <p>Defines the policy options for a third-party firewall policy.</p>
   */
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
}

/**
 * @public
 * <p>Details about the security service that is being used to protect the resources.</p>
 */
export interface SecurityServicePolicyData {
  /**
   * @public
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy. For security group policies, Firewall Manager supports one security group for
   *       each common policy and for each content audit policy. This is an adjustable limit that you can
   *       increase by contacting Amazon Web Services Support.</p>
   */
  Type: SecurityServiceType | undefined;

  /**
   * @public
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
   *                <p>Example: <code>THIRD_PARTY_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"\{
   *               "type":"THIRD_PARTY_FIREWALL",
   *               "thirdPartyFirewall":"PALO_ALTO_NETWORKS_CLOUD_NGFW",
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
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code>
   *                </p>
   *                <p>
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false,
   *                  \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[\{\"id\":\"
   *                  sg-000e55995d61a06bd\"\}]\}"</code>
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
   *              Firewall Manager won't distrubute system tags added by Amazon Web Services services into the replica security groups. System tags begin with the <code>aws:</code> prefix.
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
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[\{\"id\":\"sg-000e55995d61a06bd\"\}],\"securityGroupAction\":\{\"type\":\"ALLOW\"\}\}"</code>
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
   *                   <code>"\{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true\}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specification for <code>SHIELD_ADVANCED</code> for Amazon CloudFront distributions </p>
   *                <p>
   *                   <code>"\{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\":
   *                  \{\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\",
   *                  \"automaticResponseAction\":\"BLOCK|COUNT\"\},
   *                  \"overrideCustomerWebaclClassic\":true|false\}"</code>
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
   *                <p>Example: <code>WAFV2</code> - Account takeover prevention and Bot Control managed rule groups, and rule action override
   *            </p>
   *                <p>
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesATPRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesATPRuleSet\":\{\"loginPath\":\"/loginpath\",\"requestInspection\":\{\"payloadType\":\"FORM_ENCODED|JSON\",\"usernameField\":\{\"identifier\":\"/form/username\"\},\"passwordField\":\{\"identifier\":\"/form/password\"\}\}\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\},\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesBotControlRuleSet\",\"managedRuleGroupConfigs\":[\{\"awsmanagedRulesBotControlRuleSet\":\{\"inspectionLevel\":\"TARGETED|COMMON\"\}\}]\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true,\"ruleActionOverrides\":[\{\"name\":\"Rule1\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\},\{\"name\":\"Rule2\",\"actionToUse\":\{\"allow|block|count|captcha|challenge\":\{\}\}\}]\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true\}"</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Fraud Control account takeover prevention (ATP) - For information about the properties available for <code>AWSManagedRulesATPRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesATPRuleSet.html">AWSManagedRulesATPRuleSet</a> in the <i>WAF API Reference</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>Bot Control - For information about <code>AWSManagedRulesBotControlRuleSet</code> managed rule groups, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_AWSManagedRulesBotControlRuleSet.html">AWSManagedRulesBotControlRuleSet</a> in the <i>WAF API Reference</i>.</p>
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
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":null,\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\"\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[],\"sampledRequestsEnabled\":true\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"customRequestHandling\":null,\"customResponse\":null,\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":null,\"sampledRequestsEnabledForDefaultActions\":true,\"captchaConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":500\}\},\"challengeConfig\":\{\"immunityTimeProperty\":\{\"immunityTime\":800\}\},\"tokenDomains\":[\"google.com\",\"amazon.com\"]\}"</code>
   *                </p>
   *                <p>If you update the policy's values for <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code>, Firewall Manager will overwrite your local web ACLs to contain the new value(s). However, if you don't update the policy's <code>captchaConfig</code>, <code>challengeConfig</code>, or <code>tokenDomains</code> values, the values in your local web ACLs will remain unchanged. For information about CAPTCHA and Challenge configs, see <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_CaptchaConfig.html">CaptchaConfig</a> and <a href="https://docs.aws.amazon.com/waf/latest/APIReference/API_ChallengeConfig.html">ChallengeConfig</a> in the <i>WAF API Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> -  Firewall Manager support for WAF managed rule group versioning
   *           </p>
   *                <p>
   *                   <code>"\{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[\{\"ruleGroupArn\":null,\"overrideAction\":\{\"type\":\"NONE\"\},\"managedRuleGroupIdentifier\":\{\"versionEnabled\":true,\"version\":\"Version_2.0\",\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesCommonRuleSet\"\},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[\{\"name\":\"NoUserAgent_HEADER\"\}]\}],\"postProcessRuleGroups\":[],\"defaultAction\":\{\"type\":\"ALLOW\"\},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":\{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[\{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"\},\{\"redactedFieldType\":\"Method\"\}]\}\}"</code>
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
   *                   <code>"\{\"type\": \"WAF\", \"ruleGroups\":
   *                  [\{\"id\":\"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : \{\"type\":
   *                  \"COUNT\"\}\}], \"defaultAction\": \{\"type\": \"BLOCK\"\}\}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ManagedServiceData?: string;

  /**
   * @public
   * <p>Contains the Network Firewall firewall policy options to configure a centralized deployment
   *          model.</p>
   */
  PolicyOption?: PolicyOption;
}

/**
 * @public
 * <p>An Firewall Manager policy.</p>
 */
export interface Policy {
  /**
   * @public
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The name of the Firewall Manager policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code>
   *       request, the <code>PolicyUpdateToken</code> in the request must match the
   *         <code>PolicyUpdateToken</code> of the current policy version. To get the
   *         <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code>
   *       request.</p>
   */
  PolicyUpdateToken?: string;

  /**
   * @public
   * <p>Details about the security service that is being used to protect the resources.</p>
   */
  SecurityServicePolicyData: SecurityServicePolicyData | undefined;

  /**
   * @public
   * <p>The type of resource protected by or in scope of the policy. This is in the format shown
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *                     To apply this policy to multiple resource types, specify a resource type of <code>ResourceTypeList</code> and then specify the resource types in a <code>ResourceTypeList</code>.</p>
   *          <p>For WAF and Shield Advanced, resource types include
   *                 <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, <code>AWS::ElasticLoadBalancing::LoadBalancer</code>, <code>AWS::EC2::EIP</code>, and
   *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
   *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
   *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
   *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
   *             group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an Network Firewall policy or DNS Firewall policy,
   *                 the value is <code>AWS::EC2::VPC</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>An array of <code>ResourceType</code> objects. Use this only to specify multiple resource types. To specify a single resource type, use <code>ResourceType</code>.</p>
   */
  ResourceTypeList?: string[];

  /**
   * @public
   * <p>An array of <code>ResourceTag</code> objects.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * @public
   * <p>If set to <code>True</code>, resources with the tags that are specified in the
   *         <code>ResourceTag</code> array are not in scope of the policy. If set to <code>False</code>,
   *       and the <code>ResourceTag</code> array is not null, only resources with the specified tags are
   *       in scope of the policy.</p>
   */
  ExcludeResourceTags: boolean | undefined;

  /**
   * @public
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *        that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *        from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   */
  DeleteUnusedFMManagedResources?: boolean;

  /**
   * @public
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
   */
  IncludeMap?: Record<CustomerPolicyScopeIdType, string[]>;

  /**
   * @public
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
   */
  ExcludeMap?: Record<CustomerPolicyScopeIdType, string[]>;

  /**
   * @public
   * <p>The unique identifiers of the resource sets used by the policy.</p>
   */
  ResourceSetIds?: string[];

  /**
   * @public
   * <p>The definition of the Network Firewall firewall policy.</p>
   */
  PolicyDescription?: string;

  /**
   * @public
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
   */
  PolicyStatus?: CustomerPolicyStatus;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * @public
   * <p>Information about the specified Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;
}

/**
 * @public
 * <p>The value of the <code>Type</code> parameter is invalid.</p>
 */
export class InvalidTypeException extends __BaseException {
  readonly name: "InvalidTypeException" = "InvalidTypeException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The ID of the policy for which you want to get the attack information.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account that is in scope of the policy that you want to get the details
   *          for.</p>
   */
  MemberAccountId?: string;

  /**
   * @public
   * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *           request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *          request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify
   *          for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of
   *          objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code>
   *          from the previous response to get information about another batch of objects.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the number of objects that you want Firewall Manager to return for this request. If you have more
   *         objects than the number that you specify for <code>MaxResults</code>, the response includes a
   *          <code>NextToken</code> value that you can use to get another batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetProtectionStatusResponse {
  /**
   * @public
   * <p>The ID of the Firewall Manager administrator account for this policy.</p>
   */
  AdminAccountId?: string;

  /**
   * @public
   * <p>The service type that is protected by the policy. Currently, this is always
   *             <code>SHIELD_ADVANCED</code>.</p>
   */
  ServiceType?: SecurityServiceType;

  /**
   * @public
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
   */
  Data?: string;

  /**
   * @public
   * <p>If you have more objects than the number that you specified for <code>MaxResults</code> in the request,
   *          the response includes a <code>NextToken</code> value. To list more objects, submit another
   *          <code>GetProtectionStatus</code> request, and specify the <code>NextToken</code> value from the response in the
   *          <code>NextToken</code> value in the next request.</p>
   *          <p>Amazon Web Services SDKs provide auto-pagination that identify <code>NextToken</code> in a response and
   *          make subsequent request calls automatically on your behalf. However, this feature is not
   *          supported by <code>GetProtectionStatus</code>. You must submit subsequent requests with
   *             <code>NextToken</code> using your own processes. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetProtocolsListRequest {
  /**
   * @public
   * <p>The ID of the Firewall Manager protocols list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * @public
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

/**
 * @public
 * <p>An Firewall Manager protocols list.</p>
 */
export interface ProtocolsListData {
  /**
   * @public
   * <p>The ID of the Firewall Manager protocols list.</p>
   */
  ListId?: string;

  /**
   * @public
   * <p>The name of the Firewall Manager protocols list.</p>
   */
  ListName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * @public
   * <p>The time that the Firewall Manager protocols list was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The time that the Firewall Manager protocols list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * @public
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   */
  ProtocolsList: string[] | undefined;

  /**
   * @public
   * <p>A map of previous version numbers to their corresponding protocol arrays.</p>
   */
  PreviousProtocolsList?: Record<string, string[]>;
}

/**
 * @public
 */
export interface GetProtocolsListResponse {
  /**
   * @public
   * <p>Information about the specified Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   */
  ProtocolsListArn?: string;
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
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
 * @public
 * <p>A set of resources to include in a policy.</p>
 */
export interface ResourceSet {
  /**
   * @public
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the resource set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>An optional token that you can use for optimistic locking. Firewall Manager returns a token to your requests that access the resource set. The token marks the state of the resource set resource at the time of the request. Update tokens are not allowed when creating a resource set. After creation, each subsequent update call to the resource set requires the update token.
   * </p>
   *          <p>To make an unconditional change to the resource set, omit the token in your update request. Without the token, Firewall Manager performs your updates regardless of whether the resource set has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the resource set, provide the token in your update request. Firewall Manager uses the token to ensure that the resource set hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the resource set again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * @public
   * <p>Determines the resources that can be associated to the resource set. Depending on
   *          your setting for max results and the number of resource sets, a single call might not
   *          return the full list.</p>
   */
  ResourceTypeList: string[] | undefined;

  /**
   * @public
   * <p>The last time that the resource set was changed.</p>
   */
  LastUpdateTime?: Date;

  /**
   * @public
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
   */
  ResourceSetStatus?: ResourceSetStatus;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * @public
   * <p>Information about the specified resource set.</p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface GetThirdPartyFirewallAssociationStatusRequest {
  /**
   * @public
   * <p>The name of the third-party firewall vendor.</p>
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
   * @public
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
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;

  /**
   * @public
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
   */
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus;
}

/**
 * @public
 */
export interface GetViolationDetailsRequest {
  /**
   * @public
   * <p>The ID of the Firewall Manager policy that you want the details for. This currently only supports security group content audit policies.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that you want the details for.</p>
   */
  MemberAccount: string | undefined;

  /**
   * @public
   * <p>The ID of the resource that has violations.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *       Supported resource types are:
   *       <code>AWS::EC2::Instance</code>,
   *       <code>AWS::EC2::NetworkInterface</code>,
   *       <code>AWS::EC2::SecurityGroup</code>,
   *       <code>AWS::NetworkFirewall::FirewallPolicy</code>, and
   *       <code>AWS::EC2::Subnet</code>.
   *    </p>
   */
  ResourceType: string | undefined;
}

/**
 * @public
 * <p>A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  </p>
 */
export interface Tag {
  /**
   * @public
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.  </p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.</p>
 */
export interface PartialMatch {
  /**
   * @public
   * <p>The reference rule from the primary security group of the Firewall Manager policy.</p>
   */
  Reference?: string;

  /**
   * @public
   * <p>The violation reason.</p>
   */
  TargetViolationReasons?: string[];
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
 * @public
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface SecurityGroupRuleDescription {
  /**
   * @public
   * <p>The IPv4 ranges for the security group rule.</p>
   */
  IPV4Range?: string;

  /**
   * @public
   * <p>The IPv6 ranges for the security group rule.</p>
   */
  IPV6Range?: string;

  /**
   * @public
   * <p>The ID of the prefix list for the security group rule.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of <code>-1</code> indicates all ICMP/ICMPv6 types.</p>
   */
  FromPort?: number;

  /**
   * @public
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes.</p>
   */
  ToPort?: number;
}

/**
 * @public
 * <p>Remediation option for the rule specified in the <code>ViolationTarget</code>.</p>
 */
export interface SecurityGroupRemediationAction {
  /**
   * @public
   * <p>The remediation action that will be performed.</p>
   */
  RemediationActionType?: RemediationActionType;

  /**
   * @public
   * <p>Brief description of the action that will be performed.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The final state of the rule specified in the <code>ViolationTarget</code> after it is remediated.</p>
   */
  RemediationResult?: SecurityGroupRuleDescription;

  /**
   * @public
   * <p>Indicates if the current action is the default action.</p>
   */
  IsDefaultAction?: boolean;
}

/**
 * @public
 * <p>Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.</p>
 */
export interface AwsVPCSecurityGroupViolation {
  /**
   * @public
   * <p>The security group rule that is being evaluated.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>A description of the security group that violates the policy.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * @public
   * <p>List of rules specified in the security group of the Firewall Manager policy that partially match the <code>ViolationTarget</code> rule.</p>
   */
  PartialMatches?: PartialMatch[];

  /**
   * @public
   * <p>Remediation options for the rule specified in the <code>ViolationTarget</code>.</p>
   */
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
}

/**
 * @public
 * <p>A DNS Firewall rule group that Firewall Manager
 *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
 */
export interface DnsDuplicateRuleGroupViolation {
  /**
   * @public
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   */
  ViolationTargetDescription?: string;
}

/**
 * @public
 * <p>The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. </p>
 */
export interface DnsRuleGroupLimitExceededViolation {
  /**
   * @public
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * @public
   * <p>The number of rule groups currently associated with the VPC.  </p>
   */
  NumberOfRuleGroupsAlreadyAssociated?: number;
}

/**
 * @public
 * <p>A rule group that Firewall Manager
 *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
 */
export interface DnsRuleGroupPriorityConflictViolation {
  /**
   * @public
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>A description of the violation that specifies the VPC and the rule group that's already associated with it.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * @public
   * <p>The priority setting of the two conflicting rule groups.</p>
   */
  ConflictingPriority?: number;

  /**
   * @public
   * <p>The ID of the Firewall Manager DNS Firewall policy that was already applied to the VPC.
   *        This policy contains the rule group that's already associated with the VPC. </p>
   */
  ConflictingPolicyId?: string;

  /**
   * @public
   * <p>The priorities of rule groups that are already associated with the VPC. To retry your operation,
   *        choose priority settings that aren't in this list for the rule groups in your new DNS Firewall policy. </p>
   */
  UnavailablePriorities?: number[];
}

/**
 * @public
 * <p>Contains details about the firewall subnet that violates the policy scope.</p>
 */
export interface FirewallSubnetIsOutOfScopeViolation {
  /**
   * @public
   * <p>The ID of the firewall subnet that violates the policy scope.</p>
   */
  FirewallSubnetId?: string;

  /**
   * @public
   * <p>The VPC ID of the firewall subnet that violates the policy scope.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The Availability Zone of the firewall subnet that violates the policy scope.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * @public
   * <p>The Availability Zone ID of the firewall subnet that violates the policy scope.</p>
   */
  SubnetAvailabilityZoneId?: string;

  /**
   * @public
   * <p>The VPC endpoint ID of the firewall subnet that violates the policy scope.</p>
   */
  VpcEndpointId?: string;
}

/**
 * @public
 * <p>The violation details for a firewall subnet's VPC endpoint that's deleted or missing.</p>
 */
export interface FirewallSubnetMissingVPCEndpointViolation {
  /**
   * @public
   * <p>The ID of the firewall that this VPC endpoint is associated with.</p>
   */
  FirewallSubnetId?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with the deleted VPC subnet.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The name of the Availability Zone of the deleted VPC subnet.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * @public
   * <p>The ID of the Availability Zone of the deleted VPC subnet.</p>
   */
  SubnetAvailabilityZoneId?: string;
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
 * @public
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * @public
   * <p>The type of destination for the route.</p>
   */
  DestinationType?: DestinationType;

  /**
   * @public
   * <p>The type of target for the route.</p>
   */
  TargetType?: TargetType;

  /**
   * @public
   * <p>The destination of the route.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The route's target.</p>
   */
  Target?: string;
}

/**
 * @public
 * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
 */
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * @public
   * <p>The subnet that has an inactive state.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Information about the route or routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];
}

/**
 * @public
 * <p>Information about the expected route in the route table.</p>
 */
export interface ExpectedRoute {
  /**
   * @public
   * <p>Information about the IPv4 CIDR block.</p>
   */
  IpV4Cidr?: string;

  /**
   * @public
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  PrefixListId?: string;

  /**
   * @public
   * <p>Information about the IPv6 CIDR block.</p>
   */
  IpV6Cidr?: string;

  /**
   * @public
   * <p>Information about the contributing subnets.</p>
   */
  ContributingSubnets?: string[];

  /**
   * @public
   * <p>Information about the allowed targets.</p>
   */
  AllowedTargets?: string[];

  /**
   * @public
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;
}

/**
 * @public
 * <p>Violation detail for the subnet for which internet traffic that hasn't been inspected.</p>
 */
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * @public
   * <p>The subnet ID.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The subnet Availability Zone.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * @public
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>The route or routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * @public
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   */
  IsRouteTableUsedInDifferentAZ?: boolean;

  /**
   * @public
   * <p>Information about the subnet route table for the current firewall.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * @public
   * <p>The expected endpoint for the current firewall.</p>
   */
  ExpectedFirewallEndpoint?: string;

  /**
   * @public
   * <p>The firewall subnet ID.</p>
   */
  FirewallSubnetId?: string;

  /**
   * @public
   * <p>The firewall subnet routes that are expected.</p>
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];

  /**
   * @public
   * <p>The actual firewall subnet routes.</p>
   */
  ActualFirewallSubnetRoutes?: Route[];

  /**
   * @public
   * <p>The internet gateway ID.</p>
   */
  InternetGatewayId?: string;

  /**
   * @public
   * <p>The current route table for the internet gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * @public
   * <p>The internet gateway routes that are expected.</p>
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];

  /**
   * @public
   * <p>The actual internet gateway routes.</p>
   */
  ActualInternetGatewayRoutes?: Route[];

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Violation detail for the improperly configured subnet route. It's possible there is a missing route table route,
 *       or a configuration that causes traffic to cross an Availability Zone boundary.</p>
 */
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * @public
   * <p>The subnets that are affected.</p>
   */
  AffectedSubnets?: string[];

  /**
   * @public
   * <p>The route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   */
  IsRouteTableUsedInDifferentAZ?: boolean;

  /**
   * @public
   * <p>The route that's in violation.</p>
   */
  ViolatingRoute?: Route;

  /**
   * @public
   * <p>The subnet route table for the current firewall.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * @public
   * <p>The firewall endpoint that's expected.</p>
   */
  ExpectedFirewallEndpoint?: string;

  /**
   * @public
   * <p>The actual firewall endpoint.</p>
   */
  ActualFirewallEndpoint?: string;

  /**
   * @public
   * <p>The expected subnet ID for the firewall.</p>
   */
  ExpectedFirewallSubnetId?: string;

  /**
   * @public
   * <p>The actual subnet ID for the firewall.</p>
   */
  ActualFirewallSubnetId?: string;

  /**
   * @public
   * <p>The firewall subnet routes that are expected.</p>
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];

  /**
   * @public
   * <p>The actual firewall subnet routes that are expected.</p>
   */
  ActualFirewallSubnetRoutes?: Route[];

  /**
   * @public
   * <p>The internet gateway ID.</p>
   */
  InternetGatewayId?: string;

  /**
   * @public
   * <p>The route table for the current internet gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * @public
   * <p>The expected routes for the internet gateway.</p>
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];

  /**
   * @public
   * <p>The actual internet gateway routes.</p>
   */
  ActualInternetGatewayRoutes?: Route[];

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Violation detail for an expected route missing in Network Firewall.</p>
 */
export interface NetworkFirewallMissingExpectedRoutesViolation {
  /**
   * @public
   * <p>The target of the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The expected routes.</p>
   */
  ExpectedRoutes?: ExpectedRoute[];

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Violation detail for Network Firewall for a subnet that's not associated to the expected
 *        Firewall Manager managed route table.</p>
 */
export interface NetworkFirewallMissingExpectedRTViolation {
  /**
   * @public
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   */
  CurrentRouteTable?: string;

  /**
   * @public
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   */
  ExpectedRouteTable?: string;
}

/**
 * @public
 * <p>Violation detail for Network Firewall for a subnet that doesn't have a
 *        Firewall Manager managed firewall in its VPC. </p>
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * @public
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The reason the resource has this violation, if one is available. </p>
   */
  TargetViolationReason?: string;
}

/**
 * @public
 * <p>Violation detail for Network Firewall for an Availability Zone that's
 *        missing the expected Firewall Manager managed subnet.</p>
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * @public
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The reason the resource has this violation, if one is available. </p>
   */
  TargetViolationReason?: string;
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
 * <p>Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.</p>
 */
export interface StatefulEngineOptions {
  /**
   * @public
   * <p>Indicates how to manage the order of stateful rule evaluation for the policy.
   * <code>DEFAULT_ACTION_ORDER</code> is the default behavior. Stateful rules are provided to the rule engine
   * as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more
   * information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.</p>
   */
  RuleOrder?: RuleOrder;
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
 * @public
 * <p>The setting that allows the policy owner to change the behavior of the rule group within a policy.</p>
 */
export interface NetworkFirewallStatefulRuleGroupOverride {
  /**
   * @public
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.</p>
   */
  Action?: NetworkFirewallOverrideAction;
}

/**
 * @public
 * <p>Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 */
export interface StatefulRuleGroup {
  /**
   * @public
   * <p>The name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * @public
   * <p>The resource ID of the rule group.</p>
   */
  ResourceId?: string;

  /**
   * @public
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
   */
  Priority?: number;

  /**
   * @public
   * <p>The action that allows the policy owner to override the behavior of the rule group within a policy.</p>
   */
  Override?: NetworkFirewallStatefulRuleGroupOverride;
}

/**
 * @public
 * <p>Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 */
export interface StatelessRuleGroup {
  /**
   * @public
   * <p>The name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * @public
   * <p>The resource ID of the rule group.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The priority of the rule group. Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting. </p>
   */
  Priority?: number;
}

/**
 * @public
 * <p>The definition of the Network Firewall firewall policy.</p>
 */
export interface NetworkFirewallPolicyDescription {
  /**
   * @public
   * <p>The stateless rule groups that are used in the Network Firewall firewall policy. </p>
   */
  StatelessRuleGroups?: StatelessRuleGroup[];

  /**
   * @public
   * <p>The actions to take on packets that don't match any of the stateless rule groups. </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * @public
   * <p>The actions to take on packet fragments that don't match any of the stateless rule groups. </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * @public
   * <p>Names of custom actions that are available for use in the stateless default actions settings.</p>
   */
  StatelessCustomActions?: string[];

  /**
   * @public
   * <p>The stateful rule groups that are used in the Network Firewall firewall policy. </p>
   */
  StatefulRuleGroups?: StatefulRuleGroup[];

  /**
   * @public
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
   */
  StatefulDefaultActions?: string[];

  /**
   * @public
   * <p>Additional options governing how Network Firewall handles stateful rules. The stateful rule groups
   * that you use in your policy must have stateful rule options settings that are compatible with these
   * settings.</p>
   */
  StatefulEngineOptions?: StatefulEngineOptions;
}

/**
 * @public
 * <p>Violation detail for Network Firewall for a firewall policy that has a different
 *        <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. </p>
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * @public
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The policy that's currently in use in the individual account. </p>
   */
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription;

  /**
   * @public
   * <p>The policy that should be in use in the individual account in order to be compliant. </p>
   */
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
}

/**
 * @public
 * <p>Violation detail for an unexpected route that's present in a route table.</p>
 */
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * @public
   * <p>The subnet ID for the firewall.</p>
   */
  FirewallSubnetId?: string;

  /**
   * @public
   * <p>The routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>The endpoint of the firewall.</p>
   */
  FirewallEndpoint?: string;

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Violation detail for an unexpected gateway route that’s present in a route table.</p>
 */
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * @public
   * <p>Information about the gateway ID.</p>
   */
  GatewayId?: string;

  /**
   * @public
   * <p>The routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * @public
   * <p>Information about the  route table.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.</p>
 */
export interface EC2AssociateRouteTableAction {
  /**
   * @public
   * <p>A description of the EC2 route table that is associated with the remediation action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the EC2 route table that is associated with the remediation action.</p>
   */
  RouteTableId: ActionTarget | undefined;

  /**
   * @public
   * <p>The ID of the subnet for the EC2 route table that is associated with the remediation action.</p>
   */
  SubnetId?: ActionTarget;

  /**
   * @public
   * <p>The ID of the gateway to be used with the EC2 route table that is associated with the remediation action.</p>
   */
  GatewayId?: ActionTarget;
}

/**
 * @public
 * <p>An action that copies the EC2 route table for use in remediation.</p>
 */
export interface EC2CopyRouteTableAction {
  /**
   * @public
   * <p>A description of the copied EC2 route table that is associated with the remediation action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The VPC ID of the copied EC2 route table that is associated with the remediation action.</p>
   */
  VpcId: ActionTarget | undefined;

  /**
   * @public
   * <p>The ID of the copied EC2 route table that is associated with the remediation action.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Information about the CreateRoute action in Amazon EC2.</p>
 */
export interface EC2CreateRouteAction {
  /**
   * @public
   * <p>A description of CreateRoute action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the IPv4 CIDR address block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Information about the IPv6 CIDR block destination.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: ActionTarget;

  /**
   * @public
   * <p>Information about the ID of an internet gateway or virtual private gateway attached to your VPC.</p>
   */
  GatewayId?: ActionTarget;

  /**
   * @public
   * <p>Information about the ID of the route table for the route.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Information about the CreateRouteTable action in Amazon EC2.</p>
 */
export interface EC2CreateRouteTableAction {
  /**
   * @public
   * <p>A description of the CreateRouteTable action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the ID of a VPC.</p>
   */
  VpcId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Information about the DeleteRoute action in Amazon EC2.</p>
 */
export interface EC2DeleteRouteAction {
  /**
   * @public
   * <p>A description of the DeleteRoute action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Information about the IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of the route table.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Information about the ReplaceRoute action in Amazon EC2.</p>
 */
export interface EC2ReplaceRouteAction {
  /**
   * @public
   * <p>A description of the ReplaceRoute action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * @public
   * <p>Information about the IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * @public
   * <p>Information about the ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: ActionTarget;

  /**
   * @public
   * <p>Information about the ID of the route table.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Information about the ReplaceRouteTableAssociation action in Amazon EC2.</p>
 */
export interface EC2ReplaceRouteTableAssociationAction {
  /**
   * @public
   * <p>A description of the ReplaceRouteTableAssociation action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the association ID.</p>
   */
  AssociationId: ActionTarget | undefined;

  /**
   * @public
   * <p>Information about the ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * @public
 * <p>Contains information about the actions that you can take to remediate scope violations
 *          caused by your policy's <code>FirewallCreationConfig</code>.
 *             <code>FirewallCreationConfig</code> is an optional configuration that you can use to
 *          choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.</p>
 */
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  /**
   * @public
   * <p>Describes the remedial action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A <code>FirewallCreationConfig</code> that you can copy into your current policy's
   *             <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html">SecurityServiceData</a> in order to remedy scope violations.</p>
   */
  FirewallCreationConfig?: string;
}

/**
 * @public
 * <p>Information about an individual action you can take to remediate a violation.</p>
 */
export interface RemediationAction {
  /**
   * @public
   * <p>A description of a remediation action.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the CreateRoute action in the Amazon EC2 API.</p>
   */
  EC2CreateRouteAction?: EC2CreateRouteAction;

  /**
   * @public
   * <p>Information about the ReplaceRoute action in the Amazon EC2 API.</p>
   */
  EC2ReplaceRouteAction?: EC2ReplaceRouteAction;

  /**
   * @public
   * <p>Information about the DeleteRoute action in the Amazon EC2 API.</p>
   */
  EC2DeleteRouteAction?: EC2DeleteRouteAction;

  /**
   * @public
   * <p>Information about the CopyRouteTable action in the Amazon EC2 API.</p>
   */
  EC2CopyRouteTableAction?: EC2CopyRouteTableAction;

  /**
   * @public
   * <p>Information about the ReplaceRouteTableAssociation action in the Amazon EC2 API.</p>
   */
  EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction;

  /**
   * @public
   * <p>Information about the AssociateRouteTable action in the Amazon EC2 API.</p>
   */
  EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction;

  /**
   * @public
   * <p>Information about the CreateRouteTable action in the Amazon EC2 API.</p>
   */
  EC2CreateRouteTableAction?: EC2CreateRouteTableAction;

  /**
   * @public
   * <p>The remedial action to take when updating a firewall configuration.</p>
   */
  FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction;
}

/**
 * @public
 * <p>An ordered list of actions you can take to remediate a violation.</p>
 */
export interface RemediationActionWithOrder {
  /**
   * @public
   * <p>Information about an action you can take to remediate a violation.</p>
   */
  RemediationAction?: RemediationAction;

  /**
   * @public
   * <p>The order of the remediation actions in the list.</p>
   */
  Order?: number;
}

/**
 * @public
 * <p>A list of remediation actions.</p>
 */
export interface PossibleRemediationAction {
  /**
   * @public
   * <p>A description of the list of remediation actions.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ordered list of remediation actions.</p>
   */
  OrderedRemediationActions: RemediationActionWithOrder[] | undefined;

  /**
   * @public
   * <p>Information about whether an action is taken by default.</p>
   */
  IsDefaultAction?: boolean;
}

/**
 * @public
 * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
 */
export interface PossibleRemediationActions {
  /**
   * @public
   * <p>A description of the possible remediation actions list.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about the actions.</p>
   */
  Actions?: PossibleRemediationAction[];
}

/**
 * @public
 * <p>Contains details about the route endpoint that violates the policy scope.</p>
 */
export interface RouteHasOutOfScopeEndpointViolation {
  /**
   * @public
   * <p>The ID of the subnet associated with the route that violates the policy scope.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The VPC ID of the route that violates the policy scope.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * @public
   * <p>The list of routes that violate the route table.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * @public
   * <p>The subnet's Availability Zone.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * @public
   * <p>The ID of the subnet's Availability Zone.</p>
   */
  SubnetAvailabilityZoneId?: string;

  /**
   * @public
   * <p>The route table associated with the current firewall subnet.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * @public
   * <p>The ID of the firewall subnet.</p>
   */
  FirewallSubnetId?: string;

  /**
   * @public
   * <p>The list of firewall subnet routes.</p>
   */
  FirewallSubnetRoutes?: Route[];

  /**
   * @public
   * <p>The ID of the Internet Gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * @public
   * <p>The current route table associated with the Internet Gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * @public
   * <p>The routes in the route table associated with the Internet Gateway.</p>
   */
  InternetGatewayRoutes?: Route[];
}

/**
 * @public
 * <p>The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.</p>
 */
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  /**
   * @public
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a fireawll subnet that's causing the violation.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of the firewall subnet that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   */
  CurrentRouteTable?: string;

  /**
   * @public
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   */
  ExpectedRouteTable?: string;
}

/**
 * @public
 * <p>The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.</p>
 */
export interface ThirdPartyFirewallMissingFirewallViolation {
  /**
   * @public
   * <p>The ID of the third-party firewall that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a third-party firewall.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of the third-party firewall that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The reason the resource is causing this violation, if a reason is available.</p>
   */
  TargetViolationReason?: string;
}

/**
 * @public
 * <p>The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.</p>
 */
export interface ThirdPartyFirewallMissingSubnetViolation {
  /**
   * @public
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * @public
   * <p>The resource ID of the VPC associated with a subnet that's causing the violation.</p>
   */
  VPC?: string;

  /**
   * @public
   * <p>The Availability Zone of a subnet that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The reason the resource is causing the violation, if a reason is available.</p>
   */
  TargetViolationReason?: string;
}

/**
 * @public
 * <p>Violation detail based on resource type.</p>
 */
export interface ResourceViolation {
  /**
   * @public
   * <p>Violation detail for security groups.</p>
   */
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;

  /**
   * @public
   * <p>Violation detail for a network interface.</p>
   */
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  /**
   * @public
   * <p>Violation detail for an EC2 instance.</p>
   */
  AwsEc2InstanceViolation?: AwsEc2InstanceViolation;

  /**
   * @public
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet has no Firewall Manager
   *         managed firewall in its VPC. </p>
   */
  NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;

  /**
   * @public
   * <p>Violation detail for an Network Firewall policy that indicates that an Availability Zone is
   *        missing the expected Firewall Manager managed subnet.</p>
   */
  NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;

  /**
   * @public
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet
   *       is not associated with the expected Firewall Manager managed route table. </p>
   */
  NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation;

  /**
   * @public
   * <p>Violation detail for an Network Firewall policy that indicates that a firewall policy
   *        in an individual account has been modified in a way that makes it noncompliant.
   *        For example, the individual account owner might have deleted a rule group,
   *        changed the priority of a stateless rule group, or changed a policy default action.</p>
   */
  NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;

  /**
   * @public
   * <p>Violation detail for the subnet for which internet traffic hasn't been inspected.</p>
   */
  NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;

  /**
   * @public
   * <p>The route configuration is invalid.</p>
   */
  NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;

  /**
   * @public
   * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
   */
  NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;

  /**
   * @public
   * <p>There's an unexpected firewall route.</p>
   */
  NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;

  /**
   * @public
   * <p>There's an unexpected gateway route.</p>
   */
  NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;

  /**
   * @public
   * <p>Expected routes are missing from Network Firewall.</p>
   */
  NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;

  /**
   * @public
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
   */
  DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;

  /**
   * @public
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
   */
  DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;

  /**
   * @public
   * <p>Violation detail for a DNS Firewall policy that indicates that the VPC reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed. </p>
   */
  DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;

  /**
   * @public
   * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
   */
  PossibleRemediationActions?: PossibleRemediationActions;

  /**
   * @public
   * <p>Contains details about the firewall subnet that violates the policy scope.</p>
   */
  FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation;

  /**
   * @public
   * <p>Contains details about the route endpoint that violates the policy scope.</p>
   */
  RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation;

  /**
   * @public
   * <p>The violation details for a third-party firewall that's been deleted.</p>
   */
  ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation;

  /**
   * @public
   * <p>The violation details for a third-party firewall's subnet that's been deleted.</p>
   */
  ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation;

  /**
   * @public
   * <p>The violation details for a third-party firewall that has the Firewall Manager managed route table that was associated with the third-party firewall has been deleted.</p>
   */
  ThirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation;

  /**
   * @public
   * <p>The violation details for a third-party firewall's VPC endpoint subnet that was deleted.</p>
   */
  FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation;
}

/**
 * @public
 * <p>Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
 */
export interface ViolationDetail {
  /**
   * @public
   * <p>The ID of the Firewall Manager policy that the violation details were requested for.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account that the violation details were requested for.</p>
   */
  MemberAccount: string | undefined;

  /**
   * @public
   * <p>The resource ID that the violation details were requested for.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type that the violation details were requested for.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>List of violations for the requested resource.</p>
   */
  ResourceViolations: ResourceViolation[] | undefined;

  /**
   * @public
   * <p>The <code>ResourceTag</code> objects associated with the resource.</p>
   */
  ResourceTags?: Tag[];

  /**
   * @public
   * <p>Brief description for the requested resource.</p>
   */
  ResourceDescription?: string;
}

/**
 * @public
 */
export interface GetViolationDetailsResponse {
  /**
   * @public
   * <p>Violation detail for a resource.</p>
   */
  ViolationDetail?: ViolationDetail;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationRequest {
  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAdminAccountsForOrganizationResponse {
  /**
   * @public
   * <p>A list of Firewall Manager administrator accounts within the organization that were onboarded as administrators by <a>AssociateAdminAccount</a> or <a>PutAdminAccount</a>.</p>
   */
  AdminAccounts?: AdminAccountSummary[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountRequest {
  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAdminsManagingAccountResponse {
  /**
   * @public
   * <p>The list of accounts who manage member accounts within their <a>AdminScope</a>.</p>
   */
  AdminAccounts?: string[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppsListsRequest {
  /**
   * @public
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

/**
 * @public
 */
export interface ListAppsListsResponse {
  /**
   * @public
   * <p>An array of <code>AppsListDataSummary</code> objects.</p>
   */
  AppsLists?: AppsListDataSummary[];

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComplianceStatusRequest {
  /**
   * @public
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
   */
  PolicyId: string | undefined;

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicyComplianceStatus</code> objects.
   *       For the second and subsequent <code>ListComplianceStatus</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicyComplianceStatus</code> objects.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want
   *       Firewall Manager to return for this request. If you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>
   */
  MaxResults?: number;
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
 * @public
 * <p>Describes the compliance status for the account. An account is considered noncompliant if
 *       it includes resources that are not protected by the specified policy or that don't comply with
 *       the policy.</p>
 */
export interface EvaluationResult {
  /**
   * @public
   * <p>Describes an Amazon Web Services account's compliance with the Firewall Manager policy.</p>
   */
  ComplianceStatus?: PolicyComplianceStatusType;

  /**
   * @public
   * <p>The number of resources that are noncompliant with the specified policy. For WAF and
   *       Shield Advanced policies, a resource is considered noncompliant if it is not associated with
   *       the policy. For security group policies, a resource is considered noncompliant if it doesn't
   *       comply with the rules of the policy and remediation is disabled or not possible.</p>
   */
  ViolatorCount?: number;

  /**
   * @public
   * <p>Indicates that over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;
}

/**
 * @public
 * <p>Indicates whether the account is compliant with the specified policy. An account is
 *       considered noncompliant if it includes resources that are not protected by the policy, for
 *       WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group
 *       policies.</p>
 */
export interface PolicyComplianceStatus {
  /**
   * @public
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * @public
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The name of the Firewall Manager policy.</p>
   */
  PolicyName?: string;

  /**
   * @public
   * <p>The member account ID.</p>
   */
  MemberAccount?: string;

  /**
   * @public
   * <p>An array of <code>EvaluationResult</code> objects.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * @public
   * <p>Timestamp of the last update to the <code>EvaluationResult</code> objects.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: Record<DependentServiceName, string>;
}

/**
 * @public
 */
export interface ListComplianceStatusResponse {
  /**
   * @public
   * <p>An array of <code>PolicyComplianceStatus</code> objects.</p>
   */
  PolicyComplianceStatusList?: PolicyComplianceStatus[];

  /**
   * @public
   * <p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you
   *       specified for <code>MaxResults</code> in the request, the response includes a
   *         <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects,
   *       submit another <code>ListComplianceStatus</code> request, and specify the
   *         <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * @public
   * <p>The Amazon Web Services account IDs to discover resources in. Only one account is supported per request. The account must be a member of your organization.</p>
   */
  MemberAccountIds: string[] | undefined;

  /**
   * @public
   * <p>The type of resources to discover.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A resource in the organization that's available to be associated with a Firewall Manager resource set.</p>
 */
export interface DiscoveredResource {
  /**
   * @public
   * <p>The universal resource identifier (URI) of the discovered resource.</p>
   */
  URI?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the discovered resource.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The type of the discovered resource.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The name of the discovered resource.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * @public
   * <p>Details of the resources that were discovered.</p>
   */
  Items?: DiscoveredResource[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMemberAccountsRequest {
  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the
   *       number that you specify for <code>MaxResults</code>, Firewall Manager returns a
   *         <code>NextToken</code> value in the response that allows you to list another group of IDs.
   *       For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the
   *       value of <code>NextToken</code> from the previous response to get information about another
   *       batch of member account IDs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the number of member account IDs that you want Firewall Manager to return
   *       for this request. If you have more IDs than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of member account IDs.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMemberAccountsResponse {
  /**
   * @public
   * <p>An array of account IDs.</p>
   */
  MemberAccounts?: string[];

  /**
   * @public
   * <p>If you have more member account IDs than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify
   *       the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicySummary</code> objects than the number that you specify for
   *         <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicySummary</code> objects. For the
   *       second and subsequent <code>ListPolicies</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicySummary</code> objects.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the number of <code>PolicySummary</code> objects that you want Firewall Manager to return for this request. If you have more <code>PolicySummary</code> objects than
   *       the number that you specify for <code>MaxResults</code>, the response includes a
   *         <code>NextToken</code> value that you can use to get another batch of
   *         <code>PolicySummary</code> objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Details of the Firewall Manager policy. </p>
 */
export interface PolicySummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;

  /**
   * @public
   * <p>The ID of the specified policy.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The name of the specified policy.</p>
   */
  PolicyName?: string;

  /**
   * @public
   * <p>The type of resource protected by or in scope of the policy. This is in the format shown
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *             For WAF and Shield Advanced, examples include
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
   *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
   *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
   *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
   *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
   *       group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an Network Firewall policy or DNS Firewall policy,
   *           the value is <code>AWS::EC2::VPC</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy.</p>
   */
  SecurityServiceType?: SecurityServiceType;

  /**
   * @public
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *        that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *        from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   */
  DeleteUnusedFMManagedResources?: boolean;

  /**
   * @public
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
   */
  PolicyStatus?: CustomerPolicyStatus;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * @public
   * <p>An array of <code>PolicySummary</code> objects.</p>
   */
  PolicyList?: PolicySummary[];

  /**
   * @public
   * <p>If you have more <code>PolicySummary</code> objects than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more <code>PolicySummary</code> objects, submit another
   *         <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the
   *       response in the <code>NextToken</code> value in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProtocolsListsRequest {
  /**
   * @public
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

/**
 * @public
 * <p>Details of the Firewall Manager protocols list.</p>
 */
export interface ProtocolsListDataSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   */
  ListArn?: string;

  /**
   * @public
   * <p>The ID of the specified protocols list.</p>
   */
  ListId?: string;

  /**
   * @public
   * <p>The name of the specified protocols list.</p>
   */
  ListName?: string;

  /**
   * @public
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   */
  ProtocolsList?: string[];
}

/**
 * @public
 */
export interface ListProtocolsListsResponse {
  /**
   * @public
   * <p>An array of <code>ProtocolsListDataSummary</code> objects.</p>
   */
  ProtocolsLists?: ProtocolsListDataSummary[];

  /**
   * @public
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceSetResourcesRequest {
  /**
   * @public
   * <p>A unique identifier for the resource set, used in a request to refer to the resource set.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details of a resource that is associated to an Firewall Manager resource set.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The resource's universal resource indicator (URI).</p>
   */
  URI: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that the associated resource belongs to.</p>
   */
  AccountId?: string;
}

/**
 * @public
 */
export interface ListResourceSetResourcesResponse {
  /**
   * @public
   * <p>An array of the associated resources' uniform resource identifiers (URI).</p>
   */
  Items: Resource[] | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summarizes the resource sets used in a policy.</p>
 */
export interface ResourceSetSummary {
  /**
   * @public
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the resource set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The last time that the resource set was changed.</p>
   */
  LastUpdateTime?: Date;

  /**
   * @public
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
   */
  ResourceSetStatus?: ResourceSetStatus;
}

/**
 * @public
 */
export interface ListResourceSetsResponse {
  /**
   * @public
   * <p>An array of <code>ResourceSetSummary</code> objects.</p>
   */
  ResourceSets?: ResourceSetSummary[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  /**
   * @public
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | undefined;

  /**
   * @public
   * <p>If the previous response included a <code>NextToken</code> element, the specified third-party firewall vendor is associated with more
   * third-party firewall policies. To get more third-party firewall policies, submit another <code>ListThirdPartyFirewallFirewallPoliciesRequest</code> request.</p>
   *          <p>
   *   For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response.
   *   If the previous response didn't include a <code>NextToken</code> element, there are no more third-party firewall policies to
   *   get.
   * </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of third-party firewall policies that you want Firewall Manager to return. If
   * the specified third-party firewall vendor is associated with more than <code>MaxResults</code> firewall policies, the response includes a
   * <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first third-party firewall policies
   * that Firewall Manager will return if you submit another request.</p>
   */
  MaxResults: number | undefined;
}

/**
 * @public
 * <p>Configures the third-party firewall's firewall policy.</p>
 */
export interface ThirdPartyFirewallFirewallPolicy {
  /**
   * @public
   * <p>The ID of the specified firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * @public
   * <p>The name of the specified firewall policy.</p>
   */
  FirewallPolicyName?: string;
}

/**
 * @public
 */
export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  /**
   * @public
   * <p>A list that contains one <code>ThirdPartyFirewallFirewallPolicies</code> element for each third-party firewall policies that the specified
   * third-party firewall vendor is associated with. Each <code>ThirdPartyFirewallFirewallPolicies</code> element contains the firewall policy name and ID.</p>
   */
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[];

  /**
   * @public
   * <p>The value that you will use for <code>NextToken</code> in the next <code>ListThirdPartyFirewallFirewallPolicies</code> request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID to add as an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. For more information about Organizations, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.</p>
   */
  AdminAccount: string | undefined;

  /**
   * @public
   * <p>Configures the resources that the specified Firewall Manager administrator can manage. As a best practice, set the administrative scope according to the principles of least privilege. Only grant the administrator the specific resources or permissions that they need to perform the duties of their role.</p>
   */
  AdminScope?: AdminScope;
}

/**
 * @public
 */
export interface PutAppsListRequest {
  /**
   * @public
   * <p>The details of the Firewall Manager applications list to be created.</p>
   */
  AppsList: AppsListData | undefined;

  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutAppsListResponse {
  /**
   * @public
   * <p>The details of the Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

/**
 * @public
 */
export interface PutNotificationChannelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from
   *       Firewall Manager.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record
   *       Firewall Manager activity. </p>
   */
  SnsRoleName: string | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * @public
   * <p>The details of the Firewall Manager policy to be created.</p>
   */
  Policy: Policy | undefined;

  /**
   * @public
   * <p>The tags to add to the Amazon Web Services resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutPolicyResponse {
  /**
   * @public
   * <p>The details of the Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;
}

/**
 * @public
 */
export interface PutProtocolsListRequest {
  /**
   * @public
   * <p>The details of the Firewall Manager protocols list to be created.</p>
   */
  ProtocolsList: ProtocolsListData | undefined;

  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutProtocolsListResponse {
  /**
   * @public
   * <p>The details of the Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the protocols list.</p>
   */
  ProtocolsListArn?: string;
}

/**
 * @public
 */
export interface PutResourceSetRequest {
  /**
   * @public
   * <p>Details about the resource set to be created or updated.></p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * @public
   * <p>Retrieves the tags associated with the specified resource set. Tags are key:value pairs that
   *          you can use to categorize and manage your resources, for purposes like billing. For
   *          example, you might set the tag key to "customer" and the value to the customer name or ID.
   *          You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PutResourceSetResponse {
  /**
   * @public
   * <p>Details about the resource set.</p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   */
  ResourceSetArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove from the resource. </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
