// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportVolumeRequest, ImportVolumeResult } from "../models/models_7";
import { ImportVolume } from "../schemas/schemas_59_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportVolumeCommand}.
 */
export interface ImportVolumeCommandInput extends ImportVolumeRequest {}
/**
 * @public
 *
 * The output of {@link ImportVolumeCommand}.
 */
export interface ImportVolumeCommandOutput extends ImportVolumeResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This API action supports only single-volume VMs. To import multi-volume VMs, use
 *    <a>ImportImage</a> instead. To import a disk to a snapshot, use
 *    <a>ImportSnapshot</a> instead.</p>
 *          </note>
 *          <p>Creates an import volume task using metadata from the specified disk image.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 *          <p>This API action is not supported by the Command Line Interface (CLI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ImportVolumeRequest
 *   AvailabilityZoneId: "STRING_VALUE",
 *   DryRun: true || false,
 *   AvailabilityZone: "STRING_VALUE",
 *   Image: { // DiskImageDetail
 *     Format: "VMDK" || "RAW" || "VHD", // required
 *     Bytes: Number("long"), // required
 *     ImportManifestUrl: "STRING_VALUE", // required
 *   },
 *   Description: "STRING_VALUE",
 *   Volume: { // VolumeDetail
 *     Size: Number("long"), // required
 *   },
 * };
 * const command = new ImportVolumeCommand(input);
 * const response = await client.send(command);
 * // { // ImportVolumeResult
 * //   ConversionTask: { // ConversionTask
 * //     ConversionTaskId: "STRING_VALUE",
 * //     ExpirationTime: "STRING_VALUE",
 * //     ImportInstance: { // ImportInstanceTaskDetails
 * //       Description: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Platform: "Windows",
 * //       Volumes: [ // ImportInstanceVolumeDetailSet
 * //         { // ImportInstanceVolumeDetailItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           AvailabilityZoneId: "STRING_VALUE",
 * //           BytesConverted: Number("long"),
 * //           Description: "STRING_VALUE",
 * //           Image: { // DiskImageDescription
 * //             Checksum: "STRING_VALUE",
 * //             Format: "VMDK" || "RAW" || "VHD",
 * //             ImportManifestUrl: "STRING_VALUE",
 * //             Size: Number("long"),
 * //           },
 * //           Status: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           Volume: { // DiskImageVolumeDescription
 * //             Id: "STRING_VALUE",
 * //             Size: Number("long"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ImportVolume: { // ImportVolumeTaskDetails
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       BytesConverted: Number("long"),
 * //       Description: "STRING_VALUE",
 * //       Image: {
 * //         Checksum: "STRING_VALUE",
 * //         Format: "VMDK" || "RAW" || "VHD",
 * //         ImportManifestUrl: "STRING_VALUE",
 * //         Size: Number("long"),
 * //       },
 * //       Volume: {
 * //         Id: "STRING_VALUE",
 * //         Size: Number("long"),
 * //       },
 * //     },
 * //     State: "active" || "cancelling" || "cancelled" || "completed",
 * //     StatusMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportVolumeCommandInput - {@link ImportVolumeCommandInput}
 * @returns {@link ImportVolumeCommandOutput}
 * @see {@link ImportVolumeCommandInput} for command's `input` shape.
 * @see {@link ImportVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ImportVolumeCommand extends $Command
  .classBuilder<
    ImportVolumeCommandInput,
    ImportVolumeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ImportVolume", {})
  .n("EC2Client", "ImportVolumeCommand")
  .sc(ImportVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportVolumeRequest;
      output: ImportVolumeResult;
    };
    sdk: {
      input: ImportVolumeCommandInput;
      output: ImportVolumeCommandOutput;
    };
  };
}
