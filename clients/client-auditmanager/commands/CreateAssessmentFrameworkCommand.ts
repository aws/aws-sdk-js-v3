import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { CreateAssessmentFrameworkRequest, CreateAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssessmentFrameworkCommand,
  serializeAws_restJson1CreateAssessmentFrameworkCommand,
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

export type CreateAssessmentFrameworkCommandInput = CreateAssessmentFrameworkRequest;
export type CreateAssessmentFrameworkCommandOutput = CreateAssessmentFrameworkResponse & __MetadataBearer;

/**
 * <p>
 * Creates a custom framework in AWS Audit Manager.
 * </p>
 */
export class CreateAssessmentFrameworkCommand extends $Command<
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssessmentFrameworkCommandInput) {
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
  ): Handler<CreateAssessmentFrameworkCommandInput, CreateAssessmentFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "CreateAssessmentFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentFrameworkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssessmentFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAssessmentFrameworkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAssessmentFrameworkCommandOutput> {
    return deserializeAws_restJson1CreateAssessmentFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
