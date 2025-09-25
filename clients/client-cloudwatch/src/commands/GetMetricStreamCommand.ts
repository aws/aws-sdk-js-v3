// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetricStreamInput, GetMetricStreamOutput } from "../models/models_0";
import { GetMetricStream } from "../schemas/schemas_5_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricStreamCommand}.
 */
export interface GetMetricStreamCommandInput extends GetMetricStreamInput {}
/**
 * @public
 *
 * The output of {@link GetMetricStreamCommand}.
 */
export interface GetMetricStreamCommandOutput extends GetMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Returns information about the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricStreamInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMetricStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricStreamOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   IncludeFilters: [ // MetricStreamFilters
 * //     { // MetricStreamFilter
 * //       Namespace: "STRING_VALUE",
 * //       MetricNames: [ // MetricStreamFilterMetricNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ExcludeFilters: [
 * //     {
 * //       Namespace: "STRING_VALUE",
 * //       MetricNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   FirehoseArn: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastUpdateDate: new Date("TIMESTAMP"),
 * //   OutputFormat: "json" || "opentelemetry0.7" || "opentelemetry1.0",
 * //   StatisticsConfigurations: [ // MetricStreamStatisticsConfigurations
 * //     { // MetricStreamStatisticsConfiguration
 * //       IncludeMetrics: [ // MetricStreamStatisticsIncludeMetrics // required
 * //         { // MetricStreamStatisticsMetric
 * //           Namespace: "STRING_VALUE", // required
 * //           MetricName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AdditionalStatistics: [ // MetricStreamStatisticsAdditionalStatistics // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   IncludeLinkedAccountsMetrics: true || false,
 * // };
 *
 * ```
 *
 * @param GetMetricStreamCommandInput - {@link GetMetricStreamCommandInput}
 * @returns {@link GetMetricStreamCommandOutput}
 * @see {@link GetMetricStreamCommandInput} for command's `input` shape.
 * @see {@link GetMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetMetricStreamCommand extends $Command
  .classBuilder<
    GetMetricStreamCommandInput,
    GetMetricStreamCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "GetMetricStream", {})
  .n("CloudWatchClient", "GetMetricStreamCommand")
  .sc(GetMetricStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricStreamInput;
      output: GetMetricStreamOutput;
    };
    sdk: {
      input: GetMetricStreamCommandInput;
      output: GetMetricStreamCommandOutput;
    };
  };
}
