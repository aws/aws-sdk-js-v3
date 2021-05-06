import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
  serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
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

export interface BatchImportEvidenceToAssessmentControlCommandInput
  extends BatchImportEvidenceToAssessmentControlRequest {}
export interface BatchImportEvidenceToAssessmentControlCommandOutput
  extends BatchImportEvidenceToAssessmentControlResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchImportEvidenceToAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportEvidenceToAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link BatchImportEvidenceToAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchImportEvidenceToAssessmentControlCommand extends $Command<
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchImportEvidenceToAssessmentControlCommandInput) {
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
  ): Handler<BatchImportEvidenceToAssessmentControlCommandInput, BatchImportEvidenceToAssessmentControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchImportEvidenceToAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchImportEvidenceToAssessmentControlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> {
    return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
