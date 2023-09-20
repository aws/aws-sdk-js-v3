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

import {
  AssociateTransitGatewayConnectPeerRequest,
  AssociateTransitGatewayConnectPeerResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_AssociateTransitGatewayConnectPeerCommand,
  se_AssociateTransitGatewayConnectPeerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayConnectPeerCommand}.
 */
export interface AssociateTransitGatewayConnectPeerCommandInput extends AssociateTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayConnectPeerCommand}.
 */
export interface AssociateTransitGatewayConnectPeerCommandOutput
  extends AssociateTransitGatewayConnectPeerResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *          <p>You can only associate transit gateway Connect peers that have been created on a
 *             transit gateway that's registered in your global network.</p>
 *          <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateTransitGatewayConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayConnectPeerArn: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayConnectPeerResponse
 * //   TransitGatewayConnectPeerAssociation: { // TransitGatewayConnectPeerAssociation
 * //     TransitGatewayConnectPeerArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayConnectPeerCommandInput - {@link AssociateTransitGatewayConnectPeerCommandInput}
 * @returns {@link AssociateTransitGatewayConnectPeerCommandOutput}
 * @see {@link AssociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class AssociateTransitGatewayConnectPeerCommand extends $Command<
  AssociateTransitGatewayConnectPeerCommandInput,
  AssociateTransitGatewayConnectPeerCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: AssociateTransitGatewayConnectPeerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTransitGatewayConnectPeerCommandInput, AssociateTransitGatewayConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTransitGatewayConnectPeerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "AssociateTransitGatewayConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "AssociateTransitGatewayConnectPeer",
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
    input: AssociateTransitGatewayConnectPeerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateTransitGatewayConnectPeerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTransitGatewayConnectPeerCommandOutput> {
    return de_AssociateTransitGatewayConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
