import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallConfigsRequest, ListFirewallConfigsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListFirewallConfigsCommand,
  serializeAws_json1_1ListFirewallConfigsCommand,
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

export interface ListFirewallConfigsCommandInput extends ListFirewallConfigsRequest {}
export interface ListFirewallConfigsCommandOutput extends ListFirewallConfigsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p>
 *          <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFirewallConfigsCommand extends $Command<
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallConfigsCommandInput) {
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
  ): Handler<ListFirewallConfigsCommandInput, ListFirewallConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallConfigsCommandOutput> {
    return deserializeAws_json1_1ListFirewallConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
