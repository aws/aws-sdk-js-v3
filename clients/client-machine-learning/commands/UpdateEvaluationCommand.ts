import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEvaluationCommand,
  serializeAws_json1_1UpdateEvaluationCommand,
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

export type UpdateEvaluationCommandInput = UpdateEvaluationInput;
export type UpdateEvaluationCommandOutput = UpdateEvaluationOutput & __MetadataBearer;

/**
 * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
 *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
 */
export class UpdateEvaluationCommand extends $Command<
  UpdateEvaluationCommandInput,
  UpdateEvaluationCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEvaluationCommandInput) {
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
  ): Handler<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "UpdateEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEvaluationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEvaluationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEvaluationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEvaluationCommandOutput> {
    return deserializeAws_json1_1UpdateEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
