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
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  de_BatchAssociateAssessmentReportEvidenceCommand,
  se_BatchAssociateAssessmentReportEvidenceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateAssessmentReportEvidenceCommand}.
 */
export interface BatchAssociateAssessmentReportEvidenceCommandInput
  extends BatchAssociateAssessmentReportEvidenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateAssessmentReportEvidenceCommand}.
 */
export interface BatchAssociateAssessmentReportEvidenceCommandOutput
  extends BatchAssociateAssessmentReportEvidenceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Associates a list of evidence to an assessment report in an Audit Manager
 *          assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // BatchAssociateAssessmentReportEvidenceRequest
 *   assessmentId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   evidenceIds: [ // EvidenceIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateAssessmentReportEvidenceResponse
 * //   evidenceIds: [ // EvidenceIds
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // AssessmentReportEvidenceErrors
 * //     { // AssessmentReportEvidenceError
 * //       evidenceId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateAssessmentReportEvidenceCommandInput - {@link BatchAssociateAssessmentReportEvidenceCommandInput}
 * @returns {@link BatchAssociateAssessmentReportEvidenceCommandOutput}
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "BatchAssociateAssessmentReportEvidence",
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
    input: BatchAssociateAssessmentReportEvidenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchAssociateAssessmentReportEvidenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> {
    return de_BatchAssociateAssessmentReportEvidenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
