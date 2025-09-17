// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_UpdateFirewallPolicyChangeProtectionCommand,
  se_UpdateFirewallPolicyChangeProtectionCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFirewallPolicyChangeProtectionCommand}.
 */
export interface UpdateFirewallPolicyChangeProtectionCommandInput extends UpdateFirewallPolicyChangeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallPolicyChangeProtectionCommand}.
 */
export interface UpdateFirewallPolicyChangeProtectionCommandOutput
  extends UpdateFirewallPolicyChangeProtectionResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the flag, <code>ChangeProtection</code>, which indicates whether it
 *          is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
 *          from changes. This setting helps protect against accidentally changing a firewall that's in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallPolicyChangeProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   FirewallPolicyChangeProtection: true || false, // required
 * };
 * const command = new UpdateFirewallPolicyChangeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallPolicyChangeProtectionResponse
 * //   UpdateToken: "STRING_VALUE",
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   FirewallPolicyChangeProtection: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateFirewallPolicyChangeProtectionCommandInput - {@link UpdateFirewallPolicyChangeProtectionCommandInput}
 * @returns {@link UpdateFirewallPolicyChangeProtectionCommandOutput}
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ResourceOwnerCheckException} (client fault)
 *  <p>Unable to change the resource because your account doesn't own it. </p>
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
export class UpdateFirewallPolicyChangeProtectionCommand extends $Command
  .classBuilder<
    UpdateFirewallPolicyChangeProtectionCommandInput,
    UpdateFirewallPolicyChangeProtectionCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "UpdateFirewallPolicyChangeProtection", {})
  .n("NetworkFirewallClient", "UpdateFirewallPolicyChangeProtectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFirewallPolicyChangeProtectionCommand)
  .de(de_UpdateFirewallPolicyChangeProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallPolicyChangeProtectionRequest;
      output: UpdateFirewallPolicyChangeProtectionResponse;
    };
    sdk: {
      input: UpdateFirewallPolicyChangeProtectionCommandInput;
      output: UpdateFirewallPolicyChangeProtectionCommandOutput;
    };
  };
}
