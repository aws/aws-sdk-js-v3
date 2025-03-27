// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/models_0";
import { de_DescribeMLModelsCommand, se_DescribeMLModelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandInput extends DescribeMLModelsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandOutput extends DescribeMLModelsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeMLModelsInput
 *   FilterVariable: "CreatedAt" || "LastUpdatedAt" || "Status" || "Name" || "IAMUser" || "TrainingDataSourceId" || "RealtimeEndpointStatus" || "MLModelType" || "Algorithm" || "TrainingDataURI",
 *   EQ: "STRING_VALUE",
 *   GT: "STRING_VALUE",
 *   LT: "STRING_VALUE",
 *   GE: "STRING_VALUE",
 *   LE: "STRING_VALUE",
 *   NE: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   SortOrder: "asc" || "dsc",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeMLModelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMLModelsOutput
 * //   Results: [ // MLModels
 * //     { // MLModel
 * //       MLModelId: "STRING_VALUE",
 * //       TrainingDataSourceId: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       SizeInBytes: Number("long"),
 * //       EndpointInfo: { // RealtimeEndpointInfo
 * //         PeakRequestsPerSecond: Number("int"),
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         EndpointUrl: "STRING_VALUE",
 * //         EndpointStatus: "NONE" || "READY" || "UPDATING" || "FAILED",
 * //       },
 * //       TrainingParameters: { // TrainingParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       Algorithm: "sgd",
 * //       MLModelType: "REGRESSION" || "BINARY" || "MULTICLASS",
 * //       ScoreThreshold: Number("float"),
 * //       ScoreThresholdLastUpdatedAt: new Date("TIMESTAMP"),
 * //       Message: "STRING_VALUE",
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMLModelsCommandInput - {@link DescribeMLModelsCommandInput}
 * @returns {@link DescribeMLModelsCommandOutput}
 * @see {@link DescribeMLModelsCommandInput} for command's `input` shape.
 * @see {@link DescribeMLModelsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
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
export class DescribeMLModelsCommand extends $Command
  .classBuilder<
    DescribeMLModelsCommandInput,
    DescribeMLModelsCommandOutput,
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
  .s("AmazonML_20141212", "DescribeMLModels", {})
  .n("MachineLearningClient", "DescribeMLModelsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMLModelsCommand)
  .de(de_DescribeMLModelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMLModelsInput;
      output: DescribeMLModelsOutput;
    };
    sdk: {
      input: DescribeMLModelsCommandInput;
      output: DescribeMLModelsCommandOutput;
    };
  };
}
