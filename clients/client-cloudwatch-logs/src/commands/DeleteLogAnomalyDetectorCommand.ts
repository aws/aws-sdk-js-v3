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
 * <p>Deletes the specified CloudWatch Logs anomaly detector.</p>
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
