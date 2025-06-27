// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcesStatisticsV2Request, GetResourcesStatisticsV2Response } from "../models/models_3";
import { de_GetResourcesStatisticsV2Command, se_GetResourcesStatisticsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesStatisticsV2Command}.
 */
export interface GetResourcesStatisticsV2CommandInput extends GetResourcesStatisticsV2Request {}
/**
 * @public
 *
 * The output of {@link GetResourcesStatisticsV2Command}.
 */
export interface GetResourcesStatisticsV2CommandOutput extends GetResourcesStatisticsV2Response, __MetadataBearer {}

/**
 * <p>Retrieves statistical information about Amazon Web Services resources and their associated security findings. This API is in private preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetResourcesStatisticsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetResourcesStatisticsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetResourcesStatisticsV2Request
 *   GroupByRules: [ // ResourceGroupByRules // required
 *     { // ResourceGroupByRule
 *       GroupByField: "account_id" || "region" || "resource_category" || "resource_type" || "resource_name" || "findings_summary.finding_type", // required
 *       Filters: { // ResourcesFilters
 *         CompositeFilters: [ // ResourcesCompositeFilterList
 *           { // ResourcesCompositeFilter
 *             StringFilters: [ // ResourcesStringFilterList
 *               { // ResourcesStringFilter
 *                 FieldName: "resource_arn" || "resource_id" || "account_id" || "region" || "resource_category" || "resource_type" || "resource_name" || "findings_summary.finding_type" || "findings_summary.product_name",
 *                 Filter: { // StringFilter
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [ // ResourcesDateFilterList
 *               { // ResourcesDateFilter
 *                 FieldName: "resource_detail_capture_time_dt" || "resource_creation_time_dt",
 *                 Filter: { // DateFilter
 *                   Start: "STRING_VALUE",
 *                   End: "STRING_VALUE",
 *                   DateRange: { // DateRange
 *                     Value: Number("int"),
 *                     Unit: "DAYS",
 *                   },
 *                 },
 *               },
 *             ],
 *             NumberFilters: [ // ResourcesNumberFilterList
 *               { // ResourcesNumberFilter
 *                 FieldName: "findings_summary.total_findings" || "findings_summary.severities.other" || "findings_summary.severities.fatal" || "findings_summary.severities.critical" || "findings_summary.severities.high" || "findings_summary.severities.medium" || "findings_summary.severities.low" || "findings_summary.severities.informational" || "findings_summary.severities.unknown",
 *                 Filter: { // NumberFilter
 *                   Gte: Number("double"),
 *                   Lte: Number("double"),
 *                   Eq: Number("double"),
 *                   Gt: Number("double"),
 *                   Lt: Number("double"),
 *                 },
 *               },
 *             ],
 *             MapFilters: [ // ResourcesMapFilterList
 *               { // ResourcesMapFilter
 *                 FieldName: "tags",
 *                 Filter: { // MapFilter
 *                   Key: "STRING_VALUE",
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                 },
 *               },
 *             ],
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         CompositeOperator: "AND" || "OR",
 *       },
 *     },
 *   ],
 *   SortOrder: "asc" || "desc",
 *   MaxStatisticResults: Number("int"),
 * };
 * const command = new GetResourcesStatisticsV2Command(input);
 * const response = await client.send(command);
 * // { // GetResourcesStatisticsV2Response
 * //   GroupByResults: [ // GroupByResults // required
 * //     { // GroupByResult
 * //       GroupByField: "STRING_VALUE",
 * //       GroupByValues: [ // GroupByValues
 * //         { // GroupByValue
 * //           FieldValue: "STRING_VALUE",
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResourcesStatisticsV2CommandInput - {@link GetResourcesStatisticsV2CommandInput}
 * @returns {@link GetResourcesStatisticsV2CommandOutput}
 * @see {@link GetResourcesStatisticsV2CommandInput} for command's `input` shape.
 * @see {@link GetResourcesStatisticsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GetResourcesStatisticsV2Command extends $Command
  .classBuilder<
    GetResourcesStatisticsV2CommandInput,
    GetResourcesStatisticsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetResourcesStatisticsV2", {})
  .n("SecurityHubClient", "GetResourcesStatisticsV2Command")
  .f(void 0, void 0)
  .ser(se_GetResourcesStatisticsV2Command)
  .de(de_GetResourcesStatisticsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesStatisticsV2Request;
      output: GetResourcesStatisticsV2Response;
    };
    sdk: {
      input: GetResourcesStatisticsV2CommandInput;
      output: GetResourcesStatisticsV2CommandOutput;
    };
  };
}
