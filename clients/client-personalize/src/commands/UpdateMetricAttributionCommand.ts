// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMetricAttributionRequest, UpdateMetricAttributionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_UpdateMetricAttributionCommand, se_UpdateMetricAttributionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMetricAttributionCommand}.
 */
export interface UpdateMetricAttributionCommandInput extends UpdateMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMetricAttributionCommand}.
 */
export interface UpdateMetricAttributionCommandOutput extends UpdateMetricAttributionResponse, __MetadataBearer {}

/**
 * <p>Updates a metric attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateMetricAttributionRequest
 *   addMetrics: [ // MetricAttributes
 *     { // MetricAttribute
 *       eventType: "STRING_VALUE", // required
 *       metricName: "STRING_VALUE", // required
 *       expression: "STRING_VALUE", // required
 *     },
 *   ],
 *   removeMetrics: [ // MetricAttributesNamesList
 *     "STRING_VALUE",
 *   ],
 *   metricsOutputConfig: { // MetricAttributionOutput
 *     s3DataDestination: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   metricAttributionArn: "STRING_VALUE",
 * };
 * const command = new UpdateMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMetricAttributionResponse
 * //   metricAttributionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMetricAttributionCommandInput - {@link UpdateMetricAttributionCommandInput}
 * @returns {@link UpdateMetricAttributionCommandOutput}
 * @see {@link UpdateMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link UpdateMetricAttributionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class UpdateMetricAttributionCommand extends $Command
  .classBuilder<
    UpdateMetricAttributionCommandInput,
    UpdateMetricAttributionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "UpdateMetricAttribution", {})
  .n("PersonalizeClient", "UpdateMetricAttributionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMetricAttributionCommand)
  .de(de_UpdateMetricAttributionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMetricAttributionRequest;
      output: UpdateMetricAttributionResponse;
    };
    sdk: {
      input: UpdateMetricAttributionCommandInput;
      output: UpdateMetricAttributionCommandOutput;
    };
  };
}
