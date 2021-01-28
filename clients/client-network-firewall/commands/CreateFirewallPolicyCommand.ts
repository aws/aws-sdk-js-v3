import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateFirewallPolicyCommand,
  serializeAws_json1_0CreateFirewallPolicyCommand,
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

export type CreateFirewallPolicyCommandInput = CreateFirewallPolicyRequest;
export type CreateFirewallPolicyCommandOutput = CreateFirewallPolicyResponse & __MetadataBearer;

/**
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 */
export class CreateFirewallPolicyCommand extends $Command<
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFirewallPolicyCommandInput) {
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
  ): Handler<CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateFirewallPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0CreateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
