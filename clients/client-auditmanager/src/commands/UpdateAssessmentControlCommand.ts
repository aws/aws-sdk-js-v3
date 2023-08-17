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
} from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import { de_UpdateAssessmentControlCommand, se_UpdateAssessmentControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentControlCommand}.
 */
export interface UpdateAssessmentControlCommandInput extends UpdateAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentControlCommand}.
 */
export interface UpdateAssessmentControlCommandOutput extends UpdateAssessmentControlResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates a control within an assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   controlStatus: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 *   commentBody: "STRING_VALUE",
 * };
 * const command = new UpdateAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentControlResponse
 * //   control: { // AssessmentControl
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //     response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //     comments: [ // ControlComments
 * //       { // ControlComment
 * //         authorName: "STRING_VALUE",
 * //         commentBody: "STRING_VALUE",
 * //         postedDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     evidenceSources: [ // EvidenceSources
 * //       "STRING_VALUE",
 * //     ],
 * //     evidenceCount: Number("int"),
 * //     assessmentReportEvidenceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentControlCommandInput - {@link UpdateAssessmentControlCommandInput}
 * @returns {@link UpdateAssessmentControlCommandOutput}
 * @see {@link UpdateAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlCommandOutput} for command's `response` shape.
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
export class UpdateAssessmentControlCommand extends $Command<
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
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
  constructor(readonly input: UpdateAssessmentControlCommandInput) {
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
  ): Handler<UpdateAssessmentControlCommandInput, UpdateAssessmentControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssessmentControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateAssessmentControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAssessmentControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentControlCommandOutput> {
    return de_UpdateAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
