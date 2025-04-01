// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  DescribePredictorBacktestExportJobRequest,
  DescribePredictorBacktestExportJobResponse,
} from "../models/models_0";
import {
  de_DescribePredictorBacktestExportJobCommand,
  se_DescribePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePredictorBacktestExportJobCommand}.
 */
export interface DescribePredictorBacktestExportJobCommandInput extends DescribePredictorBacktestExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribePredictorBacktestExportJobCommand}.
 */
export interface DescribePredictorBacktestExportJobCommandOutput
  extends DescribePredictorBacktestExportJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *          <p>In addition to listing the properties provided by the user in the
 *                 <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
 *             following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> (if an error occurred)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribePredictorBacktestExportJobRequest
 *   PredictorBacktestExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribePredictorBacktestExportJobResponse
 * //   PredictorBacktestExportJobArn: "STRING_VALUE",
 * //   PredictorBacktestExportJobName: "STRING_VALUE",
 * //   PredictorArn: "STRING_VALUE",
 * //   Destination: { // DataDestination
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePredictorBacktestExportJobCommandInput - {@link DescribePredictorBacktestExportJobCommandInput}
 * @returns {@link DescribePredictorBacktestExportJobCommandOutput}
 * @see {@link DescribePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class DescribePredictorBacktestExportJobCommand extends $Command
  .classBuilder<
    DescribePredictorBacktestExportJobCommandInput,
    DescribePredictorBacktestExportJobCommandOutput,
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
  .s("AmazonForecast", "DescribePredictorBacktestExportJob", {})
  .n("ForecastClient", "DescribePredictorBacktestExportJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribePredictorBacktestExportJobCommand)
  .de(de_DescribePredictorBacktestExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePredictorBacktestExportJobRequest;
      output: DescribePredictorBacktestExportJobResponse;
    };
    sdk: {
      input: DescribePredictorBacktestExportJobCommandInput;
      output: DescribePredictorBacktestExportJobCommandOutput;
    };
  };
}
