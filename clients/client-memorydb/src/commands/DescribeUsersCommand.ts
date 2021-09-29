import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeUsersRequest, DescribeUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeUsersCommand,
  serializeAws_json1_1DescribeUsersCommand,
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

export interface DescribeUsersCommandInput extends DescribeUsersRequest {}
export interface DescribeUsersCommandOutput extends DescribeUsersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeUsersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeUsersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeUsersCommand extends $Command<
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUsersCommandInput) {
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
  ): Handler<DescribeUsersCommandInput, DescribeUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUsersCommandOutput> {
    return deserializeAws_json1_1DescribeUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
