import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { PutRecommendationFeedbackRequest, PutRecommendationFeedbackResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutRecommendationFeedbackCommand,
  serializeAws_restJson1PutRecommendationFeedbackCommand,
} from "../protocols/Aws_restJson1";
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

export type PutRecommendationFeedbackCommandInput = PutRecommendationFeedbackRequest;
export type PutRecommendationFeedbackCommandOutput = PutRecommendationFeedbackResponse & __MetadataBearer;

/**
 * <p>
 *          Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
 *       </p>
 */
export class PutRecommendationFeedbackCommand extends $Command<
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRecommendationFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecommendationFeedbackCommandInput, PutRecommendationFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "PutRecommendationFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecommendationFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRecommendationFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecommendationFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRecommendationFeedbackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRecommendationFeedbackCommandOutput> {
    return deserializeAws_restJson1PutRecommendationFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
