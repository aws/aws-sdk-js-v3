// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyNetworkInterfaceAttributeRequest } from "../models/models_6";
import {
  de_ModifyNetworkInterfaceAttributeCommand,
  se_ModifyNetworkInterfaceAttributeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyNetworkInterfaceAttributeCommand}.
 */
export interface ModifyNetworkInterfaceAttributeCommandInput extends ModifyNetworkInterfaceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyNetworkInterfaceAttributeCommand}.
 */
export interface ModifyNetworkInterfaceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified network interface attribute. You can specify only one
 *             attribute at a time. You can use this action to attach and detach security groups from
 *             an existing EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyNetworkInterfaceAttributeRequest
 *   Attachment: { // NetworkInterfaceAttachmentChanges
 *     AttachmentId: "STRING_VALUE",
 *     DeleteOnTermination: true || false,
 *   },
 *   Description: { // AttributeValue
 *     Value: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 *   Groups: [ // SecurityGroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   SourceDestCheck: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   EnaSrdSpecification: { // EnaSrdSpecification
 *     EnaSrdEnabled: true || false,
 *     EnaSrdUdpSpecification: { // EnaSrdUdpSpecification
 *       EnaSrdUdpEnabled: true || false,
 *     },
 *   },
 *   EnablePrimaryIpv6: true || false,
 *   ConnectionTrackingSpecification: { // ConnectionTrackingSpecificationRequest
 *     TcpEstablishedTimeout: Number("int"),
 *     UdpStreamTimeout: Number("int"),
 *     UdpTimeout: Number("int"),
 *   },
 *   AssociatePublicIpAddress: true || false,
 * };
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyNetworkInterfaceAttributeCommandInput - {@link ModifyNetworkInterfaceAttributeCommandInput}
 * @returns {@link ModifyNetworkInterfaceAttributeCommandOutput}
 * @see {@link ModifyNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To modify the attachment attribute of a network interface
 * ```javascript
 * // This example modifies the attachment attribute of the specified network interface.
 * const input = {
 *   "Attachment": {
 *     "AttachmentId": "eni-attach-43348162",
 *     "DeleteOnTermination": false
 *   },
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-network-interface-attribute-1
 * ```
 *
 * @example To modify the description attribute of a network interface
 * ```javascript
 * // This example modifies the description attribute of the specified network interface.
 * const input = {
 *   "Description": {
 *     "Value": "My description"
 *   },
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-network-interface-attribute-2
 * ```
 *
 * @example To modify the groupSet attribute of a network interface
 * ```javascript
 * // This example command modifies the groupSet attribute of the specified network interface.
 * const input = {
 *   "Groups": [
 *     "sg-903004f8",
 *     "sg-1a2b3c4d"
 *   ],
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-network-interface-attribute-3
 * ```
 *
 * @example To modify the sourceDestCheck attribute of a network interface
 * ```javascript
 * // This example command modifies the sourceDestCheck attribute of the specified network interface.
 * const input = {
 *   "NetworkInterfaceId": "eni-686ea200",
 *   "SourceDestCheck": {
 *     "Value": false
 *   }
 * };
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * await client.send(command);
 * // example id: ec2-modify-network-interface-attribute-4
 * ```
 *
 */
export class ModifyNetworkInterfaceAttributeCommand extends $Command
  .classBuilder<
    ModifyNetworkInterfaceAttributeCommandInput,
    ModifyNetworkInterfaceAttributeCommandOutput,
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
  .s("AmazonEC2", "ModifyNetworkInterfaceAttribute", {})
  .n("EC2Client", "ModifyNetworkInterfaceAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyNetworkInterfaceAttributeCommand)
  .de(de_ModifyNetworkInterfaceAttributeCommand)
  .build() {}
