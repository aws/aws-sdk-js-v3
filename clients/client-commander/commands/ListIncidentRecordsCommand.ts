import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { ListIncidentRecordsInput, ListIncidentRecordsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListIncidentRecordsCommand,
  serializeAws_restJson1ListIncidentRecordsCommand,
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

export interface ListIncidentRecordsCommandInput extends ListIncidentRecordsInput {}
export interface ListIncidentRecordsCommandOutput extends ListIncidentRecordsOutput, __MetadataBearer {}

/**
 * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
 *             Resource Name (ARN) of the incident record you want to update. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, ListIncidentRecordsCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, ListIncidentRecordsCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new ListIncidentRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIncidentRecordsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentRecordsCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListIncidentRecordsCommand extends $Command<
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIncidentRecordsCommandInput) {
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
  ): Handler<ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "ListIncidentRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIncidentRecordsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListIncidentRecordsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIncidentRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIncidentRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIncidentRecordsCommandOutput> {
    return deserializeAws_restJson1ListIncidentRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
