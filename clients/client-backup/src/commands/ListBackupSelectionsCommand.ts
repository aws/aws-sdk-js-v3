import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupSelectionsInput, ListBackupSelectionsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupSelectionsCommand,
  serializeAws_restJson1ListBackupSelectionsCommand,
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

export interface ListBackupSelectionsCommandInput extends ListBackupSelectionsInput {}
export interface ListBackupSelectionsCommandOutput extends ListBackupSelectionsOutput, __MetadataBearer {}

/**
 * <p>Returns an array containing metadata of the resources associated with the target backup
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupSelectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBackupSelectionsCommand extends $Command<
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupSelectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupSelectionsCommandInput, ListBackupSelectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupSelectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupSelectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupSelectionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupSelectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupSelectionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupSelectionsCommandOutput> {
    return deserializeAws_restJson1ListBackupSelectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
