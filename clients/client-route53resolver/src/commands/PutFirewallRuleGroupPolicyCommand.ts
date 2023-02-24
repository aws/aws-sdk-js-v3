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
  PutFirewallRuleGroupPolicyRequest,
  PutFirewallRuleGroupPolicyRequestFilterSensitiveLog,
  PutFirewallRuleGroupPolicyResponse,
  PutFirewallRuleGroupPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand,
  serializeAws_json1_1PutFirewallRuleGroupPolicyCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

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
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class PutFirewallRuleGroupPolicyCommand extends $Command<
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutFirewallRuleGroupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "PutFirewallRuleGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFirewallRuleGroupPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutFirewallRuleGroupPolicyResponseFilterSensitiveLog,
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
