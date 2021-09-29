import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DescribeOutboundConnectionsRequest, DescribeOutboundConnectionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOutboundConnectionsCommand,
  serializeAws_restJson1DescribeOutboundConnectionsCommand,
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

export interface DescribeOutboundConnectionsCommandInput extends DescribeOutboundConnectionsRequest {}
export interface DescribeOutboundConnectionsCommandOutput
  extends DescribeOutboundConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the outbound cross-cluster connections for a local domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeOutboundConnectionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeOutboundConnectionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeOutboundConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOutboundConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundConnectionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOutboundConnectionsCommand extends $Command<
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOutboundConnectionsCommandInput) {
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
  ): Handler<DescribeOutboundConnectionsCommandInput, DescribeOutboundConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeOutboundConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOutboundConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOutboundConnectionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOutboundConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOutboundConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOutboundConnectionsCommandOutput> {
    return deserializeAws_restJson1DescribeOutboundConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
