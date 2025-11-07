// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateDataSourceFromS3Input, CreateDataSourceFromS3Output } from "../models/models_0";
import { CreateDataSourceFromS3 } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that
 *           can be used to perform  <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or
 *           <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to
 *                 <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the
 *                 <code>DataSource</code> has been created and is ready for use, Amazon ML sets the
 *                 <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in
 *             the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only
 *                 <code>CreateMLModel</code>, <code>CreateEvaluation</code> or
 *                 <code>CreateBatchPrediction</code> operations. </p>
 *
 *         <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to
 *                 <code>FAILED</code> and includes an error message in the <code>Message</code>
 *             attribute of the <code>GetDataSource</code> operation response. </p>
 *
 *         <p>The observation data used in a <code>DataSource</code> should be ready to use; that is,
 *             it should have a consistent structure, and missing data values should be kept to a
 *             minimum. The observation data must reside in one or more .csv files in an Amazon Simple
 *             Storage Service (Amazon S3) location, along with a schema that describes the data items
 *             by name and type. The same schema must be used for all of the data files referenced by
 *             the <code>DataSource</code>. </p>
 *         <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and
 *             batch predictions. If you plan to use the <code>DataSource</code> to train an
 *                 <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe
 *             describes how each input variable will be used in training an <code>MLModel</code>. Will
 *             the variable be included or excluded from training? Will the variable be manipulated;
 *             for example, will it be combined with another variable or will it be split apart into
 *             word combinations? The recipe provides answers to these questions.</p>
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
export class CreateDataSourceFromS3Command extends $Command
  .classBuilder<
    CreateDataSourceFromS3CommandInput,
    CreateDataSourceFromS3CommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonML_20141212", "CreateDataSourceFromS3", {})
  .n("MachineLearningClient", "CreateDataSourceFromS3Command")
  .sc(CreateDataSourceFromS3)
  .build() {
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
