// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KinesisVideoSignalingServiceException as __BaseException } from "./KinesisVideoSignalingServiceException";

/**
 * <p>Your request was throttled because you have exceeded the limit of allowed client
 *             calls. Try making the call later.</p>
 */
export class ClientLimitExceededException extends __BaseException {
  readonly name: "ClientLimitExceededException" = "ClientLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientLimitExceededException, __BaseException>) {
    super({
      name: "ClientLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export enum Service {
  TURN = "TURN",
}

export interface GetIceServerConfigRequest {
  /**
   * <p>The ARN of the signaling channel to be used for the peer-to-peer connection between
   *             configured peers. </p>
   */
  ChannelARN: string | undefined;

  /**
   * <p>Unique identifier for the viewer. Must be unique within the signaling channel.</p>
   */
  ClientId?: string;

  /**
   * <p>Specifies the desired service. Currently, <code>TURN</code> is the only valid
   *             value.</p>
   */
  Service?: Service | string;

  /**
   * <p>An optional user ID to be associated with the credentials.</p>
   */
  Username?: string;
}

/**
 * <p>A structure for the ICE server connection data.</p>
 */
export interface IceServer {
  /**
   * <p>An array of URIs, in the form specified in the <a href="https://tools.ietf.org/html/draft-petithuguenin-behave-turn-uris-03">I-D.petithuguenin-behave-turn-uris</a> spec. These URIs provide the different
   *             addresses and/or protocols that can be used to reach the TURN server.</p>
   */
  Uris?: string[];

  /**
   * <p>A username to login to the ICE server.</p>
   */
  Username?: string;

  /**
   * <p>A password to login to the ICE server.</p>
   */
  Password?: string;

  /**
   * <p>The period of time, in seconds, during which the username and password are
   *             valid.</p>
   */
  Ttl?: number;
}

export interface GetIceServerConfigResponse {
  /**
   * <p>The list of ICE server information objects.</p>
   */
  IceServerList?: IceServer[];
}

/**
 * <p>The value for this input parameter is invalid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified client is invalid.</p>
 */
export class InvalidClientException extends __BaseException {
  readonly name: "InvalidClientException" = "InvalidClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientException, __BaseException>) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientException.prototype);
  }
}

/**
 * <p>The caller is not authorized to perform this operation.</p>
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource is not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>If the client session is expired. Once the client is connected, the session is valid
 *             for 45 minutes. Client should reconnect to the channel to continue sending/receiving
 *             messages.</p>
 */
export class SessionExpiredException extends __BaseException {
  readonly name: "SessionExpiredException" = "SessionExpiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionExpiredException, __BaseException>) {
    super({
      name: "SessionExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionExpiredException.prototype);
  }
}

export interface SendAlexaOfferToMasterRequest {
  /**
   * <p>The ARN of the signaling channel by which Alexa and the master peer
   *             communicate.</p>
   */
  ChannelARN: string | undefined;

  /**
   * <p>The unique identifier for the sender client.</p>
   */
  SenderClientId: string | undefined;

  /**
   * <p>The base64-encoded SDP offer content.</p>
   */
  MessagePayload: string | undefined;
}

export interface SendAlexaOfferToMasterResponse {
  /**
   * <p>The base64-encoded SDP answer content.</p>
   */
  Answer?: string;
}

/**
 * @internal
 */
export const GetIceServerConfigRequestFilterSensitiveLog = (obj: GetIceServerConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IceServerFilterSensitiveLog = (obj: IceServer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIceServerConfigResponseFilterSensitiveLog = (obj: GetIceServerConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendAlexaOfferToMasterRequestFilterSensitiveLog = (obj: SendAlexaOfferToMasterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendAlexaOfferToMasterResponseFilterSensitiveLog = (obj: SendAlexaOfferToMasterResponse): any => ({
  ...obj,
});
