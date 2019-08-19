import { _UnmarshalledPrefixList } from "./_PrefixList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePrefixListsOutput shape
 */
export interface DescribePrefixListsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>All available prefix lists.</p>
   */
  PrefixLists?: Array<_UnmarshalledPrefixList>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
