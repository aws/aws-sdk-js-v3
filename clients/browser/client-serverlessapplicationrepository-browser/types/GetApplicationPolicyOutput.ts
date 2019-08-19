import { _UnmarshalledApplicationPolicyStatement } from "./_ApplicationPolicyStatement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetApplicationPolicyOutput shape
 */
export interface GetApplicationPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of policy statements applied to the application.</p>
   */
  Statements?: Array<_UnmarshalledApplicationPolicyStatement>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
