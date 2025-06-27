// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterTransitGatewayMulticastGroupMembersRequest,
  DeregisterTransitGatewayMulticastGroupMembersResult,
} from "../models/models_3";
import {
  de_DeregisterTransitGatewayMulticastGroupMembersCommand,
  se_DeregisterTransitGatewayMulticastGroupMembersCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTransitGatewayMulticastGroupMembersCommand}.
 */
export interface DeregisterTransitGatewayMulticastGroupMembersCommandInput
  extends DeregisterTransitGatewayMulticastGroupMembersRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTransitGatewayMulticastGroupMembersCommand}.
 */
export interface DeregisterTransitGatewayMulticastGroupMembersCommandOutput
  extends DeregisterTransitGatewayMulticastGroupMembersResult,
    __MetadataBearer {}

/**
 * <p>Deregisters the specified members (network interfaces) from the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeregisterTransitGatewayMulticastGroupMembersRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE",
 *   GroupIpAddress: "STRING_VALUE",
 *   NetworkInterfaceIds: [ // TransitGatewayNetworkInterfaceIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DeregisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTransitGatewayMulticastGroupMembersResult
 * //   DeregisteredMulticastGroupMembers: { // TransitGatewayMulticastDeregisteredGroupMembers
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     DeregisteredNetworkInterfaceIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     GroupIpAddress: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterTransitGatewayMulticastGroupMembersCommandInput - {@link DeregisterTransitGatewayMulticastGroupMembersCommandInput}
 * @returns {@link DeregisterTransitGatewayMulticastGroupMembersCommandOutput}
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeregisterTransitGatewayMulticastGroupMembersCommand extends $Command
  .classBuilder<
    DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
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
  .s("AmazonEC2", "DeregisterTransitGatewayMulticastGroupMembers", {})
  .n("EC2Client", "DeregisterTransitGatewayMulticastGroupMembersCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterTransitGatewayMulticastGroupMembersCommand)
  .de(de_DeregisterTransitGatewayMulticastGroupMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTransitGatewayMulticastGroupMembersRequest;
      output: DeregisterTransitGatewayMulticastGroupMembersResult;
    };
    sdk: {
      input: DeregisterTransitGatewayMulticastGroupMembersCommandInput;
      output: DeregisterTransitGatewayMulticastGroupMembersCommandOutput;
    };
  };
}
