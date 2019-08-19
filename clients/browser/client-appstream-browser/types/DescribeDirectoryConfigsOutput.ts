import { _UnmarshalledDirectoryConfig } from "./_DirectoryConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDirectoryConfigsOutput shape
 */
export interface DescribeDirectoryConfigsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. </p>
   */
  DirectoryConfigs?: Array<_UnmarshalledDirectoryConfig>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
