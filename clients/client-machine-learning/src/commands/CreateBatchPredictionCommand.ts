// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateBatchPredictionInput, CreateBatchPredictionOutput } from "../models/models_0";
import { CreateBatchPrediction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchPredictionCommand}.
 */
export interface CreateBatchPredictionCommandInput extends CreateBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link CreateBatchPredictionCommand}.
 */
export interface CreateBatchPredictionCommandOutput extends CreateBatchPredictionOutput, __MetadataBearer {}

/**
 * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced
 *             by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data
 *             files referenced by the <code>DataSource</code> as information sources.
 *         </p>
 *
 *         <p>
 *             <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>,
 *         Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>.
 *         After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears,
 *             the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 *   BatchPredictionName: "STRING_VALUE",
 *   MLModelId: "STRING_VALUE", // required
 *   BatchPredictionDataSourceId: "STRING_VALUE", // required
 *   OutputUri: "STRING_VALUE", // required
 * };
 * const command = new CreateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBatchPredictionCommandInput - {@link CreateBatchPredictionCommandInput}
 * @returns {@link CreateBatchPredictionCommandOutput}
 * @see {@link CreateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class CreateBatchPredictionCommand extends $Command
  .classBuilder<
    CreateBatchPredictionCommandInput,
    CreateBatchPredictionCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonML_20141212", "CreateBatchPrediction", {})
  .n("MachineLearningClient", "CreateBatchPredictionCommand")
  .sc(CreateBatchPrediction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchPredictionInput;
      output: CreateBatchPredictionOutput;
    };
    sdk: {
      input: CreateBatchPredictionCommandInput;
      output: CreateBatchPredictionCommandOutput;
    };
  };
}
