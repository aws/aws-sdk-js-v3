// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseRecommendationsRequest, GetLicenseRecommendationsResponse } from "../models/models_0";
import { GetLicenseRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns license recommendations for Amazon EC2 instances that run on a specific license.
 *
 * Compute Optimizer generates recommendations for licenses that meet a specific set of requirements. For more information, see the [Supported resources and requirements](https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html) in the *Compute Optimizer User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLicenseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLicenseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred. Try your call again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value supplied for the input parameter is out of range or not valid.
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *
 * The request must contain either a valid (registered) Amazon Web Services access key ID or X.509 certificate.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account is not opted in to Compute Optimizer.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizer service.
 *
 * @public
 */
export class GetLicenseRecommendationsCommand extends command<GetLicenseRecommendationsCommandInput, GetLicenseRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseRecommendations",
  GetLicenseRecommendations$
) {
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
