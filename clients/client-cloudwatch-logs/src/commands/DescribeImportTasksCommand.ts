// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/models_0";
import { DescribeImportTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportTasksCommand}.
 */
export interface DescribeImportTasksCommandInput extends DescribeImportTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportTasksCommand}.
 */
export interface DescribeImportTasksCommandOutput extends DescribeImportTasksResponse, __MetadataBearer {}

/**
 * <p>Lists and describes import tasks, with optional filtering by import status and source ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeImportTasksCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeImportTasksCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeImportTasksRequest
 *   importId: "STRING_VALUE",
 *   importStatus: "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED",
 *   importSourceArn: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportTasksResponse
 * //   imports: [ // ImportList
 * //     { // Import
 * //       importId: "STRING_VALUE",
 * //       importSourceArn: "STRING_VALUE",
 * //       importStatus: "IN_PROGRESS" || "CANCELLED" || "COMPLETED" || "FAILED",
 * //       importDestinationArn: "STRING_VALUE",
 * //       importStatistics: { // ImportStatistics
 * //         bytesImported: Number("long"),
 * //       },
 * //       importFilter: { // ImportFilter
 * //         startEventTime: Number("long"),
 * //         endEventTime: Number("long"),
 * //       },
 * //       creationTime: Number("long"),
 * //       lastUpdatedTime: Number("long"),
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportTasksCommandInput - {@link DescribeImportTasksCommandInput}
 * @returns {@link DescribeImportTasksCommandOutput}
 * @see {@link DescribeImportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportTasksCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeImportTasksCommand extends $Command
  .classBuilder<
    DescribeImportTasksCommandInput,
    DescribeImportTasksCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeImportTasks", {})
  .n("CloudWatchLogsClient", "DescribeImportTasksCommand")
  .sc(DescribeImportTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportTasksRequest;
      output: DescribeImportTasksResponse;
    };
    sdk: {
      input: DescribeImportTasksCommandInput;
      output: DescribeImportTasksCommandOutput;
    };
  };
}
