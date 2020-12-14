import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  ExportAutoScalingGroupRecommendationsRequest,
  ExportAutoScalingGroupRecommendationsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand,
  serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand,
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

export type ExportAutoScalingGroupRecommendationsCommandInput = ExportAutoScalingGroupRecommendationsRequest;
export type ExportAutoScalingGroupRecommendationsCommandOutput = ExportAutoScalingGroupRecommendationsResponse &
  __MetadataBearer;

/**
 * <p>Exports optimization recommendations for Auto Scaling groups.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Auto Scaling group export job in progress per AWS Region.</p>
 */
export class ExportAutoScalingGroupRecommendationsCommand extends $Command<
  ExportAutoScalingGroupRecommendationsCommandInput,
  ExportAutoScalingGroupRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportAutoScalingGroupRecommendationsCommandInput) {
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
  ): Handler<ExportAutoScalingGroupRecommendationsCommandInput, ExportAutoScalingGroupRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportAutoScalingGroupRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportAutoScalingGroupRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportAutoScalingGroupRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportAutoScalingGroupRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> {
    return deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
