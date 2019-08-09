import { _UnmarshalledResourceShare } from "./_ResourceShare";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourceSharesOutput shape
 */
export interface GetResourceSharesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resource shares.</p>
   */
  resourceShares?: Array<_UnmarshalledResourceShare>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
