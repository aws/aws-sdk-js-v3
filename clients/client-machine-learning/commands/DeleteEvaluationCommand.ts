import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteEvaluationInput, DeleteEvaluationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEvaluationCommand,
  serializeAws_json1_1DeleteEvaluationCommand,
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

export type DeleteEvaluationCommandInput = DeleteEvaluationInput;
export type DeleteEvaluationCommandOutput = DeleteEvaluationOutput & __MetadataBearer;

/**
 * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p>
 *
 *         <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the
 *           <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p>
 *         <p>
 *             <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
 */
export class DeleteEvaluationCommand extends $Command<
  DeleteEvaluationCommandInput,
  DeleteEvaluationCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEvaluationCommandInput) {
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
  ): Handler<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DeleteEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEvaluationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEvaluationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEvaluationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEvaluationCommandOutput> {
    return deserializeAws_json1_1DeleteEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
