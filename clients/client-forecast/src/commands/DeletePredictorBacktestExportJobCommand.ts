// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DeletePredictorBacktestExportJobRequest } from "../models/models_0";
import { DeletePredictorBacktestExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePredictorBacktestExportJobCommand}.
 */
export interface DeletePredictorBacktestExportJobCommandInput extends DeletePredictorBacktestExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeletePredictorBacktestExportJobCommand}.
 */
export interface DeletePredictorBacktestExportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a predictor backtest export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeletePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeletePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeletePredictorBacktestExportJobRequest
 *   PredictorBacktestExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePredictorBacktestExportJobCommandInput - {@link DeletePredictorBacktestExportJobCommandInput}
 * @returns {@link DeletePredictorBacktestExportJobCommandOutput}
 * @see {@link DeletePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DeletePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
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
export class DeletePredictorBacktestExportJobCommand extends $Command
  .classBuilder<
    DeletePredictorBacktestExportJobCommandInput,
    DeletePredictorBacktestExportJobCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeletePredictorBacktestExportJob", {})
  .n("ForecastClient", "DeletePredictorBacktestExportJobCommand")
  .sc(DeletePredictorBacktestExportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePredictorBacktestExportJobRequest;
      output: {};
    };
    sdk: {
      input: DeletePredictorBacktestExportJobCommandInput;
      output: DeletePredictorBacktestExportJobCommandOutput;
    };
  };
}
