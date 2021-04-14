import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayTaskRequest, GetWirelessGatewayTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetWirelessGatewayTaskCommand,
  serializeAws_restJson1GetWirelessGatewayTaskCommand,
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

export type GetWirelessGatewayTaskCommandInput = GetWirelessGatewayTaskRequest;
export type GetWirelessGatewayTaskCommandOutput = GetWirelessGatewayTaskResponse & __MetadataBearer;

/**
 * <p>Gets information about a wireless gateway task.</p>
 */
export class GetWirelessGatewayTaskCommand extends $Command<
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWirelessGatewayTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWirelessGatewayTaskCommandInput, GetWirelessGatewayTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessGatewayTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessGatewayTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWirelessGatewayTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessGatewayTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWirelessGatewayTaskCommandOutput> {
    return deserializeAws_restJson1GetWirelessGatewayTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
