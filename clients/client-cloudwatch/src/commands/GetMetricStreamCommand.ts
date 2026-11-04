// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMetricStreamInput, GetMetricStreamOutput } from "../models/models_0";
import { GetMetricStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about the metric stream that you specify.
 *
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
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Parameters were used together that cannot be used together.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The named resource does not exist.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class GetMetricStreamCommand extends command<GetMetricStreamCommandInput, GetMetricStreamCommandOutput>(
  _ep0,
  _mw0,
  "GetMetricStream",
  GetMetricStream$
) {
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
