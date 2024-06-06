// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/models_0";
import { de_AttachNetworkInterfaceCommand, se_AttachNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachNetworkInterfaceCommand}.
 */
export interface AttachNetworkInterfaceCommandInput extends AttachNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AttachNetworkInterfaceCommand}.
 */
export interface AttachNetworkInterfaceCommandOutput extends AttachNetworkInterfaceResult, __MetadataBearer {}

/**
 * <p>Attaches a network interface to an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AttachNetworkInterfaceRequest
 *   DeviceIndex: Number("int"), // required
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   NetworkCardIndex: Number("int"),
 *   EnaSrdSpecification: { // EnaSrdSpecification
 *     EnaSrdEnabled: true || false,
 *     EnaSrdUdpSpecification: { // EnaSrdUdpSpecification
 *       EnaSrdUdpEnabled: true || false,
 *     },
 *   },
 * };
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AttachNetworkInterfaceResult
 * //   AttachmentId: "STRING_VALUE",
 * //   NetworkCardIndex: Number("int"),
 * // };
 *
 * ```
 *
 * @param AttachNetworkInterfaceCommandInput - {@link AttachNetworkInterfaceCommandInput}
 * @returns {@link AttachNetworkInterfaceCommandOutput}
 * @see {@link AttachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AttachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To attach a network interface to an instance
 * ```javascript
 * // This example attaches the specified network interface to the specified instance.
 * const input = {
 *   "DeviceIndex": 1,
 *   "InstanceId": "i-1234567890abcdef0",
 *   "NetworkInterfaceId": "eni-e5aa89a3"
 * };
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AttachmentId": "eni-attach-66c4350a"
 * }
 * *\/
 * // example id: ec2-attach-network-interface-1
 * ```
 *
 */
export class AttachNetworkInterfaceCommand extends $Command
  .classBuilder<
    AttachNetworkInterfaceCommandInput,
    AttachNetworkInterfaceCommandOutput,
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
  .s("AmazonEC2", "AttachNetworkInterface", {})
  .n("EC2Client", "AttachNetworkInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_AttachNetworkInterfaceCommand)
  .de(de_AttachNetworkInterfaceCommand)
  .build() {}
