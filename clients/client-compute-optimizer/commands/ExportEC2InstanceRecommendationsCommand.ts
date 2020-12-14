import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { ExportEC2InstanceRecommendationsRequest, ExportEC2InstanceRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand,
  serializeAws_json1_0ExportEC2InstanceRecommendationsCommand,
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

export type ExportEC2InstanceRecommendationsCommandInput = ExportEC2InstanceRecommendationsRequest;
export type ExportEC2InstanceRecommendationsCommandOutput = ExportEC2InstanceRecommendationsResponse & __MetadataBearer;

/**
 * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Amazon EC2 instance export job in progress per AWS Region.</p>
 */
export class ExportEC2InstanceRecommendationsCommand extends $Command<
  ExportEC2InstanceRecommendationsCommandInput,
  ExportEC2InstanceRecommendationsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportEC2InstanceRecommendationsCommandInput) {
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
  ): Handler<ExportEC2InstanceRecommendationsCommandInput, ExportEC2InstanceRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "ExportEC2InstanceRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportEC2InstanceRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportEC2InstanceRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportEC2InstanceRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ExportEC2InstanceRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportEC2InstanceRecommendationsCommandOutput> {
    return deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
