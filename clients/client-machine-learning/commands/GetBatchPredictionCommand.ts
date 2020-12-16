import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetBatchPredictionCommand,
  serializeAws_json1_1GetBatchPredictionCommand,
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

export type GetBatchPredictionCommandInput = GetBatchPredictionInput;
export type GetBatchPredictionCommandOutput = GetBatchPredictionOutput & __MetadataBearer;

/**
 * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
 *             <code>Batch Prediction</code> request.</p>
 */
export class GetBatchPredictionCommand extends $Command<
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBatchPredictionCommandInput) {
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
  ): Handler<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "GetBatchPredictionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBatchPredictionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBatchPredictionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBatchPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBatchPredictionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBatchPredictionCommandOutput> {
    return deserializeAws_json1_1GetBatchPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
