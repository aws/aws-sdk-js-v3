import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of names of sending authorization policies that apply to an identity.</p>
 */
export interface ListIdentityPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of names of policies that apply to the specified identity.</p>
   */
  PolicyNames: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
