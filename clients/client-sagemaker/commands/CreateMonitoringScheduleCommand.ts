import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateMonitoringScheduleRequest, CreateMonitoringScheduleResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateMonitoringScheduleCommand,
  serializeAws_json1_1CreateMonitoringScheduleCommand,
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

export type CreateMonitoringScheduleCommandInput = CreateMonitoringScheduleRequest;
export type CreateMonitoringScheduleCommandOutput = CreateMonitoringScheduleResponse & __MetadataBearer;

/**
 * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
 *          captured for an Amazon SageMaker Endoint.</p>
 */
export class CreateMonitoringScheduleCommand extends $Command<
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMonitoringScheduleCommandInput) {
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
  ): Handler<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateMonitoringScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMonitoringScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMonitoringScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMonitoringScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMonitoringScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMonitoringScheduleCommandOutput> {
    return deserializeAws_json1_1CreateMonitoringScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
