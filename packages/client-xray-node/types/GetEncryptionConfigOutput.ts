import { _UnmarshalledEncryptionConfig } from "./_EncryptionConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEncryptionConfigOutput shape
 */
export interface GetEncryptionConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: _UnmarshalledEncryptionConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
