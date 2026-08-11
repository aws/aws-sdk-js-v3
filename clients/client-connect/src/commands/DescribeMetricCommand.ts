// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMetricRequest, DescribeMetricResponse } from "../models/models_1";
import { DescribeMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetricCommand}.
 */
export interface DescribeMetricCommandInput extends DescribeMetricRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricCommand}.
 */
export interface DescribeMetricCommandOutput extends DescribeMetricResponse, __MetadataBearer {}

/**
 * <p>Retrieves the full definition of an existing metric from the specified Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeMetricCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeMetricCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeMetricRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MetricId: "STRING_VALUE", // required
 * };
 * const command = new DescribeMetricCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricResponse
 * //   Metric: { // MetricDefinition
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     MetricCalculation: { // MetricCalculation
 * //       CalculationComponents: [ // CalculationComponentList // required
 * //         { // CalculationComponent
 * //           Alias: "STRING_VALUE", // required
 * //           MetricName: "STRING_VALUE",
 * //           MetricId: "STRING_VALUE",
 * //           MetricFilters: [ // MetricFilterList
 * //             { // MetricFilter
 * //               MetricFilterKey: "STRING_VALUE", // required
 * //               Negate: true || false,
 * //               NumberCondition: { // MetricFilterNumberCondition
 * //                 Comparison: "LESSER" || "LESSER_OR_EQUAL" || "GREATER" || "GREATER_OR_EQUAL", // required
 * //                 Values: [ // NumberValueList // required
 * //                   Number("double"),
 * //                 ],
 * //               },
 * //               StringCondition: { // MetricFilterStringCondition
 * //                 Comparison: "MATCHES_ANY" || "MATCHES_NONE", // required
 * //                 Values: [ // StringValueList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               BooleanCondition: { // MetricFilterBooleanCondition
 * //                 Comparison: "IS_TRUE" || "IS_FALSE", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Calculation: "STRING_VALUE", // required
 * //     },
 * //     CreationMethod: "SERVICE_LEVEL_BUILDER" || "METRIC_BUILDER",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Type: "AWS_MANAGED" || "CUSTOMER_MANAGED", // required
 * //     Unit: "INTEGER" || "DOUBLE" || "PERCENT" || "SECONDS", // required
 * //     PositiveTrendIndicator: "POSITIVE" || "NEGATIVE" || "NEUTRAL",
 * //     Groupings: [ // MetricGroupingList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Filters: [ // AvailableFilterList // required
 * //       { // AvailableFilter
 * //         Id: "STRING_VALUE",
 * //         Type: "METRIC_LEVEL" || "RESOURCE_LEVEL",
 * //       },
 * //     ],
 * //     EffectiveTime: new Date("TIMESTAMP"),
 * //     RefreshRate: Number("long"),
 * //     Category: "STRING_VALUE", // required
 * //     SupportedStats: [ // SupportedStatsList
 * //       "STRING_VALUE",
 * //     ],
 * //     DefaultStat: "STRING_VALUE",
 * //     SupportsPreaggregateCalculation: true || false, // required
 * //     SupportsCustomCalculation: true || false, // required
 * //     PrimaryEventSource: "STRING_VALUE",
 * //     PrimaryEventSourceEffectiveTimestampType: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     CreatedUser: { // CreatedByInfo Union: only one key present
 * //       ConnectUserArn: "STRING_VALUE",
 * //       AWSIdentityArn: "STRING_VALUE",
 * //     },
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedUser: {//  Union: only one key present
 * //       ConnectUserArn: "STRING_VALUE",
 * //       AWSIdentityArn: "STRING_VALUE",
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMetricCommandInput - {@link DescribeMetricCommandInput}
 * @returns {@link DescribeMetricCommandOutput}
 * @see {@link DescribeMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeMetricCommand extends command<DescribeMetricCommandInput, DescribeMetricCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetric",
  DescribeMetric$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetricRequest;
      output: DescribeMetricResponse;
    };
    sdk: {
      input: DescribeMetricCommandInput;
      output: DescribeMetricCommandOutput;
    };
  };
}
