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

import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient";
import { GetIceServerConfigRequest, GetIceServerConfigResponse } from "../models/models_0";
import { de_GetIceServerConfigCommand, se_GetIceServerConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIceServerConfigCommand}.
 */
export interface GetIceServerConfigCommandInput extends GetIceServerConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetIceServerConfigCommand}.
 */
export interface GetIceServerConfigCommandOutput extends GetIceServerConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the Interactive Connectivity Establishment (ICE) server configuration
 *             information, including URIs, username, and password which can be used to configure the
 *             WebRTC connection. The ICE component uses this configuration information to setup the
 *             WebRTC connection, including authenticating with the Traversal Using Relays around NAT
 *             (TURN) relay server. </p>
 *         <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer
 *             applications. By providing a cloud-based relay service, TURN ensures that a connection
 *             can be established even when one or more peers are incapable of a direct peer-to-peer
 *             connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For
 *                 Access To TURN Services</a>.</p>
 *         <p> You can invoke this API to establish a fallback mechanism in case either of the peers
 *             is unable to establish a direct peer-to-peer connection over a signaling channel. You
 *             must specify either a signaling channel ARN or the client ID in order to invoke this
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, GetIceServerConfigCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, GetIceServerConfigCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const input = { // GetIceServerConfigRequest
 *   ChannelARN: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   Service: "STRING_VALUE",
 *   Username: "STRING_VALUE",
 * };
 * const command = new GetIceServerConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetIceServerConfigResponse
 * //   IceServerList: [ // IceServerList
 * //     { // IceServer
 * //       Uris: [ // Uris
 * //         "STRING_VALUE",
 * //       ],
 * //       Username: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       Ttl: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIceServerConfigCommandInput - {@link GetIceServerConfigCommandInput}
 * @returns {@link GetIceServerConfigCommandOutput}
 * @see {@link GetIceServerConfigCommandInput} for command's `input` shape.
 * @see {@link GetIceServerConfigCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for KinesisVideoSignalingClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Your request was throttled because you have exceeded the limit of allowed client
 *             calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link InvalidClientException} (client fault)
 *  <p>The specified client is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is not found.</p>
 *
 * @throws {@link SessionExpiredException} (client fault)
 *  <p>If the client session is expired. Once the client is connected, the session is valid
 *             for 45 minutes. Client should reconnect to the channel to continue sending/receiving
 *             messages.</p>
 *
 * @throws {@link KinesisVideoSignalingServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoSignaling service.</p>
 *
 */
export class GetIceServerConfigCommand extends $Command<
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
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
  constructor(readonly input: GetIceServerConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIceServerConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoSignalingClient";
    const commandName = "GetIceServerConfigCommand";
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
  private serialize(input: GetIceServerConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIceServerConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIceServerConfigCommandOutput> {
    return de_GetIceServerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
