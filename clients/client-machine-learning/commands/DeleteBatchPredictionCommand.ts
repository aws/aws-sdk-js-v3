import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteBatchPredictionInput, DeleteBatchPredictionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBatchPredictionCommand,
  serializeAws_json1_1DeleteBatchPredictionCommand,
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

export type DeleteBatchPredictionCommandInput = DeleteBatchPredictionInput;
export type DeleteBatchPredictionCommandOutput = DeleteBatchPredictionOutput & __MetadataBearer;

/**
 * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a>
 *             operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p>
 *
 *         <p>
 *             <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
 */
export class DeleteBatchPredictionCommand extends $Command<
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBatchPredictionCommandInput) {
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
  ): Handler<DeleteBatchPredictionCommandInput, DeleteBatchPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DeleteBatchPredictionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBatchPredictionInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBatchPredictionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBatchPredictionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBatchPredictionCommandOutput> {
    return deserializeAws_json1_1DeleteBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
