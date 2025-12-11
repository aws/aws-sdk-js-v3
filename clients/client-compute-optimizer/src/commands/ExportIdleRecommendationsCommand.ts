// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ExportIdleRecommendationsRequest, ExportIdleRecommendationsResponse } from "../models/models_0";
import { ExportIdleRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportIdleRecommendationsCommand}.
 */
export interface ExportIdleRecommendationsCommandInput extends ExportIdleRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ExportIdleRecommendationsCommand}.
 */
export interface ExportIdleRecommendationsCommandOutput extends ExportIdleRecommendationsResponse, __MetadataBearer {}

/**
 * <p>
 *             Export optimization recommendations for your idle resources.
 *         </p>
 *          <p>Recommendations are exported in a comma-separated values (CSV) file, and its metadata
 *             in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User
 *                     Guide</i>.</p>
 *          <p>You can have only one idle resource export job in progress per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportIdleRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportIdleRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * // import type { ComputeOptimizerClientConfig } from "@aws-sdk/client-compute-optimizer";
 * const config = {}; // type is ComputeOptimizerClientConfig
 * const client = new ComputeOptimizerClient(config);
 * const input = { // ExportIdleRecommendationsRequest
 *   accountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // IdleRecommendationFilters
 *     { // IdleRecommendationFilter
 *       name: "Finding" || "ResourceType",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   fieldsToExport: [ // ExportableIdleFields
 *     "AccountId" || "ResourceArn" || "ResourceId" || "ResourceType" || "LastRefreshTimestamp" || "LookbackPeriodInDays" || "SavingsOpportunity" || "SavingsOpportunityAfterDiscount" || "UtilizationMetricsCpuMaximum" || "UtilizationMetricsMemoryMaximum" || "UtilizationMetricsNetworkOutBytesPerSecondMaximum" || "UtilizationMetricsNetworkInBytesPerSecondMaximum" || "UtilizationMetricsDatabaseConnectionsMaximum" || "UtilizationMetricsEBSVolumeReadIOPSMaximum" || "UtilizationMetricsEBSVolumeWriteIOPSMaximum" || "UtilizationMetricsVolumeReadOpsPerSecondMaximum" || "UtilizationMetricsVolumeWriteOpsPerSecondMaximum" || "UtilizationMetricsActiveConnectionCountMaximum" || "UtilizationMetricsPacketsInFromSourceMaximum" || "UtilizationMetricsPacketsInFromDestinationMaximum" || "Finding" || "FindingDescription" || "Tags",
 *   ],
 *   s3DestinationConfig: { // S3DestinationConfig
 *     bucket: "STRING_VALUE",
 *     keyPrefix: "STRING_VALUE",
 *   },
 *   fileFormat: "Csv",
 *   includeMemberAccounts: true || false,
 * };
 * const command = new ExportIdleRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ExportIdleRecommendationsResponse
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
 * @param ExportIdleRecommendationsCommandInput - {@link ExportIdleRecommendationsCommandInput}
 * @returns {@link ExportIdleRecommendationsCommandOutput}
 * @see {@link ExportIdleRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportIdleRecommendationsCommandOutput} for command's `response` shape.
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
export class ExportIdleRecommendationsCommand extends $Command
  .classBuilder<
    ExportIdleRecommendationsCommandInput,
    ExportIdleRecommendationsCommandOutput,
    ComputeOptimizerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerService", "ExportIdleRecommendations", {})
  .n("ComputeOptimizerClient", "ExportIdleRecommendationsCommand")
  .sc(ExportIdleRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportIdleRecommendationsRequest;
      output: ExportIdleRecommendationsResponse;
    };
    sdk: {
      input: ExportIdleRecommendationsCommandInput;
      output: ExportIdleRecommendationsCommandOutput;
    };
  };
}
