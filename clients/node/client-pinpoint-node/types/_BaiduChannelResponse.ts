/**
 * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface _BaiduChannelResponse {
  /**
   * <p>The unique identifier for the application that the Baidu channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the Baidu channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  Credential: string;

  /**
   * <p>Specifies whether the Baidu channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the Baidu channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the Baidu channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the Baidu channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</p>
   */
  Platform: string;

  /**
   * <p>The current version of the Baidu channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledBaiduChannelResponse = _BaiduChannelResponse;
