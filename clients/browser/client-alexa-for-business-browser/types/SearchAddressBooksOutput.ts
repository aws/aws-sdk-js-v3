import { _UnmarshalledAddressBookData } from "./_AddressBookData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchAddressBooksOutput shape
 */
export interface SearchAddressBooksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The address books that meet the specified set of filter criteria, in sort order.</p>
   */
  AddressBooks?: Array<_UnmarshalledAddressBookData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of address books returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
