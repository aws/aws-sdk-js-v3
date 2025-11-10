// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteWhatIfAnalysisRequest } from "../models/models_0";
import { DeleteWhatIfAnalysis } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfAnalysisCommand}.
 */
export interface DeleteWhatIfAnalysisCommandInput extends DeleteWhatIfAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfAnalysisCommand}.
 */
export interface DeleteWhatIfAnalysisCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a>
 *       operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p>
 *          <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfAnalysisCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfAnalysisCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfAnalysisRequest
 *   WhatIfAnalysisArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfAnalysisCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfAnalysisCommandInput - {@link DeleteWhatIfAnalysisCommandInput}
 * @returns {@link DeleteWhatIfAnalysisCommandOutput}
 * @see {@link DeleteWhatIfAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfAnalysisCommandOutput} for command's `response` shape.
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
export class DeleteWhatIfAnalysisCommand extends $Command
  .classBuilder<
    DeleteWhatIfAnalysisCommandInput,
    DeleteWhatIfAnalysisCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteWhatIfAnalysis", {})
  .n("ForecastClient", "DeleteWhatIfAnalysisCommand")
  .sc(DeleteWhatIfAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatIfAnalysisRequest;
      output: {};
    };
    sdk: {
      input: DeleteWhatIfAnalysisCommandInput;
      output: DeleteWhatIfAnalysisCommandOutput;
    };
  };
}
