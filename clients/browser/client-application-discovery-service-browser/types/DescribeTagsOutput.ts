import { _UnmarshalledConfigurationTag } from "./_ConfigurationTag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTagsOutput shape
 */
export interface DescribeTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.</p>
   */
  tags?: Array<_UnmarshalledConfigurationTag>;

  /**
   * <p>The call returns a token. Use this token to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
