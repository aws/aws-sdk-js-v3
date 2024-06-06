// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CancelBatchPredictionJobRequest, CancelBatchPredictionJobResult } from "../models/models_0";
import { de_CancelBatchPredictionJobCommand, se_CancelBatchPredictionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Cancels the specified batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
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
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 * @public
 */
export class CancelBatchPredictionJobCommand extends $Command
  .classBuilder<
    CancelBatchPredictionJobCommandInput,
    CancelBatchPredictionJobCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "CancelBatchPredictionJob", {})
  .n("FraudDetectorClient", "CancelBatchPredictionJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelBatchPredictionJobCommand)
  .de(de_CancelBatchPredictionJobCommand)
  .build() {}
