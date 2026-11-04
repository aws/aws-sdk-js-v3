// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLogAnomalyDetectorRequest } from "../models/models_0";
import { DeleteLogAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLogAnomalyDetectorCommand}.
 */
export interface DeleteLogAnomalyDetectorCommandInput extends DeleteLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogAnomalyDetectorCommand}.
 */
export interface DeleteLogAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified CloudWatch Logs anomaly detector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteLogAnomalyDetectorRequest
 *   anomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogAnomalyDetectorCommandInput - {@link DeleteLogAnomalyDetectorCommandInput}
 * @returns {@link DeleteLogAnomalyDetectorCommandOutput}
 * @see {@link DeleteLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteLogAnomalyDetectorCommandOutput} for command's `response` shape.
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
export class DeleteLogAnomalyDetectorCommand extends command<DeleteLogAnomalyDetectorCommandInput, DeleteLogAnomalyDetectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLogAnomalyDetector",
  DeleteLogAnomalyDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLogAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogAnomalyDetectorCommandInput;
      output: DeleteLogAnomalyDetectorCommandOutput;
    };
  };
}
