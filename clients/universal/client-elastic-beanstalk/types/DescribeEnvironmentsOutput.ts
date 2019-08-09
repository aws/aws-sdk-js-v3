import { _UnmarshalledEnvironmentDescription } from "./_EnvironmentDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a list of environment descriptions.</p>
 */
export interface DescribeEnvironmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Returns an <a>EnvironmentDescription</a> list. </p>
   */
  Environments?: Array<_UnmarshalledEnvironmentDescription>;

  /**
   * <p>In a paginated request, the token that you can pass in a subsequent request to get the next response page.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
