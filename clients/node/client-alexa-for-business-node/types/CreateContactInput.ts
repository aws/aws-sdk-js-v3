import { _PhoneNumber } from "./_PhoneNumber";
import { _SipAddress } from "./_SipAddress";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateContactInput shape
 */
export interface CreateContactInput {
  /**
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * <p>The first name of the contact that is used to call the contact on the device.</p>
   */
  FirstName: string;

  /**
   * <p>The last name of the contact that is used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * <p>The phone number of the contact in E.164 format. The phone number type defaults to WORK. You can specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: Array<_PhoneNumber> | Iterable<_PhoneNumber>;

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: Array<_SipAddress> | Iterable<_SipAddress>;

  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
