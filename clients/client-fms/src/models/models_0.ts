import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace ActionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActionTarget): any => ({
    ...obj,
  });
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

export namespace App {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: App): any => ({
    ...obj,
  });
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
  PreviousAppsList?: { [key: string]: App[] };
}

export namespace AppsListData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppsListData): any => ({
    ...obj,
  });
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

export namespace AppsListDataSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppsListDataSummary): any => ({
    ...obj,
  });
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

export namespace AssociateAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAdminAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "client";
  Message?: string;
}

export namespace InternalErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters of the request were invalid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace AwsEc2NetworkInterfaceViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceViolation): any => ({
    ...obj,
  });
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

export namespace AwsEc2InstanceViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2InstanceViolation): any => ({
    ...obj,
  });
}

export interface DeleteAppsListRequest {
  /**
   * <p>The ID of the applications list that you want to delete. You can retrieve this ID from
   *       <code>PutAppsList</code>, <code>ListAppsLists</code>, and <code>GetAppsList</code>.</p>
   */
  ListId: string | undefined;
}

export namespace DeleteAppsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppsListRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotificationChannelRequest {}

export namespace DeleteNotificationChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteNotificationChannelRequest): any => ({
    ...obj,
  });
}

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

export namespace DeletePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteProtocolsListRequest {
  /**
   * <p>The ID of the protocols list that you want to delete. You can retrieve this ID from
   *       <code>PutProtocolsList</code>, <code>ListProtocolsLists</code>, and <code>GetProtocolsLost</code>.</p>
   */
  ListId: string | undefined;
}

export namespace DeleteProtocolsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProtocolsListRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAdminAccountRequest {}

export namespace DisassociateAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAdminAccountRequest {}

export namespace GetAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdminAccountRequest): any => ({
    ...obj,
  });
}

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

export namespace GetAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdminAccountResponse): any => ({
    ...obj,
  });
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

export namespace GetAppsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppsListRequest): any => ({
    ...obj,
  });
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

export namespace GetAppsListResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppsListResponse): any => ({
    ...obj,
  });
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

export namespace GetComplianceDetailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailRequest): any => ({
    ...obj,
  });
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
  FirewallSubnetMissingExpectedRoute = "FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE",
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
}

export namespace ComplianceViolator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplianceViolator): any => ({
    ...obj,
  });
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
  IssueInfoMap?: { [key: string]: string };
}

export namespace PolicyComplianceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyComplianceDetail): any => ({
    ...obj,
  });
}

export interface GetComplianceDetailResponse {
  /**
   * <p>Information about the resources and the policy that you specified in the
   *         <code>GetComplianceDetail</code> request.</p>
   */
  PolicyComplianceDetail?: PolicyComplianceDetail;
}

export namespace GetComplianceDetailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetComplianceDetailResponse): any => ({
    ...obj,
  });
}

export interface GetNotificationChannelRequest {}

export namespace GetNotificationChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNotificationChannelRequest): any => ({
    ...obj,
  });
}

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

export namespace GetNotificationChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetNotificationChannelResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>The ID of the Firewall Manager policy that you want the details for.</p>
   */
  PolicyId: string | undefined;
}

export namespace GetPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
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

export namespace ResourceTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj,
  });
}

export enum SecurityServiceType {
  DNS_FIREWALL = "DNS_FIREWALL",
  NETWORK_FIREWALL = "NETWORK_FIREWALL",
  SECURITY_GROUPS_COMMON = "SECURITY_GROUPS_COMMON",
  SECURITY_GROUPS_CONTENT_AUDIT = "SECURITY_GROUPS_CONTENT_AUDIT",
  SECURITY_GROUPS_USAGE_AUDIT = "SECURITY_GROUPS_USAGE_AUDIT",
  SHIELD_ADVANCED = "SHIELD_ADVANCED",
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
   * <p>Details about the service that are specific to the service type, in JSON format. For
   *       service type <code>SHIELD_ADVANCED</code>, this is an empty string.</p>
   *          <ul>
   *             <li>
   *                <p>Example: <code>DNS_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10}],\"postProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911}]}"</code>
   *                </p>
   *                <note>
   *                   <p>Valid values for <code>preProcessRuleGroups</code> are between 1 and 99. Valid values for <code>postProcessRuleGroups</code> are between 9901 and 10000.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>Example: <code>NETWORK_FIREWALL</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-west-1:1234567891011:stateless-rulegroup/rulegroup2\",\"priority\":10}],\"networkFirewallStatelessDefaultActions\":[\"aws:pass\",\"custom1\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"custom2\",\"aws:pass\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"custom1\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"dimension1\"}]}}},{\"actionName\":\"custom2\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"dimension2\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-west-1:1234567891011:stateful-rulegroup/rulegroup1\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":true,\"allowedIPV4CidrList\":[\"10.24.34.0/28\"]} }"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAFV2</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAmazonIpReputationList\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"</code>
   *                </p>
   *                <p>In the <code>loggingConfiguration</code>, you can specify one <code>logDestinationConfigs</code>, you can optionally provide up to 20 <code>redactedFields</code>, and the <code>RedactedFieldType</code> must be one of <code>URI</code>, <code>QUERY_STRING</code>, <code>HEADER</code>, or <code>METHOD</code>.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>WAF Classic</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\": \"WAF\", \"ruleGroups\": [{\"id\":\"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_COMMON</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as well as to those in VPCs that the account owns
   *              </p>
   *                <p>
   *                  <code>"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_CONTENT_AUDIT</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\"sg-000e55995d61a06bd\"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"</code>
   *                </p>
   *                <p>The security group action for content audit can be <code>ALLOW</code> or
   *             <code>DENY</code>. For <code>ALLOW</code>, all in-scope security group rules must be
   *           within the allowed range of the policy's security group rules. For <code>DENY</code>, all
   *           in-scope security group rules must not contain a value or a range that matches a rule
   *           value or range in the policy security group.</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>SECURITY_GROUPS_USAGE_AUDIT</code>
   *                </p>
   *                <p>
   *                   <code>"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ManagedServiceData?: string;
}

export namespace SecurityServicePolicyData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityServicePolicyData): any => ({
    ...obj,
  });
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
   *                 <p>For WAF and Shield Advanced, example resource types include
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
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
   * <p>Indicates whether Firewall Manager should delete Firewall Manager managed resources, such as web ACLs and security groups, when they are not in use by the Firewall Manager policy. By default, Firewall Manager doesn't delete unused Firewall Manager managed resources. This option is not available for Shield Advanced or WAF Classic policies.</p>
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
  IncludeMap?: { [key: string]: string[] };

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
  ExcludeMap?: { [key: string]: string[] };
}

export namespace Policy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj,
  });
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

export namespace GetPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The value of the <code>Type</code> parameter is invalid.</p>
 */
export interface InvalidTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidTypeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTypeException): any => ({
    ...obj,
  });
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

export namespace GetProtectionStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProtectionStatusRequest): any => ({
    ...obj,
  });
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

export namespace GetProtectionStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProtectionStatusResponse): any => ({
    ...obj,
  });
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

export namespace GetProtocolsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProtocolsListRequest): any => ({
    ...obj,
  });
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
  PreviousProtocolsList?: { [key: string]: string[] };
}

export namespace ProtocolsListData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProtocolsListData): any => ({
    ...obj,
  });
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

export namespace GetProtocolsListResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProtocolsListResponse): any => ({
    ...obj,
  });
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

export namespace GetViolationDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetViolationDetailsRequest): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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

export namespace PartialMatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartialMatch): any => ({
    ...obj,
  });
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

export namespace SecurityGroupRuleDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRuleDescription): any => ({
    ...obj,
  });
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

export namespace SecurityGroupRemediationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupRemediationAction): any => ({
    ...obj,
  });
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

export namespace AwsVPCSecurityGroupViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsVPCSecurityGroupViolation): any => ({
    ...obj,
  });
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

export namespace DnsDuplicateRuleGroupViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsDuplicateRuleGroupViolation): any => ({
    ...obj,
  });
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

export namespace DnsRuleGroupLimitExceededViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsRuleGroupLimitExceededViolation): any => ({
    ...obj,
  });
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

export namespace DnsRuleGroupPriorityConflictViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsRuleGroupPriorityConflictViolation): any => ({
    ...obj,
  });
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

export namespace Route {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallBlackHoleRouteDetectedViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallBlackHoleRouteDetectedViolation): any => ({
    ...obj,
  });
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

export namespace ExpectedRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpectedRoute): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallInternetTrafficNotInspectedViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallInternetTrafficNotInspectedViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallInvalidRouteConfigurationViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallInvalidRouteConfigurationViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallMissingExpectedRoutesViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallMissingExpectedRoutesViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallMissingExpectedRTViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallMissingExpectedRTViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallMissingFirewallViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallMissingFirewallViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallMissingSubnetViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallMissingSubnetViolation): any => ({
    ...obj,
  });
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
}

export namespace StatefulRuleGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatefulRuleGroup): any => ({
    ...obj,
  });
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

export namespace StatelessRuleGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatelessRuleGroup): any => ({
    ...obj,
  });
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
}

export namespace NetworkFirewallPolicyDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallPolicyDescription): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallPolicyModifiedViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallPolicyModifiedViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallUnexpectedFirewallRoutesViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallUnexpectedFirewallRoutesViolation): any => ({
    ...obj,
  });
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

export namespace NetworkFirewallUnexpectedGatewayRoutesViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkFirewallUnexpectedGatewayRoutesViolation): any => ({
    ...obj,
  });
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

export namespace EC2AssociateRouteTableAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2AssociateRouteTableAction): any => ({
    ...obj,
  });
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

export namespace EC2CopyRouteTableAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2CopyRouteTableAction): any => ({
    ...obj,
  });
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

export namespace EC2CreateRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2CreateRouteAction): any => ({
    ...obj,
  });
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

export namespace EC2CreateRouteTableAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2CreateRouteTableAction): any => ({
    ...obj,
  });
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

export namespace EC2DeleteRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2DeleteRouteAction): any => ({
    ...obj,
  });
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

export namespace EC2ReplaceRouteAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2ReplaceRouteAction): any => ({
    ...obj,
  });
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

export namespace EC2ReplaceRouteTableAssociationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2ReplaceRouteTableAssociationAction): any => ({
    ...obj,
  });
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
}

export namespace RemediationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationAction): any => ({
    ...obj,
  });
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

export namespace RemediationActionWithOrder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemediationActionWithOrder): any => ({
    ...obj,
  });
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

export namespace PossibleRemediationAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PossibleRemediationAction): any => ({
    ...obj,
  });
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

export namespace PossibleRemediationActions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PossibleRemediationActions): any => ({
    ...obj,
  });
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
}

export namespace ResourceViolation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceViolation): any => ({
    ...obj,
  });
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

export namespace ViolationDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViolationDetail): any => ({
    ...obj,
  });
}

export interface GetViolationDetailsResponse {
  /**
   * <p>Violation detail for a resource.</p>
   */
  ViolationDetail?: ViolationDetail;
}

export namespace GetViolationDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetViolationDetailsResponse): any => ({
    ...obj,
  });
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

export namespace ListAppsListsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppsListsRequest): any => ({
    ...obj,
  });
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

export namespace ListAppsListsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppsListsResponse): any => ({
    ...obj,
  });
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

export namespace ListComplianceStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceStatusRequest): any => ({
    ...obj,
  });
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

export namespace EvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
  });
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
  IssueInfoMap?: { [key: string]: string };
}

export namespace PolicyComplianceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyComplianceStatus): any => ({
    ...obj,
  });
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

export namespace ListComplianceStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListComplianceStatusResponse): any => ({
    ...obj,
  });
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

export namespace ListMemberAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMemberAccountsRequest): any => ({
    ...obj,
  });
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

export namespace ListMemberAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMemberAccountsResponse): any => ({
    ...obj,
  });
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

export namespace ListPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj,
  });
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
   * <p>Indicates whether Firewall Manager should delete Firewall Manager managed resources, such as web ACLs and security groups, when they are not in use by the Firewall Manager policy. By default, Firewall Manager doesn't delete unused Firewall Manager managed resources. This option is not available for Shield Advanced or WAF Classic policies.</p>
   */
  DeleteUnusedFMManagedResources?: boolean;
}

export namespace PolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicySummary): any => ({
    ...obj,
  });
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

export namespace ListPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj,
  });
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

export namespace ListProtocolsListsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProtocolsListsRequest): any => ({
    ...obj,
  });
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

export namespace ProtocolsListDataSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProtocolsListDataSummary): any => ({
    ...obj,
  });
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

export namespace ListProtocolsListsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProtocolsListsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PutAppsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppsListRequest): any => ({
    ...obj,
  });
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

export namespace PutAppsListResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppsListResponse): any => ({
    ...obj,
  });
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

export namespace PutNotificationChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutNotificationChannelRequest): any => ({
    ...obj,
  });
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

export namespace PutPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPolicyRequest): any => ({
    ...obj,
  });
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

export namespace PutPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutPolicyResponse): any => ({
    ...obj,
  });
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

export namespace PutProtocolsListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProtocolsListRequest): any => ({
    ...obj,
  });
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

export namespace PutProtocolsListResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProtocolsListResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
