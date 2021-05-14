import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { DeleteTimelineEventInput, DeleteTimelineEventOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTimelineEventCommand,
  serializeAws_restJson1DeleteTimelineEventCommand,
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

export interface DeleteTimelineEventCommandInput extends DeleteTimelineEventInput {}
export interface DeleteTimelineEventCommandOutput extends DeleteTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Deletes a timeline event from an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, DeleteTimelineEventCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, DeleteTimelineEventCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new DeleteTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTimelineEventCommandInput} for command's `input` shape.
 * @see {@link DeleteTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteTimelineEventCommand extends $Command<
  DeleteTimelineEventCommandInput,
  DeleteTimelineEventCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTimelineEventCommandInput) {
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
  ): Handler<DeleteTimelineEventCommandInput, DeleteTimelineEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "DeleteTimelineEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTimelineEventInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTimelineEventOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTimelineEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTimelineEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTimelineEventCommandOutput> {
    return deserializeAws_restJson1DeleteTimelineEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
