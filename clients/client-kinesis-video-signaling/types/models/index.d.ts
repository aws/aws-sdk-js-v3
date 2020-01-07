import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Your request was throttled because you have exceeded the limit of allowed client
 *             calls. Try making the call later.</p>
 */
export interface ClientLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ClientLimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ClientLimitExceededException {
    function isa(o: any): o is ClientLimitExceededException;
}
/**
 * <p>The value for this input parameter is invalid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
    name: "InvalidArgumentException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidArgumentException {
    function isa(o: any): o is InvalidArgumentException;
}
/**
 * <p>The caller is not authorized to perform this operation.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
    name: "NotAuthorizedException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotAuthorizedException {
    function isa(o: any): o is NotAuthorizedException;
}
/**
 * <p>The specified resource is not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
export interface GetIceServerConfigRequest {
    __type?: "GetIceServerConfigRequest";
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
export declare namespace GetIceServerConfigRequest {
    function isa(o: any): o is GetIceServerConfigRequest;
}
export interface GetIceServerConfigResponse {
    __type?: "GetIceServerConfigResponse";
    /**
     * <p>The list of ICE server information objects.</p>
     */
    IceServerList?: Array<IceServer>;
}
export declare namespace GetIceServerConfigResponse {
    function isa(o: any): o is GetIceServerConfigResponse;
}
/**
 * <p>A structure for the ICE server connection data.</p>
 */
export interface IceServer {
    __type?: "IceServer";
    /**
     * <p>A password to login to the ICE server.</p>
     */
    Password?: string;
    /**
     * <p>The period of time, in seconds, during which the username and password are
     *             valid.</p>
     */
    Ttl?: number;
    /**
     * <p>An array of URIs, in the form specified in the <a href="https://tools.ietf.org/html/draft-petithuguenin-behave-turn-uris-03">I-D.petithuguenin-behave-turn-uris</a> spec. These URIs provide the different
     *             addresses and/or protocols that can be used to reach the TURN server.</p>
     */
    Uris?: Array<string>;
    /**
     * <p>A username to login to the ICE server.</p>
     */
    Username?: string;
}
export declare namespace IceServer {
    function isa(o: any): o is IceServer;
}
/**
 * <p>The specified client is invalid.</p>
 */
export interface InvalidClientException extends __SmithyException, $MetadataBearer {
    name: "InvalidClientException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidClientException {
    function isa(o: any): o is InvalidClientException;
}
export interface SendAlexaOfferToMasterRequest {
    __type?: "SendAlexaOfferToMasterRequest";
    /**
     * <p>The ARN of the signaling channel by which Alexa and the master peer
     *             communicate.</p>
     */
    ChannelARN: string | undefined;
    /**
     * <p>The base64-encoded SDP offer content.</p>
     */
    MessagePayload: string | undefined;
    /**
     * <p>The unique identifier for the sender client.</p>
     */
    SenderClientId: string | undefined;
}
export declare namespace SendAlexaOfferToMasterRequest {
    function isa(o: any): o is SendAlexaOfferToMasterRequest;
}
export interface SendAlexaOfferToMasterResponse {
    __type?: "SendAlexaOfferToMasterResponse";
    /**
     * <p>The base64-encoded SDP answer content.</p>
     */
    Answer?: string;
}
export declare namespace SendAlexaOfferToMasterResponse {
    function isa(o: any): o is SendAlexaOfferToMasterResponse;
}
export declare enum Service {
    TURN = "TURN"
}
/**
 * <p>If the client session is expired. Once the client is connected, the session is valid
 *             for 45 minutes. Client should reconnect to the channel to continue sending/receiving
 *             messages.</p>
 */
export interface SessionExpiredException extends __SmithyException, $MetadataBearer {
    name: "SessionExpiredException";
    $fault: "client";
    message?: string;
}
export declare namespace SessionExpiredException {
    function isa(o: any): o is SessionExpiredException;
}
