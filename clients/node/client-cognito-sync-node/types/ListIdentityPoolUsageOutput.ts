import { _UnmarshalledIdentityPoolUsage } from "./_IdentityPoolUsage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Returned for a successful ListIdentityPoolUsage request.
 */
export interface ListIdentityPoolUsageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Usage information for the identity pools.
   */
  IdentityPoolUsages?: Array<_UnmarshalledIdentityPoolUsage>;

  /**
   * The maximum number of results to be returned.
   */
  MaxResults?: number;

  /**
   * Total number of identities for the identity pool.
   */
  Count?: number;

  /**
   * A pagination token for obtaining the next page of results.
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
