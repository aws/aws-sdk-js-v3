// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeploymentInstanceInput, GetDeploymentInstanceOutput } from "../models/models_0";
import { GetDeploymentInstance } from "../schemas/schemas_4_Deployment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentInstanceCommand}.
 */
export interface GetDeploymentInstanceCommandInput extends GetDeploymentInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentInstanceCommand}.
 */
export interface GetDeploymentInstanceCommandOutput extends GetDeploymentInstanceOutput, __MetadataBearer {}

/**
 * <p>Gets information about an instance as part of a deployment.</p>
 *
 * @deprecated This operation is deprecated, use GetDeploymentTarget instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentInstanceInput
 *   deploymentId: "STRING_VALUE", // required
 *   instanceId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentInstanceOutput
 * //   instanceSummary: { // InstanceSummary
 * //     deploymentId: "STRING_VALUE",
 * //     instanceId: "STRING_VALUE",
 * //     status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     lifecycleEvents: [ // LifecycleEventList
 * //       { // LifecycleEvent
 * //         lifecycleEventName: "STRING_VALUE",
 * //         diagnostics: { // Diagnostics
 * //           errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //           scriptName: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //           logTail: "STRING_VALUE",
 * //         },
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //       },
 * //     ],
 * //     instanceType: "Blue" || "Green",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentInstanceCommandInput - {@link GetDeploymentInstanceCommandInput}
 * @returns {@link GetDeploymentInstanceCommandOutput}
 * @see {@link GetDeploymentInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InstanceDoesNotExistException} (client fault)
 *  <p>The specified instance does not exist in the deployment group.</p>
 *
 * @throws {@link InstanceIdRequiredException} (client fault)
 *  <p>The instance ID was not specified.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class GetDeploymentInstanceCommand extends $Command
  .classBuilder<
    GetDeploymentInstanceCommandInput,
    GetDeploymentInstanceCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "GetDeploymentInstance", {})
  .n("CodeDeployClient", "GetDeploymentInstanceCommand")
  .sc(GetDeploymentInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentInstanceInput;
      output: GetDeploymentInstanceOutput;
    };
    sdk: {
      input: GetDeploymentInstanceCommandInput;
      output: GetDeploymentInstanceCommandOutput;
    };
  };
}
