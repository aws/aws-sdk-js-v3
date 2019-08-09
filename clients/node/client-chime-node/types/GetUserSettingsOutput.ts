import { _UnmarshalledUserSettings } from "./_UserSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUserSettingsOutput shape
 */
export interface GetUserSettingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: _UnmarshalledUserSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
