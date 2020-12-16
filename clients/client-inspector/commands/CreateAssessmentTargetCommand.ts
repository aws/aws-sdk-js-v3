import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTargetRequest, CreateAssessmentTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAssessmentTargetCommand,
  serializeAws_json1_1CreateAssessmentTargetCommand,
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

export type CreateAssessmentTargetCommandInput = CreateAssessmentTargetRequest;
export type CreateAssessmentTargetCommandOutput = CreateAssessmentTargetResponse & __MetadataBearer;

/**
 * <p>Creates a new assessment target using the ARN of the resource group that is generated
 *          by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2
 *          instances in the current AWS account and region are included in the assessment target. If
 *          the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments. You can create up to 50 assessment targets per AWS account.
 *          You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">
 *             Amazon Inspector Assessment Targets</a>.</p>
 */
export class CreateAssessmentTargetCommand extends $Command<
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssessmentTargetCommandInput) {
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
  ): Handler<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "CreateAssessmentTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssessmentTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssessmentTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssessmentTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssessmentTargetCommandOutput> {
    return deserializeAws_json1_1CreateAssessmentTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
