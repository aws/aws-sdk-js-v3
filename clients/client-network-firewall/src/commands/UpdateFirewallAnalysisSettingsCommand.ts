// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFirewallAnalysisSettingsRequest, UpdateFirewallAnalysisSettingsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateFirewallAnalysisSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallAnalysisSettingsCommand}.
 */
export interface UpdateFirewallAnalysisSettingsCommandInput extends UpdateFirewallAnalysisSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallAnalysisSettingsCommand}.
 */
export interface UpdateFirewallAnalysisSettingsCommandOutput
  extends UpdateFirewallAnalysisSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Enables specific types of firewall analysis on a specific firewall you define.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallAnalysisSettingsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallAnalysisSettingsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallAnalysisSettingsRequest
 *   EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 *     "TLS_SNI" || "HTTP_HOST",
 *   ],
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   UpdateToken: "STRING_VALUE",
 * };
 * const command = new UpdateFirewallAnalysisSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallAnalysisSettingsResponse
 * //   EnabledAnalysisTypes: [ // EnabledAnalysisTypes
 * //     "TLS_SNI" || "HTTP_HOST",
 * //   ],
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFirewallAnalysisSettingsCommandInput - {@link UpdateFirewallAnalysisSettingsCommandInput}
 * @returns {@link UpdateFirewallAnalysisSettingsCommandOutput}
 * @see {@link UpdateFirewallAnalysisSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallAnalysisSettingsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class UpdateFirewallAnalysisSettingsCommand extends $Command
  .classBuilder<
    UpdateFirewallAnalysisSettingsCommandInput,
    UpdateFirewallAnalysisSettingsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "UpdateFirewallAnalysisSettings", {})
  .n("NetworkFirewallClient", "UpdateFirewallAnalysisSettingsCommand")
  .sc(UpdateFirewallAnalysisSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallAnalysisSettingsRequest;
      output: UpdateFirewallAnalysisSettingsResponse;
    };
    sdk: {
      input: UpdateFirewallAnalysisSettingsCommandInput;
      output: UpdateFirewallAnalysisSettingsCommandOutput;
    };
  };
}
