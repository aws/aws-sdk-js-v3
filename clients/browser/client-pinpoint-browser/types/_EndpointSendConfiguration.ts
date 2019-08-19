/**
 * <p>Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.</p>
 */
export interface _EndpointSendConfiguration {
  /**
   * <p>The body of the message. If specified, this value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * <p>A map of custom attributes to attach to the message for the address. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides the message.</p>
   */
  RawContent?: string;

  /**
   * <p>A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The title or subject line of the message. If specified, this value overrides the default message title or subject line.</p>
   */
  TitleOverride?: string;
}

export interface _UnmarshalledEndpointSendConfiguration
  extends _EndpointSendConfiguration {
  /**
   * <p>A map of custom attributes to attach to the message for the address. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: { [key: string]: string };

  /**
   * <p>A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
