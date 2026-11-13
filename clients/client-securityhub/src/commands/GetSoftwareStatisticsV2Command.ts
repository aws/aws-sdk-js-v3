// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSoftwareStatisticsV2Request, GetSoftwareStatisticsV2Response } from "../models/models_3";
import { GetSoftwareStatisticsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSoftwareStatisticsV2Command}.
 */
export interface GetSoftwareStatisticsV2CommandInput extends GetSoftwareStatisticsV2Request {}
/**
 * @public
 *
 * The output of {@link GetSoftwareStatisticsV2Command}.
 */
export interface GetSoftwareStatisticsV2CommandOutput extends GetSoftwareStatisticsV2Response, __MetadataBearer {}

/**
 * <p>Retrieves aggregated counts of software packages installed on your resources, grouped by a field that you specify. For example, you can return the most common package types or the accounts with the most installed packages.</p>
 *          <p>Each count is the number of package-to-resource pairs that match the grouping value. A package installed on three resources contributes three to the count.</p>
 *          <p>You can use the <code>Scopes</code> parameter to define the data boundary for the query. Currently, <code>Scopes</code> supports <code>AwsOrganizations</code>. With <code>AwsOrganizations</code>, you can aggregate software from your entire organization or from specific organizational units. Only the delegated administrator account can use <code>Scopes</code>.</p>
 *          <p>This operation doesn't paginate. Use <code>MaxStatisticResults</code> to control how many grouping values are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetSoftwareStatisticsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetSoftwareStatisticsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetSoftwareStatisticsV2Request
 *   GroupByRules: [ // SoftwareGroupByRules // required
 *     { // SoftwareGroupByRule
 *       GroupByField: "AccountId" || "PackageName" || "PackageVersion" || "PackageType" || "Region" || "ResourceRegion" || "ResourceType" || "ResourceId" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition", // required
 *       Filters: { // SoftwareFilters
 *         CompositeFilters: [ // SoftwareCompositeFilterList
 *           { // SoftwareCompositeFilter
 *             StringFilters: [ // SoftwareStringFilterList
 *               { // SoftwareStringFilter
 *                 FieldName: "AccountId" || "PackageName" || "PackageVersion" || "PackageType" || "Region" || "ResourceRegion" || "ResourceType" || "ResourceId" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition",
 *                 Filter: { // StringFilter
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: [
 *               {
 *                 StringFilters: [
 *                   {
 *                     FieldName: "AccountId" || "PackageName" || "PackageVersion" || "PackageType" || "Region" || "ResourceRegion" || "ResourceType" || "ResourceId" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition",
 *                     Filter: {
 *                       Value: "STRING_VALUE",
 *                       Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                     },
 *                   },
 *                 ],
 *                 NestedCompositeFilters: "<SoftwareCompositeFilterList>",
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
 *   Scopes: { // SoftwareScopes
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
 * const command = new GetSoftwareStatisticsV2Command(input);
 * const response = await client.send(command);
 * // { // GetSoftwareStatisticsV2Response
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
 * @param GetSoftwareStatisticsV2CommandInput - {@link GetSoftwareStatisticsV2CommandInput}
 * @returns {@link GetSoftwareStatisticsV2CommandOutput}
 * @see {@link GetSoftwareStatisticsV2CommandInput} for command's `input` shape.
 * @see {@link GetSoftwareStatisticsV2CommandOutput} for command's `response` shape.
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
export class GetSoftwareStatisticsV2Command extends command<GetSoftwareStatisticsV2CommandInput, GetSoftwareStatisticsV2CommandOutput>(
  _ep0,
  _mw0,
  "GetSoftwareStatisticsV2",
  GetSoftwareStatisticsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSoftwareStatisticsV2Request;
      output: GetSoftwareStatisticsV2Response;
    };
    sdk: {
      input: GetSoftwareStatisticsV2CommandInput;
      output: GetSoftwareStatisticsV2CommandOutput;
    };
  };
}
