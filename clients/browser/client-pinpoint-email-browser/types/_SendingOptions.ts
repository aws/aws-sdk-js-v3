/**
 * <p>Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.</p>
 */
export interface _SendingOptions {
  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

export type _UnmarshalledSendingOptions = _SendingOptions;
