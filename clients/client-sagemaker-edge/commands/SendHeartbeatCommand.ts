import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";
import { SendHeartbeatRequest } from "../models/models_0";
import {
  deserializeAws_restJson1SendHeartbeatCommand,
  serializeAws_restJson1SendHeartbeatCommand,
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

export type SendHeartbeatCommandInput = SendHeartbeatRequest;
export type SendHeartbeatCommandOutput = __MetadataBearer;

/**
 * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
 */
export class SendHeartbeatCommand extends $Command<
  SendHeartbeatCommandInput,
  SendHeartbeatCommandOutput,
  SagemakerEdgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendHeartbeatCommandInput, SendHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "SendHeartbeatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendHeartbeatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendHeartbeatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendHeartbeatCommandOutput> {
    return deserializeAws_restJson1SendHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
