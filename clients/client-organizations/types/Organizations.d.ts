import { OrganizationsClient } from "./OrganizationsClient";
import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "./commands/AcceptHandshakeCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "./commands/CancelHandshakeCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "./commands/CreateAccountCommand";
import { CreateGovCloudAccountCommandInput, CreateGovCloudAccountCommandOutput } from "./commands/CreateGovCloudAccountCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "./commands/CreateOrganizationCommand";
import { CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput } from "./commands/CreateOrganizationalUnitCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "./commands/DeclineHandshakeCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "./commands/DeleteOrganizationCommand";
import { DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput } from "./commands/DeleteOrganizationalUnitCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "./commands/DescribeAccountCommand";
import { DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput } from "./commands/DescribeCreateAccountStatusCommand";
import { DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput } from "./commands/DescribeEffectivePolicyCommand";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput } from "./commands/DescribeHandshakeCommand";
import { DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput } from "./commands/DescribeOrganizationCommand";
import { DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput } from "./commands/DescribeOrganizationalUnitCommand";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "./commands/DescribePolicyCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import { DisableAWSServiceAccessCommandInput, DisableAWSServiceAccessCommandOutput } from "./commands/DisableAWSServiceAccessCommand";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput } from "./commands/DisablePolicyTypeCommand";
import { EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput } from "./commands/EnableAWSServiceAccessCommand";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput } from "./commands/EnableAllFeaturesCommand";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "./commands/EnablePolicyTypeCommand";
import { InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput } from "./commands/InviteAccountToOrganizationCommand";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput } from "./commands/LeaveOrganizationCommand";
import { ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput } from "./commands/ListAWSServiceAccessForOrganizationCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "./commands/ListAccountsCommand";
import { ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput } from "./commands/ListAccountsForParentCommand";
import { ListChildrenCommandInput, ListChildrenCommandOutput } from "./commands/ListChildrenCommand";
import { ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput } from "./commands/ListCreateAccountStatusCommand";
import { ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput } from "./commands/ListHandshakesForAccountCommand";
import { ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput } from "./commands/ListHandshakesForOrganizationCommand";
import { ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput } from "./commands/ListOrganizationalUnitsForParentCommand";
import { ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import { ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput } from "./commands/ListPoliciesForTargetCommand";
import { ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput } from "./commands/ListTargetsForPolicyCommand";
import { MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand";
import { RemoveAccountFromOrganizationCommandInput, RemoveAccountFromOrganizationCommandOutput } from "./commands/RemoveAccountFromOrganizationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput } from "./commands/UpdateOrganizationalUnitCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Organizations</fullname>
 */
export declare class Organizations extends OrganizationsClient {
    /**
     * <p>Sends a response to the originator of a handshake agreeing to the action proposed by the
     *       handshake request. </p>
     *          <p>This operation can be called only by the following principals when they also have the
     *       relevant IAM permissions:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Invitation to join</b> or <b>Approve
     *             all features request</b> handshakes: only a principal from the member account. </p>
     *                <p>The user who calls the API for an invitation to join must have the
     *             <code>organizations:AcceptHandshake</code> permission. If you enabled all features in
     *           the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code>
     *           permission so that AWS Organizations can create the required service-linked role named
     *             <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">AWS Organizations and Service-Linked Roles</a> in the
     *           <i>AWS Organizations User Guide</i>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Enable all features final confirmation</b> handshake:
     *           only a principal from the master account.</p>
     *                <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an
     *             AWS Account to Join Your Organization</a> in the
     *             <i>AWS Organizations User Guide.</i> For more information about requests to enable all
     *           features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the
     *             <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>After you accept a handshake, it continues to appear in the results of relevant APIs for
     *       only 30 days. After that, it's deleted.</p>
     */
    acceptHandshake(args: AcceptHandshakeCommandInput, options?: __HttpHandlerOptions): Promise<AcceptHandshakeCommandOutput>;
    acceptHandshake(args: AcceptHandshakeCommandInput, cb: (err: any, data?: AcceptHandshakeCommandOutput) => void): void;
    acceptHandshake(args: AcceptHandshakeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptHandshakeCommandOutput) => void): void;
    /**
     * <p>Attaches a policy to a root, an organizational unit (OU), or an individual account.</p>
     *          <p>How the policy affects accounts depends on the type of policy:</p>
     *          <ul>
     *             <li>
     *                <p>For more information about attaching SCPs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html">How SCPs
     *             Work</a> in the <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For information about attaching tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How
     *             Policy Inheritance Works</a> in the <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    attachPolicy(args: AttachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPolicyCommandOutput>;
    attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
    attachPolicy(args: AttachPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
    /**
     * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
     *         <code>CANCELED</code>. </p>
     *          <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no
     *       longer respond to that handshake.</p>
     *          <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for
     *       only 30 days. After that, it's deleted.</p>
     */
    cancelHandshake(args: CancelHandshakeCommandInput, options?: __HttpHandlerOptions): Promise<CancelHandshakeCommandOutput>;
    cancelHandshake(args: CancelHandshakeCommandInput, cb: (err: any, data?: CancelHandshakeCommandOutput) => void): void;
    cancelHandshake(args: CancelHandshakeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelHandshakeCommandOutput) => void): void;
    /**
     * <p>Creates an AWS account that is automatically a member of the organization whose
     *       credentials made the request. This is an asynchronous request that AWS performs in the
     *       background. Because <code>CreateAccount</code> operates asynchronously, it can return a
     *       successful completion message even though account initialization might still be in progress.
     *       You might need to wait a few minutes before you can successfully access the account. To check
     *       the status of the request, do one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>Use the <code>OperationId</code> response element from this operation to provide as a
     *           parameter to the <a>DescribeCreateAccountStatus</a> operation.</p>
     *             </li>
     *             <li>
     *                <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on
     *           using AWS CloudTrail with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring
     *             the Activity in Your Organization</a> in the
     *           <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p></p>
     *          <p>The user who calls the API to create an account must have the
     *         <code>organizations:CreateAccount</code> permission. If you enabled all features in the
     *       organization, AWS Organizations creates the required service-linked role named
     *         <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations
     *         and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p>
     *          <p>AWS Organizations preconfigures the new member account with a role (named
     *         <code>OrganizationAccountAccessRole</code> by default) that grants users in the master
     *       account administrator permissions in the new member account. Principals in the master account
     *       can assume the role. AWS Organizations clones the company name and address information for the new
     *       account from the organization's master account.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     *          <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS
     *
     *         Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <important>
     *             <ul>
     *                <li>
     *                   <p>When you create an account in an organization, the information required for the
     *             account to operate as a standalone account is <i>not</i> automatically
     *             collected. For example, information about the payment method and signing the end user
     *             license agreement (EULA) is not collected. If you must remove an account from your
     *             organization later, you can do so only after you provide the missing information. Follow
     *             the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave
     *               an organization as a member account</a> in the
     *               <i>AWS Organizations User Guide</i>.</p>
     *                </li>
     *                <li>
     *                   <p>If you get an exception that indicates that you exceeded your account limits for the
     *             organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS
     *             Support</a>.</p>
     *                </li>
     *                <li>
     *                   <p>If you get an exception that indicates that the operation failed because your
     *             organization is still initializing, wait one hour and then try again. If the error
     *             persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
     *                </li>
     *                <li>
     *                   <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't
     *             recommended. You can only close an account from the Billing and Cost Management Console,
     *             and you must be signed in as the root user. For information on the requirements and
     *             process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in
     *             the <i>AWS Organizations User Guide</i>.</p>
     *                </li>
     *             </ul>
     *          </important>
     *          <note>
     *             <p>When you create a member account with this operation, you can choose whether to create
     *         the account with the <b>IAM User and Role Access to Billing
     *           Information</b> switch enabled. If you enable it, IAM users and roles that have
     *         appropriate permissions can view billing information for the account. If you disable it,
     *         only the account root user can access billing information. For information about how to
     *         disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and
     *           Tools</a>.</p>
     *          </note>
     */
    createAccount(args: CreateAccountCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountCommandOutput>;
    createAccount(args: CreateAccountCommandInput, cb: (err: any, data?: CreateAccountCommandOutput) => void): void;
    createAccount(args: CreateAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccountCommandOutput) => void): void;
    /**
     * <p>This action is available if all of the following are true:</p>
     *          <ul>
     *             <li>
     *                <p>You're authorized to create accounts in the AWS GovCloud (US) Region. For more
     *           information on the AWS GovCloud (US) Region, see the <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html">
     *                      <i>AWS GovCloud User Guide</i>.</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>You already have an account in the AWS GovCloud (US) Region that is associated with
     *           your master account in the commercial Region. </p>
     *             </li>
     *             <li>
     *                <p>You call this action from the master account of your organization in the commercial
     *           Region.</p>
     *             </li>
     *             <li>
     *                <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. AWS Organizations
     *           creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more
     *           information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the
     *           <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>AWS automatically enables AWS CloudTrail for AWS GovCloud (US) accounts, but you should also do
     *       the following:</p>
     *          <ul>
     *             <li>
     *                <p>Verify that AWS CloudTrail is enabled to store logs.</p>
     *             </li>
     *             <li>
     *                <p>Create an S3 bucket for AWS CloudTrail log storage.</p>
     *                <p>For more information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying AWS CloudTrail Is Enabled</a> in the <i>AWS GovCloud User Guide</i>.
     *         </p>
     *             </li>
     *          </ul>
     *          <p>You call this action from the master account of your organization in the commercial Region
     *       to create a standalone AWS account in the AWS GovCloud (US) Region. After the account is
     *       created, the master account of an organization in the AWS GovCloud (US) Region can invite it
     *       to that organization. For more information on inviting standalone accounts in the AWS
     *       GovCloud (US) to join an organization, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the
     *       <i>AWS GovCloud User Guide.</i>
     *          </p>
     *          <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that AWS performs
     *       in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can
     *       return a successful completion message even though account initialization might still be in
     *       progress. You might need to wait a few minutes before you can successfully access the account.
     *       To check the status of the request, do one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>Use the <code>OperationId</code> response element from this operation to provide as a
     *           parameter to the <a>DescribeCreateAccountStatus</a> operation.</p>
     *             </li>
     *             <li>
     *                <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on
     *           using AWS CloudTrail with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the
     *             Activity in Your Organization</a> in the
     *           <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p></p>
     *          <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a
     *       standalone account in the AWS GovCloud (US) Region and an associated account in the
     *       commercial Region for billing and support purposes. The account in the commercial Region is
     *       automatically a member of the organization whose credentials made the request. Both accounts
     *       are associated with the same email address.</p>
     *          <p>A role is created in the new account in the commercial Region that allows the master
     *       account in the organization in the commercial Region to assume it. An AWS GovCloud (US)
     *       account is then created and associated with the commercial account that you just created. A
     *       role is created in the new AWS GovCloud (US) account. This role can be assumed by the AWS
     *       GovCloud (US) account that is associated with the master account of the commercial
     *       organization. For more information and to view a diagram that explains how account access
     *       works, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in
     *       the
     *       <i>AWS GovCloud User Guide.</i>
     *          </p>
     *
     *
     *          <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS
     *         Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <important>
     *             <ul>
     *                <li>
     *                   <p>You can create an account in an organization using the AWS Organizations console, API, or CLI
     *             commands. When you do, the information required for the account to operate as a
     *             standalone account, such as a payment method, is <i>not</i> automatically
     *             collected. If you must remove an account from your organization later, you can do so
     *             only after you provide the missing information. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave
     *               an organization as a member account</a> in the
     *               <i>AWS Organizations User Guide.</i>
     *                   </p>
     *                </li>
     *                <li>
     *                   <p>If you get an exception that indicates that you exceeded your account limits for the
     *             organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS
     *             Support</a>.</p>
     *                </li>
     *                <li>
     *                   <p>If you get an exception that indicates that the operation failed because your
     *             organization is still initializing, wait one hour and then try again. If the error
     *             persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
     *                </li>
     *                <li>
     *                   <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't
     *             recommended. You can only close an account from the AWS Billing and Cost Management
     *             console, and you must be signed in as the root user. For information on the requirements
     *             and process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in
     *             the <i>AWS Organizations User Guide</i>.</p>
     *                </li>
     *             </ul>
     *          </important>
     *          <note>
     *             <p>When you create a member account with this operation, you can choose whether to create
     *         the account with the <b>IAM User and Role Access to Billing
     *           Information</b> switch enabled. If you enable it, IAM users and roles that have
     *         appropriate permissions can view billing information for the account. If you disable it,
     *         only the account root user can access billing information. For information about how to
     *         disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and
     *           Tools</a>.</p>
     *          </note>
     */
    createGovCloudAccount(args: CreateGovCloudAccountCommandInput, options?: __HttpHandlerOptions): Promise<CreateGovCloudAccountCommandOutput>;
    createGovCloudAccount(args: CreateGovCloudAccountCommandInput, cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void): void;
    createGovCloudAccount(args: CreateGovCloudAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void): void;
    /**
     * <p>Creates an AWS organization. The account whose user is calling the
     *         <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/orgs_getting-started_concepts.html#account">master
     *         account</a> of the new organization.</p>
     *          <p>This operation must be called using credentials from the account that is to become the new
     *       organization's master account. The principal must also have the relevant IAM
     *       permissions.</p>
     *          <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the
     *       new organization is created with all features enabled. In addition, service control policies
     *       are automatically enabled in the root. If you instead create the organization supporting only
     *       the consolidated billing features, no policy types are enabled by default, and you can't use
     *       organization policies.</p>
     */
    createOrganization(args: CreateOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrganizationCommandOutput>;
    createOrganization(args: CreateOrganizationCommandInput, cb: (err: any, data?: CreateOrganizationCommandOutput) => void): void;
    createOrganization(args: CreateOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOrganizationCommandOutput) => void): void;
    /**
     * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for
     *       accounts that enables you to organize your accounts to apply policies according to your
     *       business requirements. The number of levels deep that you can nest OUs is dependent upon the
     *       policy types enabled for that root. For service control policies, the limit is five. </p>
     *          <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
     *         <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    createOrganizationalUnit(args: CreateOrganizationalUnitCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrganizationalUnitCommandOutput>;
    createOrganizationalUnit(args: CreateOrganizationalUnitCommandInput, cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void): void;
    createOrganizationalUnit(args: CreateOrganizationalUnitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void): void;
    /**
     * <p>Creates a policy of a specified type that you can attach to a root, an organizational unit
     *       (OU), or an individual AWS account.</p>
     *          <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization
     *         Policies</a>.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
    createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    createPolicy(args: CreatePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
    /**
     * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and
     *       effectively deactivates the request.</p>
     *          <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
     *       instead. The originator can't reactivate a declined request, but can reinitiate the process
     *       with a new handshake request.</p>
     *          <p>After you decline a handshake, it continues to appear in the results of relevant API
     *       operations for only 30 days. After that, it's deleted.</p>
     */
    declineHandshake(args: DeclineHandshakeCommandInput, options?: __HttpHandlerOptions): Promise<DeclineHandshakeCommandOutput>;
    declineHandshake(args: DeclineHandshakeCommandInput, cb: (err: any, data?: DeclineHandshakeCommandOutput) => void): void;
    declineHandshake(args: DeclineHandshakeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeclineHandshakeCommandOutput) => void): void;
    /**
     * <p>Deletes the organization. You can delete an organization only by using credentials from
     *       the master account. The organization must be empty of member accounts.</p>
     */
    deleteOrganization(args: DeleteOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOrganizationCommandOutput>;
    deleteOrganization(args: DeleteOrganizationCommandInput, cb: (err: any, data?: DeleteOrganizationCommandOutput) => void): void;
    deleteOrganization(args: DeleteOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOrganizationCommandOutput) => void): void;
    /**
     * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all
     *       accounts and child OUs from the OU that you want to delete.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    deleteOrganizationalUnit(args: DeleteOrganizationalUnitCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOrganizationalUnitCommandOutput>;
    deleteOrganizationalUnit(args: DeleteOrganizationalUnitCommandInput, cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void): void;
    deleteOrganizationalUnit(args: DeleteOrganizationalUnitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void): void;
    /**
     * <p>Deletes the specified policy from your organization. Before you perform this operation,
     *       you must first detach the policy from all organizational units (OUs), roots, and
     *       accounts.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
    deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    deletePolicy(args: DeletePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves AWS Organizations related information about the specified account.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    describeAccount(args: DescribeAccountCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountCommandOutput>;
    describeAccount(args: DescribeAccountCommandInput, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
    describeAccount(args: DescribeAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
    /**
     * <p>Retrieves the current status of an asynchronous request to create an account.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    describeCreateAccountStatus(args: DescribeCreateAccountStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCreateAccountStatusCommandOutput>;
    describeCreateAccountStatus(args: DescribeCreateAccountStatusCommandInput, cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void): void;
    describeCreateAccountStatus(args: DescribeCreateAccountStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void): void;
    /**
     * <p>Returns the contents of the effective tag policy for the account. The effective tag policy
     *       is the aggregation of any tag policies the account inherits, plus any policy directly that is
     *       attached to the account. </p>
     *          <p>This action returns information on tag policies only.</p>
     *          <p>For more information on policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
     *         Works</a> in the <i>AWS Organizations User Guide</i>.</p>
     *          <p>This operation can be called from any account in the organization.</p>
     */
    describeEffectivePolicy(args: DescribeEffectivePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEffectivePolicyCommandOutput>;
    describeEffectivePolicy(args: DescribeEffectivePolicyCommandInput, cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void): void;
    describeEffectivePolicy(args: DescribeEffectivePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a previously requested handshake. The handshake ID comes from
     *       the response to the original <a>InviteAccountToOrganization</a> operation that
     *       generated the handshake.</p>
     *          <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
     *         <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted
     *       and no longer accessible.</p>
     *          <p>This operation can be called from any account in the organization.</p>
     */
    describeHandshake(args: DescribeHandshakeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHandshakeCommandOutput>;
    describeHandshake(args: DescribeHandshakeCommandInput, cb: (err: any, data?: DescribeHandshakeCommandOutput) => void): void;
    describeHandshake(args: DescribeHandshakeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHandshakeCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the organization that the user's account belongs to.</p>
     *          <p>This operation can be called from any account in the organization.</p>
     *          <note>
     *             <p>Even if a policy type is shown as available in the organization, you can disable it
     *         separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p>
     *          </note>
     */
    describeOrganization(args: DescribeOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationCommandOutput>;
    describeOrganization(args: DescribeOrganizationCommandInput, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    describeOrganization(args: DescribeOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an organizational unit (OU).</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    describeOrganizationalUnit(args: DescribeOrganizationalUnitCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrganizationalUnitCommandOutput>;
    describeOrganizationalUnit(args: DescribeOrganizationalUnitCommandInput, cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void): void;
    describeOrganizationalUnit(args: DescribeOrganizationalUnitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a policy.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    describePolicy(args: DescribePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribePolicyCommandOutput>;
    describePolicy(args: DescribePolicyCommandInput, cb: (err: any, data?: DescribePolicyCommandOutput) => void): void;
    describePolicy(args: DescribePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePolicyCommandOutput) => void): void;
    /**
     * <p>Detaches a policy from a target root, organizational unit (OU), or account. If the policy
     *       being detached is a service control policy (SCP), the changes to permissions for IAM users
     *       and roles in affected accounts are immediate.</p>
     *          <p>
     *             <b>Note:</b> Every root, OU, and account must have at least one
     *       SCP attached. You can replace the default <code>FullAWSAccess</code> policy with one that
     *       limits the permissions that can be delegated. To do that, you must attach the replacement
     *       policy before you can remove the default one. This is the authorization strategy of using an
     *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_whitelist">allow list</a>. You could instead attach a second SCP and leave the
     *         <code>FullAWSAccess</code> SCP still attached. You could then specify <code>"Effect":
     *         "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the
     *         <code>FullAWSAccess</code> policy (or any other attached SCP). If you take these steps,
     *       you're using the authorization strategy of a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_blacklist">deny list</a>. </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    detachPolicy(args: DetachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPolicyCommandOutput>;
    detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
    detachPolicy(args: DetachPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
    /**
     * <p>Disables the integration of an AWS service (the service that is specified by
     *         <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the specified
     *       service no longer can create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This
     *       means the service can't perform operations on your behalf on any new accounts in your
     *       organization. The service can still perform operations in older accounts until the service
     *       completes its clean-up from AWS Organizations.</p>
     *          <p></p>
     *          <important>
     *             <p>We recommend that you disable integration between AWS Organizations and the specified AWS
     *         service by using the console or commands that are provided by the specified service. Doing
     *         so ensures that the other service is aware that it can clean up any resources that are
     *         required only for the integration. How the service cleans up its resources in the
     *         organization's accounts depends on that service. For more information, see the documentation
     *         for the other AWS service.</p>
     *          </important>
     *          <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified
     *       service can no longer perform operations in your organization's accounts. The only exception
     *       is when the operations are explicitly permitted by IAM policies that are attached to your
     *       roles. </p>
     *          <p>For more information about integrating other services with AWS Organizations, including the list of
     *       services that work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the
     *         <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    disableAWSServiceAccess(args: DisableAWSServiceAccessCommandInput, options?: __HttpHandlerOptions): Promise<DisableAWSServiceAccessCommandOutput>;
    disableAWSServiceAccess(args: DisableAWSServiceAccessCommandInput, cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void): void;
    disableAWSServiceAccess(args: DisableAWSServiceAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void): void;
    /**
     * <p>Disables an organizational control policy type in a root and detaches all policies of that
     *       type from the organization root, OUs, and accounts. A policy of a certain type can be attached
     *       to entities in a root only if that type is enabled in the root. After you perform this
     *       operation, you no longer can attach policies of the specified type to that root or to any
     *       organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p>
     *          <p>This is an asynchronous request that AWS performs in the background. If you disable a
     *       policy for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all
     *         features</a> are enabled for the organization. AWS recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use
     *       this operation. </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     *          <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
     */
    disablePolicyType(args: DisablePolicyTypeCommandInput, options?: __HttpHandlerOptions): Promise<DisablePolicyTypeCommandOutput>;
    disablePolicyType(args: DisablePolicyTypeCommandInput, cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void): void;
    disablePolicyType(args: DisablePolicyTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void): void;
    /**
     * <p>Enables the integration of an AWS service (the service that is specified by
     *         <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow the
     *       specified service to create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the
     *       service to perform operations on your behalf in your organization and its accounts.</p>
     *          <important>
     *             <p>We recommend that you enable integration between AWS Organizations and the specified AWS
     *         service by using the console or commands that are provided by the specified service. Doing
     *         so ensures that the service is aware that it can create the resources that are required for
     *         the integration. How the service creates those resources in the organization's accounts
     *         depends on that service. For more information, see the documentation for the other AWS
     *         service.</p>
     *          </important>
     *          <p>For more information about enabling services to integrate with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS
     *         Services</a> in the <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <p>This operation can be called only from the organization's master account and only if the
     *       organization has <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled
     *         all features</a>.</p>
     */
    enableAWSServiceAccess(args: EnableAWSServiceAccessCommandInput, options?: __HttpHandlerOptions): Promise<EnableAWSServiceAccessCommandOutput>;
    enableAWSServiceAccess(args: EnableAWSServiceAccessCommandInput, cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void): void;
    enableAWSServiceAccess(args: EnableAWSServiceAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void): void;
    /**
     * <p>Enables all features in an organization. This enables the use of organization policies
     *       that can restrict the services and actions that can be called in each account. Until you
     *       enable all features, you have access only to consolidated billing. You can't use any of the
     *       advanced account administration features that AWS Organizations supports. For more information, see
     *         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the
     *         <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <important>
     *             <p>This operation is required only for organizations that were created explicitly with only
     *         the consolidated billing features enabled. Calling this operation sends a handshake to every
     *         invited account in the organization. The feature set change can be finalized and the
     *         additional features enabled only after all administrators in the invited accounts approve
     *         the change. Accepting the handshake approves the change.</p>
     *          </important>
     *          <p>After you enable all features, you can separately enable or disable individual policy
     *       types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p>
     *          <p>After all invited member accounts accept the handshake, you finalize the feature set
     *       change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>.
     *       This completes the change.</p>
     *          <p>After you enable all features in your organization, the master account in the organization
     *       can apply policies on all member accounts. These policies can restrict what users and even
     *       administrators in those accounts can do. The master account can apply policies that prevent
     *       accounts from leaving the organization. Ensure that your account administrators are aware of
     *       this.</p>
     *          <p>This operation can be called only from the organization's master account. </p>
     */
    enableAllFeatures(args: EnableAllFeaturesCommandInput, options?: __HttpHandlerOptions): Promise<EnableAllFeaturesCommandOutput>;
    enableAllFeatures(args: EnableAllFeaturesCommandInput, cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void): void;
    enableAllFeatures(args: EnableAllFeaturesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void): void;
    /**
     * <p>Enables a policy type in a root. After you enable a policy type in a root, you can attach
     *       policies of that type to the root, any organizational unit (OU), or account in that root. You
     *       can undo this by using the <a>DisablePolicyType</a> operation.</p>
     *          <p>This is an asynchronous request that AWS performs in the background. AWS recommends
     *       that you first use <a>ListRoots</a> to see the status of policy types for a
     *       specified root, and then use this operation. </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     *          <p>You can enable a policy type in a root only if that policy type is available in the
     *       organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
     */
    enablePolicyType(args: EnablePolicyTypeCommandInput, options?: __HttpHandlerOptions): Promise<EnablePolicyTypeCommandOutput>;
    enablePolicyType(args: EnablePolicyTypeCommandInput, cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void): void;
    enablePolicyType(args: EnablePolicyTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void): void;
    /**
     * <p>Sends an invitation to another account to join your organization as a member account.
     *       AWS Organizations sends email on your behalf to the email address that is associated with the other
     *       account's owner. The invitation is implemented as a <a>Handshake</a> whose details
     *       are in the response.</p>
     *          <important>
     *             <ul>
     *                <li>
     *                   <p>You can invite AWS accounts only from the same seller as the master account. For
     *             example, assume that your organization's master account was created by Amazon Internet
     *             Services Pvt. Ltd (AISPL), an AWS seller in India. You can invite only other AISPL
     *             accounts to your organization. You can't combine accounts from AISPL and AWS or from
     *             any other AWS seller. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in
     *               India</a>.</p>
     *                </li>
     *                <li>
     *                   <p>You might receive an exception that indicates that you exceeded your account limits
     *             for the organization or that the operation failed because your organization is still
     *             initializing. If so, wait one hour and then try again. If the error persists after an
     *             hour, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
     *                </li>
     *             </ul>
     *          </important>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    inviteAccountToOrganization(args: InviteAccountToOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<InviteAccountToOrganizationCommandOutput>;
    inviteAccountToOrganization(args: InviteAccountToOrganizationCommandInput, cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void): void;
    inviteAccountToOrganization(args: InviteAccountToOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void): void;
    /**
     * <p>Removes a member account from its parent organization. This version of the operation is
     *       performed by the account that wants to leave. To remove a member account as a user in the
     *       master account, use <a>RemoveAccountFromOrganization</a> instead.</p>
     *          <p>This operation can be called only from a member account in the organization.</p>
     *          <important>
     *             <ul>
     *                <li>
     *                   <p>The master account in an organization with all features enabled can set service
     *             control policies (SCPs) that can restrict what administrators of member accounts can do.
     *             These restrictions can include preventing member accounts from successfully calling
     *               <code>LeaveOrganization</code>. </p>
     *                </li>
     *                <li>
     *                   <p>You can leave an organization as a member account only if the account is configured
     *             with the information required to operate as a standalone account. When you create an
     *             account in an organization using the AWS Organizations console, API, or CLI, the information
     *             required of standalone accounts is <i>not</i> automatically collected. For
     *             each account that you want to make standalone, you must accept the end user license
     *             agreement (EULA). You must also choose a support plan, provide and verify the required
     *             contact information, and provide a current payment method. AWS uses the payment method
     *             to charge for any billable (not free tier) AWS activity that occurs while the account
     *             isn't attached to an organization. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave
     *               an organization when all required account information has not yet been
     *               provided</a> in the <i>AWS Organizations User Guide.</i>
     *                   </p>
     *                </li>
     *                <li>
     *                   <p>You can leave an organization only after you enable IAM user access to billing in
     *             your account. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating
     *               Access to the Billing and Cost Management Console</a> in the
     *               <i>AWS Billing and Cost Management User Guide.</i>
     *                   </p>
     *                </li>
     *             </ul>
     *          </important>
     */
    leaveOrganization(args: LeaveOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<LeaveOrganizationCommandOutput>;
    leaveOrganization(args: LeaveOrganizationCommandInput, cb: (err: any, data?: LeaveOrganizationCommandOutput) => void): void;
    leaveOrganization(args: LeaveOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LeaveOrganizationCommandOutput) => void): void;
    /**
     * <p>Returns a list of the AWS services that you enabled to integrate with your organization.
     *       After a service on this list creates the resources that it requires for the integration, it
     *       can perform operations on your organization and its accounts.</p>
     *          <p>For more information about integrating other services with AWS Organizations, including the list of
     *       services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS
     *         Services</a> in the <i>AWS Organizations User Guide.</i>
     *          </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listAWSServiceAccessForOrganization(args: ListAWSServiceAccessForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<ListAWSServiceAccessForOrganizationCommandOutput>;
    listAWSServiceAccessForOrganization(args: ListAWSServiceAccessForOrganizationCommandInput, cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void): void;
    listAWSServiceAccessForOrganization(args: ListAWSServiceAccessForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void): void;
    /**
     * <p>Lists all the accounts in the organization. To request only the accounts in a specified
     *       root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation
     *       instead.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
    listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
    listAccounts(args: ListAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
    /**
     * <p>Lists the accounts in an organization that are contained by the specified target root or
     *       organizational unit (OU). If you specify the root, you get a list of all the accounts that
     *       aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and
     *       not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listAccountsForParent(args: ListAccountsForParentCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsForParentCommandOutput>;
    listAccountsForParent(args: ListAccountsForParentCommandInput, cb: (err: any, data?: ListAccountsForParentCommandOutput) => void): void;
    listAccountsForParent(args: ListAccountsForParentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountsForParentCommandOutput) => void): void;
    /**
     * <p>Lists all of the organizational units (OUs) or accounts that are contained in the
     *       specified parent OU or root. This operation, along with <a>ListParents</a> enables
     *       you to traverse the tree structure that makes up this root.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listChildren(args: ListChildrenCommandInput, options?: __HttpHandlerOptions): Promise<ListChildrenCommandOutput>;
    listChildren(args: ListChildrenCommandInput, cb: (err: any, data?: ListChildrenCommandOutput) => void): void;
    listChildren(args: ListChildrenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChildrenCommandOutput) => void): void;
    /**
     * <p>Lists the account creation requests that match the specified status that is currently
     *       being tracked for the organization.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listCreateAccountStatus(args: ListCreateAccountStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListCreateAccountStatusCommandOutput>;
    listCreateAccountStatus(args: ListCreateAccountStatusCommandInput, cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void): void;
    listCreateAccountStatus(args: ListCreateAccountStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void): void;
    /**
     * <p>Lists the current handshakes that are associated with the account of the requesting
     *       user.</p>
     *          <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code>
     *       appear in the results of this API for only 30 days after changing to that state. After that,
     *       they're deleted and no longer accessible.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called from any account in the organization.</p>
     */
    listHandshakesForAccount(args: ListHandshakesForAccountCommandInput, options?: __HttpHandlerOptions): Promise<ListHandshakesForAccountCommandOutput>;
    listHandshakesForAccount(args: ListHandshakesForAccountCommandInput, cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void): void;
    listHandshakesForAccount(args: ListHandshakesForAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void): void;
    /**
     * <p>Lists the handshakes that are associated with the organization that the requesting user is
     *       part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake
     *       structures. Each structure contains details and status about a handshake.</p>
     *          <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code>
     *       appear in the results of this API for only 30 days after changing to that state. After that,
     *       they're deleted and no longer accessible.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listHandshakesForOrganization(args: ListHandshakesForOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<ListHandshakesForOrganizationCommandOutput>;
    listHandshakesForOrganization(args: ListHandshakesForOrganizationCommandInput, cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void): void;
    listHandshakesForOrganization(args: ListHandshakesForOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void): void;
    /**
     * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listOrganizationalUnitsForParent(args: ListOrganizationalUnitsForParentCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationalUnitsForParentCommandOutput>;
    listOrganizationalUnitsForParent(args: ListOrganizationalUnitsForParentCommandInput, cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void): void;
    listOrganizationalUnitsForParent(args: ListOrganizationalUnitsForParentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void): void;
    /**
     * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the
     *       specified child OU or account. This operation, along with <a>ListChildren</a>
     *       enables you to traverse the tree structure that makes up this root.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     *          <note>
     *             <p>In the current release, a child can have only a single parent. </p>
     *          </note>
     */
    listParents(args: ListParentsCommandInput, options?: __HttpHandlerOptions): Promise<ListParentsCommandOutput>;
    listParents(args: ListParentsCommandInput, cb: (err: any, data?: ListParentsCommandOutput) => void): void;
    listParents(args: ListParentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListParentsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of all policies in an organization of a specified type.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
    listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    listPolicies(args: ListPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the policies that are directly attached to the specified target root, organizational
     *       unit (OU), or account. You must specify the policy type that you want included in the returned
     *       list.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listPoliciesForTarget(args: ListPoliciesForTargetCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesForTargetCommandOutput>;
    listPoliciesForTarget(args: ListPoliciesForTargetCommandInput, cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void): void;
    listPoliciesForTarget(args: ListPoliciesForTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void): void;
    /**
     * <p>Lists the roots that are defined in the current organization.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     *          <note>
     *             <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're
     *         available in the organization. When you enable all features, you make policy types available
     *         for use in that organization. Individual policy types can then be enabled and disabled in a
     *         root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p>
     *          </note>
     */
    listRoots(args: ListRootsCommandInput, options?: __HttpHandlerOptions): Promise<ListRootsCommandOutput>;
    listRoots(args: ListRootsCommandInput, cb: (err: any, data?: ListRootsCommandOutput) => void): void;
    listRoots(args: ListRootsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRootsCommandOutput) => void): void;
    /**
     * <p>Lists tags for the specified resource. </p>
     *
     *          <p>Currently, you can list tags on an account in AWS Organizations.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is
     *       attached to.</p>
     *          <note>
     *             <p>Always check the <code>NextToken</code> response parameter
     *     for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
     *     occasionally return an empty set of results even when there are more results available. The
     *     <code>NextToken</code> response parameter value is <code>null</code>
     *                <i>only</i>
     *     when there are no more results to display.</p>
     *          </note>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsForPolicyCommandOutput>;
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void): void;
    listTargetsForPolicy(args: ListTargetsForPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void): void;
    /**
     * <p>Moves an account from its current source parent root or organizational unit (OU) to the
     *       specified destination parent root or OU.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    moveAccount(args: MoveAccountCommandInput, options?: __HttpHandlerOptions): Promise<MoveAccountCommandOutput>;
    moveAccount(args: MoveAccountCommandInput, cb: (err: any, data?: MoveAccountCommandOutput) => void): void;
    moveAccount(args: MoveAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MoveAccountCommandOutput) => void): void;
    /**
     * <p>Removes the specified account from the organization.</p>
     *          <p>The removed account becomes a standalone account that isn't a member of any organization.
     *       It's no longer subject to any policies and is responsible for its own bill payments. The
     *       organization's master account is no longer charged for any expenses accrued by the member
     *       account after it's removed from the organization.</p>
     *          <p>This operation can be called only from the organization's master account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p>
     *          <important>
     *             <p>You can remove an account from your organization only if the account is configured with
     *         the information required to operate as a standalone account. When you create an account in
     *         an organization using the AWS Organizations console, API, or CLI, the information required of
     *         standalone accounts is <i>not</i> automatically collected. For an account that
     *         you want to make standalone, you must accept the end user license agreement (EULA). You must
     *         also choose a support plan, provide and verify the required contact information, and provide
     *         a current payment method. AWS uses the payment method to charge for any billable (not free
     *         tier) AWS activity that occurs while the account isn't attached to an organization. To
     *         remove an account that doesn't yet have this information, you must sign in as the member
     *         account. Then follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an
     *           organization when all required account information has not yet been provided</a> in
     *         the <i>AWS Organizations User Guide.</i>
     *             </p>
     *          </important>
     */
    removeAccountFromOrganization(args: RemoveAccountFromOrganizationCommandInput, options?: __HttpHandlerOptions): Promise<RemoveAccountFromOrganizationCommandOutput>;
    removeAccountFromOrganization(args: RemoveAccountFromOrganizationCommandInput, cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void): void;
    removeAccountFromOrganization(args: RemoveAccountFromOrganizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the specified resource.</p>
     *
     *          <p>Currently, you can tag and untag accounts in AWS Organizations.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from the specified resource. </p>
     *
     *          <p>Currently, you can tag and untag accounts in AWS Organizations.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs
     *       and accounts remain in place, and any attached policies of the OU remain attached. </p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    updateOrganizationalUnit(args: UpdateOrganizationalUnitCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOrganizationalUnitCommandOutput>;
    updateOrganizationalUnit(args: UpdateOrganizationalUnitCommandInput, cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void): void;
    updateOrganizationalUnit(args: UpdateOrganizationalUnitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void): void;
    /**
     * <p>Updates an existing policy with a new name, description, or content. If you don't supply
     *       any parameter, that value remains unchanged. You can't change a policy's type.</p>
     *          <p>This operation can be called only from the organization's master account.</p>
     */
    updatePolicy(args: UpdatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePolicyCommandOutput>;
    updatePolicy(args: UpdatePolicyCommandInput, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
    updatePolicy(args: UpdatePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
}
