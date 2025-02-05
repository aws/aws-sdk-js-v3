// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLicenseRecommendationsRequest, GetLicenseRecommendationsResponse } from "../models/models_0";
import { de_GetLicenseRecommendationsCommand, se_GetLicenseRecommendationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLicenseRecommendationsCommand}.
 */
export interface GetLicenseRecommendationsCommandInput extends GetLicenseRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseRecommendationsCommand}.
 */
export interface GetLicenseRecommendationsCommandOutput extends GetLicenseRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Returns license recommendations for Amazon EC2 instances that run on a specific license.</p>
 *          <p>Compute Optimizer generates recommendations for licenses that meet a specific set of requirements. For more
 *             information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLicenseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLicenseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ComputeOptimizerClient(config);
 * const input = { // GetLicenseRecommendationsRequest
 *   resourceArns: [ // ResourceArns
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // LicenseRecommendationFilters
 *     { // LicenseRecommendationFilter
 *       name: "Finding" || "FindingReasonCode" || "LicenseName",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetLicenseRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   licenseRecommendations: [ // LicenseRecommendations
 * //     { // LicenseRecommendation
 * //       resourceArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       currentLicenseConfiguration: { // LicenseConfiguration
 * //         numberOfCores: Number("int"),
 * //         instanceType: "STRING_VALUE",
 * //         operatingSystem: "STRING_VALUE",
 * //         licenseEdition: "Enterprise" || "Standard" || "Free" || "NoLicenseEditionFound",
 * //         licenseName: "SQLServer",
 * //         licenseModel: "LicenseIncluded" || "BringYourOwnLicense",
 * //         licenseVersion: "STRING_VALUE",
 * //         metricsSource: [ // MetricsSource
 * //           { // MetricSource
 * //             provider: "CloudWatchApplicationInsights",
 * //             providerArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       lookbackPeriodInDays: Number("double"),
 * //       lastRefreshTimestamp: new Date("TIMESTAMP"),
 * //       finding: "InsufficientMetrics" || "Optimized" || "NotOptimized",
 * //       findingReasonCodes: [ // LicenseFindingReasonCodes
 * //         "InvalidCloudWatchApplicationInsightsSetup" || "CloudWatchApplicationInsightsError" || "LicenseOverprovisioned" || "Optimized",
 * //       ],
 * //       licenseRecommendationOptions: [ // LicenseRecommendationOptions
 * //         { // LicenseRecommendationOption
 * //           rank: Number("int"),
 * //           operatingSystem: "STRING_VALUE",
 * //           licenseEdition: "Enterprise" || "Standard" || "Free" || "NoLicenseEditionFound",
 * //           licenseModel: "LicenseIncluded" || "BringYourOwnLicense",
 * //           savingsOpportunity: { // SavingsOpportunity
 * //             savingsOpportunityPercentage: Number("double"),
 * //             estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //               currency: "USD" || "CNY",
 * //               value: Number("double"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   errors: [ // GetRecommendationErrors
 * //     { // GetRecommendationError
 * //       identifier: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLicenseRecommendationsCommandInput - {@link GetLicenseRecommendationsCommandInput}
 * @returns {@link GetLicenseRecommendationsCommandOutput}
 * @see {@link GetLicenseRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLicenseRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 * @public
 */
export class GetLicenseRecommendationsCommand extends $Command
  .classBuilder<
    GetLicenseRecommendationsCommandInput,
    GetLicenseRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComputeOptimizerService", "GetLicenseRecommendations", {})
  .n("ComputeOptimizerClient", "GetLicenseRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_GetLicenseRecommendationsCommand)
  .de(de_GetLicenseRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseRecommendationsRequest;
      output: GetLicenseRecommendationsResponse;
    };
    sdk: {
      input: GetLicenseRecommendationsCommandInput;
      output: GetLicenseRecommendationsCommandOutput;
    };
  };
}
