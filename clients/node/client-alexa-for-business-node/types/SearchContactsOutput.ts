import { _UnmarshalledContactData } from "./_ContactData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchContactsOutput shape
 */
export interface SearchContactsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The contacts that meet the specified set of filter criteria, in sort order.</p>
   */
  Contacts?: Array<_UnmarshalledContactData>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of contacts returned.</p>
   */
  TotalCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
