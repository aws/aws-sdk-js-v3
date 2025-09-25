// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteResourceTreeRequest } from "../models/models_0";
import { DeleteResourceTree } from "../schemas/schemas_31_DeleteResourceTree";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceTreeCommand}.
 */
export interface DeleteResourceTreeCommandInput extends DeleteResourceTreeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceTreeCommand}.
 */
export interface DeleteResourceTreeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an entire resource tree. This operation will delete the parent resource and
 *             its child resources.</p>
 *          <p>Child resources are resources that were created from another resource. For example,
 *             when a forecast is generated from a predictor, the forecast is the child resource and
 *             the predictor is the parent resource.</p>
 *          <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Dataset</b>: dataset import jobs</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Dataset Group</b>: predictors, predictor backtest
 *                     export jobs, forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Predictor</b>: predictor backtest export jobs,
 *                     forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Forecast</b>: forecast export jobs</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
 *                 delete datasets or exported files stored in Amazon S3. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteResourceTreeCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteResourceTreeCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteResourceTreeRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceTreeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceTreeCommandInput - {@link DeleteResourceTreeCommandInput}
 * @returns {@link DeleteResourceTreeCommandOutput}
 * @see {@link DeleteResourceTreeCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceTreeCommandOutput} for command's `response` shape.
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
export class DeleteResourceTreeCommand extends $Command
  .classBuilder<
    DeleteResourceTreeCommandInput,
    DeleteResourceTreeCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteResourceTree", {})
  .n("ForecastClient", "DeleteResourceTreeCommand")
  .sc(DeleteResourceTree)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceTreeRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceTreeCommandInput;
      output: DeleteResourceTreeCommandOutput;
    };
  };
}
