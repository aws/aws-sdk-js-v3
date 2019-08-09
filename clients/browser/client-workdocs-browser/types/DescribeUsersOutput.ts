import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUsersOutput shape
 */
export interface DescribeUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The users.</p>
   */
  Users?: Array<_UnmarshalledUser>;

  /**
   * <p>The total number of users included in the results.</p>
   */
  TotalNumberOfUsers?: number;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
