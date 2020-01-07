import { KinesisVideoSignalingClient } from "./KinesisVideoSignalingClient";
import { GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput } from "./commands/GetIceServerConfigCommand";
import { SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput } from "./commands/SendAlexaOfferToMasterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Kinesis Video Streams Signaling Service is a intermediate service that establishes a
 *             communication channel for discovering peers, transmitting offers and answers in order to
 *             establish peer-to-peer connection in webRTC technology.</p>
 */
export declare class KinesisVideoSignaling extends KinesisVideoSignalingClient {
    /**
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
     */
    getIceServerConfig(args: GetIceServerConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetIceServerConfigCommandOutput>;
    getIceServerConfig(args: GetIceServerConfigCommandInput, cb: (err: any, data?: GetIceServerConfigCommandOutput) => void): void;
    getIceServerConfig(args: GetIceServerConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIceServerConfigCommandOutput) => void): void;
    /**
     * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
     *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
     *             The offer is delivered as soon as the master is connected to the specified signaling
     *             channel. This API returns the SDP answer from the connected master. If the master is not
     *             connected to the signaling channel, redelivery requests are made until the message
     *             expires.</p>
     */
    sendAlexaOfferToMaster(args: SendAlexaOfferToMasterCommandInput, options?: __HttpHandlerOptions): Promise<SendAlexaOfferToMasterCommandOutput>;
    sendAlexaOfferToMaster(args: SendAlexaOfferToMasterCommandInput, cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void): void;
    sendAlexaOfferToMaster(args: SendAlexaOfferToMasterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void): void;
}
