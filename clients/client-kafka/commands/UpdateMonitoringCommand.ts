import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateMonitoringRequest, UpdateMonitoringResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMonitoringCommand,
  serializeAws_restJson1UpdateMonitoringCommand,
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

export type UpdateMonitoringCommandInput = UpdateMonitoringRequest;
export type UpdateMonitoringCommandOutput = UpdateMonitoringResponse & __MetadataBearer;

/**
 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
 */
export class UpdateMonitoringCommand extends $Command<
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMonitoringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMonitoringRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMonitoringResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMonitoringCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMonitoringCommandOutput> {
    return deserializeAws_restJson1UpdateMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
