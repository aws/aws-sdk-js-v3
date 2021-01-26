import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { SendCommandRequest, SendCommandResult } from "../models/models_1";
import {
  deserializeAws_json1_1SendCommandCommand,
  serializeAws_json1_1SendCommandCommand,
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

export type SendCommandCommandInput = SendCommandRequest;
export type SendCommandCommandOutput = SendCommandResult & __MetadataBearer;

/**
 * <p>Runs commands on one or more managed instances.</p>
 */
export class SendCommandCommand extends $Command<
  SendCommandCommandInput,
  SendCommandCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendCommandCommandInput) {
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
  ): Handler<SendCommandCommandInput, SendCommandCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "SendCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendCommandRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendCommandResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendCommandCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendCommandCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendCommandCommandOutput> {
    return deserializeAws_json1_1SendCommandCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
