import { _UnmarshalledParameterMetadata } from "./_ParameterMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeParametersOutput shape
 */
export interface DescribeParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Parameters returned by the request.</p>
   */
  Parameters?: Array<_UnmarshalledParameterMetadata>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
