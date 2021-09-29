import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  ValidateAssessmentReportIntegrityRequest,
  ValidateAssessmentReportIntegrityResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand,
  serializeAws_restJson1ValidateAssessmentReportIntegrityCommand,
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

export interface ValidateAssessmentReportIntegrityCommandInput extends ValidateAssessmentReportIntegrityRequest {}
export interface ValidateAssessmentReportIntegrityCommandOutput
  extends ValidateAssessmentReportIntegrityResponse,
    __MetadataBearer {}

/**
 * <p>
 *    Validates the integrity of an assessment report in Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ValidateAssessmentReportIntegrityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateAssessmentReportIntegrityCommandInput} for command's `input` shape.
 * @see {@link ValidateAssessmentReportIntegrityCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ValidateAssessmentReportIntegrityCommand extends $Command<
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateAssessmentReportIntegrityCommandInput) {
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
  ): Handler<ValidateAssessmentReportIntegrityCommandInput, ValidateAssessmentReportIntegrityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ValidateAssessmentReportIntegrityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateAssessmentReportIntegrityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateAssessmentReportIntegrityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ValidateAssessmentReportIntegrityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateAssessmentReportIntegrityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateAssessmentReportIntegrityCommandOutput> {
    return deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
