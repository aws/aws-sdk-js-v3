// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_3";
import { de_InviteMembersCommand, se_InviteMembersCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

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
 * <note>
 *             <p>We recommend using Organizations instead of Security Hub invitations to manage your member accounts.
 *            For information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html">Managing Security Hub administrator and member accounts with Organizations</a>
 *            in the <i>Security Hub User Guide</i>.</p>
 *          </note>
 *          <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that
 *          the invitation is sent from.</p>
 *          <p>This operation is only used to invite accounts that don't belong to an Amazon Web Services organization.
 *          Organization accounts don't receive invitations.</p>
 *          <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p>
 *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
 *          account, the administrator account can view the findings generated in the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, InviteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, InviteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // InviteMembersRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * // { // InviteMembersResponse
 * //   UnprocessedAccounts: [ // ResultList
 * //     { // Result
 * //       AccountId: "STRING_VALUE",
 * //       ProcessingResult: "STRING_VALUE",
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
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To invite accounts to become members
 * ```javascript
 * // The following example invites the specified AWS accounts to become member accounts associated with the calling Security Hub administrator account. You only use this operation to invite accounts that don't belong to an AWS Organizations organization.
 * const input = {
 *   AccountIds: [
 *     "111122223333",
 *     "444455556666"
 *   ]
 * };
 * const command = new InviteMembersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   UnprocessedAccounts:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InviteMembersCommand extends $Command
  .classBuilder<
    InviteMembersCommandInput,
    InviteMembersCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "InviteMembers", {})
  .n("SecurityHubClient", "InviteMembersCommand")
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
