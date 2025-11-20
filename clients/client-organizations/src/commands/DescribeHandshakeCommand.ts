// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHandshakeRequest, DescribeHandshakeResponse } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeHandshake } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHandshakeCommand}.
 */
export interface DescribeHandshakeCommandInput extends DescribeHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHandshakeCommand}.
 */
export interface DescribeHandshakeCommandOutput extends DescribeHandshakeResponse, __MetadataBearer {}

/**
 * <p>Returns details for a handshake. A handshake is the secure exchange of information
 *             between two Amazon Web Services accounts: a sender and a recipient.</p>
 *          <p>You can view <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code>
 *             handshakes in API Responses for 30 days before they are deleted.</p>
 *          <p>You can call this operation from any account in a organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * // import type { OrganizationsClientConfig } from "@aws-sdk/client-organizations";
 * const config = {}; // type is OrganizationsClientConfig
 * const client = new OrganizationsClient(config);
 * const input = { // DescribeHandshakeRequest
 *   HandshakeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHandshakeResponse
 * //   Handshake: { // Handshake
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Parties: [ // HandshakeParties
 * //       { // HandshakeParty
 * //         Id: "STRING_VALUE", // required
 * //         Type: "ACCOUNT" || "ORGANIZATION" || "EMAIL", // required
 * //       },
 * //     ],
 * //     State: "REQUESTED" || "OPEN" || "CANCELED" || "ACCEPTED" || "DECLINED" || "EXPIRED",
 * //     RequestedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationTimestamp: new Date("TIMESTAMP"),
 * //     Action: "INVITE" || "ENABLE_ALL_FEATURES" || "APPROVE_ALL_FEATURES" || "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE" || "TRANSFER_RESPONSIBILITY",
 * //     Resources: [ // HandshakeResources
 * //       { // HandshakeResource
 * //         Value: "STRING_VALUE",
 * //         Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE" || "RESPONSIBILITY_TRANSFER" || "TRANSFER_START_TIMESTAMP" || "TRANSFER_TYPE" || "MANAGEMENT_ACCOUNT" || "MANAGEMENT_EMAIL" || "MANAGEMENT_NAME",
 * //         Resources: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE" || "RESPONSIBILITY_TRANSFER" || "TRANSFER_START_TIMESTAMP" || "TRANSFER_TYPE" || "MANAGEMENT_ACCOUNT" || "MANAGEMENT_EMAIL" || "MANAGEMENT_NAME",
 * //             Resources: "<HandshakeResources>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHandshakeCommandInput - {@link DescribeHandshakeCommandInput}
 * @returns {@link DescribeHandshakeCommandOutput}
 * @see {@link DescribeHandshakeCommandInput} for command's `input` shape.
 * @see {@link DescribeHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link HandshakeNotFoundException} (client fault)
 *  <p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The requested operation failed because you provided invalid values for one or more of
 *             the request parameters. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>CALLER_REQUIRED_FIELD_MISSING: At least one of the required field is missing: Caller Account Id, Management Account Id or Organization Id.</p>
 *             </li>
 *             <li>
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_NOT_END_OF_MONTH: You provided an invalid end date. The end date must be the end
 *                     of the last day of the month (23.59.59.999).</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_TOO_EARLY: You provided an invalid end date. It is too early for the transfer to
 *                     end.</p>
 *             </li>
 *             <li>
 *                <p>IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be
 *                     modified.</p>
 *             </li>
 *             <li>
 *                <p>INPUT_REQUIRED: You must include a value for all required parameters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the
 *                     invited account owner.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_END_DATE: The selected withdrawal date doesn't meet the terms of your partner
 *                     agreement. Visit Amazon Web Services Partner Central to view your partner agreements or contact your Amazon Web Services
 *                     Partner for help.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM: You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least
 *                     one invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code>
 *                     parameter from the response to a previous call of the operation.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account,
 *                     organization, or email) as a party.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN: You provided a value that doesn't match the required
 *                     pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match
 *                     the required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PRINCIPAL: You specified an invalid principal element in the
 *                     policy.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name
 *                     can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_START_DATE: The start date doesn't meet the minimum requirements.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name
 *                     (ARN) for the organization.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag.
 *                     You can’t add, edit, or delete system tag keys because they're reserved for
 *                     Amazon Web Services use. System tags don’t count against your tags per resource limit.</p>
 *             </li>
 *             <li>
 *                <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between
 *                     entities in the same root.</p>
 *             </li>
 *             <li>
 *                <p>NON_DETACHABLE_POLICY: You can't detach this Amazon Web Services Managed Policy.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_DAY: You provided an invalid start date. The start date must
 *                     be the beginning of the day (00:00:00.000).</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_MONTH: You provided an invalid start date. The start date must
 *                     be the first day of the month.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_EARLY: You provided an invalid start date. The start date is too early.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_LATE: You provided an invalid start date. The start date is too late.</p>
 *             </li>
 *             <li>
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *             <li>
 *                <p>UNSUPPORTED_ACTION_IN_RESPONSIBILITY_TRANSFER: You provided a value that is not supported
 *                 by this operation.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 *
 * @example To get information about a handshake
 * ```javascript
 * // The following example shows you how to request details about a handshake. The handshake ID comes either from the original call to "InviteAccountToOrganization", or from a call to "ListHandshakesForAccount" or "ListHandshakesForOrganization":
 * const input = {
 *   HandshakeId: "h-examplehandshakeid111"
 * };
 * const command = new DescribeHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Handshake: {
 *     Action: "INVITE",
 *     Arn: "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *     ExpirationTimestamp: "2016-11-30T17:24:58.046Z",
 *     Id: "h-examplehandshakeid111",
 *     Parties: [
 *       {
 *         Id: "o-exampleorgid",
 *         Type: "ORGANIZATION"
 *       },
 *       {
 *         Id: "333333333333",
 *         Type: "ACCOUNT"
 *       }
 *     ],
 *     RequestedTimestamp: "2016-11-30T17:24:58.046Z",
 *     Resources: [
 *       {
 *         Resources: [
 *           {
 *             Type: "MASTER_EMAIL",
 *             Value: "bill@example.com"
 *           },
 *           {
 *             Type: "MASTER_NAME",
 *             Value: "Master Account"
 *           }
 *         ],
 *         Type: "ORGANIZATION",
 *         Value: "o-exampleorgid"
 *       },
 *       {
 *         Type: "ACCOUNT",
 *         Value: "333333333333"
 *       }
 *     ],
 *     State: "OPEN"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeHandshakeCommand extends $Command
  .classBuilder<
    DescribeHandshakeCommandInput,
    DescribeHandshakeCommandOutput,
    OrganizationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OrganizationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSOrganizationsV20161128", "DescribeHandshake", {})
  .n("OrganizationsClient", "DescribeHandshakeCommand")
  .sc(DescribeHandshake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHandshakeRequest;
      output: DescribeHandshakeResponse;
    };
    sdk: {
      input: DescribeHandshakeCommandInput;
      output: DescribeHandshakeCommandOutput;
    };
  };
}
