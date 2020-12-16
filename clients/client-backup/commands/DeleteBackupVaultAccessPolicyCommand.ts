import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DeleteBackupVaultAccessPolicyInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
  serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
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

export type DeleteBackupVaultAccessPolicyCommandInput = DeleteBackupVaultAccessPolicyInput;
export type DeleteBackupVaultAccessPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the policy document that manages permissions on a backup vault.</p>
 */
export class DeleteBackupVaultAccessPolicyCommand extends $Command<
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackupVaultAccessPolicyCommandInput) {
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
  ): Handler<DeleteBackupVaultAccessPolicyCommandInput, DeleteBackupVaultAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteBackupVaultAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackupVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackupVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
