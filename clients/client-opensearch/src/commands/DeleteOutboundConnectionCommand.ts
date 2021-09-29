import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DeleteOutboundConnectionRequest, DeleteOutboundConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteOutboundConnectionCommand,
  serializeAws_restJson1DeleteOutboundConnectionCommand,
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

export interface DeleteOutboundConnectionCommandInput extends DeleteOutboundConnectionRequest {}
export interface DeleteOutboundConnectionCommandOutput extends DeleteOutboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the local domain owner to delete an existing outbound cross-cluster connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteOutboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteOutboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DeleteOutboundConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutboundConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteOutboundConnectionCommand extends $Command<
  DeleteOutboundConnectionCommandInput,
  DeleteOutboundConnectionCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOutboundConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOutboundConnectionCommandInput, DeleteOutboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DeleteOutboundConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOutboundConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteOutboundConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOutboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteOutboundConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOutboundConnectionCommandOutput> {
    return deserializeAws_restJson1DeleteOutboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
