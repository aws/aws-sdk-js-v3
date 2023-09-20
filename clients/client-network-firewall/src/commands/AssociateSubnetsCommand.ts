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

import { AssociateSubnetsRequest, AssociateSubnetsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_AssociateSubnetsCommand, se_AssociateSubnetsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSubnetsCommand}.
 */
export interface AssociateSubnetsCommandInput extends AssociateSubnetsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSubnetsCommand}.
 */
export interface AssociateSubnetsCommandOutput extends AssociateSubnetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 *          subnet for each of the Availability Zones that the VPC spans. </p>
 *          <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To
 *          enable the firewall's protections, you must also modify the VPC's route tables for each
 *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 *          zone through the firewall endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // AssociateSubnetsRequest
 *   UpdateToken: "STRING_VALUE",
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   SubnetMappings: [ // SubnetMappings // required
 *     { // SubnetMapping
 *       SubnetId: "STRING_VALUE", // required
 *       IPAddressType: "DUALSTACK" || "IPV4" || "IPV6",
 *     },
 *   ],
 * };
 * const command = new AssociateSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSubnetsResponse
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
 * @param AssociateSubnetsCommandInput - {@link AssociateSubnetsCommandInput}
 * @returns {@link AssociateSubnetsCommandOutput}
 * @see {@link AssociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
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
export class AssociateSubnetsCommand extends $Command<
  AssociateSubnetsCommandInput,
  AssociateSubnetsCommandOutput,
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
  constructor(readonly input: AssociateSubnetsCommandInput) {
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
  ): Handler<AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSubnetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "AssociateSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkFirewall_20201112",
        operation: "AssociateSubnets",
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
  private serialize(input: AssociateSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateSubnetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSubnetsCommandOutput> {
    return de_AssociateSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
