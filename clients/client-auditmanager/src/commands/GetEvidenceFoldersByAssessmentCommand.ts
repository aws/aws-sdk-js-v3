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
import { GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse } from "../models/models_0";
import {
  de_GetEvidenceFoldersByAssessmentCommand,
  se_GetEvidenceFoldersByAssessmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFoldersByAssessmentCommand}.
 */
export interface GetEvidenceFoldersByAssessmentCommandInput extends GetEvidenceFoldersByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFoldersByAssessmentCommand}.
 */
export interface GetEvidenceFoldersByAssessmentCommandOutput
  extends GetEvidenceFoldersByAssessmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Gets the evidence folders from a specified assessment in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFoldersByAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceFoldersByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFoldersByAssessmentResponse
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
 * @param GetEvidenceFoldersByAssessmentCommandInput - {@link GetEvidenceFoldersByAssessmentCommandInput}
 * @returns {@link GetEvidenceFoldersByAssessmentCommandOutput}
 * @see {@link GetEvidenceFoldersByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentCommandOutput} for command's `response` shape.
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
export class GetEvidenceFoldersByAssessmentCommand extends $Command<
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
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
  constructor(readonly input: GetEvidenceFoldersByAssessmentCommandInput) {
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
  ): Handler<GetEvidenceFoldersByAssessmentCommandInput, GetEvidenceFoldersByAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEvidenceFoldersByAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFoldersByAssessmentCommand";
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
    input: GetEvidenceFoldersByAssessmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetEvidenceFoldersByAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput> {
    return de_GetEvidenceFoldersByAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
