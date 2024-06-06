// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_GetSolutionMetricsCommand, se_GetSolutionMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolutionMetricsCommand}.
 */
export interface GetSolutionMetricsCommandInput extends GetSolutionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetSolutionMetricsCommand}.
 */
export interface GetSolutionMetricsCommandOutput extends GetSolutionMetricsResponse, __MetadataBearer {}

/**
 * <p>Gets the metrics for the specified solution version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, GetSolutionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, GetSolutionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // GetSolutionMetricsRequest
 *   solutionVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSolutionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetSolutionMetricsResponse
 * //   solutionVersionArn: "STRING_VALUE",
 * //   metrics: { // Metrics
 * //     "<keys>": Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolutionMetricsCommandInput - {@link GetSolutionMetricsCommandInput}
 * @returns {@link GetSolutionMetricsCommandOutput}
 * @see {@link GetSolutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetSolutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class GetSolutionMetricsCommand extends $Command
  .classBuilder<
    GetSolutionMetricsCommandInput,
    GetSolutionMetricsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "GetSolutionMetrics", {})
  .n("PersonalizeClient", "GetSolutionMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetSolutionMetricsCommand)
  .de(de_GetSolutionMetricsCommand)
  .build() {}
