import { _UnmarshalledScript } from "./_Script";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScriptOutput shape
 */
export interface DescribeScriptOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Set of properties describing the requested script.</p>
   */
  Script?: _UnmarshalledScript;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
