import { _UnmarshalledQueryInfo } from "./_QueryInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SelectResourceConfigOutput shape
 */
export interface SelectResourceConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the results for the SQL query.</p>
   */
  Results?: Array<string>;

  /**
   * <p>Returns the <code>QueryInfo</code> object.</p>
   */
  QueryInfo?: _UnmarshalledQueryInfo;

  /**
   * <p>The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
