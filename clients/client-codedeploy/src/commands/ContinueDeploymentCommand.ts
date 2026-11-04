// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ContinueDeploymentInput } from "../models/models_0";
import { ContinueDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandInput extends ContinueDeploymentInput {}
/**
 * @public
 *
 * The output of {@link ContinueDeploymentCommand}.
 */
export interface ContinueDeploymentCommandOutput extends __MetadataBearer {}

/**
 * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ContinueDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ContinueDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ContinueDeploymentInput
 *   deploymentId: "STRING_VALUE",
 *   deploymentWaitType: "READY_WAIT" || "TERMINATION_WAIT",
 * };
 * const command = new ContinueDeploymentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContinueDeploymentCommandInput - {@link ContinueDeploymentCommandInput}
 * @returns {@link ContinueDeploymentCommandOutput}
 * @see {@link ContinueDeploymentCommandInput} for command's `input` shape.
 * @see {@link ContinueDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentIsNotInReadyStateException} (client fault)
 *
 * The deployment does not have a status of Ready and can't continue yet.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentStatusException} (client fault)
 *
 * The specified deployment status doesn't exist or cannot be determined.
 *
 * @throws {@link InvalidDeploymentWaitTypeException} (client fault)
 *
 * The wait type is invalid.
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
export class ContinueDeploymentCommand extends command<ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "ContinueDeployment",
  ContinueDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ContinueDeploymentInput;
      output: {};
    };
    sdk: {
      input: ContinueDeploymentCommandInput;
      output: ContinueDeploymentCommandOutput;
    };
  };
}
