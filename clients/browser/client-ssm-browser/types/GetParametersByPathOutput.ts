import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetParametersByPathOutput shape
 */
export interface GetParametersByPathOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of parameters found in the specified hierarchy.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
