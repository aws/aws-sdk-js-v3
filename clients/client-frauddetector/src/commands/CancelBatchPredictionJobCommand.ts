// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelBatchPredictionJobRequest, CancelBatchPredictionJobResult } from "../models/models_0";
import { CancelBatchPredictionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelBatchPredictionJobCommand}.
 */
export interface CancelBatchPredictionJobCommandInput extends CancelBatchPredictionJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelBatchPredictionJobCommand}.
 */
export interface CancelBatchPredictionJobCommandOutput extends CancelBatchPredictionJobResult, __MetadataBearer {}

/**
 * Cancels the specified batch prediction job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CancelBatchPredictionJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelBatchPredictionJobCommandInput - {@link CancelBatchPredictionJobCommandInput}
 * @returns {@link CancelBatchPredictionJobCommandOutput}
 * @see {@link CancelBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CancelBatchPredictionJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception indicating the specified resource was not found.
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
export class CancelBatchPredictionJobCommand extends command<CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelBatchPredictionJob",
  CancelBatchPredictionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelBatchPredictionJobRequest;
      output: {};
    };
    sdk: {
      input: CancelBatchPredictionJobCommandInput;
      output: CancelBatchPredictionJobCommandOutput;
    };
  };
}
