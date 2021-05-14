import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { UpdateDeletionProtectionInput, UpdateDeletionProtectionOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDeletionProtectionCommand,
  serializeAws_restJson1UpdateDeletionProtectionCommand,
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

export interface UpdateDeletionProtectionCommandInput extends UpdateDeletionProtectionInput {}
export interface UpdateDeletionProtectionCommandOutput extends UpdateDeletionProtectionOutput, __MetadataBearer {}

/**
 * <p>Update deletion protection to either allow or deny deletion of the final Region in a
 *             replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, UpdateDeletionProtectionCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, UpdateDeletionProtectionCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new UpdateDeletionProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeletionProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeletionProtectionCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDeletionProtectionCommand extends $Command<
  UpdateDeletionProtectionCommandInput,
  UpdateDeletionProtectionCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeletionProtectionCommandInput) {
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
  ): Handler<UpdateDeletionProtectionCommandInput, UpdateDeletionProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "UpdateDeletionProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeletionProtectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeletionProtectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeletionProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeletionProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeletionProtectionCommandOutput> {
    return deserializeAws_restJson1UpdateDeletionProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
