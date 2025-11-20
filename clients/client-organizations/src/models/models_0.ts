// smithy-typescript generated code
import {
  AccountJoinedMethod,
  AccountState,
  AccountStatus,
  ActionType,
  ChildType,
  CreateAccountFailureReason,
  CreateAccountState,
  EffectivePolicyType,
  HandshakePartyType,
  HandshakeResourceType,
  HandshakeState,
  IAMUserAccessToBilling,
  OrganizationFeatureSet,
  ParentType,
  PolicyType,
  PolicyTypeStatus,
  ResponsibilityTransferStatus,
  ResponsibilityTransferType,
  TargetType,
} from "./enums";

/**
 * @public
 */
export interface AcceptHandshakeRequest {
  /**
   * <p>ID for the handshake that you want to accept.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * <p>Contains details for a participant in a handshake.</p>
 * @public
 */
export interface HandshakeParty {
  /**
   * <p>ID for the participant: Acccount ID, organization ID, or email address.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of ID for the participant.</p>
   * @public
   */
  Type: HandshakePartyType | undefined;
}

/**
 * <p>Contains information about an Amazon Web Services account that is a member of an
 *             organization.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The unique identifier (ID) of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The email address associated with the Amazon Web Services account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a
   *             standard internet email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The friendly name of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the account in the organization.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the <code>Account</code> object will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * <p>Each state represents a specific phase in the account lifecycle. Use this information
   *             to manage account access, automate workflows, or trigger actions based on account state
   *             changes.</p>
   *          <p>For more information about account states and their implications, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html">Monitor the state of your Amazon Web Services accounts </a> in the
   *                 <i>Organizations User Guide</i>.</p>
   * @public
   */
  State?: AccountState | undefined;

  /**
   * <p>The method by which the account joined the organization.</p>
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * <p>The date the account became a part of the organization.</p>
   * @public
   */
  JoinedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * <p>ID for the policy that you want to attach to the target. You can get the ID for the
   *             policy by calling the <a>ListPolicies</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>ID for the root, OU, or account that you want to attach the policy to. You can get the
   *             ID by calling the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId: string | undefined;
}

/**
 * @public
 */
export interface CancelHandshakeRequest {
  /**
   * <p>ID for the handshake that you want to cancel. You can get the ID from the <a>ListHandshakesForOrganization</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface CloseAccountRequest {
  /**
   * <p>Retrieves the Amazon Web Services account Id for the current <code>CloseAccount</code> API request.
   *         </p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * <p>A custom key-value pair associated with a resource within your organization.</p>
 *          <p>You can attach tags to any of the following organization resources.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services account</p>
 *             </li>
 *             <li>
 *                <p>Organizational unit (OU)</p>
 *             </li>
 *             <li>
 *                <p>Organization root</p>
 *             </li>
 *             <li>
 *                <p>Policy</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The string value that's associated with the key of the tag. You can set the value of a
   *             tag to an empty string, but you can't set the value of a tag to null.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * <p>The email address of the owner to assign to the new member account. This email address
   *             must not already be associated with another Amazon Web Services account. You must use a valid email
   *             address to complete account creation.</p>
   *          <p>The rules for a valid email address:</p>
   *          <ul>
   *             <li>
   *                <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p>
   *             </li>
   *             <li>
   *                <p>All characters must be 7-bit ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>There must be one and only one @ symbol, which separates the local name from
   *                     the domain name.</p>
   *             </li>
   *             <li>
   *                <p>The local name can't contain any of the following characters:</p>
   *                <p>whitespace, " ' ( ) < > [ ] : ; , \ | % &</p>
   *             </li>
   *             <li>
   *                <p>The local name can't begin with a dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen
   *                     (-), or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name must contain at least one dot</p>
   *             </li>
   *          </ul>
   *          <p>You can't access the root user of the account or remove an account that was created
   *             with an invalid email address.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The friendly name of the member account.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The name of an IAM role that Organizations automatically preconfigures in the new member
   *             account. This role trusts the management account, allowing users in the management
   *             account to assume the role, as permitted by the management account administrator. The
   *             role has administrator permissions in the new member account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *                 <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see the
   *             following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Creating the OrganizationAccountAccessRole in an invited member
   *                         account</a> in the <i>Organizations User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">IAM Tutorial:
   *                         Delegate access across Amazon Web Services accounts using IAM roles</a> in the
   *                         <i>IAM User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new account enables IAM users to access account
   *             billing information <i>if</i> they have the required permissions. If set
   *             to <code>DENY</code>, only the root user of the new account can access account billing
   *             information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">About IAM
   *                 access to the Billing and Cost Management console</a> in the
   *             <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and
   *             IAM users and roles with the required permissions can access billing information for
   *             the new account.</p>
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created account. For each tag in
   *             the list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for an account, then the entire request fails and the account is not
   *                 created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services
 *             GovCloud (US) account in an organization.</p>
 * @public
 */
export interface CreateAccountStatus {
  /**
   * <p>The unique identifier (ID) that references this request. You get this value from the
   *             response of the initial <a>CreateAccount</a> request to create the
   *             account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The account name given to the account when it was created.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The status of the asynchronous request to create an Amazon Web Services account.</p>
   * @public
   */
  State?: CreateAccountState | undefined;

  /**
   * <p>The date and time that the request was made for the account creation.</p>
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the account was created and the request completed.</p>
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new
   *             account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>If the account was created successfully, the ID for the new account in the Amazon Web Services
   *             GovCloud (US) Region.</p>
   * @public
   */
  GovCloudAccountId?: string | undefined;

  /**
   * <p>If the request failed, a description of the reason for the failure.</p>
   *          <ul>
   *             <li>
   *                <p>ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached
   *                     the limit on the number of accounts in your organization.</p>
   *             </li>
   *             <li>
   *                <p>CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same
   *                     information.</p>
   *             </li>
   *             <li>
   *                <p>EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services
   *                     account with that email address already exists.</p>
   *             </li>
   *             <li>
   *                <p>FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization
   *                     failed to receive business license validation.</p>
   *             </li>
   *             <li>
   *                <p>GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region
   *                     could not be created because this Region already includes an account with that
   *                     email address.</p>
   *             </li>
   *             <li>
   *                <p>IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your
   *                     organization can't complete business license validation because it doesn't have
   *                     valid identity data.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_ADDRESS: The account could not be created because the address you
   *                     provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_EMAIL: The account could not be created because the email address you
   *                     provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does
   *                     not have a supported payment method associated with the account. Amazon Web Services does not
   *                     support cards issued by financial institutions in Russia or Belarus. For more
   *                     information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html">Managing your
   *                         Amazon Web Services payments</a>.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE: The account could not be created because of an internal
   *                     failure. Try again later. If the problem persists, contact Amazon Web Services Customer
   *                     Support.</p>
   *             </li>
   *             <li>
   *                <p>MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has
   *                     not received Business Validation.</p>
   *             </li>
   *             <li>
   *                <p> MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a
   *                     valid payment method, such as a credit card.</p>
   *             </li>
   *             <li>
   *                <p>PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is
   *                     still in the process of completing business license validation.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has
   *                     an unknown issue with business license validation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: CreateAccountFailureReason | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * <p>A structure that contains details about the request to create an account. This
   *             response structure might not be fully populated when you first receive it because
   *             account creation is an asynchronous process. You can pass the returned
   *                 <code>CreateAccountStatus</code> ID as a parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of the
   *             request at later times. You can also check the CloudTrail log for the
   *                 <code>CreateAccountResult</code> event. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html">Logging and monitoring in Organizations</a> in the
   *                 <i>Organizations User Guide</i>.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface CreateGovCloudAccountRequest {
  /**
   * <p>Specifies the email address of the owner to assign to the new member account in the
   *             commercial Region. This email address must not already be associated with another
   *             Amazon Web Services account. You must use a valid email address to complete account creation.</p>
   *          <p>The rules for a valid email address:</p>
   *          <ul>
   *             <li>
   *                <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p>
   *             </li>
   *             <li>
   *                <p>All characters must be 7-bit ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>There must be one and only one @ symbol, which separates the local name from
   *                     the domain name.</p>
   *             </li>
   *             <li>
   *                <p>The local name can't contain any of the following characters:</p>
   *                <p>whitespace, " ' ( ) < > [ ] : ; , \ | % &</p>
   *             </li>
   *             <li>
   *                <p>The local name can't begin with a dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen
   *                     (-), or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name must contain at least one dot</p>
   *             </li>
   *          </ul>
   *          <p>You can't access the root user of the account or remove an account that was created
   *             with an invalid email address. Like all request parameters for
   *                 <code>CreateGovCloudAccount</code>, the request for the email address for the Amazon Web Services
   *             GovCloud (US) account originates from the commercial Region, not from the Amazon Web Services GovCloud
   *             (US) Region.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The friendly name of the member account. </p>
   *          <p>The account name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or
   *             dot (.) You can't separate characters with a dash (–).</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>(Optional)</p>
   *          <p>The name of an IAM role that Organizations automatically preconfigures in the new member
   *             accounts in both the Amazon Web Services GovCloud (US) Region and in the commercial Region. This role
   *             trusts the management account, allowing users in the management account to assume the
   *             role, as permitted by the management account administrator. The role has administrator
   *             permissions in the new member account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *                 <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see the
   *             following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Creating the OrganizationAccountAccessRole in an invited member
   *                         account</a> in the <i>Organizations User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">IAM Tutorial:
   *                         Delegate access across Amazon Web Services accounts using IAM roles</a> in the
   *                         <i>IAM User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new linked account in the commercial Region enables
   *             IAM users to access account billing information <i>if</i> they have the
   *             required permissions. If set to <code>DENY</code>, only the root user of the new account
   *             can access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">About IAM
   *                 access to the Billing and Cost Management console</a> in the
   *             <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and
   *             IAM users and roles with the required permissions can access billing information for
   *             the new account.</p>
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created account. These tags are
   *             attached to the commercial account associated with the GovCloud account, and not to the
   *             GovCloud account itself. To add tags to the actual GovCloud account, call the <a>TagResource</a> operation in the GovCloud region after the new GovCloud
   *             account exists.</p>
   *          <p>For each tag in the list, you must specify both a tag key and a value. You can set the
   *             value to an empty string, but you can't set it to <code>null</code>. For more
   *             information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the
   *             Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for an account, then the entire request fails and the account is not
   *                 created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGovCloudAccountResponse {
  /**
   * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services
   *             GovCloud (US) account in an organization.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationRequest {
  /**
   * <p>Specifies the feature set supported by the new organization. Each feature set supports
   *             different levels of functionality.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONSOLIDATED_BILLING</code>: All member accounts have their bills
   *                     consolidated to and paid by the management account. For more information, see
   *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only">Consolidated billing</a> in the
   *                     <i>Organizations User Guide</i>.</p>
   *                <p> The consolidated billing feature subset isn't available for organizations in
   *                     the Amazon Web Services GovCloud (US) Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: In addition to all the features supported by the
   *                     consolidated billing feature set, the management account can also apply any
   *                     policy type to any member account in the organization. For more information, see
   *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all">All
   *                         features</a> in the <i>Organizations User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;
}

/**
 * <p>Contains information about a policy type and its status in the associated root.</p>
 * @public
 */
export interface PolicyTypeSummary {
  /**
   * <p>The name of the policy type.</p>
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * <p>The status of the policy type as it relates to the associated root. To attach a policy
   *             of the specified type to a root or to an OU or account in that root, it must be
   *             available in the organization and enabled for that root.</p>
   * @public
   */
  Status?: PolicyTypeStatus | undefined;
}

/**
 * <p>Contains details about an organization. An organization is a collection of accounts
 *             that are centrally managed together using consolidated billing, organized hierarchically
 *             with organizational units (OUs), and controlled with policies .</p>
 * @public
 */
export interface Organization {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organization ID string requires "o-"
   *     followed by from 10 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Specifies the functionality that currently is available to the organization. If set to
   *             "ALL", then all features are enabled and policies can be applied to accounts in the
   *             organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing
   *             functionality is available. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features
   *                 in your organization</a> in the <i>Organizations User Guide</i>.</p>
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account that is designated as the management
   *             account for the organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  MasterAccountArn?: string | undefined;

  /**
   * <p>The unique identifier (ID) of the management account of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  MasterAccountId?: string | undefined;

  /**
   * <p>The email address that is associated with the Amazon Web Services account that is designated as the
   *             management account for the organization.</p>
   * @public
   */
  MasterAccountEmail?: string | undefined;

  /**
   * <important>
   *             <p>Do not use. This field is deprecated and doesn't provide complete information
   *                 about the policies in your organization.</p>
   *          </important>
   *          <p>To determine the policies that are enabled and available for use in your organization,
   *             use the <a>ListRoots</a> operation instead.</p>
   * @public
   */
  AvailablePolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationResponse {
  /**
   * <p>A structure that contains details about the newly created organization.</p>
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitRequest {
  /**
   * <p>ID for the parent root or OU that you want to create the new OU in.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The friendly name to assign to the new OU.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created OU. For each tag in the
   *             list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for an OU, then the entire request fails and the OU is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains details about an organizational unit (OU). An OU is a container of Amazon Web Services
 *             accounts within a root of an organization. Policies that are attached to an OU apply to
 *             all accounts contained in that OU and in any child OUs.</p>
 * @public
 */
export interface OrganizationalUnit {
  /**
   * <p>The unique identifier (ID) associated with this OU. The ID is unique to the
   *             organization only.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of this OU.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of this OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitResponse {
  /**
   * <p>A structure that contains details about the newly created OU.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * <p>The policy text content to add to the new policy. The text that you supply must adhere
   *             to the rules of the policy type you specify in the <code>Type</code> parameter. </p>
   *          <p>The maximum size of a policy document depends on the policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values">Maximum and minimum values</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>An optional description to assign to the policy.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The friendly name to assign to the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of policy to create. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: PolicyType | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created policy. For each tag in
   *             the list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for a policy, then the entire request fails and the policy is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about a policy, but does not include the content. To see the
 *             content of a policy, see <a>DescribePolicy</a>.</p>
 * @public
 */
export interface PolicySummary {
  /**
   * <p>The unique identifier (ID) of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * <p>A boolean value that indicates whether the specified policy is an Amazon Web Services managed
   *             policy. If true, then you can attach the policy to roots, OUs, or accounts, but you
   *             cannot edit it.</p>
   * @public
   */
  AwsManaged?: boolean | undefined;
}

/**
 * <p>Contains rules to be applied to the affected accounts. Policies can be attached
 *             directly to accounts, or to roots and OUs to affect all accounts in those
 *             hierarchies.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>A structure that contains additional details about the policy.</p>
   * @public
   */
  PolicySummary?: PolicySummary | undefined;

  /**
   * <p>The text content of the policy.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * <p>A structure that contains details about the newly created policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface DeclineHandshakeRequest {
  /**
   * <p>ID for the handshake that you want to decline. You can get the ID from the <a>ListHandshakesForAccount</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOrganizationalUnitRequest {
  /**
   * <p>ID for the organizational unit that you want to delete. You can get the ID from the
   *                 <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>ID for the policy that you want to delete. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDelegatedAdministratorRequest {
  /**
   * <p>The account ID number of the member account in the organization that you want to
   *             deregister as a delegated administrator.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The service principal name of an Amazon Web Services service for which the account is a delegated
   *             administrator.</p>
   *          <p>Delegated administrator privileges are revoked for only the specified Amazon Web Services service
   *             from the member account. If the specified service is the only service for which the
   *             member account is a delegated administrator, the operation also revokes Organizations read action
   *             permissions.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountRequest {
  /**
   * <p>The unique identifier (ID) of the Amazon Web Services account that you want information about. You
   *             can get the ID from the <a>ListAccounts</a> or <a>ListAccountsForParent</a> operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountResponse {
  /**
   * <p>A structure that contains information about the requested account.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface DescribeCreateAccountStatusRequest {
  /**
   * <p>Specifies the <code>Id</code> value that uniquely identifies the
   *                 <code>CreateAccount</code> request. You can get the value from the
   *                 <code>CreateAccountStatus.Id</code> response in an earlier <a>CreateAccount</a> request, or from the <a>ListCreateAccountStatus</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  CreateAccountRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCreateAccountStatusResponse {
  /**
   * <p>A structure that contains the current status of an account creation request.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePolicyRequest {
  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>When you're signed in as the management account, specify the ID of the account that
   *             you want details about. Specifying an organization root or organizational unit (OU) as
   *             the target is not supported.</p>
   * @public
   */
  TargetId?: string | undefined;
}

/**
 * <p>Contains rules to be applied to the affected accounts. The effective policy is the
 *             aggregation of any policies the account inherits, plus any policy directly attached to
 *             the account.</p>
 * @public
 */
export interface EffectivePolicy {
  /**
   * <p>The text content of the policy.</p>
   * @public
   */
  PolicyContent?: string | undefined;

  /**
   * <p>The time of the last update to this policy.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The account ID of the policy target. </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The policy type.</p>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePolicyResponse {
  /**
   * <p>The contents of the effective policy.</p>
   * @public
   */
  EffectivePolicy?: EffectivePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeHandshakeRequest {
  /**
   * <p>ID for the handshake that you want information about.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResponse {
  /**
   * <p>A structure that contains information about the organization.</p>
   *          <important>
   *             <p>The <code>AvailablePolicyTypes</code> part of the response is deprecated, and you
   *                 shouldn't use it in your apps. It doesn't include any policy type supported by Organizations
   *                 other than SCPs. In the China (Ningxia) Region, no policy type is included. To
   *                 determine which policy types are enabled in your organization, use the <code>
   *                   <a>ListRoots</a>
   *                </code> operation.</p>
   *          </important>
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitRequest {
  /**
   * <p>ID for the organizational unit that you want details about. You can get the ID from
   *             the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitResponse {
  /**
   * <p>A structure that contains details about the specified OU.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface DescribePolicyRequest {
  /**
   * <p>ID for the policy that you want details about. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribePolicyResponse {
  /**
   * <p>A structure that contains details about the specified policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * <p>A structure that contains resource policy ID and Amazon Resource Name (ARN).</p>
 * @public
 */
export interface ResourcePolicySummary {
  /**
   * <p>The unique identifier (ID) of the resource policy.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource policy.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A structure that contains details about a resource policy.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>A structure that contains resource policy ID and Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourcePolicySummary?: ResourcePolicySummary | undefined;

  /**
   * <p>The policy text of the resource policy.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>A structure that contains details about the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeResponsibilityTransferRequest {
  /**
   * <p>ID for the transfer.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>Contains details for a participant in a transfer. A <i>transfer</i> is
 *             the arrangement between two management accounts where one account designates the other
 *             with specified responsibilities for their organization.</p>
 * @public
 */
export interface TransferParticipant {
  /**
   * <p>ID for the management account.</p>
   * @public
   */
  ManagementAccountId?: string | undefined;

  /**
   * <p>Email address for the management account.</p>
   * @public
   */
  ManagementAccountEmail?: string | undefined;
}

/**
 * <p>Contains details for a transfer. A <i>transfer</i> is the arrangement
 *             between two management accounts where one account designates the other with specified
 *             responsibilities for their organization.</p>
 * @public
 */
export interface ResponsibilityTransfer {
  /**
   * <p>Amazon Resource Name (ARN) for the transfer.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Name assigned to the transfer.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>ID for the transfer.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of transfer. Currently, only <code>BILLING</code> is supported.</p>
   * @public
   */
  Type?: ResponsibilityTransferType | undefined;

  /**
   * <p>Status for the transfer.</p>
   * @public
   */
  Status?: ResponsibilityTransferStatus | undefined;

  /**
   * <p>Account that allows another account external to its organization to manage the
   *             specified responsibilities for the organization.</p>
   * @public
   */
  Source?: TransferParticipant | undefined;

  /**
   * <p>Account that manages the specified responsibilities for another organization.</p>
   * @public
   */
  Target?: TransferParticipant | undefined;

  /**
   * <p>Timestamp when the transfer starts.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * <p>Timestamp when the transfer ends.</p>
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * <p>ID for the handshake of the transfer.</p>
   * @public
   */
  ActiveHandshakeId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResponsibilityTransferResponse {
  /**
   * <p>A <code>ResponsibilityTransfer</code> object. Contains details for a transfer.</p>
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * <p>ID for the policy you want to detach. You can get the ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>ID for the root, OU, or account that you want to detach the policy from. You can get
   *             the ID from the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId: string | undefined;
}

/**
 * @public
 */
export interface DisableAWSServiceAccessRequest {
  /**
   * <p>The service principal name of the Amazon Web Services service for which you want to disable
   *             integration with your organization. This is typically in the form of a URL, such as
   *                     <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeRequest {
  /**
   * <p>ID for the root in which you want to disable a policy type. You can get the ID from
   *             the <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  RootId: string | undefined;

  /**
   * <p>The policy type that you want to disable in this root. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * <p>Contains details about a root. A root is a top-level parent node in the hierarchy of
 *             an organization that can contain organizational units (OUs) and accounts.
 *             The root contains every Amazon Web Services account in the
 *             organization.</p>
 * @public
 */
export interface Root {
  /**
   * <p>The unique identifier (ID) for the root. The ID is unique to the organization
   *             only.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the root.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The types of policies that are currently enabled for the root and therefore can be
   *             attached to the root or to its OUs or accounts.</p>
   *          <note>
   *             <p>Even if a policy type is shown as available in the organization, you can
   *                 separately enable and disable them at the root level by using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. Use <a>DescribeOrganization</a> to see the availability of the policy types in
   *                 that organization.</p>
   *          </note>
   * @public
   */
  PolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeResponse {
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   * @public
   */
  Root?: Root | undefined;
}

/**
 * @public
 */
export interface EnableAllFeaturesRequest {}

/**
 * @public
 */
export interface EnableAWSServiceAccessRequest {
  /**
   * <p>The service principal name of the Amazon Web Services service for which you want to enable
   *             integration with your organization. This is typically in the form of a URL, such as
   *                     <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeRequest {
  /**
   * <p>ID for the root in which you want to enable a policy type. You can get the ID from the
   *                 <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  RootId: string | undefined;

  /**
   * <p>The policy type that you want to enable. You can specify one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeResponse {
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   * @public
   */
  Root?: Root | undefined;
}

/**
 * @public
 */
export interface InviteAccountToOrganizationRequest {
  /**
   * <p>The identifier (ID) of the Amazon Web Services account that you want to invite to join your
   *             organization. This is a JSON object that contains the following elements:</p>
   *          <p>
   *             <code>\{ "Type": "ACCOUNT", "Id": "<<i>
   *                   <b>account id
   *                         number</b>
   *                </i>>" \}</code>
   *          </p>
   *          <p>If you use the CLI, you can submit this as a single string, similar to the following
   *             example:</p>
   *          <p>
   *             <code>--target Id=123456789012,Type=ACCOUNT</code>
   *          </p>
   *          <p>If you specify <code>"Type": "ACCOUNT"</code>, you must provide the Amazon Web Services account ID
   *             number as the <code>Id</code>. If you specify <code>"Type": "EMAIL"</code>, you must
   *             specify the email address that is associated with the account.</p>
   *          <p>
   *             <code>--target Id=diego@example.com,Type=EMAIL</code>
   *          </p>
   * @public
   */
  Target: HandshakeParty | undefined;

  /**
   * <p>Additional information that you want to include in the generated email to the
   *             recipient account owner.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the account when it becomes a member of the
   *             organization. For each tag in the list, you must specify both a tag key and a value. You
   *             can set the value to an empty string, but you can't set it to <code>null</code>. For
   *             more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the
   *             Organizations User Guide.</p>
   *          <important>
   *             <p>Any tags in the request are checked for compliance with any applicable tag
   *                 policies when the request is made. The request is rejected if the tags in the
   *                 request don't match the requirements of the policy at that time. Tag policy
   *                 compliance is <i>
   *                   <b>not</b>
   *                </i> checked
   *                 again when the invitation is accepted and the tags are actually attached to the
   *                 account. That means that if the tag policy changes between the invitation and the
   *                 acceptance, then that tags could potentially be non-compliant.</p>
   *          </important>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for an account, then the entire request fails and invitations are not sent.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface InviteOrganizationToTransferResponsibilityRequest {
  /**
   * <p>The type of responsibility you want to designate to your organization. Currently, only
   *                 <code>BILLING</code> is supported.</p>
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * <p>A <code>HandshakeParty</code> object. Contains details for the account you want to
   *             invite. Currently, only <code>ACCOUNT</code> and <code>EMAIL</code> are supported.</p>
   * @public
   */
  Target: HandshakeParty | undefined;

  /**
   * <p>Additional information that you want to include in the invitation.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>Timestamp when the recipient will begin managing the specified
   *             responsibilities.</p>
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * <p>Name you want to assign to the transfer.</p>
   * @public
   */
  SourceName: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the transfer. For each tag in the list, you must specify both a tag key and a value. You
   *             can set the value to an empty string, but you can't set it to <code>null</code>. For
   *             more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the
   *             Organizations User Guide.</p>
   *          <important>
   *             <p>Any tags in the request are checked for compliance with any applicable tag
   *                 policies when the request is made. The request is rejected if the tags in the
   *                 request don't match the requirements of the policy at that time. Tag policy
   *                 compliance is <i>
   *                   <b>not</b>
   *                </i> checked
   *                 again when the invitation is accepted and the tags are actually attached to the
   *                 transfer. That means that if the tag policy changes between the invitation and the
   *                 acceptance, then that tags could potentially be non-compliant.</p>
   *          </important>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for a transfer, then the entire request fails and invitations are not sent.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * <p>A list of objects in the organization.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentRequest {
  /**
   * <p>The unique identifier (ID) for the parent root or organization unit (OU) whose
   *             accounts you want to list.</p>
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentResponse {
  /**
   * <p>A list of the accounts in the specified root or OU.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyRequest {
  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyResponse {
  /**
   * <p>The accounts in the organization which have an invalid effective policy for the specified policy type.</p>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>The specified policy type. One of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure that contains details of a service principal that represents an Amazon Web Services
 *             service that is enabled to integrate with Organizations.</p>
 * @public
 */
export interface EnabledServicePrincipal {
  /**
   * <p>The name of the service principal. This is typically in the form of a URL, such as:
   *                     <code>
   *                <i>servicename</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The date that the service principal was enabled for integration with Organizations.</p>
   * @public
   */
  DateEnabled?: Date | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationResponse {
  /**
   * <p>A list of the service principals for the services that are enabled to integrate with
   *             your organization. Each principal is a structure that includes the name and the date
   *             that it was enabled for integration with Organizations.</p>
   * @public
   */
  EnabledServicePrincipals?: EnabledServicePrincipal[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChildrenRequest {
  /**
   * <p>The unique identifier (ID) for the parent root or OU whose children you want to
   *             list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>Filters the output to include only the specified child type.</p>
   * @public
   */
  ChildType: ChildType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains a list of child entities, either OUs or accounts.</p>
 * @public
 */
export interface Child {
  /**
   * <p>The unique identifier (ID) of this child entity.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with
   *           "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that
   *           contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional
   *           lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of this child entity.</p>
   * @public
   */
  Type?: ChildType | undefined;
}

/**
 * @public
 */
export interface ListChildrenResponse {
  /**
   * <p>The list of children of the specified parent container.</p>
   * @public
   */
  Children?: Child[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusRequest {
  /**
   * <p>A list of one or more states that you want included in the response. If this parameter
   *             isn't present, all requests are included in the response.</p>
   * @public
   */
  States?: CreateAccountState[] | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusResponse {
  /**
   * <p>A list of objects with details about the requests. Certain elements, such as the
   *             accountId number, are present in the output only after the account has been successfully
   *             created.</p>
   * @public
   */
  CreateAccountStatuses?: CreateAccountStatus[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsRequest {
  /**
   * <p>Specifies a service principal name. If specified, then the operation lists the
   *             delegated administrators only for the specified service.</p>
   *          <p>If you don't specify a service principal, the operation lists all delegated
   *             administrators for all services in your organization.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the delegated administrator.</p>
 * @public
 */
export interface DelegatedAdministrator {
  /**
   * <p>The unique identifier (ID) of the delegated administrator's account.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delegated administrator's account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The email address that is associated with the delegated administrator's Amazon Web Services
   *             account.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The friendly name of the delegated administrator's account.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the delegated administrator's account in the organization.</p>
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * <p>Each state represents a specific phase in the account lifecycle. Use this information
   *             to manage account access, automate workflows, or trigger actions based on account state
   *             changes.</p>
   *          <p>For more information about account states and their implications, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html">Monitor the state of your Amazon Web Services accounts </a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  State?: AccountState | undefined;

  /**
   * <p>The method by which the delegated administrator's account joined the
   *             organization.</p>
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * <p>The date when the delegated administrator's account became a part of the
   *             organization.</p>
   * @public
   */
  JoinedTimestamp?: Date | undefined;

  /**
   * <p>The date when the account was made a delegated administrator.</p>
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsResponse {
  /**
   * <p>The list of delegated administrators in your organization.</p>
   * @public
   */
  DelegatedAdministrators?: DelegatedAdministrator[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountRequest {
  /**
   * <p>The account ID number of a delegated administrator account in the organization.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the Amazon Web Services service for which the account is a delegated
 *             administrator.</p>
 * @public
 */
export interface DelegatedService {
  /**
   * <p>The name of an Amazon Web Services service that can request an operation for the specified service.
   *             This is typically in the form of a URL, such as:
   *                 <code>
   *                <i>servicename</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The date that the account became a delegated administrator for this service. </p>
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountResponse {
  /**
   * <p>The services for which the account is a delegated administrator.</p>
   * @public
   */
  DelegatedServices?: DelegatedService[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsRequest {
  /**
   * <p>The ID of the account that you want details about. Specifying an organization root or
   *             organizational unit (OU) as the target is not supported.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains details about the validation errors that occurred when generating or
 *             enforcing an <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_effective.html">effective
 *                 policy</a>, such as which policies contributed to the error and location of the
 *             error.</p>
 * @public
 */
export interface EffectivePolicyValidationError {
  /**
   * <p>The error code for the validation error. For example,
   *             <code>ELEMENTS_TOO_MANY</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message for the validation error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The path within the effective policy where the validation error occurred.</p>
   * @public
   */
  PathToError?: string | undefined;

  /**
   * <p>The individual policies <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_mgmt.html">inherited</a> and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_policies_attach.html">attached</a> to
   *             the account which contributed to the validation error.</p>
   * @public
   */
  ContributingPolicies?: string[] | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsResponse {
  /**
   * <p>The ID of the specified account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The specified policy type. One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * <p>The path in the organization where the specified account exists.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The time when the latest effective policy was generated for the specified
   *             account.</p>
   * @public
   */
  EvaluationTimestamp?: Date | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>EffectivePolicyValidationError</code> object contains details about the
   *             validation errors that occurred when generating or enforcing an effective policy, such
   *             as which policies contributed to the error and location of the error.</p>
   * @public
   */
  EffectivePolicyValidationErrors?: EffectivePolicyValidationError[] | undefined;
}

/**
 * <p>Contains the filter used to select the handshakes for an operation.</p>
 * @public
 */
export interface HandshakeFilter {
  /**
   * <p>The type of handshake.</p>
   *          <p>If you specify <code>ActionType</code>, you cannot also specify
   *                 <code>ParentHandshakeId</code>.</p>
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * <p>The parent handshake. Only used for handshake types that are a child of another
   *             type.</p>
   *          <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify
   *                 <code>ActionType</code>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  ParentHandshakeId?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountRequest {
  /**
   * <p>A <code>HandshakeFilter</code> object. Contains the filer used to select the
   *             handshakes for an operation.</p>
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationRequest {
  /**
   * <p>A <code>HandshakeFilter</code> object. Contains the filer used to select the
   *             handshakes for an operation.</p>
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInboundResponsibilityTransfersRequest {
  /**
   * <p>The type of responsibility. Currently, only <code>BILLING</code> is supported.</p>
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * <p>ID for the transfer.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInboundResponsibilityTransfersResponse {
  /**
   * <p>A <code>ResponsibilityTransfers</code> object. Contains details for a transfer.</p>
   * @public
   */
  ResponsibilityTransfers?: ResponsibilityTransfer[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentRequest {
  /**
   * <p>ID for the root or OU whose child OUs you want to list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentResponse {
  /**
   * <p>A list of the OUs in the specified root or parent OU.</p>
   * @public
   */
  OrganizationalUnits?: OrganizationalUnit[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutboundResponsibilityTransfersRequest {
  /**
   * <p>The type of responsibility. Currently, only <code>BILLING</code> is supported.</p>
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOutboundResponsibilityTransfersResponse {
  /**
   * <p>An array of <code>ResponsibilityTransfer</code> objects. Contains details for a
   *             transfer.</p>
   * @public
   */
  ResponsibilityTransfers?: ResponsibilityTransfer[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParentsRequest {
  /**
   * <p>ID for the OU or account whose parent containers you want to list. Don't specify a
   *             root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with
   *           "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that
   *           contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional
   *           lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChildId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about either a root or an organizational unit (OU) that can
 *             contain OUs or accounts in an organization.</p>
 * @public
 */
export interface Parent {
  /**
   * <p>The unique identifier (ID) of the parent entity.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the parent entity.</p>
   * @public
   */
  Type?: ParentType | undefined;
}

/**
 * @public
 */
export interface ListParentsResponse {
  /**
   * <p>A list of parents for the specified child account or OU.</p>
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>Specifies the type of policy that you want to include in the response. You must
   *             specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>A list of policies that match the filter criteria in the request. The output list
   *             doesn't include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.</p>
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetRequest {
  /**
   * <p>ID for the root, organizational unit, or account whose policies you want to
   *             list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The type of policy that you want to include in the returned list. You must specify one
   *             of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html">INSPECTOR_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetResponse {
  /**
   * <p>The list of policies that match the criteria in the request.</p>
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRootsRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRootsResponse {
  /**
   * <p>A list of roots that are defined in an organization.</p>
   * @public
   */
  Roots?: Root[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ID of the resource with the tags to list.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * <p>ID for the policy whose attachments you want to know.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that you can retrieve the remaining results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a root, OU, or account that a policy is attached to.</p>
 * @public
 */
export interface PolicyTargetSummary {
  /**
   * <p>The unique identifier (ID) of the policy target.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy target.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the policy target.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the policy target.</p>
   * @public
   */
  Type?: TargetType | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * <p>A list of structures, each of which contains details about one of the entities to
   *             which the specified policy is attached.</p>
   * @public
   */
  Targets?: PolicyTargetSummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface MoveAccountRequest {
  /**
   * <p>ID for the account that you want to move.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>ID for the root or organizational unit that you want to move the account from.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceParentId: string | undefined;

  /**
   * <p>ID for the root or organizational unit that you want to move the account to.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DestinationParentId: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>If provided, the new content for the resource policy. The text must be correctly
   *             formatted JSON that complies with the syntax for the resource policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html">SCP syntax</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created resource policy. For each
   *             tag in the list, you must specify both a tag key and a value. You can set the value to
   *             an empty string, but you can't set it to <code>null</code>. For more information about
   *             tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging
   *                 Organizations resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>Calls with tags apply to the initial creation of the resource policy, otherwise an
   *                 exception is thrown. If any one of the tags is not valid or if you exceed the
   *                 allowed number of tags for the resource policy, then the entire request fails and
   *                 the resource policy is not created. </p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>A structure that contains details about the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface RegisterDelegatedAdministratorRequest {
  /**
   * <p>The account ID number of the member account in the organization to register as a
   *             delegated administrator.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The service principal of the Amazon Web Services service for which you want to make the member
   *             account a delegated administrator.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface RemoveAccountFromOrganizationRequest {
  /**
   * <p>ID for the member account that you want to remove from the organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ID of the resource to add a tag to.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tags to add to the specified resource.</p>
   *          <p>For each tag in the list, you must specify both a tag key and a value. The value can
   *             be an empty string, but you can't set it to <code>null</code>.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for a resource, then the entire request fails.</p>
   *          </note>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TerminateResponsibilityTransferRequest {
  /**
   * <p>ID for the transfer.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Timestamp when the responsibility transfer is to end.</p>
   * @public
   */
  EndTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface TerminateResponsibilityTransferResponse {
  /**
   * <p>A <code>ResponsibilityTransfer</code> object. Contains details for a transfer.</p>
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ID of the resource to remove a tag from.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The list of keys for tags to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitRequest {
  /**
   * <p>ID for the OU that you want to rename. You can get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;

  /**
   * <p>The new name that you want to assign to the OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitResponse {
  /**
   * <p>A structure that contains the details about the specified OU, including its new
   *             name.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * <p>ID for the policy that you want to update.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>If provided, the new name for the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If provided, the new description for the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If provided, the new content for the policy. The text must be correctly formatted JSON
   *             that complies with the syntax for the policy's type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html">SCP
   *                 syntax</a> in the <i>Organizations User Guide</i>.</p>
   *          <p>The maximum size of a policy document depends on the policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values">Maximum and minimum values</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * <p>A structure that contains details about the updated policy, showing the requested
   *             changes.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateResponsibilityTransferRequest {
  /**
   * <p>ID for the transfer.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>New name you want to assign to the transfer.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponsibilityTransferResponse {
  /**
   * <p>Contains details for a transfer. A <i>transfer</i> is the arrangement
   *             between two management accounts where one account designates the other with specified
   *             responsibilities for their organization.</p>
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * <p>Contains additional details for a handshake.</p>
 * @public
 */
export interface HandshakeResource {
  /**
   * <p>Additional information for the handshake. The format of the value string must match
   *             the requirements of the specified type.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of information being passed, specifying how the value is to be interpreted by
   *             the other party:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACCOUNT</b>: ID for an Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ORGANIZATION</b>: ID for an organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EMAIL</b>: Email address for the
   *                     recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OWNER_EMAIL</b>: Email address for the
   *                     sender.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OWNER_NAME</b>: Name of the sender.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NOTES</b>: Additional text included by the sender
   *                     for the recipient.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: HandshakeResourceType | undefined;

  /**
   * <p>An array of <code>HandshakeResource</code> objects. When needed, contains additional
   *             details for a handshake. For example, the email address for the sender.</p>
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * <p>Contains details for a handshake. A handshake is the secure exchange of information
 *             between two Amazon Web Services accounts: a sender and a recipient.</p>
 *          <p>
 *             <b>Note:</b> Handshakes that are <code>CANCELED</code>,
 *             <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>EXPIRED</code> show up in
 *             lists for only 30 days after entering that state After that they are deleted.</p>
 * @public
 */
export interface Handshake {
  /**
   * <p>ID for the handshake.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the handshake.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An array of <code>HandshakeParty</code> objects. Contains details for participant in a
   *             handshake.</p>
   * @public
   */
  Parties?: HandshakeParty[] | undefined;

  /**
   * <p>Current state for the handshake.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REQUESTED</b>: Handshake awaiting a response from
   *                     the recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OPEN</b>: Handshake sent to multiple recipients
   *                     and all recipients have responded. The sender can now complete the handshake
   *                     action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED</b>: Handshake canceled by the
   *                     sender.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACCEPTED</b>: Handshake accepted by the
   *                     recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DECLINED</b>: Handshake declined by the
   *                     recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED</b>: Handshake has expired.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: HandshakeState | undefined;

  /**
   * <p>Timestamp when the handshake request was made.</p>
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * <p>Timestamp when the handshake expires.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;

  /**
   * <p>The type of handshake:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INVITE</b>: Handshake sent to a standalone
   *                     account requesting that it to join the sender's organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLE_ALL_FEATURES</b>: Handshake sent to
   *                     invited member accounts to enable all features for the organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVE_ALL_FEATURES</b>: Handshake sent to the
   *                     management account when all invited member accounts have approved to enable all
   *                     features.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TRANSFER_RESPONSIBILITY</b>: Handshake sent to
   *                     another organization's management account requesting that it designate the
   *                     sender with the specified responsibilities for recipient's organization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Action?: ActionType | undefined;

  /**
   * <p>An array of <code>HandshakeResource</code> objects. When needed, contains additional
   *             details for a handshake. For example, the email address for the sender.</p>
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * @public
 */
export interface AcceptHandshakeResponse {
  /**
   * <p>A <code>Handshake</code> object. Contains details for the handshake.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface CancelHandshakeResponse {
  /**
   * <p>A <code>Handshake</code> object. Contains for the handshake that you canceled.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DeclineHandshakeResponse {
  /**
   * <p>A <code>Handshake</code> object. Contains details for the declined handshake.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DescribeHandshakeResponse {
  /**
   * <p>A <code>Handshake</code> object. Contains details for the handshake.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface EnableAllFeaturesResponse {
  /**
   * <p>A structure that contains details about the handshake created to support this request
   *             to enable all features in the organization.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface InviteAccountToOrganizationResponse {
  /**
   * <p>A structure that contains details about the handshake that is created to support this
   *             invitation request.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface InviteOrganizationToTransferResponsibilityResponse {
  /**
   * <p>Contains details for a handshake. A handshake is the secure exchange of information
   *             between two Amazon Web Services accounts: a sender and a recipient.</p>
   *          <p>
   *             <b>Note:</b> Handshakes that are <code>CANCELED</code>,
   *             <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>EXPIRED</code> show up in
   *             lists for only 30 days after entering that state After that they are deleted.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountResponse {
  /**
   * <p>An array of <code>Handshake</code>objects. Contains details for a handshake.</p>
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationResponse {
  /**
   * <p>An array of <code>Handshake</code>objects. Contains details for a handshake.</p>
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}
