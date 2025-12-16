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
import type { GetScheduledQueryHistoryRequest, GetScheduledQueryHistoryResponse } from "../models/models_0";
import { GetScheduledQueryHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScheduledQueryHistoryCommand}.
 */
export interface GetScheduledQueryHistoryCommandInput extends GetScheduledQueryHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetScheduledQueryHistoryCommand}.
 */
export interface GetScheduledQueryHistoryCommandOutput extends GetScheduledQueryHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the execution history of a scheduled query within a specified time range,
 *       including query results and destination processing status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetScheduledQueryHistoryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetScheduledQueryHistoryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetScheduledQueryHistoryRequest
 *   identifier: "STRING_VALUE", // required
 *   startTime: Number("long"), // required
 *   endTime: Number("long"), // required
 *   executionStatuses: [ // ExecutionStatusList
 *     "Running" || "InvalidQuery" || "Complete" || "Failed" || "Timeout",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetScheduledQueryHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduledQueryHistoryResponse
 * //   name: "STRING_VALUE",
 * //   scheduledQueryArn: "STRING_VALUE",
 * //   triggerHistory: [ // TriggerHistoryRecordList
 * //     { // TriggerHistoryRecord
 * //       queryId: "STRING_VALUE",
 * //       executionStatus: "Running" || "InvalidQuery" || "Complete" || "Failed" || "Timeout",
 * //       triggeredTimestamp: Number("long"),
 * //       errorMessage: "STRING_VALUE",
 * //       destinations: [ // ScheduledQueryDestinationList
 * //         { // ScheduledQueryDestination
 * //           destinationType: "S3",
 * //           destinationIdentifier: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "CLIENT_ERROR" || "FAILED" || "COMPLETE",
 * //           processedIdentifier: "STRING_VALUE",
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScheduledQueryHistoryCommandInput - {@link GetScheduledQueryHistoryCommandInput}
 * @returns {@link GetScheduledQueryHistoryCommandOutput}
 * @see {@link GetScheduledQueryHistoryCommandInput} for command's `input` shape.
 * @see {@link GetScheduledQueryHistoryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class GetScheduledQueryHistoryCommand extends $Command
  .classBuilder<
    GetScheduledQueryHistoryCommandInput,
    GetScheduledQueryHistoryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetScheduledQueryHistory", {})
  .n("CloudWatchLogsClient", "GetScheduledQueryHistoryCommand")
  .sc(GetScheduledQueryHistory$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduledQueryHistoryRequest;
      output: GetScheduledQueryHistoryResponse;
    };
    sdk: {
      input: GetScheduledQueryHistoryCommandInput;
      output: GetScheduledQueryHistoryCommandOutput;
    };
  };
}
