// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentTargetInput, GetDeploymentTargetOutput } from "../models/models_0";
import { GetDeploymentTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentTargetCommand}.
 */
export interface GetDeploymentTargetCommandInput extends GetDeploymentTargetInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentTargetCommand}.
 */
export interface GetDeploymentTargetCommandOutput extends GetDeploymentTargetOutput, __MetadataBearer {}

/**
 * Returns information about a deployment target.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentTargetCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentTargetCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentTargetInput
 *   deploymentId: "STRING_VALUE", // required
 *   targetId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentTargetCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentTargetOutput
 * //   deploymentTarget: { // DeploymentTarget
 * //     deploymentTargetType: "InstanceTarget" || "LambdaTarget" || "ECSTarget" || "CloudFormationTarget",
 * //     instanceTarget: { // InstanceTarget
 * //       deploymentId: "STRING_VALUE",
 * //       targetId: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       lifecycleEvents: [ // LifecycleEventList
 * //         { // LifecycleEvent
 * //           lifecycleEventName: "STRING_VALUE",
 * //           diagnostics: { // Diagnostics
 * //             errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //             scriptName: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             logTail: "STRING_VALUE",
 * //           },
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //         },
 * //       ],
 * //       instanceLabel: "Blue" || "Green",
 * //     },
 * //     lambdaTarget: { // LambdaTarget
 * //       deploymentId: "STRING_VALUE",
 * //       targetId: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       lifecycleEvents: [
 * //         {
 * //           lifecycleEventName: "STRING_VALUE",
 * //           diagnostics: {
 * //             errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //             scriptName: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             logTail: "STRING_VALUE",
 * //           },
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //         },
 * //       ],
 * //       lambdaFunctionInfo: { // LambdaFunctionInfo
 * //         functionName: "STRING_VALUE",
 * //         functionAlias: "STRING_VALUE",
 * //         currentVersion: "STRING_VALUE",
 * //         targetVersion: "STRING_VALUE",
 * //         targetVersionWeight: Number("double"),
 * //       },
 * //     },
 * //     ecsTarget: { // ECSTarget
 * //       deploymentId: "STRING_VALUE",
 * //       targetId: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       lifecycleEvents: [
 * //         {
 * //           lifecycleEventName: "STRING_VALUE",
 * //           diagnostics: {
 * //             errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //             scriptName: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             logTail: "STRING_VALUE",
 * //           },
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //         },
 * //       ],
 * //       status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //       taskSetsInfo: [ // ECSTaskSetList
 * //         { // ECSTaskSet
 * //           identifer: "STRING_VALUE",
 * //           desiredCount: Number("long"),
 * //           pendingCount: Number("long"),
 * //           runningCount: Number("long"),
 * //           status: "STRING_VALUE",
 * //           trafficWeight: Number("double"),
 * //           targetGroup: { // TargetGroupInfo
 * //             name: "STRING_VALUE",
 * //           },
 * //           taskSetLabel: "Blue" || "Green",
 * //         },
 * //       ],
 * //     },
 * //     cloudFormationTarget: { // CloudFormationTarget
 * //       deploymentId: "STRING_VALUE",
 * //       targetId: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       lifecycleEvents: [
 * //         {
 * //           lifecycleEventName: "STRING_VALUE",
 * //           diagnostics: {
 * //             errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //             scriptName: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             logTail: "STRING_VALUE",
 * //           },
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //         },
 * //       ],
 * //       status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //       resourceType: "STRING_VALUE",
 * //       targetVersionWeight: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentTargetCommandInput - {@link GetDeploymentTargetCommandInput}
 * @returns {@link GetDeploymentTargetCommandOutput}
 * @see {@link GetDeploymentTargetCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentTargetCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentNotStartedException} (client fault)
 *
 * The specified deployment has not started.
 *
 * @throws {@link DeploymentTargetDoesNotExistException} (client fault)
 *
 * The provided target ID does not belong to the attempted deployment.
 *
 * @throws {@link DeploymentTargetIdRequiredException} (client fault)
 *
 * A deployment target ID was not provided.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentTargetIdException} (client fault)
 *
 * The target ID provided was not valid.
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
export class GetDeploymentTargetCommand extends command<GetDeploymentTargetCommandInput, GetDeploymentTargetCommandOutput>(
  _ep0,
  _mw0,
  "GetDeploymentTarget",
  GetDeploymentTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentTargetInput;
      output: GetDeploymentTargetOutput;
    };
    sdk: {
      input: GetDeploymentTargetCommandInput;
      output: GetDeploymentTargetCommandOutput;
    };
  };
}
