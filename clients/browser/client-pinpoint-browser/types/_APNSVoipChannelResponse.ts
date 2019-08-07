/**
 * Apple VoIP Push Notification Service channel definition.
 */
export interface _APNSVoipChannelResponse {
  /**
   * Application id
   */
  ApplicationId?: string;

  /**
   * When was this segment created
   */
  CreationDate?: string;

  /**
   * The default authentication method used for APNs.
   */
  DefaultAuthenticationMethod?: string;

  /**
   * If the channel is enabled for sending messages.
   */
  Enabled?: boolean;

  /**
   * Not used. Retained for backwards compatibility.
   */
  HasCredential?: boolean;

  /**
   * If the channel is registered with a token key for authentication.
   */
  HasTokenKey?: boolean;

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
   * The platform type. Will be APNS.
   */
  Platform?: string;

  /**
   * Version of channel
   */
  Version?: number;
}

export type _UnmarshalledAPNSVoipChannelResponse = _APNSVoipChannelResponse;
