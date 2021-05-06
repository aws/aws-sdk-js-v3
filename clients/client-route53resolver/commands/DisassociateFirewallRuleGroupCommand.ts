import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateFirewallRuleGroupRequest, DisassociateFirewallRuleGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateFirewallRuleGroupCommand,
  serializeAws_json1_1DisassociateFirewallRuleGroupCommand,
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

export interface DisassociateFirewallRuleGroupCommandInput extends DisassociateFirewallRuleGroupRequest {}
export interface DisassociateFirewallRuleGroupCommandOutput
  extends DisassociateFirewallRuleGroupResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateFirewallRuleGroupCommand extends $Command<
  DisassociateFirewallRuleGroupCommandInput,
  DisassociateFirewallRuleGroupCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateFirewallRuleGroupCommandInput) {
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
  ): Handler<DisassociateFirewallRuleGroupCommandInput, DisassociateFirewallRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DisassociateFirewallRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFirewallRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFirewallRuleGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateFirewallRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateFirewallRuleGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateFirewallRuleGroupCommandOutput> {
    return deserializeAws_json1_1DisassociateFirewallRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
