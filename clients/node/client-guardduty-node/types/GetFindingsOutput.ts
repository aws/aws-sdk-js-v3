import { _UnmarshalledFinding } from "./_Finding";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsOutput shape
 */
export interface GetFindingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of findings.</p>
   */
  Findings: Array<_UnmarshalledFinding>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
