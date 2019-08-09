import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output from the <a>DescribeClusterParameters</a> action. </p>
 */
export interface DescribeClusterParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>Parameter</a> instances. Each instance lists the parameters of one cluster parameter group. </p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command. If the <code>Marker</code> field is empty, all response records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
