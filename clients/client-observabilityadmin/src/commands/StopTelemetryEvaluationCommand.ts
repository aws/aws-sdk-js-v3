// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { de_StopTelemetryEvaluationCommand, se_StopTelemetryEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTelemetryEvaluationCommand}.
 */
export interface StopTelemetryEvaluationCommandInput {}
/**
 * @public
 *
 * The output of {@link StopTelemetryEvaluationCommand}.
 */
export interface StopTelemetryEvaluationCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       This action begins offboarding the caller AWS account from the telemetry config feature.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopTelemetryEvaluationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopTelemetryEvaluationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StopTelemetryEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryEvaluationCommandInput - {@link StopTelemetryEvaluationCommandInput}
 * @returns {@link StopTelemetryEvaluationCommandOutput}
 * @see {@link StopTelemetryEvaluationCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for AWS resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class StopTelemetryEvaluationCommand extends $Command
  .classBuilder<
    StopTelemetryEvaluationCommandInput,
    StopTelemetryEvaluationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ObservabilityAdmin", "StopTelemetryEvaluation", {})
  .n("ObservabilityAdminClient", "StopTelemetryEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_StopTelemetryEvaluationCommand)
  .de(de_StopTelemetryEvaluationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopTelemetryEvaluationCommandInput;
      output: StopTelemetryEvaluationCommandOutput;
    };
  };
}
