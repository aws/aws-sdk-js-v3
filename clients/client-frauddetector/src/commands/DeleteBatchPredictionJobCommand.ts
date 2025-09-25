// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteBatchPredictionJobRequest, DeleteBatchPredictionJobResult } from "../models/models_0";
import { DeleteBatchPredictionJob } from "../schemas/schemas_31_DeleteBatchPredictionJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a batch prediction job.</p>
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
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
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
 *
 * @public
 */
export class DeleteBatchPredictionJobCommand extends $Command
  .classBuilder<
    DeleteBatchPredictionJobCommandInput,
    DeleteBatchPredictionJobCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteBatchPredictionJob", {})
  .n("FraudDetectorClient", "DeleteBatchPredictionJobCommand")
  .sc(DeleteBatchPredictionJob)
  .build() {
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
