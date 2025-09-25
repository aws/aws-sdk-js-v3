// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_2";
import { DeclineInvitations } from "../schemas/schemas_32_Members";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>We recommend using Organizations instead of Security Hub invitations to manage your member accounts.
 *            For information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts-orgs.html">Managing Security Hub administrator and member accounts with Organizations</a>
 *            in the <i>Security Hub User Guide</i>.</p>
 *          </note>
 *          <p>Declines invitations to become a Security Hub member account.</p>
 *          <p>A prospective member account uses this operation to decline an invitation to become a member.</p>
 *          <p>Only member accounts that aren't part of an Amazon Web Services organization should use this operation.
 *          Organization accounts don't receive invitations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeclineInvitationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeclineInvitationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeclineInvitationsRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeclineInvitationsResponse
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
 * @param DeclineInvitationsCommandInput - {@link DeclineInvitationsCommandInput}
 * @returns {@link DeclineInvitationsCommandOutput}
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To decline invitation to become a member account
 * ```javascript
 * // The following example declines an invitation from the Security Hub administrator account to become a member account. The invited account makes the request.
 * const input = {
 *   AccountIds: [
 *     "123456789012",
 *     "111122223333"
 *   ]
 * };
 * const command = new DeclineInvitationsCommand(input);
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
export class DeclineInvitationsCommand extends $Command
  .classBuilder<
    DeclineInvitationsCommandInput,
    DeclineInvitationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DeclineInvitations", {})
  .n("SecurityHubClient", "DeclineInvitationsCommand")
  .sc(DeclineInvitations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeclineInvitationsRequest;
      output: DeclineInvitationsResponse;
    };
    sdk: {
      input: DeclineInvitationsCommandInput;
      output: DeclineInvitationsCommandOutput;
    };
  };
}
