import { _UnmarshalledSearchStatus } from "./_SearchStatus";
import { _UnmarshalledHits } from "./_Hits";
import { _UnmarshalledBucketInfo } from "./_BucketInfo";
import { _UnmarshalledFieldStats } from "./_FieldStats";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.</p>
 */
export interface SearchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status information returned for the search request.</p>
   */
  status?: _UnmarshalledSearchStatus;

  /**
   * <p>The documents that match the search criteria.</p>
   */
  hits?: _UnmarshalledHits;

  /**
   * <p>The requested facet information.</p>
   */
  facets?: { [key: string]: _UnmarshalledBucketInfo };

  /**
   * <p>The requested field statistics information.</p>
   */
  stats?: { [key: string]: _UnmarshalledFieldStats };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
