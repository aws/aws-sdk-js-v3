import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeOriginEndpointRequest, DescribeOriginEndpointResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOriginEndpointCommand,
  serializeAws_restJson1DescribeOriginEndpointCommand,
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

export interface DescribeOriginEndpointCommandInput extends DescribeOriginEndpointRequest {}
export interface DescribeOriginEndpointCommandOutput extends DescribeOriginEndpointResponse, __MetadataBearer {}

/**
 * Gets details about an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DescribeOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeOriginEndpointCommand extends $Command<
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOriginEndpointCommandInput, DescribeOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "DescribeOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOriginEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOriginEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOriginEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOriginEndpointCommandOutput> {
    return deserializeAws_restJson1DescribeOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
