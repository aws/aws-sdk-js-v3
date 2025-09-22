// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportLicenseRecommendationsRequest, ExportLicenseRecommendationsResponse } from "../models/models_0";
import { ExportLicenseRecommendations } from "../schemas/schemas_4_Export";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportLicenseRecommendationsCommand}.
 */
export interface ExportLicenseRecommendationsCommandInput extends ExportLicenseRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportLicenseRecommendationsCommand}.
 */
export interface ExportLicenseRecommendationsCommandOutput
  extends ExportLicenseRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Export optimization recommendations for your licenses.
 *         </p>
 *          <p>Recommendations are exported in a comma-separated values (CSV) file, and its metadata
 *             in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 *          <p>You can have only one license export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportLicenseRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportLicenseRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportLicenseRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // LicenseRecommendationFilters
 *     { // LicenseRecommendationFilter
 *       name: "Finding" || "FindingReasonCode" || "LicenseName",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableLicenseFields
 *     "AccountId" || "ResourceArn" || "LookbackPeriodInDays" || "LastRefreshTimestamp" || "Finding" || "FindingReasonCodes" || "CurrentLicenseConfigurationNumberOfCores" || "CurrentLicenseConfigurationInstanceType" || "CurrentLicenseConfigurationOperatingSystem" || "CurrentLicenseConfigurationLicenseName" || "CurrentLicenseConfigurationLicenseEdition" || "CurrentLicenseConfigurationLicenseModel" || "CurrentLicenseConfigurationLicenseVersion" || "CurrentLicenseConfigurationMetricsSource" || "RecommendationOptionsOperatingSystem" || "RecommendationOptionsLicenseEdition" || "RecommendationOptionsLicenseModel" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "Tags",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportLicenseRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportLicenseRecommendationsResponse
 * //   jobId: "STRING_VALUE",
 * //   s3Destination: { // S3Destination
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //     metadataKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportLicenseRecommendationsCommandInput - {@link ExportLicenseRecommendationsCommandInput}
 * @returns {@link ExportLicenseRecommendationsCommandOutput}
 * @see {@link ExportLicenseRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportLicenseRecommendationsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds a limit of the service.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
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
 *
 * @public
 */
export class ExportLicenseRecommendationsCommand extends $Command
  .classBuilder<
    ExportLicenseRecommendationsCommandInput,
    ExportLicenseRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "ExportLicenseRecommendations", {})
  .n("ComputeOptimizerClient", "ExportLicenseRecommendationsCommand")
  .sc(ExportLicenseRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportLicenseRecommendationsRequest;
      output: ExportLicenseRecommendationsResponse;
    };
    sdk: {
      input: ExportLicenseRecommendationsCommandInput;
      output: ExportLicenseRecommendationsCommandOutput;
    };
  };
}
