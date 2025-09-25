// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { StopTelemetryEvaluationForOrganization } from "../schemas/schemas_14_StopTelemetryEvaluationForOrganization";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTelemetryEvaluationForOrganizationCommand}.
 */
export interface StopTelemetryEvaluationForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link StopTelemetryEvaluationForOrganizationCommand}.
 */
export interface StopTelemetryEvaluationForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       This action offboards the Organization of the caller Amazon Web Services account from the telemetry config feature.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StopTelemetryEvaluationForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StopTelemetryEvaluationForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = {};
 * const command = new StopTelemetryEvaluationForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTelemetryEvaluationForOrganizationCommandInput - {@link StopTelemetryEvaluationForOrganizationCommandInput}
 * @returns {@link StopTelemetryEvaluationForOrganizationCommandOutput}
 * @see {@link StopTelemetryEvaluationForOrganizationCommandInput} for command's `input` shape.
 * @see {@link StopTelemetryEvaluationForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *       The request throughput limit was exceeded.
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
export class StopTelemetryEvaluationForOrganizationCommand extends $Command
  .classBuilder<
    StopTelemetryEvaluationForOrganizationCommandInput,
    StopTelemetryEvaluationForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "StopTelemetryEvaluationForOrganization", {})
  .n("ObservabilityAdminClient", "StopTelemetryEvaluationForOrganizationCommand")
  .sc(StopTelemetryEvaluationForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopTelemetryEvaluationForOrganizationCommandInput;
      output: StopTelemetryEvaluationForOrganizationCommandOutput;
    };
  };
}
