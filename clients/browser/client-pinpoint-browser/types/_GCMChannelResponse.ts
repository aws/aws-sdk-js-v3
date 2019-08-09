/**
 * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface _GCMChannelResponse {
  /**
   * <p>The unique identifier for the application that the GCM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the GCM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The API key, also referred to as a <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  Credential: string;

  /**
   * <p>Specifies whether the GCM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the GCM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the GCM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the GCM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</p>
   */
  Platform: string;

  /**
   * <p>The current version of the GCM channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledGCMChannelResponse = _GCMChannelResponse;
