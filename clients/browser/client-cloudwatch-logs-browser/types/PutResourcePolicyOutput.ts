import { _UnmarshalledResourcePolicy } from "./_ResourcePolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutResourcePolicyOutput shape
 */
export interface PutResourcePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The new policy.</p>
   */
  resourcePolicy?: _UnmarshalledResourcePolicy;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
