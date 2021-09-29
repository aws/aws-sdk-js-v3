import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeEndpointsCommand,
  serializeAws_restJson1DescribeEndpointsCommand,
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

export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {}
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {}

/**
 * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DescribeEndpointsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DescribeEndpointsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEndpointsCommand extends $Command<
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "DescribeEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointsCommandOutput> {
    return deserializeAws_restJson1DescribeEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
