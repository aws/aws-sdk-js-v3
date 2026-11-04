// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAnomalyDetectorRequest, CreateAnomalyDetectorResponse } from "../models/models_0";
import { CreateAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAnomalyDetectorCommand}.
 */
export interface CreateAnomalyDetectorCommandInput extends CreateAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnomalyDetectorCommand}.
 */
export interface CreateAnomalyDetectorCommandOutput extends CreateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * Creates an anomaly detector within a workspace using the Random Cut Forest algorithm for time-series analysis. The anomaly detector analyzes Amazon Managed Service for Prometheus metrics to identify unusual patterns and behaviors.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateAnomalyDetectorCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateAnomalyDetectorCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // CreateAnomalyDetectorRequest
 *   workspaceId: "STRING_VALUE", // required
 *   alias: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnomalyDetectorResponse
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
 * @param CreateAnomalyDetectorCommandInput - {@link CreateAnomalyDetectorCommandInput}
 * @returns {@link CreateAnomalyDetectorCommandOutput}
 * @see {@link CreateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Completing the request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class CreateAnomalyDetectorCommand extends command<CreateAnomalyDetectorCommandInput, CreateAnomalyDetectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateAnomalyDetector",
  CreateAnomalyDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnomalyDetectorRequest;
      output: CreateAnomalyDetectorResponse;
    };
    sdk: {
      input: CreateAnomalyDetectorCommandInput;
      output: CreateAnomalyDetectorCommandOutput;
    };
  };
}
