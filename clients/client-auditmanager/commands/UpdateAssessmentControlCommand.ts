import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentControlCommand,
  serializeAws_restJson1UpdateAssessmentControlCommand,
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

export type UpdateAssessmentControlCommandInput = UpdateAssessmentControlRequest;
export type UpdateAssessmentControlCommandOutput = UpdateAssessmentControlResponse & __MetadataBearer;

/**
 * <p>
 * Updates a control within an assessment in AWS Audit Manager.
 * </p>
 */
export class UpdateAssessmentControlCommand extends $Command<
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentControlCommandInput) {
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
  ): Handler<UpdateAssessmentControlCommandInput, UpdateAssessmentControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssessmentControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentControlCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
