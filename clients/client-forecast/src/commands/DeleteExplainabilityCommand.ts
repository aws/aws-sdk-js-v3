// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteExplainabilityRequest } from "../models/models_0";
import { de_DeleteExplainabilityCommand, se_DeleteExplainabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExplainabilityCommand}.
 */
export interface DeleteExplainabilityCommandInput extends DeleteExplainabilityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExplainabilityCommand}.
 */
export interface DeleteExplainabilityCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Explainability resource.</p>
 *          <p>You can delete only predictor that have a status of <code>ACTIVE</code> or
 *                 <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteExplainabilityRequest
 *   ExplainabilityArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteExplainabilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExplainabilityCommandInput - {@link DeleteExplainabilityCommandInput}
 * @returns {@link DeleteExplainabilityCommandOutput}
 * @see {@link DeleteExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DeleteExplainabilityCommandOutput} for command's `response` shape.
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
export class DeleteExplainabilityCommand extends $Command
  .classBuilder<
    DeleteExplainabilityCommandInput,
    DeleteExplainabilityCommandOutput,
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
  .s("AmazonForecast", "DeleteExplainability", {})
  .n("ForecastClient", "DeleteExplainabilityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteExplainabilityCommand)
  .de(de_DeleteExplainabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExplainabilityRequest;
      output: {};
    };
    sdk: {
      input: DeleteExplainabilityCommandInput;
      output: DeleteExplainabilityCommandOutput;
    };
  };
}
