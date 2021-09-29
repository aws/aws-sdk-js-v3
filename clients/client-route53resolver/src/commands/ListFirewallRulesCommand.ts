import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallRulesRequest, ListFirewallRulesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListFirewallRulesCommand,
  serializeAws_json1_1ListFirewallRulesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListFirewallRulesCommandInput extends ListFirewallRulesRequest {}
export interface ListFirewallRulesCommandOutput extends ListFirewallRulesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p>
 *          <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallRulesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFirewallRulesCommand extends $Command<
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallRulesCommandOutput> {
    return deserializeAws_json1_1ListFirewallRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
