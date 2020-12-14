import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeRegionSettingsInput, DescribeRegionSettingsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRegionSettingsCommand,
  serializeAws_restJson1DescribeRegionSettingsCommand,
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

export type DescribeRegionSettingsCommandInput = DescribeRegionSettingsInput;
export type DescribeRegionSettingsCommandOutput = DescribeRegionSettingsOutput & __MetadataBearer;

/**
 * <p>Returns the current service opt-in settings for the Region. If service-opt-in is enabled for a service,
 *          AWS Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan.
 *          Otherwise, AWS Backup does not try to protect that service's resources in this Region, AWS Backup does not try to protect that service's
 *          resources in this Region.</p>
 */
export class DescribeRegionSettingsCommand extends $Command<
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRegionSettingsCommandInput) {
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
  ): Handler<DescribeRegionSettingsCommandInput, DescribeRegionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeRegionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRegionSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRegionSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRegionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRegionSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRegionSettingsCommandOutput> {
    return deserializeAws_restJson1DescribeRegionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
