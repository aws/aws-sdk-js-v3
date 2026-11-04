// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEvaluationInput, CreateEvaluationOutput } from "../models/models_0";
import { CreateEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEvaluationCommand}.
 */
export interface CreateEvaluationCommandInput extends CreateEvaluationInput {}
/**
 * @public
 *
 * The output of {@link CreateEvaluationCommand}.
 */
export interface CreateEvaluationCommandOutput extends CreateEvaluationOutput, __MetadataBearer {}

/**
 * Creates a new `Evaluation` of an `MLModel`. An `MLModel` is evaluated on a set of observations associated to a `DataSource`. Like a `DataSource` for an `MLModel`, the `DataSource` for an `Evaluation` contains values for the `Target Variable`. The `Evaluation` compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the `MLModel` functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding `MLModelType`: `BINARY`, `REGRESSION` or `MULTICLASS`.
 *
 * `CreateEvaluation` is an asynchronous operation. In response to `CreateEvaluation`, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to `PENDING`. After the `Evaluation` is created and ready for use, Amazon ML sets the status to `COMPLETED`.
 *
 * You can use the `GetEvaluation` operation to check progress of the evaluation during the creation operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateEvaluationInput
 *   EvaluationId: "STRING_VALUE", // required
 *   EvaluationName: "STRING_VALUE",
 *   MLModelId: "STRING_VALUE", // required
 *   EvaluationDataSourceId: "STRING_VALUE", // required
 * };
 * const command = new CreateEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEvaluationOutput
 * //   EvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEvaluationCommandInput - {@link CreateEvaluationCommandInput}
 * @returns {@link CreateEvaluationCommandOutput}
 * @see {@link CreateEvaluationCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluationCommandOutput} for command's `response` shape.
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
export class CreateEvaluationCommand extends command<CreateEvaluationCommandInput, CreateEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "CreateEvaluation",
  CreateEvaluation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEvaluationInput;
      output: CreateEvaluationOutput;
    };
    sdk: {
      input: CreateEvaluationCommandInput;
      output: CreateEvaluationCommandOutput;
    };
  };
}
