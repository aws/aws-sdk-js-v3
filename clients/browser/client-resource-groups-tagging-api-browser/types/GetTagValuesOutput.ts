import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTagValuesOutput shape
 */
export interface GetTagValuesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string that indicates that the response contains more data than can be returned in a single response. To receive additional data, specify this string for the <code>PaginationToken</code> value in a subsequent request.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A list of all tag values for the specified key in the AWS account.</p>
   */
  TagValues?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
