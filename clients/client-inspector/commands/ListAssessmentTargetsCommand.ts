import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssessmentTargetsCommand,
  serializeAws_json1_1ListAssessmentTargetsCommand,
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

export type ListAssessmentTargetsCommandInput = ListAssessmentTargetsRequest;
export type ListAssessmentTargetsCommandOutput = ListAssessmentTargetsResponse & __MetadataBearer;

/**
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 */
export class ListAssessmentTargetsCommand extends $Command<
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssessmentTargetsCommandInput) {
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
  ): Handler<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentTargetsCommandOutput> {
    return deserializeAws_json1_1ListAssessmentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
