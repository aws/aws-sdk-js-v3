// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBatchPredictionInput, CreateBatchPredictionOutput } from "../models/models_0";
import { CreateBatchPrediction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a `DataSource`. This operation creates a new `BatchPrediction`, and uses an `MLModel` and the data files referenced by the `DataSource` as information sources.
 *
 *
 *
 * `CreateBatchPrediction` is an asynchronous operation. In response to `CreateBatchPrediction`, Amazon Machine Learning (Amazon ML) immediately returns and sets the `BatchPrediction` status to `PENDING`. After the `BatchPrediction` completes, Amazon ML sets the status to `COMPLETED`.
 *
 * You can poll for status updates by using the GetBatchPrediction operation and checking the `Status` parameter of the result. After the `COMPLETED` status appears, the results are available in the location specified by the `OutputUri` parameter.
 *
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
 *
 * A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred when trying to process a request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link MachineLearningServiceException}
 *
 * Base exception class for all service exceptions from MachineLearning service.
 *
 * @public
 */
export class CreateBatchPredictionCommand extends command<CreateBatchPredictionCommandInput, CreateBatchPredictionCommandOutput>(
  _ep0,
  _mw0,
  "CreateBatchPrediction",
  CreateBatchPrediction$
) {
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
