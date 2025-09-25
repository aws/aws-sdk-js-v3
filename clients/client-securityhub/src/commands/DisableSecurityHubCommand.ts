// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisableSecurityHubRequest, DisableSecurityHubResponse } from "../models/models_2";
import { DisableSecurityHub } from "../schemas/schemas_51_DisableSecurityHub";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableSecurityHubCommand}.
 */
export interface DisableSecurityHubCommandInput extends DisableSecurityHubRequest {}
/**
 * @public
 *
 * The output of {@link DisableSecurityHubCommand}.
 */
export interface DisableSecurityHubCommandOutput extends DisableSecurityHubResponse, __MetadataBearer {}

/**
 * <p>Disables Security Hub in your account only in the current Amazon Web Services Region. To disable Security Hub in all
 *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
 *          <p>You can't disable Security Hub in an account that is currently the Security Hub administrator.</p>
 *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
 *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 *          are disabled, and your administrator and member account associations are removed.</p>
 *          <p>If you want to save your existing findings, you must export them before you disable
 *          Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DisableSecurityHubCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSecurityHubCommandInput - {@link DisableSecurityHubCommandInput}
 * @returns {@link DisableSecurityHubCommandOutput}
 * @see {@link DisableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubCommandOutput} for command's `response` shape.
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
 * @example To deactivate Security Hub
 * ```javascript
 * // The following example deactivates Security Hub for the current account and Region.
 * const input = { /* empty *\/ };
 * const command = new DisableSecurityHubCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableSecurityHubCommand extends $Command
  .classBuilder<
    DisableSecurityHubCommandInput,
    DisableSecurityHubCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DisableSecurityHub", {})
  .n("SecurityHubClient", "DisableSecurityHubCommand")
  .sc(DisableSecurityHub)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableSecurityHubCommandInput;
      output: DisableSecurityHubCommandOutput;
    };
  };
}
