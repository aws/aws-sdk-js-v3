// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput } from "../models/models_0";
import { CreateDataSourceFromRDS$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataSourceFromRDSCommand}.
 */
export interface CreateDataSourceFromRDSCommandInput extends CreateDataSourceFromRDSInput {}
/**
 * @public
 *
 * The output of {@link CreateDataSourceFromRDSCommand}.
 */
export interface CreateDataSourceFromRDSCommandOutput extends CreateDataSourceFromRDSOutput, __MetadataBearer {}

/**
 * Creates a `DataSource` object from an [Amazon Relational Database Service](http://aws.amazon.com/rds/) (Amazon RDS). A `DataSource` references data that can be used to perform `CreateMLModel`, `CreateEvaluation`, or `CreateBatchPrediction` operations.
 *
 *
 *
 * `CreateDataSourceFromRDS` is an asynchronous operation. In response to `CreateDataSourceFromRDS`, Amazon Machine Learning (Amazon ML) immediately returns and sets the `DataSource` status to `PENDING`. After the `DataSource` is created and ready for use, Amazon ML sets the `Status` parameter to `COMPLETED`. `DataSource` in the `COMPLETED` or `PENDING` state can be used only to perform `>CreateMLModel`>, `CreateEvaluation`, or `CreateBatchPrediction` operations.
 *
 *
 *
 * If Amazon ML cannot accept the input source, it sets the `Status` parameter to `FAILED` and includes an error message in the `Message` attribute of the `GetDataSource` operation response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRDSCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateDataSourceFromRDSCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateDataSourceFromRDSInput
 *   DataSourceId: "STRING_VALUE", // required
 *   DataSourceName: "STRING_VALUE",
 *   RDSData: { // RDSDataSpec
 *     DatabaseInformation: { // RDSDatabase
 *       InstanceIdentifier: "STRING_VALUE", // required
 *       DatabaseName: "STRING_VALUE", // required
 *     },
 *     SelectSqlQuery: "STRING_VALUE", // required
 *     DatabaseCredentials: { // RDSDatabaseCredentials
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *     },
 *     S3StagingLocation: "STRING_VALUE", // required
 *     DataRearrangement: "STRING_VALUE",
 *     DataSchema: "STRING_VALUE",
 *     DataSchemaUri: "STRING_VALUE",
 *     ResourceRole: "STRING_VALUE", // required
 *     ServiceRole: "STRING_VALUE", // required
 *     SubnetId: "STRING_VALUE", // required
 *     SecurityGroupIds: [ // EDPSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   RoleARN: "STRING_VALUE", // required
 *   ComputeStatistics: true || false,
 * };
 * const command = new CreateDataSourceFromRDSCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSourceFromRDSOutput
 * //   DataSourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataSourceFromRDSCommandInput - {@link CreateDataSourceFromRDSCommandInput}
 * @returns {@link CreateDataSourceFromRDSCommandOutput}
 * @see {@link CreateDataSourceFromRDSCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRDSCommandOutput} for command's `response` shape.
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
export class CreateDataSourceFromRDSCommand extends command<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataSourceFromRDS",
  CreateDataSourceFromRDS$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSourceFromRDSInput;
      output: CreateDataSourceFromRDSOutput;
    };
    sdk: {
      input: CreateDataSourceFromRDSCommandInput;
      output: CreateDataSourceFromRDSCommandOutput;
    };
  };
}
