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
import {
  GetEvidenceFoldersByAssessmentControlRequest,
  GetEvidenceFoldersByAssessmentControlResponse,
} from "../models/models_0";
import {
  de_GetEvidenceFoldersByAssessmentControlCommand,
  se_GetEvidenceFoldersByAssessmentControlCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFoldersByAssessmentControlCommand}.
 */
export interface GetEvidenceFoldersByAssessmentControlCommandInput
  extends GetEvidenceFoldersByAssessmentControlRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFoldersByAssessmentControlCommand}.
 */
export interface GetEvidenceFoldersByAssessmentControlCommandOutput
  extends GetEvidenceFoldersByAssessmentControlResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Gets a list of evidence folders that are associated with a specified control in an
 *             Audit Manager assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFoldersByAssessmentControlRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   controlId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceFoldersByAssessmentControlCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFoldersByAssessmentControlResponse
 * //   evidenceFolders: [ // AssessmentEvidenceFolders
 * //     { // AssessmentEvidenceFolder
 * //       name: "STRING_VALUE",
 * //       date: new Date("TIMESTAMP"),
 * //       assessmentId: "STRING_VALUE",
 * //       controlSetId: "STRING_VALUE",
 * //       controlId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       dataSource: "STRING_VALUE",
 * //       author: "STRING_VALUE",
 * //       totalEvidence: Number("int"),
 * //       assessmentReportSelectionCount: Number("int"),
 * //       controlName: "STRING_VALUE",
 * //       evidenceResourcesIncludedCount: Number("int"),
 * //       evidenceByTypeConfigurationDataCount: Number("int"),
 * //       evidenceByTypeManualCount: Number("int"),
 * //       evidenceByTypeComplianceCheckCount: Number("int"),
 * //       evidenceByTypeComplianceCheckIssuesCount: Number("int"),
 * //       evidenceByTypeUserActivityCount: Number("int"),
 * //       evidenceAwsServiceSourceCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceFoldersByAssessmentControlCommandInput - {@link GetEvidenceFoldersByAssessmentControlCommandInput}
 * @returns {@link GetEvidenceFoldersByAssessmentControlCommandOutput}
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandOutput} for command's `response` shape.
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
export class GetEvidenceFoldersByAssessmentControlCommand extends $Command<
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
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
  constructor(readonly input: GetEvidenceFoldersByAssessmentControlCommandInput) {
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
  ): Handler<GetEvidenceFoldersByAssessmentControlCommandInput, GetEvidenceFoldersByAssessmentControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEvidenceFoldersByAssessmentControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFoldersByAssessmentControlCommand";
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
  private serialize(
    input: GetEvidenceFoldersByAssessmentControlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetEvidenceFoldersByAssessmentControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> {
    return de_GetEvidenceFoldersByAssessmentControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
