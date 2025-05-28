// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVpcEndpointAssociationsRequest, ListVpcEndpointAssociationsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_ListVpcEndpointAssociationsCommand, se_ListVpcEndpointAssociationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointAssociationsCommand}.
 */
export interface ListVpcEndpointAssociationsCommandInput extends ListVpcEndpointAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointAssociationsCommand}.
 */
export interface ListVpcEndpointAssociationsCommandOutput
  extends ListVpcEndpointAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the VPC endpoint associations that you have defined. If you specify a fireawll,
 *        this returns only the endpoint associations for that firewall. </p>
 *          <p>Depending on your setting for max results and the number of associations, a single call
 *          might not return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListVpcEndpointAssociationsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListVpcEndpointAssociationsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListVpcEndpointAssociationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   FirewallArn: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointAssociationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   VpcEndpointAssociations: [ // VpcEndpointAssociations
 * //     { // VpcEndpointAssociationMetadata
 * //       VpcEndpointAssociationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointAssociationsCommandInput - {@link ListVpcEndpointAssociationsCommandInput}
 * @returns {@link ListVpcEndpointAssociationsCommandOutput}
 * @see {@link ListVpcEndpointAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointAssociationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListVpcEndpointAssociationsCommand extends $Command
  .classBuilder<
    ListVpcEndpointAssociationsCommandInput,
    ListVpcEndpointAssociationsCommandOutput,
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
  .s("NetworkFirewall_20201112", "ListVpcEndpointAssociations", {})
  .n("NetworkFirewallClient", "ListVpcEndpointAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListVpcEndpointAssociationsCommand)
  .de(de_ListVpcEndpointAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcEndpointAssociationsRequest;
      output: ListVpcEndpointAssociationsResponse;
    };
    sdk: {
      input: ListVpcEndpointAssociationsCommandInput;
      output: ListVpcEndpointAssociationsCommandOutput;
    };
  };
}
