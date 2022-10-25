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
  ListControlDomainInsightsRequest,
  ListControlDomainInsightsRequestFilterSensitiveLog,
  ListControlDomainInsightsResponse,
  ListControlDomainInsightsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListControlDomainInsightsCommand,
  serializeAws_restJson1ListControlDomainInsightsCommand,
} from "../protocols/Aws_restJson1";

export interface ListControlDomainInsightsCommandInput extends ListControlDomainInsightsRequest {}
export interface ListControlDomainInsightsCommandOutput extends ListControlDomainInsightsResponse, __MetadataBearer {}

/**
 * <p>Lists the latest analytics data for control domains across all of your active
 *          assessments. </p>
 *          <note>
 *             <p>A control domain is listed only if at least one of the controls within that domain
 *             collected evidence on the <code>lastUpdated</code> date of
 *                <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed
 *             for that control domain.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlDomainInsightsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlDomainInsightsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListControlDomainInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListControlDomainInsightsCommandInput} for command's `input` shape.
 * @see {@link ListControlDomainInsightsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class ListControlDomainInsightsCommand extends $Command<
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput,
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

  constructor(readonly input: ListControlDomainInsightsCommandInput) {
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
  ): Handler<ListControlDomainInsightsCommandInput, ListControlDomainInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListControlDomainInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListControlDomainInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListControlDomainInsightsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListControlDomainInsightsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListControlDomainInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListControlDomainInsightsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListControlDomainInsightsCommandOutput> {
    return deserializeAws_restJson1ListControlDomainInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
