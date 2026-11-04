// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput } from "../models/models_0";
import { CreateDataSourceFromRedshift$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataSourceFromRedshiftCommand}.
 */
export interface CreateDataSourceFromRedshiftCommandInput extends CreateDataSourceFromRedshiftInput {}
/**
 * @public
 *
 * The output of {@link CreateDataSourceFromRedshiftCommand}.
 */
export interface CreateDataSourceFromRedshiftCommandOutput extends CreateDataSourceFromRedshiftOutput, __MetadataBearer {}

/**
 * Creates a `DataSource` from a database hosted on an Amazon Redshift cluster. A `DataSource` references data that can be used to perform either `CreateMLModel`, `CreateEvaluation`, or `CreateBatchPrediction` operations.
 *
 *
 *
 * `CreateDataSourceFromRedshift` is an asynchronous operation. In response to `CreateDataSourceFromRedshift`, Amazon Machine Learning (Amazon ML) immediately returns and sets the `DataSource` status to `PENDING`. After the `DataSource` is created and ready for use, Amazon ML sets the `Status` parameter to `COMPLETED`. `DataSource` in `COMPLETED` or `PENDING` states can be used to perform only `CreateMLModel`, `CreateEvaluation`, or `CreateBatchPrediction` operations.
 *
 *
 *
 * If Amazon ML can't accept the input source, it sets the `Status` parameter to `FAILED` and includes an error message in the `Message` attribute of the `GetDataSource` operation response.
 *
 * The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a `SelectSqlQuery` query. Amazon ML executes an `Unload` command in Amazon Redshift to transfer the result set of the `SelectSqlQuery` query to `S3StagingLocation`.
 *
 * After the `DataSource` has been created, it's ready for use in evaluations and batch predictions. If you plan to use the `DataSource` to train an `MLModel`, the `DataSource` also requires a recipe. A recipe describes how each input variable will be used in training an `MLModel`. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.
 *
 * You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call `GetDataSource` for an existing datasource and copy the values to a `CreateDataSource` call. Change the settings that you want to change and make sure that all required fields have the appropriate values.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRedshiftCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromRedshiftCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateDataSourceFromRedshiftInput
 *   DataSourceId: "STRING_VALUE", // required
 *   DataSourceName: "STRING_VALUE",
 *   DataSpec: { // RedshiftDataSpec
 *     DatabaseInformation: { // RedshiftDatabase
 *       DatabaseName: "STRING_VALUE", // required
 *       ClusterIdentifier: "STRING_VALUE", // required
 *     },
 *     SelectSqlQuery: "STRING_VALUE", // required
 *     DatabaseCredentials: { // RedshiftDatabaseCredentials
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *     },
 *     S3StagingLocation: "STRING_VALUE", // required
 *     DataRearrangement: "STRING_VALUE",
 *     DataSchema: "STRING_VALUE",
 *     DataSchemaUri: "STRING_VALUE",
 *   },
 *   RoleARN: "STRING_VALUE", // required
 *   ComputeStatistics: true || false,
 * };
 * const command = new CreateDataSourceFromRedshiftCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSourceFromRedshiftOutput
 * //   DataSourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataSourceFromRedshiftCommandInput - {@link CreateDataSourceFromRedshiftCommandInput}
 * @returns {@link CreateDataSourceFromRedshiftCommandOutput}
 * @see {@link CreateDataSourceFromRedshiftCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRedshiftCommandOutput} for command's `response` shape.
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
export class CreateDataSourceFromRedshiftCommand extends command<CreateDataSourceFromRedshiftCommandInput, CreateDataSourceFromRedshiftCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataSourceFromRedshift",
  CreateDataSourceFromRedshift$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSourceFromRedshiftInput;
      output: CreateDataSourceFromRedshiftOutput;
    };
    sdk: {
      input: CreateDataSourceFromRedshiftCommandInput;
      output: CreateDataSourceFromRedshiftCommandOutput;
    };
  };
}
