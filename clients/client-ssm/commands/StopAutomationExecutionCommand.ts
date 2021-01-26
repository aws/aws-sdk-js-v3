import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import {
  deserializeAws_json1_1StopAutomationExecutionCommand,
  serializeAws_json1_1StopAutomationExecutionCommand,
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

export type StopAutomationExecutionCommandInput = StopAutomationExecutionRequest;
export type StopAutomationExecutionCommandOutput = StopAutomationExecutionResult & __MetadataBearer;

/**
 * <p>Stop an Automation that is currently running.</p>
 */
export class StopAutomationExecutionCommand extends $Command<
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopAutomationExecutionCommandInput) {
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
  ): Handler<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StopAutomationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopAutomationExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopAutomationExecutionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopAutomationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopAutomationExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAutomationExecutionCommandOutput> {
    return deserializeAws_json1_1StopAutomationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
