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
  ListControlInsightsByControlDomainRequest,
  ListControlInsightsByControlDomainResponse,
} from "../models/models_0";
import {
  de_ListControlInsightsByControlDomainCommand,
  se_ListControlInsightsByControlDomainCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListControlInsightsByControlDomainCommand}.
 */
export interface ListControlInsightsByControlDomainCommandInput extends ListControlInsightsByControlDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListControlInsightsByControlDomainCommand}.
 */
export interface ListControlInsightsByControlDomainCommandOutput
  extends ListControlInsightsByControlDomainResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the latest analytics data for controls within a specific control domain across all
 *          active assessments.</p>
 *          <note>
 *             <p>Control insights are listed only if the control belongs to the control domain that
 *             was specified and the control collected evidence on the <code>lastUpdated</code> date of
 *                <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data
 *             is listed for that control. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlInsightsByControlDomainCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlInsightsByControlDomainCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // ListControlInsightsByControlDomainRequest
 *   controlDomainId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListControlInsightsByControlDomainResponse
 * //   controlInsightsMetadata: [ // ControlInsightsMetadata
 * //     { // ControlInsightsMetadataItem
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       evidenceInsights: { // EvidenceInsights
 * //         noncompliantEvidenceCount: Number("int"),
 * //         compliantEvidenceCount: Number("int"),
 * //         inconclusiveEvidenceCount: Number("int"),
 * //       },
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlInsightsByControlDomainCommandInput - {@link ListControlInsightsByControlDomainCommandInput}
 * @returns {@link ListControlInsightsByControlDomainCommandOutput}
 * @see {@link ListControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListControlInsightsByControlDomainCommandOutput} for command's `response` shape.
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
export class ListControlInsightsByControlDomainCommand extends $Command<
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
  AuditManagerClientResolvedConfig
> {
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
  constructor(readonly input: ListControlInsightsByControlDomainCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListControlInsightsByControlDomainCommandInput, ListControlInsightsByControlDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListControlInsightsByControlDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListControlInsightsByControlDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "ListControlInsightsByControlDomain",
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
    input: ListControlInsightsByControlDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListControlInsightsByControlDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListControlInsightsByControlDomainCommandOutput> {
    return de_ListControlInsightsByControlDomainCommand(output, context);
  }
}
