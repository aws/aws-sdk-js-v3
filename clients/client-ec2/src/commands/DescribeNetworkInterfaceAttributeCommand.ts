// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeNetworkInterfaceAttributeRequest,
  DescribeNetworkInterfaceAttributeResult,
} from "../models/models_4";
import { DescribeNetworkInterfaceAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInterfaceAttributeCommand}.
 */
export interface DescribeNetworkInterfaceAttributeCommandInput extends DescribeNetworkInterfaceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInterfaceAttributeCommand}.
 */
export interface DescribeNetworkInterfaceAttributeCommandOutput
  extends DescribeNetworkInterfaceAttributeResult,
    __MetadataBearer {}

/**
 * <p>Describes a network interface attribute. You can specify only one attribute at a
 *             time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInterfaceAttributeRequest
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   Attribute: "description" || "groupSet" || "sourceDestCheck" || "attachment" || "associatePublicIpAddress",
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInterfaceAttributeResult
 * //   Attachment: { // NetworkInterfaceAttachment
 * //     AttachTime: new Date("TIMESTAMP"),
 * //     AttachmentId: "STRING_VALUE",
 * //     DeleteOnTermination: true || false,
 * //     DeviceIndex: Number("int"),
 * //     NetworkCardIndex: Number("int"),
 * //     InstanceId: "STRING_VALUE",
 * //     InstanceOwnerId: "STRING_VALUE",
 * //     Status: "attaching" || "attached" || "detaching" || "detached",
 * //     EnaSrdSpecification: { // AttachmentEnaSrdSpecification
 * //       EnaSrdEnabled: true || false,
 * //       EnaSrdUdpSpecification: { // AttachmentEnaSrdUdpSpecification
 * //         EnaSrdUdpEnabled: true || false,
 * //       },
 * //     },
 * //     EnaQueueCount: Number("int"),
 * //   },
 * //   Description: { // AttributeValue
 * //     Value: "STRING_VALUE",
 * //   },
 * //   Groups: [ // GroupIdentifierList
 * //     { // GroupIdentifier
 * //       GroupId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   SourceDestCheck: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   AssociatePublicIpAddress: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInterfaceAttributeCommandInput - {@link DescribeNetworkInterfaceAttributeCommandInput}
 * @returns {@link DescribeNetworkInterfaceAttributeCommandOutput}
 * @see {@link DescribeNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe the attachment attribute of a network interface
 * ```javascript
 * // This example describes the attachment attribute of the specified network interface.
 * const input = {
 *   Attribute: "attachment",
 *   NetworkInterfaceId: "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attachment: {
 *     AttachTime: "2015-05-21T20:02:20.000Z",
 *     AttachmentId: "eni-attach-43348162",
 *     DeleteOnTermination: true,
 *     DeviceIndex: 0,
 *     InstanceId: "i-1234567890abcdef0",
 *     InstanceOwnerId: "123456789012",
 *     Status: "attached"
 *   },
 *   NetworkInterfaceId: "eni-686ea200"
 * }
 * *\/
 * ```
 *
 * @example To describe the description attribute of a network interface
 * ```javascript
 * // This example describes the description attribute of the specified network interface.
 * const input = {
 *   Attribute: "description",
 *   NetworkInterfaceId: "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: {
 *     Value: "My description"
 *   },
 *   NetworkInterfaceId: "eni-686ea200"
 * }
 * *\/
 * ```
 *
 * @example To describe the groupSet attribute of a network interface
 * ```javascript
 * // This example describes the groupSet attribute of the specified network interface.
 * const input = {
 *   Attribute: "groupSet",
 *   NetworkInterfaceId: "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Groups: [
 *     {
 *       GroupId: "sg-903004f8",
 *       GroupName: "my-security-group"
 *     }
 *   ],
 *   NetworkInterfaceId: "eni-686ea200"
 * }
 * *\/
 * ```
 *
 * @example To describe the sourceDestCheck attribute of a network interface
 * ```javascript
 * // This example describes the sourceDestCheck attribute of the specified network interface.
 * const input = {
 *   Attribute: "sourceDestCheck",
 *   NetworkInterfaceId: "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NetworkInterfaceId: "eni-686ea200",
 *   SourceDestCheck: {
 *     Value: true
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeNetworkInterfaceAttributeCommand extends $Command
  .classBuilder<
    DescribeNetworkInterfaceAttributeCommandInput,
    DescribeNetworkInterfaceAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeNetworkInterfaceAttribute", {})
  .n("EC2Client", "DescribeNetworkInterfaceAttributeCommand")
  .sc(DescribeNetworkInterfaceAttribute$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkInterfaceAttributeRequest;
      output: DescribeNetworkInterfaceAttributeResult;
    };
    sdk: {
      input: DescribeNetworkInterfaceAttributeCommandInput;
      output: DescribeNetworkInterfaceAttributeCommandOutput;
    };
  };
}
