// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeEvaluationsInput, DescribeEvaluationsOutput } from "../models/models_0";
import { de_DescribeEvaluationsCommand, se_DescribeEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEvaluationsCommand}.
 */
export interface DescribeEvaluationsCommandInput extends DescribeEvaluationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeEvaluationsCommand}.
 */
export interface DescribeEvaluationsCommandOutput extends DescribeEvaluationsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeEvaluationsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeEvaluationsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeEvaluationsInput
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
 * const command = new DescribeEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEvaluationsOutput
 * //   Results: [ // Evaluations
 * //     { // Evaluation
 * //       EvaluationId: "STRING_VALUE",
 * //       MLModelId: "STRING_VALUE",
 * //       EvaluationDataSourceId: "STRING_VALUE",
 * //       InputDataLocationS3: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       PerformanceMetrics: { // PerformanceMetrics
 * //         Properties: { // PerformanceMetricsProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
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
 * @param DescribeEvaluationsCommandInput - {@link DescribeEvaluationsCommandInput}
 * @returns {@link DescribeEvaluationsCommandOutput}
 * @see {@link DescribeEvaluationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationsCommandOutput} for command's `response` shape.
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
export class DescribeEvaluationsCommand extends $Command
  .classBuilder<
    DescribeEvaluationsCommandInput,
    DescribeEvaluationsCommandOutput,
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
  .s("AmazonML_20141212", "DescribeEvaluations", {})
  .n("MachineLearningClient", "DescribeEvaluationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEvaluationsCommand)
  .de(de_DescribeEvaluationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEvaluationsInput;
      output: DescribeEvaluationsOutput;
    };
    sdk: {
      input: DescribeEvaluationsCommandInput;
      output: DescribeEvaluationsCommandOutput;
    };
  };
}
