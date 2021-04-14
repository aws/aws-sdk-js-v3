import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetLambdaFunctionRecommendationsRequest, GetLambdaFunctionRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand,
  serializeAws_json1_0GetLambdaFunctionRecommendationsCommand,
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

export type GetLambdaFunctionRecommendationsCommandInput = GetLambdaFunctionRecommendationsRequest;
export type GetLambdaFunctionRecommendationsCommandOutput = GetLambdaFunctionRecommendationsResponse & __MetadataBearer;

/**
 * <p>Returns AWS Lambda function recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for functions that meet a specific set of
 *             requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 */
export class GetLambdaFunctionRecommendationsCommand extends $Command<
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLambdaFunctionRecommendationsCommandInput) {
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
  ): Handler<GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetLambdaFunctionRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLambdaFunctionRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLambdaFunctionRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetLambdaFunctionRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetLambdaFunctionRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLambdaFunctionRecommendationsCommandOutput> {
    return deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
