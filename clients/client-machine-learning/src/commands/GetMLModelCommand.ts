// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetMLModelInput, GetMLModelOutput } from "../models/models_0";
import { de_GetMLModelCommand, se_GetMLModelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLModelCommand}.
 */
export interface GetMLModelCommandInput extends GetMLModelInput {}
/**
 * @public
 *
 * The output of {@link GetMLModelCommand}.
 */
export interface GetMLModelCommandOutput extends GetMLModelOutput, __MetadataBearer {}

/**
 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
 *         <p>
 *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // GetMLModelInput
 *   MLModelId: "STRING_VALUE", // required
 *   Verbose: true || false,
 * };
 * const command = new GetMLModelCommand(input);
 * const response = await client.send(command);
 * // { // GetMLModelOutput
 * //   MLModelId: "STRING_VALUE",
 * //   TrainingDataSourceId: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //   SizeInBytes: Number("long"),
 * //   EndpointInfo: { // RealtimeEndpointInfo
 * //     PeakRequestsPerSecond: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndpointUrl: "STRING_VALUE",
 * //     EndpointStatus: "NONE" || "READY" || "UPDATING" || "FAILED",
 * //   },
 * //   TrainingParameters: { // TrainingParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   InputDataLocationS3: "STRING_VALUE",
 * //   MLModelType: "REGRESSION" || "BINARY" || "MULTICLASS",
 * //   ScoreThreshold: Number("float"),
 * //   ScoreThresholdLastUpdatedAt: new Date("TIMESTAMP"),
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   Recipe: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMLModelCommandInput - {@link GetMLModelCommandInput}
 * @returns {@link GetMLModelCommandOutput}
 * @see {@link GetMLModelCommandInput} for command's `input` shape.
 * @see {@link GetMLModelCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetMLModelCommand extends $Command
  .classBuilder<
    GetMLModelCommandInput,
    GetMLModelCommandOutput,
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
  .s("AmazonML_20141212", "GetMLModel", {})
  .n("MachineLearningClient", "GetMLModelCommand")
  .f(void 0, void 0)
  .ser(se_GetMLModelCommand)
  .de(de_GetMLModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLModelInput;
      output: GetMLModelOutput;
    };
    sdk: {
      input: GetMLModelCommandInput;
      output: GetMLModelCommandOutput;
    };
  };
}
