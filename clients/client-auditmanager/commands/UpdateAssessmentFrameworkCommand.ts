import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentFrameworkRequest, UpdateAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentFrameworkCommand,
  serializeAws_restJson1UpdateAssessmentFrameworkCommand,
} from "../protocols/Aws_restJson1";
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

export type UpdateAssessmentFrameworkCommandInput = UpdateAssessmentFrameworkRequest;
export type UpdateAssessmentFrameworkCommandOutput = UpdateAssessmentFrameworkResponse & __MetadataBearer;

/**
 * <p>
 * Updates a custom framework in AWS Audit Manager.
 * </p>
 */
export class UpdateAssessmentFrameworkCommand extends $Command<
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentFrameworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentFrameworkCommandInput, UpdateAssessmentFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentFrameworkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssessmentFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentFrameworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentFrameworkCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
