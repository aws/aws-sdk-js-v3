import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartAutomationExecutionRequest, StartAutomationExecutionResult } from "../models/models_1";
import {
  deserializeAws_json1_1StartAutomationExecutionCommand,
  serializeAws_json1_1StartAutomationExecutionCommand,
} from "../protocols/Aws_json1_1";
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

export type StartAutomationExecutionCommandInput = StartAutomationExecutionRequest;
export type StartAutomationExecutionCommandOutput = StartAutomationExecutionResult & __MetadataBearer;

/**
 * <p>Initiates execution of an Automation document.</p>
 */
export class StartAutomationExecutionCommand extends $Command<
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAutomationExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartAutomationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAutomationExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartAutomationExecutionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAutomationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAutomationExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAutomationExecutionCommandOutput> {
    return deserializeAws_json1_1StartAutomationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
