import { _TrialMinutes, _UnmarshalledTrialMinutes } from "./_TrialMinutes";

/**
 * <p>A container for account-level settings within AWS Device Farm.</p>
 */
export interface _AccountSettings {
  /**
   * <p>The AWS account number specified in the <code>AccountSettings</code> container.</p>
   */
  awsAccountNumber?: string;

  /**
   * <p>Returns the unmetered devices you have purchased or want to purchase.</p>
   */
  unmeteredDevices?:
    | { [key in "ANDROID" | "IOS" | string]: number }
    | Iterable<["ANDROID" | "IOS" | string, number]>;

  /**
   * <p>Returns the unmetered remote access devices you have purchased or want to purchase.</p>
   */
  unmeteredRemoteAccessDevices?:
    | { [key in "ANDROID" | "IOS" | string]: number }
    | Iterable<["ANDROID" | "IOS" | string, number]>;

  /**
   * <p>The maximum number of minutes a test run will execute before it times out.</p>
   */
  maxJobTimeoutMinutes?: number;

  /**
   * <p>Information about an AWS account's usage of free trial device minutes.</p>
   */
  trialMinutes?: _TrialMinutes;

  /**
   * <p>The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an <code>offering-id:number</code> pair, where the <code>offering-id</code> represents one of the IDs returned by the <code>ListOfferings</code> command.</p>
   */
  maxSlots?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * <p>The default number of minutes (at the account level) a test run will execute before it times out. The default value is 150 minutes.</p>
   */
  defaultJobTimeoutMinutes?: number;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export interface _UnmarshalledAccountSettings extends _AccountSettings {
  /**
   * <p>Returns the unmetered devices you have purchased or want to purchase.</p>
   */
  unmeteredDevices?: { [key in "ANDROID" | "IOS" | string]: number };

  /**
   * <p>Returns the unmetered remote access devices you have purchased or want to purchase.</p>
   */
  unmeteredRemoteAccessDevices?: {
    [key in "ANDROID" | "IOS" | string]: number
  };

  /**
   * <p>Information about an AWS account's usage of free trial device minutes.</p>
   */
  trialMinutes?: _UnmarshalledTrialMinutes;

  /**
   * <p>The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an <code>offering-id:number</code> pair, where the <code>offering-id</code> represents one of the IDs returned by the <code>ListOfferings</code> command.</p>
   */
  maxSlots?: { [key: string]: number };
}
