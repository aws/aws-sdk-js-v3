// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutLifecycleEventHookExecutionStatusInput,
  PutLifecycleEventHookExecutionStatusOutput,
} from "../models/models_0";
import { PutLifecycleEventHookExecutionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLifecycleEventHookExecutionStatusCommand}.
 */
export interface PutLifecycleEventHookExecutionStatusCommandInput extends PutLifecycleEventHookExecutionStatusInput {}
/**
 * @public
 *
 * The output of {@link PutLifecycleEventHookExecutionStatusCommand}.
 */
export interface PutLifecycleEventHookExecutionStatusCommandOutput extends PutLifecycleEventHookExecutionStatusOutput, __MetadataBearer {}

/**
 * <p> Sets the result of a Lambda validation function. The function validates
 *             lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available
 *             lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>.
 *             For Amazon ECS deployments, the available lifecycle hooks are
 *                 <code>BeforeInstall</code>, <code>AfterInstall</code>,
 *                 <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and
 *                 <code>AfterAllowTraffic</code>. Lambda validation functions return
 *                 <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and
 *                 <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // PutLifecycleEventHookExecutionStatusInput
 *   deploymentId: "STRING_VALUE",
 *   lifecycleEventHookExecutionId: "STRING_VALUE",
 *   status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * };
 * const command = new PutLifecycleEventHookExecutionStatusCommand(input);
 * const response = await client.send(command);
 * // { // PutLifecycleEventHookExecutionStatusOutput
 * //   lifecycleEventHookExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLifecycleEventHookExecutionStatusCommandInput - {@link PutLifecycleEventHookExecutionStatusCommandInput}
 * @returns {@link PutLifecycleEventHookExecutionStatusCommandOutput}
 * @see {@link PutLifecycleEventHookExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleEventHookExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidLifecycleEventHookExecutionIdException} (client fault)
 *  <p>A lifecycle event hook is invalid. Review the <code>hooks</code> section in your
 *             AppSpec file to ensure the lifecycle events and <code>hooks</code> functions are
 *             valid.</p>
 *
 * @throws {@link InvalidLifecycleEventHookExecutionStatusException} (client fault)
 *  <p>The result of a Lambda validation function that verifies a lifecycle event
 *             is invalid. It should return <code>Succeeded</code> or <code>Failed</code>.</p>
 *
 * @throws {@link LifecycleEventAlreadyCompletedException} (client fault)
 *  <p>An attempt to return the status of an already completed lifecycle event
 *             occurred.</p>
 *
 * @throws {@link UnsupportedActionForDeploymentTypeException} (client fault)
 *  <p>A call was submitted that is not supported for the specified deployment type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class PutLifecycleEventHookExecutionStatusCommand extends $Command
  .classBuilder<
    PutLifecycleEventHookExecutionStatusCommandInput,
    PutLifecycleEventHookExecutionStatusCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "PutLifecycleEventHookExecutionStatus", {})
  .n("CodeDeployClient", "PutLifecycleEventHookExecutionStatusCommand")
  .sc(PutLifecycleEventHookExecutionStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecycleEventHookExecutionStatusInput;
      output: PutLifecycleEventHookExecutionStatusOutput;
    };
    sdk: {
      input: PutLifecycleEventHookExecutionStatusCommandInput;
      output: PutLifecycleEventHookExecutionStatusCommandOutput;
    };
  };
}
