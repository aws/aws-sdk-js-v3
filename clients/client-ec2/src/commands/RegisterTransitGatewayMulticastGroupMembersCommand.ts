// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterTransitGatewayMulticastGroupMembersRequest,
  RegisterTransitGatewayMulticastGroupMembersResult,
} from "../models/models_8";
import {
  de_RegisterTransitGatewayMulticastGroupMembersCommand,
  se_RegisterTransitGatewayMulticastGroupMembersCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTransitGatewayMulticastGroupMembersCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupMembersCommandInput
  extends RegisterTransitGatewayMulticastGroupMembersRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTransitGatewayMulticastGroupMembersCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupMembersCommandOutput
  extends RegisterTransitGatewayMulticastGroupMembersResult,
    __MetadataBearer {}

/**
 * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
 *             with a supported EC2 instance that receives multicast traffic. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-multicast-overview.html">Multicast
 *                 on transit gateways</a> in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
 *          <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
 *             to the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterTransitGatewayMulticastGroupMembersRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   GroupIpAddress: "STRING_VALUE",
 *   NetworkInterfaceIds: [ // TransitGatewayNetworkInterfaceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new RegisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTransitGatewayMulticastGroupMembersResult
 * //   RegisteredMulticastGroupMembers: { // TransitGatewayMulticastRegisteredGroupMembers
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
 * @param RegisterTransitGatewayMulticastGroupMembersCommandInput - {@link RegisterTransitGatewayMulticastGroupMembersCommandInput}
 * @returns {@link RegisterTransitGatewayMulticastGroupMembersCommandOutput}
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RegisterTransitGatewayMulticastGroupMembersCommand extends $Command
  .classBuilder<
    RegisterTransitGatewayMulticastGroupMembersCommandInput,
    RegisterTransitGatewayMulticastGroupMembersCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "RegisterTransitGatewayMulticastGroupMembers", {})
  .n("EC2Client", "RegisterTransitGatewayMulticastGroupMembersCommand")
  .f(void 0, void 0)
  .ser(se_RegisterTransitGatewayMulticastGroupMembersCommand)
  .de(de_RegisterTransitGatewayMulticastGroupMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTransitGatewayMulticastGroupMembersRequest;
      output: RegisterTransitGatewayMulticastGroupMembersResult;
    };
    sdk: {
      input: RegisterTransitGatewayMulticastGroupMembersCommandInput;
      output: RegisterTransitGatewayMulticastGroupMembersCommandOutput;
    };
  };
}
