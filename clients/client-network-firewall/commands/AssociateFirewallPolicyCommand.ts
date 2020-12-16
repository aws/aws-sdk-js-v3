import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { AssociateFirewallPolicyRequest, AssociateFirewallPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_0AssociateFirewallPolicyCommand,
  serializeAws_json1_0AssociateFirewallPolicyCommand,
} from "../protocols/Aws_json1_0";
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

export type AssociateFirewallPolicyCommandInput = AssociateFirewallPolicyRequest;
export type AssociateFirewallPolicyCommandOutput = AssociateFirewallPolicyResponse & __MetadataBearer;

/**
 * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p>
 *          <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a
 *          collection of inspection rule groups and other settings. Each firewall requires one
 *          firewall policy association, and you can use the same firewall policy for multiple
 *          firewalls. </p>
 */
export class AssociateFirewallPolicyCommand extends $Command<
  AssociateFirewallPolicyCommandInput,
  AssociateFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateFirewallPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateFirewallPolicyCommandInput, AssociateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "AssociateFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateFirewallPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateFirewallPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0AssociateFirewallPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0AssociateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
