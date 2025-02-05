// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTLSInspectionConfigurationsRequest, ListTLSInspectionConfigurationsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  de_ListTLSInspectionConfigurationsCommand,
  se_ListTLSInspectionConfigurationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTLSInspectionConfigurationsCommand}.
 */
export interface ListTLSInspectionConfigurationsCommandInput extends ListTLSInspectionConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTLSInspectionConfigurationsCommand}.
 */
export interface ListTLSInspectionConfigurationsCommandOutput
  extends ListTLSInspectionConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListTLSInspectionConfigurationsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListTLSInspectionConfigurationsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListTLSInspectionConfigurationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTLSInspectionConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTLSInspectionConfigurationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TLSInspectionConfigurations: [ // TLSInspectionConfigurations
 * //     { // TLSInspectionConfigurationMetadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTLSInspectionConfigurationsCommandInput - {@link ListTLSInspectionConfigurationsCommandInput}
 * @returns {@link ListTLSInspectionConfigurationsCommandOutput}
 * @see {@link ListTLSInspectionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListTLSInspectionConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 * @public
 */
export class ListTLSInspectionConfigurationsCommand extends $Command
  .classBuilder<
    ListTLSInspectionConfigurationsCommandInput,
    ListTLSInspectionConfigurationsCommandOutput,
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
  .s("NetworkFirewall_20201112", "ListTLSInspectionConfigurations", {})
  .n("NetworkFirewallClient", "ListTLSInspectionConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListTLSInspectionConfigurationsCommand)
  .de(de_ListTLSInspectionConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTLSInspectionConfigurationsRequest;
      output: ListTLSInspectionConfigurationsResponse;
    };
    sdk: {
      input: ListTLSInspectionConfigurationsCommandInput;
      output: ListTLSInspectionConfigurationsCommandOutput;
    };
  };
}
