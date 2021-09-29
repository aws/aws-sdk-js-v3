import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { PauseServiceRequest, PauseServiceResponse } from "../models/models_0";
import {
  deserializeAws_json1_0PauseServiceCommand,
  serializeAws_json1_0PauseServiceCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PauseServiceCommandInput extends PauseServiceRequest {}
export interface PauseServiceCommandOutput extends PauseServiceResponse, __MetadataBearer {}

/**
 * <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
 *       removed).</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, PauseServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, PauseServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new PauseServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PauseServiceCommandInput} for command's `input` shape.
 * @see {@link PauseServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PauseServiceCommand extends $Command<
  PauseServiceCommandInput,
  PauseServiceCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PauseServiceCommandInput) {
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
  ): Handler<PauseServiceCommandInput, PauseServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "PauseServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PauseServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PauseServiceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PauseServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PauseServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PauseServiceCommandOutput> {
    return deserializeAws_json1_0PauseServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
