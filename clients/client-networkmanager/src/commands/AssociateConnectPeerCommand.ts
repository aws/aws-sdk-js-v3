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

import { AssociateConnectPeerRequest, AssociateConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_AssociateConnectPeerCommand, se_AssociateConnectPeerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateConnectPeerCommand}.
 */
export interface AssociateConnectPeerCommandInput extends AssociateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConnectPeerCommand}.
 */
export interface AssociateConnectPeerCommandOutput extends AssociateConnectPeerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates a core network Connect peer with a device and optionally, with a link. </p>
 *          <p>If you specify a link, it must be associated with the specified device. You can only
 *          associate core network Connect peers that have been created on a core network Connect
 *          attachment on a core network. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ConnectPeerId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateConnectPeerResponse
 * //   ConnectPeerAssociation: { // ConnectPeerAssociation
 * //     ConnectPeerId: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateConnectPeerCommandInput - {@link AssociateConnectPeerCommandInput}
 * @returns {@link AssociateConnectPeerCommandOutput}
 * @see {@link AssociateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectPeerCommandOutput} for command's `response` shape.
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
export class AssociateConnectPeerCommand extends $Command<
  AssociateConnectPeerCommandInput,
  AssociateConnectPeerCommandOutput,
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
  constructor(readonly input: AssociateConnectPeerCommandInput) {
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
  ): Handler<AssociateConnectPeerCommandInput, AssociateConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateConnectPeerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "AssociateConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "AssociateConnectPeer",
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
  private serialize(input: AssociateConnectPeerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateConnectPeerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateConnectPeerCommandOutput> {
    return de_AssociateConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
