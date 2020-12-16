import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetRecommendationSummariesCommand,
  serializeAws_json1_0GetRecommendationSummariesCommand,
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

export type GetRecommendationSummariesCommandInput = GetRecommendationSummariesRequest;
export type GetRecommendationSummariesCommandOutput = GetRecommendationSummariesResponse & __MetadataBearer;

/**
 * <p>Returns the optimization findings for an account.</p>
 *         <p>For example, it returns the number of Amazon EC2 instances in an account that are
 *             under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling
 *             groups in an account that are not optimized, or optimized.</p>
 */
export class GetRecommendationSummariesCommand extends $Command<
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRecommendationSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetRecommendationSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecommendationSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecommendationSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRecommendationSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRecommendationSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommendationSummariesCommandOutput> {
    return deserializeAws_json1_0GetRecommendationSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
