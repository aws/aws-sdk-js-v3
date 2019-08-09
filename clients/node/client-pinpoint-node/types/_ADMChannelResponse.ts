/**
 * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface _ADMChannelResponse {
  /**
   * <p>The unique identifier for the application that the ADM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the ADM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the ADM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the ADM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the ADM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the ADM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.</p>
   */
  Platform: string;

  /**
   * <p>The current version of the ADM channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledADMChannelResponse = _ADMChannelResponse;
