// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateThirdPartyFirewallRequest, AssociateThirdPartyFirewallResponse } from "../models/models_0";
import { AssociateThirdPartyFirewall$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface AssociateThirdPartyFirewallCommandOutput extends AssociateThirdPartyFirewallResponse, __MetadataBearer {}

/**
 * Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
 *
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
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The parameters of the request were invalid.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have submitted an `AssociateAdminAccount` request for an account ID that was already set as the Firewall Manager administrator. Or you might have tried to access a Region that's disabled by default, and that you need to enable for the Firewall Manager administrator account and for Organizations before you can access it.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class AssociateThirdPartyFirewallCommand extends command<AssociateThirdPartyFirewallCommandInput, AssociateThirdPartyFirewallCommandOutput>(
  _ep0,
  _mw0,
  "AssociateThirdPartyFirewall",
  AssociateThirdPartyFirewall$
) {
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
