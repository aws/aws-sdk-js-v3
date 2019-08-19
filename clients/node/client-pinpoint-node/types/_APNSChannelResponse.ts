/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface _APNSChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   *  <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>
   */
  Platform: string;

  /**
   * <p>The current version of the APNs channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledAPNSChannelResponse = _APNSChannelResponse;
