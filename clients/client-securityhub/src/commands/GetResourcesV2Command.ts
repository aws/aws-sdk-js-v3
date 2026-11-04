// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcesV2Request, GetResourcesV2Response } from "../models/models_3";
import { GetResourcesV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcesV2Command}.
 */
export interface GetResourcesV2CommandInput extends GetResourcesV2Request {}
/**
 * @public
 *
 * The output of {@link GetResourcesV2Command}.
 */
export interface GetResourcesV2CommandOutput extends GetResourcesV2Response, __MetadataBearer {}

/**
 * Returns a list of resources.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * You can use the `Filters` parameter to refine results based on resource attributes. You can use `Scopes` and `Filters` independently or together. When both are provided, `Scopes` narrows the data set first, and then `Filters` refines results within that scoped data set.
 *
 * For AI/ML resources, the response includes the `ResourceSubCategory` field. For self-hosted AI resources and their host resources, the response also includes `ResourceInfo` with AI-specific details. Self-hosted AI resources use a `ResourceType` with the `SelfHosted::AI::` prefix, such as `SelfHosted::AI::Model`, `SelfHosted::AI::Agent`, `SelfHosted::AI::InferenceEndpoint`, and `SelfHosted::AI::ExternalEndpoint`.
 *
 * If you filter by `ResourceSubCategory`, you must also include a `ResourceCategory` string filter with comparison set to `EQUALS` and value `AI/ML` in the same request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetResourcesV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetResourcesV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetResourcesV2Request
 *   Filters: { // ResourcesFilters
 *     CompositeFilters: [ // ResourcesCompositeFilterList
 *       { // ResourcesCompositeFilter
 *         StringFilters: [ // ResourcesStringFilterList
 *           { // ResourcesStringFilter
 *             FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "AccountName" || "Region" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition" || "ResourceRegion" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName" || "ResourceSubCategory" || "DiscoveryType" || "ResourceInfo.AIDetails.HostResourceGuid" || "ResourceInfo.AIDetails.HostResourceType" || "ResourceInfo.AIDetails.CanonicalId" || "ResourceCriticality",
 *             Filter: { // StringFilter
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *             },
 *           },
 *         ],
 *         DateFilters: [ // ResourcesDateFilterList
 *           { // ResourcesDateFilter
 *             FieldName: "ResourceDetailCaptureTime" || "ResourceCreationTime",
 *             Filter: { // DateFilter
 *               Start: "STRING_VALUE",
 *               End: "STRING_VALUE",
 *               DateRange: { // DateRange
 *                 Value: Number("int"),
 *                 Unit: "DAYS",
 *                 Comparison: "WITHIN" || "OLDER_THAN",
 *               },
 *             },
 *           },
 *         ],
 *         NumberFilters: [ // ResourcesNumberFilterList
 *           { // ResourcesNumberFilter
 *             FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown" || "ResourceInfo.AIDetails.SelfHostedAIModelResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIModelServingResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIExternalEndpointResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIDevelopmentResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentFrameworkResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentToolsAndIdentityResourceCount" || "ResourceInfo.AIDetails.SelfHostedTotalAIResourceCount",
 *             Filter: { // NumberFilter
 *               Gte: Number("double"),
 *               Lte: Number("double"),
 *               Eq: Number("double"),
 *               Gt: Number("double"),
 *               Lt: Number("double"),
 *             },
 *           },
 *         ],
 *         MapFilters: [ // ResourcesMapFilterList
 *           { // ResourcesMapFilter
 *             FieldName: "ResourceTags",
 *             Filter: { // MapFilter
 *               Key: "STRING_VALUE",
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *             },
 *           },
 *         ],
 *         NestedCompositeFilters: [
 *           {
 *             StringFilters: [
 *               {
 *                 FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "AccountName" || "Region" || "ResourceProvider" || "ResourceOwnerAccountId" || "ResourceOwnerOrgId" || "ResourceCloudPartition" || "ResourceRegion" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName" || "ResourceSubCategory" || "DiscoveryType" || "ResourceInfo.AIDetails.HostResourceGuid" || "ResourceInfo.AIDetails.HostResourceType" || "ResourceInfo.AIDetails.CanonicalId" || "ResourceCriticality",
 *                 Filter: {
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [
 *               {
 *                 FieldName: "ResourceDetailCaptureTime" || "ResourceCreationTime",
 *                 Filter: {
 *                   Start: "STRING_VALUE",
 *                   End: "STRING_VALUE",
 *                   DateRange: {
 *                     Value: Number("int"),
 *                     Unit: "DAYS",
 *                     Comparison: "WITHIN" || "OLDER_THAN",
 *                   },
 *                 },
 *               },
 *             ],
 *             NumberFilters: [
 *               {
 *                 FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown" || "ResourceInfo.AIDetails.SelfHostedAIModelResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIModelServingResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIExternalEndpointResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIDevelopmentResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentFrameworkResourceCount" || "ResourceInfo.AIDetails.SelfHostedAIAgentToolsAndIdentityResourceCount" || "ResourceInfo.AIDetails.SelfHostedTotalAIResourceCount",
 *                 Filter: {
 *                   Gte: Number("double"),
 *                   Lte: Number("double"),
 *                   Eq: Number("double"),
 *                   Gt: Number("double"),
 *                   Lt: Number("double"),
 *                 },
 *               },
 *             ],
 *             MapFilters: [
 *               {
 *                 FieldName: "ResourceTags",
 *                 Filter: {
 *                   Key: "STRING_VALUE",
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: "<ResourcesCompositeFilterList>",
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         Operator: "AND" || "OR",
 *       },
 *     ],
 *     CompositeOperator: "AND" || "OR",
 *   },
 *   Scopes: { // ResourceScopes
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
 * const command = new GetResourcesV2Command(input);
 * const response = await client.send(command);
 * // { // GetResourcesV2Response
 * //   Resources: [ // Resources // required
 * //     { // ResourceResult
 * //       ResourceGuid: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE", // required
 * //       AccountId: "STRING_VALUE", // required
 * //       AccountName: "STRING_VALUE",
 * //       Region: "STRING_VALUE", // required
 * //       ResourceProvider: "STRING_VALUE",
 * //       ResourceOwnerAccountId: "STRING_VALUE",
 * //       ResourceOwnerOrgId: "STRING_VALUE",
 * //       ResourceCloudPartition: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceCategory: "Compute" || "Database" || "Storage" || "Code" || "AI/ML" || "Identity" || "Network" || "Messaging" || "Other",
 * //       ResourceType: "STRING_VALUE", // required
 * //       ResourceName: "STRING_VALUE",
 * //       ResourceCreationTimeDt: "STRING_VALUE",
 * //       ResourceDetailCaptureTimeDt: "STRING_VALUE", // required
 * //       FindingsSummary: [ // ResourceFindingsSummaryList
 * //         { // ResourceFindingsSummary
 * //           FindingType: "STRING_VALUE", // required
 * //           ProductName: "STRING_VALUE", // required
 * //           TotalFindings: Number("int"), // required
 * //           Severities: { // ResourceSeverityBreakdown
 * //             Other: Number("int"),
 * //             Fatal: Number("int"),
 * //             Critical: Number("int"),
 * //             High: Number("int"),
 * //             Medium: Number("int"),
 * //             Low: Number("int"),
 * //             Informational: Number("int"),
 * //             Unknown: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       ResourceTags: [ // ResourceTagList
 * //         { // ResourceTag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ResourceConfig: "DOCUMENT_VALUE", // required
 * //       ResourceSubCategory: "Model" || "ModelServing" || "Agent" || "AgentFramework" || "AgentToolsAndIdentity" || "SafetyAndGuardrail" || "KnowledgeAndData" || "OrchestrationAndPipeline" || "ExternalEndpoint" || "Development" || "Other",
 * //       DiscoveryType: "Managed" || "SelfHosted",
 * //       ResourceInfo: { // ResourceInfo
 * //         AIDetails: { // AIDetails
 * //           HostResourceGuid: "STRING_VALUE",
 * //           HostResourceType: "STRING_VALUE",
 * //           CanonicalId: "STRING_VALUE",
 * //           SelfHostedAIModelResourceCount: Number("int"),
 * //           SelfHostedAIAgentResourceCount: Number("int"),
 * //           SelfHostedAIModelServingResourceCount: Number("int"),
 * //           SelfHostedAIExternalEndpointResourceCount: Number("int"),
 * //           SelfHostedAIDevelopmentResourceCount: Number("int"),
 * //           SelfHostedAIAgentFrameworkResourceCount: Number("int"),
 * //           SelfHostedAIAgentToolsAndIdentityResourceCount: Number("int"),
 * //           SelfHostedTotalAIResourceCount: Number("int"),
 * //         },
 * //       },
 * //       ResourceCriticality: "Very High" || "High" || "Medium" || "Low" || "Unknown",
 * //       CriticalitySources: [ // CriticalitySourceList
 * //         { // CriticalitySource
 * //           Source: "AutomationRule" || "ResourceName" || "TagInference", // required
 * //           Reason: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcesV2CommandInput - {@link GetResourcesV2CommandInput}
 * @returns {@link GetResourcesV2CommandOutput}
 * @see {@link GetResourcesV2CommandInput} for command's `input` shape.
 * @see {@link GetResourcesV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link OrganizationalUnitNotFoundException} (client fault)
 *
 * The request failed because one or more organizational units specified in the request don't exist within the caller's organization.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * The request failed because one or more organizations specified in the request don't exist or don't belong to the caller's organization.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class GetResourcesV2Command extends command<GetResourcesV2CommandInput, GetResourcesV2CommandOutput>(
  _ep0,
  _mw0,
  "GetResourcesV2",
  GetResourcesV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesV2Request;
      output: GetResourcesV2Response;
    };
    sdk: {
      input: GetResourcesV2CommandInput;
      output: GetResourcesV2CommandOutput;
    };
  };
}
