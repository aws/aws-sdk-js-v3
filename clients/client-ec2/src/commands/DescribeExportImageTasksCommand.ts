// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportImageTasksRequest, DescribeExportImageTasksResult } from "../models/models_3";
import { de_DescribeExportImageTasksCommand, se_DescribeExportImageTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportImageTasksCommand}.
 */
export interface DescribeExportImageTasksCommandInput extends DescribeExportImageTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExportImageTasksCommand}.
 */
export interface DescribeExportImageTasksCommandOutput extends DescribeExportImageTasksResult, __MetadataBearer {}

/**
 * <p>Describes the specified export image tasks or all of your export image tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeExportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeExportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeExportImageTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExportImageTaskIds: [ // ExportImageTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeExportImageTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportImageTasksResult
 * //   ExportImageTasks: [ // ExportImageTaskList
 * //     { // ExportImageTask
 * //       Description: "STRING_VALUE",
 * //       ExportImageTaskId: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       Progress: "STRING_VALUE",
 * //       S3ExportLocation: { // ExportTaskS3Location
 * //         S3Bucket: "STRING_VALUE",
 * //         S3Prefix: "STRING_VALUE",
 * //       },
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExportImageTasksCommandInput - {@link DescribeExportImageTasksCommandInput}
 * @returns {@link DescribeExportImageTasksCommandOutput}
 * @see {@link DescribeExportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeExportImageTasksCommand extends $Command
  .classBuilder<
    DescribeExportImageTasksCommandInput,
    DescribeExportImageTasksCommandOutput,
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
  .s("AmazonEC2", "DescribeExportImageTasks", {})
  .n("EC2Client", "DescribeExportImageTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExportImageTasksCommand)
  .de(de_DescribeExportImageTasksCommand)
  .build() {}
