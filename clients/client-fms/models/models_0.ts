import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccountRoleStatus {
  Creating = "CREATING",
  Deleted = "DELETED",
  Deleting = "DELETING",
  PendingDeletion = "PENDING_DELETION",
  Ready = "READY",
}

/**
 * <p>An individual AWS Firewall Manager application.</p>
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
  export const filterSensitiveLog = (obj: App): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Firewall Manager applications list.</p>
 */
export interface AppsListData {
  /**
   * <p>The ID of the AWS Firewall Manager applications list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the AWS Firewall Manager applications list.</p>
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * <p>The time that the AWS Firewall Manager applications list was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time that the AWS Firewall Manager applications list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>An array of applications in the AWS Firewall Manager applications list.</p>
   */
  AppsList: App[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding <code>App</code> object arrays.</p>
   */
  PreviousAppsList?: { [key: string]: App[] };
}

export namespace AppsListData {
  export const filterSensitiveLog = (obj: AppsListData): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the AWS Firewall Manager applications list.</p>
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
   * <p>An array of <code>App</code> objects in the AWS Firewall Manager applications list.</p>
   */
  AppsList?: App[];
}

export namespace AppsListDataSummary {
  export const filterSensitiveLog = (obj: AppsListDataSummary): any => ({
    ...obj,
  });
}

export interface AssociateAdminAccountRequest {
  /**
   * <p>The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager
   *       administrator account. This can be an AWS Organizations master account or a member account.
   *         For more information about AWS Organizations and master accounts, see
   *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the AWS Accounts in Your Organization</a>.  </p>
   */
  AdminAccount: string | undefined;
}

export namespace AssociateAdminAccountRequest {
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
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the AWS Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for AWS Organizations before you can access it.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Violations for network interfaces associated with an EC2 instance.</p>
 */
export interface AwsEc2NetworkInterfaceViolation {
  /**
   * <p>The resource ID of the network interface.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>List of security groups that violate the rules specified in the master security group of the AWS Firewall Manager policy.</p>
   */
  ViolatingSecurityGroups?: string[];
}

export namespace AwsEc2NetworkInterfaceViolation {
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violations for an EC2 instance resource.</p>
 */
export interface AwsEc2InstanceViolation {
  /**
   * <p>The resource ID of the EC2 instance.</p>
   */
  ViolationTarget?: string;

  /**
   * <p>Violations for network interfaces associated with the EC2 instance.</p>
   */
  AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolation[];
}

export namespace AwsEc2InstanceViolation {
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
  export const filterSensitiveLog = (obj: DeleteAppsListRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotificationChannelRequest {}

export namespace DeleteNotificationChannelRequest {
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
   *          <p>For AWS WAF and Shield Advanced policies, the cleanup does the following:</p>
   *          <ul>
   *             <li>
   *                <p>Deletes rule groups created by AWS Firewall Manager</p>
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
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an AWS account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
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
  export const filterSensitiveLog = (obj: DeleteProtocolsListRequest): any => ({
    ...obj,
  });
}

export interface DisassociateAdminAccountRequest {}

export namespace DisassociateAdminAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAdminAccountRequest {}

export namespace GetAdminAccountRequest {
  export const filterSensitiveLog = (obj: GetAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAdminAccountResponse {
  /**
   * <p>The AWS account that is set as the AWS Firewall Manager administrator.</p>
   */
  AdminAccount?: string;

  /**
   * <p>The status of the AWS account that you set as the AWS Firewall Manager
   *       administrator.</p>
   */
  RoleStatus?: AccountRoleStatus | string;
}

export namespace GetAdminAccountResponse {
  export const filterSensitiveLog = (obj: GetAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface GetAppsListRequest {
  /**
   * <p>The ID of the AWS Firewall Manager applications list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by AWS Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

export namespace GetAppsListRequest {
  export const filterSensitiveLog = (obj: GetAppsListRequest): any => ({
    ...obj,
  });
}

export interface GetAppsListResponse {
  /**
   * <p>Information about the specified AWS Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

export namespace GetAppsListResponse {
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
   * <p>The AWS account that owns the resources that you want to get the details for.</p>
   */
  MemberAccount: string | undefined;
}

export namespace GetComplianceDetailRequest {
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
  MissingExpectedRouteTable = "MISSING_EXPECTED_ROUTE_TABLE",
  MissingFirewall = "MISSING_FIREWALL",
  MissingFirewallSubnetInAZ = "MISSING_FIREWALL_SUBNET_IN_AZ",
  NetworkFirewallPolicyModified = "NETWORK_FIREWALL_POLICY_MODIFIED",
  ResourceIncorrectWebAcl = "RESOURCE_INCORRECT_WEB_ACL",
  ResourceMissingSecurityGroup = "RESOURCE_MISSING_SECURITY_GROUP",
  ResourceMissingShieldProtection = "RESOURCE_MISSING_SHIELD_PROTECTION",
  ResourceMissingWebAcl = "RESOURCE_MISSING_WEB_ACL",
  ResourceMissingWebaclOrShieldProtection = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION",
  ResourceViolatesAuditSecurityGroup = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP",
  SecurityGroupRedundant = "SECURITY_GROUP_REDUNDANT",
  SecurityGroupUnused = "SECURITY_GROUP_UNUSED",
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
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For example:
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>,
   *         <code>AWS::CloudFront::Distribution</code>, or
   *         <code>AWS::NetworkFirewall::FirewallPolicy</code>.</p>
   */
  ResourceType?: string;
}

export namespace ComplianceViolator {
  export const filterSensitiveLog = (obj: ComplianceViolator): any => ({
    ...obj,
  });
}

/**
 * <p>Describes
 *       the noncompliant resources in a member account for a specific AWS Firewall
 *       Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are
 *       noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 */
export interface PolicyComplianceDetail {
  /**
   * <p>The AWS account that created the AWS Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The AWS account ID.</p>
   */
  MemberAccount?: string;

  /**
   * <p>An array of resources that aren't protected by the AWS WAF or Shield Advanced policy or
   *       that aren't in compliance with the security group policy.</p>
   */
  Violators?: ComplianceViolator[];

  /**
   * <p>Indicates if over 100 resources are noncompliant with the AWS Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;

  /**
   * <p>A timestamp that indicates when the returned information should be considered out of
   *       date.</p>
   */
  ExpiredAt?: Date;

  /**
   * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are
   *       causing a resource to be noncompliant. The details include the name of the dependent service
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: { [key: string]: string };
}

export namespace PolicyComplianceDetail {
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
  export const filterSensitiveLog = (obj: GetComplianceDetailResponse): any => ({
    ...obj,
  });
}

export interface GetNotificationChannelRequest {}

export namespace GetNotificationChannelRequest {
  export const filterSensitiveLog = (obj: GetNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface GetNotificationChannelResponse {
  /**
   * <p>The SNS topic that records AWS Firewall Manager activity. </p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The IAM role that is used by AWS Firewall Manager to record activity to SNS.</p>
   */
  SnsRoleName?: string;
}

export namespace GetNotificationChannelResponse {
  export const filterSensitiveLog = (obj: GetNotificationChannelResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>The ID of the AWS Firewall Manager policy that you want the details for.</p>
   */
  PolicyId: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

export enum CustomerPolicyScopeIdType {
  ACCOUNT = "ACCOUNT",
  ORG_UNIT = "ORG_UNIT",
}

/**
 * <p>The resource tags that AWS Firewall Manager uses to determine if a particular resource
 *       should be included or excluded from the AWS Firewall Manager policy. Tags enable you to
 *       categorize your AWS resources in different ways, for example, by purpose, owner, or
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
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj,
  });
}

export enum SecurityServiceType {
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
   *       policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security
   *       group policy. For security group policies, Firewall Manager supports one security group for
   *       each common policy and for each content audit policy. This is an adjustable limit that you can
   *       increase by contacting AWS Support.</p>
   */
  Type: SecurityServiceType | string | undefined;

  /**
   * <p>Details about the service that are specific to the service type, in JSON format. For
   *       service type <code>SHIELD_ADVANCED</code>, this is an empty string.</p>
   *          <ul>
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
   *                   <code>"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAmazonIpReputationList\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"</code>
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
  export const filterSensitiveLog = (obj: SecurityServicePolicyData): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Firewall Manager policy.</p>
 */
export interface Policy {
  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the AWS Firewall Manager policy.</p>
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
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>.
   *             For AWS WAF and Shield Advanced, examples include
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
   *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
   *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
   *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
   *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
   *             group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an AWS Network Firewall policy,
   *                 the value is <code>AWS::EC2::VPC</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>An array of <code>ResourceType</code>.</p>
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
   * <p>Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *               <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, AWS Firewall Manager
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
   * <p>Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy.
   *           Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.</p>
   *               <p>You can specify inclusions or exclusions, but not both. If you specify an <code>IncludeMap</code>, AWS Firewall Manager
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
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj,
  });
}

export interface GetPolicyResponse {
  /**
   * <p>Information about the specified AWS Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;
}

export namespace GetPolicyResponse {
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
   * <p>The AWS account that is in scope of the policy that you want to get the details
   *          for.</p>
   */
  MemberAccountId?: string;

  /**
   * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *           request syntax listing indicates a <code>number</code> type because the default used by AWS Firewall
   *          Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The
   *          request syntax listing indicates a <code>number</code> type because the default used by AWS Firewall
   *          Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
   *          allowed.</p>
   */
  EndTime?: Date;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify
   *          for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of
   *          objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code>
   *          from the previous response to get information about another batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of objects that you want AWS Firewall Manager to return for this request. If you have more
   *         objects than the number that you specify for <code>MaxResults</code>, the response includes a
   *          <code>NextToken</code> value that you can use to get another batch of objects.</p>
   */
  MaxResults?: number;
}

export namespace GetProtectionStatusRequest {
  export const filterSensitiveLog = (obj: GetProtectionStatusRequest): any => ({
    ...obj,
  });
}

export interface GetProtectionStatusResponse {
  /**
   * <p>The ID of the AWS Firewall administrator account for this policy.</p>
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
   *          <p>AWS SDKs provide auto-pagination that identify <code>NextToken</code> in a response and
   *          make subsequent request calls automatically on your behalf. However, this feature is not
   *          supported by <code>GetProtectionStatus</code>. You must submit subsequent requests with
   *             <code>NextToken</code> using your own processes. </p>
   */
  NextToken?: string;
}

export namespace GetProtectionStatusResponse {
  export const filterSensitiveLog = (obj: GetProtectionStatusResponse): any => ({
    ...obj,
  });
}

export interface GetProtocolsListRequest {
  /**
   * <p>The ID of the AWS Firewall Manager protocols list that you want the details for.</p>
   */
  ListId: string | undefined;

  /**
   * <p>Specifies whether the list to retrieve is a default list owned by AWS Firewall Manager.</p>
   */
  DefaultList?: boolean;
}

export namespace GetProtocolsListRequest {
  export const filterSensitiveLog = (obj: GetProtocolsListRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Firewall Manager protocols list.</p>
 */
export interface ProtocolsListData {
  /**
   * <p>The ID of the AWS Firewall Manager protocols list.</p>
   */
  ListId?: string;

  /**
   * <p>The name of the AWS Firewall Manager protocols list.</p>
   */
  ListName: string | undefined;

  /**
   * <p>A unique identifier for each update to the list. When you update
   *         the list, the update token must match the token of the current version of the application list.
   *         You can retrieve the update token by getting the list. </p>
   */
  ListUpdateToken?: string;

  /**
   * <p>The time that the AWS Firewall Manager protocols list was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The time that the AWS Firewall Manager protocols list was last updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>An array of protocols in the AWS Firewall Manager protocols list.</p>
   */
  ProtocolsList: string[] | undefined;

  /**
   * <p>A map of previous version numbers to their corresponding protocol arrays.</p>
   */
  PreviousProtocolsList?: { [key: string]: string[] };
}

export namespace ProtocolsListData {
  export const filterSensitiveLog = (obj: ProtocolsListData): any => ({
    ...obj,
  });
}

export interface GetProtocolsListResponse {
  /**
   * <p>Information about the specified AWS Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified protocols list.</p>
   */
  ProtocolsListArn?: string;
}

export namespace GetProtocolsListResponse {
  export const filterSensitiveLog = (obj: GetProtocolsListResponse): any => ({
    ...obj,
  });
}

export interface GetViolationDetailsRequest {
  /**
   * <p>The ID of the AWS Firewall Manager policy that you want the details for. This currently only supports security group content audit policies.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The AWS account ID that you want the details for.</p>
   */
  MemberAccount: string | undefined;

  /**
   * <p>The ID of the resource that has violations.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>.
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
  export const filterSensitiveLog = (obj: GetViolationDetailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.  </p>
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.</p>
 */
export interface PartialMatch {
  /**
   * <p>The reference rule from the master security group of the AWS Firewall Manager policy.</p>
   */
  Reference?: string;

  /**
   * <p>The violation reason.</p>
   */
  TargetViolationReasons?: string[];
}

export namespace PartialMatch {
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
  export const filterSensitiveLog = (obj: SecurityGroupRemediationAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the rule violation in a security group when compared to the master security group of the AWS Firewall Manager policy.</p>
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
   * <p>List of rules specified in the security group of the AWS Firewall Manager policy that partially match the <code>ViolationTarget</code> rule.</p>
   */
  PartialMatches?: PartialMatch[];

  /**
   * <p>Remediation options for the rule specified in the <code>ViolationTarget</code>.</p>
   */
  PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];
}

export namespace AwsVPCSecurityGroupViolation {
  export const filterSensitiveLog = (obj: AwsVPCSecurityGroupViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violation details for AWS Network Firewall for a subnet that's not associated to the expected
 *        Firewall Manager managed route table.</p>
 */
export interface NetworkFirewallMissingExpectedRTViolation {
  /**
   * <p>The ID of the AWS Network Firewall or VPC resource that's in violation.</p>
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
  export const filterSensitiveLog = (obj: NetworkFirewallMissingExpectedRTViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violation details for AWS Network Firewall for a subnet that doesn't have a
 *        Firewall Manager managed firewall in its VPC. </p>
 */
export interface NetworkFirewallMissingFirewallViolation {
  /**
   * <p>The ID of the AWS Network Firewall or VPC resource that's in violation.</p>
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
  export const filterSensitiveLog = (obj: NetworkFirewallMissingFirewallViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violation details for AWS Network Firewall for an Availability Zone that's
 *        missing the expected Firewall Manager managed subnet.</p>
 */
export interface NetworkFirewallMissingSubnetViolation {
  /**
   * <p>The ID of the AWS Network Firewall or VPC resource that's in violation.</p>
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
  export const filterSensitiveLog = (obj: NetworkFirewallMissingSubnetViolation): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
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
  export const filterSensitiveLog = (obj: StatefulRuleGroup): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>. </p>
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
   * <p>The priority of the rule group. AWS Network Firewall evaluates the stateless rule groups in a firewall policy starting from the lowest priority setting. </p>
   */
  Priority?: number;
}

export namespace StatelessRuleGroup {
  export const filterSensitiveLog = (obj: StatelessRuleGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The definition of the AWS Network Firewall firewall policy.</p>
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
  export const filterSensitiveLog = (obj: NetworkFirewallPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Violation details for AWS Network Firewall for a firewall policy that has a different
 *        <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. </p>
 */
export interface NetworkFirewallPolicyModifiedViolation {
  /**
   * <p>The ID of the AWS Network Firewall or VPC resource that's in violation.</p>
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
  export const filterSensitiveLog = (obj: NetworkFirewallPolicyModifiedViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violation detail based on resource type.</p>
 */
export interface ResourceViolation {
  /**
   * <p>Violation details for security groups.</p>
   */
  AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;

  /**
   * <p>Violation details for network interface.</p>
   */
  AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;

  /**
   * <p>Violation details for an EC2 instance.</p>
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
}

export namespace ResourceViolation {
  export const filterSensitiveLog = (obj: ResourceViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
 */
export interface ViolationDetail {
  /**
   * <p>The ID of the AWS Firewall Manager policy that the violation details were requested for.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The AWS account that the violation details were requested for.</p>
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
  export const filterSensitiveLog = (obj: GetViolationDetailsResponse): any => ({
    ...obj,
  });
}

export interface ListAppsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by AWS Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         AWS Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want AWS Firewall Manager to return for this request. If more
   *             objects are available, in the response, AWS Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, AWS Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

export namespace ListAppsListsRequest {
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
   *         AWS Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

export namespace ListAppsListsResponse {
  export const filterSensitiveLog = (obj: ListAppsListsResponse): any => ({
    ...obj,
  });
}

export interface ListComplianceStatusRequest {
  /**
   * <p>The ID of the AWS Firewall Manager policy that you want the details for.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicyComplianceStatus</code> objects.
   *       For the second and subsequent <code>ListComplianceStatus</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicyComplianceStatus</code> objects.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want AWS
   *       Firewall Manager to return for this request. If you have more
   *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>
   */
  MaxResults?: number;
}

export namespace ListComplianceStatusRequest {
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
   * <p>Describes an AWS account's compliance with the AWS Firewall Manager policy.</p>
   */
  ComplianceStatus?: PolicyComplianceStatusType | string;

  /**
   * <p>The number of resources that are noncompliant with the specified policy. For AWS WAF and
   *       Shield Advanced policies, a resource is considered noncompliant if it is not associated with
   *       the policy. For security group policies, a resource is considered noncompliant if it doesn't
   *       comply with the rules of the policy and remediation is disabled or not possible.</p>
   */
  ViolatorCount?: number;

  /**
   * <p>Indicates that over 100 resources are noncompliant with the AWS Firewall Manager
   *       policy.</p>
   */
  EvaluationLimitExceeded?: boolean;
}

export namespace EvaluationResult {
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the account is compliant with the specified policy. An account is
 *       considered noncompliant if it includes resources that are not protected by the policy, for AWS
 *       WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group
 *       policies.</p>
 */
export interface PolicyComplianceStatus {
  /**
   * <p>The AWS account that created the AWS Firewall Manager policy.</p>
   */
  PolicyOwner?: string;

  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The name of the AWS Firewall Manager policy.</p>
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
   * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are
   *       causing a resource to be noncompliant. The details include the name of the dependent service
   *       and the error message received that indicates the problem with the service.</p>
   */
  IssueInfoMap?: { [key: string]: string };
}

export namespace PolicyComplianceStatus {
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
  export const filterSensitiveLog = (obj: ListComplianceStatusResponse): any => ({
    ...obj,
  });
}

export interface ListMemberAccountsRequest {
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the
   *       number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a
   *         <code>NextToken</code> value in the response that allows you to list another group of IDs.
   *       For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the
   *       value of <code>NextToken</code> from the previous response to get information about another
   *       batch of member account IDs.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of member account IDs that you want AWS Firewall Manager to return
   *       for this request. If you have more IDs than the number that you specify for
   *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
   *       use to get another batch of member account IDs.</p>
   */
  MaxResults?: number;
}

export namespace ListMemberAccountsRequest {
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
  export const filterSensitiveLog = (obj: ListMemberAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListPoliciesRequest {
  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more
   *         <code>PolicySummary</code> objects than the number that you specify for
   *         <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the
   *       response that allows you to list another group of <code>PolicySummary</code> objects. For the
   *       second and subsequent <code>ListPolicies</code> requests, specify the value of
   *         <code>NextToken</code> from the previous response to get information about another batch of
   *         <code>PolicySummary</code> objects.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of <code>PolicySummary</code> objects that you want AWS Firewall
   *       Manager to return for this request. If you have more <code>PolicySummary</code> objects than
   *       the number that you specify for <code>MaxResults</code>, the response includes a
   *         <code>NextToken</code> value that you can use to get another batch of
   *         <code>PolicySummary</code> objects.</p>
   */
  MaxResults?: number;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the AWS Firewall Manager policy. </p>
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
   *         in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>.
   *             For AWS WAF and Shield Advanced, examples include
   *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
   *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
   *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
   *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
   *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
   *       group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. For an AWS Network Firewall policy,
   *           the value is <code>AWS::EC2::VPC</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of
   *       policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security
   *       group policy.</p>
   */
  SecurityServiceType?: SecurityServiceType | string;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled?: boolean;
}

export namespace PolicySummary {
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
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListProtocolsListsRequest {
  /**
   * <p>Specifies whether the lists to retrieve are default lists owned by AWS Firewall Manager.</p>
   */
  DefaultLists?: boolean;

  /**
   * <p>If you specify a value for <code>MaxResults</code> in your list request, and you have more objects than the maximum,
   *         AWS Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request
   *         in the request parameters, to retrieve the next batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects that you want AWS Firewall Manager to return for this request. If more
   *             objects are available, in the response, AWS Firewall Manager provides a
   *            <code>NextToken</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   *          <p>If you don't specify this, AWS Firewall Manager returns all available objects.</p>
   */
  MaxResults: number | undefined;
}

export namespace ListProtocolsListsRequest {
  export const filterSensitiveLog = (obj: ListProtocolsListsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details of the AWS Firewall Manager protocols list.</p>
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
   * <p>An array of protocols in the AWS Firewall Manager protocols list.</p>
   */
  ProtocolsList?: string[];
}

export namespace ProtocolsListDataSummary {
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
   *         AWS Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.</p>
   */
  NextToken?: string;
}

export namespace ListProtocolsListsResponse {
  export const filterSensitiveLog = (obj: ListProtocolsListsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutAppsListRequest {
  /**
   * <p>The details of the AWS Firewall Manager applications list to be created.</p>
   */
  AppsList: AppsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export namespace PutAppsListRequest {
  export const filterSensitiveLog = (obj: PutAppsListRequest): any => ({
    ...obj,
  });
}

export interface PutAppsListResponse {
  /**
   * <p>The details of the AWS Firewall Manager applications list.</p>
   */
  AppsList?: AppsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the applications list.</p>
   */
  AppsListArn?: string;
}

export namespace PutAppsListResponse {
  export const filterSensitiveLog = (obj: PutAppsListResponse): any => ({
    ...obj,
  });
}

export interface PutNotificationChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS
   *       Firewall Manager.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS
   *       Firewall Manager activity. </p>
   */
  SnsRoleName: string | undefined;
}

export namespace PutNotificationChannelRequest {
  export const filterSensitiveLog = (obj: PutNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface PutPolicyRequest {
  /**
   * <p>The details of the AWS Firewall Manager policy to be created.</p>
   */
  Policy: Policy | undefined;

  /**
   * <p>The tags to add to the AWS resource.</p>
   */
  TagList?: Tag[];
}

export namespace PutPolicyRequest {
  export const filterSensitiveLog = (obj: PutPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutPolicyResponse {
  /**
   * <p>The details of the AWS Firewall Manager policy.</p>
   */
  Policy?: Policy;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;
}

export namespace PutPolicyResponse {
  export const filterSensitiveLog = (obj: PutPolicyResponse): any => ({
    ...obj,
  });
}

export interface PutProtocolsListRequest {
  /**
   * <p>The details of the AWS Firewall Manager protocols list to be created.</p>
   */
  ProtocolsList: ProtocolsListData | undefined;

  /**
   * <p>The tags associated with the resource.</p>
   */
  TagList?: Tag[];
}

export namespace PutProtocolsListRequest {
  export const filterSensitiveLog = (obj: PutProtocolsListRequest): any => ({
    ...obj,
  });
}

export interface PutProtocolsListResponse {
  /**
   * <p>The details of the AWS Firewall Manager protocols list.</p>
   */
  ProtocolsList?: ProtocolsListData;

  /**
   * <p>The Amazon Resource Name (ARN) of the protocols list.</p>
   */
  ProtocolsListArn?: string;
}

export namespace PutProtocolsListResponse {
  export const filterSensitiveLog = (obj: PutProtocolsListResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  TagList: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource. </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
