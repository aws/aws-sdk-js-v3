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
  UpdateAssessmentControlSetStatusRequest,
  UpdateAssessmentControlSetStatusRequestFilterSensitiveLog,
  UpdateAssessmentControlSetStatusResponse,
  UpdateAssessmentControlSetStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateAssessmentControlSetStatusCommand,
  se_UpdateAssessmentControlSetStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentControlSetStatusCommand}.
 */
export interface UpdateAssessmentControlSetStatusCommandInput extends UpdateAssessmentControlSetStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentControlSetStatusCommand}.
 */
export interface UpdateAssessmentControlSetStatusCommandOutput
  extends UpdateAssessmentControlSetStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Updates the status of a control set in an Audit Manager assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentControlSetStatusRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED", // required
 *   comment: "STRING_VALUE", // required
 * };
 * const command = new UpdateAssessmentControlSetStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentControlSetStatusResponse
 * //   controlSet: { // AssessmentControlSet
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED",
 * //     roles: [ // Roles
 * //       { // Role
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     controls: [ // AssessmentControls
 * //       { // AssessmentControl
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //         response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //         comments: [ // ControlComments
 * //           { // ControlComment
 * //             authorName: "STRING_VALUE",
 * //             commentBody: "STRING_VALUE",
 * //             postedDate: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         evidenceSources: [ // EvidenceSources
 * //           "STRING_VALUE",
 * //         ],
 * //         evidenceCount: Number("int"),
 * //         assessmentReportEvidenceCount: Number("int"),
 * //       },
 * //     ],
 * //     delegations: [ // Delegations
 * //       { // Delegation
 * //         id: "STRING_VALUE",
 * //         assessmentName: "STRING_VALUE",
 * //         assessmentId: "STRING_VALUE",
 * //         status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //         roleArn: "STRING_VALUE",
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdated: new Date("TIMESTAMP"),
 * //         controlSetId: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //         createdBy: "STRING_VALUE",
 * //       },
 * //     ],
 * //     systemEvidenceCount: Number("int"),
 * //     manualEvidenceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentControlSetStatusCommandInput - {@link UpdateAssessmentControlSetStatusCommandInput}
 * @returns {@link UpdateAssessmentControlSetStatusCommandOutput}
 * @see {@link UpdateAssessmentControlSetStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlSetStatusCommandOutput} for command's `response` shape.
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
export class UpdateAssessmentControlSetStatusCommand extends $Command<
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
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
  constructor(readonly input: UpdateAssessmentControlSetStatusCommandInput) {
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
  ): Handler<UpdateAssessmentControlSetStatusCommandInput, UpdateAssessmentControlSetStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssessmentControlSetStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentControlSetStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlSetStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlSetStatusResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "UpdateAssessmentControlSetStatus",
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
    input: UpdateAssessmentControlSetStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateAssessmentControlSetStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput> {
    return de_UpdateAssessmentControlSetStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
