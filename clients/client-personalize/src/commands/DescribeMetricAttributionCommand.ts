// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMetricAttributionRequest, DescribeMetricAttributionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeMetricAttribution } from "../schemas/schemas_2_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricAttributionCommand}.
 */
export interface DescribeMetricAttributionCommandInput extends DescribeMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricAttributionCommand}.
 */
export interface DescribeMetricAttributionCommandOutput extends DescribeMetricAttributionResponse, __MetadataBearer {}

/**
 * <p>Describes a metric attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeMetricAttributionRequest
 *   metricAttributionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricAttributionResponse
 * //   metricAttribution: { // MetricAttribution
 * //     name: "STRING_VALUE",
 * //     metricAttributionArn: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     metricsOutputConfig: { // MetricAttributionOutput
 * //       s3DataDestination: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMetricAttributionCommandInput - {@link DescribeMetricAttributionCommandInput}
 * @returns {@link DescribeMetricAttributionCommandOutput}
 * @see {@link DescribeMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricAttributionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
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
export class DescribeMetricAttributionCommand extends $Command
  .classBuilder<
    DescribeMetricAttributionCommandInput,
    DescribeMetricAttributionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeMetricAttribution", {})
  .n("PersonalizeClient", "DescribeMetricAttributionCommand")
  .sc(DescribeMetricAttribution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetricAttributionRequest;
      output: DescribeMetricAttributionResponse;
    };
    sdk: {
      input: DescribeMetricAttributionCommandInput;
      output: DescribeMetricAttributionCommandOutput;
    };
  };
}
