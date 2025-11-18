// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetScheduledQueryRequest, GetScheduledQueryResponse } from "../models/models_0";
import { GetScheduledQuery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScheduledQueryCommand}.
 */
export interface GetScheduledQueryCommandInput extends GetScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link GetScheduledQueryCommand}.
 */
export interface GetScheduledQueryCommandOutput extends GetScheduledQueryResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about a specified scheduled query, including its configuration, current state, and execution history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetScheduledQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetScheduledQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetScheduledQueryRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduledQueryResponse
 * //   scheduledQueryArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   queryLanguage: "CWLI" || "SQL" || "PPL",
 * //   queryString: "STRING_VALUE",
 * //   logGroupIdentifiers: [ // ScheduledQueryLogGroupIdentifiers
 * //     "STRING_VALUE",
 * //   ],
 * //   scheduleExpression: "STRING_VALUE",
 * //   timezone: "STRING_VALUE",
 * //   startTimeOffset: Number("long"),
 * //   destinationConfiguration: { // DestinationConfiguration
 * //     s3Configuration: { // S3Configuration
 * //       destinationIdentifier: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   state: "ENABLED" || "DISABLED",
 * //   lastTriggeredTime: Number("long"),
 * //   lastExecutionStatus: "Running" || "InvalidQuery" || "Complete" || "Failed" || "Timeout",
 * //   scheduleStartTime: Number("long"),
 * //   scheduleEndTime: Number("long"),
 * //   executionRoleArn: "STRING_VALUE",
 * //   creationTime: Number("long"),
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetScheduledQueryCommandInput - {@link GetScheduledQueryCommandInput}
 * @returns {@link GetScheduledQueryCommandOutput}
 * @see {@link GetScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link GetScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary issue and the request can be retried.</p>
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
export class GetScheduledQueryCommand extends $Command
  .classBuilder<
    GetScheduledQueryCommandInput,
    GetScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetScheduledQuery", {})
  .n("CloudWatchLogsClient", "GetScheduledQueryCommand")
  .sc(GetScheduledQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduledQueryRequest;
      output: GetScheduledQueryResponse;
    };
    sdk: {
      input: GetScheduledQueryCommandInput;
      output: GetScheduledQueryCommandOutput;
    };
  };
}
