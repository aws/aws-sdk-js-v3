// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnomaliesRequest, ListAnomaliesResponse } from "../models/models_0";
import { ListAnomalies } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomaliesCommand}.
 */
export interface ListAnomaliesCommandInput extends ListAnomaliesRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomaliesCommand}.
 */
export interface ListAnomaliesCommandOutput extends ListAnomaliesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of anomalies that log anomaly detectors have found. For details about the
 *       structure format of each anomaly object that is returned, see the example in this
 *       section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListAnomaliesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListAnomaliesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListAnomaliesRequest
 *   anomalyDetectorArn: "STRING_VALUE",
 *   suppressionState: "SUPPRESSED" || "UNSUPPRESSED",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomaliesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomaliesResponse
 * //   anomalies: [ // Anomalies
 * //     { // Anomaly
 * //       anomalyId: "STRING_VALUE", // required
 * //       patternId: "STRING_VALUE", // required
 * //       anomalyDetectorArn: "STRING_VALUE", // required
 * //       patternString: "STRING_VALUE", // required
 * //       patternRegex: "STRING_VALUE",
 * //       priority: "STRING_VALUE",
 * //       firstSeen: Number("long"), // required
 * //       lastSeen: Number("long"), // required
 * //       description: "STRING_VALUE", // required
 * //       active: true || false, // required
 * //       state: "Active" || "Suppressed" || "Baseline", // required
 * //       histogram: { // Histogram // required
 * //         "<keys>": Number("long"),
 * //       },
 * //       logSamples: [ // LogSamples // required
 * //         { // LogEvent
 * //           timestamp: Number("long"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       patternTokens: [ // PatternTokens // required
 * //         { // PatternToken
 * //           dynamicTokenPosition: Number("int"),
 * //           isDynamic: true || false,
 * //           tokenString: "STRING_VALUE",
 * //           enumerations: { // Enumerations
 * //             "<keys>": Number("long"),
 * //           },
 * //           inferredTokenName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       logGroupArnList: [ // LogGroupArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       suppressed: true || false,
 * //       suppressedDate: Number("long"),
 * //       suppressedUntil: Number("long"),
 * //       isPatternLevelSuppression: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomaliesCommandInput - {@link ListAnomaliesCommandInput}
 * @returns {@link ListAnomaliesCommandOutput}
 * @see {@link ListAnomaliesCommandInput} for command's `input` shape.
 * @see {@link ListAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class ListAnomaliesCommand extends $Command
  .classBuilder<
    ListAnomaliesCommandInput,
    ListAnomaliesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListAnomalies", {})
  .n("CloudWatchLogsClient", "ListAnomaliesCommand")
  .f(void 0, void 0)
  .sc(ListAnomalies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomaliesRequest;
      output: ListAnomaliesResponse;
    };
    sdk: {
      input: ListAnomaliesCommandInput;
      output: ListAnomaliesCommandOutput;
    };
  };
}
