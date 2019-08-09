import { _UnmarshalledApplicationVersionDescription } from "./_ApplicationVersionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message wrapping a list of application version descriptions.</p>
 */
export interface DescribeApplicationVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of <code>ApplicationVersionDescription</code> objects sorted in order of creation.</p>
   */
  ApplicationVersions?: Array<_UnmarshalledApplicationVersionDescription>;

  /**
   * <p>In a paginated request, the token that you can pass in a subsequent request to get the next response page.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
