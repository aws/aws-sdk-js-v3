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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  StartDeploymentRequest,
  StartDeploymentRequestFilterSensitiveLog,
  StartDeploymentResponse,
  StartDeploymentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartDeploymentCommand,
  serializeAws_json1_0StartDeploymentCommand,
} from "../protocols/Aws_json1_0";

export interface StartDeploymentCommandInput extends StartDeploymentRequest {}
export interface StartDeploymentCommandOutput extends StartDeploymentResponse, __MetadataBearer {}

/**
 * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner
 *       service.</p>
 *          <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker
 *       image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, StartDeploymentCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, StartDeploymentCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class StartDeploymentCommand extends $Command<
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: StartDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDeploymentCommandInput, StartDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "StartDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDeploymentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeploymentCommandOutput> {
    return deserializeAws_json1_0StartDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
