// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestMetricFilterRequest, TestMetricFilterResponse } from "../models/models_0";
import { TestMetricFilter } from "../schemas/schemas_7_Log";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestMetricFilterCommand}.
 */
export interface TestMetricFilterCommandInput extends TestMetricFilterRequest {}
/**
 * @public
 *
 * The output of {@link TestMetricFilterCommand}.
 */
export interface TestMetricFilterCommandOutput extends TestMetricFilterResponse, __MetadataBearer {}

/**
 * <p>Tests the filter pattern of a metric filter against a sample of log event messages. You
 *       can use this operation to validate the correctness of a metric filter pattern.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, TestMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, TestMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // TestMetricFilterRequest
 *   filterPattern: "STRING_VALUE", // required
 *   logEventMessages: [ // TestEventMessages // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TestMetricFilterCommand(input);
 * const response = await client.send(command);
 * // { // TestMetricFilterResponse
 * //   matches: [ // MetricFilterMatches
 * //     { // MetricFilterMatchRecord
 * //       eventNumber: Number("long"),
 * //       eventMessage: "STRING_VALUE",
 * //       extractedValues: { // ExtractedValues
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TestMetricFilterCommandInput - {@link TestMetricFilterCommandInput}
 * @returns {@link TestMetricFilterCommandOutput}
 * @see {@link TestMetricFilterCommandInput} for command's `input` shape.
 * @see {@link TestMetricFilterCommandOutput} for command's `response` shape.
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
export class TestMetricFilterCommand extends $Command
  .classBuilder<
    TestMetricFilterCommandInput,
    TestMetricFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "TestMetricFilter", {})
  .n("CloudWatchLogsClient", "TestMetricFilterCommand")
  .sc(TestMetricFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestMetricFilterRequest;
      output: TestMetricFilterResponse;
    };
    sdk: {
      input: TestMetricFilterCommandInput;
      output: TestMetricFilterCommandOutput;
    };
  };
}
