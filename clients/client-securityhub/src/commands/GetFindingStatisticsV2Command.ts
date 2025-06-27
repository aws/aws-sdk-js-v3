// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingStatisticsV2Request, GetFindingStatisticsV2Response } from "../models/models_3";
import { de_GetFindingStatisticsV2Command, se_GetFindingStatisticsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingStatisticsV2Command}.
 */
export interface GetFindingStatisticsV2CommandInput extends GetFindingStatisticsV2Request {}
/**
 * @public
 *
 * The output of {@link GetFindingStatisticsV2Command}.
 */
export interface GetFindingStatisticsV2CommandOutput extends GetFindingStatisticsV2Response, __MetadataBearer {}

/**
 * <p>Returns aggregated statistical data about findings.
 *          <code>GetFindingStatisticsV2</code> use <code>securityhub:GetAdhocInsightResults</code> in the <code>Action</code> element of an IAM policy statement.
 *          You must have permission to perform the <code>s</code> action. This API is in private preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingStatisticsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingStatisticsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingStatisticsV2Request
 *   GroupByRules: [ // GroupByRules // required
 *     { // GroupByRule
 *       Filters: { // OcsfFindingFilters
 *         CompositeFilters: [ // CompositeFilterList
 *           { // CompositeFilter
 *             StringFilters: [ // OcsfStringFilterList
 *               { // OcsfStringFilter
 *                 FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name",
 *                 Filter: { // StringFilter
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [ // OcsfDateFilterList
 *               { // OcsfDateFilter
 *                 FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt",
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
 *             BooleanFilters: [ // OcsfBooleanFilterList
 *               { // OcsfBooleanFilter
 *                 FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *                 Filter: { // BooleanFilter
 *                   Value: true || false,
 *                 },
 *               },
 *             ],
 *             NumberFilters: [ // OcsfNumberFilterList
 *               { // OcsfNumberFilter
 *                 FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count",
 *                 Filter: { // NumberFilter
 *                   Gte: Number("double"),
 *                   Lte: Number("double"),
 *                   Eq: Number("double"),
 *                   Gt: Number("double"),
 *                   Lt: Number("double"),
 *                 },
 *               },
 *             ],
 *             MapFilters: [ // OcsfMapFilterList
 *               { // OcsfMapFilter
 *                 FieldName: "resources.tags",
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
 *       GroupByField: "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.name" || "compliance.status" || "compliance.control" || "finding_info.title" || "finding_info.types" || "metadata.product.name" || "metadata.product.uid" || "resources.type" || "resources.uid" || "severity" || "status" || "vulnerabilities.fix_coverage" || "class_name", // required
 *     },
 *   ],
 *   SortOrder: "asc" || "desc",
 *   MaxStatisticResults: Number("int"),
 * };
 * const command = new GetFindingStatisticsV2Command(input);
 * const response = await client.send(command);
 * // { // GetFindingStatisticsV2Response
 * //   GroupByResults: [ // GroupByResults
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
 * @param GetFindingStatisticsV2CommandInput - {@link GetFindingStatisticsV2CommandInput}
 * @returns {@link GetFindingStatisticsV2CommandOutput}
 * @see {@link GetFindingStatisticsV2CommandInput} for command's `input` shape.
 * @see {@link GetFindingStatisticsV2CommandOutput} for command's `response` shape.
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
export class GetFindingStatisticsV2Command extends $Command
  .classBuilder<
    GetFindingStatisticsV2CommandInput,
    GetFindingStatisticsV2CommandOutput,
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
  .s("SecurityHubAPIService", "GetFindingStatisticsV2", {})
  .n("SecurityHubClient", "GetFindingStatisticsV2Command")
  .f(void 0, void 0)
  .ser(se_GetFindingStatisticsV2Command)
  .de(de_GetFindingStatisticsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingStatisticsV2Request;
      output: GetFindingStatisticsV2Response;
    };
    sdk: {
      input: GetFindingStatisticsV2CommandInput;
      output: GetFindingStatisticsV2CommandOutput;
    };
  };
}
