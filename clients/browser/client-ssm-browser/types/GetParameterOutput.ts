import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetParameterOutput shape
 */
export interface GetParameterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a parameter.</p>
   */
  Parameter?: _UnmarshalledParameter;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
