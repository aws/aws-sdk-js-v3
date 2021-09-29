import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlanTemplatesCommand,
  serializeAws_restJson1ListBackupPlanTemplatesCommand,
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

export interface ListBackupPlanTemplatesCommandInput extends ListBackupPlanTemplatesInput {}
export interface ListBackupPlanTemplatesCommandOutput extends ListBackupPlanTemplatesOutput, __MetadataBearer {}

/**
 * <p>Returns metadata of your saved backup plan templates, including the template ID, name,
 *          and the creation and deletion dates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanTemplatesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanTemplatesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanTemplatesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBackupPlanTemplatesCommand extends $Command<
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupPlanTemplatesCommandInput) {
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
  ): Handler<ListBackupPlanTemplatesCommandInput, ListBackupPlanTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlanTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlanTemplatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanTemplatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlanTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlanTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlanTemplatesCommandOutput> {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
