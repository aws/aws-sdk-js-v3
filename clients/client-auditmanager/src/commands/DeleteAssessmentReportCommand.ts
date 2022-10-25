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
  DeleteAssessmentReportRequest,
  DeleteAssessmentReportRequestFilterSensitiveLog,
  DeleteAssessmentReportResponse,
  DeleteAssessmentReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssessmentReportCommand,
  serializeAws_restJson1DeleteAssessmentReportCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAssessmentReportCommandInput extends DeleteAssessmentReportRequest {}
export interface DeleteAssessmentReportCommandOutput extends DeleteAssessmentReportResponse, __MetadataBearer {}

/**
 * <p>Deletes an assessment report in Audit Manager. </p>
 *          <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager
 *          attempts to delete the following data:</p>
 *          <ol>
 *             <li>
 *                <p>The specified assessment report that’s stored in your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>The associated metadata that’s stored in Audit Manager</p>
 *             </li>
 *          </ol>
 *          <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report
 *          isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t
 *          fail. Instead, it proceeds to delete the associated metadata only. You must then delete the
 *          assessment report from the S3 bucket yourself. </p>
 *          <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or
 *             <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that
 *          your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that
 *          you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403
 *             (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API
 *             Reference</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class DeleteAssessmentReportCommand extends $Command<
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
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

  constructor(readonly input: DeleteAssessmentReportCommandInput) {
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
  ): Handler<DeleteAssessmentReportCommandInput, DeleteAssessmentReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAssessmentReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "DeleteAssessmentReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssessmentReportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssessmentReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssessmentReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAssessmentReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssessmentReportCommandOutput> {
    return deserializeAws_restJson1DeleteAssessmentReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
