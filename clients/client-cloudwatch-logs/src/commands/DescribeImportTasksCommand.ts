// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/models_0";
import { DescribeImportTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists and describes import tasks, with optional filtering by import status and source ARN.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DescribeImportTasksCommand extends command<DescribeImportTasksCommandInput, DescribeImportTasksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImportTasks",
  DescribeImportTasks$
) {
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
