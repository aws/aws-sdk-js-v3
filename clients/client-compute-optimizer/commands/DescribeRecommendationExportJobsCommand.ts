import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { DescribeRecommendationExportJobsRequest, DescribeRecommendationExportJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeRecommendationExportJobsCommand,
  serializeAws_json1_0DescribeRecommendationExportJobsCommand,
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

export type DescribeRecommendationExportJobsCommandInput = DescribeRecommendationExportJobsRequest;
export type DescribeRecommendationExportJobsCommandOutput = DescribeRecommendationExportJobsResponse & __MetadataBearer;

/**
 * <p>Describes recommendation export jobs created in the last seven days.</p>
 *
 *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
 *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
 *             recommendations. Then use the <code>DescribeRecommendationExportJobs</code> action to
 *             view your export jobs.</p>
 */
export class DescribeRecommendationExportJobsCommand extends $Command<
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecommendationExportJobsCommandInput) {
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
  ): Handler<DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "DescribeRecommendationExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecommendationExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecommendationExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeRecommendationExportJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeRecommendationExportJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecommendationExportJobsCommandOutput> {
    return deserializeAws_json1_0DescribeRecommendationExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
