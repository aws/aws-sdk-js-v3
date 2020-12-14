import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface DeleteConnectionRequest {
  ConnectionId: string | undefined;
}

export namespace DeleteConnectionRequest {
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The caller is not authorized to invoke this operation.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>The connection with the provided id no longer exists.</p>
 */
export interface GoneException extends __SmithyException, $MetadataBearer {
  name: "GoneException";
  $fault: "client";
}

export namespace GoneException {
  export const filterSensitiveLog = (obj: GoneException): any => ({
    ...obj,
  });
}

/**
 * <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface GetConnectionRequest {
  ConnectionId: string | undefined;
}

export namespace GetConnectionRequest {
  export const filterSensitiveLog = (obj: GetConnectionRequest): any => ({
    ...obj,
  });
}

export interface Identity {
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
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
  });
}

export interface GetConnectionResponse {
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
  export const filterSensitiveLog = (obj: GetConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The data has exceeded the maximum size allowed.</p>
 */
export interface PayloadTooLargeException extends __SmithyException, $MetadataBearer {
  name: "PayloadTooLargeException";
  $fault: "client";
  Message?: string;
}

export namespace PayloadTooLargeException {
  export const filterSensitiveLog = (obj: PayloadTooLargeException): any => ({
    ...obj,
  });
}

export interface PostToConnectionRequest {
  /**
   * <p>The data to be sent to the client specified by its connection id.</p>
   */
  Data: Uint8Array | undefined;

  /**
   * <p>The identifier of the connection that a specific client is using.</p>
   */
  ConnectionId: string | undefined;
}

export namespace PostToConnectionRequest {
  export const filterSensitiveLog = (obj: PostToConnectionRequest): any => ({
    ...obj,
  });
}
