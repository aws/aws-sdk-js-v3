// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/models_0";
import { BatchGetDeploymentTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetDeploymentTargetsCommand}.
 */
export interface BatchGetDeploymentTargetsCommandInput extends BatchGetDeploymentTargetsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetDeploymentTargetsCommand}.
 */
export interface BatchGetDeploymentTargetsCommandOutput extends BatchGetDeploymentTargetsOutput, __MetadataBearer {}

/**
 * Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated `BatchGetDeploymentInstances`. The maximum number of targets that can be returned is 25.
 *
 * The type of targets returned depends on the deployment's compute platform or deployment method:
 *
 * - **EC2/On-premises**: Information about Amazon EC2 instance targets.
 * - **Lambda**: Information about Lambda functions targets.
 * - **Amazon ECS**: Information about Amazon ECS service targets.
 * - **CloudFormation**: Information about targets of blue/green deployments initiated by a CloudFormation stack update.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetDeploymentTargetsInput
 *   deploymentId: "STRING_VALUE", // required
 *   targetIds: [ // TargetIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDeploymentTargetsOutput
 * //   deploymentTargets: [ // DeploymentTargetList
 * //     { // DeploymentTarget
 * //       deploymentTargetType: "InstanceTarget" || "LambdaTarget" || "ECSTarget" || "CloudFormationTarget",
 * //       instanceTarget: { // InstanceTarget
 * //         deploymentId: "STRING_VALUE",
 * //         targetId: "STRING_VALUE",
 * //         targetArn: "STRING_VALUE",
 * //         status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         lifecycleEvents: [ // LifecycleEventList
 * //           { // LifecycleEvent
 * //             lifecycleEventName: "STRING_VALUE",
 * //             diagnostics: { // Diagnostics
 * //               errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //               scriptName: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //               logTail: "STRING_VALUE",
 * //             },
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //           },
 * //         ],
 * //         instanceLabel: "Blue" || "Green",
 * //       },
 * //       lambdaTarget: { // LambdaTarget
 * //         deploymentId: "STRING_VALUE",
 * //         targetId: "STRING_VALUE",
 * //         targetArn: "STRING_VALUE",
 * //         status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         lifecycleEvents: [
 * //           {
 * //             lifecycleEventName: "STRING_VALUE",
 * //             diagnostics: {
 * //               errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //               scriptName: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //               logTail: "STRING_VALUE",
 * //             },
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //           },
 * //         ],
 * //         lambdaFunctionInfo: { // LambdaFunctionInfo
 * //           functionName: "STRING_VALUE",
 * //           functionAlias: "STRING_VALUE",
 * //           currentVersion: "STRING_VALUE",
 * //           targetVersion: "STRING_VALUE",
 * //           targetVersionWeight: Number("double"),
 * //         },
 * //       },
 * //       ecsTarget: { // ECSTarget
 * //         deploymentId: "STRING_VALUE",
 * //         targetId: "STRING_VALUE",
 * //         targetArn: "STRING_VALUE",
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         lifecycleEvents: [
 * //           {
 * //             lifecycleEventName: "STRING_VALUE",
 * //             diagnostics: {
 * //               errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //               scriptName: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //               logTail: "STRING_VALUE",
 * //             },
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //           },
 * //         ],
 * //         status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //         taskSetsInfo: [ // ECSTaskSetList
 * //           { // ECSTaskSet
 * //             identifer: "STRING_VALUE",
 * //             desiredCount: Number("long"),
 * //             pendingCount: Number("long"),
 * //             runningCount: Number("long"),
 * //             status: "STRING_VALUE",
 * //             trafficWeight: Number("double"),
 * //             targetGroup: { // TargetGroupInfo
 * //               name: "STRING_VALUE",
 * //             },
 * //             taskSetLabel: "Blue" || "Green",
 * //           },
 * //         ],
 * //       },
 * //       cloudFormationTarget: { // CloudFormationTarget
 * //         deploymentId: "STRING_VALUE",
 * //         targetId: "STRING_VALUE",
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         lifecycleEvents: [
 * //           {
 * //             lifecycleEventName: "STRING_VALUE",
 * //             diagnostics: {
 * //               errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //               scriptName: "STRING_VALUE",
 * //               message: "STRING_VALUE",
 * //               logTail: "STRING_VALUE",
 * //             },
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //           },
 * //         ],
 * //         status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //         resourceType: "STRING_VALUE",
 * //         targetVersionWeight: Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDeploymentTargetsCommandInput - {@link BatchGetDeploymentTargetsCommandInput}
 * @returns {@link BatchGetDeploymentTargetsCommandOutput}
 * @see {@link BatchGetDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link DeploymentTargetListSizeExceededException} (client fault)
 *
 * The maximum number of targets that can be associated with an Amazon ECS or Lambda deployment was exceeded. The target list of both types of deployments must have exactly one item. This exception does not apply to EC2/On-premises deployments.
 *
 * @throws {@link InstanceDoesNotExistException} (client fault)
 *
 * The specified instance does not exist in the deployment group.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentTargetIdException} (client fault)
 *
 * The target ID provided was not valid.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class BatchGetDeploymentTargetsCommand extends command<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetDeploymentTargets",
  BatchGetDeploymentTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDeploymentTargetsInput;
      output: BatchGetDeploymentTargetsOutput;
    };
    sdk: {
      input: BatchGetDeploymentTargetsCommandInput;
      output: BatchGetDeploymentTargetsCommandOutput;
    };
  };
}
