import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { StartFlowRequest, StartFlowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartFlowCommand,
  serializeAws_restJson1StartFlowCommand,
} from "../protocols/Aws_restJson1";
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

export interface StartFlowCommandInput extends StartFlowRequest {}
export interface StartFlowCommandOutput extends StartFlowResponse, __MetadataBearer {}

/**
 * <p> Activates an existing flow. For on-demand flows, this operation runs the flow
 *       immediately. For schedule and event-triggered flows, this operation activates the flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, StartFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, StartFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new StartFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFlowCommandInput} for command's `input` shape.
 * @see {@link StartFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartFlowCommand extends $Command<
  StartFlowCommandInput,
  StartFlowCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFlowCommandInput, StartFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "StartFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartFlowResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFlowCommandOutput> {
    return deserializeAws_restJson1StartFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
