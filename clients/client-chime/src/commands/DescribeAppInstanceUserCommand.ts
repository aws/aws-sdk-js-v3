import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DescribeAppInstanceUserRequest, DescribeAppInstanceUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAppInstanceUserCommand,
  serializeAws_restJson1DescribeAppInstanceUserCommand,
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

export interface DescribeAppInstanceUserCommandInput extends DescribeAppInstanceUserRequest {}
export interface DescribeAppInstanceUserCommandOutput extends DescribeAppInstanceUserResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of an <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceUserCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceUserCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DescribeAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAppInstanceUserCommand extends $Command<
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAppInstanceUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppInstanceUserCommandInput, DescribeAppInstanceUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAppInstanceUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAppInstanceUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1DescribeAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
