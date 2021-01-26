import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateEvaluationInput, CreateEvaluationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEvaluationCommand,
  serializeAws_json1_1CreateEvaluationCommand,
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

export type CreateEvaluationCommandInput = CreateEvaluationInput;
export type CreateEvaluationCommandOutput = CreateEvaluationOutput & __MetadataBearer;

/**
 * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code>
 *           for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a
 *             summary so that you know how effective the <code>MLModel</code> functions on the test
 *           data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>.
 *
 *         </p>
 *         <p>
 *             <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use,
 *             Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
 */
export class CreateEvaluationCommand extends $Command<
  CreateEvaluationCommandInput,
  CreateEvaluationCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEvaluationCommandInput, CreateEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEvaluationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEvaluationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEvaluationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEvaluationCommandOutput> {
    return deserializeAws_json1_1CreateEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
