// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceRequestFilterSensitiveLog,
  BatchAssociateAssessmentReportEvidenceResponse,
  BatchAssociateAssessmentReportEvidenceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
  serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
} from "../protocols/Aws_restJson1";

export interface BatchAssociateAssessmentReportEvidenceCommandInput
  extends BatchAssociateAssessmentReportEvidenceRequest {}
export interface BatchAssociateAssessmentReportEvidenceCommandOutput
  extends BatchAssociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * <p> Associates a list of evidence to an assessment report in an Audit Manager
 *          assessment. </p>
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
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class BatchAssociateAssessmentReportEvidenceCommand extends $Command<
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAssociateAssessmentReportEvidenceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchAssociateAssessmentReportEvidenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceResponseFilterSensitiveLog,
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
