// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptHandshakeCommand,
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput,
} from "./commands/AcceptHandshakeCommand";
import {
  AttachPolicyCommand,
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput,
} from "./commands/AttachPolicyCommand";
import {
  CancelHandshakeCommand,
  CancelHandshakeCommandInput,
  CancelHandshakeCommandOutput,
} from "./commands/CancelHandshakeCommand";
import {
  CloseAccountCommand,
  CloseAccountCommandInput,
  CloseAccountCommandOutput,
} from "./commands/CloseAccountCommand";
import {
  CreateAccountCommand,
  CreateAccountCommandInput,
  CreateAccountCommandOutput,
} from "./commands/CreateAccountCommand";
import {
  CreateGovCloudAccountCommand,
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand";
import {
  CreateOrganizationalUnitCommand,
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand";
import {
  CreateOrganizationCommand,
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  DeclineHandshakeCommand,
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput,
} from "./commands/DeclineHandshakeCommand";
import {
  DeleteOrganizationalUnitCommand,
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand";
import {
  DeleteOrganizationCommand,
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeregisterDelegatedAdministratorCommand,
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand";
import {
  DescribeAccountCommand,
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput,
} from "./commands/DescribeAccountCommand";
import {
  DescribeCreateAccountStatusCommand,
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand";
import {
  DescribeEffectivePolicyCommand,
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand";
import {
  DescribeHandshakeCommand,
  DescribeHandshakeCommandInput,
  DescribeHandshakeCommandOutput,
} from "./commands/DescribeHandshakeCommand";
import {
  DescribeOrganizationalUnitCommand,
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand";
import {
  DescribeOrganizationCommand,
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import {
  DescribePolicyCommand,
  DescribePolicyCommandInput,
  DescribePolicyCommandOutput,
} from "./commands/DescribePolicyCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DetachPolicyCommand,
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput,
} from "./commands/DetachPolicyCommand";
import {
  DisableAWSServiceAccessCommand,
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand";
import {
  DisablePolicyTypeCommand,
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput,
} from "./commands/DisablePolicyTypeCommand";
import {
  EnableAllFeaturesCommand,
  EnableAllFeaturesCommandInput,
  EnableAllFeaturesCommandOutput,
} from "./commands/EnableAllFeaturesCommand";
import {
  EnableAWSServiceAccessCommand,
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand";
import {
  EnablePolicyTypeCommand,
  EnablePolicyTypeCommandInput,
  EnablePolicyTypeCommandOutput,
} from "./commands/EnablePolicyTypeCommand";
import {
  InviteAccountToOrganizationCommand,
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand";
import {
  LeaveOrganizationCommand,
  LeaveOrganizationCommandInput,
  LeaveOrganizationCommandOutput,
} from "./commands/LeaveOrganizationCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import {
  ListAccountsForParentCommand,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand";
import {
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand";
import {
  ListChildrenCommand,
  ListChildrenCommandInput,
  ListChildrenCommandOutput,
} from "./commands/ListChildrenCommand";
import {
  ListCreateAccountStatusCommand,
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand";
import {
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand";
import {
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand";
import {
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand";
import {
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand";
import {
  ListOrganizationalUnitsForParentCommand,
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand";
import { ListParentsCommand, ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPoliciesForTargetCommand,
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand";
import { ListRootsCommand, ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import { MoveAccountCommand, MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RegisterDelegatedAdministratorCommand,
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand";
import {
  RemoveAccountFromOrganizationCommand,
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateOrganizationalUnitCommand,
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand";
import {
  UpdatePolicyCommand,
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
} from "./commands/UpdatePolicyCommand";
import { OrganizationsClient } from "./OrganizationsClient";

/**
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *         <p>This guide provides descriptions of the Organizations operations. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *         <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *         <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
 *             more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *         <p>
 *             <b>Endpoint to call When using the CLI or the Amazon Web Services
 *                 SDK</b>
 *          </p>
 *         <p>For the current release of Organizations, specify the <code>us-east-1</code> region
 *             for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
 *             China. If calling from one of the Amazon Web Services Regions in China, then specify
 *                 <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
 *             and commands:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                 <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                 <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>Use the following parameter with each command to specify the endpoint:</p>
 *                 <p>
 *                   <code>--region us-east-1</code>
 *                     <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                 <p>or</p>
 *                 <p>
 *                   <code>--region cn-northwest-1</code>
 *                     <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Recording API Requests</b>
 *         </p>
 *         <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations Events with CloudTrail</a> in the <i>Organizations User Guide</i>.
 *             To learn more about CloudTrail, including how to turn it on and find your log files, see the
 *                 <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
 */
export class Organizations extends OrganizationsClient {
  /**
   * <p>Sends a response to the originator of a handshake agreeing to the action proposed by
   *             the handshake request.</p>
   *         <p>You can only call this operation by the following principals when they also have the
   *             relevant IAM permissions:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from
   *                     the member account.</p>
   *                 <p>The user who calls the API for an invitation to join must have the
   *                         <code>organizations:AcceptHandshake</code> permission. If you enabled all
   *                     features in the organization, the user must also have the
   *                         <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can
   *                     create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For
   *                     more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">Organizations and Service-Linked Roles</a> in the
   *                         <i>Organizations User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Enable all features final confirmation</b>
   *                     handshake: only a principal from the management account.</p>
   *                 <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an
   *                         Amazon Web Services account to join your organization</a> in the
   *                         <i>Organizations User Guide.</i> For more information about requests to
   *                     enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in
   *                     the <i>Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>After you accept a handshake, it continues to appear in the results of relevant APIs
   *             for only 30 days. After that, it's deleted.</p>
   */
  public acceptHandshake(
    args: AcceptHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptHandshakeCommandOutput>;
  public acceptHandshake(
    args: AcceptHandshakeCommandInput,
    cb: (err: any, data?: AcceptHandshakeCommandOutput) => void
  ): void;
  public acceptHandshake(
    args: AcceptHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptHandshakeCommandOutput) => void
  ): void;
  public acceptHandshake(
    args: AcceptHandshakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptHandshakeCommandOutput) => void),
    cb?: (err: any, data?: AcceptHandshakeCommandOutput) => void
  ): Promise<AcceptHandshakeCommandOutput> | void {
    const command = new AcceptHandshakeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a policy to a root, an organizational unit (OU), or an individual account.
   *             How the policy affects accounts depends on the type of policy. Refer to the
   *                 <i>Organizations User Guide</i> for information about each policy type:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPolicyCommandOutput>;
  public attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachPolicyCommandOutput) => void
  ): Promise<AttachPolicyCommandOutput> | void {
    const command = new AttachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
   *                 <code>CANCELED</code>.</p>
   *         <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient
   *             can no longer respond to that handshake.</p>
   *         <p>After you cancel a handshake, it continues to appear in the results of relevant APIs
   *             for only 30 days. After that, it's deleted.</p>
   */
  public cancelHandshake(
    args: CancelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelHandshakeCommandOutput>;
  public cancelHandshake(
    args: CancelHandshakeCommandInput,
    cb: (err: any, data?: CancelHandshakeCommandOutput) => void
  ): void;
  public cancelHandshake(
    args: CancelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelHandshakeCommandOutput) => void
  ): void;
  public cancelHandshake(
    args: CancelHandshakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelHandshakeCommandOutput) => void),
    cb?: (err: any, data?: CancelHandshakeCommandOutput) => void
  ): Promise<CancelHandshakeCommandOutput> | void {
    const command = new CancelHandshakeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Closes an Amazon Web Services member account within an organization. You can't close the management
   *             account with this API. This is an asynchronous request that Amazon Web Services performs in the
   *             background. Because <code>CloseAccount</code> operates asynchronously, it can return a
   *             successful completion message even though account closure might still be in progress.
   *             You need to wait a few minutes before the account is fully closed. To check the status
   *             of the request, do one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Use the <code>AccountId</code> that you sent in the <code>CloseAccount</code>
   *                     request to provide as a parameter to the <a>DescribeAccount</a>
   *                     operation. </p>
   *                 <p>While the close account request is in progress, Account status will indicate
   *                     PENDING_CLOSURE. When the close account request completes, the status will
   *                     change to SUSPENDED. </p>
   *             </li>
   *             <li>
   *                 <p>Check the CloudTrail log for the <code>CloseAccountResult</code> event that gets
   *                     published after the account closes successfully. For information on using CloudTrail
   *                     with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the
   *                         <i>Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <ul>
   *                <li>
   *                     <p>You can only close 10% of active member accounts within a rolling 30 day
   *                         period. This quota is not bound by a calendar month, but starts when you
   *                         close an account. Within 30 days of that initial account closure, you can't
   *                         exceed the 10% account closure limit.</p>
   *                 </li>
   *                <li>
   *                     <p>To reinstate a closed account, contact Amazon Web Services Support within the 90-day
   *                         grace period while the account is in SUSPENDED status. </p>
   *                 </li>
   *                <li>
   *                     <p>If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud
   *                         (US) account, the <code>CloseAccount</code> request will close both
   *                         accounts. To learn important pre-closure details, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/Closing-govcloud-account.html">
   *                             Closing an Amazon Web Services GovCloud (US) account</a> in the <i>
   *                             Amazon Web Services GovCloud User Guide</i>.</p>
   *                 </li>
   *             </ul>
   *         </note>
   *         <p>For more information about closing accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
   *                 Amazon Web Services account</a> in the <i>Organizations User Guide.</i>
   *          </p>
   */
  public closeAccount(
    args: CloseAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloseAccountCommandOutput>;
  public closeAccount(args: CloseAccountCommandInput, cb: (err: any, data?: CloseAccountCommandOutput) => void): void;
  public closeAccount(
    args: CloseAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseAccountCommandOutput) => void
  ): void;
  public closeAccount(
    args: CloseAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CloseAccountCommandOutput) => void),
    cb?: (err: any, data?: CloseAccountCommandOutput) => void
  ): Promise<CloseAccountCommandOutput> | void {
    const command = new CloseAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Web Services account that is automatically a member of the organization whose
   *             credentials made the request. This is an asynchronous request that Amazon Web Services performs in the
   *             background. Because <code>CreateAccount</code> operates asynchronously, it can return a
   *             successful completion message even though account initialization might still be in
   *             progress. You might need to wait a few minutes before you can successfully access the
   *             account. To check the status of the request, do one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response
   *                     element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For
   *                     information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the
   *                         <i>Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>The user who calls the API to create an account must have the
   *                 <code>organizations:CreateAccount</code> permission. If you enabled all features in
   *             the organization, Organizations creates the required service-linked role named
   *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the
   *                 <i>Organizations User Guide</i>.</p>
   *         <p>If the request includes tags, then the requester must have the
   *                 <code>organizations:TagResource</code> permission.</p>
   *         <p>Organizations preconfigures the new member account with a role (named
   *                 <code>OrganizationAccountAccessRole</code> by default) that grants users in the
   *             management account administrator permissions in the new member account. Principals in
   *             the management account can assume the role. Organizations clones the company name and address
   *             information for the new account from the organization's management account.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in
   *                 Your Organization</a> in the <i>Organizations User Guide.</i>
   *          </p>
   *         <important>
   *             <ul>
   *                <li>
   *                     <p>When you create an account in an organization using the Organizations console,
   *                         API, or CLI commands, the information required for the account to operate
   *                         as a standalone account, such as a payment method and signing the end user
   *                         license agreement (EULA) is <i>not</i> automatically
   *                         collected. If you must remove an account from your organization later, you
   *                         can do so only after you provide the missing information. Follow the steps
   *                         at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
   *                             <i>Organizations User Guide</i>.</p>
   *                 </li>
   *                <li>
   *                     <p>If you get an exception that indicates that you exceeded your account
   *                         limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
   *                 </li>
   *                <li>
   *                     <p>If you get an exception that indicates that the operation failed because
   *                         your organization is still initializing, wait one hour and then try again.
   *                         If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
   *                 </li>
   *                <li>
   *                     <p>Using <code>CreateAccount</code> to create multiple temporary accounts
   *                         isn't recommended. You can only close an account from the Billing and Cost Management console, and
   *                         you must be signed in as the root user. For information on the requirements
   *                         and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
   *                             Amazon Web Services account</a> in the
   *                         <i>Organizations User Guide</i>.</p>
   *                 </li>
   *             </ul>
   *         </important>
   *         <note>
   *             <p>When you create a member account with this operation, you can choose whether to
   *                 create the account with the <b>IAM User and Role Access to
   *                     Billing Information</b> switch enabled. If you enable it, IAM users and
   *                 roles that have appropriate permissions can view billing information for the
   *                 account. If you disable it, only the account root user can access billing
   *                 information. For information about how to disable this switch for an account, see
   *                     <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting
   *                     Access to Your Billing Information and Tools</a>.</p>
   *         </note>
   */
  public createAccount(
    args: CreateAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountCommandOutput>;
  public createAccount(
    args: CreateAccountCommandInput,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  public createAccount(
    args: CreateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;
  public createAccount(
    args: CreateAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccountCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountCommandOutput) => void
  ): Promise<CreateAccountCommandOutput> | void {
    const command = new CreateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This action is available if all of the following are true:</p>
   *         <ul>
   *             <li>
   *                 <p>You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For
   *                     more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html">
   *                      <i>Amazon Web Services GovCloud User Guide</i>.</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired
   *                     with a management account of an organization in the commercial Region.</p>
   *             </li>
   *             <li>
   *                 <p>You call this action from the management account of your organization in the
   *                     commercial Region.</p>
   *             </li>
   *             <li>
   *                 <p>You have the <code>organizations:CreateGovCloudAccount</code> permission.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>Organizations automatically creates the required service-linked role named
   *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the
   *                 <i>Organizations User Guide.</i>
   *          </p>
   *         <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also
   *             do the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Verify that CloudTrail is enabled to store logs.</p>
   *             </li>
   *             <li>
   *                 <p>Create an Amazon S3 bucket for CloudTrail log storage.</p>
   *                 <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is
   *                         Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>If the request includes tags, then the requester must have the
   *                 <code>organizations:TagResource</code> permission. The tags are attached to the
   *             commercial account associated with the GovCloud account, rather than the GovCloud
   *             account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud
   *             account exists.</p>
   *         <p>You call this action from the management account of your organization in the
   *             commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US)
   *             Region. After the account is created, the management account of an organization in the
   *             Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on
   *             inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see
   *                 <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the
   *                 <i>Amazon Web Services GovCloud User Guide.</i>
   *          </p>
   *         <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services
   *             performs in the background. Because <code>CreateGovCloudAccount</code> operates
   *             asynchronously, it can return a successful completion message even though account
   *             initialization might still be in progress. You might need to wait a few minutes before
   *             you can successfully access the account. To check the status of the request, do one of
   *             the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Use the <code>OperationId</code> response element from this operation to
   *                     provide as a parameter to the <a>DescribeCreateAccountStatus</a>
   *                     operation.</p>
   *             </li>
   *             <li>
   *                 <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For
   *                     information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your
   *                         Organization</a> in the <i>Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *         <p></p>
   *         <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts:
   *             a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the
   *             commercial Region for billing and support purposes. The account in the commercial Region
   *             is automatically a member of the organization whose credentials made the request. Both
   *             accounts are associated with the same email address.</p>
   *         <p>A role is created in the new account in the commercial Region that allows the
   *             management account in the organization in the commercial Region to assume it. An Amazon Web Services
   *             GovCloud (US) account is then created and associated with the commercial account that
   *             you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can
   *             be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management
   *             account of the commercial organization. For more information and to view a diagram that
   *             explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the
   *                 <i>Amazon Web Services GovCloud User Guide.</i>
   *          </p>
   *
   *
   *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating
   *                 an Amazon Web Services account in Your Organization</a> in the
   *                 <i>Organizations User Guide.</i>
   *          </p>
   *         <important>
   *             <ul>
   *                <li>
   *                     <p>When you create an account in an organization using the Organizations console,
   *                         API, or CLI commands, the information required for the account to operate as
   *                         a standalone account is <i>not</i> automatically collected.
   *                         This includes a payment method and signing the end user license agreement
   *                         (EULA). If you must remove an account from your organization later, you can
   *                         do so only after you provide the missing information. Follow the steps at
   *                             <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
   *                             <i>Organizations User Guide.</i>
   *                   </p>
   *                 </li>
   *                <li>
   *                     <p>If you get an exception that indicates that you exceeded your account
   *                         limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
   *                 </li>
   *                <li>
   *                     <p>If you get an exception that indicates that the operation failed because
   *                         your organization is still initializing, wait one hour and then try again.
   *                         If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
   *                 </li>
   *                <li>
   *                     <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary
   *                         accounts isn't recommended. You can only close an account from the Amazon Web Services
   *                         Billing and Cost Management console, and you must be signed in as the root user. For information on
   *                         the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
   *                             Amazon Web Services account</a> in the
   *                         <i>Organizations User Guide</i>.</p>
   *                 </li>
   *             </ul>
   *         </important>
   *         <note>
   *             <p>When you create a member account with this operation, you can choose whether to
   *                 create the account with the <b>IAM User and Role Access to
   *                     Billing Information</b> switch enabled. If you enable it, IAM users and
   *                 roles that have appropriate permissions can view billing information for the
   *                 account. If you disable it, only the account root user can access billing
   *                 information. For information about how to disable this switch for an account, see
   *                     <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting
   *                     Access to Your Billing Information and Tools</a>.</p>
   *         </note>
   */
  public createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGovCloudAccountCommandOutput>;
  public createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void
  ): void;
  public createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void
  ): void;
  public createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGovCloudAccountCommandOutput) => void),
    cb?: (err: any, data?: CreateGovCloudAccountCommandOutput) => void
  ): Promise<CreateGovCloudAccountCommandOutput> | void {
    const command = new CreateGovCloudAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Web Services organization. The account whose user is calling the
   *                 <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p>
   *         <p>This operation must be called using credentials from the account that is to become the
   *             new organization's management account. The principal must also have the relevant IAM
   *             permissions.</p>
   *         <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>),
   *             the new organization is created with all features enabled and service control policies
   *             automatically enabled in the root. If you instead choose to create the organization
   *             supporting only the consolidated billing features by setting the <code>FeatureSet</code>
   *             parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default,
   *             and you can't use organization policies</p>
   */
  public createOrganization(
    args: CreateOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationCommandOutput>;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOrganizationCommandOutput) => void),
    cb?: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): Promise<CreateOrganizationCommandOutput> | void {
    const command = new CreateOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
   *             for accounts that enables you to organize your accounts to apply policies according to
   *             your business requirements. The number of levels deep that you can nest OUs is dependent
   *             upon the policy types enabled for that root. For service control policies, the limit is
   *             five.</p>
   *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
   *                 <i>Organizations User Guide.</i>
   *          </p>
   *         <p>If the request includes tags, then the requester must have the
   *                 <code>organizations:TagResource</code> permission.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationalUnitCommandOutput>;
  public createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void
  ): void;
  public createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void
  ): void;
  public createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOrganizationalUnitCommandOutput) => void),
    cb?: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void
  ): Promise<CreateOrganizationalUnitCommandOutput> | void {
    const command = new CreateOrganizationalUnitCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a policy of a specified type that you can attach to a root, an organizational
   *             unit (OU), or an individual Amazon Web Services account.</p>
   *         <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing
   *                 Organization Policies</a>.</p>
   *         <p>If the request includes tags, then the requester must have the
   *                 <code>organizations:TagResource</code> permission.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  public createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  public createPolicy(
    args: CreatePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreatePolicyCommandOutput) => void
  ): Promise<CreatePolicyCommandOutput> | void {
    const command = new CreatePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
   *             and effectively deactivates the request.</p>
   *         <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
   *             instead. The originator can't reactivate a declined request, but can reinitiate the
   *             process with a new handshake request.</p>
   *         <p>After you decline a handshake, it continues to appear in the results of relevant APIs
   *             for only 30 days. After that, it's deleted.</p>
   */
  public declineHandshake(
    args: DeclineHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineHandshakeCommandOutput>;
  public declineHandshake(
    args: DeclineHandshakeCommandInput,
    cb: (err: any, data?: DeclineHandshakeCommandOutput) => void
  ): void;
  public declineHandshake(
    args: DeclineHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineHandshakeCommandOutput) => void
  ): void;
  public declineHandshake(
    args: DeclineHandshakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeclineHandshakeCommandOutput) => void),
    cb?: (err: any, data?: DeclineHandshakeCommandOutput) => void
  ): Promise<DeclineHandshakeCommandOutput> | void {
    const command = new DeclineHandshakeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the organization. You can delete an organization only by using credentials
   *             from the management account. The organization must be empty of member accounts.</p>
   */
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationCommandOutput>;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): Promise<DeleteOrganizationCommandOutput> | void {
    const command = new DeleteOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove
   *             all accounts and child OUs from the OU that you want to delete.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationalUnitCommandOutput>;
  public deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void
  ): void;
  public deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void
  ): void;
  public deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOrganizationalUnitCommandOutput) => void),
    cb?: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void
  ): Promise<DeleteOrganizationalUnitCommandOutput> | void {
    const command = new DeleteOrganizationalUnitCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified policy from your organization. Before you perform this
   *             operation, you must first detach the policy from all organizational units (OUs), roots,
   *             and accounts.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the resource policy from your organization.</p>
   *         <p>You can only call this operation from the organization's management account.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified member Amazon Web Services account as a delegated administrator for the
   *             specified Amazon Web Services service.</p>
   *         <important>
   *             <p>Deregistering a delegated administrator can have unintended impacts on the
   *                 functionality of the enabled Amazon Web Services service. See the documentation for the enabled
   *                 service before you deregister a delegated administrator so that you understand any
   *                 potential impacts.</p>
   *         </important>
   *         <p>You can run this action only for Amazon Web Services services that support this
   *     feature. For a current list of services that support it, see the column <i>Supports
   *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with
   *     Organizations</a> in the <i>Organizations User Guide.</i>
   *          </p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDelegatedAdministratorCommandOutput>;
  public deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    cb: (err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void
  ): void;
  public deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void
  ): void;
  public deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void),
    cb?: (err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void
  ): Promise<DeregisterDelegatedAdministratorCommandOutput> | void {
    const command = new DeregisterDelegatedAdministratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves Organizations-related information about the specified account.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public describeAccount(
    args: DescribeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCommandOutput>;
  public describeAccount(
    args: DescribeAccountCommandInput,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;
  public describeAccount(
    args: DescribeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;
  public describeAccount(
    args: DescribeAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountCommandOutput) => void
  ): Promise<DescribeAccountCommandOutput> | void {
    const command = new DescribeAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current status of an asynchronous request to create an account.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCreateAccountStatusCommandOutput>;
  public describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void
  ): void;
  public describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void
  ): void;
  public describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCreateAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void
  ): Promise<DescribeCreateAccountStatusCommandOutput> | void {
    const command = new DescribeCreateAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the contents of the effective policy for specified policy type and account.
   *             The effective policy is the aggregation of any policies of the specified type that the
   *             account inherits, plus any policy of that type that is directly attached to the
   *             account.</p>
   *         <p>This operation applies only to policy types <i>other</i> than service
   *             control policies (SCPs).</p>
   *         <p>For more information about policy inheritance, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance
   *                 Works</a> in the <i>Organizations User Guide</i>.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectivePolicyCommandOutput>;
  public describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void
  ): void;
  public describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void
  ): void;
  public describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEffectivePolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void
  ): Promise<DescribeEffectivePolicyCommandOutput> | void {
    const command = new DescribeEffectivePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a previously requested handshake. The handshake ID comes
   *             from the response to the original <a>InviteAccountToOrganization</a>
   *             operation that generated the handshake.</p>
   *         <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
   *                 <code>CANCELED</code> for only 30 days after they change to that state. They're then
   *             deleted and no longer accessible.</p>
   *         <p>This operation can be called from any account in the organization.</p>
   */
  public describeHandshake(
    args: DescribeHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHandshakeCommandOutput>;
  public describeHandshake(
    args: DescribeHandshakeCommandInput,
    cb: (err: any, data?: DescribeHandshakeCommandOutput) => void
  ): void;
  public describeHandshake(
    args: DescribeHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHandshakeCommandOutput) => void
  ): void;
  public describeHandshake(
    args: DescribeHandshakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHandshakeCommandOutput) => void),
    cb?: (err: any, data?: DescribeHandshakeCommandOutput) => void
  ): Promise<DescribeHandshakeCommandOutput> | void {
    const command = new DescribeHandshakeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the organization that the user's account belongs
   *             to.</p>
   *         <p>This operation can be called from any account in the organization.</p>
   *         <note>
   *             <p>Even if a policy type is shown as available in the organization, you can disable
   *                 it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified
   *                 root.</p>
   *         </note>
   */
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationCommandOutput>;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): Promise<DescribeOrganizationCommandOutput> | void {
    const command = new DescribeOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about an organizational unit (OU).</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationalUnitCommandOutput>;
  public describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void
  ): void;
  public describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void
  ): void;
  public describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationalUnitCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void
  ): Promise<DescribeOrganizationalUnitCommandOutput> | void {
    const command = new DescribeOrganizationalUnitCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a policy.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public describePolicy(
    args: DescribePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePolicyCommandOutput>;
  public describePolicy(
    args: DescribePolicyCommandInput,
    cb: (err: any, data?: DescribePolicyCommandOutput) => void
  ): void;
  public describePolicy(
    args: DescribePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePolicyCommandOutput) => void
  ): void;
  public describePolicy(
    args: DescribePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribePolicyCommandOutput) => void
  ): Promise<DescribePolicyCommandOutput> | void {
    const command = new DescribePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a resource policy.</p>
   *         <p>You can only call this operation from the organization's management account or by a member account that is a delegated administrator for an AWS service.</p>
   */
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): Promise<DescribeResourcePolicyCommandOutput> | void {
    const command = new DescribeResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a policy from a target root, organizational unit (OU), or account.</p>
   *         <important>
   *             <p>If the policy being detached is a service control policy (SCP), the changes to
   *                 permissions for Identity and Access Management (IAM) users and roles in affected accounts are
   *                 immediate.</p>
   *         </important>
   *         <p>Every root, OU, and account must have at least one SCP attached. If you want to
   *             replace the default <code>FullAWSAccess</code> policy with an SCP that limits the
   *             permissions that can be delegated, you must attach the replacement SCP before you can
   *             remove the default SCP. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_allowlist">allow list</a>". If you instead attach a second SCP and
   *             leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect":
   *                 "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in
   *             the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the
   *             authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/SCP_strategies.html#orgs_policies_denylist">deny list</a>".</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPolicyCommandOutput>;
  public detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachPolicyCommandOutput) => void
  ): Promise<DetachPolicyCommandOutput> | void {
    const command = new DetachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the integration of an Amazon Web Services service (the service that is specified by
   *                 <code>ServicePrincipal</code>) with Organizations. When you disable integration, the
   *             specified service no longer can create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
   *                 <i>new</i> accounts in your organization. This means the service can't
   *             perform operations on your behalf on any new accounts in your organization. The service
   *             can still perform operations in older accounts until the service completes its clean-up
   *             from Organizations.</p>
   *         <important>
   *             <p>We <b>
   *                   <i>strongly recommend</i>
   *                </b> that
   *                 you don't use this command to disable integration between Organizations and the specified
   *                 Amazon Web Services service. Instead, use the console or commands that are provided by the
   *                 specified service. This lets the trusted service perform any required initialization
   *                 when enabling trusted access, such as creating any required resources and any
   *                 required clean up of resources when disabling trusted access. </p>
   *             <p>For information about how to disable trusted service access to your organization
   *                 using the trusted service, see the <b>Learn more</b> link
   *                 under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services services that you can use with Organizations</a>. on this page.</p>
   *             <p>If you disable access by using this command, it causes the following actions to
   *                 occur:</p>
   *             <ul>
   *                <li>
   *                     <p>The service can no longer create a service-linked role in the accounts in
   *                         your organization. This means that the service can't perform operations on
   *                         your behalf on any new accounts in your organization. The service can still
   *                         perform operations in older accounts until the service completes its
   *                         clean-up from Organizations. </p>
   *                 </li>
   *                <li>
   *                     <p>The service can no longer perform tasks in the member accounts in the
   *                         organization, unless those operations are explicitly permitted by the IAM
   *                         policies that are attached to your roles. This includes any data aggregation
   *                         from the member accounts to the management account, or to a delegated
   *                         administrator account, where relevant.</p>
   *                 </li>
   *                <li>
   *                     <p>Some services detect this and clean up any remaining data or resources
   *                         related to the integration, while other services stop accessing the
   *                         organization but leave any historical data and configuration in place to
   *                         support a possible re-enabling of the integration.</p>
   *                 </li>
   *             </ul>
   *             <p>Using the other service's console or commands to disable the integration ensures
   *                 that the other service is aware that it can clean up any resources that are required
   *                 only for the integration. How the service cleans up its resources in the
   *                 organization's accounts depends on that service. For more information, see the
   *                 documentation for the other Amazon Web Services service. </p>
   *         </important>
   *         <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified
   *             service can no longer perform operations in your organization's accounts </p>
   *         <p>For more information about integrating other services with Organizations, including the
   *             list of services that work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other
   *                 Amazon Web Services Services</a> in the <i>Organizations User Guide.</i>
   *          </p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAWSServiceAccessCommandOutput>;
  public disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void
  ): void;
  public disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void
  ): void;
  public disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableAWSServiceAccessCommandOutput) => void),
    cb?: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void
  ): Promise<DisableAWSServiceAccessCommandOutput> | void {
    const command = new DisableAWSServiceAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables an organizational policy type in a root. A policy of a certain type can be
   *             attached to entities in a root only if that type is enabled in the root. After you
   *             perform this operation, you no longer can attach policies of the specified type to that
   *             root or to any organizational unit (OU) or account in that root. You can undo this by
   *             using the <a>EnablePolicyType</a> operation.</p>
   *         <p>This is an asynchronous request that Amazon Web Services performs in the background. If you disable
   *             a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. Amazon Web Services recommends that you
   *             first use <a>ListRoots</a> to see the status of policy types for a specified
   *             root, and then use this operation.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   *         <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
   */
  public disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisablePolicyTypeCommandOutput>;
  public disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void
  ): void;
  public disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void
  ): void;
  public disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisablePolicyTypeCommandOutput) => void),
    cb?: (err: any, data?: DisablePolicyTypeCommandOutput) => void
  ): Promise<DisablePolicyTypeCommandOutput> | void {
    const command = new DisablePolicyTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables all features in an organization. This enables the use of organization policies
   *             that can restrict the services and actions that can be called in each account. Until you
   *             enable all features, you have access only to consolidated billing, and you can't use any
   *             of the advanced account administration features that Organizations supports. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the
   *                 <i>Organizations User Guide.</i>
   *          </p>
   *         <important>
   *             <p>This operation is required only for organizations that were created explicitly
   *                 with only the consolidated billing features enabled. Calling this operation sends a
   *                 handshake to every invited account in the organization. The feature set change can
   *                 be finalized and the additional features enabled only after all administrators in
   *                 the invited accounts approve the change by accepting the handshake.</p>
   *         </important>
   *         <p>After you enable all features, you can separately enable or disable individual policy
   *             types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use
   *                 <a>ListRoots</a>.</p>
   *         <p>After all invited member accounts accept the handshake, you finalize the feature set
   *             change by accepting the handshake that contains <code>"Action":
   *                 "ENABLE_ALL_FEATURES"</code>. This completes the change.</p>
   *         <p>After you enable all features in your organization, the management account in the
   *             organization can apply policies on all member accounts. These policies can restrict what
   *             users and even administrators in those accounts can do. The management account can apply
   *             policies that prevent accounts from leaving the organization. Ensure that your account
   *             administrators are aware of this.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAllFeaturesCommandOutput>;
  public enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void
  ): void;
  public enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void
  ): void;
  public enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableAllFeaturesCommandOutput) => void),
    cb?: (err: any, data?: EnableAllFeaturesCommandOutput) => void
  ): Promise<EnableAllFeaturesCommandOutput> | void {
    const command = new EnableAllFeaturesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the integration of an Amazon Web Services service (the service that is specified by
   *                 <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow
   *             the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
   *             all the accounts in your organization. This allows the service to perform operations on
   *             your behalf in your organization and its accounts.</p>
   *         <important>
   *             <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services
   *                 service by using the console or commands that are provided by the specified service.
   *                 Doing so ensures that the service is aware that it can create the resources that are
   *                 required for the integration. How the service creates those resources in the
   *                 organization's accounts depends on that service. For more information, see the
   *                 documentation for the other Amazon Web Services service.</p>
   *         </important>
   *         <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating
   *                 Organizations with Other Amazon Web Services Services</a> in the
   *                 <i>Organizations User Guide.</i>
   *          </p>
   *         <p>You can only call this operation from the organization's management account and only
   *             if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all
   *                 features</a>.</p>
   */
  public enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAWSServiceAccessCommandOutput>;
  public enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void
  ): void;
  public enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void
  ): void;
  public enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableAWSServiceAccessCommandOutput) => void),
    cb?: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void
  ): Promise<EnableAWSServiceAccessCommandOutput> | void {
    const command = new EnableAWSServiceAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables a policy type in a root. After you enable a policy type in a root, you can
   *             attach policies of that type to the root, any organizational unit (OU), or account in
   *             that root. You can undo this by using the <a>DisablePolicyType</a>
   *             operation.</p>
   *         <p>This is an asynchronous request that Amazon Web Services performs in the background. Amazon Web Services
   *             recommends that you first use <a>ListRoots</a> to see the status of policy
   *             types for a specified root, and then use this operation.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   *         <p>You can enable a policy type in a root only if that policy type is available in the
   *             organization. To view the status of available policy types in the organization, use
   *                 <a>DescribeOrganization</a>.</p>
   */
  public enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnablePolicyTypeCommandOutput>;
  public enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void
  ): void;
  public enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void
  ): void;
  public enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnablePolicyTypeCommandOutput) => void),
    cb?: (err: any, data?: EnablePolicyTypeCommandOutput) => void
  ): Promise<EnablePolicyTypeCommandOutput> | void {
    const command = new EnablePolicyTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends an invitation to another account to join your organization as a member account.
   *             Organizations sends email on your behalf to the email address that is associated with the
   *             other account's owner. The invitation is implemented as a <a>Handshake</a>
   *             whose details are in the response.</p>
   *         <important>
   *             <ul>
   *                <li>
   *                     <p>You can invite Amazon Web Services accounts only from the same seller as the management
   *                         account. For example, if your organization's management account was created
   *                         by Amazon Internet Services Pvt. Ltd (AISPL), an Amazon Web Services seller in India, you
   *                         can invite only other AISPL accounts to your organization. You can't combine
   *                         accounts from AISPL and Amazon Web Services or from any other Amazon Web Services seller. For more
   *                         information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated
   *                             Billing in India</a>.</p>
   *                 </li>
   *                <li>
   *                     <p>If you receive an exception that indicates that you exceeded your account
   *                         limits for the organization or that the operation failed because your
   *                         organization is still initializing, wait one hour and then try again. If the
   *                         error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
   *                 </li>
   *             </ul>
   *         </important>
   *         <p>If the request includes tags, then the requester must have the
   *                 <code>organizations:TagResource</code> permission.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteAccountToOrganizationCommandOutput>;
  public inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void
  ): void;
  public inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void
  ): void;
  public inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InviteAccountToOrganizationCommandOutput) => void),
    cb?: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void
  ): Promise<InviteAccountToOrganizationCommandOutput> | void {
    const command = new InviteAccountToOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a member account from its parent organization. This version of the operation
   *             is performed by the account that wants to leave. To remove a member account as a user in
   *             the management account, use <a>RemoveAccountFromOrganization</a>
   *             instead.</p>
   *         <p>This operation can be called only from a member account in the organization.</p>
   *         <important>
   *             <ul>
   *                <li>
   *                     <p>The management account in an organization with all features enabled can
   *                         set service control policies (SCPs) that can restrict what administrators of
   *                         member accounts can do. This includes preventing them from successfully
   *                         calling <code>LeaveOrganization</code> and leaving the organization.</p>
   *                 </li>
   *                <li>
   *                     <p>You can leave an organization as a member account only if the account is
   *                         configured with the information required to operate as a standalone account.
   *                         When you create an account in an organization using the Organizations console,
   *                         API, or CLI commands, the information required of standalone accounts is
   *                             <i>not</i> automatically collected. For each account that
   *                         you want to make standalone, you must perform the following steps. If any of
   *                         the steps are already completed for this account, that step doesn't
   *                         appear.</p>
   *                     <ul>
   *                      <li>
   *                             <p>Choose a support plan</p>
   *                         </li>
   *                      <li>
   *                             <p>Provide and verify the required contact information</p>
   *                         </li>
   *                      <li>
   *                             <p>Provide a current payment method</p>
   *                         </li>
   *                   </ul>
   *                     <p>Amazon Web Services uses the payment method to charge for any billable (not free tier)
   *                         Amazon Web Services activity that occurs while the account isn't attached to an
   *                         organization. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
   *                             yet been provided</a> in the
   *                         <i>Organizations User Guide.</i>
   *                   </p>
   *                 </li>
   *                <li>
   *                     <p>The account that you want to leave must not be a delegated administrator
   *                         account for any Amazon Web Services service enabled for your organization. If the account
   *                         is a delegated administrator, you must first change the delegated
   *                         administrator account to another account that is remaining in the
   *                         organization.</p>
   *                 </li>
   *                <li>
   *                     <p>You can leave an organization only after you enable IAM user access to
   *                         billing in your account. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the
   *                             <i>Amazon Web Services Billing and Cost Management User Guide.</i>
   *                   </p>
   *                 </li>
   *                <li>
   *                     <p>After the account leaves the organization, all tags that were attached to
   *                         the account object in the organization are deleted. Amazon Web Services accounts outside
   *                         of an organization do not support tags.</p>
   *                 </li>
   *                <li>
   *                     <p>A newly created account has a waiting period before it can be removed from
   *                         its organization. If you get an error that indicates that a wait period is
   *                         required, then try again in a few days.</p>
   *                 </li>
   *             </ul>
   *         </important>
   */
  public leaveOrganization(
    args: LeaveOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LeaveOrganizationCommandOutput>;
  public leaveOrganization(
    args: LeaveOrganizationCommandInput,
    cb: (err: any, data?: LeaveOrganizationCommandOutput) => void
  ): void;
  public leaveOrganization(
    args: LeaveOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LeaveOrganizationCommandOutput) => void
  ): void;
  public leaveOrganization(
    args: LeaveOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LeaveOrganizationCommandOutput) => void),
    cb?: (err: any, data?: LeaveOrganizationCommandOutput) => void
  ): Promise<LeaveOrganizationCommandOutput> | void {
    const command = new LeaveOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the accounts in the organization. To request only the accounts in a
   *             specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listAccounts(
    args: ListAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsCommandOutput>;
  public listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsCommandOutput) => void
  ): Promise<ListAccountsCommandOutput> | void {
    const command = new ListAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the accounts in an organization that are contained by the specified target root
   *             or organizational unit (OU). If you specify the root, you get a list of all the accounts
   *             that aren't in any OU. If you specify an OU, you get a list of all the accounts in only
   *             that OU and not in any child OUs. To get a list of all accounts in the organization, use
   *             the <a>ListAccounts</a> operation.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsForParentCommandOutput>;
  public listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    cb: (err: any, data?: ListAccountsForParentCommandOutput) => void
  ): void;
  public listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsForParentCommandOutput) => void
  ): void;
  public listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountsForParentCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsForParentCommandOutput) => void
  ): Promise<ListAccountsForParentCommandOutput> | void {
    const command = new ListAccountsForParentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the Amazon Web Services services that you enabled to integrate with your
   *             organization. After a service on this list creates the resources that it requires for
   *             the integration, it can perform operations on your organization and its accounts.</p>
   *         <p>For more information about integrating other services with Organizations, including the
   *             list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other
   *                 Amazon Web Services Services</a> in the <i>Organizations User Guide.</i>
   *          </p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAWSServiceAccessForOrganizationCommandOutput>;
  public listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void
  ): void;
  public listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void
  ): Promise<ListAWSServiceAccessForOrganizationCommandOutput> | void {
    const command = new ListAWSServiceAccessForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the organizational units (OUs) or accounts that are contained in the
   *             specified parent OU or root. This operation, along with <a>ListParents</a>
   *             enables you to traverse the tree structure that makes up this root.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listChildren(
    args: ListChildrenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChildrenCommandOutput>;
  public listChildren(args: ListChildrenCommandInput, cb: (err: any, data?: ListChildrenCommandOutput) => void): void;
  public listChildren(
    args: ListChildrenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChildrenCommandOutput) => void
  ): void;
  public listChildren(
    args: ListChildrenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChildrenCommandOutput) => void),
    cb?: (err: any, data?: ListChildrenCommandOutput) => void
  ): Promise<ListChildrenCommandOutput> | void {
    const command = new ListChildrenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the account creation requests that match the specified status that is currently
   *             being tracked for the organization.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCreateAccountStatusCommandOutput>;
  public listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void
  ): void;
  public listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void
  ): void;
  public listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCreateAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: ListCreateAccountStatusCommandOutput) => void
  ): Promise<ListCreateAccountStatusCommandOutput> | void {
    const command = new ListCreateAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Web Services accounts that are designated as delegated administrators in this
   *             organization.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedAdministratorsCommandOutput>;
  public listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    cb: (err: any, data?: ListDelegatedAdministratorsCommandOutput) => void
  ): void;
  public listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedAdministratorsCommandOutput) => void
  ): void;
  public listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDelegatedAdministratorsCommandOutput) => void),
    cb?: (err: any, data?: ListDelegatedAdministratorsCommandOutput) => void
  ): Promise<ListDelegatedAdministratorsCommandOutput> | void {
    const command = new ListDelegatedAdministratorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the Amazon Web Services services for which the specified account is a delegated
   *             administrator.</p>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedServicesForAccountCommandOutput>;
  public listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    cb: (err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void
  ): void;
  public listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void
  ): void;
  public listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void),
    cb?: (err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void
  ): Promise<ListDelegatedServicesForAccountCommandOutput> | void {
    const command = new ListDelegatedServicesForAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the current handshakes that are associated with the account of the requesting
   *             user.</p>
   *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>,
   *                 <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for
   *             only 30 days after changing to that state. After that, they're deleted and no longer
   *             accessible.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called from any account in the organization.</p>
   */
  public listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHandshakesForAccountCommandOutput>;
  public listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void
  ): void;
  public listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void
  ): void;
  public listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHandshakesForAccountCommandOutput) => void),
    cb?: (err: any, data?: ListHandshakesForAccountCommandOutput) => void
  ): Promise<ListHandshakesForAccountCommandOutput> | void {
    const command = new ListHandshakesForAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the handshakes that are associated with the organization that the requesting
   *             user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list
   *             of handshake structures. Each structure contains details and status about a
   *             handshake.</p>
   *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>,
   *                 <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for
   *             only 30 days after changing to that state. After that, they're deleted and no longer
   *             accessible.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHandshakesForOrganizationCommandOutput>;
  public listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void
  ): void;
  public listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void
  ): void;
  public listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHandshakesForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void
  ): Promise<ListHandshakesForOrganizationCommandOutput> | void {
    const command = new ListHandshakesForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationalUnitsForParentCommandOutput>;
  public listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void
  ): void;
  public listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void
  ): void;
  public listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void
  ): Promise<ListOrganizationalUnitsForParentCommandOutput> | void {
    const command = new ListOrganizationalUnitsForParentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the
   *             specified child OU or account. This operation, along with <a>ListChildren</a>
   *             enables you to traverse the tree structure that makes up this root.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   *         <note>
   *             <p>In the current release, a child can have only a single parent.</p>
   *         </note>
   */
  public listParents(args: ListParentsCommandInput, options?: __HttpHandlerOptions): Promise<ListParentsCommandOutput>;
  public listParents(args: ListParentsCommandInput, cb: (err: any, data?: ListParentsCommandOutput) => void): void;
  public listParents(
    args: ListParentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParentsCommandOutput) => void
  ): void;
  public listParents(
    args: ListParentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListParentsCommandOutput) => void),
    cb?: (err: any, data?: ListParentsCommandOutput) => void
  ): Promise<ListParentsCommandOutput> | void {
    const command = new ListParentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the list of all policies in an organization of a specified type.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  public listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesCommandOutput) => void
  ): Promise<ListPoliciesCommandOutput> | void {
    const command = new ListPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the policies that are directly attached to the specified target root,
   *             organizational unit (OU), or account. You must specify the policy type that you want
   *             included in the returned list.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesForTargetCommandOutput>;
  public listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void
  ): void;
  public listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void
  ): void;
  public listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesForTargetCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesForTargetCommandOutput) => void
  ): Promise<ListPoliciesForTargetCommandOutput> | void {
    const command = new ListPoliciesForTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the roots that are defined in the current organization.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   *         <note>
   *             <p>Policy types can be enabled and disabled in roots. This is distinct from whether
   *                 they're available in the organization. When you enable all features, you make policy
   *                 types available for use in that organization. Individual policy types can then be
   *                 enabled and disabled in a root. To see the availability of a policy type in an
   *                 organization, use <a>DescribeOrganization</a>.</p>
   *         </note>
   */
  public listRoots(args: ListRootsCommandInput, options?: __HttpHandlerOptions): Promise<ListRootsCommandOutput>;
  public listRoots(args: ListRootsCommandInput, cb: (err: any, data?: ListRootsCommandOutput) => void): void;
  public listRoots(
    args: ListRootsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRootsCommandOutput) => void
  ): void;
  public listRoots(
    args: ListRootsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRootsCommandOutput) => void),
    cb?: (err: any, data?: ListRootsCommandOutput) => void
  ): Promise<ListRootsCommandOutput> | void {
    const command = new ListRootsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists tags that are attached to the specified resource.</p>
   *         <p>You can attach tags to the following resources in Organizations.</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Web Services account</p>
   *             </li>
   *             <li>
   *                 <p>Organization root</p>
   *             </li>
   *             <li>
   *                 <p>Organizational unit (OU)</p>
   *             </li>
   *             <li>
   *                 <p>Policy (any type)</p>
   *             </li>
   *          </ul>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the roots, organizational units (OUs), and accounts that the specified
   *             policy is attached to.</p>
   *         <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   *         <p>This operation can be called only from the organization's
   * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
   */
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForPolicyCommandOutput>;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  public listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsForPolicyCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): Promise<ListTargetsForPolicyCommandOutput> | void {
    const command = new ListTargetsForPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Moves an account from its current source parent root or organizational unit (OU) to
   *             the specified destination parent root or OU.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public moveAccount(args: MoveAccountCommandInput, options?: __HttpHandlerOptions): Promise<MoveAccountCommandOutput>;
  public moveAccount(args: MoveAccountCommandInput, cb: (err: any, data?: MoveAccountCommandOutput) => void): void;
  public moveAccount(
    args: MoveAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveAccountCommandOutput) => void
  ): void;
  public moveAccount(
    args: MoveAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MoveAccountCommandOutput) => void),
    cb?: (err: any, data?: MoveAccountCommandOutput) => void
  ): Promise<MoveAccountCommandOutput> | void {
    const command = new MoveAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a resource policy.</p>
   *         <p>You can only call this operation from the organization's management account.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the specified member account to administer the Organizations features of the specified
   *             Amazon Web Services service. It grants read-only access to Organizations service data. The account still
   *             requires IAM permissions to access and administer the Amazon Web Services service.</p>
   *         <p>You can run this action only for Amazon Web Services services that support this
   *     feature. For a current list of services that support it, see the column <i>Supports
   *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with
   *     Organizations</a> in the <i>Organizations User Guide.</i>
   *          </p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDelegatedAdministratorCommandOutput>;
  public registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    cb: (err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void
  ): void;
  public registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void
  ): void;
  public registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void),
    cb?: (err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void
  ): Promise<RegisterDelegatedAdministratorCommandOutput> | void {
    const command = new RegisterDelegatedAdministratorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified account from the organization.</p>
   *         <p>The removed account becomes a standalone account that isn't a member of any
   *             organization. It's no longer subject to any policies and is responsible for its own bill
   *             payments. The organization's management account is no longer charged for any expenses
   *             accrued by the member account after it's removed from the organization.</p>
   *         <p>This operation can be called only from the organization's management account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p>
   *         <important>
   *             <ul>
   *                <li>
   *                     <p>You can remove an account from your organization only if the account is
   *                         configured with the information required to operate as a standalone account.
   *                         When you create an account in an organization using the Organizations console,
   *                         API, or CLI commands, the information required of standalone accounts is
   *                             <i>not</i> automatically collected. For an account that
   *                         you want to make standalone, you must choose a support plan, provide and
   *                         verify the required contact information, and provide a current payment
   *                         method. Amazon Web Services uses the payment method to charge for any billable (not free
   *                         tier) Amazon Web Services activity that occurs while the account isn't attached to an
   *                         organization. To remove an account that doesn't yet have this information,
   *                         you must sign in as the member account and follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
   *                             yet been provided</a> in the
   *                         <i>Organizations User Guide.</i>
   *                   </p>
   *                 </li>
   *                <li>
   *                     <p>The account that you want to leave must not be a delegated administrator
   *                         account for any Amazon Web Services service enabled for your organization. If the account
   *                         is a delegated administrator, you must first change the delegated
   *                         administrator account to another account that is remaining in the
   *                         organization.</p>
   *                 </li>
   *                <li>
   *                     <p>After the account leaves the organization, all tags that were attached to
   *                         the account object in the organization are deleted. Amazon Web Services accounts outside
   *                         of an organization do not support tags.</p>
   *                 </li>
   *             </ul>
   *         </important>
   */
  public removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAccountFromOrganizationCommandOutput>;
  public removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void
  ): void;
  public removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void
  ): void;
  public removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void),
    cb?: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void
  ): Promise<RemoveAccountFromOrganizationCommandOutput> | void {
    const command = new RemoveAccountFromOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more tags to the specified resource.</p>
   *         <p>Currently, you can attach tags to the following resources in Organizations.</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Web Services account</p>
   *             </li>
   *             <li>
   *                 <p>Organization root</p>
   *             </li>
   *             <li>
   *                 <p>Organizational unit (OU)</p>
   *             </li>
   *             <li>
   *                 <p>Policy (any type)</p>
   *             </li>
   *          </ul>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes any tags with the specified keys from the specified resource.</p>
   *         <p>You can attach tags to the following resources in Organizations.</p>
   *         <ul>
   *             <li>
   *                 <p>Amazon Web Services account</p>
   *             </li>
   *             <li>
   *                 <p>Organization root</p>
   *             </li>
   *             <li>
   *                 <p>Organizational unit (OU)</p>
   *             </li>
   *             <li>
   *                 <p>Policy (any type)</p>
   *             </li>
   *          </ul>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
   *             OUs and accounts remain in place, and any attached policies of the OU remain
   *             attached.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationalUnitCommandOutput>;
  public updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void
  ): void;
  public updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void
  ): void;
  public updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOrganizationalUnitCommandOutput) => void),
    cb?: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void
  ): Promise<UpdateOrganizationalUnitCommandOutput> | void {
    const command = new UpdateOrganizationalUnitCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing policy with a new name, description, or content. If you don't
   *             supply any parameter, that value remains unchanged. You can't change a policy's
   *             type.</p>
   *         <p>This operation can be called only from the organization's management account.</p>
   */
  public updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyCommandOutput>;
  public updatePolicy(args: UpdatePolicyCommandInput, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
  public updatePolicy(
    args: UpdatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
  public updatePolicy(
    args: UpdatePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): Promise<UpdatePolicyCommandOutput> | void {
    const command = new UpdatePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
