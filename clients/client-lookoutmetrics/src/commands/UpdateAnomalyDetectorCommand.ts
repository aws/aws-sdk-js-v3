// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { UpdateAnomalyDetectorRequest, UpdateAnomalyDetectorResponse } from "../models/models_0";
import { UpdateAnomalyDetector } from "../schemas/schemas_7_Detector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyDetectorCommand}.
 */
export interface UpdateAnomalyDetectorCommandInput extends UpdateAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyDetectorCommand}.
 */
export interface UpdateAnomalyDetectorCommandOutput extends UpdateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Updates a detector. After activation, you can only change a detector's ingestion delay and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // UpdateAnomalyDetectorRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   KmsKeyArn: "STRING_VALUE",
 *   AnomalyDetectorDescription: "STRING_VALUE",
 *   AnomalyDetectorConfig: { // AnomalyDetectorConfig
 *     AnomalyDetectorFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 *   },
 * };
 * const command = new UpdateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnomalyDetectorResponse
 * //   AnomalyDetectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAnomalyDetectorCommandInput - {@link UpdateAnomalyDetectorCommandInput}
 * @returns {@link UpdateAnomalyDetectorCommandOutput}
 * @see {@link UpdateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 *
 * @public
 */
export class UpdateAnomalyDetectorCommand extends $Command
  .classBuilder<
    UpdateAnomalyDetectorCommandInput,
    UpdateAnomalyDetectorCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "UpdateAnomalyDetector", {})
  .n("LookoutMetricsClient", "UpdateAnomalyDetectorCommand")
  .sc(UpdateAnomalyDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnomalyDetectorRequest;
      output: UpdateAnomalyDetectorResponse;
    };
    sdk: {
      input: UpdateAnomalyDetectorCommandInput;
      output: UpdateAnomalyDetectorCommandOutput;
    };
  };
}
