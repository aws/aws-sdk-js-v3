import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AccountRoleStatus {
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    PendingDeletion = "PENDING_DELETION",
    Ready = "READY"
}
export interface AssociateAdminAccountRequest {
    __type?: "AssociateAdminAccountRequest";
    /**
     * <p>The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager
     *       administrator account. This can be an AWS Organizations master account or a member account.
     *       For more information about AWS Organizations and master accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the AWS Accounts in Your Organization</a>.</p>
     */
    AdminAccount: string | undefined;
}
export declare namespace AssociateAdminAccountRequest {
    function isa(o: any): o is AssociateAdminAccountRequest;
}
/**
 * <p>Details of the resource that is not protected by the policy.</p>
 */
export interface ComplianceViolator {
    __type?: "ComplianceViolator";
    /**
     * <p>The resource ID.</p>
     */
    ResourceId?: string;
    /**
     * <p>The resource type. This is in the format shown in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For example:
     *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or
     *         <code>AWS::CloudFront::Distribution</code>.</p>
     */
    ResourceType?: string;
    /**
     * <p>The reason that the resource is not protected by the policy.</p>
     */
    ViolationReason?: ViolationReason | string;
}
export declare namespace ComplianceViolator {
    function isa(o: any): o is ComplianceViolator;
}
export declare enum CustomerPolicyScopeIdType {
    ACCOUNT = "ACCOUNT"
}
export interface DeleteNotificationChannelRequest {
    __type?: "DeleteNotificationChannelRequest";
}
export declare namespace DeleteNotificationChannelRequest {
    function isa(o: any): o is DeleteNotificationChannelRequest;
}
export interface DeletePolicyRequest {
    __type?: "DeletePolicyRequest";
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
    /**
     * <p>The ID of the policy that you want to delete. <code>PolicyId</code> is returned by
     *         <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace DeletePolicyRequest {
    function isa(o: any): o is DeletePolicyRequest;
}
export declare enum DependentServiceName {
    AWSConfig = "AWSCONFIG",
    AWSShieldAdvanced = "AWSSHIELD_ADVANCED",
    AWSVirtualPrivateCloud = "AWSVPC",
    AWSWAF = "AWSWAF"
}
export interface DisassociateAdminAccountRequest {
    __type?: "DisassociateAdminAccountRequest";
}
export declare namespace DisassociateAdminAccountRequest {
    function isa(o: any): o is DisassociateAdminAccountRequest;
}
/**
 * <p>Describes the compliance status for the account. An account is considered noncompliant if
 *       it includes resources that are not protected by the specified policy or that don't comply with
 *       the policy.</p>
 */
export interface EvaluationResult {
    __type?: "EvaluationResult";
    /**
     * <p>Describes an AWS account's compliance with the AWS Firewall Manager policy.</p>
     */
    ComplianceStatus?: PolicyComplianceStatusType | string;
    /**
     * <p>Indicates that over 100 resources are noncompliant with the AWS Firewall Manager
     *       policy.</p>
     */
    EvaluationLimitExceeded?: boolean;
    /**
     * <p>The number of resources that are noncompliant with the specified policy. For AWS WAF and
     *       Shield Advanced policies, a resource is considered noncompliant if it is not associated with
     *       the policy. For security group policies, a resource is considered noncompliant if it doesn't
     *       comply with the rules of the policy and remediation is disabled or not possible.</p>
     */
    ViolatorCount?: number;
}
export declare namespace EvaluationResult {
    function isa(o: any): o is EvaluationResult;
}
export interface GetAdminAccountRequest {
    __type?: "GetAdminAccountRequest";
}
export declare namespace GetAdminAccountRequest {
    function isa(o: any): o is GetAdminAccountRequest;
}
export interface GetAdminAccountResponse {
    __type?: "GetAdminAccountResponse";
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
export declare namespace GetAdminAccountResponse {
    function isa(o: any): o is GetAdminAccountResponse;
}
export interface GetComplianceDetailRequest {
    __type?: "GetComplianceDetailRequest";
    /**
     * <p>The AWS account that owns the resources that you want to get the details for.</p>
     */
    MemberAccount: string | undefined;
    /**
     * <p>The ID of the policy that you want to get the details for. <code>PolicyId</code> is
     *       returned by <code>PutPolicy</code> and by <code>ListPolicies</code>.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace GetComplianceDetailRequest {
    function isa(o: any): o is GetComplianceDetailRequest;
}
export interface GetComplianceDetailResponse {
    __type?: "GetComplianceDetailResponse";
    /**
     * <p>Information about the resources and the policy that you specified in the
     *         <code>GetComplianceDetail</code> request.</p>
     */
    PolicyComplianceDetail?: PolicyComplianceDetail;
}
export declare namespace GetComplianceDetailResponse {
    function isa(o: any): o is GetComplianceDetailResponse;
}
export interface GetNotificationChannelRequest {
    __type?: "GetNotificationChannelRequest";
}
export declare namespace GetNotificationChannelRequest {
    function isa(o: any): o is GetNotificationChannelRequest;
}
export interface GetNotificationChannelResponse {
    __type?: "GetNotificationChannelResponse";
    /**
     * <p>The IAM role that is used by AWS Firewall Manager to record activity to SNS.</p>
     */
    SnsRoleName?: string;
    /**
     * <p>The SNS topic that records AWS Firewall Manager activity. </p>
     */
    SnsTopicArn?: string;
}
export declare namespace GetNotificationChannelResponse {
    function isa(o: any): o is GetNotificationChannelResponse;
}
export interface GetPolicyRequest {
    __type?: "GetPolicyRequest";
    /**
     * <p>The ID of the AWS Firewall Manager policy that you want the details for.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace GetPolicyRequest {
    function isa(o: any): o is GetPolicyRequest;
}
export interface GetPolicyResponse {
    __type?: "GetPolicyResponse";
    /**
     * <p>Information about the specified AWS Firewall Manager policy.</p>
     */
    Policy?: Policy;
    /**
     * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
     */
    PolicyArn?: string;
}
export declare namespace GetPolicyResponse {
    function isa(o: any): o is GetPolicyResponse;
}
export interface GetProtectionStatusRequest {
    __type?: "GetProtectionStatusRequest";
    /**
     * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The
     *          request syntax listing indicates a <code>number</code> type because the default used by AWS Firewall
     *          Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
     *          allowed.</p>
     */
    EndTime?: Date;
    /**
     * <p>Specifies the number of objects that you want AWS Firewall Manager to return for this request. If you have more
     *         objects than the number that you specify for <code>MaxResults</code>, the response includes a
     *          <code>NextToken</code> value that you can use to get another batch of objects.</p>
     */
    MaxResults?: number;
    /**
     * <p>The AWS account that is in scope of the policy that you want to get the details
     *          for.</p>
     */
    MemberAccountId?: string;
    /**
     * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify
     *          for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response, which you can use to retrieve another group of
     *          objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code>
     *          from the previous response to get information about another batch of objects.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the policy for which you want to get the attack information.</p>
     */
    PolicyId: string | undefined;
    /**
     * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The
     *           request syntax listing indicates a <code>number</code> type because the default used by AWS Firewall
     *          Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is
     *          allowed.</p>
     */
    StartTime?: Date;
}
export declare namespace GetProtectionStatusRequest {
    function isa(o: any): o is GetProtectionStatusRequest;
}
export interface GetProtectionStatusResponse {
    __type?: "GetProtectionStatusResponse";
    /**
     * <p>The ID of the AWS Firewall administrator account for this policy.</p>
     */
    AdminAccountId?: string;
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
    /**
     * <p>The service type that is protected by the policy. Currently, this is always
     *             <code>SHIELD_ADVANCED</code>.</p>
     */
    ServiceType?: SecurityServiceType | string;
}
export declare namespace GetProtectionStatusResponse {
    function isa(o: any): o is GetProtectionStatusResponse;
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
export declare namespace InternalErrorException {
    function isa(o: any): o is InternalErrorException;
}
/**
 * <p>The parameters of the request were invalid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidInputException {
    function isa(o: any): o is InvalidInputException;
}
/**
 * <p>The operation failed because there was nothing to do. For example, you might have
 *       submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted
 *       was already set as the AWS Firewall Manager administrator.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
    name: "InvalidOperationException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidOperationException {
    function isa(o: any): o is InvalidOperationException;
}
/**
 * <p>The value of the <code>Type</code> parameter is invalid.</p>
 */
export interface InvalidTypeException extends __SmithyException, $MetadataBearer {
    name: "InvalidTypeException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidTypeException {
    function isa(o: any): o is InvalidTypeException;
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
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
}
export interface ListComplianceStatusRequest {
    __type?: "ListComplianceStatusRequest";
    /**
     * <p>Specifies the number of <code>PolicyComplianceStatus</code> objects that you want AWS
     *       Firewall Manager to return for this request. If you have more
     *         <code>PolicyComplianceStatus</code> objects than the number that you specify for
     *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
     *       use to get another batch of <code>PolicyComplianceStatus</code> objects.</p>
     */
    MaxResults?: number;
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
     * <p>The ID of the AWS Firewall Manager policy that you want the details for.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace ListComplianceStatusRequest {
    function isa(o: any): o is ListComplianceStatusRequest;
}
export interface ListComplianceStatusResponse {
    __type?: "ListComplianceStatusResponse";
    /**
     * <p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you
     *       specified for <code>MaxResults</code> in the request, the response includes a
     *         <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects,
     *       submit another <code>ListComplianceStatus</code> request, and specify the
     *         <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
     *       next request.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of <code>PolicyComplianceStatus</code> objects.</p>
     */
    PolicyComplianceStatusList?: Array<PolicyComplianceStatus>;
}
export declare namespace ListComplianceStatusResponse {
    function isa(o: any): o is ListComplianceStatusResponse;
}
export interface ListMemberAccountsRequest {
    __type?: "ListMemberAccountsRequest";
    /**
     * <p>Specifies the number of member account IDs that you want AWS Firewall Manager to return
     *       for this request. If you have more IDs than the number that you specify for
     *         <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can
     *       use to get another batch of member account IDs.</p>
     */
    MaxResults?: number;
    /**
     * <p>If you specify a value for <code>MaxResults</code> and you have more account IDs than the
     *       number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a
     *         <code>NextToken</code> value in the response that allows you to list another group of IDs.
     *       For the second and subsequent <code>ListMemberAccountsRequest</code> requests, specify the
     *       value of <code>NextToken</code> from the previous response to get information about another
     *       batch of member account IDs.</p>
     */
    NextToken?: string;
}
export declare namespace ListMemberAccountsRequest {
    function isa(o: any): o is ListMemberAccountsRequest;
}
export interface ListMemberAccountsResponse {
    __type?: "ListMemberAccountsResponse";
    /**
     * <p>An array of account IDs.</p>
     */
    MemberAccounts?: Array<string>;
    /**
     * <p>If you have more member account IDs than the number that you specified for
     *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
     *       value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify
     *       the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the
     *       next request.</p>
     */
    NextToken?: string;
}
export declare namespace ListMemberAccountsResponse {
    function isa(o: any): o is ListMemberAccountsResponse;
}
export interface ListPoliciesRequest {
    __type?: "ListPoliciesRequest";
    /**
     * <p>Specifies the number of <code>PolicySummary</code> objects that you want AWS Firewall
     *       Manager to return for this request. If you have more <code>PolicySummary</code> objects than
     *       the number that you specify for <code>MaxResults</code>, the response includes a
     *         <code>NextToken</code> value that you can use to get another batch of
     *         <code>PolicySummary</code> objects.</p>
     */
    MaxResults?: number;
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
}
export declare namespace ListPoliciesRequest {
    function isa(o: any): o is ListPoliciesRequest;
}
export interface ListPoliciesResponse {
    __type?: "ListPoliciesResponse";
    /**
     * <p>If you have more <code>PolicySummary</code> objects than the number that you specified for
     *         <code>MaxResults</code> in the request, the response includes a <code>NextToken</code>
     *       value. To list more <code>PolicySummary</code> objects, submit another
     *         <code>ListPolicies</code> request, and specify the <code>NextToken</code> value from the
     *       response in the <code>NextToken</code> value in the next request.</p>
     */
    NextToken?: string;
    /**
     * <p>An array of <code>PolicySummary</code> objects.</p>
     */
    PolicyList?: Array<PolicySummary>;
}
export declare namespace ListPoliciesResponse {
    function isa(o: any): o is ListPoliciesResponse;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to return tags for. The Firewall Manager policy is the only AWS resource that supports tagging, so this ARN is a policy ARN..</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * <p>The tags associated with the resource.</p>
     */
    TagList?: Array<Tag>;
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
/**
 * <p>An AWS Firewall Manager policy.</p>
 */
export interface Policy {
    __type?: "Policy";
    /**
     * <p>Specifies the AWS account IDs to exclude from the policy. The <code>IncludeMap</code>
     *       values are evaluated first, with all the appropriate account IDs added to the policy. Then the
     *       accounts listed in <code>ExcludeMap</code> are removed, resulting in the final list of
     *       accounts to add to the policy.</p>
     *          <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>ExcludeMap</code>
     *       would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
     */
    ExcludeMap?: {
        [key: string]: Array<string>;
    };
    /**
     * <p>If set to <code>True</code>, resources with the tags that are specified in the
     *         <code>ResourceTag</code> array are not in scope of the policy. If set to <code>False</code>,
     *       and the <code>ResourceTag</code> array is not null, only resources with the specified tags are
     *       in scope of the policy.</p>
     */
    ExcludeResourceTags: boolean | undefined;
    /**
     * <p>Specifies the AWS account IDs to include in the policy. If <code>IncludeMap</code> is
     *       null, all accounts in the organization in AWS Organizations are included in the policy. If
     *         <code>IncludeMap</code> is not null, only values listed in <code>IncludeMap</code> are
     *       included in the policy.</p>
     *          <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>IncludeMap</code>
     *       would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
     */
    IncludeMap?: {
        [key: string]: Array<string>;
    };
    /**
     * <p>The ID of the AWS Firewall Manager policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The friendly name of the AWS Firewall Manager policy.</p>
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
     * <p>Indicates if the policy should be automatically applied to new resources.</p>
     */
    RemediationEnabled: boolean | undefined;
    /**
     * <p>An array of <code>ResourceTag</code> objects.</p>
     */
    ResourceTags?: Array<ResourceTag>;
    /**
     * <p>The type of resource protected by or in scope of the policy. This is in the format shown
     *       in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For AWS WAF and Shield Advanced, examples include
     *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
     *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
     *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
     *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
     *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
     *       group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. </p>
     */
    ResourceType: string | undefined;
    /**
     * <p>An array of <code>ResourceType</code>.</p>
     */
    ResourceTypeList?: Array<string>;
    /**
     * <p>Details about the security service that is being used to protect the resources.</p>
     */
    SecurityServicePolicyData: SecurityServicePolicyData | undefined;
}
export declare namespace Policy {
    function isa(o: any): o is Policy;
}
/**
 * <p>Describes
 *       the noncompliant resources in a member account for a specific AWS Firewall
 *       Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are
 *       noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.</p>
 */
export interface PolicyComplianceDetail {
    __type?: "PolicyComplianceDetail";
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
    IssueInfoMap?: {
        [key: string]: string;
    };
    /**
     * <p>The AWS account ID.</p>
     */
    MemberAccount?: string;
    /**
     * <p>The ID of the AWS Firewall Manager policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The AWS account that created the AWS Firewall Manager policy.</p>
     */
    PolicyOwner?: string;
    /**
     * <p>An array of resources that aren't protected by the AWS WAF or Shield Advanced policy or
     *       that aren't in compliance with the security group policy.</p>
     */
    Violators?: Array<ComplianceViolator>;
}
export declare namespace PolicyComplianceDetail {
    function isa(o: any): o is PolicyComplianceDetail;
}
/**
 * <p>Indicates whether the account is compliant with the specified policy. An account is
 *       considered noncompliant if it includes resources that are not protected by the policy, for AWS
 *       WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group
 *       policies.</p>
 */
export interface PolicyComplianceStatus {
    __type?: "PolicyComplianceStatus";
    /**
     * <p>An array of <code>EvaluationResult</code> objects.</p>
     */
    EvaluationResults?: Array<EvaluationResult>;
    /**
     * <p>Details about problems with dependent services, such as AWS WAF or AWS Config, that are
     *       causing a resource to be noncompliant. The details include the name of the dependent service
     *       and the error message received that indicates the problem with the service.</p>
     */
    IssueInfoMap?: {
        [key: string]: string;
    };
    /**
     * <p>Timestamp of the last update to the <code>EvaluationResult</code> objects.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>The member account ID.</p>
     */
    MemberAccount?: string;
    /**
     * <p>The ID of the AWS Firewall Manager policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The friendly name of the AWS Firewall Manager policy.</p>
     */
    PolicyName?: string;
    /**
     * <p>The AWS account that created the AWS Firewall Manager policy.</p>
     */
    PolicyOwner?: string;
}
export declare namespace PolicyComplianceStatus {
    function isa(o: any): o is PolicyComplianceStatus;
}
export declare enum PolicyComplianceStatusType {
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * <p>Details of the AWS Firewall Manager policy. </p>
 */
export interface PolicySummary {
    __type?: "PolicySummary";
    /**
     * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
     */
    PolicyArn?: string;
    /**
     * <p>The ID of the specified policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The friendly name of the specified policy.</p>
     */
    PolicyName?: string;
    /**
     * <p>Indicates if the policy should be automatically applied to new resources.</p>
     */
    RemediationEnabled?: boolean;
    /**
     * <p>The type of resource protected by or in scope of the policy. This is in the format shown
     *       in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For AWS WAF and Shield Advanced, examples include
     *         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> and
     *         <code>AWS::CloudFront::Distribution</code>. For a security group common policy, valid values
     *       are <code>AWS::EC2::NetworkInterface</code> and <code>AWS::EC2::Instance</code>. For a
     *       security group content audit policy, valid values are <code>AWS::EC2::SecurityGroup</code>,
     *         <code>AWS::EC2::NetworkInterface</code>, and <code>AWS::EC2::Instance</code>. For a security
     *       group usage audit policy, the value is <code>AWS::EC2::SecurityGroup</code>. </p>
     */
    ResourceType?: string;
    /**
     * <p>The service that the policy is using to protect the resources. This specifies the type of
     *       policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security
     *       group policy.</p>
     */
    SecurityServiceType?: SecurityServiceType | string;
}
export declare namespace PolicySummary {
    function isa(o: any): o is PolicySummary;
}
export interface PutNotificationChannelRequest {
    __type?: "PutNotificationChannelRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS
     *       Firewall Manager activity. </p>
     */
    SnsRoleName: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS
     *       Firewall Manager.</p>
     */
    SnsTopicArn: string | undefined;
}
export declare namespace PutNotificationChannelRequest {
    function isa(o: any): o is PutNotificationChannelRequest;
}
export interface PutPolicyRequest {
    __type?: "PutPolicyRequest";
    /**
     * <p>The details of the AWS Firewall Manager policy to be created.</p>
     */
    Policy: Policy | undefined;
    /**
     * <p>The tags to add to the AWS resource.</p>
     */
    TagList?: Array<Tag>;
}
export declare namespace PutPolicyRequest {
    function isa(o: any): o is PutPolicyRequest;
}
export interface PutPolicyResponse {
    __type?: "PutPolicyResponse";
    /**
     * <p>The details of the AWS Firewall Manager policy that was created.</p>
     */
    Policy?: Policy;
    /**
     * <p>The Amazon Resource Name (ARN) of the policy that was created.</p>
     */
    PolicyArn?: string;
}
export declare namespace PutPolicyResponse {
    function isa(o: any): o is PutPolicyResponse;
}
/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>The resource tags that AWS Firewall Manager uses to determine if a particular resource
 *       should be included or excluded from the AWS Firewall Manager policy. Tags enable you to
 *       categorize your AWS resources in different ways, for example, by purpose, owner, or
 *       environment. Each tag consists of a key and an optional value. Firewall Manager combines the
 *       tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have
 *       all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with
 *         Tag Editor</a>.</p>
 */
export interface ResourceTag {
    __type?: "ResourceTag";
    /**
     * <p>The resource tag key.</p>
     */
    Key: string | undefined;
    /**
     * <p>The resource tag value.</p>
     */
    Value?: string;
}
export declare namespace ResourceTag {
    function isa(o: any): o is ResourceTag;
}
/**
 * <p>Details about the security service that is being used to protect the resources.</p>
 */
export interface SecurityServicePolicyData {
    __type?: "SecurityServicePolicyData";
    /**
     * <p>Details about the service that are specific to the service type, in JSON format. For
     *       service type <code>SHIELD_ADVANCED</code>, this is an empty string.</p>
     *          <ul>
     *             <li>
     *                <p>Example: <code>WAF</code>
     *                </p>
     *                <p>
     *                   <code>ManagedServiceData": "{\"type\": \"WAF\", \"ruleGroups\": [{\"id\":
     *             \"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}],
     *             \"defaultAction\": {\"type\": \"BLOCK\"}}</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Example: <code>SECURITY_GROUPS_COMMON</code>
     *                </p>
     *                <p>
     *                   <code>"SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_COMMON","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false,\"securityGroups\":[{\"id\":\"
     *             sg-000e55995d61a06bd\"}]}"},"RemediationEnabled":false,"ResourceType":"AWS::EC2::NetworkInterface"}</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Example: <code>SECURITY_GROUPS_CONTENT_AUDIT</code>
     *                </p>
     *                <p>
     *                   <code>"SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_CONTENT_AUDIT","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\"
     *             sg-000e55995d61a06bd
     *             \"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"},"RemediationEnabled":false,"ResourceType":"AWS::EC2::NetworkInterface"}</code>
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
     *                   <code>"SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_USAGE_AUDIT","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"},"RemediationEnabled":false,"Resou
     *             rceType":"AWS::EC2::SecurityGroup"}</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ManagedServiceData?: string;
    /**
     * <p>The service that the policy is using to protect the resources. This specifies the type of
     *       policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security
     *       group policy. For security group policies, Firewall Manager supports one security group for
     *       each common policy and for each content audit policy. This is an adjustable limit that you can
     *       increase by contacting AWS Support.</p>
     */
    Type: SecurityServiceType | string | undefined;
}
export declare namespace SecurityServicePolicyData {
    function isa(o: any): o is SecurityServicePolicyData;
}
export declare enum SecurityServiceType {
    SECURITY_GROUPS_COMMON = "SECURITY_GROUPS_COMMON",
    SECURITY_GROUPS_CONTENT_AUDIT = "SECURITY_GROUPS_CONTENT_AUDIT",
    SECURITY_GROUPS_USAGE_AUDIT = "SECURITY_GROUPS_USAGE_AUDIT",
    SHIELD_ADVANCED = "SHIELD_ADVANCED",
    WAF = "WAF"
}
/**
 * <p>A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.  </p>
 */
export interface Tag {
    __type?: "Tag";
    /**
     * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
     */
    Key: string | undefined;
    /**
     * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.  </p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource. The Firewall Manager policy is the only AWS resource that supports tagging, so this ARN is a policy ARN.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to add to the resource.</p>
     */
    TagList: Array<Tag> | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource. The Firewall Manager policy is the only AWS resource that supports tagging, so this ARN is a policy ARN.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The keys of the tags to remove from the resource. </p>
     */
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
}
export declare enum ViolationReason {
    ResourceIncorrectWebAcl = "RESOURCE_INCORRECT_WEB_ACL",
    ResourceMissingSecurityGroup = "RESOURCE_MISSING_SECURITY_GROUP",
    ResourceMissingShieldProtection = "RESOURCE_MISSING_SHIELD_PROTECTION",
    ResourceMissingWebAcl = "RESOURCE_MISSING_WEB_ACL",
    ResourceMissingWebaclOrShieldProtection = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION",
    ResourceViolatesAuditSecurityGroup = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP",
    SecurityGroupRedundant = "SECURITY_GROUP_REDUNDANT",
    SecurityGroupUnused = "SECURITY_GROUP_UNUSED",
    WebAclMissingRuleGroup = "WEB_ACL_MISSING_RULE_GROUP"
}
