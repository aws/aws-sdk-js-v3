// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMembersRequest, DisassociateMembersResponse } from "../models/models_2";
import { DisassociateMembers } from "../schemas/schemas_52_Members";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMembersCommand}.
 */
export interface DisassociateMembersCommandInput extends DisassociateMembersRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMembersCommand}.
 */
export interface DisassociateMembersCommandOutput extends DisassociateMembersResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified member accounts from the associated administrator account.</p>
 *          <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that
 *          were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DisassociateMembersRequest
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateMembersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMembersCommandInput - {@link DisassociateMembersCommandInput}
 * @returns {@link DisassociateMembersCommandOutput}
 * @see {@link DisassociateMembersCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
 * @example To disassociate member accounts from administrator account
 * ```javascript
 * // The following example dissociates the specified member accounts from the associated administrator account.
 * const input = {
 *   AccountIds: [
 *     "123456789012",
 *     "111122223333"
 *   ]
 * };
 * const command = new DisassociateMembersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateMembersCommand extends $Command
  .classBuilder<
    DisassociateMembersCommandInput,
    DisassociateMembersCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DisassociateMembers", {})
  .n("SecurityHubClient", "DisassociateMembersCommand")
  .sc(DisassociateMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMembersRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMembersCommandInput;
      output: DisassociateMembersCommandOutput;
    };
  };
}
