// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteForecastRequest } from "../models/models_0";
import { DeleteForecast$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteForecastCommand}.
 */
export interface DeleteForecastCommandInput extends DeleteForecastRequest {}
/**
 * @public
 *
 * The output of {@link DeleteForecastCommand}.
 */
export interface DeleteForecastCommandOutput extends __MetadataBearer {}

/**
 * Deletes a forecast created using the CreateForecast operation. You can delete only forecasts that have a status of `ACTIVE` or `CREATE_FAILED`. To get the status, use the DescribeForecast operation.
 *
 * You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteForecastRequest
 *   ForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteForecastCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteForecastCommandInput - {@link DeleteForecastCommandInput}
 * @returns {@link DeleteForecastCommandOutput}
 * @see {@link DeleteForecastCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastCommandOutput} for command's `response` shape.
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
export class DeleteForecastCommand extends command<DeleteForecastCommandInput, DeleteForecastCommandOutput>(
  _ep0,
  _mw0,
  "DeleteForecast",
  DeleteForecast$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteForecastRequest;
      output: {};
    };
    sdk: {
      input: DeleteForecastCommandInput;
      output: DeleteForecastCommandOutput;
    };
  };
}
