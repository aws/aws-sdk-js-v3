import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePolicyOutput shape
 */
export interface DescribePolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the specified policy.</p>
   */
  Policy?: _UnmarshalledPolicy;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
