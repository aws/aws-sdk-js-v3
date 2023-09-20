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
import { CreatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import {
  de_CreatePublicVirtualInterfaceCommand,
  se_CreatePublicVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePublicVirtualInterfaceCommand}.
 */
export interface CreatePublicVirtualInterfaceCommandInput extends CreatePublicVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublicVirtualInterfaceCommand}.
 */
export interface CreatePublicVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * @public
 * <p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
 *       A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p>
 *          <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code>
 *       and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePublicVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePublicVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreatePublicVirtualInterfaceRequest
 *   connectionId: "STRING_VALUE", // required
 *   newPublicVirtualInterface: { // NewPublicVirtualInterface
 *     virtualInterfaceName: "STRING_VALUE", // required
 *     vlan: Number("int"), // required
 *     asn: Number("int"), // required
 *     authKey: "STRING_VALUE",
 *     amazonAddress: "STRING_VALUE",
 *     customerAddress: "STRING_VALUE",
 *     addressFamily: "ipv4" || "ipv6",
 *     routeFilterPrefixes: [ // RouteFilterPrefixList
 *       { // RouteFilterPrefix
 *         cidr: "STRING_VALUE",
 *       },
 *     ],
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreatePublicVirtualInterfaceCommand(input);
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
 * @param CreatePublicVirtualInterfaceCommandInput - {@link CreatePublicVirtualInterfaceCommandInput}
 * @returns {@link CreatePublicVirtualInterfaceCommandOutput}
 * @see {@link CreatePublicVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePublicVirtualInterfaceCommandOutput} for command's `response` shape.
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
export class CreatePublicVirtualInterfaceCommand extends $Command<
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
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
  constructor(readonly input: CreatePublicVirtualInterfaceCommandInput) {
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
  ): Handler<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePublicVirtualInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreatePublicVirtualInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "CreatePublicVirtualInterface",
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
  private serialize(input: CreatePublicVirtualInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePublicVirtualInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePublicVirtualInterfaceCommandOutput> {
    return de_CreatePublicVirtualInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
