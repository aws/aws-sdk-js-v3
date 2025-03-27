// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportTasksRequest, DescribeExportTasksResult } from "../models/models_3";
import { de_DescribeExportTasksCommand, se_DescribeExportTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandInput extends DescribeExportTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandOutput extends DescribeExportTasksResult, __MetadataBearer {}

/**
 * <p>Describes the specified export instance tasks or all of your export instance tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeExportTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeExportTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeExportTasksRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExportTaskIds: [ // ExportTaskIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportTasksResult
 * //   ExportTasks: [ // ExportTaskList
 * //     { // ExportTask
 * //       Description: "STRING_VALUE",
 * //       ExportTaskId: "STRING_VALUE",
 * //       ExportToS3Task: { // ExportToS3Task
 * //         ContainerFormat: "ova",
 * //         DiskImageFormat: "VMDK" || "RAW" || "VHD",
 * //         S3Bucket: "STRING_VALUE",
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       InstanceExportDetails: { // InstanceExportDetails
 * //         InstanceId: "STRING_VALUE",
 * //         TargetEnvironment: "citrix" || "vmware" || "microsoft",
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
 * @param DescribeExportTasksCommandInput - {@link DescribeExportTasksCommandInput}
 * @returns {@link DescribeExportTasksCommandOutput}
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeExportTasksCommand extends $Command
  .classBuilder<
    DescribeExportTasksCommandInput,
    DescribeExportTasksCommandOutput,
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
  .s("AmazonEC2", "DescribeExportTasks", {})
  .n("EC2Client", "DescribeExportTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExportTasksCommand)
  .de(de_DescribeExportTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExportTasksRequest;
      output: DescribeExportTasksResult;
    };
    sdk: {
      input: DescribeExportTasksCommandInput;
      output: DescribeExportTasksCommandOutput;
    };
  };
}
