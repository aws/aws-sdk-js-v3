// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMetricAttributionRequest, CreateMetricAttributionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateMetricAttribution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMetricAttributionCommand}.
 */
export interface CreateMetricAttributionCommandInput extends CreateMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetricAttributionCommand}.
 */
export interface CreateMetricAttributionCommandOutput extends CreateMetricAttributionResponse, __MetadataBearer {}

/**
 * <p>Creates a metric attribution.
 *       A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3.
 *       For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateMetricAttributionRequest
 *   name: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
 *   metrics: [ // MetricAttributes // required
 *     { // MetricAttribute
 *       eventType: "STRING_VALUE", // required
 *       metricName: "STRING_VALUE", // required
 *       expression: "STRING_VALUE", // required
 *     },
 *   ],
 *   metricsOutputConfig: { // MetricAttributionOutput
 *     s3DataDestination: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetricAttributionResponse
 * //   metricAttributionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMetricAttributionCommandInput - {@link CreateMetricAttributionCommandInput}
 * @returns {@link CreateMetricAttributionCommandOutput}
 * @see {@link CreateMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link CreateMetricAttributionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
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
 *
 * @public
 */
export class CreateMetricAttributionCommand extends $Command
  .classBuilder<
    CreateMetricAttributionCommandInput,
    CreateMetricAttributionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateMetricAttribution", {})
  .n("PersonalizeClient", "CreateMetricAttributionCommand")
  .sc(CreateMetricAttribution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMetricAttributionRequest;
      output: CreateMetricAttributionResponse;
    };
    sdk: {
      input: CreateMetricAttributionCommandInput;
      output: CreateMetricAttributionCommandOutput;
    };
  };
}
