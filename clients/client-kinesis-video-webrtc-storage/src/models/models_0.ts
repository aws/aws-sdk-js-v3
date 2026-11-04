// smithy-typescript generated code
/**
 * @public
 */
export interface JoinStorageSessionInput {
  /**
   * The Amazon Resource Name (ARN) of the signaling channel.
   *
   * @public
   */
  channelArn: string | undefined;
}

/**
 * @public
 */
export interface JoinStorageSessionAsViewerInput {
  /**
   * The Amazon Resource Name (ARN) of the signaling channel.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The unique identifier for the sender client.
   *
   * @public
   */
  clientId: string | undefined;
}
