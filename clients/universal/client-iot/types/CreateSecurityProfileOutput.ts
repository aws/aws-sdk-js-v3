import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecurityProfileOutput shape
 */
export interface CreateSecurityProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name you gave to the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
