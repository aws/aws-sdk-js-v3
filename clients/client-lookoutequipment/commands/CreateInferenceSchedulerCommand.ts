import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateInferenceSchedulerRequest, CreateInferenceSchedulerResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateInferenceSchedulerCommand,
  serializeAws_json1_0CreateInferenceSchedulerCommand,
} from "../protocols/Aws_json1_0";
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

export interface CreateInferenceSchedulerCommandInput extends CreateInferenceSchedulerRequest {}
export interface CreateInferenceSchedulerCommandOutput extends CreateInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
 *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
 *          provide an S3 bucket location for the input data, assign it a delimiter between separate
 *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 *          You must also provide an S3 bucket location for the output data. </p>
 */
export class CreateInferenceSchedulerCommand extends $Command<
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInferenceSchedulerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInferenceSchedulerCommandInput, CreateInferenceSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "CreateInferenceSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInferenceSchedulerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInferenceSchedulerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInferenceSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateInferenceSchedulerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInferenceSchedulerCommandOutput> {
    return deserializeAws_json1_0CreateInferenceSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
