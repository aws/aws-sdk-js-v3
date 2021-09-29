import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStudioComponentRequest, CreateStudioComponentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateStudioComponentCommand,
  serializeAws_restJson1CreateStudioComponentCommand,
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

export interface CreateStudioComponentCommandInput extends CreateStudioComponentRequest {}
export interface CreateStudioComponentCommandOutput extends CreateStudioComponentResponse, __MetadataBearer {}

/**
 * <p>Creates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link CreateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStudioComponentCommand extends $Command<
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStudioComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStudioComponentCommandInput, CreateStudioComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStudioComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStudioComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStudioComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStudioComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStudioComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStudioComponentCommandOutput> {
    return deserializeAws_restJson1CreateStudioComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
