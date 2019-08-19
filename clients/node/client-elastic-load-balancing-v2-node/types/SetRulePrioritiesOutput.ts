import { _UnmarshalledRule } from "./_Rule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetRulePrioritiesOutput shape
 */
export interface SetRulePrioritiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Array<_UnmarshalledRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
