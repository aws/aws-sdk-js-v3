import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  UpdateApplicationMaintenanceConfigurationRequest,
  UpdateApplicationMaintenanceConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand,
  serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand,
} from "../protocols/Aws_json1_1";
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

export interface UpdateApplicationMaintenanceConfigurationCommandInput
  extends UpdateApplicationMaintenanceConfigurationRequest {}
export interface UpdateApplicationMaintenanceConfigurationCommandOutput
  extends UpdateApplicationMaintenanceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration for the automatic maintenance that Kinesis Data Analytics performs on the application. For information about automatic application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p>
 */
export class UpdateApplicationMaintenanceConfigurationCommand extends $Command<
  UpdateApplicationMaintenanceConfigurationCommandInput,
  UpdateApplicationMaintenanceConfigurationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationMaintenanceConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateApplicationMaintenanceConfigurationCommandInput,
    UpdateApplicationMaintenanceConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "UpdateApplicationMaintenanceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationMaintenanceConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApplicationMaintenanceConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApplicationMaintenanceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
