import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateResolverRuleRequest, AssociateResolverRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateResolverRuleCommand,
  serializeAws_json1_1AssociateResolverRuleCommand,
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

export type AssociateResolverRuleCommandInput = AssociateResolverRuleRequest;
export type AssociateResolverRuleCommandOutput = AssociateResolverRuleResponse & __MetadataBearer;

/**
 * <p>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
 * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
 * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. </p>
 */
export class AssociateResolverRuleCommand extends $Command<
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateResolverRuleCommandInput) {
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
  ): Handler<AssociateResolverRuleCommandInput, AssociateResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "AssociateResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResolverRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateResolverRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateResolverRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateResolverRuleCommandOutput> {
    return deserializeAws_json1_1AssociateResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
