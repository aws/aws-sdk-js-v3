// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/models_0";
import { de_GetBatchPredictionCommand, se_GetBatchPredictionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchPredictionCommand}.
 */
export interface GetBatchPredictionCommandInput extends GetBatchPredictionInput {}
/**
 * @public
 *
 * The output of {@link GetBatchPredictionCommand}.
 */
export interface GetBatchPredictionCommandOutput extends GetBatchPredictionOutput, __MetadataBearer {}

/**
 * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
 *             <code>Batch Prediction</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MachineLearningClient(config);
 * const input = { // GetBatchPredictionInput
 *   BatchPredictionId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchPredictionCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchPredictionOutput
 * //   BatchPredictionId: "STRING_VALUE",
 * //   MLModelId: "STRING_VALUE",
 * //   BatchPredictionDataSourceId: "STRING_VALUE",
 * //   InputDataLocationS3: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //   OutputUri: "STRING_VALUE",
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   TotalRecordCount: Number("long"),
 * //   InvalidRecordCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetBatchPredictionCommandInput - {@link GetBatchPredictionCommandInput}
 * @returns {@link GetBatchPredictionCommandOutput}
 * @see {@link GetBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 * @public
 */
export class GetBatchPredictionCommand extends $Command
  .classBuilder<
    GetBatchPredictionCommandInput,
    GetBatchPredictionCommandOutput,
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
  .s("AmazonML_20141212", "GetBatchPrediction", {})
  .n("MachineLearningClient", "GetBatchPredictionCommand")
  .f(void 0, void 0)
  .ser(se_GetBatchPredictionCommand)
  .de(de_GetBatchPredictionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchPredictionInput;
      output: GetBatchPredictionOutput;
    };
    sdk: {
      input: GetBatchPredictionCommandInput;
      output: GetBatchPredictionCommandOutput;
    };
  };
}
