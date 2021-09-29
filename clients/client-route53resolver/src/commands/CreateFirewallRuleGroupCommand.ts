import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateFirewallRuleGroupRequest, CreateFirewallRuleGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFirewallRuleGroupCommand,
  serializeAws_json1_1CreateFirewallRuleGroupCommand,
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

export interface CreateFirewallRuleGroupCommandInput extends CreateFirewallRuleGroupRequest {}
export interface CreateFirewallRuleGroupCommandOutput extends CreateFirewallRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group
 *            by calling <a>CreateFirewallRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFirewallRuleGroupCommand extends $Command<
  CreateFirewallRuleGroupCommandInput,
  CreateFirewallRuleGroupCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFirewallRuleGroupCommandInput) {
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
  ): Handler<CreateFirewallRuleGroupCommandInput, CreateFirewallRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateFirewallRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFirewallRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFirewallRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallRuleGroupCommandOutput> {
    return deserializeAws_json1_1CreateFirewallRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
