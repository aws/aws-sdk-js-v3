import { _UnmarshalledFieldLevelEncryptionProfileList } from "./_FieldLevelEncryptionProfileList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFieldLevelEncryptionProfilesOutput shape
 */
export interface ListFieldLevelEncryptionProfilesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionProfileList?: _UnmarshalledFieldLevelEncryptionProfileList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
