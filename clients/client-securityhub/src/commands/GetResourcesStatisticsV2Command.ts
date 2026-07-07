// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcesStatisticsV2Response } from "../models/models_2";
import type { GetResourcesStatisticsV2Request } from "../models/models_3";
import { GetResourcesStatisticsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Retrieves statistical information about Amazon Web Services resources and their associated security findings.</p>
 *          <p>You can use the <code>Scopes</code> parameter to define the data boundary for the query. Currently, <code>Scopes</code> supports <code>AwsOrganizations</code>, which lets you aggregate resources from your entire organization or from specific organizational units. Only the delegated administrator account can use <code>Scopes</code>.</p>
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
 *       GroupByField: "AccountId" || "AccountName" || "Region" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition" || "ResourceRegion" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType", // required
 *       Filters: { // ResourcesFilters
 *         CompositeFilters: [ // ResourcesCompositeFilterList
 *           { // ResourcesCompositeFilter
 *             StringFilters: [ // ResourcesStringFilterList
 *               { // ResourcesStringFilter
 *                 FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "AccountName" || "Region" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition" || "ResourceRegion" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
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
 *                     Comparison: "WITHIN" || "OLDER_THAN",
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
 *                     FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "AccountName" || "Region" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition" || "ResourceRegion" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
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
 *                         Comparison: "WITHIN" || "OLDER_THAN",
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
 *   Scopes: { // ResourceScopes
 *     AwsOrganizations: [ // AwsOrganizationScopeList
 *       { // AwsOrganizationScope
 *         OrganizationId: "STRING_VALUE",
 *         OrganizationalUnitId: "STRING_VALUE",
 *       },
 *     ],
 *   },
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
 * @throws {@link OrganizationalUnitNotFoundException} (client fault)
 *  <p>The request failed because one or more organizational units specified in the request don't exist within the caller's organization.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>The request failed because one or more organizations specified in the request don't exist or don't belong to the caller's organization.</p>
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
export class GetResourcesStatisticsV2Command extends command<GetResourcesStatisticsV2CommandInput, GetResourcesStatisticsV2CommandOutput>(
  _ep0,
  _mw0,
  "GetResourcesStatisticsV2",
  GetResourcesStatisticsV2$
) {
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
