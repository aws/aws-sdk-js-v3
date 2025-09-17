// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSecurityHubConfigurationRequest, UpdateSecurityHubConfigurationResponse } from "../models/models_3";
import {
  de_UpdateSecurityHubConfigurationCommand,
  se_UpdateSecurityHubConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityHubConfigurationCommand}.
 */
export interface UpdateSecurityHubConfigurationCommandInput extends UpdateSecurityHubConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityHubConfigurationCommand}.
 */
export interface UpdateSecurityHubConfigurationCommandOutput
  extends UpdateSecurityHubConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates configuration options for Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityHubConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityHubConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateSecurityHubConfigurationRequest
 *   AutoEnableControls: true || false,
 *   ControlFindingGenerator: "STANDARD_CONTROL" || "SECURITY_CONTROL",
 * };
 * const command = new UpdateSecurityHubConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSecurityHubConfigurationCommandInput - {@link UpdateSecurityHubConfigurationCommandInput}
 * @returns {@link UpdateSecurityHubConfigurationCommandOutput}
 * @see {@link UpdateSecurityHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityHubConfigurationCommandOutput} for command's `response` shape.
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
 * @example To update Security Hub settings
 * ```javascript
 * // The following example updates Security Hub settings to turn on consolidated control findings, and to automatically enable new controls in enabled standards.
 * const input = {
 *   AutoEnableControls: true,
 *   ControlFindingGenerator: "SECURITY_CONTROL"
 * };
 * const command = new UpdateSecurityHubConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecurityHubConfigurationCommand extends $Command
  .classBuilder<
    UpdateSecurityHubConfigurationCommandInput,
    UpdateSecurityHubConfigurationCommandOutput,
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
  .s("SecurityHubAPIService", "UpdateSecurityHubConfiguration", {})
  .n("SecurityHubClient", "UpdateSecurityHubConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSecurityHubConfigurationCommand)
  .de(de_UpdateSecurityHubConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityHubConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateSecurityHubConfigurationCommandInput;
      output: UpdateSecurityHubConfigurationCommandOutput;
    };
  };
}
