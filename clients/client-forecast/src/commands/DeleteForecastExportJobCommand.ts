// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DeleteForecastExportJobRequest } from "../models/models_0";
import { DeleteForecastExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteForecastExportJobCommand}.
 */
export interface DeleteForecastExportJobCommandInput extends DeleteForecastExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteForecastExportJobCommand}.
 */
export interface DeleteForecastExportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
 *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteForecastExportJobRequest
 *   ForecastExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteForecastExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteForecastExportJobCommandInput - {@link DeleteForecastExportJobCommandInput}
 * @returns {@link DeleteForecastExportJobCommandOutput}
 * @see {@link DeleteForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastExportJobCommandOutput} for command's `response` shape.
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
export class DeleteForecastExportJobCommand extends $Command
  .classBuilder<
    DeleteForecastExportJobCommandInput,
    DeleteForecastExportJobCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteForecastExportJob", {})
  .n("ForecastClient", "DeleteForecastExportJobCommand")
  .sc(DeleteForecastExportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteForecastExportJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteForecastExportJobCommandInput;
      output: DeleteForecastExportJobCommandOutput;
    };
  };
}
