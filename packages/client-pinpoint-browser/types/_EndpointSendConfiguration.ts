/**
 * Endpoint send configuration.
 */
export interface _EndpointSendConfiguration {
  /**
   * Body override. If specified will override default body.
   */
  BodyOverride?: string;

  /**
   * A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
   */
  Context?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * The Raw JSON formatted string to be used as the payload. This value overrides the message.
   */
  RawContent?: string;

  /**
   * A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions.
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * Title override. If specified will override default title if applicable.
   */
  TitleOverride?: string;
}

export interface _UnmarshalledEndpointSendConfiguration
  extends _EndpointSendConfiguration {
  /**
   * A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
   */
  Context?: { [key: string]: string };

  /**
   * A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions.
   */
  Substitutions?: { [key: string]: Array<string> };
}
