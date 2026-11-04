// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMLModelInput, CreateMLModelOutput } from "../models/models_0";
import { CreateMLModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMLModelCommand}.
 */
export interface CreateMLModelCommandInput extends CreateMLModelInput {}
/**
 * @public
 *
 * The output of {@link CreateMLModelCommand}.
 */
export interface CreateMLModelCommandOutput extends CreateMLModelOutput, __MetadataBearer {}

/**
 * Creates a new `MLModel` using the `DataSource` and the recipe as information sources.
 *
 * An `MLModel` is nearly immutable. Users can update only the `MLModelName` and the `ScoreThreshold` in an `MLModel` without creating a new `MLModel`.
 *
 * `CreateMLModel` is an asynchronous operation. In response to `CreateMLModel`, Amazon Machine Learning (Amazon ML) immediately returns and sets the `MLModel` status to `PENDING`. After the `MLModel` has been created and ready is for use, Amazon ML sets the status to `COMPLETED`.
 *
 * You can use the `GetMLModel` operation to check the progress of the `MLModel` during the creation operation.
 *
 * `CreateMLModel` requires a `DataSource` with computed statistics, which can be created by setting `ComputeStatistics` to `true` in `CreateDataSourceFromRDS`, `CreateDataSourceFromS3`, or `CreateDataSourceFromRedshift` operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateMLModelInput
 *   MLModelId: "STRING_VALUE", // required
 *   MLModelName: "STRING_VALUE",
 *   MLModelType: "REGRESSION" || "BINARY" || "MULTICLASS", // required
 *   Parameters: { // TrainingParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TrainingDataSourceId: "STRING_VALUE", // required
 *   Recipe: "STRING_VALUE",
 *   RecipeUri: "STRING_VALUE",
 * };
 * const command = new CreateMLModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLModelOutput
 * //   MLModelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMLModelCommandInput - {@link CreateMLModelCommandInput}
 * @returns {@link CreateMLModelCommandOutput}
 * @see {@link CreateMLModelCommandInput} for command's `input` shape.
 * @see {@link CreateMLModelCommandOutput} for command's `response` shape.
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
export class CreateMLModelCommand extends command<CreateMLModelCommandInput, CreateMLModelCommandOutput>(
  _ep0,
  _mw0,
  "CreateMLModel",
  CreateMLModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMLModelInput;
      output: CreateMLModelOutput;
    };
    sdk: {
      input: CreateMLModelCommandInput;
      output: CreateMLModelCommandOutput;
    };
  };
}
