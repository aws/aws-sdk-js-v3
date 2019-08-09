/**
 * <p>Represents an association between an Amazon Lex bot and an external messaging platform.</p>
 */
export interface _BotChannelAssociation {
  /**
   * <p>The name of the association between the bot and the channel. </p>
   */
  name?: string;

  /**
   * <p>A text description of the association you are creating. </p>
   */
  description?: string;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which this association is being made. </p>
   */
  botAlias?: string;

  /**
   * <p>The name of the Amazon Lex bot to which this association is being made. </p> <note> <p>Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio.</p> </note>
   */
  botName?: string;

  /**
   * <p>The date that the association between the Amazon Lex bot and the channel was created. </p>
   */
  createdDate?: Date | string | number;

  /**
   * <p>Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.</p>
   */
  type?: "Facebook" | "Slack" | "Twilio-Sms" | "Kik" | string;

  /**
   * <p>Provides information necessary to communicate with the messaging platform. </p>
   */
  botConfiguration?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The status of the bot channel. </p> <ul> <li> <p> <code>CREATED</code> - The channel has been created and is ready for use.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Channel creation is in progress.</p> </li> <li> <p> <code>FAILED</code> - There was an error creating the channel. For information about the reason for the failure, see the <code>failureReason</code> field.</p> </li> </ul>
   */
  status?: "IN_PROGRESS" | "CREATED" | "FAILED" | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to create the association.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledBotChannelAssociation
  extends _BotChannelAssociation {
  /**
   * <p>The date that the association between the Amazon Lex bot and the channel was created. </p>
   */
  createdDate?: Date;

  /**
   * <p>Provides information necessary to communicate with the messaging platform. </p>
   */
  botConfiguration?: { [key: string]: string };
}
