// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssessmentsRequest, ListAssessmentsResponse } from "../models/models_0";
import { ListAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandInput extends ListAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandOutput extends ListAssessmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of assessments associated with an entity or change set in
 *             AWS Marketplace. An <i>assessment</i> is the result of evaluating a
 *             product or change set against a framework, such as AMI Security or Container
 *             Security.</p>
 *          <p>Use the <code>AssessmentTargetFilter</code> to scope results to a specific entity or
 *             change set, and use <code>FrameworkFilters</code> to scope results to a single
 *             framework. To retrieve detailed control-level results for an individual assessment, use
 *             the <code>DescribeAssessment</code> action.</p>
 *          <p>Results are sorted by assessment creation time in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, ListAssessmentsCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, ListAssessmentsCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // ListAssessmentsRequest
 *   Catalog: "STRING_VALUE", // required
 *   FrameworkId: "STRING_VALUE",
 *   AssessmentTargetFilter: { // AssessmentTargetFilter
 *     EntityId: "STRING_VALUE",
 *     ChangeSetId: "STRING_VALUE",
 *   },
 *   FrameworkFilters: { // FrameworkFilters Union: only one key present
 *     AMISecurityFilters: { // AMISecurityFilters
 *       DeliveryOptionId: "STRING_VALUE",
 *     },
 *     ContainerSecurityFilters: { // ContainerSecurityFilters
 *       DeliveryOptionId: "STRING_VALUE",
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentsResponse
 * //   AssessmentSummaryList: [ // AssessmentSummaryList
 * //     { // AssessmentSummary
 * //       AssessmentArn: "STRING_VALUE",
 * //       AssessmentId: "STRING_VALUE",
 * //       FrameworkId: "STRING_VALUE",
 * //       AssessmentTargetSummary: { // AssessmentTargetSummary
 * //         EntityId: "STRING_VALUE",
 * //         ChangeSetId: "STRING_VALUE",
 * //       },
 * //       FrameworkSummary: { // FrameworkSummary Union: only one key present
 * //         AMISecuritySummary: { // AMISecuritySummary
 * //           DeliveryOptionId: "STRING_VALUE",
 * //         },
 * //         ContainerSecuritySummary: { // ContainerSecuritySummary
 * //           DeliveryOptionId: "STRING_VALUE",
 * //         },
 * //       },
 * //       AssessmentResult: "PASS" || "FAIL",
 * //       CreatedAt: "STRING_VALUE",
 * //       ExpiresAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentsCommandInput - {@link ListAssessmentsCommandInput}
 * @returns {@link ListAssessmentsCommandOutput}
 * @see {@link ListAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class ListAssessmentsCommand extends command<ListAssessmentsCommandInput, ListAssessmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssessments",
  ListAssessments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentsRequest;
      output: ListAssessmentsResponse;
    };
    sdk: {
      input: ListAssessmentsCommandInput;
      output: ListAssessmentsCommandOutput;
    };
  };
}
