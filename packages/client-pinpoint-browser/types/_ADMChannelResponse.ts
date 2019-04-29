/**
 * Amazon Device Messaging channel definition.
 */
export interface _ADMChannelResponse {
  /**
   * The ID of the application to which the channel applies.
   */
  ApplicationId?: string;

  /**
   * The date and time when this channel was created.
   */
  CreationDate?: string;

  /**
   * Indicates whether or not the channel is enabled for sending messages.
   */
  Enabled?: boolean;

  /**
   * Not used. Retained for backwards compatibility.
   */
  HasCredential?: boolean;

  /**
   * (Deprecated) An identifier for the channel. Retained for backwards compatibility.
   */
  Id?: string;

  /**
   * Indicates whether or not the channel is archived.
   */
  IsArchived?: boolean;

  /**
   * The user who last updated this channel.
   */
  LastModifiedBy?: string;

  /**
   * The date and time when this channel was last modified.
   */
  LastModifiedDate?: string;

  /**
   * The platform type. For this channel, the value is always "ADM."
   */
  Platform?: string;

  /**
   * The channel version.
   */
  Version?: number;
}

export type _UnmarshalledADMChannelResponse = _ADMChannelResponse;
