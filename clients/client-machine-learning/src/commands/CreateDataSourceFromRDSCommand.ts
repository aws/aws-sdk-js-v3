// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import {
  CreateDataSourceFromRDSInput,
  CreateDataSourceFromRDSInputFilterSensitiveLog,
  CreateDataSourceFromRDSOutput,
} from "../models/models_0";
import { de_CreateDataSourceFromRDSCommand, se_CreateDataSourceFromRDSCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>,
 *          Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *             <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can
 *           be used only to perform <code>>CreateMLModel</code>>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *         <p>
 *           If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response.
 *         </p>
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
export class CreateDataSourceFromRDSCommand extends $Command
  .classBuilder<
    CreateDataSourceFromRDSCommandInput,
    CreateDataSourceFromRDSCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "CreateDataSourceFromRDS", {})
  .n("MachineLearningClient", "CreateDataSourceFromRDSCommand")
  .f(CreateDataSourceFromRDSInputFilterSensitiveLog, void 0)
  .ser(se_CreateDataSourceFromRDSCommand)
  .de(de_CreateDataSourceFromRDSCommand)
  .build() {
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
