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
  CreateFirewallRequest,
  CreateFirewallRequestFilterSensitiveLog,
  CreateFirewallResponse,
  CreateFirewallResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0CreateFirewallCommand,
  serializeAws_json1_0CreateFirewallCommand,
} from "../protocols/Aws_json1_0";

export interface CreateFirewallCommandInput extends CreateFirewallRequest {}
export interface CreateFirewallCommandOutput extends CreateFirewallResponse, __MetadataBearer {}

/**
 * <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
 *          <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p>
 *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
 *          <p>To update the settings for a firewall, you use the operations that apply to the settings
 *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
 *          <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 */
export class CreateFirewallCommand extends $Command<
  CreateFirewallCommandInput,
  CreateFirewallCommandOutput,
  NetworkFirewallClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFirewallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallResponseFilterSensitiveLog,
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
