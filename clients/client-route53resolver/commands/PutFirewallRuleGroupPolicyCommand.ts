import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutFirewallRuleGroupPolicyRequest, PutFirewallRuleGroupPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand,
  serializeAws_json1_1PutFirewallRuleGroupPolicyCommand,
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

export interface PutFirewallRuleGroupPolicyCommandInput extends PutFirewallRuleGroupPolicyRequest {}
export interface PutFirewallRuleGroupPolicyCommandOutput extends PutFirewallRuleGroupPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule
 * 			group. You can use the policy to share the rule group using Resource Access Manager
 * 			(RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutFirewallRuleGroupPolicyCommand extends $Command<
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFirewallRuleGroupPolicyCommandInput) {
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
  ): Handler<PutFirewallRuleGroupPolicyCommandInput, PutFirewallRuleGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "PutFirewallRuleGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFirewallRuleGroupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutFirewallRuleGroupPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutFirewallRuleGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutFirewallRuleGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutFirewallRuleGroupPolicyCommandOutput> {
    return deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
