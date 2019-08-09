import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupsOutput shape
 */
export interface ListGroupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of the groups.</p>
   */
  GroupList?: Array<_UnmarshalledGroup>;

  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The AWS request ID for this operation.</p>
   */
  RequestId?: string;

  /**
   * <p>The http status of the request.</p>
   */
  Status?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
