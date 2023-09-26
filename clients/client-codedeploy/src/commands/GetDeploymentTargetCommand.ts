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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentTargetInput, GetDeploymentTargetOutput } from "../models/models_0";
import { de_GetDeploymentTargetCommand, se_GetDeploymentTargetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p> Returns information about a deployment target. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentTargetCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentTargetCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentTargetInput
 *   deploymentId: "STRING_VALUE",
 *   targetId: "STRING_VALUE",
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
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentTargetIdException} (client fault)
 *  <p> The target ID provided was not valid. </p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class GetDeploymentTargetCommand extends $Command<
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput,
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
  constructor(readonly input: GetDeploymentTargetCommandInput) {
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
  ): Handler<GetDeploymentTargetCommandInput, GetDeploymentTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeploymentTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "GetDeploymentTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "GetDeploymentTarget",
      },
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
  private serialize(input: GetDeploymentTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentTargetCommandOutput> {
    return de_GetDeploymentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
