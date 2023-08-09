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
} from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateTransitVirtualInterfaceRequest, AllocateTransitVirtualInterfaceResult } from "../models/models_0";
import {
  de_AllocateTransitVirtualInterfaceCommand,
  se_AllocateTransitVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AllocateTransitVirtualInterfaceCommand}.
 */
export interface AllocateTransitVirtualInterfaceCommandInput extends AllocateTransitVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AllocateTransitVirtualInterfaceCommand}.
 */
export interface AllocateTransitVirtualInterfaceCommandOutput
  extends AllocateTransitVirtualInterfaceResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p>
 *          <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p>
 *          <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocateTransitVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // AllocateTransitVirtualInterfaceRequest
 *   connectionId: "STRING_VALUE", // required
 *   ownerAccount: "STRING_VALUE", // required
 *   newTransitVirtualInterfaceAllocation: { // NewTransitVirtualInterfaceAllocation
 *     virtualInterfaceName: "STRING_VALUE",
 *     vlan: Number("int"),
 *     asn: Number("int"),
 *     mtu: Number("int"),
 *     authKey: "STRING_VALUE",
 *     amazonAddress: "STRING_VALUE",
 *     customerAddress: "STRING_VALUE",
 *     addressFamily: "ipv4" || "ipv6",
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new AllocateTransitVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AllocateTransitVirtualInterfaceResult
 * //   virtualInterface: { // VirtualInterface
 * //     ownerAccount: "STRING_VALUE",
 * //     virtualInterfaceId: "STRING_VALUE",
 * //     location: "STRING_VALUE",
 * //     connectionId: "STRING_VALUE",
 * //     virtualInterfaceType: "STRING_VALUE",
 * //     virtualInterfaceName: "STRING_VALUE",
 * //     vlan: Number("int"),
 * //     asn: Number("int"),
 * //     amazonSideAsn: Number("long"),
 * //     authKey: "STRING_VALUE",
 * //     amazonAddress: "STRING_VALUE",
 * //     customerAddress: "STRING_VALUE",
 * //     addressFamily: "ipv4" || "ipv6",
 * //     virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //     customerRouterConfig: "STRING_VALUE",
 * //     mtu: Number("int"),
 * //     jumboFrameCapable: true || false,
 * //     virtualGatewayId: "STRING_VALUE",
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     routeFilterPrefixes: [ // RouteFilterPrefixList
 * //       { // RouteFilterPrefix
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //     bgpPeers: [ // BGPPeerList
 * //       { // BGPPeer
 * //         bgpPeerId: "STRING_VALUE",
 * //         asn: Number("int"),
 * //         authKey: "STRING_VALUE",
 * //         addressFamily: "ipv4" || "ipv6",
 * //         amazonAddress: "STRING_VALUE",
 * //         customerAddress: "STRING_VALUE",
 * //         bgpPeerState: "verifying" || "pending" || "available" || "deleting" || "deleted",
 * //         bgpStatus: "up" || "down" || "unknown",
 * //         awsDeviceV2: "STRING_VALUE",
 * //         awsLogicalDeviceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     region: "STRING_VALUE",
 * //     awsDeviceV2: "STRING_VALUE",
 * //     awsLogicalDeviceId: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     siteLinkEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param AllocateTransitVirtualInterfaceCommandInput - {@link AllocateTransitVirtualInterfaceCommandInput}
 * @returns {@link AllocateTransitVirtualInterfaceCommandOutput}
 * @see {@link AllocateTransitVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocateTransitVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit on the number of tags that can be assigned.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class AllocateTransitVirtualInterfaceCommand extends $Command<
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
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
  constructor(readonly input: AllocateTransitVirtualInterfaceCommandInput) {
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
  ): Handler<AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocateTransitVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AllocateTransitVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: AllocateTransitVirtualInterfaceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AllocateTransitVirtualInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllocateTransitVirtualInterfaceCommandOutput> {
    return de_AllocateTransitVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
