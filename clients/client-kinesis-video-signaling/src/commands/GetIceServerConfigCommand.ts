// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIceServerConfigRequest, GetIceServerConfigResponse } from "../models/models_0";
import { GetIceServerConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server.
 *
 * TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see [A REST API For Access To TURN Services](https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00).
 *
 * You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, GetIceServerConfigCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, GetIceServerConfigCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * // import type { KinesisVideoSignalingClientConfig } from "@aws-sdk/client-kinesis-video-signaling";
 * const config = {}; // type is KinesisVideoSignalingClientConfig
 * const client = new KinesisVideoSignalingClient(config);
 * const input = { // GetIceServerConfigRequest
 *   ChannelARN: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   Service: "TURN",
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
 *
 * Your request was throttled because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link InvalidClientException} (client fault)
 *
 * The specified client is invalid.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The caller is not authorized to perform this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource is not found.
 *
 * @throws {@link SessionExpiredException} (client fault)
 *
 * If the client session is expired. Once the client is connected, the session is valid for 45 minutes. Client should reconnect to the channel to continue sending/receiving messages.
 *
 * @throws {@link KinesisVideoSignalingServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoSignaling service.
 *
 * @public
 */
export class GetIceServerConfigCommand extends command<GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetIceServerConfig",
  GetIceServerConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIceServerConfigRequest;
      output: GetIceServerConfigResponse;
    };
    sdk: {
      input: GetIceServerConfigCommandInput;
      output: GetIceServerConfigCommandOutput;
    };
  };
}
