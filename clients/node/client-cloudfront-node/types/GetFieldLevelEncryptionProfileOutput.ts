import { _UnmarshalledFieldLevelEncryptionProfile } from "./_FieldLevelEncryptionProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFieldLevelEncryptionProfileOutput shape
 */
export interface GetFieldLevelEncryptionProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the field-level encryption profile information.</p>
   */
  FieldLevelEncryptionProfile?: _UnmarshalledFieldLevelEncryptionProfile;

  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
