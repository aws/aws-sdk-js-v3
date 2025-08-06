// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportTasksRequest, DescribeExportTasksResponse } from "../models/models_0";
import { DescribeExportTasks } from "../schemas/schemas";

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
export interface DescribeExportTasksCommandOutput extends DescribeExportTasksResponse, __MetadataBearer {}

/**
 * <p>Lists the specified export tasks. You can list all your export tasks or filter the
 *       results based on task ID or task status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeExportTasksCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeExportTasksCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeExportTasksRequest
 *   taskId: "STRING_VALUE",
 *   statusCode: "CANCELLED" || "COMPLETED" || "FAILED" || "PENDING" || "PENDING_CANCEL" || "RUNNING",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportTasksResponse
 * //   exportTasks: [ // ExportTasks
 * //     { // ExportTask
 * //       taskId: "STRING_VALUE",
 * //       taskName: "STRING_VALUE",
 * //       logGroupName: "STRING_VALUE",
 * //       from: Number("long"),
 * //       to: Number("long"),
 * //       destination: "STRING_VALUE",
 * //       destinationPrefix: "STRING_VALUE",
 * //       status: { // ExportTaskStatus
 * //         code: "CANCELLED" || "COMPLETED" || "FAILED" || "PENDING" || "PENDING_CANCEL" || "RUNNING",
 * //         message: "STRING_VALUE",
 * //       },
 * //       executionInfo: { // ExportTaskExecutionInfo
 * //         creationTime: Number("long"),
 * //         completionTime: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExportTasksCommandInput - {@link DescribeExportTasksCommandInput}
 * @returns {@link DescribeExportTasksCommandOutput}
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeExportTasksCommand extends $Command
  .classBuilder<
    DescribeExportTasksCommandInput,
    DescribeExportTasksCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeExportTasks", {})
  .n("CloudWatchLogsClient", "DescribeExportTasksCommand")
  .f(void 0, void 0)
  .sc(DescribeExportTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExportTasksRequest;
      output: DescribeExportTasksResponse;
    };
    sdk: {
      input: DescribeExportTasksCommandInput;
      output: DescribeExportTasksCommandOutput;
    };
  };
}
