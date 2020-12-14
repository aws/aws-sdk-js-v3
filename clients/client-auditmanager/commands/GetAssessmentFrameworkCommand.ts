import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetAssessmentFrameworkRequest, GetAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssessmentFrameworkCommand,
  serializeAws_restJson1GetAssessmentFrameworkCommand,
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

export type GetAssessmentFrameworkCommandInput = GetAssessmentFrameworkRequest;
export type GetAssessmentFrameworkCommandOutput = GetAssessmentFrameworkResponse & __MetadataBearer;

/**
 * <p>
 * Returns a framework from AWS Audit Manager.
 * </p>
 */
export class GetAssessmentFrameworkCommand extends $Command<
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssessmentFrameworkCommandInput) {
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
  ): Handler<GetAssessmentFrameworkCommandInput, GetAssessmentFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetAssessmentFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentFrameworkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssessmentFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssessmentFrameworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssessmentFrameworkCommandOutput> {
    return deserializeAws_restJson1GetAssessmentFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
