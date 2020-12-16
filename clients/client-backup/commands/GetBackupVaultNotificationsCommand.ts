import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupVaultNotificationsInput, GetBackupVaultNotificationsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupVaultNotificationsCommand,
  serializeAws_restJson1GetBackupVaultNotificationsCommand,
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

export type GetBackupVaultNotificationsCommandInput = GetBackupVaultNotificationsInput;
export type GetBackupVaultNotificationsCommandOutput = GetBackupVaultNotificationsOutput & __MetadataBearer;

/**
 * <p>Returns event notifications for the specified backup vault.</p>
 */
export class GetBackupVaultNotificationsCommand extends $Command<
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupVaultNotificationsCommandInput) {
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
  ): Handler<GetBackupVaultNotificationsCommandInput, GetBackupVaultNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupVaultNotificationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupVaultNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupVaultNotificationsCommandOutput> {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
