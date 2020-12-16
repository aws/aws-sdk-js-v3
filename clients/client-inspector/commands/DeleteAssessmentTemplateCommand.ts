import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentTemplateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAssessmentTemplateCommand,
  serializeAws_json1_1DeleteAssessmentTemplateCommand,
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

export type DeleteAssessmentTemplateCommandInput = DeleteAssessmentTemplateRequest;
export type DeleteAssessmentTemplateCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the assessment template that is specified by the ARN of the assessment
 *          template.</p>
 */
export class DeleteAssessmentTemplateCommand extends $Command<
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAssessmentTemplateCommandInput) {
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
  ): Handler<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DeleteAssessmentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssessmentTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssessmentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAssessmentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssessmentTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteAssessmentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
