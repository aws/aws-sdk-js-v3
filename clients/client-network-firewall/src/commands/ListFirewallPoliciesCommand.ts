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
  ListFirewallPoliciesRequest,
  ListFirewallPoliciesRequestFilterSensitiveLog,
  ListFirewallPoliciesResponse,
  ListFirewallPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0ListFirewallPoliciesCommand,
  serializeAws_json1_0ListFirewallPoliciesCommand,
} from "../protocols/Aws_json1_0";

export interface ListFirewallPoliciesCommandInput extends ListFirewallPoliciesRequest {}
export interface ListFirewallPoliciesCommandOutput extends ListFirewallPoliciesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
 *          your setting for max results and the number of firewall policies, a single call might not
 *          return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallPoliciesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallPoliciesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallPoliciesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 */
export class ListFirewallPoliciesCommand extends $Command<
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
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

  constructor(readonly input: ListFirewallPoliciesCommandInput) {
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
  ): Handler<ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFirewallPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "ListFirewallPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFirewallPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallPoliciesCommandOutput> {
    return deserializeAws_json1_0ListFirewallPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
