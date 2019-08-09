import { _UnmarshalledAddressBook } from "./_AddressBook";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAddressBookOutput shape
 */
export interface GetAddressBookOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the requested address book.</p>
   */
  AddressBook?: _UnmarshalledAddressBook;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
