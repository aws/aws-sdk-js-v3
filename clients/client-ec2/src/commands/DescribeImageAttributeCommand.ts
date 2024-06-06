// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/models_3";
import { de_DescribeImageAttributeCommand, se_DescribeImageAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageAttributeCommand}.
 */
export interface DescribeImageAttributeCommandInput extends DescribeImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageAttributeCommand}.
 */
export interface DescribeImageAttributeCommandOutput extends ImageAttribute, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *          structures, might vary. Applications should not assume the elements appear in a
 *          particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeImageAttributeRequest
 *   Attribute: "description" || "kernel" || "ramdisk" || "launchPermission" || "productCodes" || "blockDeviceMapping" || "sriovNetSupport" || "bootMode" || "tpmSupport" || "uefiData" || "lastLaunchedTime" || "imdsSupport" || "deregistrationProtection", // required
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ImageAttribute
 * //   BlockDeviceMappings: [ // BlockDeviceMappingList
 * //     { // BlockDeviceMapping
 * //       DeviceName: "STRING_VALUE",
 * //       VirtualName: "STRING_VALUE",
 * //       Ebs: { // EbsBlockDevice
 * //         DeleteOnTermination: true || false,
 * //         Iops: Number("int"),
 * //         SnapshotId: "STRING_VALUE",
 * //         VolumeSize: Number("int"),
 * //         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //         KmsKeyId: "STRING_VALUE",
 * //         Throughput: Number("int"),
 * //         OutpostArn: "STRING_VALUE",
 * //         Encrypted: true || false,
 * //       },
 * //       NoDevice: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ImageId: "STRING_VALUE",
 * //   LaunchPermissions: [ // LaunchPermissionList
 * //     { // LaunchPermission
 * //       Group: "all",
 * //       UserId: "STRING_VALUE",
 * //       OrganizationArn: "STRING_VALUE",
 * //       OrganizationalUnitArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   Description: { // AttributeValue
 * //     Value: "STRING_VALUE",
 * //   },
 * //   KernelId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   RamdiskId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   SriovNetSupport: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   BootMode: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   TpmSupport: "<AttributeValue>",
 * //   UefiData: "<AttributeValue>",
 * //   LastLaunchedTime: "<AttributeValue>",
 * //   ImdsSupport: "<AttributeValue>",
 * //   DeregistrationProtection: "<AttributeValue>",
 * // };
 *
 * ```
 *
 * @param DescribeImageAttributeCommandInput - {@link DescribeImageAttributeCommandInput}
 * @returns {@link DescribeImageAttributeCommandOutput}
 * @see {@link DescribeImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the launch permissions for an AMI
 * ```javascript
 * // This example describes the launch permissions for the specified AMI.
 * const input = {
 *   "Attribute": "launchPermission",
 *   "ImageId": "ami-5731123e"
 * };
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImageId": "ami-5731123e",
 *   "LaunchPermissions": [
 *     {
 *       "UserId": "123456789012"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-launch-permissions-for-an-ami-1529025296264
 * ```
 *
 */
export class DescribeImageAttributeCommand extends $Command
  .classBuilder<
    DescribeImageAttributeCommandInput,
    DescribeImageAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeImageAttribute", {})
  .n("EC2Client", "DescribeImageAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageAttributeCommand)
  .de(de_DescribeImageAttributeCommand)
  .build() {}
