/**
 * <p>Provides information about a bot alias.</p>
 */
export interface _BotAliasMetadata {
  /**
   * <p>The name of the bot alias.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the Amazon Lex bot to which the alias points.</p>
   */
  botVersion?: string;

  /**
   * <p>The name of the bot to which the alias points.</p>
   */
  botName?: string;

  /**
   * <p>The date that the bot alias was updated. When you create a resource, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date | string | number;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date | string | number;

  /**
   * <p>Checksum of the bot alias.</p>
   */
  checksum?: string;
}

export interface _UnmarshalledBotAliasMetadata extends _BotAliasMetadata {
  /**
   * <p>The date that the bot alias was updated. When you create a resource, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date;
}
