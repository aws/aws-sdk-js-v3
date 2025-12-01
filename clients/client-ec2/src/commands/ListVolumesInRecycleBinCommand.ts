// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVolumesInRecycleBinRequest, ListVolumesInRecycleBinResult } from "../models/models_6";
import { ListVolumesInRecycleBin } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVolumesInRecycleBinCommand}.
 */
export interface ListVolumesInRecycleBinCommandInput extends ListVolumesInRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link ListVolumesInRecycleBinCommand}.
 */
export interface ListVolumesInRecycleBinCommandOutput extends ListVolumesInRecycleBinResult, __MetadataBearer {}

/**
 * <p>Lists one or more volumes that are currently in the Recycle Bin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ListVolumesInRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ListVolumesInRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ListVolumesInRecycleBinRequest
 *   VolumeIds: [ // VolumeIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVolumesInRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumesInRecycleBinResult
 * //   Volumes: [ // VolumeRecycleBinInfoList
 * //     { // VolumeRecycleBinInfo
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //       State: "creating" || "available" || "in-use" || "deleting" || "deleted" || "error",
 * //       Size: Number("int"),
 * //       Iops: Number("int"),
 * //       Throughput: Number("int"),
 * //       OutpostArn: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       SourceVolumeId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       Operator: { // OperatorResponse
 * //         Managed: true || false,
 * //         Principal: "STRING_VALUE",
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       RecycleBinEnterTime: new Date("TIMESTAMP"),
 * //       RecycleBinExitTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVolumesInRecycleBinCommandInput - {@link ListVolumesInRecycleBinCommandInput}
 * @returns {@link ListVolumesInRecycleBinCommandOutput}
 * @see {@link ListVolumesInRecycleBinCommandInput} for command's `input` shape.
 * @see {@link ListVolumesInRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ListVolumesInRecycleBinCommand extends $Command
  .classBuilder<
    ListVolumesInRecycleBinCommandInput,
    ListVolumesInRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ListVolumesInRecycleBin", {})
  .n("EC2Client", "ListVolumesInRecycleBinCommand")
  .sc(ListVolumesInRecycleBin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVolumesInRecycleBinRequest;
      output: ListVolumesInRecycleBinResult;
    };
    sdk: {
      input: ListVolumesInRecycleBinCommandInput;
      output: ListVolumesInRecycleBinCommandOutput;
    };
  };
}
