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
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlRequestFilterSensitiveLog,
  BatchImportEvidenceToAssessmentControlResponse,
  BatchImportEvidenceToAssessmentControlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
  serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
} from "../protocols/Aws_restJson1";

export interface BatchImportEvidenceToAssessmentControlCommandInput
  extends BatchImportEvidenceToAssessmentControlRequest {}
export interface BatchImportEvidenceToAssessmentControlCommandOutput
  extends BatchImportEvidenceToAssessmentControlResponse,
    __MetadataBearer {}

/**
 * <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment.
 *          You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by
 *          specifying the S3 URI of the evidence. </p>
 *          <p>You must upload manual evidence to your S3 bucket before you can upload it to your
 *          assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in
 *          the <i>Amazon Simple Storage Service API Reference.</i>
 *          </p>
 *          <p>The following restrictions apply to this action:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum size of an individual evidence file: 100 MB</p>
 *             </li>
 *             <li>
 *                <p>Number of daily manual evidence uploads per control: 100</p>
 *             </li>
 *             <li>
 *                <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
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
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class BatchImportEvidenceToAssessmentControlCommand extends $Command<
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchImportEvidenceToAssessmentControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "BatchImportEvidenceToAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlResponseFilterSensitiveLog,
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
