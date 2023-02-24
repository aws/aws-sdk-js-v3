// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import {
  PutLifecycleEventHookExecutionStatusInput,
  PutLifecycleEventHookExecutionStatusInputFilterSensitiveLog,
  PutLifecycleEventHookExecutionStatusOutput,
  PutLifecycleEventHookExecutionStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand,
  serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand,
} from "../protocols/Aws_json1_1";

export interface PutLifecycleEventHookExecutionStatusCommandInput extends PutLifecycleEventHookExecutionStatusInput {}
export interface PutLifecycleEventHookExecutionStatusCommandOutput
  extends PutLifecycleEventHookExecutionStatusOutput,
    __MetadataBearer {}

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
 * const client = new CodeDeployClient(config);
 * const command = new PutLifecycleEventHookExecutionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleEventHookExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleEventHookExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
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
      inputFilterSensitiveLog: PutLifecycleEventHookExecutionStatusInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutLifecycleEventHookExecutionStatusOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutLifecycleEventHookExecutionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> {
    return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
