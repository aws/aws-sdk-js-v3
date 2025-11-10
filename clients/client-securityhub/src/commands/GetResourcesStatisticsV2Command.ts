// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcesStatisticsV2Request, GetResourcesStatisticsV2Response } from "../models/models_3";
import { GetResourcesStatisticsV2 } from "../schemas/schemas_0";
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
 * <p>Retrieves statistical information about Amazon Web Services resources and their associated security findings. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetResourcesStatisticsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetResourcesStatisticsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetResourcesStatisticsV2Request
 *   GroupByRules: [ // ResourceGroupByRules // required
 *     { // ResourceGroupByRule
 *       GroupByField: "AccountId" || "Region" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType", // required
 *       Filters: { // ResourcesFilters
 *         CompositeFilters: [ // ResourcesCompositeFilterList
 *           { // ResourcesCompositeFilter
 *             StringFilters: [ // ResourcesStringFilterList
 *               { // ResourcesStringFilter
 *                 FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "Region" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
 *                 Filter: { // StringFilter
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [ // ResourcesDateFilterList
 *               { // ResourcesDateFilter
 *                 FieldName: "ResourceDetailCaptureTime" || "ResourceCreationTime",
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
 *                 FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown",
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
 *                 FieldName: "ResourceTags",
 *                 Filter: { // MapFilter
 *                   Key: "STRING_VALUE",
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: [
 *               {
 *                 StringFilters: [
 *                   {
 *                     FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "Region" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
 *                     Filter: {
 *                       Value: "STRING_VALUE",
 *                       Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                     },
 *                   },
 *                 ],
 *                 DateFilters: [
 *                   {
 *                     FieldName: "ResourceDetailCaptureTime" || "ResourceCreationTime",
 *                     Filter: {
 *                       Start: "STRING_VALUE",
 *                       End: "STRING_VALUE",
 *                       DateRange: {
 *                         Value: Number("int"),
 *                         Unit: "DAYS",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 NumberFilters: [
 *                   {
 *                     FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown",
 *                     Filter: {
 *                       Gte: Number("double"),
 *                       Lte: Number("double"),
 *                       Eq: Number("double"),
 *                       Gt: Number("double"),
 *                       Lt: Number("double"),
 *                     },
 *                   },
 *                 ],
 *                 MapFilters: [
 *                   {
 *                     FieldName: "ResourceTags",
 *                     Filter: {
 *                       Key: "STRING_VALUE",
 *                       Value: "STRING_VALUE",
 *                       Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                     },
 *                   },
 *                 ],
 *                 NestedCompositeFilters: "<ResourcesCompositeFilterList>",
 *                 Operator: "AND" || "OR",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetResourcesStatisticsV2", {})
  .n("SecurityHubClient", "GetResourcesStatisticsV2Command")
  .sc(GetResourcesStatisticsV2)
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
