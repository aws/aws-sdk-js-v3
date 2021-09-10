import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CreateOrderInput, CreateOrderOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateOrderCommand,
  serializeAws_restJson1CreateOrderCommand,
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

export interface CreateOrderCommandInput extends CreateOrderInput {}
export interface CreateOrderCommandOutput extends CreateOrderOutput, __MetadataBearer {}

/**
 * <p>Creates an order for an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new CreateOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrderCommandInput} for command's `input` shape.
 * @see {@link CreateOrderCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateOrderCommand extends $Command<
  CreateOrderCommandInput,
  CreateOrderCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOrderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrderCommandInput, CreateOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "CreateOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrderInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOrderOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateOrderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrderCommandOutput> {
    return deserializeAws_restJson1CreateOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
