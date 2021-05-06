import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexRequest, DeleteMultiplexResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DeleteMultiplexCommand,
  serializeAws_restJson1DeleteMultiplexCommand,
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

export interface DeleteMultiplexCommandInput extends DeleteMultiplexRequest {}
export interface DeleteMultiplexCommandOutput extends DeleteMultiplexResponse, __MetadataBearer {}

/**
 * Delete a multiplex. The multiplex must be idle.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMultiplexCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMultiplexCommand extends $Command<
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMultiplexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteMultiplexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMultiplexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMultiplexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMultiplexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMultiplexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMultiplexCommandOutput> {
    return deserializeAws_restJson1DeleteMultiplexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
