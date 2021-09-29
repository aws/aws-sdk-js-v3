import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DeleteInboundConnectionRequest, DeleteInboundConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteInboundConnectionCommand,
  serializeAws_restJson1DeleteInboundConnectionCommand,
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

export interface DeleteInboundConnectionCommandInput extends DeleteInboundConnectionRequest {}
export interface DeleteInboundConnectionCommandOutput extends DeleteInboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the remote domain owner to delete an existing inbound cross-cluster connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteInboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteInboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DeleteInboundConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInboundConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteInboundConnectionCommand extends $Command<
  DeleteInboundConnectionCommandInput,
  DeleteInboundConnectionCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInboundConnectionCommandInput) {
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
  ): Handler<DeleteInboundConnectionCommandInput, DeleteInboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DeleteInboundConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInboundConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInboundConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteInboundConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInboundConnectionCommandOutput> {
    return deserializeAws_restJson1DeleteInboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
