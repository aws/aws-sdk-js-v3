import { _UnmarshalledFieldLevelEncryptionList } from "./_FieldLevelEncryptionList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFieldLevelEncryptionConfigsOutput shape
 */
export interface ListFieldLevelEncryptionConfigsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionList?: _UnmarshalledFieldLevelEncryptionList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
