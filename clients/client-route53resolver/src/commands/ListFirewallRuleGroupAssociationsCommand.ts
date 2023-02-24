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

import {
  ListFirewallRuleGroupAssociationsRequest,
  ListFirewallRuleGroupAssociationsRequestFilterSensitiveLog,
  ListFirewallRuleGroupAssociationsResponse,
  ListFirewallRuleGroupAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand,
  serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface ListFirewallRuleGroupAssociationsCommandInput extends ListFirewallRuleGroupAssociationsRequest {}
export interface ListFirewallRuleGroupAssociationsCommandOutput
  extends ListFirewallRuleGroupAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
 *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallRuleGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallRuleGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class ListFirewallRuleGroupAssociationsCommand extends $Command<
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: ListFirewallRuleGroupAssociationsCommandInput) {
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
  ): Handler<ListFirewallRuleGroupAssociationsCommandInput, ListFirewallRuleGroupAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFirewallRuleGroupAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListFirewallRuleGroupAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallRuleGroupAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallRuleGroupAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFirewallRuleGroupAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFirewallRuleGroupAssociationsCommandOutput> {
    return deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
