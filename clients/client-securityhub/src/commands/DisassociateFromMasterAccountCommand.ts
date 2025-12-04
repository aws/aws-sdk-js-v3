// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_2";
import { DisassociateFromMasterAccount } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandInput extends DisassociateFromMasterAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFromMasterAccountCommand}.
 */
export interface DisassociateFromMasterAccountCommandOutput
  extends DisassociateFromMasterAccountResponse,
    __MetadataBearer {}

/**
 * <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p>
 *          <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p>
 *          <p>Disassociates the current Security Hub member account from the associated administrator
 *          account.</p>
 *          <p>This operation is only used by accounts that are not part of an organization. For
 *          organization accounts, only the administrator account can
 *          disassociate a member account.</p>
 *
 * @deprecated This API has been deprecated, use DisassociateFromAdministratorAccount API instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateFromMasterAccountCommandInput - {@link DisassociateFromMasterAccountCommandInput}
 * @returns {@link DisassociateFromMasterAccountCommandOutput}
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateFromMasterAccountCommand extends $Command
  .classBuilder<
    DisassociateFromMasterAccountCommandInput,
    DisassociateFromMasterAccountCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DisassociateFromMasterAccount", {})
  .n("SecurityHubClient", "DisassociateFromMasterAccountCommand")
  .sc(DisassociateFromMasterAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateFromMasterAccountCommandInput;
      output: DisassociateFromMasterAccountCommandOutput;
    };
  };
}
