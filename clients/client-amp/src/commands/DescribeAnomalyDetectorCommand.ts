// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAnomalyDetectorRequest, DescribeAnomalyDetectorResponse } from "../models/models_0";
import { DescribeAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandInput extends DescribeAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectorCommand}.
 */
export interface DescribeAnomalyDetectorCommandOutput extends DescribeAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific anomaly detector, including its status and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeAnomalyDetectorCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeAnomalyDetectorCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeAnomalyDetectorRequest
 *   workspaceId: "STRING_VALUE", // required
 *   anomalyDetectorId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectorResponse
 * //   anomalyDetector: { // AnomalyDetectorDescription
 * //     arn: "STRING_VALUE", // required
 * //     anomalyDetectorId: "STRING_VALUE", // required
 * //     alias: "STRING_VALUE", // required
 * //     evaluationIntervalInSeconds: Number("int"),
 * //     missingDataAction: { // AnomalyDetectorMissingDataAction Union: only one key present
 * //       markAsAnomaly: true || false,
 * //       skip: true || false,
 * //     },
 * //     configuration: { // AnomalyDetectorConfiguration Union: only one key present
 * //       randomCutForest: { // RandomCutForestConfiguration
 * //         query: "STRING_VALUE", // required
 * //         shingleSize: Number("int"),
 * //         sampleSize: Number("int"),
 * //         ignoreNearExpectedFromAbove: { // IgnoreNearExpected Union: only one key present
 * //           amount: Number("double"),
 * //           ratio: Number("double"),
 * //         },
 * //         ignoreNearExpectedFromBelow: {//  Union: only one key present
 * //           amount: Number("double"),
 * //           ratio: Number("double"),
 * //         },
 * //       },
 * //     },
 * //     labels: { // PrometheusMetricLabelMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: { // AnomalyDetectorStatus
 * //       statusCode: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATION_FAILED" || "UPDATE_FAILED" || "DELETION_FAILED", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectorCommandInput - {@link DescribeAnomalyDetectorCommandInput}
 * @returns {@link DescribeAnomalyDetectorCommandOutput}
 * @see {@link DescribeAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
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
export class DescribeAnomalyDetectorCommand extends $Command
  .classBuilder<
    DescribeAnomalyDetectorCommandInput,
    DescribeAnomalyDetectorCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeAnomalyDetector", {})
  .n("AmpClient", "DescribeAnomalyDetectorCommand")
  .sc(DescribeAnomalyDetector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnomalyDetectorRequest;
      output: DescribeAnomalyDetectorResponse;
    };
    sdk: {
      input: DescribeAnomalyDetectorCommandInput;
      output: DescribeAnomalyDetectorCommandOutput;
    };
  };
}
