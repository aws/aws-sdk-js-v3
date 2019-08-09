/**
 * <p>Information related to an address book.</p>
 */
export interface _AddressBookData {
  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;
}

export type _UnmarshalledAddressBookData = _AddressBookData;
