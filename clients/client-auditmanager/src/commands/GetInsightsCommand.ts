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
import { GetInsightsRequest, GetInsightsResponse } from "../models/models_0";
import { de_GetInsightsCommand, se_GetInsightsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandInput extends GetInsightsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightsCommand}.
 */
export interface GetInsightsCommandOutput extends GetInsightsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the latest analytics data for all your current active assessments. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetInsightsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetInsightsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetInsightsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightsResponse
 * //   insights: { // Insights
 * //     activeAssessmentsCount: Number("int"),
 * //     noncompliantEvidenceCount: Number("int"),
 * //     compliantEvidenceCount: Number("int"),
 * //     inconclusiveEvidenceCount: Number("int"),
 * //     assessmentControlsCountByNoncompliantEvidence: Number("int"),
 * //     totalAssessmentControlsCount: Number("int"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightsCommandInput - {@link GetInsightsCommandInput}
 * @returns {@link GetInsightsCommandOutput}
 * @see {@link GetInsightsCommandInput} for command's `input` shape.
 * @see {@link GetInsightsCommandOutput} for command's `response` shape.
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
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class GetInsightsCommand extends $Command<
  GetInsightsCommandInput,
  GetInsightsCommandOutput,
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
  constructor(readonly input: GetInsightsCommandInput) {
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
  ): Handler<GetInsightsCommandInput, GetInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInsightsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetInsightsCommand";
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
  private serialize(input: GetInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightsCommandOutput> {
    return de_GetInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
