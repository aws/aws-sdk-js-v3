/**
 * <p>Specifies the default message to use for all channels.</p>
 */
export interface _DefaultMessage {
  /**
   * <p>The default message body of the push notification, email, or SMS message.</p>
   */
  Body?: string;

  /**
   * <p>The default message variables to use in the push notification, email, or SMS message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledDefaultMessage extends _DefaultMessage {
  /**
   * <p>The default message variables to use in the push notification, email, or SMS message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
