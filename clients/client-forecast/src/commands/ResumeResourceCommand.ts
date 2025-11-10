// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ResumeResourceRequest } from "../models/models_0";
import { ResumeResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeResourceCommand}.
 */
export interface ResumeResourceCommandInput extends ResumeResourceRequest {}
/**
 * @public
 *
 * The output of {@link ResumeResourceCommand}.
 */
export interface ResumeResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Resumes a stopped monitor resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ResumeResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ResumeResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ResumeResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ResumeResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeResourceCommandInput - {@link ResumeResourceCommandInput}
 * @returns {@link ResumeResourceCommandOutput}
 * @see {@link ResumeResourceCommandInput} for command's `input` shape.
 * @see {@link ResumeResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
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
export class ResumeResourceCommand extends $Command
  .classBuilder<
    ResumeResourceCommandInput,
    ResumeResourceCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ResumeResource", {})
  .n("ForecastClient", "ResumeResourceCommand")
  .sc(ResumeResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeResourceRequest;
      output: {};
    };
    sdk: {
      input: ResumeResourceCommandInput;
      output: ResumeResourceCommandOutput;
    };
  };
}
