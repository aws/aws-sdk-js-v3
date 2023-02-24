// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import {
  PutRecommendationFeedbackRequest,
  PutRecommendationFeedbackRequestFilterSensitiveLog,
  PutRecommendationFeedbackResponse,
  PutRecommendationFeedbackResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRecommendationFeedbackCommand,
  serializeAws_restJson1PutRecommendationFeedbackCommand,
} from "../protocols/Aws_restJson1";

export interface PutRecommendationFeedbackCommandInput extends PutRecommendationFeedbackRequest {}
export interface PutRecommendationFeedbackCommandOutput extends PutRecommendationFeedbackResponse, __MetadataBearer {}

/**
 * <p>Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with
 *          different reactions the previous feedback is overwritten.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, PutRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new PutRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 */
export class PutRecommendationFeedbackCommand extends $Command<
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRecommendationFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "PutRecommendationFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecommendationFeedbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRecommendationFeedbackResponseFilterSensitiveLog,
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
