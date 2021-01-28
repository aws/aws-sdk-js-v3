import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  GetEvidenceFoldersByAssessmentControlRequest,
  GetEvidenceFoldersByAssessmentControlResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand,
  serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand,
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

export type GetEvidenceFoldersByAssessmentControlCommandInput = GetEvidenceFoldersByAssessmentControlRequest;
export type GetEvidenceFoldersByAssessmentControlCommandOutput = GetEvidenceFoldersByAssessmentControlResponse &
  __MetadataBearer;

/**
 * <p>
 *    Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager.
 * </p>
 */
export class GetEvidenceFoldersByAssessmentControlCommand extends $Command<
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEvidenceFoldersByAssessmentControlCommandInput) {
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
  ): Handler<GetEvidenceFoldersByAssessmentControlCommandInput, GetEvidenceFoldersByAssessmentControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFoldersByAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEvidenceFoldersByAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFoldersByAssessmentControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEvidenceFoldersByAssessmentControlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
