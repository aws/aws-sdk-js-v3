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

import { CreateConnectPeerRequest, CreateConnectPeerResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_CreateConnectPeerCommand, se_CreateConnectPeerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectPeerCommand}.
 */
export interface CreateConnectPeerCommandInput extends CreateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectPeerCommand}.
 */
export interface CreateConnectPeerCommandOutput extends CreateConnectPeerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
 *          The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateConnectPeerRequest
 *   ConnectAttachmentId: "STRING_VALUE", // required
 *   CoreNetworkAddress: "STRING_VALUE",
 *   PeerAddress: "STRING_VALUE", // required
 *   BgpOptions: { // BgpOptions
 *     PeerAsn: Number("long"),
 *   },
 *   InsideCidrBlocks: [ // ConstrainedStringList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectPeerResponse
 * //   ConnectPeer: { // ConnectPeer
 * //     CoreNetworkId: "STRING_VALUE",
 * //     ConnectAttachmentId: "STRING_VALUE",
 * //     ConnectPeerId: "STRING_VALUE",
 * //     EdgeLocation: "STRING_VALUE",
 * //     State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Configuration: { // ConnectPeerConfiguration
 * //       CoreNetworkAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // ConstrainedStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "GRE",
 * //       BgpConfigurations: [ // ConnectPeerBgpConfigurationList
 * //         { // ConnectPeerBgpConfiguration
 * //           CoreNetworkAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           CoreNetworkAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConnectPeerCommandInput - {@link CreateConnectPeerCommandInput}
 * @returns {@link CreateConnectPeerCommandOutput}
 * @see {@link CreateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link CreateConnectPeerCommandOutput} for command's `response` shape.
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
export class CreateConnectPeerCommand extends $Command<
  CreateConnectPeerCommandInput,
  CreateConnectPeerCommandOutput,
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
  constructor(readonly input: CreateConnectPeerCommandInput) {
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
  ): Handler<CreateConnectPeerCommandInput, CreateConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectPeerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "CreateConnectPeer",
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
  private serialize(input: CreateConnectPeerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConnectPeerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectPeerCommandOutput> {
    return de_CreateConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
