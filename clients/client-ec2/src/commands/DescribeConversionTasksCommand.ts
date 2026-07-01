// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConversionTasksRequest, DescribeConversionTasksResult } from "../models/models_3";
import { DescribeConversionTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeConversionTasksCommand}.
 */
export interface DescribeConversionTasksCommandInput extends DescribeConversionTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConversionTasksCommand}.
 */
export interface DescribeConversionTasksCommandOutput extends DescribeConversionTasksResult, __MetadataBearer {}

/**
 * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the
 *    <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeConversionTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeConversionTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeConversionTasksRequest
 *   DryRun: true || false,
 *   ConversionTaskIds: [ // ConversionIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConversionTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConversionTasksResult
 * //   ConversionTasks: [ // DescribeConversionTaskList
 * //     { // ConversionTask
 * //       ConversionTaskId: "STRING_VALUE",
 * //       ExpirationTime: "STRING_VALUE",
 * //       ImportInstance: { // ImportInstanceTaskDetails
 * //         Description: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //         Platform: "Windows",
 * //         Volumes: [ // ImportInstanceVolumeDetailSet
 * //           { // ImportInstanceVolumeDetailItem
 * //             AvailabilityZone: "STRING_VALUE",
 * //             AvailabilityZoneId: "STRING_VALUE",
 * //             BytesConverted: Number("long"),
 * //             Description: "STRING_VALUE",
 * //             Image: { // DiskImageDescription
 * //               Checksum: "STRING_VALUE",
 * //               Format: "VMDK" || "RAW" || "VHD",
 * //               ImportManifestUrl: "STRING_VALUE",
 * //               Size: Number("long"),
 * //             },
 * //             Status: "STRING_VALUE",
 * //             StatusMessage: "STRING_VALUE",
 * //             Volume: { // DiskImageVolumeDescription
 * //               Id: "STRING_VALUE",
 * //               Size: Number("long"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ImportVolume: { // ImportVolumeTaskDetails
 * //         AvailabilityZone: "STRING_VALUE",
 * //         AvailabilityZoneId: "STRING_VALUE",
 * //         BytesConverted: Number("long"),
 * //         Description: "STRING_VALUE",
 * //         Image: {
 * //           Checksum: "STRING_VALUE",
 * //           Format: "VMDK" || "RAW" || "VHD",
 * //           ImportManifestUrl: "STRING_VALUE",
 * //           Size: Number("long"),
 * //         },
 * //         Volume: {
 * //           Id: "STRING_VALUE",
 * //           Size: Number("long"),
 * //         },
 * //       },
 * //       State: "active" || "cancelling" || "cancelled" || "completed",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConversionTasksCommandInput - {@link DescribeConversionTasksCommandInput}
 * @returns {@link DescribeConversionTasksCommandOutput}
 * @see {@link DescribeConversionTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeConversionTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeConversionTasksCommand extends command<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConversionTasks",
  DescribeConversionTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConversionTasksRequest;
      output: DescribeConversionTasksResult;
    };
    sdk: {
      input: DescribeConversionTasksCommandInput;
      output: DescribeConversionTasksCommandOutput;
    };
  };
}
