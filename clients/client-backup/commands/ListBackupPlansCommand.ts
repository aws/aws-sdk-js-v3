import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupPlansInput, ListBackupPlansOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlansCommand,
  serializeAws_restJson1ListBackupPlansCommand,
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

export type ListBackupPlansCommandInput = ListBackupPlansInput;
export type ListBackupPlansCommandOutput = ListBackupPlansOutput & __MetadataBearer;

/**
 * <p>Returns a list of existing backup plans for an authenticated account. The list is
 *          populated only if the advanced option is set for the backup plan. The list contains
 *          information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates,
 *          version IDs, plan names, and creator request IDs.</p>
 */
export class ListBackupPlansCommand extends $Command<
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupPlansCommandInput) {
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
  ): Handler<ListBackupPlansCommandInput, ListBackupPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlansInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlansOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlansCommandOutput> {
    return deserializeAws_restJson1ListBackupPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
