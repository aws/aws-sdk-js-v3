// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignPrivateNatGatewayAddressRequest, UnassignPrivateNatGatewayAddressResult } from "../models/models_7";
import { UnassignPrivateNatGatewayAddress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnassignPrivateNatGatewayAddressCommand}.
 */
export interface UnassignPrivateNatGatewayAddressCommandInput extends UnassignPrivateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link UnassignPrivateNatGatewayAddressCommand}.
 */
export interface UnassignPrivateNatGatewayAddressCommandOutput
  extends UnassignPrivateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * <p>Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information,
 *             see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a>
 *             in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p>
 *          <p>A private IP address will only be released at the end of MaxDrainDurationSeconds. The
 *             private IP addresses stay associated and support the existing connections, but do not
 *             support any new connections (new connections are distributed across the remaining
 *             assigned private IP address). After the existing connections drain out, the private IP
 *             addresses are released.</p>
 *          <p></p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UnassignPrivateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   PrivateIpAddresses: [ // IpList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxDrainDurationSeconds: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new UnassignPrivateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // UnassignPrivateNatGatewayAddressResult
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
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnassignPrivateNatGatewayAddressCommandInput - {@link UnassignPrivateNatGatewayAddressCommandInput}
 * @returns {@link UnassignPrivateNatGatewayAddressCommandOutput}
 * @see {@link UnassignPrivateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class UnassignPrivateNatGatewayAddressCommand extends $Command
  .classBuilder<
    UnassignPrivateNatGatewayAddressCommandInput,
    UnassignPrivateNatGatewayAddressCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "UnassignPrivateNatGatewayAddress", {})
  .n("EC2Client", "UnassignPrivateNatGatewayAddressCommand")
  .sc(UnassignPrivateNatGatewayAddress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnassignPrivateNatGatewayAddressRequest;
      output: UnassignPrivateNatGatewayAddressResult;
    };
    sdk: {
      input: UnassignPrivateNatGatewayAddressCommandInput;
      output: UnassignPrivateNatGatewayAddressCommandOutput;
    };
  };
}
