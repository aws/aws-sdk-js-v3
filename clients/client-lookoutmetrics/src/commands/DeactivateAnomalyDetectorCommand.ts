// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DeactivateAnomalyDetectorRequest, DeactivateAnomalyDetectorResponse } from "../models/models_0";
import { DeactivateAnomalyDetector } from "../schemas/schemas_9_Detector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateAnomalyDetectorCommand}.
 */
export interface DeactivateAnomalyDetectorCommandInput extends DeactivateAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateAnomalyDetectorCommand}.
 */
export interface DeactivateAnomalyDetectorCommandOutput extends DeactivateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Deactivates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DeactivateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DeactivateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // DeactivateAnomalyDetectorRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new DeactivateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateAnomalyDetectorCommandInput - {@link DeactivateAnomalyDetectorCommandInput}
 * @returns {@link DeactivateAnomalyDetectorCommandOutput}
 * @see {@link DeactivateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeactivateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
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
export class DeactivateAnomalyDetectorCommand extends $Command
  .classBuilder<
    DeactivateAnomalyDetectorCommandInput,
    DeactivateAnomalyDetectorCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "DeactivateAnomalyDetector", {})
  .n("LookoutMetricsClient", "DeactivateAnomalyDetectorCommand")
  .sc(DeactivateAnomalyDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeactivateAnomalyDetectorCommandInput;
      output: DeactivateAnomalyDetectorCommandOutput;
    };
  };
}
