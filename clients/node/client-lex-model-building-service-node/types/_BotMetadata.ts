/**
 * <p>Provides information about a bot. .</p>
 */
export interface _BotMetadata {
  /**
   * <p>The name of the bot. </p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The status of the bot.</p>
   */
  status?:
    | "BUILDING"
    | "READY"
    | "READY_BASIC_TESTING"
    | "FAILED"
    | "NOT_BUILT"
    | string;

  /**
   * <p>The date that the bot was updated. When you create a bot, the creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date | string | number;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date | string | number;

  /**
   * <p>The version of the bot. For a new bot, the version is always <code>$LATEST</code>.</p>
   */
  version?: string;
}

export interface _UnmarshalledBotMetadata extends _BotMetadata {
  /**
   * <p>The date that the bot was updated. When you create a bot, the creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date;
}
