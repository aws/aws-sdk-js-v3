import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { CloseTunnelRequest, CloseTunnelResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CloseTunnelCommand,
  serializeAws_json1_1CloseTunnelCommand,
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

export type CloseTunnelCommandInput = CloseTunnelRequest;
export type CloseTunnelCommandOutput = CloseTunnelResponse & __MetadataBearer;

/**
 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
 * 			request is received, we close the WebSocket connections between the client and proxy
 * 			server so no data can be transmitted.</p>
 */
export class CloseTunnelCommand extends $Command<
  CloseTunnelCommandInput,
  CloseTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CloseTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloseTunnelCommandInput, CloseTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "CloseTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloseTunnelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloseTunnelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloseTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CloseTunnelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseTunnelCommandOutput> {
    return deserializeAws_json1_1CloseTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
