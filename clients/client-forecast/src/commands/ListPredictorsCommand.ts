// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListPredictorsRequest, ListPredictorsResponse } from "../models/models_0";
import { de_ListPredictorsCommand, se_ListPredictorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPredictorsCommand}.
 */
export interface ListPredictorsCommandInput extends ListPredictorsRequest {}
/**
 * @public
 *
 * The output of {@link ListPredictorsCommand}.
 */
export interface ListPredictorsCommandOutput extends ListPredictorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or
 *         <a>CreatePredictor</a> operations. For each predictor, this operation returns a
 *       summary of its properties, including its Amazon Resource Name (ARN). </p>
 *          <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You
 *       can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // ListPredictorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListPredictorsCommand(input);
 * const response = await client.send(command);
 * // { // ListPredictorsResponse
 * //   Predictors: [ // Predictors
 * //     { // PredictorSummary
 * //       PredictorArn: "STRING_VALUE",
 * //       PredictorName: "STRING_VALUE",
 * //       DatasetGroupArn: "STRING_VALUE",
 * //       IsAutoPredictor: true || false,
 * //       ReferencePredictorSummary: { // ReferencePredictorSummary
 * //         Arn: "STRING_VALUE",
 * //         State: "Active" || "Deleted",
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPredictorsCommandInput - {@link ListPredictorsCommandInput}
 * @returns {@link ListPredictorsCommandOutput}
 * @see {@link ListPredictorsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 * @public
 */
export class ListPredictorsCommand extends $Command
  .classBuilder<
    ListPredictorsCommandInput,
    ListPredictorsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "ListPredictors", {})
  .n("ForecastClient", "ListPredictorsCommand")
  .f(void 0, void 0)
  .ser(se_ListPredictorsCommand)
  .de(de_ListPredictorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPredictorsRequest;
      output: ListPredictorsResponse;
    };
    sdk: {
      input: ListPredictorsCommandInput;
      output: ListPredictorsCommandOutput;
    };
  };
}
