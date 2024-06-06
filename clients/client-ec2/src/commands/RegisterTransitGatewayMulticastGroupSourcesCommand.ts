// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterTransitGatewayMulticastGroupSourcesRequest,
  RegisterTransitGatewayMulticastGroupSourcesResult,
} from "../models/models_7";
import {
  de_RegisterTransitGatewayMulticastGroupSourcesCommand,
  se_RegisterTransitGatewayMulticastGroupSourcesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTransitGatewayMulticastGroupSourcesCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupSourcesCommandInput
  extends RegisterTransitGatewayMulticastGroupSourcesRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTransitGatewayMulticastGroupSourcesCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupSourcesCommandOutput
  extends RegisterTransitGatewayMulticastGroupSourcesResult,
    __MetadataBearer {}

/**
 * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
 *          <p>A multicast source is a network interface attached to a supported instance that sends
 *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *          <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterTransitGatewayMulticastGroupSourcesRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   GroupIpAddress: "STRING_VALUE",
 *   NetworkInterfaceIds: [ // TransitGatewayNetworkInterfaceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new RegisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTransitGatewayMulticastGroupSourcesResult
 * //   RegisteredMulticastGroupSources: { // TransitGatewayMulticastRegisteredGroupSources
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     RegisteredNetworkInterfaceIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     GroupIpAddress: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterTransitGatewayMulticastGroupSourcesCommandInput - {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput}
 * @returns {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput}
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command
  .classBuilder<
    RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "RegisterTransitGatewayMulticastGroupSources", {})
  .n("EC2Client", "RegisterTransitGatewayMulticastGroupSourcesCommand")
  .f(void 0, void 0)
  .ser(se_RegisterTransitGatewayMulticastGroupSourcesCommand)
  .de(de_RegisterTransitGatewayMulticastGroupSourcesCommand)
  .build() {}
