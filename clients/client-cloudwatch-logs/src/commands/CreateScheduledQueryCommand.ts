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
import type { CreateScheduledQueryRequest, CreateScheduledQueryResponse } from "../models/models_0";
import { CreateScheduledQuery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledQueryCommand}.
 */
export interface CreateScheduledQueryCommandInput extends CreateScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledQueryCommand}.
 */
export interface CreateScheduledQueryCommandOutput extends CreateScheduledQueryResponse, __MetadataBearer {}

/**
 * <p>Creates a scheduled query that runs CloudWatch Logs Insights queries at regular intervals. Scheduled queries enable proactive monitoring by automatically executing queries to detect patterns and anomalies in your log data. Query results can be delivered to Amazon S3 for analysis or further processing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateScheduledQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateScheduledQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateScheduledQueryRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   queryLanguage: "CWLI" || "SQL" || "PPL", // required
 *   queryString: "STRING_VALUE", // required
 *   logGroupIdentifiers: [ // ScheduledQueryLogGroupIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   scheduleExpression: "STRING_VALUE", // required
 *   timezone: "STRING_VALUE",
 *   startTimeOffset: Number("long"),
 *   destinationConfiguration: { // DestinationConfiguration
 *     s3Configuration: { // S3Configuration
 *       destinationIdentifier: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   scheduleStartTime: Number("long"),
 *   scheduleEndTime: Number("long"),
 *   executionRoleArn: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledQueryResponse
 * //   scheduledQueryArn: "STRING_VALUE",
 * //   state: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param CreateScheduledQueryCommandInput - {@link CreateScheduledQueryCommandInput}
 * @returns {@link CreateScheduledQueryCommandOutput}
 * @see {@link CreateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class CreateScheduledQueryCommand extends $Command
  .classBuilder<
    CreateScheduledQueryCommandInput,
    CreateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CreateScheduledQuery", {})
  .n("CloudWatchLogsClient", "CreateScheduledQueryCommand")
  .sc(CreateScheduledQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduledQueryRequest;
      output: CreateScheduledQueryResponse;
    };
    sdk: {
      input: CreateScheduledQueryCommandInput;
      output: CreateScheduledQueryCommandOutput;
    };
  };
}
