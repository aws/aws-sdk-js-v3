// smithy-typescript generated code
import type { Service } from "./enums";

/**
 * @public
 */
export interface GetIceServerConfigRequest {
  /**
   * The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * Unique identifier for the viewer. Must be unique within the signaling channel.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * Specifies the desired service. Currently, `TURN` is the only valid value.
   *
   * @public
   */
  Service?: Service | undefined;

  /**
   * An optional user ID to be associated with the credentials.
   *
   * @public
   */
  Username?: string | undefined;
}

/**
 * A structure for the ICE server connection data.
 *
 * @public
 */
export interface IceServer {
  /**
   * An array of URIs, in the form specified in the [I-D.petithuguenin-behave-turn-uris](https://tools.ietf.org/html/draft-petithuguenin-behave-turn-uris-03) spec. These URIs provide the different addresses and/or protocols that can be used to reach the TURN server.
   *
   * @public
   */
  Uris?: string[] | undefined;

  /**
   * A username to login to the ICE server.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * A password to login to the ICE server.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The period of time, in seconds, during which the username and password are valid.
   *
   * @public
   */
  Ttl?: number | undefined;
}

/**
 * @public
 */
export interface GetIceServerConfigResponse {
  /**
   * The list of ICE server information objects.
   *
   * @public
   */
  IceServerList?: IceServer[] | undefined;
}

/**
 * @public
 */
export interface SendAlexaOfferToMasterRequest {
  /**
   * The ARN of the signaling channel by which Alexa and the master peer communicate.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The unique identifier for the sender client.
   *
   * @public
   */
  SenderClientId: string | undefined;

  /**
   * The base64-encoded SDP offer content.
   *
   * @public
   */
  MessagePayload: string | undefined;
}

/**
 * @public
 */
export interface SendAlexaOfferToMasterResponse {
  /**
   * The base64-encoded SDP answer content.
   *
   * @public
   */
  Answer?: string | undefined;
}
