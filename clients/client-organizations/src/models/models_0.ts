// smithy-typescript generated code
import type {
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
   * ID for the handshake that you want to accept.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * Contains details for a participant in a handshake.
 *
 * @public
 */
export interface HandshakeParty {
  /**
   * ID for the participant: Acccount ID, organization ID, or email address.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of ID for the participant.
   *
   * > **Note:** ORGANIZATION is valid only in the response context (identifying the inviting organization). Valid input values for the Target parameter are ACCOUNT and EMAIL only.
   *
   * @public
   */
  Type: HandshakePartyType | undefined;
}

/**
 * Contains information about an Amazon Web Services account that is a member of an organization.
 *
 * @public
 */
export interface Account {
  /**
   * The unique identifier (ID) of the account.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The email address associated with the Amazon Web Services account.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for this parameter is a string of characters that represents a standard internet email address.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The friendly name of the account.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the account in the organization.
   *
   * > **Important:** The `Status` parameter in the `Account` object will be retired on September 9, 2026. Although both the account `State` and account `Status` parameters are currently available in the Organizations APIs (`DescribeAccount`, `ListAccounts`, `ListAccountsForParent`), we recommend that you update your scripts or other code to use the `State` parameter instead of `Status` before September 9, 2026.
   *
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes.
   *
   * For more information about account states and their implications, see [Monitor the state of your Amazon Web Services accounts](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html) in the *Organizations User Guide*.
   *
   * @public
   */
  State?: AccountState | undefined;

  /**
   * The paths in the organization where the account exists.
   *
   * @public
   */
  Paths?: string[] | undefined;

  /**
   * The method by which the account joined the organization.
   *
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * The date the account became a part of the organization.
   *
   * @public
   */
  JoinedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * ID for the policy that you want to attach to the target. You can get the ID for the policy by calling the ListPolicies operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * ID for the root, OU, or account that you want to attach the policy to. You can get the ID by calling the ListRoots, ListOrganizationalUnitsForParent, or ListAccounts operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  TargetId: string | undefined;
}

/**
 * @public
 */
export interface CancelHandshakeRequest {
  /**
   * ID for the handshake that you want to cancel. You can get the ID from the ListHandshakesForOrganization operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface CloseAccountRequest {
  /**
   * Retrieves the Amazon Web Services account Id for the current `CloseAccount` API request.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * A custom key-value pair associated with a resource within your organization.
 *
 * You can attach tags to any of the following organization resources.
 *
 * - Amazon Web Services account
 * - Organizational unit (OU)
 * - Organization root
 * - Policy
 *
 * @public
 */
export interface Tag {
  /**
   * The key identifier, or name, of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * The email address of the owner to assign to the new member account. This email address must not already be associated with another Amazon Web Services account. You must use a valid email address to complete account creation.
   *
   * The rules for a valid email address:
   *
   * - The address must be a minimum of 6 and a maximum of 64 characters long.
   * - All characters must be 7-bit ASCII characters.
   * - There must be one and only one @ symbol, which separates the local name from the domain name.
   * - The local name can't contain any of the following characters:
   *
   *   whitespace, " ' ( ) < > [ ] : ; , \ | % &
   * - The local name can't begin with a dot (.)
   * - The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.)
   * - The domain name can't begin or end with a hyphen (-) or dot (.)
   * - The domain name must contain at least one dot
   *
   * You can't access the root user of the account or remove an account that was created with an invalid email address.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The friendly name of the member account.
   *
   * @public
   */
  AccountName: string | undefined;

  /**
   * The name of an IAM role that Organizations automatically preconfigures in the new member account. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.
   *
   * If you don't specify this parameter, the role name defaults to `OrganizationAccountAccessRole`.
   *
   * For more information about how to use this role to access the member account, see the following links:
   *
   * - [Creating the OrganizationAccountAccessRole in an invited member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role) in the *Organizations User Guide*
   * - Steps 2 and 3 in [IAM Tutorial: Delegate access across Amazon Web Services accounts using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html) in the *IAM User Guide*
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * If set to `ALLOW`, the new account enables IAM users to access account billing information *if* they have the required permissions. If set to `DENY`, only the root user of the new account can access account billing information. For more information, see [About IAM access to the Billing and Cost Management console](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * If you don't specify this parameter, the value defaults to `ALLOW`, and IAM users and roles with the required permissions can access billing information for the new account.
   *
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the status about a CreateAccount or CreateGovCloudAccount request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.
 *
 * @public
 */
export interface CreateAccountStatus {
  /**
   * The unique identifier (ID) that references this request. You get this value from the response of the initial CreateAccount request to create the account.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The account name given to the account when it was created.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The status of the asynchronous request to create an Amazon Web Services account.
   *
   * @public
   */
  State?: CreateAccountState | undefined;

  /**
   * The date and time that the request was made for the account creation.
   *
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * The date and time that the account was created and the request completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * If the account was created successfully, the unique identifier (ID) of the new account.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * If the account was created successfully, the ID for the new account in the Amazon Web Services GovCloud (US) Region.
   *
   * @public
   */
  GovCloudAccountId?: string | undefined;

  /**
   * If the request failed, a description of the reason for the failure.
   *
   * - ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached the limit on the number of accounts in your organization.
   * - CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same information.
   * - EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services account with that email address already exists.
   * - FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization failed to receive business license validation.
   * - GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region could not be created because this Region already includes an account with that email address.
   * - IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization can't complete business license validation because it doesn't have valid identity data.
   * - INVALID_ADDRESS: The account could not be created because the address you provided is not valid.
   * - INVALID_EMAIL: The account could not be created because the email address you provided is not valid.
   * - INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does not have a supported payment method associated with the account. Amazon Web Services does not support cards issued by financial institutions in Russia or Belarus. For more information, see [Managing your Amazon Web Services payments](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html).
   * - INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Amazon Web Services Customer Support.
   * - MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has not received Business Validation.
   * - MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a valid payment method, such as a credit card.
   * - PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is still in the process of completing business license validation.
   * - UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has an unknown issue with business license validation.
   *
   * @public
   */
  FailureReason?: CreateAccountFailureReason | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * A structure that contains details about the request to create an account. This response structure might not be fully populated when you first receive it because account creation is an asynchronous process. You can pass the returned `CreateAccountStatus` ID as a parameter to DescribeCreateAccountStatus to get status about the progress of the request at later times. You can also check the CloudTrail log for the `CreateAccountResult` event. For more information, see [Logging and monitoring in Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html) in the *Organizations User Guide*.
   *
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface CreateGovCloudAccountRequest {
  /**
   * Specifies the email address of the owner to assign to the new member account in the commercial Region. This email address must not already be associated with another Amazon Web Services account. You must use a valid email address to complete account creation.
   *
   * The rules for a valid email address:
   *
   * - The address must be a minimum of 6 and a maximum of 64 characters long.
   * - All characters must be 7-bit ASCII characters.
   * - There must be one and only one @ symbol, which separates the local name from the domain name.
   * - The local name can't contain any of the following characters:
   *
   *   whitespace, " ' ( ) < > [ ] : ; , \ | % &
   * - The local name can't begin with a dot (.)
   * - The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.)
   * - The domain name can't begin or end with a hyphen (-) or dot (.)
   * - The domain name must contain at least one dot
   *
   * You can't access the root user of the account or remove an account that was created with an invalid email address. Like all request parameters for `CreateGovCloudAccount`, the request for the email address for the Amazon Web Services GovCloud (US) account originates from the commercial Region, not from the Amazon Web Services GovCloud (US) Region.
   *
   * @public
   */
  Email: string | undefined;

  /**
   * The friendly name of the member account.
   *
   * The account name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.) You can't separate characters with a dash (–).
   *
   * @public
   */
  AccountName: string | undefined;

  /**
   * (Optional)
   *
   * The name of an IAM role that Organizations automatically preconfigures in the new member accounts in both the Amazon Web Services GovCloud (US) Region and in the commercial Region. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.
   *
   * If you don't specify this parameter, the role name defaults to `OrganizationAccountAccessRole`.
   *
   * For more information about how to use this role to access the member account, see the following links:
   *
   * - [Creating the OrganizationAccountAccessRole in an invited member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role) in the *Organizations User Guide*
   * - Steps 2 and 3 in [IAM Tutorial: Delegate access across Amazon Web Services accounts using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html) in the *IAM User Guide*
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * If set to `ALLOW`, the new linked account in the commercial Region enables IAM users to access account billing information *if* they have the required permissions. If set to `DENY`, only the root user of the new account can access account billing information. For more information, see [About IAM access to the Billing and Cost Management console](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * If you don't specify this parameter, the value defaults to `ALLOW`, and IAM users and roles with the required permissions can access billing information for the new account.
   *
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * A list of tags that you want to attach to the newly created account. These tags are attached to the commercial account associated with the GovCloud account, and not to the GovCloud account itself. To add tags to the actual GovCloud account, call the TagResource operation in the GovCloud region after the new GovCloud account exists.
   *
   * For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGovCloudAccountResponse {
  /**
   * Contains the status about a CreateAccount or CreateGovCloudAccount request to create an Amazon Web Services account or an Amazon Web Services GovCloud (US) account in an organization.
   *
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationRequest {
  /**
   * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
   *
   * - `CONSOLIDATED_BILLING`: All member accounts have their bills consolidated to and paid by the management account. For more information, see [Consolidated billing](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only) in the *Organizations User Guide*.
   *
   *   The consolidated billing feature subset isn't available for organizations in the Amazon Web Services GovCloud (US) Region.
   * - `ALL`: In addition to all the features supported by the consolidated billing feature set, the management account can also apply any policy type to any member account in the organization. For more information, see [All features](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all) in the *Organizations User Guide*.
   *
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;
}

/**
 * Contains information about a policy type and its status in the associated root.
 *
 * @public
 */
export interface PolicyTypeSummary {
  /**
   * The name of the policy type.
   *
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * The status of the policy type as it relates to the associated root. To attach a policy of the specified type to a root or to an OU or account in that root, it must be available in the organization and enabled for that root.
   *
   * @public
   */
  Status?: PolicyTypeStatus | undefined;
}

/**
 * Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
 *
 * @public
 */
export interface Organization {
  /**
   * The unique identifier (ID) of an organization.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an organization.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Specifies the functionality that currently is available to the organization. If set to "ALL", then all features are enabled and policies can be applied to accounts in the organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing functionality is available. For more information, see [Enabling all features in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html) in the *Organizations User Guide*.
   *
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  MasterAccountArn?: string | undefined;

  /**
   * The unique identifier (ID) of the management account of an organization.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  MasterAccountId?: string | undefined;

  /**
   * The email address that is associated with the Amazon Web Services account that is designated as the management account for the organization.
   *
   * @public
   */
  MasterAccountEmail?: string | undefined;

  /**
   * > **Important:** Do not use. This field is deprecated and doesn't provide complete information about the policies in your organization.
   *
   * To determine the policies that are enabled and available for use in your organization, use the ListRoots operation instead.
   *
   * @public
   */
  AvailablePolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationResponse {
  /**
   * A structure that contains details about the newly created organization.
   *
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitRequest {
  /**
   * ID for the parent root or OU that you want to create the new OU in.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  ParentId: string | undefined;

  /**
   * The friendly name to assign to the new OU.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of tags that you want to attach to the newly created OU. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the allowed number of tags for an OU, then the entire request fails and the OU is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains details about an organizational unit (OU). An OU is a container of Amazon Web Services accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
 *
 * @public
 */
export interface OrganizationalUnit {
  /**
   * The unique identifier (ID) associated with this OU. The ID is unique to the organization only.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this OU.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The friendly name of this OU.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The path in the organization where this OU exists.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitResponse {
  /**
   * A structure that contains details about the newly created OU.
   *
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * The policy text content to add to the new policy. The text that you supply must adhere to the rules of the policy type you specify in the `Type` parameter.
   *
   * The maximum size of a policy document depends on the policy's type. For more information, see [Maximum and minimum values](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values) in the *Organizations User Guide*.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * An optional description to assign to the policy.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The friendly name to assign to the policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of policy to create. You can specify one of the following values:
   *
   * - [SERVICE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
   * - [RESOURCE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html)
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  Type: PolicyType | undefined;

  /**
   * A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the allowed number of tags for a policy, then the entire request fails and the policy is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about a policy, but does not include the content. To see the content of a policy, see DescribePolicy.
 *
 * @public
 */
export interface PolicySummary {
  /**
   * The unique identifier (ID) of the policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The friendly name of the policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of policy.
   *
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * A boolean value that indicates whether the specified policy is an Amazon Web Services managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.
   *
   * @public
   */
  AwsManaged?: boolean | undefined;
}

/**
 * Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
 *
 * @public
 */
export interface Policy {
  /**
   * A structure that contains additional details about the policy.
   *
   * @public
   */
  PolicySummary?: PolicySummary | undefined;

  /**
   * The text content of the policy.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * A structure that contains details about the newly created policy.
   *
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface DeclineHandshakeRequest {
  /**
   * ID for the handshake that you want to decline. You can get the ID from the ListHandshakesForAccount operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOrganizationalUnitRequest {
  /**
   * ID for the organizational unit that you want to delete. You can get the ID from the ListOrganizationalUnitsForParent operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * ID for the policy that you want to delete. You can get the ID from the ListPolicies or ListPoliciesForTarget operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDelegatedAdministratorRequest {
  /**
   * The account ID number of the member account in the organization that you want to deregister as a delegated administrator.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The service principal name of an Amazon Web Services service for which the account is a delegated administrator.
   *
   * Delegated administrator privileges are revoked for only the specified Amazon Web Services service from the member account. If the specified service is the only service for which the member account is a delegated administrator, the operation also revokes Organizations read action permissions.
   *
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountRequest {
  /**
   * The unique identifier (ID) of the Amazon Web Services account that you want information about. You can get the ID from the ListAccounts or ListAccountsForParent operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountResponse {
  /**
   * A structure that contains information about the requested account.
   *
   * > **Important:** The `Status` parameter in the API response will be retired on September 9, 2026. Although both the account `State` and account `Status` parameters are currently available in the Organizations APIs (`DescribeAccount`, `ListAccounts`, `ListAccountsForParent`), we recommend that you update your scripts or other code to use the `State` parameter instead of `Status` before September 9, 2026.
   *
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface DescribeCreateAccountStatusRequest {
  /**
   * Specifies the `Id` value that uniquely identifies the `CreateAccount` request. You can get the value from the `CreateAccountStatus.Id` response in an earlier CreateAccount request, or from the ListCreateAccountStatus operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  CreateAccountRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCreateAccountStatusResponse {
  /**
   * A structure that contains the current status of an account creation request.
   *
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePolicyRequest {
  /**
   * The type of policy that you want information about. You can specify one of the following values:
   *
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * When you're signed in as the management account, specify the ID of the account that you want details about. Specifying an organization root or organizational unit (OU) as the target is not supported.
   *
   * @public
   */
  TargetId?: string | undefined;
}

/**
 * Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
 *
 * @public
 */
export interface EffectivePolicy {
  /**
   * The text content of the policy.
   *
   * @public
   */
  PolicyContent?: string | undefined;

  /**
   * The time of the last update to this policy.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The account ID of the policy target.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The policy type.
   *
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePolicyResponse {
  /**
   * The contents of the effective policy.
   *
   * @public
   */
  EffectivePolicy?: EffectivePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeHandshakeRequest {
  /**
   * ID for the handshake that you want information about.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResponse {
  /**
   * A structure that contains information about the organization.
   *
   * > **Important:** The `AvailablePolicyTypes` part of the response is deprecated, and you shouldn't use it in your apps. It doesn't include any policy type supported by Organizations other than SCPs. In the China (Ningxia) Region, no policy type is included. To determine which policy types are enabled in your organization, use the `ListRoots` operation.
   *
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitRequest {
  /**
   * ID for the organizational unit that you want details about. You can get the ID from the ListOrganizationalUnitsForParent operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitResponse {
  /**
   * A structure that contains details about the specified OU.
   *
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface DescribePolicyRequest {
  /**
   * ID for the policy that you want details about. You can get the ID from the ListPolicies or ListPoliciesForTarget operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribePolicyResponse {
  /**
   * A structure that contains details about the specified policy.
   *
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * A structure that contains resource policy ID and Amazon Resource Name (ARN).
 *
 * @public
 */
export interface ResourcePolicySummary {
  /**
   * The unique identifier (ID) of the resource policy.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource policy.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A structure that contains details about a resource policy.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * A structure that contains resource policy ID and Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourcePolicySummary?: ResourcePolicySummary | undefined;

  /**
   * The policy text of the resource policy.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * A structure that contains details about the resource policy.
   *
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DescribeResponsibilityTransferRequest {
  /**
   * ID for the transfer.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Contains details for a participant in a transfer. A *transfer* is the arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.
 *
 * @public
 */
export interface TransferParticipant {
  /**
   * ID for the management account.
   *
   * @public
   */
  ManagementAccountId?: string | undefined;

  /**
   * Email address for the management account.
   *
   * @public
   */
  ManagementAccountEmail?: string | undefined;
}

/**
 * Contains details for a transfer. A *transfer* is the arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.
 *
 * @public
 */
export interface ResponsibilityTransfer {
  /**
   * Amazon Resource Name (ARN) for the transfer.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name assigned to the transfer.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * ID for the transfer.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of transfer. Currently, only `BILLING` is supported.
   *
   * @public
   */
  Type?: ResponsibilityTransferType | undefined;

  /**
   * Status for the transfer.
   *
   * @public
   */
  Status?: ResponsibilityTransferStatus | undefined;

  /**
   * Account that allows another account external to its organization to manage the specified responsibilities for the organization.
   *
   * @public
   */
  Source?: TransferParticipant | undefined;

  /**
   * Account that manages the specified responsibilities for another organization.
   *
   * @public
   */
  Target?: TransferParticipant | undefined;

  /**
   * Timestamp when the transfer starts.
   *
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * Timestamp when the transfer ends.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * ID for the handshake of the transfer.
   *
   * @public
   */
  ActiveHandshakeId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResponsibilityTransferResponse {
  /**
   * A `ResponsibilityTransfer` object. Contains details for a transfer.
   *
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * ID for the policy you want to detach. You can get the ID from the ListPolicies or ListPoliciesForTarget operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * ID for the root, OU, or account that you want to detach the policy from. You can get the ID from the ListRoots, ListOrganizationalUnitsForParent, or ListAccounts operations.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  TargetId: string | undefined;
}

/**
 * @public
 */
export interface DisableAWSServiceAccessRequest {
  /**
   * The service principal name of the Amazon Web Services service for which you want to disable integration with your organization. This is typically in the form of a URL, such as `service-abbreviation.amazonaws.com`.
   *
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeRequest {
  /**
   * ID for the root in which you want to disable a policy type. You can get the ID from the ListRoots operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.
   *
   * @public
   */
  RootId: string | undefined;

  /**
   * The policy type that you want to disable in this root. You can specify one of the following values:
   *
   * - [SERVICE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
   * - [RESOURCE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html)
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every Amazon Web Services account in the organization.
 *
 * @public
 */
export interface Root {
  /**
   * The unique identifier (ID) for the root. The ID is unique to the organization only.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the root.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The friendly name of the root.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The types of policies that are currently enabled for the root and therefore can be attached to the root or to its OUs or accounts.
   *
   * > **Note:** Even if a policy type is shown as available in the organization, you can separately enable and disable them at the root level by using EnablePolicyType and DisablePolicyType. Use DescribeOrganization to see the availability of the policy types in that organization.
   *
   * @public
   */
  PolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeResponse {
  /**
   * A structure that shows the root with the updated list of enabled policy types.
   *
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
   * The service principal name of the Amazon Web Services service for which you want to enable integration with your organization. This is typically in the form of a URL, such as `service-abbreviation.amazonaws.com`.
   *
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeRequest {
  /**
   * ID for the root in which you want to enable a policy type. You can get the ID from the ListRoots operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a root ID string requires "r-" followed by from 4 to 32 lowercase letters or digits.
   *
   * @public
   */
  RootId: string | undefined;

  /**
   * The policy type that you want to enable. You can specify one of the following values:
   *
   * - [SERVICE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
   * - [RESOURCE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html)
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeResponse {
  /**
   * A structure that shows the root with the updated list of enabled policy types.
   *
   * @public
   */
  Root?: Root | undefined;
}

/**
 * @public
 */
export interface InviteAccountToOrganizationRequest {
  /**
   * The identifier (ID) of the Amazon Web Services account that you want to invite to join your organization. This is a JSON object that contains the following elements:
   *
   * `\{ "Type": "ACCOUNT", "Id": "< account id number >" \}`
   *
   * If you use the CLI, you can submit this as a single string, similar to the following example:
   *
   * `--target Id=123456789012,Type=ACCOUNT`
   *
   * If you specify `"Type": "ACCOUNT"`, you must provide the Amazon Web Services account ID number as the `Id`. If you specify `"Type": "EMAIL"`, you must specify the email address that is associated with the account.
   *
   * `--target Id=diego@example.com,Type=EMAIL`
   *
   * @public
   */
  Target: HandshakeParty | undefined;

  /**
   * Additional information that you want to include in the generated email to the recipient account owner.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * A list of tags that you want to attach to the account when it becomes a member of the organization. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Important:** Any tags in the request are checked for compliance with any applicable tag policies when the request is made. The request is rejected if the tags in the request don't match the requirements of the policy at that time. Tag policy compliance is ***not*** checked again when the invitation is accepted and the tags are actually attached to the account. That means that if the tag policy changes between the invitation and the acceptance, then that tags could potentially be non-compliant.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the allowed number of tags for an account, then the entire request fails and invitations are not sent.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface InviteOrganizationToTransferResponsibilityRequest {
  /**
   * The type of responsibility you want to designate to your organization. Currently, only `BILLING` is supported.
   *
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * A `HandshakeParty` object. Contains details for the account you want to invite. Currently, only `ACCOUNT` and `EMAIL` are supported.
   *
   * @public
   */
  Target: HandshakeParty | undefined;

  /**
   * Additional information that you want to include in the invitation.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Timestamp when the recipient will begin managing the specified responsibilities.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * Name you want to assign to the transfer.
   *
   * @public
   */
  SourceName: string | undefined;

  /**
   * A list of tags that you want to attach to the transfer. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Important:** Any tags in the request are checked for compliance with any applicable tag policies when the request is made. The request is rejected if the tags in the request don't match the requirements of the policy at that time. Tag policy compliance is ***not*** checked again when the invitation is accepted and the tags are actually attached to the transfer. That means that if the tag policy changes between the invitation and the acceptance, then that tags could potentially be non-compliant.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the allowed number of tags for a transfer, then the entire request fails and invitations are not sent.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * A list of objects in the organization.
   *
   * > **Important:** The `Status` parameter in the API response will be retired on September 9, 2026. Although both the account `State` and account `Status` parameters are currently available in the Organizations APIs (`DescribeAccount`, `ListAccounts`, `ListAccountsForParent`), we recommend that you update your scripts or other code to use the `State` parameter instead of `Status` before September 9, 2026.
   *
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentRequest {
  /**
   * The unique identifier (ID) for the parent root or organization unit (OU) whose accounts you want to list.
   *
   * @public
   */
  ParentId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentResponse {
  /**
   * A list of the accounts in the specified root or OU.
   *
   * > **Important:** The `Status` parameter in the API response will be retired on September 9, 2026. Although both the account `State` and account `Status` parameters are currently available in the Organizations APIs (`DescribeAccount`, `ListAccounts`, `ListAccountsForParent`), we recommend that you update your scripts or other code to use the `State` parameter instead of `Status` before September 9, 2026.
   *
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyRequest {
  /**
   * The type of policy that you want information about. You can specify one of the following values:
   *
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyResponse {
  /**
   * The accounts in the organization which have an invalid effective policy for the specified policy type.
   *
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * The specified policy type. One of the following values:
   *
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationRequest {
  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure that contains details of a service principal that represents an Amazon Web Services service that is enabled to integrate with Organizations.
 *
 * @public
 */
export interface EnabledServicePrincipal {
  /**
   * The name of the service principal. This is typically in the form of a URL, such as: `servicename.amazonaws.com`.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The date that the service principal was enabled for integration with Organizations.
   *
   * @public
   */
  DateEnabled?: Date | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationResponse {
  /**
   * A list of the service principals for the services that are enabled to integrate with your organization. Each principal is a structure that includes the name and the date that it was enabled for integration with Organizations.
   *
   * @public
   */
  EnabledServicePrincipals?: EnabledServicePrincipal[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChildrenRequest {
  /**
   * The unique identifier (ID) for the parent root or OU whose children you want to list.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  ParentId: string | undefined;

  /**
   * Filters the output to include only the specified child type.
   *
   * @public
   */
  ChildType: ChildType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains a list of child entities, either OUs or accounts.
 *
 * @public
 */
export interface Child {
  /**
   * The unique identifier (ID) of this child entity.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a child ID string requires one of the following:
   *
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of this child entity.
   *
   * @public
   */
  Type?: ChildType | undefined;
}

/**
 * @public
 */
export interface ListChildrenResponse {
  /**
   * The list of children of the specified parent container.
   *
   * @public
   */
  Children?: Child[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusRequest {
  /**
   * A list of one or more states that you want included in the response. If this parameter isn't present, all requests are included in the response.
   *
   * @public
   */
  States?: CreateAccountState[] | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusResponse {
  /**
   * A list of objects with details about the requests. Certain elements, such as the accountId number, are present in the output only after the account has been successfully created.
   *
   * @public
   */
  CreateAccountStatuses?: CreateAccountStatus[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsRequest {
  /**
   * Specifies a service principal name. If specified, then the operation lists the delegated administrators only for the specified service.
   *
   * If you don't specify a service principal, the operation lists all delegated administrators for all services in your organization.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the delegated administrator.
 *
 * @public
 */
export interface DelegatedAdministrator {
  /**
   * The unique identifier (ID) of the delegated administrator's account.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delegated administrator's account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The email address that is associated with the delegated administrator's Amazon Web Services account.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The friendly name of the delegated administrator's account.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the delegated administrator's account in the organization.
   *
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes.
   *
   * For more information about account states and their implications, see [Monitor the state of your Amazon Web Services accounts](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html) in the *Organizations User Guide*.
   *
   * @public
   */
  State?: AccountState | undefined;

  /**
   * The method by which the delegated administrator's account joined the organization.
   *
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * The date when the delegated administrator's account became a part of the organization.
   *
   * @public
   */
  JoinedTimestamp?: Date | undefined;

  /**
   * The date when the account was made a delegated administrator.
   *
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsResponse {
  /**
   * The list of delegated administrators in your organization.
   *
   * @public
   */
  DelegatedAdministrators?: DelegatedAdministrator[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountRequest {
  /**
   * The account ID number of a delegated administrator account in the organization.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the Amazon Web Services service for which the account is a delegated administrator.
 *
 * @public
 */
export interface DelegatedService {
  /**
   * The name of an Amazon Web Services service that can request an operation for the specified service. This is typically in the form of a URL, such as: `servicename.amazonaws.com`.
   *
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * The date that the account became a delegated administrator for this service.
   *
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountResponse {
  /**
   * The services for which the account is a delegated administrator.
   *
   * @public
   */
  DelegatedServices?: DelegatedService[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsRequest {
  /**
   * The ID of the account that you want details about. Specifying an organization root or organizational unit (OU) as the target is not supported.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The type of policy that you want information about. You can specify one of the following values:
   *
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains details about the validation errors that occurred when generating or enforcing an [effective policy](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_effective.html), such as which policies contributed to the error and location of the error.
 *
 * @public
 */
export interface EffectivePolicyValidationError {
  /**
   * The error code for the validation error. For example, `ELEMENTS_TOO_MANY`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message for the validation error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The path within the effective policy where the validation error occurred.
   *
   * @public
   */
  PathToError?: string | undefined;

  /**
   * The individual policies [inherited](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_mgmt.html) and [attached](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_policies_attach.html) to the account which contributed to the validation error.
   *
   * @public
   */
  ContributingPolicies?: string[] | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsResponse {
  /**
   * The ID of the specified account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The specified policy type. One of the following values:
   *
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * The path in the organization where the specified account exists.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The time when the latest effective policy was generated for the specified account.
   *
   * @public
   */
  EvaluationTimestamp?: Date | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The `EffectivePolicyValidationError` object contains details about the validation errors that occurred when generating or enforcing an effective policy, such as which policies contributed to the error and location of the error.
   *
   * @public
   */
  EffectivePolicyValidationErrors?: EffectivePolicyValidationError[] | undefined;
}

/**
 * Contains the filter used to select the handshakes for an operation.
 *
 * @public
 */
export interface HandshakeFilter {
  /**
   * The type of handshake.
   *
   * If you specify `ActionType`, you cannot also specify `ParentHandshakeId`.
   *
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * The parent handshake. Only used for handshake types that are a child of another type.
   *
   * If you specify `ParentHandshakeId`, you cannot also specify `ActionType`.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  ParentHandshakeId?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountRequest {
  /**
   * A `HandshakeFilter` object. Contains the filer used to select the handshakes for an operation.
   *
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationRequest {
  /**
   * A `HandshakeFilter` object. Contains the filer used to select the handshakes for an operation.
   *
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInboundResponsibilityTransfersRequest {
  /**
   * The type of responsibility. Currently, only `BILLING` is supported.
   *
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * ID for the transfer.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInboundResponsibilityTransfersResponse {
  /**
   * A `ResponsibilityTransfers` object. Contains details for a transfer.
   *
   * @public
   */
  ResponsibilityTransfers?: ResponsibilityTransfer[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentRequest {
  /**
   * ID for the root or OU whose child OUs you want to list.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  ParentId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentResponse {
  /**
   * A list of the OUs in the specified root or parent OU.
   *
   * @public
   */
  OrganizationalUnits?: OrganizationalUnit[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutboundResponsibilityTransfersRequest {
  /**
   * The type of responsibility. Currently, only `BILLING` is supported.
   *
   * @public
   */
  Type: ResponsibilityTransferType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOutboundResponsibilityTransfersResponse {
  /**
   * An array of `ResponsibilityTransfer` objects. Contains details for a transfer.
   *
   * @public
   */
  ResponsibilityTransfers?: ResponsibilityTransfer[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParentsRequest {
  /**
   * ID for the OU or account whose parent containers you want to list. Don't specify a root.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a child ID string requires one of the following:
   *
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  ChildId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization.
 *
 * @public
 */
export interface Parent {
  /**
   * The unique identifier (ID) of the parent entity.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the parent entity.
   *
   * @public
   */
  Type?: ParentType | undefined;
}

/**
 * @public
 */
export interface ListParentsResponse {
  /**
   * A list of parents for the specified child account or OU.
   *
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
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
   * Specifies the type of policy that you want to include in the response. You must specify one of the following values:
   *
   * - [SERVICE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
   * - [RESOURCE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html)
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * A list of policies that match the filter criteria in the request. The output list doesn't include the policy contents. To see the content for a policy, see DescribePolicy.
   *
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetRequest {
  /**
   * ID for the root, organizational unit, or account whose policies you want to list.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  TargetId: string | undefined;

  /**
   * The type of policy that you want to include in the returned list. You must specify one of the following values:
   *
   * - [SERVICE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html)
   * - [RESOURCE_CONTROL_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html)
   * - [DECLARATIVE_POLICY_EC2](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)
   * - [BACKUP_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)
   * - [TAG_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)
   * - [CHATBOT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html)
   * - [AISERVICES_OPT_OUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
   * - [SECURITYHUB_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html)
   * - [UPGRADE_ROLLOUT_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_upgrade_rollout.html)
   * - [INSPECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inspector.html)
   * - [BEDROCK_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_bedrock.html)
   * - [S3_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_s3.html)
   * - [NETWORK_SECURITY_DIRECTOR_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_network_security_director.html)
   * - [GUARDDUTY_POLICY](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_guardduty.html)
   *
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetResponse {
  /**
   * The list of policies that match the criteria in the request.
   *
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRootsRequest {
  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRootsResponse {
  /**
   * A list of roots that are defined in an organization.
   *
   * @public
   */
  Roots?: Root[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
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
   * The ID of the resource with the tags to list.
   *
   * You can specify any of the following taggable resources.
   *
   * - Amazon Web Services account – specify the account ID number.
   * - Organizational unit – specify the OU ID that begins with `ou-` and looks similar to: `ou-1a2b-34uvwxyz`
   * - Root – specify the root ID that begins with `r-` and looks similar to: `r-1a2b`
   * - Policy – specify the policy ID that begins with `p-` andlooks similar to: `p-12abcdefg3`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are assigned to the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * ID for the policy whose attachments you want to know.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The parameter for receiving additional results if you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about a root, OU, or account that a policy is attached to.
 *
 * @public
 */
export interface PolicyTargetSummary {
  /**
   * The unique identifier (ID) of the policy target.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Account** - A string that consists of exactly 12 digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy target.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The friendly name of the policy target.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the policy target.
   *
   * @public
   */
  Type?: TargetType | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * A list of structures, each of which contains details about one of the entities to which the specified policy is attached.
   *
   * @public
   */
  Targets?: PolicyTargetSummary[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface MoveAccountRequest {
  /**
   * ID for the account that you want to move.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * ID for the root or organizational unit that you want to move the account from.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  SourceParentId: string | undefined;

  /**
   * ID for the root or organizational unit that you want to move the account to.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
   *
   * - **Root** - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
   * - **Organizational unit (OU)** - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  DestinationParentId: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * If provided, the new content for the resource policy. The text must be correctly formatted JSON that complies with the syntax for the resource policy's type. For more information, see [SCP syntax](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html) in the *Organizations User Guide*.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * A list of tags that you want to attach to the newly created resource policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the Organizations User Guide.
   *
   * > **Note:** Calls with tags apply to the initial creation of the resource policy, otherwise an exception is thrown. If any one of the tags is not valid or if you exceed the allowed number of tags for the resource policy, then the entire request fails and the resource policy is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * A structure that contains details about the resource policy.
   *
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface RegisterDelegatedAdministratorRequest {
  /**
   * The account ID number of the member account in the organization to register as a delegated administrator.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The service principal of the Amazon Web Services service for which you want to make the member account a delegated administrator.
   *
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface RemoveAccountFromOrganizationRequest {
  /**
   * ID for the member account that you want to remove from the organization.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an account ID string requires exactly 12 digits.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ID of the resource to add a tag to.
   *
   * You can specify any of the following taggable resources.
   *
   * - Amazon Web Services account – specify the account ID number.
   * - Organizational unit – specify the OU ID that begins with `ou-` and looks similar to: `ou-1a2b-34uvwxyz`
   * - Root – specify the root ID that begins with `r-` and looks similar to: `r-1a2b`
   * - Policy – specify the policy ID that begins with `p-` andlooks similar to: `p-12abcdefg3`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A list of tags to add to the specified resource.
   *
   * For each tag in the list, you must specify both a tag key and a value. The value can be an empty string, but you can't set it to `null`.
   *
   * > **Note:** If any one of the tags is not valid or if you exceed the maximum allowed number of tags for a resource, then the entire request fails.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TerminateResponsibilityTransferRequest {
  /**
   * ID for the transfer.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Timestamp when the responsibility transfer is to end.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface TerminateResponsibilityTransferResponse {
  /**
   * A `ResponsibilityTransfer` object. Contains details for a transfer.
   *
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ID of the resource to remove a tag from.
   *
   * You can specify any of the following taggable resources.
   *
   * - Amazon Web Services account – specify the account ID number.
   * - Organizational unit – specify the OU ID that begins with `ou-` and looks similar to: `ou-1a2b-34uvwxyz`
   * - Root – specify the root ID that begins with `r-` and looks similar to: `r-1a2b`
   * - Policy – specify the policy ID that begins with `p-` andlooks similar to: `p-12abcdefg3`
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The list of keys for tags to remove from the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitRequest {
  /**
   * ID for the OU that you want to rename. You can get the ID from the ListOrganizationalUnitsForParent operation.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
   *
   * @public
   */
  OrganizationalUnitId: string | undefined;

  /**
   * The new name that you want to assign to the OU.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitResponse {
  /**
   * A structure that contains the details about the specified OU, including its new name.
   *
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * ID for the policy that you want to update.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a policy ID string requires "p-" followed by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * If provided, the new name for the policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If provided, the new description for the policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If provided, the new content for the policy. The text must be correctly formatted JSON that complies with the syntax for the policy's type. For more information, see [SCP syntax](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html) in the *Organizations User Guide*.
   *
   * The maximum size of a policy document depends on the policy's type. For more information, see [Maximum and minimum values](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values) in the *Organizations User Guide*.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * A structure that contains details about the updated policy, showing the requested changes.
   *
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateResponsibilityTransferRequest {
  /**
   * ID for the transfer.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * New name you want to assign to the transfer.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponsibilityTransferResponse {
  /**
   * Contains details for a transfer. A *transfer* is the arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.
   *
   * @public
   */
  ResponsibilityTransfer?: ResponsibilityTransfer | undefined;
}

/**
 * Contains additional details for a handshake.
 *
 * @public
 */
export interface HandshakeResource {
  /**
   * Additional information for the handshake. The format of the value string must match the requirements of the specified type.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of information being passed, specifying how the value is to be interpreted by the other party:
   *
   * - **ACCOUNT**: ID for an Amazon Web Services account.
   * - **ORGANIZATION**: ID for an organization.
   * - **EMAIL**: Email address for the recipient.
   * - **OWNER_EMAIL**: Email address for the sender.
   * - **OWNER_NAME**: Name of the sender.
   * - **NOTES**: Additional text included by the sender for the recipient.
   *
   * @public
   */
  Type?: HandshakeResourceType | undefined;

  /**
   * An array of `HandshakeResource` objects. When needed, contains additional details for a handshake. For example, the email address for the sender.
   *
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * Contains details for a handshake. A handshake is the secure exchange of information between two Amazon Web Services accounts: a sender and a recipient.
 *
 * **Note:** Handshakes that are `CANCELED`, `ACCEPTED`, `DECLINED`, or `EXPIRED` show up in lists for only 30 days after entering that state After that they are deleted.
 *
 * @public
 */
export interface Handshake {
  /**
   * ID for the handshake.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Amazon Resource Name (ARN) for the handshake.
   *
   * For more information about ARNs in Organizations, see [ARN Formats Supported by Organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies) in the *Amazon Web Services Service Authorization Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An array of `HandshakeParty` objects. Contains details for participant in a handshake.
   *
   * @public
   */
  Parties?: HandshakeParty[] | undefined;

  /**
   * Current state for the handshake.
   *
   * - **REQUESTED**: Handshake awaiting a response from the recipient.
   * - **OPEN**: Handshake sent to multiple recipients and all recipients have responded. The sender can now complete the handshake action.
   * - **CANCELED**: Handshake canceled by the sender.
   * - **ACCEPTED**: Handshake accepted by the recipient.
   * - **DECLINED**: Handshake declined by the recipient.
   * - **EXPIRED**: Handshake has expired.
   *
   * @public
   */
  State?: HandshakeState | undefined;

  /**
   * Timestamp when the handshake request was made.
   *
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * Timestamp when the handshake expires.
   *
   * @public
   */
  ExpirationTimestamp?: Date | undefined;

  /**
   * The type of handshake:
   *
   * - **INVITE**: Handshake sent to a standalone account requesting that it to join the sender's organization.
   * - **ENABLE_ALL_FEATURES**: Handshake sent to invited member accounts to enable all features for the organization.
   * - **APPROVE_ALL_FEATURES**: Handshake sent to the management account when all invited member accounts have approved to enable all features.
   * - **TRANSFER_RESPONSIBILITY**: Handshake sent to another organization's management account requesting that it designate the sender with the specified responsibilities for recipient's organization.
   *
   * @public
   */
  Action?: ActionType | undefined;

  /**
   * An array of `HandshakeResource` objects. When needed, contains additional details for a handshake. For example, the email address for the sender.
   *
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * @public
 */
export interface AcceptHandshakeResponse {
  /**
   * A `Handshake` object. Contains details for the handshake.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface CancelHandshakeResponse {
  /**
   * A `Handshake` object. Contains for the handshake that you canceled.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DeclineHandshakeResponse {
  /**
   * A `Handshake` object. Contains details for the declined handshake.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DescribeHandshakeResponse {
  /**
   * A `Handshake` object. Contains details for the handshake.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface EnableAllFeaturesResponse {
  /**
   * A structure that contains details about the handshake created to support this request to enable all features in the organization.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface InviteAccountToOrganizationResponse {
  /**
   * A structure that contains details about the handshake that is created to support this invitation request.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface InviteOrganizationToTransferResponsibilityResponse {
  /**
   * Contains details for a handshake. A handshake is the secure exchange of information between two Amazon Web Services accounts: a sender and a recipient.
   *
   * **Note:** Handshakes that are `CANCELED`, `ACCEPTED`, `DECLINED`, or `EXPIRED` show up in lists for only 30 days after entering that state After that they are deleted.
   *
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountResponse {
  /**
   * An array of `Handshake`objects. Contains details for a handshake.
   *
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationResponse {
  /**
   * An array of `Handshake`objects. Contains details for a handshake.
   *
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}
