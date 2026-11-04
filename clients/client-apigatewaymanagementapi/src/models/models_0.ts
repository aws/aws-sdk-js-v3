// smithy-typescript generated code
/**
 * @public
 */
export interface DeleteConnectionRequest {
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionRequest {
  ConnectionId: string | undefined;
}

/**
 * @public
 */
export interface Identity {
  /**
   * The source IP address of the TCP connection making the request to API Gateway.
   *
   * @public
   */
  SourceIp: string | undefined;

  /**
   * The User Agent of the API caller.
   *
   * @public
   */
  UserAgent: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * The time in ISO 8601 format for when the connection was established.
   *
   * @public
   */
  ConnectedAt?: Date | undefined;

  Identity?: Identity | undefined;
  /**
   * The time in ISO 8601 format for when the connection was last active.
   *
   * @public
   */
  LastActiveAt?: Date | undefined;
}

/**
 * @public
 */
export interface PostToConnectionRequest {
  /**
   * The data to be sent to the client specified by its connection id.
   *
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * The identifier of the connection that a specific client is using.
   *
   * @public
   */
  ConnectionId: string | undefined;
}
