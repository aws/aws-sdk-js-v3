import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface DeleteConnectionRequest {
  __type?: "DeleteConnectionRequest";
  ConnectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  export function isa(o: any): o is DeleteConnectionRequest {
    return _smithy.isa(o, "DeleteConnectionRequest");
  }
}

/**
 * <p>The caller is not authorized to invoke this operation.</p>
 */
export interface ForbiddenException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ForbiddenException";
  $fault: "client";
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return _smithy.isa(o, "ForbiddenException");
  }
}

export interface GetConnectionRequest {
  __type?: "GetConnectionRequest";
  ConnectionId: string | undefined;
}

export namespace GetConnectionRequest {
  export function isa(o: any): o is GetConnectionRequest {
    return _smithy.isa(o, "GetConnectionRequest");
  }
}

export interface GetConnectionResponse extends $MetadataBearer {
  __type?: "GetConnectionResponse";
  /**
   * <p>The time in ISO 8601 format for when the connection was established.</p>
   */
  ConnectedAt?: Date;

  Identity?: Identity;
  /**
   * <p>The time in ISO 8601 format for when the connection was last active.</p>
   */
  LastActiveAt?: Date;
}

export namespace GetConnectionResponse {
  export function isa(o: any): o is GetConnectionResponse {
    return _smithy.isa(o, "GetConnectionResponse");
  }
}

/**
 * <p>The connection with the provided id no longer exists.</p>
 */
export interface GoneException extends _smithy.SmithyException, $MetadataBearer {
  __type: "GoneException";
  $fault: "client";
}

export namespace GoneException {
  export function isa(o: any): o is GoneException {
    return _smithy.isa(o, "GoneException");
  }
}

export interface Identity {
  __type?: "Identity";
  /**
   * <p>The source IP address of the TCP connection making the request to API Gateway.</p>
   */
  SourceIp: string | undefined;

  /**
   * <p>The User Agent of the API caller.</p>
   */
  UserAgent: string | undefined;
}

export namespace Identity {
  export function isa(o: any): o is Identity {
    return _smithy.isa(o, "Identity");
  }
}

/**
 * <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 */
export interface LimitExceededException extends _smithy.SmithyException, $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 * <p>The data has exceeded the maximum size allowed.</p>
 */
export interface PayloadTooLargeException extends _smithy.SmithyException, $MetadataBearer {
  __type: "PayloadTooLargeException";
  $fault: "client";
  Message?: string;
}

export namespace PayloadTooLargeException {
  export function isa(o: any): o is PayloadTooLargeException {
    return _smithy.isa(o, "PayloadTooLargeException");
  }
}

export interface PostToConnectionRequest {
  __type?: "PostToConnectionRequest";
  /**
   * <p>The identifier of the connection that a specific client is using.</p>
   */
  ConnectionId: string | undefined;

  /**
   * <p>The data to be sent to the client specified by its connection id.</p>
   */
  Data: Uint8Array | undefined;
}

export namespace PostToConnectionRequest {
  export function isa(o: any): o is PostToConnectionRequest {
    return _smithy.isa(o, "PostToConnectionRequest");
  }
}
