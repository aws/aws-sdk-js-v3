// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentInstanceInput, GetDeploymentInstanceOutput } from "../models/models_0";
import { GetDeploymentInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about an instance as part of a deployment.
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
 *
 * The deployment with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *
 * At least one deployment ID must be specified.
 *
 * @throws {@link InstanceDoesNotExistException} (client fault)
 *
 * The specified instance does not exist in the deployment group.
 *
 * @throws {@link InstanceIdRequiredException} (client fault)
 *
 * The instance ID was not specified.
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *
 * The computePlatform is invalid. The computePlatform should be `Lambda`, `Server`, or `ECS`.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *
 * The on-premises instance name was specified in an invalid format.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class GetDeploymentInstanceCommand extends command<GetDeploymentInstanceCommandInput, GetDeploymentInstanceCommandOutput>(
  _ep0,
  _mw0,
  "GetDeploymentInstance",
  GetDeploymentInstance$
) {
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
