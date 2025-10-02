// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetricAttributionMetricsRequest, ListMetricAttributionMetricsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  de_ListMetricAttributionMetricsCommand,
  se_ListMetricAttributionMetricsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricAttributionMetricsCommand}.
 */
export interface ListMetricAttributionMetricsCommandInput extends ListMetricAttributionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricAttributionMetricsCommand}.
 */
export interface ListMetricAttributionMetricsCommandOutput
  extends ListMetricAttributionMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the metrics for the metric attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListMetricAttributionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListMetricAttributionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListMetricAttributionMetricsRequest
 *   metricAttributionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMetricAttributionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricAttributionMetricsResponse
 * //   metrics: [ // MetricAttributes
 * //     { // MetricAttribute
 * //       eventType: "STRING_VALUE", // required
 * //       metricName: "STRING_VALUE", // required
 * //       expression: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricAttributionMetricsCommandInput - {@link ListMetricAttributionMetricsCommandInput}
 * @returns {@link ListMetricAttributionMetricsCommandOutput}
 * @see {@link ListMetricAttributionMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricAttributionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListMetricAttributionMetricsCommand extends $Command
  .classBuilder<
    ListMetricAttributionMetricsCommandInput,
    ListMetricAttributionMetricsCommandOutput,
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
  .s("AmazonPersonalize", "ListMetricAttributionMetrics", {})
  .n("PersonalizeClient", "ListMetricAttributionMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetricAttributionMetricsCommand)
  .de(de_ListMetricAttributionMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricAttributionMetricsRequest;
      output: ListMetricAttributionMetricsResponse;
    };
    sdk: {
      input: ListMetricAttributionMetricsCommandInput;
      output: ListMetricAttributionMetricsCommandOutput;
    };
  };
}
