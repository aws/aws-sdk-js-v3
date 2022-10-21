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
  DeleteFirewallRequest,
  DeleteFirewallRequestFilterSensitiveLog,
  DeleteFirewallResponse,
  DeleteFirewallResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0DeleteFirewallCommand,
  serializeAws_json1_0DeleteFirewallCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteFirewallCommandInput extends DeleteFirewallRequest {}
export interface DeleteFirewallCommandOutput extends DeleteFirewallResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>.
 *        This operation requires the firewall's <code>DeleteProtection</code> flag to be
 *             <code>FALSE</code>. You can't revert this operation. </p>
 *          <p>You can check whether a firewall is
 *          in use by reviewing the route tables for the Availability Zones where you have
 *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 *          you can remove the firewall safely.</p>
 *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
 *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DeleteFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 */
export class DeleteFirewallCommand extends $Command<
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFirewallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DeleteFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFirewallRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteFirewallResponseFilterSensitiveLog,
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
