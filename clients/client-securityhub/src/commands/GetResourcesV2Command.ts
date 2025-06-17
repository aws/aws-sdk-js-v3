// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcesV2Request, GetResourcesV2Response } from "../models/models_3";
import { de_GetResourcesV2Command, se_GetResourcesV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

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
 * <p>Returns a list of resources. This API is in private preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetResourcesV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetResourcesV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetResourcesV2Request
 *   Filters: { // ResourcesFilters
 *     CompositeFilters: [ // ResourcesCompositeFilterList
 *       { // ResourcesCompositeFilter
 *         StringFilters: [ // ResourcesStringFilterList
 *           { // ResourcesStringFilter
 *             FieldName: "resource_arn" || "resource_id" || "account_id" || "region" || "resource_category" || "resource_type" || "resource_name" || "findings_summary.finding_type" || "findings_summary.product_name",
 *             Filter: { // StringFilter
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *             },
 *           },
 *         ],
 *         DateFilters: [ // ResourcesDateFilterList
 *           { // ResourcesDateFilter
 *             FieldName: "resource_detail_capture_time_dt" || "resource_creation_time_dt",
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
 *             FieldName: "findings_summary.total_findings" || "findings_summary.severities.other" || "findings_summary.severities.fatal" || "findings_summary.severities.critical" || "findings_summary.severities.high" || "findings_summary.severities.medium" || "findings_summary.severities.low" || "findings_summary.severities.informational" || "findings_summary.severities.unknown",
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
 *             FieldName: "tags",
 *             Filter: { // MapFilter
 *               Key: "STRING_VALUE",
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *             },
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
 * //       ResourceArn: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetResourcesV2", {})
  .n("SecurityHubClient", "GetResourcesV2Command")
  .f(void 0, void 0)
  .ser(se_GetResourcesV2Command)
  .de(de_GetResourcesV2Command)
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
