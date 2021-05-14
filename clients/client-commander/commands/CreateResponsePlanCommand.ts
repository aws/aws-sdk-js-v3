import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { CreateResponsePlanInput, CreateResponsePlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResponsePlanCommand,
  serializeAws_restJson1CreateResponsePlanCommand,
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

export interface CreateResponsePlanCommandInput extends CreateResponsePlanInput {}
export interface CreateResponsePlanCommandOutput extends CreateResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Creates a response plan that automates the initial response to incidents. A response
 *             plan engages contacts, starts chat channel collaboration, and
 *             initiates
 *             runbooks at the beginning of an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, CreateResponsePlanCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, CreateResponsePlanCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new CreateResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link CreateResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateResponsePlanCommand extends $Command<
  CreateResponsePlanCommandInput,
  CreateResponsePlanCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateResponsePlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CommanderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResponsePlanCommandInput, CreateResponsePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "CreateResponsePlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResponsePlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResponsePlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResponsePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResponsePlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResponsePlanCommandOutput> {
    return deserializeAws_restJson1CreateResponsePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
