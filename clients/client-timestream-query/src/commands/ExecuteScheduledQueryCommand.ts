// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteScheduledQueryRequest, ExecuteScheduledQueryRequestFilterSensitiveLog } from "../models/models_0";
import { de_ExecuteScheduledQueryCommand, se_ExecuteScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteScheduledQueryCommand}.
 */
export interface ExecuteScheduledQueryCommandInput extends ExecuteScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteScheduledQueryCommand}.
 */
export interface ExecuteScheduledQueryCommandOutput extends __MetadataBearer {}

/**
 * <p> You can use this API to run a scheduled query manually. </p>
 *          <p>If you enabled <code>QueryInsights</code>, this API also returns insights and metrics related to the query that you executed as part of an Amazon SNS notification. <code>QueryInsights</code> helps with performance tuning of your query. For more information about <code>QueryInsights</code>, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/using-query-insights.html">Using query insights to optimize queries in Amazon Timestream</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, ExecuteScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, ExecuteScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // ExecuteScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 *   InvocationTime: new Date("TIMESTAMP"), // required
 *   ClientToken: "STRING_VALUE",
 *   QueryInsights: { // ScheduledQueryInsights
 *     Mode: "ENABLED_WITH_RATE_CONTROL" || "DISABLED", // required
 *   },
 * };
 * const command = new ExecuteScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteScheduledQueryCommandInput - {@link ExecuteScheduledQueryCommandInput}
 * @returns {@link ExecuteScheduledQueryCommandOutput}
 * @see {@link ExecuteScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the necessary permissions to access the account settings.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to excessive requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 *
 * @public
 */
export class ExecuteScheduledQueryCommand extends $Command
  .classBuilder<
    ExecuteScheduledQueryCommandInput,
    ExecuteScheduledQueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "ExecuteScheduledQuery", {})
  .n("TimestreamQueryClient", "ExecuteScheduledQueryCommand")
  .f(ExecuteScheduledQueryRequestFilterSensitiveLog, void 0)
  .ser(se_ExecuteScheduledQueryCommand)
  .de(de_ExecuteScheduledQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteScheduledQueryRequest;
      output: {};
    };
    sdk: {
      input: ExecuteScheduledQueryCommandInput;
      output: ExecuteScheduledQueryCommandOutput;
    };
  };
}
