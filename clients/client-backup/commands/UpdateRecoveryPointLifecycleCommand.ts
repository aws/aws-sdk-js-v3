import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateRecoveryPointLifecycleInput, UpdateRecoveryPointLifecycleOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
  serializeAws_restJson1UpdateRecoveryPointLifecycleCommand,
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

export type UpdateRecoveryPointLifecycleCommandInput = UpdateRecoveryPointLifecycleInput;
export type UpdateRecoveryPointLifecycleCommandOutput = UpdateRecoveryPointLifecycleOutput & __MetadataBearer;

/**
 * <p>Sets the transition lifecycle of a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. AWS Backup transitions and expires backups automatically according to the
 *          lifecycle that you define. </p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “expire after days” setting must be 90 days greater than the
 *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
 *          be changed after a backup has been transitioned to cold. </p>
 */
export class UpdateRecoveryPointLifecycleCommand extends $Command<
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRecoveryPointLifecycleCommandInput) {
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
  ): Handler<UpdateRecoveryPointLifecycleCommandInput, UpdateRecoveryPointLifecycleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRecoveryPointLifecycleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecoveryPointLifecycleInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecoveryPointLifecycleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecoveryPointLifecycleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecoveryPointLifecycleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput> {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
