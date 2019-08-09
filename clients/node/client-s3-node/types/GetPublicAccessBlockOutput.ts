import { _UnmarshalledPublicAccessBlockConfiguration } from "./_PublicAccessBlockConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPublicAccessBlockOutput shape
 */
export interface GetPublicAccessBlockOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: _UnmarshalledPublicAccessBlockConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
