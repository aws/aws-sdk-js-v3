// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DeleteForecastRequest } from "../models/models_0";
import { DeleteForecast$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
 *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status, use the <a>DescribeForecast</a> operation.</p>
 *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
 *       can no longer query the forecast.</p>
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
export class DeleteForecastCommand extends $Command
  .classBuilder<
    DeleteForecastCommandInput,
    DeleteForecastCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteForecast", {})
  .n("ForecastClient", "DeleteForecastCommand")
  .sc(DeleteForecast$)
  .build() {
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
