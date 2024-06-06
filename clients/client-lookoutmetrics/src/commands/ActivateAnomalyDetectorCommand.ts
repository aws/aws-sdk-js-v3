// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ActivateAnomalyDetectorRequest, ActivateAnomalyDetectorResponse } from "../models/models_0";
import { de_ActivateAnomalyDetectorCommand, se_ActivateAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateAnomalyDetectorCommand}.
 */
export interface ActivateAnomalyDetectorCommandInput extends ActivateAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link ActivateAnomalyDetectorCommand}.
 */
export interface ActivateAnomalyDetectorCommandOutput extends ActivateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Activates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ActivateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ActivateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // ActivateAnomalyDetectorRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new ActivateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateAnomalyDetectorCommandInput - {@link ActivateAnomalyDetectorCommandInput}
 * @returns {@link ActivateAnomalyDetectorCommandOutput}
 * @see {@link ActivateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link ActivateAnomalyDetectorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ActivateAnomalyDetectorCommand extends $Command
  .classBuilder<
    ActivateAnomalyDetectorCommandInput,
    ActivateAnomalyDetectorCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "ActivateAnomalyDetector", {})
  .n("LookoutMetricsClient", "ActivateAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_ActivateAnomalyDetectorCommand)
  .de(de_ActivateAnomalyDetectorCommand)
  .build() {}
