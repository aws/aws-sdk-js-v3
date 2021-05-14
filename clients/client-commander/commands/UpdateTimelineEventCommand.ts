import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { UpdateTimelineEventInput, UpdateTimelineEventOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateTimelineEventCommand,
  serializeAws_restJson1UpdateTimelineEventCommand,
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

export interface UpdateTimelineEventCommandInput extends UpdateTimelineEventInput {}
export interface UpdateTimelineEventCommandOutput extends UpdateTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Updates a timeline event. You can update events of type <code>Custom
 *             Event</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, UpdateTimelineEventCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, UpdateTimelineEventCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new UpdateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link UpdateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTimelineEventCommand extends $Command<
  UpdateTimelineEventCommandInput,
  UpdateTimelineEventCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTimelineEventCommandInput) {
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
  ): Handler<UpdateTimelineEventCommandInput, UpdateTimelineEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "UpdateTimelineEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTimelineEventInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTimelineEventOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTimelineEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTimelineEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTimelineEventCommandOutput> {
    return deserializeAws_restJson1UpdateTimelineEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
