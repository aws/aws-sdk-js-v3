// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlRequestFilterSensitiveLog,
  BatchImportEvidenceToAssessmentControlResponse,
  BatchImportEvidenceToAssessmentControlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_BatchImportEvidenceToAssessmentControlCommand,
  se_BatchImportEvidenceToAssessmentControlCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchImportEvidenceToAssessmentControlCommand}.
 */
export interface BatchImportEvidenceToAssessmentControlCommandInput
  extends BatchImportEvidenceToAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link BatchImportEvidenceToAssessmentControlCommand}.
 */
export interface BatchImportEvidenceToAssessmentControlCommandOutput
  extends BatchImportEvidenceToAssessmentControlResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more pieces of evidence to a control in an Audit Manager assessment. </p>
 *          <p>You can import manual evidence from any S3 bucket by specifying the S3 URI of the
 *          object. You can also upload a file from your browser, or enter plain text in response to a
 *          risk assessment question. </p>
 *          <p>The following restrictions apply to this action:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>manualEvidence</code> can be only one of the following:
 *                   <code>evidenceFileName</code>, <code>s3ResourcePath</code>, or
 *                   <code>textResponse</code>
 *                </p>
 *             </li>
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
 * const input = { // BatchImportEvidenceToAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   manualEvidence: [ // ManualEvidenceList // required
 *     { // ManualEvidence
 *       s3ResourcePath: "STRING_VALUE",
 *       textResponse: "STRING_VALUE",
 *       evidenceFileName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchImportEvidenceToAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // BatchImportEvidenceToAssessmentControlResponse
 * //   errors: [ // BatchImportEvidenceToAssessmentControlErrors
 * //     { // BatchImportEvidenceToAssessmentControlError
 * //       manualEvidence: { // ManualEvidence
 * //         s3ResourcePath: "STRING_VALUE",
 * //         textResponse: "STRING_VALUE",
 * //         evidenceFileName: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchImportEvidenceToAssessmentControlCommandInput - {@link BatchImportEvidenceToAssessmentControlCommandInput}
 * @returns {@link BatchImportEvidenceToAssessmentControlCommandOutput}
 * @see {@link BatchImportEvidenceToAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link BatchImportEvidenceToAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
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

  /**
   * @public
   */
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
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "BatchImportEvidenceToAssessmentControl",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: BatchImportEvidenceToAssessmentControlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchImportEvidenceToAssessmentControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> {
    return de_BatchImportEvidenceToAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
