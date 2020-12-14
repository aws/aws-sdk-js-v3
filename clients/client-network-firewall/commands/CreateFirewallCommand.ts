import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { CreateFirewallRequest, CreateFirewallResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateFirewallCommand,
  serializeAws_json1_0CreateFirewallCommand,
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

export type CreateFirewallCommandInput = CreateFirewallRequest;
export type CreateFirewallCommandOutput = CreateFirewallResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
 *          <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
 *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
 *          <p>To update the settings for a firewall, you use the operations that apply to the settings
 *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
 *          <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
 */
export class CreateFirewallCommand extends $Command<
  CreateFirewallCommandInput,
  CreateFirewallCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFirewallCommandInput) {
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
  ): Handler<CreateFirewallCommandInput, CreateFirewallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFirewallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateFirewallCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallCommandOutput> {
    return deserializeAws_json1_0CreateFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
