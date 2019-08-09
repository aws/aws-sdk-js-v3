/**
 * <p>An address book with attributes.</p>
 */
export interface _AddressBook {
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

export type _UnmarshalledAddressBook = _AddressBook;
