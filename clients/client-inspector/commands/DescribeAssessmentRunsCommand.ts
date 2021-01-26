import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAssessmentRunsCommand,
  serializeAws_json1_1DescribeAssessmentRunsCommand,
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

export type DescribeAssessmentRunsCommandInput = DescribeAssessmentRunsRequest;
export type DescribeAssessmentRunsCommandOutput = DescribeAssessmentRunsResponse & __MetadataBearer;

/**
 * <p>Describes the assessment runs that are specified by the ARNs of the assessment
 *          runs.</p>
 */
export class DescribeAssessmentRunsCommand extends $Command<
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssessmentRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssessmentRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssessmentRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssessmentRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssessmentRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAssessmentRunsCommandOutput> {
    return deserializeAws_json1_1DescribeAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
