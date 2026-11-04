// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBatchPredictionJobRequest, DeleteBatchPredictionJobResult } from "../models/models_0";
import { DeleteBatchPredictionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBatchPredictionJobCommand}.
 */
export interface DeleteBatchPredictionJobCommandInput extends DeleteBatchPredictionJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBatchPredictionJobCommand}.
 */
export interface DeleteBatchPredictionJobCommandOutput extends DeleteBatchPredictionJobResult, __MetadataBearer {}

/**
 * Deletes a batch prediction job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteBatchPredictionJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBatchPredictionJobCommandInput - {@link DeleteBatchPredictionJobCommandInput}
 * @returns {@link DeleteBatchPredictionJobCommandOutput}
 * @see {@link DeleteBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception indicating an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An exception indicating a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception indicating a specified value is not allowed.
 *
 * @throws {@link FraudDetectorServiceException}
 *
 * Base exception class for all service exceptions from FraudDetector service.
 *
 * @public
 */
export class DeleteBatchPredictionJobCommand extends command<DeleteBatchPredictionJobCommandInput, DeleteBatchPredictionJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBatchPredictionJob",
  DeleteBatchPredictionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBatchPredictionJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteBatchPredictionJobCommandInput;
      output: DeleteBatchPredictionJobCommandOutput;
    };
  };
}
