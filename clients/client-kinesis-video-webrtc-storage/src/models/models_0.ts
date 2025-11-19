// smithy-typescript generated code
/**
 * @public
 */
export interface JoinStorageSessionInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   * @public
   */
  channelArn: string | undefined;
}

/**
 * @public
 */
export interface JoinStorageSessionAsViewerInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>
   *       The unique identifier for the sender client.
   *     </p>
   * @public
   */
  clientId: string | undefined;
}
