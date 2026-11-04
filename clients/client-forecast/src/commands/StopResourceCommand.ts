// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopResourceRequest } from "../models/models_0";
import { StopResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopResourceCommand}.
 */
export interface StopResourceCommandInput extends StopResourceRequest {}
/**
 * @public
 *
 * The output of {@link StopResourceCommand}.
 */
export interface StopResourceCommandOutput extends __MetadataBearer {}

/**
 * Stops a resource.
 *
 * The resource undergoes the following states: `CREATE_STOPPING` and `CREATE_STOPPED`. You cannot resume a resource once it has been stopped.
 *
 * This operation can be applied to the following resources (and their corresponding child resources):
 *
 * - Dataset Import Job
 * - Predictor Job
 * - Forecast Job
 * - Forecast Export Job
 * - Predictor Backtest Export Job
 * - Explainability Job
 * - Explainability Export Job
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, StopResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, StopResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // StopResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new StopResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopResourceCommandInput - {@link StopResourceCommandInput}
 * @returns {@link StopResourceCommandOutput}
 * @see {@link StopResourceCommandInput} for command's `input` shape.
 * @see {@link StopResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
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
export class StopResourceCommand extends command<StopResourceCommandInput, StopResourceCommandOutput>(
  _ep0,
  _mw0,
  "StopResource",
  StopResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopResourceRequest;
      output: {};
    };
    sdk: {
      input: StopResourceCommandInput;
      output: StopResourceCommandOutput;
    };
  };
}
