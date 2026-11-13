// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSoftwareV2Request, GetSoftwareV2Response } from "../models/models_3";
import { GetSoftwareV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSoftwareV2Command}.
 */
export interface GetSoftwareV2CommandInput extends GetSoftwareV2Request {}
/**
 * @public
 *
 * The output of {@link GetSoftwareV2Command}.
 */
export interface GetSoftwareV2CommandOutput extends GetSoftwareV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of software packages installed on your resources. Each result identifies a package by name, version, and type, and includes the number of resources that contain that package.</p>
 *          <p>You can use the <code>Scopes</code> parameter to define the data boundary for the query. Currently, <code>Scopes</code> supports <code>AwsOrganizations</code>. With <code>AwsOrganizations</code>, you can retrieve software from your entire organization or from specific organizational units. Only the delegated administrator account can use <code>Scopes</code>.</p>
 *          <p>You can use the <code>Filters</code> parameter to refine results based on package and resource attributes. You can use <code>Scopes</code> and <code>Filters</code> independently or together. When both are provided, <code>Scopes</code> narrows the data set first, and then <code>Filters</code> refines results within that scoped data set.</p>
 *          <p>To list the resources that contain a specific package, use <code>GetSoftwareResourcesV2</code>. To get counts of software grouped by a field, use <code>GetSoftwareStatisticsV2</code>.</p>
 *          <p>This operation returns paginated results. To retrieve additional results, use the <code>NextToken</code> value from the previous response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetSoftwareV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetSoftwareV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetSoftwareV2Request
 *   Filters: { // SoftwareFilters
 *     CompositeFilters: [ // SoftwareCompositeFilterList
 *       { // SoftwareCompositeFilter
 *         StringFilters: [ // SoftwareStringFilterList
 *           { // SoftwareStringFilter
 *             FieldName: "AccountId" || "PackageName" || "PackageVersion" || "PackageType" || "Region" || "ResourceRegion" || "ResourceType" || "ResourceId" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition",
 *             Filter: { // StringFilter
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *             },
 *           },
 *         ],
 *         NestedCompositeFilters: [
 *           {
 *             StringFilters: [
 *               {
 *                 FieldName: "AccountId" || "PackageName" || "PackageVersion" || "PackageType" || "Region" || "ResourceRegion" || "ResourceType" || "ResourceId" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition",
 *                 Filter: {
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: "<SoftwareCompositeFilterList>",
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         Operator: "AND" || "OR",
 *       },
 *     ],
 *     CompositeOperator: "AND" || "OR",
 *   },
 *   Scopes: { // SoftwareScopes
 *     AwsOrganizations: [ // AwsOrganizationScopeList
 *       { // AwsOrganizationScope
 *         OrganizationId: "STRING_VALUE",
 *         OrganizationalUnitId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       Field: "STRING_VALUE",
 *       SortOrder: "asc" || "desc",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetSoftwareV2Command(input);
 * const response = await client.send(command);
 * // { // GetSoftwareV2Response
 * //   Software: [ // SoftwareList // required
 * //     { // SoftwareResult
 * //       PackageName: "STRING_VALUE", // required
 * //       PackageVersion: "STRING_VALUE",
 * //       PackageType: "STRING_VALUE", // required
 * //       ResourceCount: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSoftwareV2CommandInput - {@link GetSoftwareV2CommandInput}
 * @returns {@link GetSoftwareV2CommandOutput}
 * @see {@link GetSoftwareV2CommandInput} for command's `input` shape.
 * @see {@link GetSoftwareV2CommandOutput} for command's `response` shape.
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
export class GetSoftwareV2Command extends command<GetSoftwareV2CommandInput, GetSoftwareV2CommandOutput>(
  _ep0,
  _mw0,
  "GetSoftwareV2",
  GetSoftwareV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSoftwareV2Request;
      output: GetSoftwareV2Response;
    };
    sdk: {
      input: GetSoftwareV2CommandInput;
      output: GetSoftwareV2CommandOutput;
    };
  };
}
