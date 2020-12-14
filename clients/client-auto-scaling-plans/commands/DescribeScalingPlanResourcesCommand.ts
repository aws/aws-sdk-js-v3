import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPlanResourcesCommand,
  serializeAws_json1_1DescribeScalingPlanResourcesCommand,
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

export type DescribeScalingPlanResourcesCommandInput = DescribeScalingPlanResourcesRequest;
export type DescribeScalingPlanResourcesCommandOutput = DescribeScalingPlanResourcesResponse & __MetadataBearer;

/**
 * <p>Describes the scalable resources in the specified scaling plan.</p>
 */
export class DescribeScalingPlanResourcesCommand extends $Command<
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
  AutoScalingPlansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalingPlanResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "DescribeScalingPlanResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingPlanResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPlanResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingPlanResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalingPlanResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingPlanResourcesCommandOutput> {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
