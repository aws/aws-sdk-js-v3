import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendSSHPublicKeyOutput shape
 */
export interface SendSSHPublicKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The request ID as logged by EC2 Connect. Please provide this when contacting AWS Support.</p>
   */
  RequestId?: string;

  /**
   * <p>Indicates request success.</p>
   */
  Success?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
