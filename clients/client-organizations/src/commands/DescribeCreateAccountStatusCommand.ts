// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCreateAccountStatusRequest, DescribeCreateAccountStatusResponse } from "../models/models_0";
import { DescribeCreateAccountStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCreateAccountStatusCommand}.
 */
export interface DescribeCreateAccountStatusCommandInput extends DescribeCreateAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCreateAccountStatusCommand}.
 */
export interface DescribeCreateAccountStatusCommandOutput extends DescribeCreateAccountStatusResponse, __MetadataBearer {}

/**
 * Retrieves the current status of an asynchronous request to create an account.
 *
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * // import type { OrganizationsClientConfig } from "@aws-sdk/client-organizations";
 * const config = {}; // type is OrganizationsClientConfig
 * const client = new OrganizationsClient(config);
 * const input = { // DescribeCreateAccountStatusRequest
 *   CreateAccountRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCreateAccountStatusResponse
 * //   CreateAccountStatus: { // CreateAccountStatus
 * //     Id: "STRING_VALUE",
 * //     AccountName: "STRING_VALUE",
 * //     State: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //     RequestedTimestamp: new Date("TIMESTAMP"),
 * //     CompletedTimestamp: new Date("TIMESTAMP"),
 * //     AccountId: "STRING_VALUE",
 * //     GovCloudAccountId: "STRING_VALUE",
 * //     FailureReason: "ACCOUNT_LIMIT_EXCEEDED" || "EMAIL_ALREADY_EXISTS" || "INVALID_ADDRESS" || "INVALID_EMAIL" || "CONCURRENT_ACCOUNT_MODIFICATION" || "INTERNAL_FAILURE" || "GOVCLOUD_ACCOUNT_ALREADY_EXISTS" || "MISSING_BUSINESS_VALIDATION" || "FAILED_BUSINESS_VALIDATION" || "PENDING_BUSINESS_VALIDATION" || "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION" || "UNKNOWN_BUSINESS_VALIDATION" || "MISSING_PAYMENT_INSTRUMENT" || "INVALID_PAYMENT_INSTRUMENT" || "UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCreateAccountStatusCommandInput - {@link DescribeCreateAccountStatusCommandInput}
 * @returns {@link DescribeCreateAccountStatusCommandOutput}
 * @see {@link DescribeCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCreateAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *
 * Your account isn't a member of an organization. To make this request, you must use the credentials of an account that belongs to an organization.
 *
 * @throws {@link CreateAccountStatusNotFoundException} (client fault)
 *
 * We can't find an create account request with the `CreateAccountRequestId` that you specified.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The requested operation failed because you provided invalid values for one or more of the request parameters. This exception includes a reason that contains additional information about the violated limit:
 *
 * > **Note:** Some of the reasons in the following list might not be applicable to this specific API or operation.
 *
 * - CALLER_REQUIRED_FIELD_MISSING: At least one of the required field is missing: Caller Account Id, Management Account Id or Organization Id.
 * - DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same entity.
 * - END_DATE_NOT_END_OF_MONTH: You provided an invalid end date. The end date must be the end of the last day of the month (23.59.59.999).
 * - END_DATE_TOO_EARLY: You provided an invalid end date. The end date is too early.
 * - END_DATE_TOO_LATE: You provided an invalid end date. The end date is too late.
 * - IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be modified.
 * - INPUT_REQUIRED: You must include a value for all required parameters.
 * - INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the invited account owner.
 * - INVALID_END_DATE: The selected withdrawal date doesn't meet the minimum notice period required by your partner agreement. Visit Amazon Web Services Partner Central or contact your Amazon Web Services Channel Partner for help.
 * - INVALID_ENUM: You specified an invalid value.
 * - INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.
 * - INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid characters.
 * - INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one invalid value.
 * - INVALID_PAGINATION_TOKEN: Get the value for the `NextToken` parameter from the response to a previous call of the operation.
 * - INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account, organization, or email) as a party.
 * - INVALID_PATTERN: You provided a value that doesn't match the required pattern. The service also validates your free-text field values against common cross-site scripting (XSS) patterns and rejects requests that contain matching values.
 * - INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the required pattern.
 * - INVALID_PRINCIPAL: You specified an invalid principal element in the policy.
 * - INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name can't begin with the reserved prefix `AWSServiceRoleFor`.
 * - INVALID_START_DATE: The start date doesn't meet the minimum requirements.
 * - INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name (ARN) for the organization.
 * - INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID.
 * - INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag. You can’t add, edit, or delete system tag keys because they're reserved for Amazon Web Services use. System tags don’t count against your tags per resource limit.
 * - MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the operation.
 * - MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than allowed.
 * - MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than allowed.
 * - MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than allowed.
 * - MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than allowed.
 * - MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities in the same root.
 * - NON_DETACHABLE_POLICY: You can't detach this Amazon Web Services Managed Policy.
 * - START_DATE_NOT_BEGINNING_OF_DAY: You provided an invalid start date. The start date must be the beginning of the day (00:00:00.000).
 * - START_DATE_NOT_BEGINNING_OF_MONTH: You provided an invalid start date. The start date must be the first day of the month.
 * - START_DATE_TOO_EARLY: You provided an invalid start date. The start date is too early.
 * - START_DATE_TOO_LATE: You provided an invalid start date. The start date is too late.
 * - TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target entity.
 * - UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't recognized.
 * - UNSUPPORTED_ACTION_IN_RESPONSIBILITY_TRANSFER: You provided a value that is not supported by this operation.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * Organizations can't complete your request because of an internal service error. Try again later.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You have sent too many requests in too short a period of time. The quota helps protect against denial-of-service attacks. Try again later.
 *
 * For information about quotas that affect Organizations, see [Quotas for Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html) in the *Organizations User Guide*.
 *
 * @throws {@link UnsupportedAPIEndpointException} (client fault)
 *
 * This action isn't available in the current Amazon Web Services Region.
 *
 * @throws {@link OrganizationsServiceException}
 *
 * Base exception class for all service exceptions from Organizations service.
 *
 * @example To get information about a request to create an account
 * ```javascript
 * // The following example shows how to request the status about a previous request to create an account in an organization. This operation can be called only by a principal from the organization's master account. In the example, the specified "createAccountRequestId" comes from the response of the original call to "CreateAccount":
 * const input = {
 *   CreateAccountRequestId: "car-exampleaccountcreationrequestid"
 * };
 * const command = new DescribeCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreateAccountStatus: {
 *     AccountId: "333333333333",
 *     Id: "car-exampleaccountcreationrequestid",
 *     State: "SUCCEEDED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCreateAccountStatusCommand extends command<DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCreateAccountStatus",
  DescribeCreateAccountStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCreateAccountStatusRequest;
      output: DescribeCreateAccountStatusResponse;
    };
    sdk: {
      input: DescribeCreateAccountStatusCommandInput;
      output: DescribeCreateAccountStatusCommandOutput;
    };
  };
}
