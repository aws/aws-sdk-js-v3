import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListRecoveryPointsByBackupVaultInput, ListRecoveryPointsByBackupVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
  serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand,
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

export type ListRecoveryPointsByBackupVaultCommandInput = ListRecoveryPointsByBackupVaultInput;
export type ListRecoveryPointsByBackupVaultCommandOutput = ListRecoveryPointsByBackupVaultOutput & __MetadataBearer;

/**
 * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
 */
export class ListRecoveryPointsByBackupVaultCommand extends $Command<
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecoveryPointsByBackupVaultCommandInput) {
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
  ): Handler<ListRecoveryPointsByBackupVaultCommandInput, ListRecoveryPointsByBackupVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRecoveryPointsByBackupVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecoveryPointsByBackupVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByBackupVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRecoveryPointsByBackupVaultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput> {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
