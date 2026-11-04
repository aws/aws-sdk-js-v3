// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SkipWaitTimeForInstanceTerminationInput } from "../models/models_0";
import { SkipWaitTimeForInstanceTermination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandInput extends SkipWaitTimeForInstanceTerminationInput {}
/**
 * @public
 *
 * The output of {@link SkipWaitTimeForInstanceTerminationCommand}.
 */
export interface SkipWaitTimeForInstanceTerminationCommandOutput extends __MetadataBearer {}

/**
 * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
 *
 * @deprecated This operation is deprecated, use ContinueDeployment with DeploymentWaitType instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, SkipWaitTimeForInstanceTerminationCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // SkipWaitTimeForInstanceTerminationInput
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new SkipWaitTimeForInstanceTerminationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SkipWaitTimeForInstanceTerminationCommandInput - {@link SkipWaitTimeForInstanceTerminationCommandInput}
 * @returns {@link SkipWaitTimeForInstanceTerminationCommandOutput}
 * @see {@link SkipWaitTimeForInstanceTerminationCommandInput} for command's `input` shape.
 * @see {@link SkipWaitTimeForInstanceTerminationCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentAlreadyCompletedException} (client fault)
 *
 * The deployment is already complete.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *
 * The deployment with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *
 * At least one deployment ID must be specified.
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *
 * The specified deployment has not started.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *
 * A call was submitted that is not supported for the specified deployment type.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class SkipWaitTimeForInstanceTerminationCommand extends command<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput>(
  _ep0,
  _mw0,
  "SkipWaitTimeForInstanceTermination",
  SkipWaitTimeForInstanceTermination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SkipWaitTimeForInstanceTerminationInput;
      output: {};
    };
    sdk: {
      input: SkipWaitTimeForInstanceTerminationCommandInput;
      output: SkipWaitTimeForInstanceTerminationCommandOutput;
    };
  };
}
