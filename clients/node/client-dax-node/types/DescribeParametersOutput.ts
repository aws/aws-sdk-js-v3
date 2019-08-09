import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeParametersOutput shape
 */
export interface DescribeParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters within a parameter group. Each element in the list represents one parameter.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
