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
import type { UpdateScheduledQueryRequest, UpdateScheduledQueryResponse } from "../models/models_0";
import { UpdateScheduledQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandInput extends UpdateScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandOutput extends UpdateScheduledQueryResponse, __MetadataBearer {}

/**
 * <p>Updates an existing scheduled query with new configuration. This operation uses PUT
 *       semantics, allowing modification of query parameters, schedule, and destinations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateScheduledQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateScheduledQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateScheduledQueryRequest
 *   identifier: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledQueryResponse
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
 * @param UpdateScheduledQueryCommandInput - {@link UpdateScheduledQueryCommandInput}
 * @returns {@link UpdateScheduledQueryCommandOutput}
 * @see {@link UpdateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledQueryCommandOutput} for command's `response` shape.
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
export class UpdateScheduledQueryCommand extends $Command
  .classBuilder<
    UpdateScheduledQueryCommandInput,
    UpdateScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "UpdateScheduledQuery", {})
  .n("CloudWatchLogsClient", "UpdateScheduledQueryCommand")
  .sc(UpdateScheduledQuery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduledQueryRequest;
      output: UpdateScheduledQueryResponse;
    };
    sdk: {
      input: UpdateScheduledQueryCommandInput;
      output: UpdateScheduledQueryCommandOutput;
    };
  };
}
