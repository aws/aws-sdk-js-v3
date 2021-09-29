import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { GetMessagingSessionEndpointRequest, GetMessagingSessionEndpointResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetMessagingSessionEndpointCommand,
  serializeAws_restJson1GetMessagingSessionEndpointCommand,
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

export interface GetMessagingSessionEndpointCommandInput extends GetMessagingSessionEndpointRequest {}
export interface GetMessagingSessionEndpointCommandOutput
  extends GetMessagingSessionEndpointResponse,
    __MetadataBearer {}

/**
 * <p>The details of the endpoint for the messaging session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetMessagingSessionEndpointCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetMessagingSessionEndpointCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const command = new GetMessagingSessionEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMessagingSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMessagingSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMessagingSessionEndpointCommand extends $Command<
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
  ChimeSDKMessagingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMessagingSessionEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMessagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMessagingSessionEndpointCommandInput, GetMessagingSessionEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMessagingClient";
    const commandName = "GetMessagingSessionEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMessagingSessionEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMessagingSessionEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMessagingSessionEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMessagingSessionEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMessagingSessionEndpointCommandOutput> {
    return deserializeAws_restJson1GetMessagingSessionEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
