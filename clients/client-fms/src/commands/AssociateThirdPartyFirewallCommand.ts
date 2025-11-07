// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { AssociateThirdPartyFirewallRequest, AssociateThirdPartyFirewallResponse } from "../models/models_0";
import { AssociateThirdPartyFirewall } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateThirdPartyFirewallCommand}.
 */
export interface AssociateThirdPartyFirewallCommandInput extends AssociateThirdPartyFirewallRequest {}
/**
 * @public
 *
 * The output of {@link AssociateThirdPartyFirewallCommand}.
 */
export interface AssociateThirdPartyFirewallCommandOutput
  extends AssociateThirdPartyFirewallResponse,
    __MetadataBearer {}

/**
 * <p>Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateThirdPartyFirewallCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateThirdPartyFirewallCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // AssociateThirdPartyFirewallRequest
 *   ThirdPartyFirewall: "PALO_ALTO_NETWORKS_CLOUD_NGFW" || "FORTIGATE_CLOUD_NATIVE_FIREWALL", // required
 * };
 * const command = new AssociateThirdPartyFirewallCommand(input);
 * const response = await client.send(command);
 * // { // AssociateThirdPartyFirewallResponse
 * //   ThirdPartyFirewallStatus: "ONBOARDING" || "ONBOARD_COMPLETE" || "OFFBOARDING" || "OFFBOARD_COMPLETE" || "NOT_EXIST",
 * // };
 *
 * ```
 *
 * @param AssociateThirdPartyFirewallCommandInput - {@link AssociateThirdPartyFirewallCommandInput}
 * @returns {@link AssociateThirdPartyFirewallCommandOutput}
 * @see {@link AssociateThirdPartyFirewallCommandInput} for command's `input` shape.
 * @see {@link AssociateThirdPartyFirewallCommandOutput} for command's `response` shape.
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
export class AssociateThirdPartyFirewallCommand extends $Command
  .classBuilder<
    AssociateThirdPartyFirewallCommandInput,
    AssociateThirdPartyFirewallCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "AssociateThirdPartyFirewall", {})
  .n("FMSClient", "AssociateThirdPartyFirewallCommand")
  .sc(AssociateThirdPartyFirewall)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateThirdPartyFirewallRequest;
      output: AssociateThirdPartyFirewallResponse;
    };
    sdk: {
      input: AssociateThirdPartyFirewallCommandInput;
      output: AssociateThirdPartyFirewallCommandOutput;
    };
  };
}
