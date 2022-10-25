// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  ListAssessmentControlInsightsByControlDomainRequest,
  ListAssessmentControlInsightsByControlDomainRequestFilterSensitiveLog,
  ListAssessmentControlInsightsByControlDomainResponse,
  ListAssessmentControlInsightsByControlDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand,
  serializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand,
} from "../protocols/Aws_restJson1";

export interface ListAssessmentControlInsightsByControlDomainCommandInput
  extends ListAssessmentControlInsightsByControlDomainRequest {}
export interface ListAssessmentControlInsightsByControlDomainCommandOutput
  extends ListAssessmentControlInsightsByControlDomainResponse,
    __MetadataBearer {}

/**
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
 * const command = new ListAssessmentControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
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
      inputFilterSensitiveLog: ListAssessmentControlInsightsByControlDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentControlInsightsByControlDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssessmentControlInsightsByControlDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> {
    return deserializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
