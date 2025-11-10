// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLogAnomalyDetectorRequest, GetLogAnomalyDetectorResponse } from "../models/models_0";
import { GetLogAnomalyDetector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogAnomalyDetectorCommand}.
 */
export interface GetLogAnomalyDetectorCommandInput extends GetLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link GetLogAnomalyDetectorCommand}.
 */
export interface GetLogAnomalyDetectorCommandOutput extends GetLogAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the log anomaly detector that you specify. The KMS key ARN detected is valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogAnomalyDetectorRequest
 *   anomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // GetLogAnomalyDetectorResponse
 * //   detectorName: "STRING_VALUE",
 * //   logGroupArnList: [ // LogGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 * //   filterPattern: "STRING_VALUE",
 * //   anomalyDetectorStatus: "INITIALIZING" || "TRAINING" || "ANALYZING" || "FAILED" || "DELETED" || "PAUSED",
 * //   kmsKeyId: "STRING_VALUE",
 * //   creationTimeStamp: Number("long"),
 * //   lastModifiedTimeStamp: Number("long"),
 * //   anomalyVisibilityTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetLogAnomalyDetectorCommandInput - {@link GetLogAnomalyDetectorCommandInput}
 * @returns {@link GetLogAnomalyDetectorCommandOutput}
 * @see {@link GetLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link GetLogAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class GetLogAnomalyDetectorCommand extends $Command
  .classBuilder<
    GetLogAnomalyDetectorCommandInput,
    GetLogAnomalyDetectorCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetLogAnomalyDetector", {})
  .n("CloudWatchLogsClient", "GetLogAnomalyDetectorCommand")
  .sc(GetLogAnomalyDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogAnomalyDetectorRequest;
      output: GetLogAnomalyDetectorResponse;
    };
    sdk: {
      input: GetLogAnomalyDetectorCommandInput;
      output: GetLogAnomalyDetectorCommandOutput;
    };
  };
}
