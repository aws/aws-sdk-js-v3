// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DeactivateAnomalyDetectorRequest, DeactivateAnomalyDetectorResponse } from "../models/models_0";
import { de_DeactivateAnomalyDetectorCommand, se_DeactivateAnomalyDetectorCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "DeactivateAnomalyDetector", {})
  .n("LookoutMetricsClient", "DeactivateAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateAnomalyDetectorCommand)
  .de(de_DeactivateAnomalyDetectorCommand)
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
