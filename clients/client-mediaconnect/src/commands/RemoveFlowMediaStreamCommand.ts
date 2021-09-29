import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowMediaStreamRequest, RemoveFlowMediaStreamResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveFlowMediaStreamCommand,
  serializeAws_restJson1RemoveFlowMediaStreamCommand,
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

export interface RemoveFlowMediaStreamCommandInput extends RemoveFlowMediaStreamRequest {}
export interface RemoveFlowMediaStreamCommandOutput extends RemoveFlowMediaStreamResponse, __MetadataBearer {}

/**
 * Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveFlowMediaStreamCommand extends $Command<
  RemoveFlowMediaStreamCommandInput,
  RemoveFlowMediaStreamCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFlowMediaStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowMediaStreamCommandInput, RemoveFlowMediaStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowMediaStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFlowMediaStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFlowMediaStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFlowMediaStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFlowMediaStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowMediaStreamCommandOutput> {
    return deserializeAws_restJson1RemoveFlowMediaStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
