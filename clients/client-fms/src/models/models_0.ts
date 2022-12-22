// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { FMSServiceException as __BaseException } from "./FMSServiceException";

export enum AccountRoleStatus {
  Creating = "CREATING",
  Deleted = "DELETED",
  Deleting = "DELETING",
  PendingDeletion = "PENDING_DELETION",
  Ready = "READY",
}

/**
 * <p>Describes a remediation action target.</p>
 */
export interface ActionTarget {
  /**
   * <p>The ID of the remediation target.</p>
   */
  ResourceId?: string;

  /**
   * <p>A description of the remediation action target.</p>
   */
  Description?: string;
}

/**
 * <p>An individual Firewall Manager application.</p>
 */
export interface App {
  /**
   * <p>The application's name.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The IP protocol name or number. The name can be one of <code>tcp</code>, <code>udp</code>, or <code>icmp</code>. For information on possible numbers, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>The application's port number, for example <code>80</code>.</p>
   */
  Port: number | undefined;
}

/**
 * <p>An Firewall Manager applications list.</p>
 */
export interface AppsListData {
  /**
   * <p>The ID of the Firewall Manager applications list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the Firewall Manager applications list.</p>
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * <p>The time that the Firewall Manager applications list was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time that the Firewall Manager applications list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>An array of applications in the Firewall Manager applications list.</p>
   */
  AppsList: App[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding <code>App</code> object arrays.</p>
   */
  PreviousAppsList?: Record<string, App[]>;
}

/**
 * <p>Details of the Firewall Manager applications list.</p>
 */
export interface AppsListDataSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  ListArn?: string;

  /**
   * <p>The ID of the applications list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the applications list.</p>
   */
  ListName?: string;

  /**
   * <p>An array of <code>App</code> objects in the Firewall Manager applications list.</p>
   */
  AppsList?: App[];
}

export interface AssociateAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID to associate with Firewall Manager as the Firewall Manager
   *       administrator account. This must be an Organizations member account.
   *         For more information about Organizations, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.  </p>
   */
  AdminAccount: string | undefined;
}

/**
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

export enum ThirdPartyFirewall {
  FORTIGATE_CLOUD_NATIVE_FIREWALL = "FORTIGATE_CLOUD_NATIVE_FIREWALL",
  PALO_ALTO_NETWORKS_CLOUD_NGFW = "PALO_ALTO_NETWORKS_CLOUD_NGFW",
}

export interface AssociateThirdPartyFirewallRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | string | undefined;
}

export enum ThirdPartyFirewallAssociationStatus {
  NOT_EXIST = "NOT_EXIST",
  OFFBOARDING = "OFFBOARDING",
  OFFBOARD_COMPLETE = "OFFBOARD_COMPLETE",
  ONBOARDING = "ONBOARDING",
  ONBOARD_COMPLETE = "ONBOARD_COMPLETE",
}

export interface AssociateThirdPartyFirewallResponse {
  /**
   * <p>The current status for setting a Firewall Manager policy administrator's account as an administrator of the third-party firewall tenant.</p>
   *         <ul>
   *             <li>
   *               <p>
   *                   <code>ONBOARDING</code> - The Firewall Manager policy administrator is being designated as a tenant administrator.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>ONBOARD_COMPLETE</code> - The Firewall Manager policy administrator is designated as a tenant administrator.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>OFFBOARDING</code> - The Firewall Manager policy administrator is being removed as a tenant administrator.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>OFFBOARD_COMPLETE</code> - The Firewall Manager policy administrator has been removed as a tenant administrator.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>NOT_EXIST</code> - The Firewall Manager policy administrator doesn't exist as a tenant administrator.</p>
   *            </li>
   *          </ul>
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | string;
}

/**
 * <p>Violation detail for network interfaces associated with an EC2 instance.</p>
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * <p>The resource ID of the network interface.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>List of security groups that violate the rules specified in the primary security group of the Firewall Manager policy.</p>
   */
  ViolatingSecurityGroups?: string[];
}

/**
 * <p>Violation detail for an EC2 instance resource.</p>
 */
export interface AwsEc2InstanceViolation {
  /**
   * <p>The resource ID of the EC2 instance.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>Violation detail for network interfaces associated with the EC2 instance.</p>
   */
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
}

export interface BatchAssociateResourceRequest {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The uniform resource identifiers (URIs) of resources that should be associated to the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
   */
  Items: string[] | undefined;
}

export enum FailedItemReason {
  NotValidAccountId = "NOT_VALID_ACCOUNT_ID",
  NotValidArn = "NOT_VALID_ARN",
  NotValidPartition = "NOT_VALID_PARTITION",
  NotValidRegion = "NOT_VALID_REGION",
  NotValidResourceType = "NOT_VALID_RESOURCE_TYPE",
  NotValidService = "NOT_VALID_SERVICE",
}

/**
 * <p>Details of a resource that failed when trying to update it's association to a resource set.</p>
 */
export interface FailedItem {
  /**
   * <p>The univeral resource indicator (URI) of the resource that failed.</p>
   */
  URI?: string;

  /**
   * <p>The reason the resource's association could not be updated.</p>
   */
  Reason?: FailedItemReason | string;
}

export interface BatchAssociateResourceResponse {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The resources that failed to associate to the resource set.</p>
   */
  FailedItems: FailedItem[] | undefined;
}

export interface BatchDisassociateResourceRequest {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The uniform resource identifiers (URI) of resources that should be disassociated from the resource set. The URIs must be Amazon Resource Names (ARNs).</p>
   */
  Items: string[] | undefined;
}

export interface BatchDisassociateResourceResponse {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  ResourceSetIdentifier: string | undefined;

  /**
   * <p>The resources that failed to disassociate from the resource set.</p>
   */
  FailedItems: FailedItem[] | undefined;
}

export interface DeleteAppsListRequest {
  /**
   * <p>The ID of the applications list that you want to delete. You can retrieve this ID from
   *       <code>PutAppsList</code>, <code>ListAppsLists</code>, and <code>GetAppsList</code>.</p>
   */
  ListId: string | undefined;
}

export interface DeleteNotificationChannelRequest {}

export interface DeletePolicyRequest {
  /**
   * <p>The ID of the policy that you want to delete. You can retrieve this ID from
   *         <code>PutPolicy</code> and <code>ListPolicies</code>.</p>
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
   *          <p>After the cleanup, in-scope resources are no longer protected by web ACLs in this policy.
   *       Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you
   *       create and accounts that you associate with the policy. When creating the policy, if you
   *       specify that only resources in specific accounts or with specific tags are in scope of the
   *       policy, those accounts and resources are handled by the policy. All others are out of scope.
   *       If you don't specify tags or accounts, all resources are in scope. </p>
   */
  DeleteAllPolicyResources?: boolean;
}

export interface DeleteProtocolsListRequest {
  /**
   * <p>The ID of the protocols list that you want to delete. You can retrieve this ID from
   *       <code>PutProtocolsList</code>, <code>ListProtocolsLists</code>, and <code>GetProtocolsLost</code>.</p>
   */
  ListId: string | undefined;
}

export interface DeleteResourceSetRequest {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  Identifier: string | undefined;
}

export interface DisassociateAdminAccountRequest {}

export interface DisassociateThirdPartyFirewallRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | string | undefined;
}

export interface DisassociateThirdPartyFirewallResponse {
  /**
   * <p>The current status for the disassociation of a Firewall Manager administrators account with a third-party firewall.</p>
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | string;
}

export interface GetAdminAccountRequest {}

export interface GetAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account that is set as the Firewall Manager administrator.</p>
   */
  AdminAccount?: string;

  /**
   * <p>The status of the Amazon Web Services account that you set as the Firewall Manager
   *       administrator.</p>
   */
  RoleStatus?: AccountRoleStatus | string;
}

export interface GetAppsListRequest {
  /**
   * <p>The ID of the Firewall Manager applications list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

export interface GetAppsListResponse {
  /**
   * <p>Information about the specified Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

export interface GetComplianceDetailRequest {
  /**
   * <p>The ID of the policy that you want to get the details for. <code>PolicyId</code> is
   *       returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the resources that you want to get the details for.</p>
   */
  MemberAccount: string | undefined;
}

export enum DependentServiceName {
  AWSConfig = "AWSCONFIG",
  AWSShieldAdvanced = "AWSSHIELD_ADVANCED",
  AWSVirtualPrivateCloud = "AWSVPC",
  AWSWAF = "AWSWAF",
}

export enum ViolationReason {
  BlackHoleRouteDetected = "BLACK_HOLE_ROUTE_DETECTED",
  BlackHoleRouteDetectedInFirewallSubnet = "BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET",
  FMSCreatedSecurityGroupEdited = "FMS_CREATED_SECURITY_GROUP_EDITED",
  FirewallSubnetIsOutOfScope = "FIREWALL_SUBNET_IS_OUT_OF_SCOPE",
  FirewallSubnetMissingExpectedRoute = "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE",
  FirewallSubnetMissingVPCEndpoint = "FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT",
  InternetGatewayMissingExpectedRoute = "INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE",
  InternetTrafficNotInspected = "INTERNET_TRAFFIC_NOT_INSPECTED",
  InvalidRouteConfiguration = "INVALID_ROUTE_CONFIGURATION",
  MissingExpectedRouteTable = "MISSING_EXPECTED_ROUTE_TABLE",
  MissingFirewall = "MISSING_FIREWALL",
  MissingFirewallSubnetInAZ = "MISSING_FIREWALL_SUBNET_IN_AZ",
  MissingTargetGateway = "MISSING_TARGET_GATEWAY",
  NetworkFirewallPolicyModified = "NETWORK_FIREWALL_POLICY_MODIFIED",
  ResourceIncorrectWebAcl = "RESOURCE_INCORRECT_WEB_ACL",
  ResourceMissingDnsFirewall = "RESOURCE_MISSING_DNS_FIREWALL",
  ResourceMissingSecurityGroup = "RESOURCE_MISSING_SECURITY_GROUP",
  ResourceMissingShieldProtection = "RESOURCE_MISSING_SHIELD_PROTECTION",
  ResourceMissingWebAcl = "RESOURCE_MISSING_WEB_ACL",
  ResourceMissingWebaclOrShieldProtection = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION",
  ResourceViolatesAuditSecurityGroup = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP",
  RouteHasOutOfScopeEndpoint = "ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT",
  SecurityGroupRedundant = "SECURITY_GROUP_REDUNDANT",
  SecurityGroupUnused = "SECURITY_GROUP_UNUSED",
  TrafficInspectionCrossesAZBoundary = "TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY",
  UnexpectedFirewallRoutes = "UNEXPECTED_FIREWALL_ROUTES",
  UnexpectedTargetGatewayRoutes = "UNEXPECTED_TARGET_GATEWAY_ROUTES",
  WebAclMissingRuleGroup = "WEB_ACL_MISSING_RULE_GROUP",
}

/**
 * <p>Details of the resource that is not protected by the policy.</p>
 */
export interface ComplianceViolator {
  /**
   * <p>The resource ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The reason that the resource is not protected by the policy.</p>
   */
  ViolationReason?: ViolationReason | string;

  /**
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>. For example:
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>,
   *         <code>AWS::CloudFront::Distribution</code>, or
   *         <code>AWS::NetworkFirewall::FirewallPolicy</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>Metadata about the resource that doesn't comply with the policy scope.</p>
   */
  Metadata?: Record<string, string>;
}

/**
 * <p>Describes
 *       the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are
 *       noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 */
export interface PolicyComplianceDetail {
  /**
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  MemberAccount?: string;

  /**
   * <p>An array of resources that aren't protected by the WAF or Shield Advanced policy or
   *       that aren't in compliance with the security group policy.</p>
   */
  Violators?: ComplianceViolator[];

  /**
   * <p>Indicates if over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;

  /**
   * <p>A timestamp that indicates when the returned information should be considered out of
   *       date.</p>
   */
  ExpiredAt?: Date;

  /**
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: Record<string, string>;
}

export interface GetComplianceDetailResponse {
  /**
   * <p>Information about the resources and the policy that you specified in the
   *         <code>GetComplianceDetail</code> request.</p>
   */
  PolicyComplianceDetail?: PolicyComplianceDetail;
}

export interface GetNotificationChannelRequest {}

export interface GetNotificationChannelResponse {
  /**
   * <p>The SNS topic that records Firewall Manager activity. </p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The IAM role that is used by Firewall Manager to record activity to SNS.</p>
   */
  SnsRoleName?: string;
}

export interface GetPolicyRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
   */
  PolicyId: string | undefined;
}

export enum CustomerPolicyScopeIdType {
  ACCOUNT = "ACCOUNT",
  ORG_UNIT = "ORG_UNIT",
}

/**
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
   * <p>The resource tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The resource tag value.</p>
   */
  Value?: string;
}

export enum FirewallDeploymentModel {
  CENTRALIZED = "CENTRALIZED",
  DISTRIBUTED = "DISTRIBUTED",
}

/**
 * <p>Configures the firewall policy deployment model of Network Firewall. For information about
 *          Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example
 *             architectures with routing</a> in the <i>Network Firewall Developer
 *          Guide</i>.</p>
 */
export interface NetworkFirewallPolicy {
  /**
   * <p>Defines the deployment model to use for the firewall policy. To use a distributed model,
   *          set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to <code>NULL</code>.</p>
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | string;
}

/**
 * <p>Configures the deployment model for the third-party firewall.</p>
 */
export interface ThirdPartyFirewallPolicy {
  /**
   * <p>Defines the deployment model to use for the third-party firewall policy.</p>
   */
  FirewallDeploymentModel?: FirewallDeploymentModel | string;
}

/**
 * <p>Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.</p>
 */
export interface PolicyOption {
  /**
   * <p>Defines the deployment model to use for the firewall policy.</p>
   */
  NetworkFirewallPolicy?: NetworkFirewallPolicy;

  /**
   * <p>Defines the policy options for a third-party firewall policy.</p>
   */
  ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
}

export enum SecurityServiceType {
  DNS_FIREWALL = "DNS_FIREWALL",
  IMPORT_NETWORK_FIREWALL = "IMPORT_NETWORK_FIREWALL",
  NETWORK_FIREWALL = "NETWORK_FIREWALL",
  SECURITY_GROUPS_COMMON = "SECURITY_GROUPS_COMMON",
  SECURITY_GROUPS_CONTENT_AUDIT = "SECURITY_GROUPS_CONTENT_AUDIT",
  SECURITY_GROUPS_USAGE_AUDIT = "SECURITY_GROUPS_USAGE_AUDIT",
  SHIELD_ADVANCED = "SHIELD_ADVANCED",
  THIRD_PARTY_FIREWALL = "THIRD_PARTY_FIREWALL",
  WAF = "WAF",
  WAFV2 = "WAFV2",
}

/**
 * <p>Details about the security service that is being used to protect the resources.</p>
 */
export interface SecurityServicePolicyData {
  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy. For security group policies, Firewall Manager supports one security group for
   *       each common policy and for each content audit policy. This is an adjustable limit that you can
   *       increase by contacting Amazon Web Services Support.</p>
   */
  Type: SecurityServiceType | string | undefined;

  /**
   * <p>Details about the service that are specific to the service type, in JSON format. </p>
   *          <ul>
   *             <li>
   *                <p>Example: <code>DNS_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10}],\"postProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911}]}"</code>
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
   *                   <code>"{\"type\":\"NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":{\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}},\"firewallDeploymentModel\":{\"centralizedFirewallDeploymentModel\":{\"centralizedFirewallOrchestrationConfig\":{\"inspectionVpcIds\":[{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"}],\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"allowedIPV4CidrList\":[]}}}}"</code>
   *                </p>
   *                <p> To use the centralized deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                 <code>CENTRALIZED</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               automatic Availability Zone configuration</p>
   *                <p>
   *                   <code>
   *                 "{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"OFF\"},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"
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
   *                 "{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"]},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\": \"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"
   *               </code>
   *                </p>
   *                <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code> - Distributed deployment model with
   *               custom Availability Zone configuration</p>
   *                <p>
   *                   <code>"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\", \"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{ \"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[ \"10.0.0.0/28\"]}]} },\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"OFF\",\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"
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
   *                   <code>"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"],\"routeManagementConfig\":{\"allowCrossAZTrafficIfNoEndpoint\":true}},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"
   *               </code>
   *                </p>
   *                <p>To use the distributed deployment model, you must set <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PolicyOption.html">PolicyOption</a> to
   *                  <code>NULL</code>. </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>THIRD_PARTY_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"{
   *               "type":"THIRD_PARTY_FIREWALL",
   *               "thirdPartyFirewall":"PALO_ALTO_NETWORKS_CLOUD_NGFW",
   *               "thirdPartyFirewallConfig":{
   *                 "thirdPartyFirewallPolicyList":["global-1"]
   *               },
   * 	          "firewallDeploymentModel":{
   *                 "distributedFirewallDeploymentModel":{
   *                   "distributedFirewallOrchestrationConfig":{
   *                     "firewallCreationConfig":{
   *                       "endpointLocation":{
   *                         "availabilityZoneConfigList":[
   *                           {
   *                             "availabilityZoneName":"${AvailabilityZone}"
   *                           }
   *                         ]
   *                       }
   *                     },
   *                     "allowedIPV4CidrList":[
   *                     ]
   *                   }
   *                 }
   *               }
   *             }"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false,
   *                  \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[{\"id\":\"
   *                  sg-000e55995d61a06bd\"}]}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code> - Security group tag distribution
   *            </p>
   *                <p>
   *                   <code>""{\"type\":\"SECURITY_GROUPS_COMMON\",\"securityGroups\":[{\"id\":\"sg-000e55995d61a06bd\"}],\"revertManualSecurityGroupChanges\":true,\"exclusiveResourceSecurityGroupManagement\":false,\"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":false,\"enableTagDistribution\":true}""</code>
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
   *                   <code>"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false,
   *                  \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[{\"id\":\"
   *                  sg-000e55995d61a06bd\"}]}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_CONTENT_AUDIT</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\"sg-000e55995d61a06bd\"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"</code>
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
   *                   <code>"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specification for <code>SHIELD_ADVANCED</code> for Amazon CloudFront distributions </p>
   *                <p>
   *                   <code>"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\":
   *                  {\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\",
   *                  \"automaticResponseAction\":\"BLOCK|COUNT\"},
   *                  \"overrideCustomerWebaclClassic\":true|false}"</code>
   *                </p>
   *                <p>For example:
   *                  <code>"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\":
   *                  {\"automaticResponseStatus\":\"ENABLED\",
   *                  \"automaticResponseAction\":\"COUNT\"}}"</code>
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
   *                <p>Example: <code>WAFV2</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAmazonIpReputationList\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"</code>
   *                </p>
   *                <p>In the <code>loggingConfiguration</code>, you can specify one
   *                  <code>logDestinationConfigs</code>, you can optionally provide up to 20
   *                  <code>redactedFields</code>, and the <code>RedactedFieldType</code> must be one of
   *                  <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or
   *                  <code>METHOD</code>.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code> -  Firewall Manager support for WAF managed rule group versioning
   *           </p>
   *                <p>
   *                   <code>"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"versionEnabled\":true,\"version\":\"Version_2.0\",\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesCommonRuleSet\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"</code>
   *                </p>
   *                <p>
   *             To use a specific version of a WAF managed rule group in your Firewall Manager policy, you must set <code>versionEnabled</code> to <code>true</code>, and set <code>version</code> to the version you'd like to use. If you don't set <code>versionEnabled</code> to <code>true</code>, or if you omit <code>versionEnabled</code>, then Firewall Manager uses the default version of the WAF managed rule group.
   *           </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAF Classic</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\": \"WAF\", \"ruleGroups\":
   *                  [{\"id\":\"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\":
   *                  \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ManagedServiceData?: string;

  /**
   * <p>Contains the Network Firewall firewall policy options to configure a centralized deployment
   *          model.</p>
   */
  PolicyOption?: PolicyOption;
}

/**
 * <p>An Firewall Manager policy.</p>
 */
export interface Policy {
  /**
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the Firewall Manager policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code>
   *       request, the <code>PolicyUpdateToken</code> in the request must match the
   *         <code>PolicyUpdateToken</code> of the current policy version. To get the
   *         <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code>
   *       request.</p>
   */
  PolicyUpdateToken?: string;

  /**
   * <p>Details about the security service that is being used to protect the resources.</p>
   */
  SecurityServicePolicyData: SecurityServicePolicyData | undefined;

  /**
   * <p>The type of resource protected by or in scope of the policy. This is in the format shown
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a>.
   *                     To apply this policy to multiple resource types, specify a resource type of <code>ResourceTypeList</code> and then specify the resource types in a <code>ResourceTypeList</code>.</p>
   *                 <p>For WAF and Shield Advanced, resource types include
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
   * <p>An array of <code>ResourceType</code> objects. Use this only to specify multiple resource types. To specify a single resource type, use <code>ResourceType</code>.</p>
   */
  ResourceTypeList?: string[];

  /**
   * <p>An array of <code>ResourceTag</code> objects.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * <p>If set to <code>True</code>, resources with the tags that are specified in the
   *         <code>ResourceTag</code> array are not in scope of the policy. If set to <code>False</code>,
   *       and the <code>ResourceTag</code> array is not null, only resources with the specified tags are
   *       in scope of the policy.</p>
   */
  ExcludeResourceTags: boolean | undefined;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled: boolean | undefined;

  /**
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *        that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *        from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   */
  DeleteUnusedFMManagedResources?: boolean;

  /**
   * <p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to include in the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *               <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager
   *           applies the policy to all accounts specified by the <code>IncludeMap</code>, and
   *           does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager
   *             applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p>
   *          <p>You can specify account IDs, OUs, or a combination: </p>
   *          <ul>
   *             <li>
   *                <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map:
   *       <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map:
   *   <code>{“ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map:
   *       <code>{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p>
   *             </li>
   *          </ul>
   */
  IncludeMap?: Record<string, string[]>;

  /**
   * <p>Specifies the Amazon Web Services account IDs and Organizations organizational units (OUs) to exclude from the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *               <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, Firewall Manager
   *           applies the policy to all accounts specified by the <code>IncludeMap</code>, and
   *           does not evaluate any <code>ExcludeMap</code> specifications. If you do not specify an <code>IncludeMap</code>, then Firewall Manager
   *             applies the policy to all accounts except for those specified by the <code>ExcludeMap</code>.</p>
   *          <p>You can specify account IDs, OUs, or a combination: </p>
   *          <ul>
   *             <li>
   *                <p>Specify account IDs by setting the key to <code>ACCOUNT</code>. For example, the following is a valid map:
   *       <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify OUs by setting the key to <code>ORG_UNIT</code>. For example, the following is a valid map:
   *   <code>{“ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map:
   *       <code>{“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}</code>.</p>
   *             </li>
   *          </ul>
   */
  ExcludeMap?: Record<string, string[]>;

  /**
   * <p>The unique identifiers of the resource sets used by the policy.</p>
   */
  ResourceSetIds?: string[];

  /**
   * <p>The definition of the Network Firewall firewall policy.</p>
   */
  PolicyDescription?: string;
}

export interface GetPolicyResponse {
  /**
   * <p>Information about the specified Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;
}

/**
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

export interface GetProtectionStatusRequest {
  /**
   * <p>The ID of the policy for which you want to get the attack information.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that is in scope of the policy that you want to get the details
   *          for.</p>
   */
  MemberAccountId?: string;

  /**
   * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *           request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *          request syntax listing indicates a <code>number</code> type because the default used by Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  EndTime?: Date;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify
   *          for <code>MaxResults</code>, Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of
   *          objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code>
   *          from the previous response to get information about another batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of objects that you want Firewall Manager to return for this request. If you have more
   *         objects than the number that you specify for <code>MaxResults</code>, the response includes a
   *          <code>NextToken</code> value that you can use to get another batch of objects.</p>
   */
  MaxResults?: number;
}

export interface GetProtectionStatusResponse {
  /**
   * <p>The ID of the Firewall Manager administrator account for this policy.</p>
   */
  AdminAccountId?: string;

  /**
   * <p>The service type that is protected by the policy. Currently, this is always
   *             <code>SHIELD_ADVANCED</code>.</p>
   */
  ServiceType?: SecurityServiceType | string;

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
   */
  Data?: string;

  /**
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

export interface GetProtocolsListRequest {
  /**
   * <p>The ID of the Firewall Manager protocols list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

/**
 * <p>An Firewall Manager protocols list.</p>
 */
export interface ProtocolsListData {
  /**
   * <p>The ID of the Firewall Manager protocols list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the Firewall Manager protocols list.</p>
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * <p>The time that the Firewall Manager protocols list was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time that the Firewall Manager protocols list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   */
  ProtocolsList: string[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding protocol arrays.</p>
   */
  PreviousProtocolsList?: Record<string, string[]>;
}

export interface GetProtocolsListResponse {
  /**
   * <p>Information about the specified Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   */
  ProtocolsListArn?: string;
}

export interface GetResourceSetRequest {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  Identifier: string | undefined;
}

/**
 * <p>A set of resources to include in a policy.</p>
 */
export interface ResourceSet {
  /**
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the resource set.</p>
   */
  Description?: string;

  /**
   * <p>An optional token that you can use for optimistic locking. Firewall Manager returns a token to your requests that access the resource set. The token marks the state of the resource set resource at the time of the request. Update tokens are not allowed when creating a resource set. After creation, each subsequent update call to the resource set requires the update token.
   * </p>
   *          <p>To make an unconditional change to the resource set, omit the token in your update request. Without the token, Firewall Manager performs your updates regardless of whether the resource set has changed since you last retrieved it.</p>
   *          <p>To make a conditional change to the resource set, provide the token in your update request. Firewall Manager uses the token to ensure that the resource set hasn't changed since you last retrieved it. If it has changed, the operation fails with an <code>InvalidTokenException</code>. If this happens, retrieve the resource set again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. </p>
   */
  UpdateToken?: string;

  /**
   * <p>Determines the resources that can be associated to the resource set. Depending on
   *          your setting for max results and the number of resource sets, a single call might not
   *          return the full list.</p>
   */
  ResourceTypeList: string[] | undefined;

  /**
   * <p>The last time that the resource set was changed.</p>
   */
  LastUpdateTime?: Date;
}

export interface GetResourceSetResponse {
  /**
   * <p>Information about the specified resource set.</p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   */
  ResourceSetArn: string | undefined;
}

export interface GetThirdPartyFirewallAssociationStatusRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | string | undefined;
}

export enum MarketplaceSubscriptionOnboardingStatus {
  COMPLETE = "COMPLETE",
  NOT_COMPLETE = "NOT_COMPLETE",
  NO_SUBSCRIPTION = "NO_SUBSCRIPTION",
}

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
   */
  ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus | string;

  /**
   * <p>The status for subscribing to the third-party firewall vendor in the Amazon Web Services Marketplace.</p>
   *         <ul>
   *             <li>
   *               <p>
   *                   <code>NO_SUBSCRIPTION</code> - The Firewall Manager policy administrator isn't subscribed to the third-party firewall service in the Amazon Web Services Marketplace.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>NOT_COMPLETE</code> - The Firewall Manager policy administrator is in the process of subscribing to the third-party firewall service in the Amazon Web Services Marketplace, but doesn't yet have an active subscription.</p>
   *            </li>
   *             <li>
   *               <p>
   *                   <code>COMPLETE</code> - The Firewall Manager policy administrator has an active subscription to the third-party firewall service in the Amazon Web Services Marketplace.</p>
   *            </li>
   *          </ul>
   */
  MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus | string;
}

export interface GetViolationDetailsRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for. This currently only supports security group content audit policies.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that you want the details for.</p>
   */
  MemberAccount: string | undefined;

  /**
   * <p>The ID of the resource that has violations.</p>
   */
  ResourceId: string | undefined;

  /**
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
 * <p>A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  </p>
 */
export interface Tag {
  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.  </p>
   */
  Value: string | undefined;
}

/**
 * <p>The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.</p>
 */
export interface PartialMatch {
  /**
   * <p>The reference rule from the primary security group of the Firewall Manager policy.</p>
   */
  Reference?: string;

  /**
   * <p>The violation reason.</p>
   */
  TargetViolationReasons?: string[];
}

export enum RemediationActionType {
  Modify = "MODIFY",
  Remove = "REMOVE",
}

/**
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface SecurityGroupRuleDescription {
  /**
   * <p>The IPv4 ranges for the security group rule.</p>
   */
  IPV4Range?: string;

  /**
   * <p>The IPv6 ranges for the security group rule.</p>
   */
  IPV6Range?: string;

  /**
   * <p>The ID of the prefix list for the security group rule.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>) or number.</p>
   */
  Protocol?: string;

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of <code>-1</code> indicates all ICMP/ICMPv6 types.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of <code>-1</code> indicates all ICMP/ICMPv6 codes.</p>
   */
  ToPort?: number;
}

/**
 * <p>Remediation option for the rule specified in the <code>ViolationTarget</code>.</p>
 */
export interface SecurityGroupRemediationAction {
  /**
   * <p>The remediation action that will be performed.</p>
   */
  RemediationActionType?: RemediationActionType | string;

  /**
   * <p>Brief description of the action that will be performed.</p>
   */
  Description?: string;

  /**
   * <p>The final state of the rule specified in the <code>ViolationTarget</code> after it is remediated.</p>
   */
  RemediationResult?: SecurityGroupRuleDescription;

  /**
   * <p>Indicates if the current action is the default action.</p>
   */
  IsDefaultAction?: boolean;
}

/**
 * <p>Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.</p>
 */
export interface AwsVPCSecurityGroupViolation {
  /**
   * <p>The security group rule that is being evaluated.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>A description of the security group that violates the policy.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * <p>List of rules specified in the security group of the Firewall Manager policy that partially match the <code>ViolationTarget</code> rule.</p>
   */
  PartialMatches?: PartialMatch[];

  /**
   * <p>Remediation options for the rule specified in the <code>ViolationTarget</code>.</p>
   */
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
}

/**
 * <p>A DNS Firewall rule group that Firewall Manager
 *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
 */
export interface DnsDuplicateRuleGroupViolation {
  /**
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   */
  ViolationTargetDescription?: string;
}

/**
 * <p>The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. </p>
 */
export interface DnsRuleGroupLimitExceededViolation {
  /**
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * <p>A description of the violation that specifies the rule group and VPC.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * <p>The number of rule groups currently associated with the VPC.  </p>
   */
  NumberOfRuleGroupsAlreadyAssociated?: number;
}

/**
 * <p>A rule group that Firewall Manager
 *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
 */
export interface DnsRuleGroupPriorityConflictViolation {
  /**
   * <p>Information about the VPC ID. </p>
   */
  ViolationTarget?: string;

  /**
   * <p>A description of the violation that specifies the VPC and the rule group that's already associated with it.</p>
   */
  ViolationTargetDescription?: string;

  /**
   * <p>The priority setting of the two conflicting rule groups.</p>
   */
  ConflictingPriority?: number;

  /**
   * <p>The ID of the Firewall Manager DNS Firewall policy that was already applied to the VPC.
   *        This policy contains the rule group that's already associated with the VPC. </p>
   */
  ConflictingPolicyId?: string;

  /**
   * <p>The priorities of rule groups that are already associated with the VPC. To retry your operation,
   *        choose priority settings that aren't in this list for the rule groups in your new DNS Firewall policy. </p>
   */
  UnavailablePriorities?: number[];
}

/**
 * <p>Contains details about the firewall subnet that violates the policy scope.</p>
 */
export interface FirewallSubnetIsOutOfScopeViolation {
  /**
   * <p>The ID of the firewall subnet that violates the policy scope.</p>
   */
  FirewallSubnetId?: string;

  /**
   * <p>The VPC ID of the firewall subnet that violates the policy scope.</p>
   */
  VpcId?: string;

  /**
   * <p>The Availability Zone of the firewall subnet that violates the policy scope.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * <p>The Availability Zone ID of the firewall subnet that violates the policy scope.</p>
   */
  SubnetAvailabilityZoneId?: string;

  /**
   * <p>The VPC endpoint ID of the firewall subnet that violates the policy scope.</p>
   */
  VpcEndpointId?: string;
}

/**
 * <p>The violation details for a firewall subnet's VPC endpoint that's deleted or missing.</p>
 */
export interface FirewallSubnetMissingVPCEndpointViolation {
  /**
   * <p>The ID of the firewall that this VPC endpoint is associated with.</p>
   */
  FirewallSubnetId?: string;

  /**
   * <p>The resource ID of the VPC associated with the deleted VPC subnet.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the Availability Zone of the deleted VPC subnet.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * <p>The ID of the Availability Zone of the deleted VPC subnet.</p>
   */
  SubnetAvailabilityZoneId?: string;
}

export enum DestinationType {
  IPV4 = "IPV4",
  IPV6 = "IPV6",
  PrefixList = "PREFIX_LIST",
}

export enum TargetType {
  CarrierGateway = "CARRIER_GATEWAY",
  EgressOnlyInternetGateway = "EGRESS_ONLY_INTERNET_GATEWAY",
  Gateway = "GATEWAY",
  Instance = "INSTANCE",
  LocalGateway = "LOCAL_GATEWAY",
  NatGateway = "NAT_GATEWAY",
  NetworkInterface = "NETWORK_INTERFACE",
  TransitGateway = "TRANSIT_GATEWAY",
  VPCEndpoint = "VPC_ENDPOINT",
  VPCPeeringConnection = "VPC_PEERING_CONNECTION",
}

/**
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * <p>The type of destination for the route.</p>
   */
  DestinationType?: DestinationType | string;

  /**
   * <p>The type of target for the route.</p>
   */
  TargetType?: TargetType | string;

  /**
   * <p>The destination of the route.</p>
   */
  Destination?: string;

  /**
   * <p>The route's target.</p>
   */
  Target?: string;
}

/**
 * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
 */
export interface NetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * <p>The subnet that has an inactive state.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;

  /**
   * <p>Information about the route or routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];
}

/**
 * <p>Information about the expected route in the route table.</p>
 */
export interface ExpectedRoute {
  /**
   * <p>Information about the IPv4 CIDR block.</p>
   */
  IpV4Cidr?: string;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  PrefixListId?: string;

  /**
   * <p>Information about the IPv6 CIDR block.</p>
   */
  IpV6Cidr?: string;

  /**
   * <p>Information about the contributing subnets.</p>
   */
  ContributingSubnets?: string[];

  /**
   * <p>Information about the allowed targets.</p>
   */
  AllowedTargets?: string[];

  /**
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;
}

/**
 * <p>Violation detail for the subnet for which internet traffic that hasn't been inspected.</p>
 */
export interface NetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * <p>The subnet ID.</p>
   */
  SubnetId?: string;

  /**
   * <p>The subnet Availability Zone.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * <p>Information about the route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The route or routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   */
  IsRouteTableUsedInDifferentAZ?: boolean;

  /**
   * <p>Information about the subnet route table for the current firewall.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * <p>The expected endpoint for the current firewall.</p>
   */
  ExpectedFirewallEndpoint?: string;

  /**
   * <p>The firewall subnet ID.</p>
   */
  FirewallSubnetId?: string;

  /**
   * <p>The firewall subnet routes that are expected.</p>
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];

  /**
   * <p>The actual firewall subnet routes.</p>
   */
  ActualFirewallSubnetRoutes?: Route[];

  /**
   * <p>The internet gateway ID.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The current route table for the internet gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * <p>The internet gateway routes that are expected.</p>
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];

  /**
   * <p>The actual internet gateway routes.</p>
   */
  ActualInternetGatewayRoutes?: Route[];

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * <p>Violation detail for the improperly configured subnet route. It's possible there is a missing route table route,
 *       or a configuration that causes traffic to cross an Availability Zone boundary.</p>
 */
export interface NetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * <p>The subnets that are affected.</p>
   */
  AffectedSubnets?: string[];

  /**
   * <p>The route table ID.</p>
   */
  RouteTableId?: string;

  /**
   * <p>Information about whether the route table is used in another Availability Zone.</p>
   */
  IsRouteTableUsedInDifferentAZ?: boolean;

  /**
   * <p>The route that's in violation.</p>
   */
  ViolatingRoute?: Route;

  /**
   * <p>The subnet route table for the current firewall.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * <p>The firewall endpoint that's expected.</p>
   */
  ExpectedFirewallEndpoint?: string;

  /**
   * <p>The actual firewall endpoint.</p>
   */
  ActualFirewallEndpoint?: string;

  /**
   * <p>The expected subnet ID for the firewall.</p>
   */
  ExpectedFirewallSubnetId?: string;

  /**
   * <p>The actual subnet ID for the firewall.</p>
   */
  ActualFirewallSubnetId?: string;

  /**
   * <p>The firewall subnet routes that are expected.</p>
   */
  ExpectedFirewallSubnetRoutes?: ExpectedRoute[];

  /**
   * <p>The actual firewall subnet routes that are expected.</p>
   */
  ActualFirewallSubnetRoutes?: Route[];

  /**
   * <p>The internet gateway ID.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The route table for the current internet gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * <p>The expected routes for the internet gateway.</p>
   */
  ExpectedInternetGatewayRoutes?: ExpectedRoute[];

  /**
   * <p>The actual internet gateway routes.</p>
   */
  ActualInternetGatewayRoutes?: Route[];

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * <p>Violation detail for an expected route missing in Network Firewall.</p>
 */
export interface NetworkFirewallMissingExpectedRoutesViolation {
  /**
   * <p>The target of the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The expected routes.</p>
   */
  ExpectedRoutes?: ExpectedRoute[];

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * <p>Violation detail for Network Firewall for a subnet that's not associated to the expected
 *        Firewall Manager managed route table.</p>
 */
export interface NetworkFirewallMissingExpectedRTViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   */
  CurrentRouteTable?: string;

  /**
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   */
  ExpectedRouteTable?: string;
}

/**
 * <p>Violation detail for Network Firewall for a subnet that doesn't have a
 *        Firewall Manager managed firewall in its VPC. </p>
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The reason the resource has this violation, if one is available. </p>
   */
  TargetViolationReason?: string;
}

/**
 * <p>Violation detail for Network Firewall for an Availability Zone that's
 *        missing the expected Firewall Manager managed subnet.</p>
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a violating subnet.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of a violating subnet. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The reason the resource has this violation, if one is available. </p>
   */
  TargetViolationReason?: string;
}

export enum RuleOrder {
  DEFAULT_ACTION_ORDER = "DEFAULT_ACTION_ORDER",
  STRICT_ORDER = "STRICT_ORDER",
}

/**
 * <p>Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy.</p>
 */
export interface StatefulEngineOptions {
  /**
   * <p>Indicates how to manage the order of stateful rule evaluation for the policy.
   * <code>DEFAULT_ACTION_ORDER</code> is the default behavior. Stateful rules are provided to the rule engine
   * as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more
   * information, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html">Evaluation order for stateful rules</a> in the <i>Network Firewall Developer Guide</i>.</p>
   */
  RuleOrder?: RuleOrder | string;
}

export enum NetworkFirewallOverrideAction {
  DROP_TO_ALERT = "DROP_TO_ALERT",
}

/**
 * <p>The setting that allows the policy owner to change the behavior of the rule group within a policy.</p>
 */
export interface NetworkFirewallStatefulRuleGroupOverride {
  /**
   * <p>The action that changes the rule group from <code>DROP</code> to <code>ALERT</code>. This only applies to managed rule groups.</p>
   */
  Action?: NetworkFirewallOverrideAction | string;
}

/**
 * <p>Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 */
export interface StatefulRuleGroup {
  /**
   * <p>The name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * <p>The resource ID of the rule group.</p>
   */
  ResourceId?: string;

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
   */
  Priority?: number;

  /**
   * <p>The action that allows the policy owner to override the behavior of the rule group within a policy.</p>
   */
  Override?: NetworkFirewallStatefulRuleGroupOverride;
}

/**
 * <p>Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
 */
export interface StatelessRuleGroup {
  /**
   * <p>The name of the rule group.</p>
   */
  RuleGroupName?: string;

  /**
   * <p>The resource ID of the rule group.</p>
   */
  ResourceId?: string;

  /**
   * <p>The priority of the rule group. Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting. </p>
   */
  Priority?: number;
}

/**
 * <p>The definition of the Network Firewall firewall policy.</p>
 */
export interface NetworkFirewallPolicyDescription {
  /**
   * <p>The stateless rule groups that are used in the Network Firewall firewall policy. </p>
   */
  StatelessRuleGroups?: StatelessRuleGroup[];

  /**
   * <p>The actions to take on packets that don't match any of the stateless rule groups. </p>
   */
  StatelessDefaultActions?: string[];

  /**
   * <p>The actions to take on packet fragments that don't match any of the stateless rule groups. </p>
   */
  StatelessFragmentDefaultActions?: string[];

  /**
   * <p>Names of custom actions that are available for use in the stateless default actions settings.</p>
   */
  StatelessCustomActions?: string[];

  /**
   * <p>The stateful rule groups that are used in the Network Firewall firewall policy. </p>
   */
  StatefulRuleGroups?: StatefulRuleGroup[];

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
   */
  StatefulDefaultActions?: string[];

  /**
   * <p>Additional options governing how Network Firewall handles stateful rules. The stateful rule groups
   * that you use in your policy must have stateful rule options settings that are compatible with these
   * settings.</p>
   */
  StatefulEngineOptions?: StatefulEngineOptions;
}

/**
 * <p>Violation detail for Network Firewall for a firewall policy that has a different
 *        <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. </p>
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * <p>The ID of the Network Firewall or VPC resource that's in violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The policy that's currently in use in the individual account. </p>
   */
  CurrentPolicyDescription?: NetworkFirewallPolicyDescription;

  /**
   * <p>The policy that should be in use in the individual account in order to be compliant. </p>
   */
  ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
}

/**
 * <p>Violation detail for an unexpected route that's present in a route table.</p>
 */
export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * <p>The subnet ID for the firewall.</p>
   */
  FirewallSubnetId?: string;

  /**
   * <p>The routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The endpoint of the firewall.</p>
   */
  FirewallEndpoint?: string;

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * <p>Violation detail for an unexpected gateway route that’s present in a route table.</p>
 */
export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * <p>Information about the gateway ID.</p>
   */
  GatewayId?: string;

  /**
   * <p>The routes that are in violation.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * <p>Information about the  route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>Information about the VPC ID.</p>
   */
  VpcId?: string;
}

/**
 * <p>The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.</p>
 */
export interface EC2AssociateRouteTableAction {
  /**
   * <p>A description of the EC2 route table that is associated with the remediation action.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the EC2 route table that is associated with the remediation action.</p>
   */
  RouteTableId: ActionTarget | undefined;

  /**
   * <p>The ID of the subnet for the EC2 route table that is associated with the remediation action.</p>
   */
  SubnetId?: ActionTarget;

  /**
   * <p>The ID of the gateway to be used with the EC2 route table that is associated with the remediation action.</p>
   */
  GatewayId?: ActionTarget;
}

/**
 * <p>An action that copies the EC2 route table for use in remediation.</p>
 */
export interface EC2CopyRouteTableAction {
  /**
   * <p>A description of the copied EC2 route table that is associated with the remediation action.</p>
   */
  Description?: string;

  /**
   * <p>The VPC ID of the copied EC2 route table that is associated with the remediation action.</p>
   */
  VpcId: ActionTarget | undefined;

  /**
   * <p>The ID of the copied EC2 route table that is associated with the remediation action.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the CreateRoute action in Amazon EC2.</p>
 */
export interface EC2CreateRouteAction {
  /**
   * <p>A description of CreateRoute action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * <p>Information about the IPv4 CIDR address block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Information about the ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Information about the IPv6 CIDR block destination.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>Information about the ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: ActionTarget;

  /**
   * <p>Information about the ID of an internet gateway or virtual private gateway attached to your VPC.</p>
   */
  GatewayId?: ActionTarget;

  /**
   * <p>Information about the ID of the route table for the route.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the CreateRouteTable action in Amazon EC2.</p>
 */
export interface EC2CreateRouteTableAction {
  /**
   * <p>A description of the CreateRouteTable action.</p>
   */
  Description?: string;

  /**
   * <p>Information about the ID of a VPC.</p>
   */
  VpcId: ActionTarget | undefined;
}

/**
 * <p>Information about the DeleteRoute action in Amazon EC2.</p>
 */
export interface EC2DeleteRouteAction {
  /**
   * <p>A description of the DeleteRoute action.</p>
   */
  Description?: string;

  /**
   * <p>Information about the IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Information about the IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>Information about the ID of the route table.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the ReplaceRoute action in Amazon EC2.</p>
 */
export interface EC2ReplaceRouteAction {
  /**
   * <p>A description of the ReplaceRoute action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * <p>Information about the IPv4 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>Information about the ID of the prefix list for the route.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Information about the IPv6 CIDR address block used for the destination match. The value that you provide must match the CIDR of an existing route in the table.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>Information about the ID of an internet gateway or virtual private gateway.</p>
   */
  GatewayId?: ActionTarget;

  /**
   * <p>Information about the ID of the route table.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Information about the ReplaceRouteTableAssociation action in Amazon EC2.</p>
 */
export interface EC2ReplaceRouteTableAssociationAction {
  /**
   * <p>A description of the ReplaceRouteTableAssociation action in Amazon EC2.</p>
   */
  Description?: string;

  /**
   * <p>Information about the association ID.</p>
   */
  AssociationId: ActionTarget | undefined;

  /**
   * <p>Information about the ID of the new route table to associate with the subnet.</p>
   */
  RouteTableId: ActionTarget | undefined;
}

/**
 * <p>Contains information about the actions that you can take to remediate scope violations
 *          caused by your policy's <code>FirewallCreationConfig</code>.
 *             <code>FirewallCreationConfig</code> is an optional configuration that you can use to
 *          choose which Availability Zones Firewall Manager creates Network Firewall endpoints in.</p>
 */
export interface FMSPolicyUpdateFirewallCreationConfigAction {
  /**
   * <p>Describes the remedial action.</p>
   */
  Description?: string;

  /**
   * <p>A <code>FirewallCreationConfig</code> that you can copy into your current policy's
   *             <a href="https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_SecurityServicePolicyData.html">SecurityServiceData</a> in order to remedy scope violations.</p>
   */
  FirewallCreationConfig?: string;
}

/**
 * <p>Information about an individual action you can take to remediate a violation.</p>
 */
export interface RemediationAction {
  /**
   * <p>A description of a remediation action.</p>
   */
  Description?: string;

  /**
   * <p>Information about the CreateRoute action in the Amazon EC2 API.</p>
   */
  EC2CreateRouteAction?: EC2CreateRouteAction;

  /**
   * <p>Information about the ReplaceRoute action in the Amazon EC2 API.</p>
   */
  EC2ReplaceRouteAction?: EC2ReplaceRouteAction;

  /**
   * <p>Information about the DeleteRoute action in the Amazon EC2 API.</p>
   */
  EC2DeleteRouteAction?: EC2DeleteRouteAction;

  /**
   * <p>Information about the CopyRouteTable action in the Amazon EC2 API.</p>
   */
  EC2CopyRouteTableAction?: EC2CopyRouteTableAction;

  /**
   * <p>Information about the ReplaceRouteTableAssociation action in the Amazon EC2 API.</p>
   */
  EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction;

  /**
   * <p>Information about the AssociateRouteTable action in the Amazon EC2 API.</p>
   */
  EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction;

  /**
   * <p>Information about the CreateRouteTable action in the Amazon EC2 API.</p>
   */
  EC2CreateRouteTableAction?: EC2CreateRouteTableAction;

  /**
   * <p>The remedial action to take when updating a firewall configuration.</p>
   */
  FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction;
}

/**
 * <p>An ordered list of actions you can take to remediate a violation.</p>
 */
export interface RemediationActionWithOrder {
  /**
   * <p>Information about an action you can take to remediate a violation.</p>
   */
  RemediationAction?: RemediationAction;

  /**
   * <p>The order of the remediation actions in the list.</p>
   */
  Order?: number;
}

/**
 * <p>A list of remediation actions.</p>
 */
export interface PossibleRemediationAction {
  /**
   * <p>A description of the list of remediation actions.</p>
   */
  Description?: string;

  /**
   * <p>The ordered list of remediation actions.</p>
   */
  OrderedRemediationActions: RemediationActionWithOrder[] | undefined;

  /**
   * <p>Information about whether an action is taken by default.</p>
   */
  IsDefaultAction?: boolean;
}

/**
 * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
 */
export interface PossibleRemediationActions {
  /**
   * <p>A description of the possible remediation actions list.</p>
   */
  Description?: string;

  /**
   * <p>Information about the actions.</p>
   */
  Actions?: PossibleRemediationAction[];
}

/**
 * <p>Contains details about the route endpoint that violates the policy scope.</p>
 */
export interface RouteHasOutOfScopeEndpointViolation {
  /**
   * <p>The ID of the subnet associated with the route that violates the policy scope.</p>
   */
  SubnetId?: string;

  /**
   * <p>The VPC ID of the route that violates the policy scope.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The list of routes that violate the route table.</p>
   */
  ViolatingRoutes?: Route[];

  /**
   * <p>The subnet's Availability Zone.</p>
   */
  SubnetAvailabilityZone?: string;

  /**
   * <p>The ID of the subnet's Availability Zone.</p>
   */
  SubnetAvailabilityZoneId?: string;

  /**
   * <p>The route table associated with the current firewall subnet.</p>
   */
  CurrentFirewallSubnetRouteTable?: string;

  /**
   * <p>The ID of the firewall subnet.</p>
   */
  FirewallSubnetId?: string;

  /**
   * <p>The list of firewall subnet routes.</p>
   */
  FirewallSubnetRoutes?: Route[];

  /**
   * <p>The ID of the Internet Gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The current route table associated with the Internet Gateway.</p>
   */
  CurrentInternetGatewayRouteTable?: string;

  /**
   * <p>The routes in the route table associated with the Internet Gateway.</p>
   */
  InternetGatewayRoutes?: Route[];
}

/**
 * <p>The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table.</p>
 */
export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
  /**
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a fireawll subnet that's causing the violation.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of the firewall subnet that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The resource ID of the current route table that's associated with the subnet, if one is available.</p>
   */
  CurrentRouteTable?: string;

  /**
   * <p>The resource ID of the route table that should be associated with the subnet.</p>
   */
  ExpectedRouteTable?: string;
}

/**
 * <p>The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC.</p>
 */
export interface ThirdPartyFirewallMissingFirewallViolation {
  /**
   * <p>The ID of the third-party firewall that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a third-party firewall.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of the third-party firewall that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The reason the resource is causing this violation, if a reason is available.</p>
   */
  TargetViolationReason?: string;
}

/**
 * <p>The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet.</p>
 */
export interface ThirdPartyFirewallMissingSubnetViolation {
  /**
   * <p>The ID of the third-party firewall or VPC resource that's causing the violation.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>The resource ID of the VPC associated with a subnet that's causing the violation.</p>
   */
  VPC?: string;

  /**
   * <p>The Availability Zone of a subnet that's causing the violation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The reason the resource is causing the violation, if a reason is available.</p>
   */
  TargetViolationReason?: string;
}

/**
 * <p>Violation detail based on resource type.</p>
 */
export interface ResourceViolation {
  /**
   * <p>Violation detail for security groups.</p>
   */
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;

  /**
   * <p>Violation detail for a network interface.</p>
   */
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  /**
   * <p>Violation detail for an EC2 instance.</p>
   */
  AwsEc2InstanceViolation?: AwsEc2InstanceViolation;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet has no Firewall Manager
   *         managed firewall in its VPC. </p>
   */
  NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that an Availability Zone is
   *        missing the expected Firewall Manager managed subnet.</p>
   */
  NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a subnet
   *       is not associated with the expected Firewall Manager managed route table. </p>
   */
  NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation;

  /**
   * <p>Violation detail for an Network Firewall policy that indicates that a firewall policy
   *        in an individual account has been modified in a way that makes it noncompliant.
   *        For example, the individual account owner might have deleted a rule group,
   *        changed the priority of a stateless rule group, or changed a policy default action.</p>
   */
  NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;

  /**
   * <p>Violation detail for the subnet for which internet traffic hasn't been inspected.</p>
   */
  NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;

  /**
   * <p>The route configuration is invalid.</p>
   */
  NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;

  /**
   * <p>Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table.</p>
   */
  NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;

  /**
   * <p>There's an unexpected firewall route.</p>
   */
  NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;

  /**
   * <p>There's an unexpected gateway route.</p>
   */
  NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;

  /**
   * <p>Expected routes are missing from Network Firewall.</p>
   */
  NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC has the same priority as a rule group that's already associated. </p>
   */
  DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that a rule group that Firewall Manager
   *        tried to associate with a VPC is already associated with the VPC and can't be associated again. </p>
   */
  DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;

  /**
   * <p>Violation detail for a DNS Firewall policy that indicates that the VPC reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed. </p>
   */
  DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;

  /**
   * <p>A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.</p>
   */
  PossibleRemediationActions?: PossibleRemediationActions;

  /**
   * <p>Contains details about the firewall subnet that violates the policy scope.</p>
   */
  FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation;

  /**
   * <p>Contains details about the route endpoint that violates the policy scope.</p>
   */
  RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation;

  /**
   * <p>The violation details for a third-party firewall that's been deleted.</p>
   */
  ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation;

  /**
   * <p>The violation details for a third-party firewall's subnet that's been deleted.</p>
   */
  ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation;

  /**
   * <p>The violation details for a third-party firewall that has the Firewall Manager managed route table that was associated with the third-party firewall has been deleted.</p>
   */
  ThirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation;

  /**
   * <p>The violation details for a third-party firewall's VPC endpoint subnet that was deleted.</p>
   */
  FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation;
}

/**
 * <p>Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
 */
export interface ViolationDetail {
  /**
   * <p>The ID of the Firewall Manager policy that the violation details were requested for.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Web Services account that the violation details were requested for.</p>
   */
  MemberAccount: string | undefined;

  /**
   * <p>The resource ID that the violation details were requested for.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type that the violation details were requested for.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>List of violations for the requested resource.</p>
   */
  ResourceViolations: ResourceViolation[] | undefined;

  /**
   * <p>The <code>ResourceTag</code> objects associated with the resource.</p>
   */
  ResourceTags?: Tag[];

  /**
   * <p>Brief description for the requested resource.</p>
   */
  ResourceDescription?: string;
}

export interface GetViolationDetailsResponse {
  /**
   * <p>Violation detail for a resource.</p>
   */
  ViolationDetail?: ViolationDetail;
}

export interface ListAppsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

export interface ListAppsListsResponse {
  /**
   * <p>An array of <code>AppsListDataSummary</code> objects.</p>
   */
  AppsLists?: AppsListDataSummary[];

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

export interface ListComplianceStatusRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
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
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want
   *       Firewall Manager to return for this request. If you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>
   */
  MaxResults?: number;
}

export enum PolicyComplianceStatusType {
  Compliant = "COMPLIANT",
  NonCompliant = "NON_COMPLIANT",
}

/**
 * <p>Describes the compliance status for the account. An account is considered noncompliant if
 *       it includes resources that are not protected by the specified policy or that don't comply with
 *       the policy.</p>
 */
export interface EvaluationResult {
  /**
   * <p>Describes an Amazon Web Services account's compliance with the Firewall Manager policy.</p>
   */
  ComplianceStatus?: PolicyComplianceStatusType | string;

  /**
   * <p>The number of resources that are noncompliant with the specified policy. For WAF and
   *       Shield Advanced policies, a resource is considered noncompliant if it is not associated with
   *       the policy. For security group policies, a resource is considered noncompliant if it doesn't
   *       comply with the rules of the policy and remediation is disabled or not possible.</p>
   */
  ViolatorCount?: number;

  /**
   * <p>Indicates that over 100 resources are noncompliant with the Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;
}

/**
 * <p>Indicates whether the account is compliant with the specified policy. An account is
 *       considered noncompliant if it includes resources that are not protected by the policy, for
 *       WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group
 *       policies.</p>
 */
export interface PolicyComplianceStatus {
  /**
   * <p>The Amazon Web Services account that created the Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the Firewall Manager policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The member account ID.</p>
   */
  MemberAccount?: string;

  /**
   * <p>An array of <code>EvaluationResult</code> objects.</p>
   */
  EvaluationResults?: EvaluationResult[];

  /**
   * <p>Timestamp of the last update to the <code>EvaluationResult</code> objects.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>Details about problems with dependent services, such as WAF or Config,
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: Record<string, string>;
}

export interface ListComplianceStatusResponse {
  /**
   * <p>An array of <code>PolicyComplianceStatus</code> objects.</p>
   */
  PolicyComplianceStatusList?: PolicyComplianceStatus[];

  /**
   * <p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you
   *       specified for <code>MaxResults</code> in the request, the response includes a
   *         <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects,
   *       submit another <code>ListComplianceStatus</code> request, and specify the
   *         <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   */
  NextToken?: string;
}

export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The Amazon Web Services account IDs to discover resources in. Only one account is supported per request. The account must be a member of your organization.</p>
   */
  MemberAccountIds: string[] | undefined;

  /**
   * <p>The type of resources to discover.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * <p>A resource in the organization that's available to be associated with a Firewall Manager resource set.</p>
 */
export interface DiscoveredResource {
  /**
   * <p>The universal resource identifier (URI) of the discovered resource.</p>
   */
  URI?: string;

  /**
   * <p>The Amazon Web Services account ID associated with the discovered resource.</p>
   */
  AccountId?: string;

  /**
   * <p>The type of the discovered resource.</p>
   */
  Type?: string;

  /**
   * <p>The name of the discovered resource.</p>
   */
  Name?: string;
}

export interface ListDiscoveredResourcesResponse {
  /**
   * <p>Details of the resources that were discovered.</p>
   */
  Items?: DiscoveredResource[];

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListMemberAccountsRequest {
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the
   *       number that you specify for <code>MaxResults</code>, Firewall Manager returns a
   *         <code>NextToken</code> value in the response that allows you to list another group of IDs.
   *       For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the
   *       value of <code>NextToken</code> from the previous response to get information about another
   *       batch of member account IDs.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of member account IDs that you want Firewall Manager to return
   *       for this request. If you have more IDs than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of member account IDs.</p>
   */
  MaxResults?: number;
}

export interface ListMemberAccountsResponse {
  /**
   * <p>An array of account IDs.</p>
   */
  MemberAccounts?: string[];

  /**
   * <p>If you have more member account IDs than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify
   *       the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
   *       next request.</p>
   */
  NextToken?: string;
}

export interface ListPoliciesRequest {
  /**
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
   * <p>Specifies the number of <code>PolicySummary</code> objects that you want Firewall Manager to return for this request. If you have more <code>PolicySummary</code> objects than
   *       the number that you specify for <code>MaxResults</code>, the response includes a
   *         <code>NextToken</code> value that you can use to get another batch of
   *         <code>PolicySummary</code> objects.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Details of the Firewall Manager policy. </p>
 */
export interface PolicySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The ID of the specified policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the specified policy.</p>
   */
  PolicyName?: string;

  /**
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
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an WAF policy, a Shield Advanced policy, or a security
   *       group policy.</p>
   */
  SecurityServiceType?: SecurityServiceType | string;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled?: boolean;

  /**
   * <p>Indicates whether Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources
   *        that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL
   *        from a protected customer resource when the customer resource leaves policy scope. </p>
   *          <p>By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources. </p>
   *          <p>This option is not available for Shield Advanced or WAF Classic policies.</p>
   */
  DeleteUnusedFMManagedResources?: boolean;
}

export interface ListPoliciesResponse {
  /**
   * <p>An array of <code>PolicySummary</code> objects.</p>
   */
  PolicyList?: PolicySummary[];

  /**
   * <p>If you have more <code>PolicySummary</code> objects than the number that you specified for
   *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
   *       value. To list more <code>PolicySummary</code> objects, submit another
   *         <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the
   *       response in the <code>NextToken</code> value in the next request.</p>
   */
  NextToken?: string;
}

export interface ListProtocolsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *             objects are available, in the response, Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

/**
 * <p>Details of the Firewall Manager protocols list.</p>
 */
export interface ProtocolsListDataSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   */
  ListArn?: string;

  /**
   * <p>The ID of the specified protocols list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the specified protocols list.</p>
   */
  ListName?: string;

  /**
   * <p>An array of protocols in the Firewall Manager protocols list.</p>
   */
  ProtocolsList?: string[];
}

export interface ListProtocolsListsResponse {
  /**
   * <p>An array of <code>ProtocolsListDataSummary</code> objects.</p>
   */
  ProtocolsLists?: ProtocolsListDataSummary[];

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

export interface ListResourceSetResourcesRequest {
  /**
   * <p>A unique identifier for the resource set, used in a TODO to refer to the resource set.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details of a resource that is associated to an Firewall Manager resource set.</p>
 */
export interface Resource {
  /**
   * <p>The resource's universal resource indicator (URI).</p>
   */
  URI: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the associated resource belongs to.</p>
   */
  AccountId?: string;
}

export interface ListResourceSetResourcesResponse {
  /**
   * <p>An array of the associated resources' uniform resource identifiers (URI).</p>
   */
  Items: Resource[] | undefined;

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListResourceSetsRequest {
  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want Firewall Manager to return for this request. If more
   *           objects are available, in the response, Firewall Manager provides a
   *          <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Summarizes the resource sets used in a policy.</p>
 */
export interface ResourceSetSummary {
  /**
   * <p>A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * <p>The descriptive name of the resource set. You can't change the name of a resource set after you create it.</p>
   */
  Name?: string;

  /**
   * <p>A description of the resource set.</p>
   */
  Description?: string;

  /**
   * <p>The last time that the resource set was changed.</p>
   */
  LastUpdateTime?: Date;
}

export interface ListResourceSetsResponse {
  /**
   * <p>An array of <code>ResourceSetSummary</code> objects.</p>
   */
  ResourceSets?: ResourceSetSummary[];

  /**
   * <p>When you request a list of objects with a <code>MaxResults</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the maximum you requested, Firewall Manager returns a <code>NextToken</code>
   *          value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export interface ListThirdPartyFirewallFirewallPoliciesRequest {
  /**
   * <p>The name of the third-party firewall vendor.</p>
   */
  ThirdPartyFirewall: ThirdPartyFirewall | string | undefined;

  /**
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
   * <p>The maximum number of third-party firewall policies that you want Firewall Manager to return. If
   * the specified third-party firewall vendor is associated with more than <code>MaxResults</code> firewall policies, the response includes a
   * <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first third-party firewall policies
   * that Firewall Manager will return if you submit another request.</p>
   */
  MaxResults: number | undefined;
}

/**
 * <p>Configures the third-party firewall's firewall policy.</p>
 */
export interface ThirdPartyFirewallFirewallPolicy {
  /**
   * <p>The ID of the specified firewall policy.</p>
   */
  FirewallPolicyId?: string;

  /**
   * <p>The name of the specified firewall policy.</p>
   */
  FirewallPolicyName?: string;
}

export interface ListThirdPartyFirewallFirewallPoliciesResponse {
  /**
   * <p>A list that contains one <code>ThirdPartyFirewallFirewallPolicies</code> element for each third-party firewall policies that the specified
   * third-party firewall vendor is associated with. Each <code>ThirdPartyFirewallFirewallPolicies</code> element contains the firewall policy name and ID.</p>
   */
  ThirdPartyFirewallFirewallPolicies?: ThirdPartyFirewallFirewallPolicy[];

  /**
   * <p>The value that you will use for <code>NextToken</code> in the next <code>ListThirdPartyFirewallFirewallPolicies</code> request.</p>
   */
  NextToken?: string;
}

export interface PutAppsListRequest {
  /**
   * <p>The details of the Firewall Manager applications list to be created.</p>
   */
  AppsList: AppsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export interface PutAppsListResponse {
  /**
   * <p>The details of the Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

export interface PutNotificationChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from
   *       Firewall Manager.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record
   *       Firewall Manager activity. </p>
   */
  SnsRoleName: string | undefined;
}

export interface PutPolicyRequest {
  /**
   * <p>The details of the Firewall Manager policy to be created.</p>
   */
  Policy: Policy | undefined;

  /**
   * <p>The tags to add to the Amazon Web Services resource.</p>
   */
  TagList?: Tag[];
}

export interface PutPolicyResponse {
  /**
   * <p>The details of the Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;
}

export interface PutProtocolsListRequest {
  /**
   * <p>The details of the Firewall Manager protocols list to be created.</p>
   */
  ProtocolsList: ProtocolsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export interface PutProtocolsListResponse {
  /**
   * <p>The details of the Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the protocols list.</p>
   */
  ProtocolsListArn?: string;
}

export interface PutResourceSetRequest {
  /**
   * <p>Details about the resource set to be created or updated.></p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>Retrieves the tags associated with the specified resource set. Tags are key:value pairs that
   *          you can use to categorize and manage your resources, for purposes like billing. For
   *          example, you might set the tag key to "customer" and the value to the customer name or ID.
   *          You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   */
  TagList?: Tag[];
}

export interface PutResourceSetResponse {
  /**
   * <p>Details about the resource set.</p>
   */
  ResourceSet: ResourceSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource set.</p>
   */
  ResourceSetArn: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  TagList: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource. </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const ActionTargetFilterSensitiveLog = (obj: ActionTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppFilterSensitiveLog = (obj: App): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppsListDataFilterSensitiveLog = (obj: AppsListData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppsListDataSummaryFilterSensitiveLog = (obj: AppsListDataSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAdminAccountRequestFilterSensitiveLog = (obj: AssociateAdminAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateThirdPartyFirewallRequestFilterSensitiveLog = (obj: AssociateThirdPartyFirewallRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateThirdPartyFirewallResponseFilterSensitiveLog = (
  obj: AssociateThirdPartyFirewallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsEc2NetworkInterfaceViolationFilterSensitiveLog = (obj: AwsEc2NetworkInterfaceViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsEc2InstanceViolationFilterSensitiveLog = (obj: AwsEc2InstanceViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateResourceRequestFilterSensitiveLog = (obj: BatchAssociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedItemFilterSensitiveLog = (obj: FailedItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateResourceResponseFilterSensitiveLog = (obj: BatchAssociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateResourceRequestFilterSensitiveLog = (obj: BatchDisassociateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateResourceResponseFilterSensitiveLog = (obj: BatchDisassociateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppsListRequestFilterSensitiveLog = (obj: DeleteAppsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotificationChannelRequestFilterSensitiveLog = (obj: DeleteNotificationChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePolicyRequestFilterSensitiveLog = (obj: DeletePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProtocolsListRequestFilterSensitiveLog = (obj: DeleteProtocolsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceSetRequestFilterSensitiveLog = (obj: DeleteResourceSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAdminAccountRequestFilterSensitiveLog = (obj: DisassociateAdminAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateThirdPartyFirewallRequestFilterSensitiveLog = (
  obj: DisassociateThirdPartyFirewallRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateThirdPartyFirewallResponseFilterSensitiveLog = (
  obj: DisassociateThirdPartyFirewallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdminAccountRequestFilterSensitiveLog = (obj: GetAdminAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdminAccountResponseFilterSensitiveLog = (obj: GetAdminAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppsListRequestFilterSensitiveLog = (obj: GetAppsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppsListResponseFilterSensitiveLog = (obj: GetAppsListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComplianceDetailRequestFilterSensitiveLog = (obj: GetComplianceDetailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComplianceViolatorFilterSensitiveLog = (obj: ComplianceViolator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyComplianceDetailFilterSensitiveLog = (obj: PolicyComplianceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComplianceDetailResponseFilterSensitiveLog = (obj: GetComplianceDetailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotificationChannelRequestFilterSensitiveLog = (obj: GetNotificationChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotificationChannelResponseFilterSensitiveLog = (obj: GetNotificationChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPolicyRequestFilterSensitiveLog = (obj: GetPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceTagFilterSensitiveLog = (obj: ResourceTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallPolicyFilterSensitiveLog = (obj: NetworkFirewallPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyFirewallPolicyFilterSensitiveLog = (obj: ThirdPartyFirewallPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyOptionFilterSensitiveLog = (obj: PolicyOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityServicePolicyDataFilterSensitiveLog = (obj: SecurityServicePolicyData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyFilterSensitiveLog = (obj: Policy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPolicyResponseFilterSensitiveLog = (obj: GetPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProtectionStatusRequestFilterSensitiveLog = (obj: GetProtectionStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProtectionStatusResponseFilterSensitiveLog = (obj: GetProtectionStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProtocolsListRequestFilterSensitiveLog = (obj: GetProtocolsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtocolsListDataFilterSensitiveLog = (obj: ProtocolsListData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProtocolsListResponseFilterSensitiveLog = (obj: GetProtocolsListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceSetRequestFilterSensitiveLog = (obj: GetResourceSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSetFilterSensitiveLog = (obj: ResourceSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourceSetResponseFilterSensitiveLog = (obj: GetResourceSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThirdPartyFirewallAssociationStatusRequestFilterSensitiveLog = (
  obj: GetThirdPartyFirewallAssociationStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetThirdPartyFirewallAssociationStatusResponseFilterSensitiveLog = (
  obj: GetThirdPartyFirewallAssociationStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetViolationDetailsRequestFilterSensitiveLog = (obj: GetViolationDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PartialMatchFilterSensitiveLog = (obj: PartialMatch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRuleDescriptionFilterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupRemediationActionFilterSensitiveLog = (obj: SecurityGroupRemediationAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsVPCSecurityGroupViolationFilterSensitiveLog = (obj: AwsVPCSecurityGroupViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsDuplicateRuleGroupViolationFilterSensitiveLog = (obj: DnsDuplicateRuleGroupViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsRuleGroupLimitExceededViolationFilterSensitiveLog = (obj: DnsRuleGroupLimitExceededViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsRuleGroupPriorityConflictViolationFilterSensitiveLog = (
  obj: DnsRuleGroupPriorityConflictViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallSubnetIsOutOfScopeViolationFilterSensitiveLog = (
  obj: FirewallSubnetIsOutOfScopeViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirewallSubnetMissingVPCEndpointViolationFilterSensitiveLog = (
  obj: FirewallSubnetMissingVPCEndpointViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteFilterSensitiveLog = (obj: Route): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallBlackHoleRouteDetectedViolationFilterSensitiveLog = (
  obj: NetworkFirewallBlackHoleRouteDetectedViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExpectedRouteFilterSensitiveLog = (obj: ExpectedRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallInternetTrafficNotInspectedViolationFilterSensitiveLog = (
  obj: NetworkFirewallInternetTrafficNotInspectedViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallInvalidRouteConfigurationViolationFilterSensitiveLog = (
  obj: NetworkFirewallInvalidRouteConfigurationViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallMissingExpectedRoutesViolationFilterSensitiveLog = (
  obj: NetworkFirewallMissingExpectedRoutesViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallMissingExpectedRTViolationFilterSensitiveLog = (
  obj: NetworkFirewallMissingExpectedRTViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallMissingFirewallViolationFilterSensitiveLog = (
  obj: NetworkFirewallMissingFirewallViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallMissingSubnetViolationFilterSensitiveLog = (
  obj: NetworkFirewallMissingSubnetViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulEngineOptionsFilterSensitiveLog = (obj: StatefulEngineOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallStatefulRuleGroupOverrideFilterSensitiveLog = (
  obj: NetworkFirewallStatefulRuleGroupOverride
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatefulRuleGroupFilterSensitiveLog = (obj: StatefulRuleGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatelessRuleGroupFilterSensitiveLog = (obj: StatelessRuleGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallPolicyDescriptionFilterSensitiveLog = (obj: NetworkFirewallPolicyDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallPolicyModifiedViolationFilterSensitiveLog = (
  obj: NetworkFirewallPolicyModifiedViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallUnexpectedFirewallRoutesViolationFilterSensitiveLog = (
  obj: NetworkFirewallUnexpectedFirewallRoutesViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkFirewallUnexpectedGatewayRoutesViolationFilterSensitiveLog = (
  obj: NetworkFirewallUnexpectedGatewayRoutesViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2AssociateRouteTableActionFilterSensitiveLog = (obj: EC2AssociateRouteTableAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2CopyRouteTableActionFilterSensitiveLog = (obj: EC2CopyRouteTableAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2CreateRouteActionFilterSensitiveLog = (obj: EC2CreateRouteAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2CreateRouteTableActionFilterSensitiveLog = (obj: EC2CreateRouteTableAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2DeleteRouteActionFilterSensitiveLog = (obj: EC2DeleteRouteAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2ReplaceRouteActionFilterSensitiveLog = (obj: EC2ReplaceRouteAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2ReplaceRouteTableAssociationActionFilterSensitiveLog = (
  obj: EC2ReplaceRouteTableAssociationAction
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FMSPolicyUpdateFirewallCreationConfigActionFilterSensitiveLog = (
  obj: FMSPolicyUpdateFirewallCreationConfigAction
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemediationActionFilterSensitiveLog = (obj: RemediationAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemediationActionWithOrderFilterSensitiveLog = (obj: RemediationActionWithOrder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PossibleRemediationActionFilterSensitiveLog = (obj: PossibleRemediationAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PossibleRemediationActionsFilterSensitiveLog = (obj: PossibleRemediationActions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteHasOutOfScopeEndpointViolationFilterSensitiveLog = (
  obj: RouteHasOutOfScopeEndpointViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyFirewallMissingExpectedRouteTableViolationFilterSensitiveLog = (
  obj: ThirdPartyFirewallMissingExpectedRouteTableViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyFirewallMissingFirewallViolationFilterSensitiveLog = (
  obj: ThirdPartyFirewallMissingFirewallViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyFirewallMissingSubnetViolationFilterSensitiveLog = (
  obj: ThirdPartyFirewallMissingSubnetViolation
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceViolationFilterSensitiveLog = (obj: ResourceViolation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViolationDetailFilterSensitiveLog = (obj: ViolationDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetViolationDetailsResponseFilterSensitiveLog = (obj: GetViolationDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsListsRequestFilterSensitiveLog = (obj: ListAppsListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsListsResponseFilterSensitiveLog = (obj: ListAppsListsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComplianceStatusRequestFilterSensitiveLog = (obj: ListComplianceStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluationResultFilterSensitiveLog = (obj: EvaluationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyComplianceStatusFilterSensitiveLog = (obj: PolicyComplianceStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComplianceStatusResponseFilterSensitiveLog = (obj: ListComplianceStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoveredResourcesRequestFilterSensitiveLog = (obj: ListDiscoveredResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiscoveredResourceFilterSensitiveLog = (obj: DiscoveredResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoveredResourcesResponseFilterSensitiveLog = (obj: ListDiscoveredResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMemberAccountsRequestFilterSensitiveLog = (obj: ListMemberAccountsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMemberAccountsResponseFilterSensitiveLog = (obj: ListMemberAccountsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPoliciesRequestFilterSensitiveLog = (obj: ListPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicySummaryFilterSensitiveLog = (obj: PolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPoliciesResponseFilterSensitiveLog = (obj: ListPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtocolsListsRequestFilterSensitiveLog = (obj: ListProtocolsListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtocolsListDataSummaryFilterSensitiveLog = (obj: ProtocolsListDataSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProtocolsListsResponseFilterSensitiveLog = (obj: ListProtocolsListsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSetResourcesRequestFilterSensitiveLog = (obj: ListResourceSetResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSetResourcesResponseFilterSensitiveLog = (obj: ListResourceSetResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSetsRequestFilterSensitiveLog = (obj: ListResourceSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSetSummaryFilterSensitiveLog = (obj: ResourceSetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceSetsResponseFilterSensitiveLog = (obj: ListResourceSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThirdPartyFirewallFirewallPoliciesRequestFilterSensitiveLog = (
  obj: ListThirdPartyFirewallFirewallPoliciesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThirdPartyFirewallFirewallPolicyFilterSensitiveLog = (obj: ThirdPartyFirewallFirewallPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThirdPartyFirewallFirewallPoliciesResponseFilterSensitiveLog = (
  obj: ListThirdPartyFirewallFirewallPoliciesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppsListRequestFilterSensitiveLog = (obj: PutAppsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppsListResponseFilterSensitiveLog = (obj: PutAppsListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutNotificationChannelRequestFilterSensitiveLog = (obj: PutNotificationChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPolicyRequestFilterSensitiveLog = (obj: PutPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPolicyResponseFilterSensitiveLog = (obj: PutPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProtocolsListRequestFilterSensitiveLog = (obj: PutProtocolsListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutProtocolsListResponseFilterSensitiveLog = (obj: PutProtocolsListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceSetRequestFilterSensitiveLog = (obj: PutResourceSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceSetResponseFilterSensitiveLog = (obj: PutResourceSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
