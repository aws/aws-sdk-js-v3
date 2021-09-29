import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetAssessmentReportUrlRequest, GetAssessmentReportUrlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssessmentReportUrlCommand,
  serializeAws_restJson1GetAssessmentReportUrlCommand,
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

export interface GetAssessmentReportUrlCommandInput extends GetAssessmentReportUrlRequest {}
export interface GetAssessmentReportUrlCommandOutput extends GetAssessmentReportUrlResponse, __MetadataBearer {}

/**
 * <p>
 *    Returns the URL of a specified assessment report in Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentReportUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentReportUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAssessmentReportUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentReportUrlCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportUrlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAssessmentReportUrlCommand extends $Command<
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssessmentReportUrlCommandInput) {
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
  ): Handler<GetAssessmentReportUrlCommandInput, GetAssessmentReportUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetAssessmentReportUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssessmentReportUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentReportUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssessmentReportUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssessmentReportUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssessmentReportUrlCommandOutput> {
    return deserializeAws_restJson1GetAssessmentReportUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
