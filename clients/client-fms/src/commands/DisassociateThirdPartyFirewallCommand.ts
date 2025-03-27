// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DisassociateThirdPartyFirewallRequest, DisassociateThirdPartyFirewallResponse } from "../models/models_0";
import {
  de_DisassociateThirdPartyFirewallCommand,
  se_DisassociateThirdPartyFirewallCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateThirdPartyFirewallCommand}.
 */
export interface DisassociateThirdPartyFirewallCommandInput extends DisassociateThirdPartyFirewallRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateThirdPartyFirewallCommand}.
 */
export interface DisassociateThirdPartyFirewallCommandOutput
  extends DisassociateThirdPartyFirewallResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateThirdPartyFirewallCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateThirdPartyFirewallCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // DisassociateThirdPartyFirewallRequest
 *   ThirdPartyFirewall: "PALO_ALTO_NETWORKS_CLOUD_NGFW" || "FORTIGATE_CLOUD_NATIVE_FIREWALL", // required
 * };
 * const command = new DisassociateThirdPartyFirewallCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateThirdPartyFirewallResponse
 * //   ThirdPartyFirewallStatus: "ONBOARDING" || "ONBOARD_COMPLETE" || "OFFBOARDING" || "OFFBOARD_COMPLETE" || "NOT_EXIST",
 * // };
 *
 * ```
 *
 * @param DisassociateThirdPartyFirewallCommandInput - {@link DisassociateThirdPartyFirewallCommandInput}
 * @returns {@link DisassociateThirdPartyFirewallCommandOutput}
 * @see {@link DisassociateThirdPartyFirewallCommandInput} for command's `input` shape.
 * @see {@link DisassociateThirdPartyFirewallCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class DisassociateThirdPartyFirewallCommand extends $Command
  .classBuilder<
    DisassociateThirdPartyFirewallCommandInput,
    DisassociateThirdPartyFirewallCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "DisassociateThirdPartyFirewall", {})
  .n("FMSClient", "DisassociateThirdPartyFirewallCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateThirdPartyFirewallCommand)
  .de(de_DisassociateThirdPartyFirewallCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateThirdPartyFirewallRequest;
      output: DisassociateThirdPartyFirewallResponse;
    };
    sdk: {
      input: DisassociateThirdPartyFirewallCommandInput;
      output: DisassociateThirdPartyFirewallCommandOutput;
    };
  };
}
