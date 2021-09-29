import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeServiceUpdatesRequest, DescribeServiceUpdatesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServiceUpdatesCommand,
  serializeAws_json1_1DescribeServiceUpdatesCommand,
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

export interface DescribeServiceUpdatesCommandInput extends DescribeServiceUpdatesRequest {}
export interface DescribeServiceUpdatesCommandOutput extends DescribeServiceUpdatesResponse, __MetadataBearer {}

/**
 * <p>Returns details of the service updates</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeServiceUpdatesCommand extends $Command<
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServiceUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeServiceUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceUpdatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceUpdatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServiceUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServiceUpdatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServiceUpdatesCommandOutput> {
    return deserializeAws_json1_1DescribeServiceUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
