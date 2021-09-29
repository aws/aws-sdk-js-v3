import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  ListTrainingJobsForHyperParameterTuningJobRequest,
  ListTrainingJobsForHyperParameterTuningJobResponse,
} from "../models/models_2";
import {
  deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand,
  serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand,
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

export interface ListTrainingJobsForHyperParameterTuningJobCommandInput
  extends ListTrainingJobsForHyperParameterTuningJobRequest {}
export interface ListTrainingJobsForHyperParameterTuningJobCommandOutput
  extends ListTrainingJobsForHyperParameterTuningJobResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
 *             jobs that a hyperparameter tuning job launched.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsForHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsForHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsForHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTrainingJobsForHyperParameterTuningJobCommand extends $Command<
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrainingJobsForHyperParameterTuningJobCommandInput) {
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
  ): Handler<
    ListTrainingJobsForHyperParameterTuningJobCommandInput,
    ListTrainingJobsForHyperParameterTuningJobCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrainingJobsForHyperParameterTuningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrainingJobsForHyperParameterTuningJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrainingJobsForHyperParameterTuningJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> {
    return deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
