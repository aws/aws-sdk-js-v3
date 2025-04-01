// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImagesRequest, DescribeImagesResult } from "../models/models_4";
import { de_DescribeImagesCommand, se_DescribeImagesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandInput extends DescribeImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandOutput extends DescribeImagesResult, __MetadataBearer {}

/**
 * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the
 *       images available to you.</p>
 *          <p>The images available to you include public images, private images that you own, and
 *       private images owned by other Amazon Web Services accounts for which you have explicit launch
 *       permissions.</p>
 *          <p>Recently deregistered images appear in the returned results for a short interval and then
 *       return empty results. After all instances that reference a deregistered AMI are terminated,
 *       specifying the ID of the image will eventually return an error indicating that the AMI ID
 *       cannot be found.</p>
 *          <p>When Allowed AMIs is set to <code>enabled</code>, only allowed images are returned in the
 *       results, with the <code>imageAllowed</code> field set to <code>true</code> for each image. In
 *         <code>audit-mode</code>, the <code>imageAllowed</code> field is set to <code>true</code> for
 *       images that meet the account's Allowed AMIs criteria, and <code>false</code> for images that
 *       don't meet the criteria. For more information, see <a>EnableAllowedImagesSettings</a>.</p>
 *          <important>
 *             <p>We strongly recommend using only paginated requests. Unpaginated requests are
 *         susceptible to throttling and timeouts.</p>
 *          </important>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested structures,
 *         might vary. Applications should not assume the elements appear in a particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeImagesRequest
 *   ExecutableUsers: [ // ExecutableByStringList
 *     "STRING_VALUE",
 *   ],
 *   ImageIds: [ // ImageIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Owners: [ // OwnerStringList
 *     "STRING_VALUE",
 *   ],
 *   IncludeDeprecated: true || false,
 *   IncludeDisabled: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagesResult
 * //   NextToken: "STRING_VALUE",
 * //   Images: [ // ImageList
 * //     { // Image
 * //       PlatformDetails: "STRING_VALUE",
 * //       UsageOperation: "STRING_VALUE",
 * //       BlockDeviceMappings: [ // BlockDeviceMappingList
 * //         { // BlockDeviceMapping
 * //           Ebs: { // EbsBlockDevice
 * //             DeleteOnTermination: true || false,
 * //             Iops: Number("int"),
 * //             SnapshotId: "STRING_VALUE",
 * //             VolumeSize: Number("int"),
 * //             VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //             KmsKeyId: "STRING_VALUE",
 * //             Throughput: Number("int"),
 * //             OutpostArn: "STRING_VALUE",
 * //             Encrypted: true || false,
 * //           },
 * //           NoDevice: "STRING_VALUE",
 * //           DeviceName: "STRING_VALUE",
 * //           VirtualName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       EnaSupport: true || false,
 * //       Hypervisor: "ovm" || "xen",
 * //       ImageOwnerAlias: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RootDeviceName: "STRING_VALUE",
 * //       RootDeviceType: "ebs" || "instance-store",
 * //       SriovNetSupport: "STRING_VALUE",
 * //       StateReason: { // StateReason
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VirtualizationType: "hvm" || "paravirtual",
 * //       BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * //       TpmSupport: "v2.0",
 * //       DeprecationTime: "STRING_VALUE",
 * //       ImdsSupport: "v2.0",
 * //       SourceInstanceId: "STRING_VALUE",
 * //       DeregistrationProtection: "STRING_VALUE",
 * //       LastLaunchedTime: "STRING_VALUE",
 * //       ImageAllowed: true || false,
 * //       SourceImageId: "STRING_VALUE",
 * //       SourceImageRegion: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       ImageLocation: "STRING_VALUE",
 * //       State: "pending" || "available" || "invalid" || "deregistered" || "transient" || "failed" || "error" || "disabled",
 * //       OwnerId: "STRING_VALUE",
 * //       CreationDate: "STRING_VALUE",
 * //       Public: true || false,
 * //       ProductCodes: [ // ProductCodeList
 * //         { // ProductCode
 * //           ProductCodeId: "STRING_VALUE",
 * //           ProductCodeType: "devpay" || "marketplace",
 * //         },
 * //       ],
 * //       Architecture: "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 * //       ImageType: "machine" || "kernel" || "ramdisk",
 * //       KernelId: "STRING_VALUE",
 * //       RamdiskId: "STRING_VALUE",
 * //       Platform: "Windows",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImagesCommandInput - {@link DescribeImagesCommandInput}
 * @returns {@link DescribeImagesCommandOutput}
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe an AMI
 * ```javascript
 * // This example describes the specified AMI.
 * const input = {
 *   ImageIds: [
 *     "ami-5731123e"
 *   ]
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Images: [
 *     {
 *       Architecture: "x86_64",
 *       BlockDeviceMappings: [
 *         {
 *           DeviceName: "/dev/sda1",
 *           Ebs: {
 *             DeleteOnTermination: true,
 *             SnapshotId: "snap-1234567890abcdef0",
 *             VolumeSize: 8,
 *             VolumeType: "standard"
 *           }
 *         }
 *       ],
 *       Description: "An AMI for my server",
 *       Hypervisor: "xen",
 *       ImageId: "ami-5731123e",
 *       ImageLocation: "123456789012/My server",
 *       ImageType: "machine",
 *       KernelId: "aki-88aa75e1",
 *       Name: "My server",
 *       OwnerId: "123456789012",
 *       Public: false,
 *       RootDeviceName: "/dev/sda1",
 *       RootDeviceType: "ebs",
 *       State: "available",
 *       VirtualizationType: "paravirtual"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeImagesCommand extends $Command
  .classBuilder<
    DescribeImagesCommandInput,
    DescribeImagesCommandOutput,
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
  .s("AmazonEC2", "DescribeImages", {})
  .n("EC2Client", "DescribeImagesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImagesCommand)
  .de(de_DescribeImagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImagesRequest;
      output: DescribeImagesResult;
    };
    sdk: {
      input: DescribeImagesCommandInput;
      output: DescribeImagesCommandOutput;
    };
  };
}
