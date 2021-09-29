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
 * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p>
 *          <p>You can invoke this operation on an application that is in one of the two following
 *       states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is
 *       in a state other than these two states, it throws a <code>ResourceInUseException</code>. The
 *       service makes use of the updated configuration the next time it schedules maintenance for the
 *       application. If you invoke this operation after the service schedules maintenance, the service
 *       will apply the configuration update the next time it schedules maintenance for the
 *       application. This means that you might not see the maintenance configuration update applied to
 *       the maintenance process that follows a successful invocation of this operation, but to the
 *       following maintenance process instead.</p>
 *          <p>To see the current maintenance configuration of your application, invoke the
 *       <a>DescribeApplication</a> operation.</p>
 *          <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new UpdateApplicationMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
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
