import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetFirewallRuleGroupAssociationRequest, GetFirewallRuleGroupAssociationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand,
  serializeAws_json1_1GetFirewallRuleGroupAssociationCommand,
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

export interface GetFirewallRuleGroupAssociationCommandInput extends GetFirewallRuleGroupAssociationRequest {}
export interface GetFirewallRuleGroupAssociationCommandOutput
  extends GetFirewallRuleGroupAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
 */
export class GetFirewallRuleGroupAssociationCommand extends $Command<
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFirewallRuleGroupAssociationCommandInput) {
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
  ): Handler<GetFirewallRuleGroupAssociationCommandInput, GetFirewallRuleGroupAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetFirewallRuleGroupAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFirewallRuleGroupAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFirewallRuleGroupAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFirewallRuleGroupAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFirewallRuleGroupAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput> {
    return deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
