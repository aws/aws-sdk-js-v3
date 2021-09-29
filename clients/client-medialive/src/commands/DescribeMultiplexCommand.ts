import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeMultiplexRequest, DescribeMultiplexResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeMultiplexCommand,
  serializeAws_restJson1DescribeMultiplexCommand,
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

export interface DescribeMultiplexCommandInput extends DescribeMultiplexRequest {}
export interface DescribeMultiplexCommandOutput extends DescribeMultiplexResponse, __MetadataBearer {}

/**
 * Gets details about a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMultiplexCommand extends $Command<
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMultiplexCommandInput) {
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
  ): Handler<DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeMultiplexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMultiplexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMultiplexResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMultiplexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMultiplexCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMultiplexCommandOutput> {
    return deserializeAws_restJson1DescribeMultiplexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
