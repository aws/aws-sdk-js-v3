// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/models_0";
import { de_BatchGetDeploymentTargetsCommand, se_BatchGetDeploymentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p> Returns an array of one or more targets associated with a deployment. This method
 *             works with all compute types and should be used instead of the deprecated
 *                 <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be
 *             returned is 25.</p>
 *         <p> The type of targets returned depends on the deployment's compute platform or
 *             deployment method: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Lambda</b>: Information about
 *                         Lambda functions targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p>
 *             </li>
 *             <li>
 *                 <p>
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
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetDeploymentTargetsInput
 *   deploymentId: "STRING_VALUE",
 *   targetIds: [ // TargetIdList
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
 *  <p>The deployment with the IAM user or Amazon Web Services account does not
 *             exist.</p>
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
 */
export class BatchGetDeploymentTargetsCommand extends $Command<
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: BatchGetDeploymentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetDeploymentTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetDeploymentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchGetDeploymentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetDeploymentTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetDeploymentTargetsCommandOutput> {
    return de_BatchGetDeploymentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
