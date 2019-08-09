import { _UnmarshalledFieldLevelEncryption } from "./_FieldLevelEncryption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFieldLevelEncryptionConfigOutput shape
 */
export interface CreateFieldLevelEncryptionConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returned when you create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryption?: _UnmarshalledFieldLevelEncryption;

  /**
   * <p>The fully qualified URI of the new configuration resource just created. For example: <code>https://cloudfront.amazonaws.com/2010-11-01/field-level-encryption-config/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
