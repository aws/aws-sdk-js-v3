// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteExplainabilityExportRequest } from "../models/models_0";
import { DeleteExplainabilityExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExplainabilityExportCommand}.
 */
export interface DeleteExplainabilityExportCommandInput extends DeleteExplainabilityExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExplainabilityExportCommand}.
 */
export interface DeleteExplainabilityExportCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Explainability export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteExplainabilityExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteExplainabilityExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteExplainabilityExportRequest
 *   ExplainabilityExportArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteExplainabilityExportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExplainabilityExportCommandInput - {@link DeleteExplainabilityExportCommandInput}
 * @returns {@link DeleteExplainabilityExportCommandOutput}
 * @see {@link DeleteExplainabilityExportCommandInput} for command's `input` shape.
 * @see {@link DeleteExplainabilityExportCommandOutput} for command's `response` shape.
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
export class DeleteExplainabilityExportCommand extends $Command
  .classBuilder<
    DeleteExplainabilityExportCommandInput,
    DeleteExplainabilityExportCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteExplainabilityExport", {})
  .n("ForecastClient", "DeleteExplainabilityExportCommand")
  .sc(DeleteExplainabilityExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExplainabilityExportRequest;
      output: {};
    };
    sdk: {
      input: DeleteExplainabilityExportCommandInput;
      output: DeleteExplainabilityExportCommandOutput;
    };
  };
}
