import { _UnmarshalledUser } from "./_User";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserOutput shape
 */
export interface DescribeUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user name.</p>
   */
  User?: _UnmarshalledUser;

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
