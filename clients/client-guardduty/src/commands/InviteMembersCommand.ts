// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_1";
import { de_InviteMembersCommand, se_InviteMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InviteMembersCommand}.
 */
export interface InviteMembersCommandInput extends InviteMembersRequest {}
/**
 * @public
 *
 * The output of {@link InviteMembersCommand}.
 */
export interface InviteMembersCommandOutput extends InviteMembersResponse, __MetadataBearer {}

/**
 * <p>Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account
 *       that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not
 *       needed. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html">Managing accounts with organizations</a>.</p>
 *          <p>To invite Amazon Web Services accounts, the first step is
 *       to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API
 *       to add accounts by invitation. The
 *       invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can
 *       choose to accept the invitation from only one Amazon Web Services account. For more information, see
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_invitations.html">Managing GuardDuty accounts
 *       by invitation</a>.</p>
 *          <p>After the invite has been accepted and you choose to disassociate a member account
 *       (by using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html">DisassociateMembers</a>) from your account,
 *       the details of the member account obtained by invoking <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a>, including the
 *       associated email addresses, will be retained.
 *       This is done so that you can invoke InviteMembers without the need to invoke
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">CreateMembers</a> again. To
 *       remove the details associated with a member account, you must also invoke
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a>. </p>
 *          <p>If you disassociate a member account that was added by invitation, the member account details
 *       obtained from this API, including the associated email addresses, will be retained.
 *       This is done so that the delegated administrator can invoke the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">InviteMembers</a> API without the need to invoke the CreateMembers API again. To
 *       remove the details associated with a member account, the delegated administrator must invoke the
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html">DeleteMembers</a> API. </p>
 *          <p>When the member accounts added through Organizations are later disassociated, you (administrator)
 *       can't invite them by calling the InviteMembers API. You can create an association with these
 *       member accounts again only by calling the CreateMembers API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, InviteMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, InviteMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // InviteMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 *   DisableEmailNotification: true || false,
 *   Message: "STRING_VALUE",
 * };
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * // { // InviteMembersResponse
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InviteMembersCommandInput - {@link InviteMembersCommandInput}
 * @returns {@link InviteMembersCommandOutput}
 * @see {@link InviteMembersCommandInput} for command's `input` shape.
 * @see {@link InviteMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class InviteMembersCommand extends $Command
  .classBuilder<
    InviteMembersCommandInput,
    InviteMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "InviteMembers", {})
  .n("GuardDutyClient", "InviteMembersCommand")
  .f(void 0, void 0)
  .ser(se_InviteMembersCommand)
  .de(de_InviteMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InviteMembersRequest;
      output: InviteMembersResponse;
    };
    sdk: {
      input: InviteMembersCommandInput;
      output: InviteMembersCommandOutput;
    };
  };
}
