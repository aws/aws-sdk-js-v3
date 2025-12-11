// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/models_0";
import { BatchGetDeploymentTargets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Returns an array of one or more targets associated with a deployment. This method
 *             works with all compute types and should be used instead of the deprecated
 *                 <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be
 *             returned is 25.</p>
 *          <p> The type of targets returned depends on the deployment's compute platform or
 *             deployment method: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Lambda</b>: Information about
 *                         Lambda functions targets. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>CloudFormation</b>: Information about
 *                     targets of blue/green deployments initiated by a CloudFormation stack
 *                     update.</p>
 *             </li>
 *          </ul>
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
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *  <p>The specified deployment has not started.</p>
 *
 * @throws {@link DeploymentTargetDoesNotExistException} (client fault)
 *  <p> The provided target ID does not belong to the attempted deployment. </p>
 *
 * @throws {@link DeploymentTargetIdRequiredException} (client fault)
 *  <p> A deployment target ID was not provided. </p>
 *
 * @throws {@link DeploymentTargetListSizeExceededException} (client fault)
 *  <p> The maximum number of targets that can be associated with an Amazon ECS or
 *                 Lambda deployment was exceeded. The target list of both types of
 *             deployments must have exactly one item. This exception does not apply to EC2/On-premises
 *             deployments. </p>
 *
 * @throws {@link InstanceDoesNotExistException} (client fault)
 *  <p>The specified instance does not exist in the deployment group.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentTargetIdException} (client fault)
 *  <p> The target ID provided was not valid. </p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class BatchGetDeploymentTargetsCommand extends $Command
  .classBuilder<
    BatchGetDeploymentTargetsCommandInput,
    BatchGetDeploymentTargetsCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "BatchGetDeploymentTargets", {})
  .n("CodeDeployClient", "BatchGetDeploymentTargetsCommand")
  .sc(BatchGetDeploymentTargets)
  .build() {
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
