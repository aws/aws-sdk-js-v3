// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLogAnomalyDetectorRequest } from "../models/models_1";
import { UpdateLogAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandInput extends UpdateLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogAnomalyDetectorCommand}.
 */
export interface UpdateLogAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * Updates an existing log anomaly detector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateLogAnomalyDetectorRequest
 *   anomalyDetectorArn: "STRING_VALUE", // required
 *   evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 *   filterPattern: "STRING_VALUE",
 *   anomalyVisibilityTime: Number("long"),
 *   enabled: true || false, // required
 * };
 * const command = new UpdateLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLogAnomalyDetectorCommandInput - {@link UpdateLogAnomalyDetectorCommandInput}
 * @returns {@link UpdateLogAnomalyDetectorCommandOutput}
 * @see {@link UpdateLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateLogAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class UpdateLogAnomalyDetectorCommand extends command<UpdateLogAnomalyDetectorCommandInput, UpdateLogAnomalyDetectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLogAnomalyDetector",
  UpdateLogAnomalyDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLogAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: UpdateLogAnomalyDetectorCommandInput;
      output: UpdateLogAnomalyDetectorCommandOutput;
    };
  };
}
