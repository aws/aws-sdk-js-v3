// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRemediationsV2Request, GetRemediationsV2Response } from "../models/models_3";
import { GetRemediationsV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRemediationsV2Command}.
 */
export interface GetRemediationsV2CommandInput extends GetRemediationsV2Request {}
/**
 * @public
 *
 * The output of {@link GetRemediationsV2Command}.
 */
export interface GetRemediationsV2CommandOutput extends GetRemediationsV2Response, __MetadataBearer {}

/**
 * <p>Retrieves remediation targets for the account, or for all member accounts if the caller is
 *          the delegated administrator. Results are sorted by priority, highest first, and are paginated.
 *          Use <code>TargetUid</code> or <code>MetadataUid</code> to scope the request to a single target
 *          or finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetRemediationsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetRemediationsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetRemediationsV2Request
 *   TargetUid: "STRING_VALUE",
 *   MetadataUid: "STRING_VALUE",
 *   Filters: { // RemediationFilters
 *     CompositeFilters: [ // RemediationCompositeFilterList
 *       { // RemediationCompositeFilter
 *         StringFilters: [ // RemediationStringFilterList
 *           { // RemediationStringFilter
 *             FieldName: "Resource.Type" || "Priority" || "Status" || "Resource.Id" || "Resource.ResourceOwnerAccountId" || "Resource.CloudProvider", // required
 *             Filter: { // RemediationStringFilterCondition
 *               Value: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   ShowGuidance: true || false,
 *   GuidanceFormat: "All" || "AwsCli" || "Cli" || "Python" || "Terraform" || "Cdk" || "CloudFormation" || "IaC" || "Template",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetRemediationsV2Command(input);
 * const response = await client.send(command);
 * // { // GetRemediationsV2Response
 * //   Items: [ // RemediationV2ItemList // required
 * //     { // RemediationV2Item
 * //       TargetUid: "STRING_VALUE", // required
 * //       Outcome: { // RemediationOutcome
 * //         ResolvedFindingsCount: Number("int"), // required
 * //         SeverityReductionFindingsCount: Number("int"), // required
 * //         SeverityUnchangedCount: Number("int"), // required
 * //       },
 * //       Priority: "Critical" || "High" || "Medium" || "Low", // required
 * //       RemediationSummary: { // RemediationSummaryDetail
 * //         Action: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         IsImmediate: true || false, // required
 * //         PostRemediationSteps: [ // RemediationStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         KbArticles: [ // KbArticleList
 * //           { // KbArticle
 * //             Title: "STRING_VALUE", // required
 * //             Url: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       Resource: { // RemediationResource
 * //         AccountId: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE", // required
 * //         ResourceOwnerAccountId: "STRING_VALUE",
 * //         ResourceOwnerOrgId: "STRING_VALUE",
 * //         Type: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         Id: "STRING_VALUE", // required
 * //         ResourceGuid: "STRING_VALUE",
 * //         ResourceRegion: "STRING_VALUE", // required
 * //         CloudProvider: "Azure" || "AWS", // required
 * //       },
 * //       Status: "New" || "Updated" || "Resolved", // required
 * //       Trait: { // RemediationTrait
 * //         Type: "STRING_VALUE", // required
 * //         Title: "STRING_VALUE", // required
 * //       },
 * //       Guidance: { // RemediationGuidance
 * //         TargetTypeName: "STRING_VALUE", // required
 * //         Pattern: "STRING_VALUE", // required
 * //         Version: "STRING_VALUE", // required
 * //         Context: { // RemediationGuidanceContext
 * //           ProblemStatement: "STRING_VALUE",
 * //           RiskAssessment: "STRING_VALUE",
 * //           AffectedScope: "STRING_VALUE",
 * //           Prerequisites: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Specification: { // RemediationGuidanceSpecification
 * //           Parameters: [ // RemediationParameterList
 * //             { // RemediationParameter
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Description: "STRING_VALUE", // required
 * //               Required: true || false,
 * //             },
 * //           ],
 * //           Steps: [ // RemediationStepList
 * //             { // RemediationStep
 * //               Phase: "STRING_VALUE", // required
 * //               Description: "STRING_VALUE", // required
 * //               Service: "STRING_VALUE", // required
 * //               Action: "STRING_VALUE", // required
 * //               Logic: "STRING_VALUE",
 * //               Inverse: "STRING_VALUE",
 * //               VerifyAfter: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ExpectedEndState: "STRING_VALUE",
 * //           RequiredPermissions: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Examples: { // RemediationGuidanceExamples
 * //           AwsCli: "STRING_VALUE",
 * //           Cli: "STRING_VALUE",
 * //           Python: "STRING_VALUE",
 * //           Terraform: "STRING_VALUE",
 * //           Cdk: "STRING_VALUE",
 * //           CloudFormation: "STRING_VALUE",
 * //           IaC: "STRING_VALUE",
 * //           Template: "STRING_VALUE",
 * //         },
 * //         Metadata: { // RemediationGuidanceMetadata
 * //           ResourceType: "STRING_VALUE", // required
 * //           ExposureType: "STRING_VALUE", // required
 * //           TraitTitles: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Reversibility: "STRING_VALUE", // required
 * //           FixEffect: "STRING_VALUE", // required
 * //           RiskLevel: "STRING_VALUE", // required
 * //           AutomationLevel: "STRING_VALUE",
 * //           HumanReviewRequired: true || false,
 * //           GeneratedAt: new Date("TIMESTAMP"),
 * //           VerificationStatus: "STRING_VALUE",
 * //         },
 * //       },
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRemediationsV2CommandInput - {@link GetRemediationsV2CommandInput}
 * @returns {@link GetRemediationsV2CommandOutput}
 * @see {@link GetRemediationsV2CommandInput} for command's `input` shape.
 * @see {@link GetRemediationsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
export class GetRemediationsV2Command extends command<GetRemediationsV2CommandInput, GetRemediationsV2CommandOutput>(
  _ep0,
  _mw0,
  "GetRemediationsV2",
  GetRemediationsV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRemediationsV2Request;
      output: GetRemediationsV2Response;
    };
    sdk: {
      input: GetRemediationsV2CommandInput;
      output: GetRemediationsV2CommandOutput;
    };
  };
}
