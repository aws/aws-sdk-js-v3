// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTelemetryRuleInput } from "../models/models_0";
import { DeleteTelemetryRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTelemetryRuleCommand}.
 */
export interface DeleteTelemetryRuleCommandInput extends DeleteTelemetryRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteTelemetryRuleCommand}.
 */
export interface DeleteTelemetryRuleCommandOutput extends __MetadataBearer {}

/**
 * Deletes a telemetry rule from your account. Any telemetry configurations previously created by the rule will remain but no new resources will be configured by this rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, DeleteTelemetryRuleCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, DeleteTelemetryRuleCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // DeleteTelemetryRuleInput
 *   RuleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTelemetryRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTelemetryRuleCommandInput - {@link DeleteTelemetryRuleCommandInput}
 * @returns {@link DeleteTelemetryRuleCommandOutput}
 * @see {@link DeleteTelemetryRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTelemetryRuleCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource (such as a telemetry rule) could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link ObservabilityAdminServiceException}
 *
 * Base exception class for all service exceptions from ObservabilityAdmin service.
 *
 * @public
 */
export class DeleteTelemetryRuleCommand extends command<DeleteTelemetryRuleCommandInput, DeleteTelemetryRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTelemetryRule",
  DeleteTelemetryRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTelemetryRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteTelemetryRuleCommandInput;
      output: DeleteTelemetryRuleCommandOutput;
    };
  };
}
