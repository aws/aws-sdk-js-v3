// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAnomalyRequest } from "../models/models_1";
import { UpdateAnomaly$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandInput extends UpdateAnomalyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyCommand}.
 */
export interface UpdateAnomalyCommandOutput extends __MetadataBearer {}

/**
 * Use this operation to *suppress* anomaly detection for a specified anomaly or pattern. If you suppress an anomaly, CloudWatch Logs won't report new occurrences of that anomaly and won't update that anomaly with new data. If you suppress a pattern, CloudWatch Logs won't report any anomalies related to that pattern.
 *
 * You must specify either `anomalyId` or `patternId`, but you can't specify both parameters in the same operation.
 *
 * If you have previously used this operation to suppress detection of a pattern or anomaly, you can use it again to cause CloudWatch Logs to end the suppression. To do this, use this operation and specify the anomaly or pattern to stop suppressing, and omit the `suppressionType` and `suppressionPeriod` parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateAnomalyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateAnomalyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateAnomalyRequest
 *   anomalyId: "STRING_VALUE",
 *   patternId: "STRING_VALUE",
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   suppressionType: "LIMITED" || "INFINITE",
 *   suppressionPeriod: { // SuppressionPeriod
 *     value: Number("int"),
 *     suppressionUnit: "SECONDS" || "MINUTES" || "HOURS",
 *   },
 *   baseline: true || false,
 * };
 * const command = new UpdateAnomalyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAnomalyCommandInput - {@link UpdateAnomalyCommandInput}
 * @returns {@link UpdateAnomalyCommandOutput}
 * @see {@link UpdateAnomalyCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class UpdateAnomalyCommand extends command<UpdateAnomalyCommandInput, UpdateAnomalyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAnomaly",
  UpdateAnomaly$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnomalyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAnomalyCommandInput;
      output: UpdateAnomalyCommandOutput;
    };
  };
}
