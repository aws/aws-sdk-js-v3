/**
 * <p>Provides information about the status and settings of the SMS channel for an application.</p>
 */
export interface _SMSChannelResponse {
  /**
   * <p>The unique identifier for the application that the SMS channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the SMS channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the SMS channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the SMS channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the SMS channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.</p>
   */
  Platform: string;

  /**
   * <p>The maximum number of promotional messages that you can send through the SMS channel each second.</p>
   */
  PromotionalMessagesPerSecond?: number;

  /**
   * <p>The identity that displays on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;

  /**
   * <p>The maximum number of transactional messages that you can send through the SMS channel each second.</p>
   */
  TransactionalMessagesPerSecond?: number;

  /**
   * <p>The current version of the SMS channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledSMSChannelResponse = _SMSChannelResponse;
