// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeExportImageTasksRequest, DescribeExportImageTasksResult } from "../models/models_3";
import { DescribeExportImageTasks$ } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeExportImageTasks", {})
  .n("EC2Client", "DescribeExportImageTasksCommand")
  .sc(DescribeExportImageTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExportImageTasksRequest;
      output: DescribeExportImageTasksResult;
    };
    sdk: {
      input: DescribeExportImageTasksCommandInput;
      output: DescribeExportImageTasksCommandOutput;
    };
  };
}
