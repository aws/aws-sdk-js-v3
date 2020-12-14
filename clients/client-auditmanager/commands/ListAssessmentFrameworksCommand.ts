import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAssessmentFrameworksCommand,
  serializeAws_restJson1ListAssessmentFrameworksCommand,
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

export type ListAssessmentFrameworksCommandInput = ListAssessmentFrameworksRequest;
export type ListAssessmentFrameworksCommandOutput = ListAssessmentFrameworksResponse & __MetadataBearer;

/**
 * <p>
 * Returns a list of the frameworks available in the AWS Audit Manager framework library.
 * </p>
 */
export class ListAssessmentFrameworksCommand extends $Command<
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssessmentFrameworksCommandInput) {
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
  ): Handler<ListAssessmentFrameworksCommandInput, ListAssessmentFrameworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentFrameworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentFrameworksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentFrameworksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentFrameworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssessmentFrameworksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentFrameworksCommandOutput> {
    return deserializeAws_restJson1ListAssessmentFrameworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
