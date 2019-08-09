/**
 * <p>Specifies address-based configuration settings for a message that's sent directly to an endpoint.</p>
 */
export interface _AddressConfiguration {
  /**
   * <p>The message body to use instead of the default message body. This value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * <p>The channel to use when sending the message.</p>
   */
  ChannelType?:
    | "GCM"
    | "APNS"
    | "APNS_SANDBOX"
    | "APNS_VOIP"
    | "APNS_VOIP_SANDBOX"
    | "ADM"
    | "SMS"
    | "VOICE"
    | "EMAIL"
    | "BAIDU"
    | "CUSTOM"
    | string;

  /**
   * <p>An object that maps custom attributes to attributes for the address and is attached to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.</p>
   */
  RawContent?: string;

  /**
   * <p>An object that maps variable values for the message. Amazon Pinpoint merges these values with the variable values specified by properties of the DefaultMessage object. The substitutions in this map take precedence over all other substitutions.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The message title to use instead of the default message title. This value overrides the default message title.</p>
   */
  TitleOverride?: string;
}

export interface _UnmarshalledAddressConfiguration
  extends _AddressConfiguration {
  /**
   * <p>An object that maps custom attributes to attributes for the address and is attached to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>An object that maps variable values for the message. Amazon Pinpoint merges these values with the variable values specified by properties of the DefaultMessage object. The substitutions in this map take precedence over all other substitutions.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
