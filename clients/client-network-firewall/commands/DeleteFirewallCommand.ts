import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DeleteFirewallRequest, DeleteFirewallResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteFirewallCommand,
  serializeAws_json1_0DeleteFirewallCommand,
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

export type DeleteFirewallCommandInput = DeleteFirewallRequest;
export type DeleteFirewallCommandOutput = DeleteFirewallResponse & __MetadataBearer;

/**
 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be
 *             <code>FALSE</code>. You can't revert this operation. </p>
 *          <p>You can check whether a firewall is
 *          in use by reviewing the route tables for the Availability Zones where you have
 *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 *          you can remove the firewall safely.</p>
 *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
 *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
 */
export class DeleteFirewallCommand extends $Command<
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFirewallCommandInput) {
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
  ): Handler<DeleteFirewallCommandInput, DeleteFirewallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DeleteFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFirewallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFirewallResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFirewallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteFirewallCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFirewallCommandOutput> {
    return deserializeAws_json1_0DeleteFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
