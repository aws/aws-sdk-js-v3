import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetParametersOutput shape
 */
export interface GetParametersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of details for a parameter.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>A list of parameters that are not formatted correctly or do not run during an execution.</p>
   */
  InvalidParameters?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
