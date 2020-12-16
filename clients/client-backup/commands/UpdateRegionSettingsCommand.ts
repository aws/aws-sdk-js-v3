import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateRegionSettingsInput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRegionSettingsCommand,
  serializeAws_restJson1UpdateRegionSettingsCommand,
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

export type UpdateRegionSettingsCommandInput = UpdateRegionSettingsInput;
export type UpdateRegionSettingsCommandOutput = __MetadataBearer;

/**
 * <p>Updates the current service opt-in settings for the Region. If service-opt-in is enabled for a service,
 *          AWS Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan.
 *          Otherwise, AWS Backup does not try to protect that service's resources in this Region. Use the <code>DescribeRegionSettings</code> API to determine the
 *          resource types that are supported.</p>
 */
export class UpdateRegionSettingsCommand extends $Command<
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRegionSettingsCommandInput) {
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
  ): Handler<UpdateRegionSettingsCommandInput, UpdateRegionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRegionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRegionSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRegionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRegionSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRegionSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateRegionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
