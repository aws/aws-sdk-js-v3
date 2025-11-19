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
   * <p>The source IP address of the TCP connection making the request to API Gateway.</p>
   * @public
   */
  SourceIp: string | undefined;

  /**
   * <p>The User Agent of the API caller.</p>
   * @public
   */
  UserAgent: string | undefined;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * <p>The time in ISO 8601 format for when the connection was established.</p>
   * @public
   */
  ConnectedAt?: Date | undefined;

  Identity?: Identity | undefined;
  /**
   * <p>The time in ISO 8601 format for when the connection was last active.</p>
   * @public
   */
  LastActiveAt?: Date | undefined;
}

/**
 * @public
 */
export interface PostToConnectionRequest {
  /**
   * <p>The data to be sent to the client specified by its connection id.</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>The identifier of the connection that a specific client is using.</p>
   * @public
   */
  ConnectionId: string | undefined;
}
