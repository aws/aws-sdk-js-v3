import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
  serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
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

export interface BatchAssociateAssessmentReportEvidenceCommandInput
  extends BatchAssociateAssessmentReportEvidenceRequest {}
export interface BatchAssociateAssessmentReportEvidenceCommandOutput
  extends BatchAssociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Associates a list of evidence to an assessment report in an Audit Manager assessment.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchAssociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchAssociateAssessmentReportEvidenceCommand extends $Command<
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateAssessmentReportEvidenceCommandInput) {
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
  ): Handler<BatchAssociateAssessmentReportEvidenceCommandInput, BatchAssociateAssessmentReportEvidenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchAssociateAssessmentReportEvidenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchAssociateAssessmentReportEvidenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> {
    return deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
