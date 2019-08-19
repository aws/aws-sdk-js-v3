import { _UnmarshalledFieldLevelEncryptionConfig } from "./_FieldLevelEncryptionConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFieldLevelEncryptionConfigOutput shape
 */
export interface GetFieldLevelEncryptionConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryptionConfig?: _UnmarshalledFieldLevelEncryptionConfig;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
