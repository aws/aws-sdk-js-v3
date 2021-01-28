import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateHyperParameterTuningJobRequest, CreateHyperParameterTuningJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateHyperParameterTuningJobCommand,
  serializeAws_json1_1CreateHyperParameterTuningJobCommand,
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

export type CreateHyperParameterTuningJobCommandInput = CreateHyperParameterTuningJobRequest;
export type CreateHyperParameterTuningJobCommandOutput = CreateHyperParameterTuningJobResponse & __MetadataBearer;

/**
 * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
 *             of a model by running many training jobs on your dataset using the algorithm you choose
 *             and values for hyperparameters within ranges that you specify. It then chooses the
 *             hyperparameter values that result in a model that performs the best, as measured by an
 *             objective metric that you choose.</p>
 */
export class CreateHyperParameterTuningJobCommand extends $Command<
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHyperParameterTuningJobCommandInput) {
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
  ): Handler<CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHyperParameterTuningJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHyperParameterTuningJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHyperParameterTuningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1CreateHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
