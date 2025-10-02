// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput } from "../models/models_0";
import { de_DescribeBatchPredictionsCommand, se_DescribeBatchPredictionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchPredictionsCommand}.
 */
export interface DescribeBatchPredictionsCommandInput extends DescribeBatchPredictionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeBatchPredictionsCommand}.
 */
export interface DescribeBatchPredictionsCommandOutput extends DescribeBatchPredictionsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeBatchPredictionsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeBatchPredictionsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeBatchPredictionsInput
 *   FilterVariable: "CreatedAt" || "LastUpdatedAt" || "Status" || "Name" || "IAMUser" || "MLModelId" || "DataSourceId" || "DataURI",
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
 * const command = new DescribeBatchPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchPredictionsOutput
 * //   Results: [ // BatchPredictions
 * //     { // BatchPrediction
 * //       BatchPredictionId: "STRING_VALUE",
 * //       MLModelId: "STRING_VALUE",
 * //       BatchPredictionDataSourceId: "STRING_VALUE",
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       OutputUri: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       TotalRecordCount: Number("long"),
 * //       InvalidRecordCount: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBatchPredictionsCommandInput - {@link DescribeBatchPredictionsCommandInput}
 * @returns {@link DescribeBatchPredictionsCommandOutput}
 * @see {@link DescribeBatchPredictionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchPredictionsCommandOutput} for command's `response` shape.
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
export class DescribeBatchPredictionsCommand extends $Command
  .classBuilder<
    DescribeBatchPredictionsCommandInput,
    DescribeBatchPredictionsCommandOutput,
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
  .s("AmazonML_20141212", "DescribeBatchPredictions", {})
  .n("MachineLearningClient", "DescribeBatchPredictionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBatchPredictionsCommand)
  .de(de_DescribeBatchPredictionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBatchPredictionsInput;
      output: DescribeBatchPredictionsOutput;
    };
    sdk: {
      input: DescribeBatchPredictionsCommandInput;
      output: DescribeBatchPredictionsCommandOutput;
    };
  };
}
