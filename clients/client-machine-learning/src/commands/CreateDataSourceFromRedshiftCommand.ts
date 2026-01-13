// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MachineLearningClient";
import type { CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput } from "../models/models_0";
import { CreateDataSourceFromRedshift$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A
 * 		<code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code>
 * 		operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *           <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be
 *           used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *
 *         <p>
 *           If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code>
 * 		  attribute of the <code>GetDataSource</code> operation response.
 *         </p>
 *
 *         <p>The observations should be contained in the database hosted on an Amazon Redshift cluster
 *             and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an
 *                 <code>Unload</code> command in Amazon Redshift to transfer the result set of
 *                 the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p>
 *
 *         <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and
 *             batch predictions. If you plan to use the <code>DataSource</code> to train an
 *                 <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe
 *             describes how each input variable will be used in training an <code>MLModel</code>. Will
 *             the variable be included or excluded from training? Will the variable be manipulated;
 *             for example, will it be combined with another variable or will it be split apart into
 *             word combinations? The recipe provides answers to these questions.</p>
 *          <p>You can't change an existing datasource, but you can copy and modify the settings from an
 *             existing Amazon Redshift datasource to create a new datasource. To do so, call
 *                 <code>GetDataSource</code> for an existing datasource and copy the values to a
 *                 <code>CreateDataSource</code> call. Change the settings that you want to change and
 *             make sure that all required fields have the appropriate values.</p>
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
export class CreateDataSourceFromRedshiftCommand extends $Command
  .classBuilder<
    CreateDataSourceFromRedshiftCommandInput,
    CreateDataSourceFromRedshiftCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonML_20141212", "CreateDataSourceFromRedshift", {})
  .n("MachineLearningClient", "CreateDataSourceFromRedshiftCommand")
  .sc(CreateDataSourceFromRedshift$)
  .build() {
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
