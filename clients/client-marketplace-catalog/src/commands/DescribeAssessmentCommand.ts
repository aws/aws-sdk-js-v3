// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAssessmentRequest, DescribeAssessmentResponse } from "../models/models_0";
import { DescribeAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandInput extends DescribeAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandOutput extends DescribeAssessmentResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata and detailed results of a single assessment, including the
 *             framework that was evaluated, the overall assessment result, and a paginated list of
 *             individual control evaluation results.</p>
 *          <p>To list available assessments before describing one, use the
 *             <code>ListAssessments</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeAssessmentCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeAssessmentCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // DescribeAssessmentRequest
 *   Catalog: "STRING_VALUE", // required
 *   AssessmentIdentifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentResponse
 * //   AssessmentArn: "STRING_VALUE",
 * //   AssessmentId: "STRING_VALUE",
 * //   FrameworkId: "STRING_VALUE",
 * //   AssessmentTargetSummary: { // AssessmentTargetSummary
 * //     EntityId: "STRING_VALUE",
 * //     ChangeSetId: "STRING_VALUE",
 * //   },
 * //   FrameworkSummary: { // FrameworkSummary Union: only one key present
 * //     AMISecuritySummary: { // AMISecuritySummary
 * //       DeliveryOptionId: "STRING_VALUE",
 * //     },
 * //     ContainerSecuritySummary: { // ContainerSecuritySummary
 * //       DeliveryOptionId: "STRING_VALUE",
 * //     },
 * //     ListingQualitySummary: { // ListingQualitySummary
 * //       Tier: "NEEDS_IMPROVEMENT" || "BASIC" || "STRONG" || "EXCELLENT", // required
 * //       EntityRevision: "STRING_VALUE",
 * //     },
 * //     ListingRecommendationsSummary: { // ListingRecommendationsSummary
 * //       Tier: "NEEDS_IMPROVEMENT" || "BASIC" || "STRONG" || "EXCELLENT", // required
 * //       EntityRevision: "STRING_VALUE",
 * //     },
 * //   },
 * //   AssessmentResult: "PASS" || "FAIL",
 * //   CreatedAt: "STRING_VALUE",
 * //   ExpiresAt: "STRING_VALUE",
 * //   ControlAssessments: [ // ControlAssessmentList
 * //     { // ControlAssessment
 * //       ControlId: "STRING_VALUE",
 * //       ControlAssessmentResult: "PASS" || "FAIL" || "NOT_EXECUTED" || "EXEMPTION_PASS",
 * //       VerificationSource: "AWS_VERIFIED" || "SELF_ATTESTED",
 * //       Errors: [ // ControlErrorList
 * //         { // ControlError
 * //           Code: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //           Scope: [ // ErrorScopeList
 * //             { // ErrorScope
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       ControlSummary: { // ControlSummary Union: only one key present
 * //         ListingRecommendations: { // ListingRecommendations Union: only one key present
 * //           ProductContentRecommendations: { // ProductContentRecommendations
 * //             ProductTitle: { // ContentRecommendation
 * //               Status: "GENERATED" || "INSUFFICIENT_CONTEXT", // required
 * //               Alternatives: { // ContentAlternatives Union: only one key present
 * //                 Text: [ // TextAlternativeList
 * //                   { // TextAlternative
 * //                     Value: "STRING_VALUE", // required
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 TextList: [ // TextListAlternativeList
 * //                   { // TextListAlternative
 * //                     Value: [ // FieldTextList // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 AdditionalResources: [ // AdditionalResourcesAlternativeList
 * //                   { // AdditionalResourcesAlternative
 * //                     Value: [ // AdditionalResourceList // required
 * //                       { // AdditionalResource
 * //                         Type: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Url: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 UseCases: [ // UseCasesAlternativeList
 * //                   { // UseCasesAlternative
 * //                     Value: [ // UseCaseList // required
 * //                       { // ListingUseCase
 * //                         Id: "STRING_VALUE", // required
 * //                         Rank: Number("int"), // required
 * //                         Name: "STRING_VALUE", // required
 * //                         Group: "STRING_VALUE", // required
 * //                         Subgroup: "STRING_VALUE", // required
 * //                         UseCaseDetails: "STRING_VALUE",
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 CaseStudies: [ // CaseStudiesAlternativeList
 * //                   { // CaseStudiesAlternative
 * //                     Value: [ // CaseStudyList // required
 * //                       { // ListingCaseStudy
 * //                         Id: "STRING_VALUE", // required
 * //                         Title: "STRING_VALUE", // required
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FollowUpQuestions: [ // FollowUpQuestionList // required
 * //                 { // FollowUpQuestion
 * //                   Question: "STRING_VALUE", // required
 * //                   Justification: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Findings: [ // FindingList // required
 * //                 { // ListingFinding
 * //                   Action: "STRING_VALUE", // required
 * //                   Description: "STRING_VALUE", // required
 * //                   Severity: "BLOCKING" || "ADVISORY", // required
 * //                   Status: "PASS" || "FAIL", // required
 * //                 },
 * //               ],
 * //             },
 * //             ShortDescription: {
 * //               Status: "GENERATED" || "INSUFFICIENT_CONTEXT", // required
 * //               Alternatives: {//  Union: only one key present
 * //                 Text: [
 * //                   {
 * //                     Value: "STRING_VALUE", // required
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 TextList: [
 * //                   {
 * //                     Value: [ // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 AdditionalResources: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Type: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Url: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 UseCases: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Rank: Number("int"), // required
 * //                         Name: "STRING_VALUE", // required
 * //                         Group: "STRING_VALUE", // required
 * //                         Subgroup: "STRING_VALUE", // required
 * //                         UseCaseDetails: "STRING_VALUE",
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 CaseStudies: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Title: "STRING_VALUE", // required
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FollowUpQuestions: [ // required
 * //                 {
 * //                   Question: "STRING_VALUE", // required
 * //                   Justification: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Findings: [ // required
 * //                 {
 * //                   Action: "STRING_VALUE", // required
 * //                   Description: "STRING_VALUE", // required
 * //                   Severity: "BLOCKING" || "ADVISORY", // required
 * //                   Status: "PASS" || "FAIL", // required
 * //                 },
 * //               ],
 * //             },
 * //             LongDescription: {
 * //               Status: "GENERATED" || "INSUFFICIENT_CONTEXT", // required
 * //               Alternatives: {//  Union: only one key present
 * //                 Text: [
 * //                   {
 * //                     Value: "STRING_VALUE", // required
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 TextList: [
 * //                   {
 * //                     Value: [ // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 AdditionalResources: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Type: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Url: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 UseCases: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Rank: Number("int"), // required
 * //                         Name: "STRING_VALUE", // required
 * //                         Group: "STRING_VALUE", // required
 * //                         Subgroup: "STRING_VALUE", // required
 * //                         UseCaseDetails: "STRING_VALUE",
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 CaseStudies: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Title: "STRING_VALUE", // required
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FollowUpQuestions: [ // required
 * //                 {
 * //                   Question: "STRING_VALUE", // required
 * //                   Justification: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Findings: [ // required
 * //                 {
 * //                   Action: "STRING_VALUE", // required
 * //                   Description: "STRING_VALUE", // required
 * //                   Severity: "BLOCKING" || "ADVISORY", // required
 * //                   Status: "PASS" || "FAIL", // required
 * //                 },
 * //               ],
 * //             },
 * //             SupportDescription: {
 * //               Status: "GENERATED" || "INSUFFICIENT_CONTEXT", // required
 * //               Alternatives: {//  Union: only one key present
 * //                 Text: [
 * //                   {
 * //                     Value: "STRING_VALUE", // required
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 TextList: [
 * //                   {
 * //                     Value: [ // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 AdditionalResources: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Type: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Url: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 UseCases: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Rank: Number("int"), // required
 * //                         Name: "STRING_VALUE", // required
 * //                         Group: "STRING_VALUE", // required
 * //                         Subgroup: "STRING_VALUE", // required
 * //                         UseCaseDetails: "STRING_VALUE",
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 CaseStudies: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Title: "STRING_VALUE", // required
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FollowUpQuestions: [ // required
 * //                 {
 * //                   Question: "STRING_VALUE", // required
 * //                   Justification: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Findings: [ // required
 * //                 {
 * //                   Action: "STRING_VALUE", // required
 * //                   Description: "STRING_VALUE", // required
 * //                   Severity: "BLOCKING" || "ADVISORY", // required
 * //                   Status: "PASS" || "FAIL", // required
 * //                 },
 * //               ],
 * //             },
 * //             Highlights: {
 * //               Status: "GENERATED" || "INSUFFICIENT_CONTEXT", // required
 * //               Alternatives: {//  Union: only one key present
 * //                 Text: [
 * //                   {
 * //                     Value: "STRING_VALUE", // required
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 TextList: [
 * //                   {
 * //                     Value: [ // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 AdditionalResources: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Type: "STRING_VALUE", // required
 * //                         Text: "STRING_VALUE", // required
 * //                         Url: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 UseCases: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Rank: Number("int"), // required
 * //                         Name: "STRING_VALUE", // required
 * //                         Group: "STRING_VALUE", // required
 * //                         Subgroup: "STRING_VALUE", // required
 * //                         UseCaseDetails: "STRING_VALUE",
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 CaseStudies: [
 * //                   {
 * //                     Value: [ // required
 * //                       {
 * //                         Id: "STRING_VALUE", // required
 * //                         Title: "STRING_VALUE", // required
 * //                         Rationale: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     Rationale: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               FollowUpQuestions: [ // required
 * //                 {
 * //                   Question: "STRING_VALUE", // required
 * //                   Justification: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Findings: [ // required
 * //                 {
 * //                   Action: "STRING_VALUE", // required
 * //                   Description: "STRING_VALUE", // required
 * //                   Severity: "BLOCKING" || "ADVISORY", // required
 * //                   Status: "PASS" || "FAIL", // required
 * //                 },
 * //               ],
 * //             },
 * //             SearchKeywords: "<ContentRecommendation>",
 * //             Categories: "<ContentRecommendation>",
 * //             AdditionalResources: "<ContentRecommendation>",
 * //             Citations: [ // CitationList // required
 * //               { // RecommendationCitation
 * //                 Url: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           SolutionContentRecommendations: { // SolutionContentRecommendations
 * //             Title: "<ContentRecommendation>",
 * //             ShortDescription: "<ContentRecommendation>",
 * //             LongDescription: "<ContentRecommendation>",
 * //             IntegrationDetails: "<ContentRecommendation>",
 * //             AdditionalResources: "<ContentRecommendation>",
 * //             UseCases: "<ContentRecommendation>",
 * //             CaseStudies: "<ContentRecommendation>",
 * //             Citations: [ // required
 * //               {
 * //                 Url: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           FeatureRecommendations: { // FeatureRecommendations
 * //             Recommendations: [ // FeatureRecommendationList // required
 * //               { // FeatureRecommendation
 * //                 FeatureId: "REQUEST_PRIVATE_OFFER" || "REQUEST_A_DEMO" || "PROMOTIONAL_MEDIA" || "FREE_TRIAL" || "QUICK_LAUNCH", // required
 * //                 Action: "STRING_VALUE", // required
 * //                 Rationale: "STRING_VALUE", // required
 * //                 Severity: "BLOCKING" || "ADVISORY", // required
 * //                 Status: "PASS" || "FAIL", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentCommandInput - {@link DescribeAssessmentCommandInput}
 * @returns {@link DescribeAssessmentCommandOutput}
 * @see {@link DescribeAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
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
export class DescribeAssessmentCommand extends command<DescribeAssessmentCommandInput, DescribeAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAssessment",
  DescribeAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentRequest;
      output: DescribeAssessmentResponse;
    };
    sdk: {
      input: DescribeAssessmentCommandInput;
      output: DescribeAssessmentCommandOutput;
    };
  };
}
