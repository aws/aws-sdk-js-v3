// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateNatGatewayAddressRequest, DisassociateNatGatewayAddressResult } from "../models/models_5";
import { de_DisassociateNatGatewayAddressCommand, se_DisassociateNatGatewayAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateNatGatewayAddressCommand}.
 */
export interface DisassociateNatGatewayAddressCommandInput extends DisassociateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNatGatewayAddressCommand}.
 */
export interface DisassociateNatGatewayAddressCommandOutput
  extends DisassociateNatGatewayAddressResult,
    __MetadataBearer {}

/**
 * <p>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway.
 *             You cannot disassociate your primary EIP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p>
 *          <p>An EIP is released only at the end of MaxDrainDurationSeconds. It stays
 *             associated and supports the existing connections but does not support any new connections
 *             (new connections are distributed across the remaining associated EIPs). As the existing
 *             connections drain out, the EIPs (and the corresponding private IP addresses mapped to them)
 *             are released.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DisassociateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   AssociationIds: [ // EipAssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxDrainDurationSeconds: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DisassociateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateNatGatewayAddressResult
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
 * @param DisassociateNatGatewayAddressCommandInput - {@link DisassociateNatGatewayAddressCommandInput}
 * @returns {@link DisassociateNatGatewayAddressCommandOutput}
 * @see {@link DisassociateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisassociateNatGatewayAddressCommand extends $Command
  .classBuilder<
    DisassociateNatGatewayAddressCommandInput,
    DisassociateNatGatewayAddressCommandOutput,
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
  .s("AmazonEC2", "DisassociateNatGatewayAddress", {})
  .n("EC2Client", "DisassociateNatGatewayAddressCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateNatGatewayAddressCommand)
  .de(de_DisassociateNatGatewayAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateNatGatewayAddressRequest;
      output: DisassociateNatGatewayAddressResult;
    };
    sdk: {
      input: DisassociateNatGatewayAddressCommandInput;
      output: DisassociateNatGatewayAddressCommandOutput;
    };
  };
}
