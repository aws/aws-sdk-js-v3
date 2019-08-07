/**
 * Base definition for channel response.
 */
export interface _ChannelResponse {
  /**
   * Application id
   */
  ApplicationId?: string;

  /**
   * When was this segment created
   */
  CreationDate?: string;

  /**
   * If the channel is enabled for sending messages.
   */
  Enabled?: boolean;

  /**
   * Not used. Retained for backwards compatibility.
   */
  HasCredential?: boolean;

  /**
   * Channel ID. Not used, only for backwards compatibility.
   */
  Id?: string;

  /**
   * Is this channel archived
   */
  IsArchived?: boolean;

  /**
   * Who made the last change
   */
  LastModifiedBy?: string;

  /**
   * Last date this was updated
   */
  LastModifiedDate?: string;

  /**
   * Version of channel
   */
  Version?: number;
}

export type _UnmarshalledChannelResponse = _ChannelResponse;
