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
  UpdateAssessmentRequest,
  UpdateAssessmentRequestFilterSensitiveLog,
  UpdateAssessmentResponse,
  UpdateAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAssessmentCommand, se_UpdateAssessmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentCommand}.
 */
export interface UpdateAssessmentCommandInput extends UpdateAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentCommand}.
 */
export interface UpdateAssessmentCommandOutput extends UpdateAssessmentResponse, __MetadataBearer {}

/**
 * @public
 * <p> Edits an Audit Manager assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 *   assessmentName: "STRING_VALUE",
 *   assessmentDescription: "STRING_VALUE",
 *   scope: { // Scope
 *     awsAccounts: [ // AWSAccounts
 *       { // AWSAccount
 *         id: "STRING_VALUE",
 *         emailAddress: "STRING_VALUE",
 *         name: "STRING_VALUE",
 *       },
 *     ],
 *     awsServices: [ // AWSServices
 *       { // AWSService
 *         serviceName: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   assessmentReportsDestination: { // AssessmentReportsDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 *   roles: [ // Roles
 *     { // Role
 *       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssessmentResponse
 * //   assessment: { // Assessment
 * //     arn: "STRING_VALUE",
 * //     awsAccount: { // AWSAccount
 * //       id: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //     metadata: { // AssessmentMetadata
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       complianceType: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       assessmentReportsDestination: { // AssessmentReportsDestination
 * //         destinationType: "S3",
 * //         destination: "STRING_VALUE",
 * //       },
 * //       scope: { // Scope
 * //         awsAccounts: [ // AWSAccounts
 * //           {
 * //             id: "STRING_VALUE",
 * //             emailAddress: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         awsServices: [ // AWSServices
 * //           { // AWSService
 * //             serviceName: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       roles: [ // Roles
 * //         { // Role
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       delegations: [ // Delegations
 * //         { // Delegation
 * //           id: "STRING_VALUE",
 * //           assessmentName: "STRING_VALUE",
 * //           assessmentId: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //           roleArn: "STRING_VALUE",
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdated: new Date("TIMESTAMP"),
 * //           controlSetId: "STRING_VALUE",
 * //           comment: "STRING_VALUE",
 * //           createdBy: "STRING_VALUE",
 * //         },
 * //       ],
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //     framework: { // AssessmentFramework
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       metadata: { // FrameworkMetadata
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         logo: "STRING_VALUE",
 * //         complianceType: "STRING_VALUE",
 * //       },
 * //       controlSets: [ // AssessmentControlSets
 * //         { // AssessmentControlSet
 * //           id: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           status: "ACTIVE" || "UNDER_REVIEW" || "REVIEWED",
 * //           roles: [
 * //             {
 * //               roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           controls: [ // AssessmentControls
 * //             { // AssessmentControl
 * //               id: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //               status: "UNDER_REVIEW" || "REVIEWED" || "INACTIVE",
 * //               response: "MANUAL" || "AUTOMATE" || "DEFER" || "IGNORE",
 * //               comments: [ // ControlComments
 * //                 { // ControlComment
 * //                   authorName: "STRING_VALUE",
 * //                   commentBody: "STRING_VALUE",
 * //                   postedDate: new Date("TIMESTAMP"),
 * //                 },
 * //               ],
 * //               evidenceSources: [ // EvidenceSources
 * //                 "STRING_VALUE",
 * //               ],
 * //               evidenceCount: Number("int"),
 * //               assessmentReportEvidenceCount: Number("int"),
 * //             },
 * //           ],
 * //           delegations: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               assessmentName: "STRING_VALUE",
 * //               assessmentId: "STRING_VALUE",
 * //               status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //               roleArn: "STRING_VALUE",
 * //               roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //               creationTime: new Date("TIMESTAMP"),
 * //               lastUpdated: new Date("TIMESTAMP"),
 * //               controlSetId: "STRING_VALUE",
 * //               comment: "STRING_VALUE",
 * //               createdBy: "STRING_VALUE",
 * //             },
 * //           ],
 * //           systemEvidenceCount: Number("int"),
 * //           manualEvidenceCount: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssessmentCommandInput - {@link UpdateAssessmentCommandInput}
 * @returns {@link UpdateAssessmentCommandOutput}
 * @see {@link UpdateAssessmentCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentCommandOutput} for command's `response` shape.
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
export class UpdateAssessmentCommand extends $Command<
  UpdateAssessmentCommandInput,
  UpdateAssessmentCommandOutput,
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
  constructor(readonly input: UpdateAssessmentCommandInput) {
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
  ): Handler<UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "UpdateAssessment",
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
  private serialize(input: UpdateAssessmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssessmentCommandOutput> {
    return de_UpdateAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
