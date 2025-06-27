// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssignPrivateNatGatewayAddressRequest, AssignPrivateNatGatewayAddressResult } from "../models/models_0";
import {
  de_AssignPrivateNatGatewayAddressCommand,
  se_AssignPrivateNatGatewayAddressCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssignPrivateNatGatewayAddressCommand}.
 */
export interface AssignPrivateNatGatewayAddressCommandInput extends AssignPrivateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link AssignPrivateNatGatewayAddressCommand}.
 */
export interface AssignPrivateNatGatewayAddressCommandOutput
  extends AssignPrivateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * <p>Assigns private IPv4 addresses to a private NAT gateway. For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html">Work with NAT gateways</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignPrivateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignPrivateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssignPrivateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   PrivateIpAddresses: [ // IpList
 *     "STRING_VALUE",
 *   ],
 *   PrivateIpAddressCount: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new AssignPrivateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // AssignPrivateNatGatewayAddressResult
 * //   NatGatewayId: "STRING_VALUE",
 * //   NatGatewayAddresses: [ // NatGatewayAddressList
 * //     { // NatGatewayAddress
 * //       AllocationId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       PrivateIp: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       IsPrimary: true || false,
 * //       FailureMessage: "STRING_VALUE",
 * //       Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssignPrivateNatGatewayAddressCommandInput - {@link AssignPrivateNatGatewayAddressCommandInput}
 * @returns {@link AssignPrivateNatGatewayAddressCommandOutput}
 * @see {@link AssignPrivateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link AssignPrivateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssignPrivateNatGatewayAddressCommand extends $Command
  .classBuilder<
    AssignPrivateNatGatewayAddressCommandInput,
    AssignPrivateNatGatewayAddressCommandOutput,
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
  .s("AmazonEC2", "AssignPrivateNatGatewayAddress", {})
  .n("EC2Client", "AssignPrivateNatGatewayAddressCommand")
  .f(void 0, void 0)
  .ser(se_AssignPrivateNatGatewayAddressCommand)
  .de(de_AssignPrivateNatGatewayAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssignPrivateNatGatewayAddressRequest;
      output: AssignPrivateNatGatewayAddressResult;
    };
    sdk: {
      input: AssignPrivateNatGatewayAddressCommandInput;
      output: AssignPrivateNatGatewayAddressCommandOutput;
    };
  };
}
