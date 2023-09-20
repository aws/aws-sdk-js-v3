// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DisassociateSubnetsCommand, se_DisassociateSubnetsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSubnetsCommand}.
 */
export interface DisassociateSubnetsCommandInput extends DisassociateSubnetsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSubnetsCommand}.
 */
export interface DisassociateSubnetsCommandOutput extends DisassociateSubnetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DisassociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DisassociateSubnetsRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   SubnetIds: [ // AzSubnets // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSubnetsResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   SubnetMappings: [ // SubnetMappings
 * //     { // SubnetMapping
 * //       SubnetId: "STRING_VALUE", // required
 * //       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateSubnetsCommandInput - {@link DisassociateSubnetsCommandInput}
 * @returns {@link DisassociateSubnetsCommandOutput}
 * @see {@link DisassociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class DisassociateSubnetsCommand extends $Command<
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DisassociateSubnetsCommandInput) {
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
  ): Handler<DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateSubnetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DisassociateSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkFirewall_20201112",
        operation: "DisassociateSubnets",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DisassociateSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateSubnetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateSubnetsCommandOutput> {
    return de_DisassociateSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
