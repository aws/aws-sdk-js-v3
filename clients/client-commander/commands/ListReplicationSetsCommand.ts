import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { ListReplicationSetsInput, ListReplicationSetsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListReplicationSetsCommand,
  serializeAws_restJson1ListReplicationSetsCommand,
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

export interface ListReplicationSetsCommandInput extends ListReplicationSetsInput {}
export interface ListReplicationSetsCommandOutput extends ListReplicationSetsOutput, __MetadataBearer {}

/**
 * <p>Lists details about the replication set configured in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, ListReplicationSetsCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, ListReplicationSetsCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new ListReplicationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReplicationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationSetsCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReplicationSetsCommand extends $Command<
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReplicationSetsCommandInput) {
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
  ): Handler<ListReplicationSetsCommandInput, ListReplicationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "ListReplicationSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReplicationSetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListReplicationSetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReplicationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReplicationSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReplicationSetsCommandOutput> {
    return deserializeAws_restJson1ListReplicationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
