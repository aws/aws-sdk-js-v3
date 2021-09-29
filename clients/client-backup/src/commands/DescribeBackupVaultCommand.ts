import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeBackupVaultInput, DescribeBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBackupVaultCommand,
  serializeAws_restJson1DescribeBackupVaultCommand,
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

export interface DescribeBackupVaultCommandInput extends DescribeBackupVaultInput {}
export interface DescribeBackupVaultCommandOutput extends DescribeBackupVaultOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about a backup vault specified by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeBackupVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupVaultCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBackupVaultCommand extends $Command<
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBackupVaultCommandInput) {
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
  ): Handler<DescribeBackupVaultCommandInput, DescribeBackupVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeBackupVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBackupVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupVaultCommandOutput> {
    return deserializeAws_restJson1DescribeBackupVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
