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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/models_0";
import {
  de_UpdateVirtualInterfaceAttributesCommand,
  se_UpdateVirtualInterfaceAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVirtualInterfaceAttributesCommand}.
 */
export interface UpdateVirtualInterfaceAttributesCommandInput extends UpdateVirtualInterfaceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualInterfaceAttributesCommand}.
 */
export interface UpdateVirtualInterfaceAttributesCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified attributes of the specified virtual private interface.</p>
 *          <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateVirtualInterfaceAttributesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateVirtualInterfaceAttributesRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   mtu: Number("int"),
 *   enableSiteLink: true || false,
 *   virtualInterfaceName: "STRING_VALUE",
 * };
 * const command = new UpdateVirtualInterfaceAttributesCommand(input);
 * const response = await client.send(command);
 * // { // VirtualInterface
 * //   ownerAccount: "STRING_VALUE",
 * //   virtualInterfaceId: "STRING_VALUE",
 * //   location: "STRING_VALUE",
 * //   connectionId: "STRING_VALUE",
 * //   virtualInterfaceType: "STRING_VALUE",
 * //   virtualInterfaceName: "STRING_VALUE",
 * //   vlan: Number("int"),
 * //   asn: Number("int"),
 * //   amazonSideAsn: Number("long"),
 * //   authKey: "STRING_VALUE",
 * //   amazonAddress: "STRING_VALUE",
 * //   customerAddress: "STRING_VALUE",
 * //   addressFamily: "ipv4" || "ipv6",
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //   customerRouterConfig: "STRING_VALUE",
 * //   mtu: Number("int"),
 * //   jumboFrameCapable: true || false,
 * //   virtualGatewayId: "STRING_VALUE",
 * //   directConnectGatewayId: "STRING_VALUE",
 * //   routeFilterPrefixes: [ // RouteFilterPrefixList
 * //     { // RouteFilterPrefix
 * //       cidr: "STRING_VALUE",
 * //     },
 * //   ],
 * //   bgpPeers: [ // BGPPeerList
 * //     { // BGPPeer
 * //       bgpPeerId: "STRING_VALUE",
 * //       asn: Number("int"),
 * //       authKey: "STRING_VALUE",
 * //       addressFamily: "ipv4" || "ipv6",
 * //       amazonAddress: "STRING_VALUE",
 * //       customerAddress: "STRING_VALUE",
 * //       bgpPeerState: "verifying" || "pending" || "available" || "deleting" || "deleted",
 * //       bgpStatus: "up" || "down" || "unknown",
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   region: "STRING_VALUE",
 * //   awsDeviceV2: "STRING_VALUE",
 * //   awsLogicalDeviceId: "STRING_VALUE",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   siteLinkEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateVirtualInterfaceAttributesCommandInput - {@link UpdateVirtualInterfaceAttributesCommandInput}
 * @returns {@link UpdateVirtualInterfaceAttributesCommandOutput}
 * @see {@link UpdateVirtualInterfaceAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualInterfaceAttributesCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class UpdateVirtualInterfaceAttributesCommand extends $Command<
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: UpdateVirtualInterfaceAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVirtualInterfaceAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateVirtualInterfaceAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "UpdateVirtualInterfaceAttributes",
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
  private serialize(
    input: UpdateVirtualInterfaceAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateVirtualInterfaceAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVirtualInterfaceAttributesCommandOutput> {
    return de_UpdateVirtualInterfaceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
