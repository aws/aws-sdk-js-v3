import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateBackupVaultInput, CreateBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackupVaultCommand,
  serializeAws_restJson1CreateBackupVaultCommand,
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

export interface CreateBackupVaultCommandInput extends CreateBackupVaultInput {}
export interface CreateBackupVaultCommandOutput extends CreateBackupVaultOutput, __MetadataBearer {}

/**
 * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code>
 *          request includes a name, optionally one or more resource tags, an encryption key, and a
 *          request ID.</p>
 *          <note>
 *             <p>Do not include sensitive data, such as passport numbers, in the name of a backup
 *             vault.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBackupVaultCommand extends $Command<
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackupVaultCommandInput) {
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
  ): Handler<CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateBackupVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackupVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackupVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupVaultCommandOutput> {
    return deserializeAws_restJson1CreateBackupVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
