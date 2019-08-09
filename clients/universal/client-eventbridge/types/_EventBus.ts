/**
 * <p>An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives rules from AWS services. A custom event bus can receive rules from AWS services as well as your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.</p>
 */
export interface _EventBus {
  /**
   * <p>The name of the event bus.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  Arn?: string;

  /**
   * <p>The permissions policy of the event bus, describing which other AWS accounts can write events to this event bus.</p>
   */
  Policy?: string;
}

export type _UnmarshalledEventBus = _EventBus;
