import { _UnmarshalledSharedDirectory } from "./_SharedDirectory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSharedDirectoriesOutput shape
 */
export interface DescribeSharedDirectoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all shared directories in your account.</p>
   */
  SharedDirectories?: Array<_UnmarshalledSharedDirectory>;

  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
