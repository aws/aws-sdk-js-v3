// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListThirdPartyFirewallFirewallPoliciesRequest,
  ListThirdPartyFirewallFirewallPoliciesResponse,
} from "../models/models_0";
import {
  de_ListThirdPartyFirewallFirewallPoliciesCommand,
  se_ListThirdPartyFirewallFirewallPoliciesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThirdPartyFirewallFirewallPoliciesCommand}.
 */
export interface ListThirdPartyFirewallFirewallPoliciesCommandInput
  extends ListThirdPartyFirewallFirewallPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListThirdPartyFirewallFirewallPoliciesCommand}.
 */
export interface ListThirdPartyFirewallFirewallPoliciesCommandOutput
  extends ListThirdPartyFirewallFirewallPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListThirdPartyFirewallFirewallPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListThirdPartyFirewallFirewallPoliciesRequest
 *   ThirdPartyFirewall: "PALO_ALTO_NETWORKS_CLOUD_NGFW" || "FORTIGATE_CLOUD_NATIVE_FIREWALL", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"), // required
 * };
 * const command = new ListThirdPartyFirewallFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListThirdPartyFirewallFirewallPoliciesResponse
 * //   ThirdPartyFirewallFirewallPolicies: [ // ThirdPartyFirewallFirewallPolicies
 * //     { // ThirdPartyFirewallFirewallPolicy
 * //       FirewallPolicyId: "STRING_VALUE",
 * //       FirewallPolicyName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThirdPartyFirewallFirewallPoliciesCommandInput - {@link ListThirdPartyFirewallFirewallPoliciesCommandInput}
 * @returns {@link ListThirdPartyFirewallFirewallPoliciesCommandOutput}
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListThirdPartyFirewallFirewallPoliciesCommandOutput} for command's `response` shape.
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
export class ListThirdPartyFirewallFirewallPoliciesCommand extends $Command
  .classBuilder<
    ListThirdPartyFirewallFirewallPoliciesCommandInput,
    ListThirdPartyFirewallFirewallPoliciesCommandOutput,
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
  .s("AWSFMS_20180101", "ListThirdPartyFirewallFirewallPolicies", {})
  .n("FMSClient", "ListThirdPartyFirewallFirewallPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListThirdPartyFirewallFirewallPoliciesCommand)
  .de(de_ListThirdPartyFirewallFirewallPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThirdPartyFirewallFirewallPoliciesRequest;
      output: ListThirdPartyFirewallFirewallPoliciesResponse;
    };
    sdk: {
      input: ListThirdPartyFirewallFirewallPoliciesCommandInput;
      output: ListThirdPartyFirewallFirewallPoliciesCommandOutput;
    };
  };
}
