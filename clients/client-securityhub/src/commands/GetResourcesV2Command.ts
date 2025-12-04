// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourcesV2Response } from "../models/models_2";
import type { GetResourcesV2Request } from "../models/models_3";
import { GetResourcesV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of resources.</p>
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
 *             FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "Region" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
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
 *               },
 *             },
 *           },
 *         ],
 *         NumberFilters: [ // ResourcesNumberFilterList
 *           { // ResourcesNumberFilter
 *             FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown",
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
 *                 FieldName: "ResourceGuid" || "ResourceId" || "AccountId" || "Region" || "ResourceCategory" || "ResourceType" || "ResourceName" || "FindingsSummary.FindingType" || "FindingsSummary.ProductName",
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
 *                   },
 *                 },
 *               },
 *             ],
 *             NumberFilters: [
 *               {
 *                 FieldName: "FindingsSummary.TotalFindings" || "FindingsSummary.Severities.Other" || "FindingsSummary.Severities.Fatal" || "FindingsSummary.Severities.Critical" || "FindingsSummary.Severities.High" || "FindingsSummary.Severities.Medium" || "FindingsSummary.Severities.Low" || "FindingsSummary.Severities.Informational" || "FindingsSummary.Severities.Unknown",
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
 * //       Region: "STRING_VALUE", // required
 * //       ResourceCategory: "Compute" || "Database" || "Storage" || "Code" || "AI/ML" || "Identity" || "Network" || "Other",
 * //       ResourceType: "STRING_VALUE",
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
export class GetResourcesV2Command extends $Command
  .classBuilder<
    GetResourcesV2CommandInput,
    GetResourcesV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetResourcesV2", {})
  .n("SecurityHubClient", "GetResourcesV2Command")
  .sc(GetResourcesV2)
  .build() {
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
