// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAvailabilityZoneChangeProtectionRequest,
  UpdateAvailabilityZoneChangeProtectionResponse,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateAvailabilityZoneChangeProtection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAvailabilityZoneChangeProtectionCommand}.
 */
export interface UpdateAvailabilityZoneChangeProtectionCommandInput
  extends UpdateAvailabilityZoneChangeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAvailabilityZoneChangeProtectionCommand}.
 */
export interface UpdateAvailabilityZoneChangeProtectionCommandOutput
  extends UpdateAvailabilityZoneChangeProtectionResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the <code>AvailabilityZoneChangeProtection</code> setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments.</p>
 *          <p>When enabled, you must disable this protection before using <a>AssociateAvailabilityZones</a> or <a>DisassociateAvailabilityZones</a> to modify the firewall's Availability Zone configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateAvailabilityZoneChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateAvailabilityZoneChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateAvailabilityZoneChangeProtectionRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   AvailabilityZoneChangeProtection: true || false, // required
 * };
 * const command = new UpdateAvailabilityZoneChangeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAvailabilityZoneChangeProtectionResponse
 * //   UpdateToken: "STRING_VALUE",
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   AvailabilityZoneChangeProtection: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateAvailabilityZoneChangeProtectionCommandInput - {@link UpdateAvailabilityZoneChangeProtectionCommandInput}
 * @returns {@link UpdateAvailabilityZoneChangeProtectionCommandOutput}
 * @see {@link UpdateAvailabilityZoneChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityZoneChangeProtectionCommandOutput} for command's `response` shape.
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
export class UpdateAvailabilityZoneChangeProtectionCommand extends $Command
  .classBuilder<
    UpdateAvailabilityZoneChangeProtectionCommandInput,
    UpdateAvailabilityZoneChangeProtectionCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "UpdateAvailabilityZoneChangeProtection", {})
  .n("NetworkFirewallClient", "UpdateAvailabilityZoneChangeProtectionCommand")
  .sc(UpdateAvailabilityZoneChangeProtection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAvailabilityZoneChangeProtectionRequest;
      output: UpdateAvailabilityZoneChangeProtectionResponse;
    };
    sdk: {
      input: UpdateAvailabilityZoneChangeProtectionCommandInput;
      output: UpdateAvailabilityZoneChangeProtectionCommandOutput;
    };
  };
}
