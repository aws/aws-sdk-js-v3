// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAnomalyDetectorRequest, PutAnomalyDetectorResponse } from "../models/models_0";
import { de_PutAnomalyDetectorCommand, se_PutAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandInput extends PutAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandOutput extends PutAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>When you call <code>PutAnomalyDetector</code>, the operation creates a new anomaly detector if one doesn't exist, or updates an existing one. Each call to this operation triggers a complete retraining of the detector, which includes querying the minimum required samples and backfilling the detector with historical data. This process occurs regardless of whether you're making a minor change like updating the evaluation interval or making more substantial modifications. The operation serves as the single method for creating, updating, and retraining anomaly detectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, PutAnomalyDetectorCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, PutAnomalyDetectorCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // PutAnomalyDetectorRequest
 *   workspaceId: "STRING_VALUE", // required
 *   anomalyDetectorId: "STRING_VALUE", // required
 *   evaluationIntervalInSeconds: Number("int"),
 *   missingDataAction: { // AnomalyDetectorMissingDataAction Union: only one key present
 *     markAsAnomaly: true || false,
 *     skip: true || false,
 *   },
 *   configuration: { // AnomalyDetectorConfiguration Union: only one key present
 *     randomCutForest: { // RandomCutForestConfiguration
 *       query: "STRING_VALUE", // required
 *       shingleSize: Number("int"),
 *       sampleSize: Number("int"),
 *       ignoreNearExpectedFromAbove: { // IgnoreNearExpected Union: only one key present
 *         amount: Number("double"),
 *         ratio: Number("double"),
 *       },
 *       ignoreNearExpectedFromBelow: {//  Union: only one key present
 *         amount: Number("double"),
 *         ratio: Number("double"),
 *       },
 *     },
 *   },
 *   labels: { // PrometheusMetricLabelMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // PutAnomalyDetectorResponse
 * //   anomalyDetectorId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // AnomalyDetectorStatus
 * //     statusCode: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATION_FAILED" || "UPDATE_FAILED" || "DELETION_FAILED", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAnomalyDetectorCommandInput - {@link PutAnomalyDetectorCommandInput}
 * @returns {@link PutAnomalyDetectorCommandOutput}
 * @see {@link PutAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link PutAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class PutAnomalyDetectorCommand extends $Command
  .classBuilder<
    PutAnomalyDetectorCommandInput,
    PutAnomalyDetectorCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "PutAnomalyDetector", {})
  .n("AmpClient", "PutAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_PutAnomalyDetectorCommand)
  .de(de_PutAnomalyDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAnomalyDetectorRequest;
      output: PutAnomalyDetectorResponse;
    };
    sdk: {
      input: PutAnomalyDetectorCommandInput;
      output: PutAnomalyDetectorCommandOutput;
    };
  };
}
