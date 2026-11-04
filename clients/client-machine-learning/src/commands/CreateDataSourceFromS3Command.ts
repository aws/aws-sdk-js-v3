// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataSourceFromS3Input, CreateDataSourceFromS3Output } from "../models/models_0";
import { CreateDataSourceFromS3$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataSourceFromS3Command}.
 */
export interface CreateDataSourceFromS3CommandInput extends CreateDataSourceFromS3Input {}
/**
 * @public
 *
 * The output of {@link CreateDataSourceFromS3Command}.
 */
export interface CreateDataSourceFromS3CommandOutput extends CreateDataSourceFromS3Output, __MetadataBearer {}

/**
 * Creates a `DataSource` object. A `DataSource` references data that can be used to perform `CreateMLModel`, `CreateEvaluation`, or `CreateBatchPrediction` operations.
 *
 *
 *
 * `CreateDataSourceFromS3` is an asynchronous operation. In response to `CreateDataSourceFromS3`, Amazon Machine Learning (Amazon ML) immediately returns and sets the `DataSource` status to `PENDING`. After the `DataSource` has been created and is ready for use, Amazon ML sets the `Status` parameter to `COMPLETED`. `DataSource` in the `COMPLETED` or `PENDING` state can be used to perform only `CreateMLModel`, `CreateEvaluation` or `CreateBatchPrediction` operations.
 *
 *
 *
 *
 * If Amazon ML can't accept the input source, it sets the `Status` parameter to `FAILED` and includes an error message in the `Message` attribute of the `GetDataSource` operation response.
 *
 * The observation data used in a `DataSource` should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the `DataSource`.
 *
 * After the `DataSource` has been created, it's ready to use in evaluations and batch predictions. If you plan to use the `DataSource` to train an `MLModel`, the `DataSource` also needs a recipe. A recipe describes how each input variable will be used in training an `MLModel`. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromS3Command } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromS3Command } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateDataSourceFromS3Input
 *   DataSourceId: "STRING_VALUE", // required
 *   DataSourceName: "STRING_VALUE",
 *   DataSpec: { // S3DataSpec
 *     DataLocationS3: "STRING_VALUE", // required
 *     DataRearrangement: "STRING_VALUE",
 *     DataSchema: "STRING_VALUE",
 *     DataSchemaLocationS3: "STRING_VALUE",
 *   },
 *   ComputeStatistics: true || false,
 * };
 * const command = new CreateDataSourceFromS3Command(input);
 * const response = await client.send(command);
 * // { // CreateDataSourceFromS3Output
 * //   DataSourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataSourceFromS3CommandInput - {@link CreateDataSourceFromS3CommandInput}
 * @returns {@link CreateDataSourceFromS3CommandOutput}
 * @see {@link CreateDataSourceFromS3CommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromS3CommandOutput} for command's `response` shape.
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
export class CreateDataSourceFromS3Command extends command<CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput>(
  _ep0,
  _mw0,
  "CreateDataSourceFromS3",
  CreateDataSourceFromS3$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSourceFromS3Input;
      output: CreateDataSourceFromS3Output;
    };
    sdk: {
      input: CreateDataSourceFromS3CommandInput;
      output: CreateDataSourceFromS3CommandOutput;
    };
  };
}
