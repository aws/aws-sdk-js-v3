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
import { DeleteBGPPeerRequest, DeleteBGPPeerResponse } from "../models/models_0";
import { de_DeleteBGPPeerCommand, se_DeleteBGPPeerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBGPPeerCommand}.
 */
export interface DeleteBGPPeerCommandInput extends DeleteBGPPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBGPPeerCommand}.
 */
export interface DeleteBGPPeerCommandOutput extends DeleteBGPPeerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
 *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteBGPPeerRequest
 *   virtualInterfaceId: "STRING_VALUE",
 *   asn: Number("int"),
 *   customerAddress: "STRING_VALUE",
 *   bgpPeerId: "STRING_VALUE",
 * };
 * const command = new DeleteBGPPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBGPPeerResponse
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
 * @param DeleteBGPPeerCommandInput - {@link DeleteBGPPeerCommandInput}
 * @returns {@link DeleteBGPPeerCommandOutput}
 * @see {@link DeleteBGPPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteBGPPeerCommandOutput} for command's `response` shape.
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
export class DeleteBGPPeerCommand extends $Command<
  DeleteBGPPeerCommandInput,
  DeleteBGPPeerCommandOutput,
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
  constructor(readonly input: DeleteBGPPeerCommandInput) {
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
  ): Handler<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteBGPPeerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteBGPPeerCommand";
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
  private serialize(input: DeleteBGPPeerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBGPPeerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBGPPeerCommandOutput> {
    return de_DeleteBGPPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
