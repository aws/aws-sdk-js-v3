import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { UpdateReplicationSetInput, UpdateReplicationSetOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateReplicationSetCommand,
  serializeAws_restJson1UpdateReplicationSetCommand,
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

export interface UpdateReplicationSetCommandInput extends UpdateReplicationSetInput {}
export interface UpdateReplicationSetCommandOutput extends UpdateReplicationSetOutput, __MetadataBearer {}

/**
 * <p>Add or delete Regions from your replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, UpdateReplicationSetCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, UpdateReplicationSetCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new UpdateReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateReplicationSetCommand extends $Command<
  UpdateReplicationSetCommandInput,
  UpdateReplicationSetCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReplicationSetCommandInput) {
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
  ): Handler<UpdateReplicationSetCommandInput, UpdateReplicationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "UpdateReplicationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReplicationSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReplicationSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateReplicationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateReplicationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReplicationSetCommandOutput> {
    return deserializeAws_restJson1UpdateReplicationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
