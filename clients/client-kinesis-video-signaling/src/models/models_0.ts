// smithy-typescript generated code
import { Service } from "./enums";

/**
 * @public
 */
export interface GetIceServerConfigRequest {
  /**
   * <p>The ARN of the signaling channel to be used for the peer-to-peer connection between
   *             configured peers. </p>
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * <p>Unique identifier for the viewer. Must be unique within the signaling channel.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>Specifies the desired service. Currently, <code>TURN</code> is the only valid
   *             value.</p>
   * @public
   */
  Service?: Service | undefined;

  /**
   * <p>An optional user ID to be associated with the credentials.</p>
   * @public
   */
  Username?: string | undefined;
}

/**
 * <p>A structure for the ICE server connection data.</p>
 * @public
 */
export interface IceServer {
  /**
   * <p>An array of URIs, in the form specified in the <a href="https://tools.ietf.org/html/draft-petithuguenin-behave-turn-uris-03">I-D.petithuguenin-behave-turn-uris</a> spec. These URIs provide the different
   *             addresses and/or protocols that can be used to reach the TURN server.</p>
   * @public
   */
  Uris?: string[] | undefined;

  /**
   * <p>A username to login to the ICE server.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>A password to login to the ICE server.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The period of time, in seconds, during which the username and password are
   *             valid.</p>
   * @public
   */
  Ttl?: number | undefined;
}

/**
 * @public
 */
export interface GetIceServerConfigResponse {
  /**
   * <p>The list of ICE server information objects.</p>
   * @public
   */
  IceServerList?: IceServer[] | undefined;
}

/**
 * @public
 */
export interface SendAlexaOfferToMasterRequest {
  /**
   * <p>The ARN of the signaling channel by which Alexa and the master peer
   *             communicate.</p>
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * <p>The unique identifier for the sender client.</p>
   * @public
   */
  SenderClientId: string | undefined;

  /**
   * <p>The base64-encoded SDP offer content.</p>
   * @public
   */
  MessagePayload: string | undefined;
}

/**
 * @public
 */
export interface SendAlexaOfferToMasterResponse {
  /**
   * <p>The base64-encoded SDP answer content.</p>
   * @public
   */
  Answer?: string | undefined;
}
