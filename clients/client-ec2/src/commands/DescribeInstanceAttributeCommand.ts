// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceAttributeRequest, InstanceAttribute } from "../models/models_3";
import { DescribeInstanceAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandInput extends DescribeInstanceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandOutput extends InstanceAttribute, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified instance. You can specify only one
 *             attribute at a time. Available attributes include SQL license exemption configuration
 *             for instances registered with the SQL LE service.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceAttributeRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   Attribute: "instanceType" || "kernel" || "ramdisk" || "userData" || "disableApiTermination" || "instanceInitiatedShutdownBehavior" || "rootDeviceName" || "blockDeviceMapping" || "productCodes" || "sourceDestCheck" || "groupSet" || "ebsOptimized" || "sriovNetSupport" || "enaSupport" || "enclaveOptions" || "disableApiStop", // required
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // InstanceAttribute
 * //   BlockDeviceMappings: [ // InstanceBlockDeviceMappingList
 * //     { // InstanceBlockDeviceMapping
 * //       DeviceName: "STRING_VALUE",
 * //       Ebs: { // EbsInstanceBlockDevice
 * //         AttachTime: new Date("TIMESTAMP"),
 * //         DeleteOnTermination: true || false,
 * //         Status: "attaching" || "attached" || "detaching" || "detached",
 * //         VolumeId: "STRING_VALUE",
 * //         AssociatedResource: "STRING_VALUE",
 * //         VolumeOwnerId: "STRING_VALUE",
 * //         Operator: { // OperatorResponse
 * //           Managed: true || false,
 * //           Principal: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   DisableApiTermination: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   EnaSupport: {
 * //     Value: true || false,
 * //   },
 * //   EnclaveOptions: { // EnclaveOptions
 * //     Enabled: true || false,
 * //   },
 * //   EbsOptimized: {
 * //     Value: true || false,
 * //   },
 * //   InstanceId: "STRING_VALUE",
 * //   InstanceInitiatedShutdownBehavior: { // AttributeValue
 * //     Value: "STRING_VALUE",
 * //   },
 * //   InstanceType: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   KernelId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   RamdiskId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   RootDeviceName: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   SourceDestCheck: {
 * //     Value: true || false,
 * //   },
 * //   SriovNetSupport: "<AttributeValue>",
 * //   UserData: "<AttributeValue>",
 * //   DisableApiStop: {
 * //     Value: true || false,
 * //   },
 * //   Groups: [ // GroupIdentifierList
 * //     { // GroupIdentifier
 * //       GroupId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAttributeCommandInput - {@link DescribeInstanceAttributeCommandInput}
 * @returns {@link DescribeInstanceAttributeCommandOutput}
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe the block device mapping for an instance
 * ```javascript
 * // This example describes the ``blockDeviceMapping`` attribute of the specified instance.
 *
 * const input = {
 *   Attribute: "blockDeviceMapping",
 *   InstanceId: "i-1234567890abcdef0"
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   BlockDeviceMappings: [
 *     {
 *       DeviceName: "/dev/sda1",
 *       Ebs: {
 *         AttachTime: "2013-05-17T22:42:34.000Z",
 *         DeleteOnTermination: true,
 *         Status: "attached",
 *         VolumeId: "vol-049df61146c4d7901"
 *       }
 *     },
 *     {
 *       DeviceName: "/dev/sdf",
 *       Ebs: {
 *         AttachTime: "2013-09-10T23:07:00.000Z",
 *         DeleteOnTermination: false,
 *         Status: "attached",
 *         VolumeId: "vol-049df61146c4d7901"
 *       }
 *     }
 *   ],
 *   InstanceId: "i-1234567890abcdef0"
 * }
 * *\/
 * ```
 *
 * @example To describe the instance type
 * ```javascript
 * // This example describes the instance type of the specified instance.
 *
 * const input = {
 *   Attribute: "instanceType",
 *   InstanceId: "i-1234567890abcdef0"
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceId: "i-1234567890abcdef0",
 *   InstanceType: {
 *     Value: "t1.micro"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstanceAttributeCommand extends $Command
  .classBuilder<
    DescribeInstanceAttributeCommandInput,
    DescribeInstanceAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeInstanceAttribute", {})
  .n("EC2Client", "DescribeInstanceAttributeCommand")
  .sc(DescribeInstanceAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceAttributeRequest;
      output: InstanceAttribute;
    };
    sdk: {
      input: DescribeInstanceAttributeCommandInput;
      output: DescribeInstanceAttributeCommandOutput;
    };
  };
}
