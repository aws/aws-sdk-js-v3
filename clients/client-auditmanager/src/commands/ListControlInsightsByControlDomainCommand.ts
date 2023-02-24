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
  ListControlInsightsByControlDomainRequest,
  ListControlInsightsByControlDomainRequestFilterSensitiveLog,
  ListControlInsightsByControlDomainResponse,
  ListControlInsightsByControlDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListControlInsightsByControlDomainCommand,
  serializeAws_restJson1ListControlInsightsByControlDomainCommand,
} from "../protocols/Aws_restJson1";

export interface ListControlInsightsByControlDomainCommandInput extends ListControlInsightsByControlDomainRequest {}
export interface ListControlInsightsByControlDomainCommandOutput
  extends ListControlInsightsByControlDomainResponse,
    __MetadataBearer {}

/**
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
 * const command = new ListControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListControlInsightsByControlDomainCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class ListControlInsightsByControlDomainCommand extends $Command<
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
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

  constructor(readonly input: ListControlInsightsByControlDomainCommandInput) {
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
      inputFilterSensitiveLog: ListControlInsightsByControlDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListControlInsightsByControlDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListControlInsightsByControlDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListControlInsightsByControlDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListControlInsightsByControlDomainCommandOutput> {
    return deserializeAws_restJson1ListControlInsightsByControlDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
