import { _PhoneNumber, _UnmarshalledPhoneNumber } from "./_PhoneNumber";
import { _SipAddress, _UnmarshalledSipAddress } from "./_SipAddress";

/**
 * <p>A contact with attributes.</p>
 */
export interface _Contact {
  /**
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;

  /**
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * <p>The first name of the contact, used to call the contact on the device.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of the contact, used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * <p>The phone number of the contact. The phone number type defaults to WORK. You can either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.</p>
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
}

export interface _UnmarshalledContact extends _Contact {
  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: Array<_UnmarshalledPhoneNumber>;

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: Array<_UnmarshalledSipAddress>;
}
