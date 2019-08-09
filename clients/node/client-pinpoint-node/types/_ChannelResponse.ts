/**
 * <p>Provides information about the general settings and status of a channel for an application.</p>
 */
export interface _ChannelResponse {
  /**
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The current version of the channel.</p>
   */
  Version?: number;
}

export type _UnmarshalledChannelResponse = _ChannelResponse;
