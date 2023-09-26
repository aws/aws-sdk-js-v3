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
import {
  PutLifecycleEventHookExecutionStatusInput,
  PutLifecycleEventHookExecutionStatusOutput,
} from "../models/models_0";
import {
  de_PutLifecycleEventHookExecutionStatusCommand,
  se_PutLifecycleEventHookExecutionStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface PutLifecycleEventHookExecutionStatusCommandOutput
  extends PutLifecycleEventHookExecutionStatusOutput,
    __MetadataBearer {}

/**
 * @public
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
 */
export class PutLifecycleEventHookExecutionStatusCommand extends $Command<
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput,
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
  constructor(readonly input: PutLifecycleEventHookExecutionStatusCommandInput) {
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
  ): Handler<PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLifecycleEventHookExecutionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "PutLifecycleEventHookExecutionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "PutLifecycleEventHookExecutionStatus",
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
  private serialize(
    input: PutLifecycleEventHookExecutionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutLifecycleEventHookExecutionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> {
    return de_PutLifecycleEventHookExecutionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
