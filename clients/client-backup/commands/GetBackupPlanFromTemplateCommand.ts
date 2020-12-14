import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupPlanFromTemplateInput, GetBackupPlanFromTemplateOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupPlanFromTemplateCommand,
  serializeAws_restJson1GetBackupPlanFromTemplateCommand,
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

export type GetBackupPlanFromTemplateCommandInput = GetBackupPlanFromTemplateInput;
export type GetBackupPlanFromTemplateCommandOutput = GetBackupPlanFromTemplateOutput & __MetadataBearer;

/**
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 */
export class GetBackupPlanFromTemplateCommand extends $Command<
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupPlanFromTemplateCommandInput) {
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
  ): Handler<GetBackupPlanFromTemplateCommandInput, GetBackupPlanFromTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupPlanFromTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupPlanFromTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupPlanFromTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupPlanFromTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupPlanFromTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupPlanFromTemplateCommandOutput> {
    return deserializeAws_restJson1GetBackupPlanFromTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
