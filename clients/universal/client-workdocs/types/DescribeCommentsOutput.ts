import { _UnmarshalledComment } from "./_Comment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCommentsOutput shape
 */
export interface DescribeCommentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of comments for the specified document version.</p>
   */
  Comments?: Array<_UnmarshalledComment>;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous call.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
