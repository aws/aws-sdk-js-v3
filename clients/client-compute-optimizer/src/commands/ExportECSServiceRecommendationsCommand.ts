// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportECSServiceRecommendationsRequest, ExportECSServiceRecommendationsResponse } from "../models/models_0";
import {
  de_ExportECSServiceRecommendationsCommand,
  se_ExportECSServiceRecommendationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandInput extends ExportECSServiceRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportECSServiceRecommendationsCommand}.
 */
export interface ExportECSServiceRecommendationsCommandOutput
  extends ExportECSServiceRecommendationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Exports optimization recommendations for Amazon ECS services on Fargate.
 *         </p>
 *          <p>Recommendations are exported in a CSV file, and its metadata
 *             in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 *          <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportECSServiceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportECSServiceRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // ECSServiceRecommendationFilters
 *     { // ECSServiceRecommendationFilter
 *       name: "Finding" || "FindingReasonCode",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableECSServiceFields
 *     "AccountId" || "ServiceArn" || "LookbackPeriodInDays" || "LastRefreshTimestamp" || "LaunchType" || "CurrentPerformanceRisk" || "CurrentServiceConfigurationMemory" || "CurrentServiceConfigurationCpu" || "CurrentServiceConfigurationTaskDefinitionArn" || "CurrentServiceConfigurationAutoScalingConfiguration" || "CurrentServiceContainerConfigurations" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "Finding" || "FindingReasonCodes" || "RecommendationOptionsMemory" || "RecommendationOptionsCpu" || "RecommendationOptionsSavingsOpportunityPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrency" || "RecommendationOptionsEstimatedMonthlySavingsValue" || "RecommendationOptionsContainerRecommendations" || "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum" || "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum" || "Tags" || "EffectiveRecommendationPreferencesSavingsEstimationMode" || "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage" || "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts" || "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportECSServiceRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportECSServiceRecommendationsResponse
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
 * @param ExportECSServiceRecommendationsCommandInput - {@link ExportECSServiceRecommendationsCommandInput}
 * @returns {@link ExportECSServiceRecommendationsCommandOutput}
 * @see {@link ExportECSServiceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportECSServiceRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportECSServiceRecommendationsCommand extends $Command
  .classBuilder<
    ExportECSServiceRecommendationsCommandInput,
    ExportECSServiceRecommendationsCommandOutput,
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
  .s("ComputeOptimizerService", "ExportECSServiceRecommendations", {})
  .n("ComputeOptimizerClient", "ExportECSServiceRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ExportECSServiceRecommendationsCommand)
  .de(de_ExportECSServiceRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportECSServiceRecommendationsRequest;
      output: ExportECSServiceRecommendationsResponse;
    };
    sdk: {
      input: ExportECSServiceRecommendationsCommandInput;
      output: ExportECSServiceRecommendationsCommandOutput;
    };
  };
}
