// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchMetricsResponse } from "../models/models_3";
import type { SearchMetricsRequest } from "../models/models_4";
import { SearchMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchMetricsCommand}.
 */
export interface SearchMetricsCommandInput extends SearchMetricsRequest {}
/**
 * @public
 *
 * The output of {@link SearchMetricsCommand}.
 */
export interface SearchMetricsCommandOutput extends SearchMetricsResponse, __MetadataBearer {}

/**
 * <p>Searches for metrics in the specified Connect Customer instance using search criteria and optional tag-based filters. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchMetricsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchMetricsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchMetricsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // MetricSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // MetricSearchCriteria
 *     OrConditions: [ // MetricSearchConditionList
 *       {
 *         OrConditions: [
 *           "<MetricSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<MetricSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         BooleanCondition: { // BooleanCondition
 *           FieldName: "STRING_VALUE",
 *           ComparisonType: "IS_TRUE" || "IS_FALSE",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<MetricSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     BooleanCondition: {
 *       FieldName: "STRING_VALUE",
 *       ComparisonType: "IS_TRUE" || "IS_FALSE",
 *     },
 *   },
 * };
 * const command = new SearchMetricsCommand(input);
 * const response = await client.send(command);
 * // { // SearchMetricsResponse
 * //   Metrics: [ // MetricSearchSummaryList
 * //     { // MetricDefinition
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       MetricCalculation: { // MetricCalculation
 * //         CalculationComponents: [ // CalculationComponentList // required
 * //           { // CalculationComponent
 * //             Alias: "STRING_VALUE", // required
 * //             MetricName: "STRING_VALUE",
 * //             MetricId: "STRING_VALUE",
 * //             MetricFilters: [ // MetricFilterList
 * //               { // MetricFilter
 * //                 MetricFilterKey: "STRING_VALUE", // required
 * //                 Negate: true || false,
 * //                 NumberCondition: { // MetricFilterNumberCondition
 * //                   Comparison: "LESSER" || "LESSER_OR_EQUAL" || "GREATER" || "GREATER_OR_EQUAL", // required
 * //                   Values: [ // NumberValueList // required
 * //                     Number("double"),
 * //                   ],
 * //                 },
 * //                 StringCondition: { // MetricFilterStringCondition
 * //                   Comparison: "MATCHES_ANY" || "MATCHES_NONE", // required
 * //                   Values: [ // StringValueList // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 BooleanCondition: { // MetricFilterBooleanCondition
 * //                   Comparison: "IS_TRUE" || "IS_FALSE", // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Calculation: "STRING_VALUE", // required
 * //       },
 * //       CreationMethod: "SERVICE_LEVEL_BUILDER" || "METRIC_BUILDER",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       Type: "AWS_MANAGED" || "CUSTOMER_MANAGED", // required
 * //       Unit: "INTEGER" || "DOUBLE" || "PERCENT" || "SECONDS", // required
 * //       PositiveTrendIndicator: "POSITIVE" || "NEGATIVE" || "NEUTRAL",
 * //       Groupings: [ // MetricGroupingList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Filters: [ // AvailableFilterList // required
 * //         { // AvailableFilter
 * //           Id: "STRING_VALUE",
 * //           Type: "METRIC_LEVEL" || "RESOURCE_LEVEL",
 * //         },
 * //       ],
 * //       EffectiveTime: new Date("TIMESTAMP"),
 * //       RefreshRate: Number("long"),
 * //       Category: "STRING_VALUE", // required
 * //       SupportedStats: [ // SupportedStatsList
 * //         "STRING_VALUE",
 * //       ],
 * //       DefaultStat: "STRING_VALUE",
 * //       SupportsPreaggregateCalculation: true || false, // required
 * //       SupportsCustomCalculation: true || false, // required
 * //       PrimaryEventSource: "STRING_VALUE",
 * //       PrimaryEventSourceEffectiveTimestampType: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       CreatedUser: { // CreatedByInfo Union: only one key present
 * //         ConnectUserArn: "STRING_VALUE",
 * //         AWSIdentityArn: "STRING_VALUE",
 * //       },
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedUser: {//  Union: only one key present
 * //         ConnectUserArn: "STRING_VALUE",
 * //         AWSIdentityArn: "STRING_VALUE",
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchMetricsCommandInput - {@link SearchMetricsCommandInput}
 * @returns {@link SearchMetricsCommandOutput}
 * @see {@link SearchMetricsCommandInput} for command's `input` shape.
 * @see {@link SearchMetricsCommandOutput} for command's `response` shape.
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
export class SearchMetricsCommand extends command<SearchMetricsCommandInput, SearchMetricsCommandOutput>(
  _ep0,
  _mw0,
  "SearchMetrics",
  SearchMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchMetricsRequest;
      output: SearchMetricsResponse;
    };
    sdk: {
      input: SearchMetricsCommandInput;
      output: SearchMetricsCommandOutput;
    };
  };
}
