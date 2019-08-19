import { _UnmarshalledFieldLevelEncryptionProfile } from "./_FieldLevelEncryptionProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFieldLevelEncryptionProfileOutput shape
 */
export interface UpdateFieldLevelEncryptionProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the results of updating the profile.</p>
   */
  FieldLevelEncryptionProfile?: _UnmarshalledFieldLevelEncryptionProfile;

  /**
   * <p>The result of the field-level encryption profile request. </p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
