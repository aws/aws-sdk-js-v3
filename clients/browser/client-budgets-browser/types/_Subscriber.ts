/**
 * <p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul>
 */
export interface _Subscriber {
  /**
   * <p>The type of notification that AWS sends to a subscriber.</p>
   */
  SubscriptionType: "SNS" | "EMAIL" | string;

  /**
   * <p>The address that AWS sends budget notifications to, either an SNS topic or an email.</p> <p>AWS validates the address for a <code>CreateSubscriber</code> request with the <code>.*</code> regex.</p>
   */
  Address: string;
}

export type _UnmarshalledSubscriber = _Subscriber;
