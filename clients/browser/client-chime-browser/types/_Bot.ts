/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface _Bot {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * <p>The bot type.</p>
   */
  BotType?: "ChatBot" | string;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date | string | number;

  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;
}

export interface _UnmarshalledBot extends _Bot {
  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
