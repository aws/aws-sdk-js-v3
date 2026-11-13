// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSoftwareResourcesV2Request, GetSoftwareResourcesV2Response } from "../models/models_3";
import { GetSoftwareResourcesV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSoftwareResourcesV2Command}.
 */
export interface GetSoftwareResourcesV2CommandInput extends GetSoftwareResourcesV2Request {}
/**
 * @public
 *
 * The output of {@link GetSoftwareResourcesV2Command}.
 */
export interface GetSoftwareResourcesV2CommandOutput extends GetSoftwareResourcesV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of resources that contain a specific software package. You identify the package with <code>PackageName</code> and <code>PackageType</code>. To narrow the results to one version of the package, include <code>PackageVersion</code>.</p>
 *          <p>You can use the <code>Scopes</code> parameter to define the data boundary for the query. Currently, <code>Scopes</code> supports <code>AwsOrganizations</code>. With <code>AwsOrganizations</code>, you can retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use <code>Scopes</code>.</p>
 *          <p>You can use the <code>Filters</code> parameter to further refine results based on resource attributes, such as <code>ResourceType</code> or <code>Region</code>.</p>
 *          <p>This operation returns paginated results. To retrieve additional results, use the <code>NextToken</code> value from the previous response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetSoftwareResourcesV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetSoftwareResourcesV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetSoftwareResourcesV2Request
 *   PackageName: "STRING_VALUE", // required
 *   PackageType: "STRING_VALUE", // required
 *   PackageVersion: "STRING_VALUE",
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
 * const command = new GetSoftwareResourcesV2Command(input);
 * const response = await client.send(command);
 * // { // GetSoftwareResourcesV2Response
 * //   SoftwareResources: [ // SoftwareResourceResultList // required
 * //     { // SoftwareResourceResult
 * //       AccountId: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ResourceProvider: "STRING_VALUE",
 * //       ResourceOwnerOrgId: "STRING_VALUE",
 * //       ResourceOwnerAccountId: "STRING_VALUE",
 * //       ResourceCloudPartition: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSoftwareResourcesV2CommandInput - {@link GetSoftwareResourcesV2CommandInput}
 * @returns {@link GetSoftwareResourcesV2CommandOutput}
 * @see {@link GetSoftwareResourcesV2CommandInput} for command's `input` shape.
 * @see {@link GetSoftwareResourcesV2CommandOutput} for command's `response` shape.
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
export class GetSoftwareResourcesV2Command extends command<GetSoftwareResourcesV2CommandInput, GetSoftwareResourcesV2CommandOutput>(
  _ep0,
  _mw0,
  "GetSoftwareResourcesV2",
  GetSoftwareResourcesV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSoftwareResourcesV2Request;
      output: GetSoftwareResourcesV2Response;
    };
    sdk: {
      input: GetSoftwareResourcesV2CommandInput;
      output: GetSoftwareResourcesV2CommandOutput;
    };
  };
}
