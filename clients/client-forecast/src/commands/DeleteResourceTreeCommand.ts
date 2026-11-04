// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourceTreeRequest } from "../models/models_0";
import { DeleteResourceTree$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an entire resource tree. This operation will delete the parent resource and its child resources.
 *
 * Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.
 *
 * Amazon Forecast resources possess the following parent-child resource hierarchies:
 *
 * - **Dataset**: dataset import jobs
 * - **Dataset Group**: predictors, predictor backtest export jobs, forecasts, forecast export jobs
 * - **Predictor**: predictor backtest export jobs, forecasts, forecast export jobs
 * - **Forecast**: forecast export jobs
 *
 * > **Note:** `DeleteResourceTree` will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3.
 *
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class DeleteResourceTreeCommand extends command<DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourceTree",
  DeleteResourceTree$
) {
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
