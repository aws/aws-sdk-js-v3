// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogAnomalyDetectorsRequest, ListLogAnomalyDetectorsResponse } from "../models/models_0";
import { ListLogAnomalyDetectors } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogAnomalyDetectorsCommand}.
 */
export interface ListLogAnomalyDetectorsCommandInput extends ListLogAnomalyDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogAnomalyDetectorsCommand}.
 */
export interface ListLogAnomalyDetectorsCommandOutput extends ListLogAnomalyDetectorsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the log anomaly detectors in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListLogAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListLogAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListLogAnomalyDetectorsRequest
 *   filterLogGroupArn: "STRING_VALUE",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLogAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogAnomalyDetectorsResponse
 * //   anomalyDetectors: [ // AnomalyDetectors
 * //     { // AnomalyDetector
 * //       anomalyDetectorArn: "STRING_VALUE",
 * //       detectorName: "STRING_VALUE",
 * //       logGroupArnList: [ // LogGroupArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 * //       filterPattern: "STRING_VALUE",
 * //       anomalyDetectorStatus: "INITIALIZING" || "TRAINING" || "ANALYZING" || "FAILED" || "DELETED" || "PAUSED",
 * //       kmsKeyId: "STRING_VALUE",
 * //       creationTimeStamp: Number("long"),
 * //       lastModifiedTimeStamp: Number("long"),
 * //       anomalyVisibilityTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogAnomalyDetectorsCommandInput - {@link ListLogAnomalyDetectorsCommandInput}
 * @returns {@link ListLogAnomalyDetectorsCommandOutput}
 * @see {@link ListLogAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListLogAnomalyDetectorsCommandOutput} for command's `response` shape.
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
export class ListLogAnomalyDetectorsCommand extends $Command
  .classBuilder<
    ListLogAnomalyDetectorsCommandInput,
    ListLogAnomalyDetectorsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListLogAnomalyDetectors", {})
  .n("CloudWatchLogsClient", "ListLogAnomalyDetectorsCommand")
  .f(void 0, void 0)
  .sc(ListLogAnomalyDetectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogAnomalyDetectorsRequest;
      output: ListLogAnomalyDetectorsResponse;
    };
    sdk: {
      input: ListLogAnomalyDetectorsCommandInput;
      output: ListLogAnomalyDetectorsCommandOutput;
    };
  };
}
