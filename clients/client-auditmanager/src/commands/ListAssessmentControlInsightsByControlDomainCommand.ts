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
  ListAssessmentControlInsightsByControlDomainRequest,
  ListAssessmentControlInsightsByControlDomainResponse,
} from "../models/models_0";
import {
  de_ListAssessmentControlInsightsByControlDomainCommand,
  se_ListAssessmentControlInsightsByControlDomainCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentControlInsightsByControlDomainCommand}.
 */
export interface ListAssessmentControlInsightsByControlDomainCommandInput
  extends ListAssessmentControlInsightsByControlDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentControlInsightsByControlDomainCommand}.
 */
export interface ListAssessmentControlInsightsByControlDomainCommandOutput
  extends ListAssessmentControlInsightsByControlDomainResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the latest analytics data for controls within a specific control domain and a
 *          specific active assessment.</p>
 *          <note>
 *             <p>Control insights are listed only if the control belongs to the control domain and
 *             assessment that was specified. Moreover, the control must have collected evidence on the
 *                <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither
 *             of these conditions are met, no data is listed for that control. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentControlInsightsByControlDomainCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentControlInsightsByControlDomainCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentControlInsightsByControlDomainRequest
 *   controlDomainId: "STRING_VALUE", // required
 *   assessmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentControlInsightsByControlDomainResponse
 * //   controlInsightsByAssessment: [ // ControlInsightsMetadataByAssessment
 * //     { // ControlInsightsMetadataByAssessmentItem
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       evidenceInsights: { // EvidenceInsights
 * //         noncompliantEvidenceCount: Number("int"),
 * //         compliantEvidenceCount: Number("int"),
 * //         inconclusiveEvidenceCount: Number("int"),
 * //       },
 * //       controlSetName: "STRING_VALUE",
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentControlInsightsByControlDomainCommandInput - {@link ListAssessmentControlInsightsByControlDomainCommandInput}
 * @returns {@link ListAssessmentControlInsightsByControlDomainCommandOutput}
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandOutput} for command's `response` shape.
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
export class ListAssessmentControlInsightsByControlDomainCommand extends $Command<
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput,
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
  constructor(readonly input: ListAssessmentControlInsightsByControlDomainCommandInput) {
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
  ): Handler<
    ListAssessmentControlInsightsByControlDomainCommandInput,
    ListAssessmentControlInsightsByControlDomainCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListAssessmentControlInsightsByControlDomainCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentControlInsightsByControlDomainCommand";
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
    input: ListAssessmentControlInsightsByControlDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAssessmentControlInsightsByControlDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> {
    return de_ListAssessmentControlInsightsByControlDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
