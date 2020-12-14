import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAssessmentTargetsCommand,
  serializeAws_json1_1DescribeAssessmentTargetsCommand,
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

export type DescribeAssessmentTargetsCommandInput = DescribeAssessmentTargetsRequest;
export type DescribeAssessmentTargetsCommandOutput = DescribeAssessmentTargetsResponse & __MetadataBearer;

/**
 * <p>Describes the assessment targets that are specified by the ARNs of the assessment
 *          targets.</p>
 */
export class DescribeAssessmentTargetsCommand extends $Command<
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAssessmentTargetsCommandInput) {
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
  ): Handler<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeAssessmentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAssessmentTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAssessmentTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAssessmentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAssessmentTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAssessmentTargetsCommandOutput> {
    return deserializeAws_json1_1DescribeAssessmentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
