import { _Limit, _UnmarshalledLimit } from "./_Limit";

/**
 * <p>Information about the AWS Shield Advanced subscription for an account.</p>
 */
export interface _Subscription {
  /**
   * <p>The start time of the subscription, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The date and time your subscription will end.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The length, in seconds, of the AWS Shield Advanced subscription for the account.</p>
   */
  TimeCommitmentInSeconds?: number;

  /**
   * <p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p> <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
   */
  AutoRenew?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>Specifies how many protections of a given type you can create.</p>
   */
  Limits?: Array<_Limit> | Iterable<_Limit>;
}

export interface _UnmarshalledSubscription extends _Subscription {
  /**
   * <p>The start time of the subscription, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time your subscription will end.</p>
   */
  EndTime?: Date;

  /**
   * <p>Specifies how many protections of a given type you can create.</p>
   */
  Limits?: Array<_UnmarshalledLimit>;
}
