import { _UnmarshalledFieldLevelEncryption } from "./_FieldLevelEncryption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFieldLevelEncryptionConfigOutput shape
 */
export interface UpdateFieldLevelEncryptionConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the results of updating the configuration.</p>
   */
  FieldLevelEncryption?: _UnmarshalledFieldLevelEncryption;

  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
