import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeMonitoringScheduleRequest, DescribeMonitoringScheduleResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeMonitoringScheduleCommand,
  serializeAws_json1_1DescribeMonitoringScheduleCommand,
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

export type DescribeMonitoringScheduleCommandInput = DescribeMonitoringScheduleRequest;
export type DescribeMonitoringScheduleCommandOutput = DescribeMonitoringScheduleResponse & __MetadataBearer;

/**
 * <p>Describes the schedule for a monitoring job.</p>
 */
export class DescribeMonitoringScheduleCommand extends $Command<
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMonitoringScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeMonitoringScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMonitoringScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMonitoringScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMonitoringScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMonitoringScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMonitoringScheduleCommandOutput> {
    return deserializeAws_json1_1DescribeMonitoringScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
