import { _UnmarshalledAccountSettings } from "./_AccountSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAccountSettingsOutput shape
 */
export interface GetAccountSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: _UnmarshalledAccountSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
