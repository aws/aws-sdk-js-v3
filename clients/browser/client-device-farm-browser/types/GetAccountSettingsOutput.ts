import { _UnmarshalledAccountSettings } from "./_AccountSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the account settings return values from the <code>GetAccountSettings</code> request.</p>
 */
export interface GetAccountSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The account settings.</p>
   */
  accountSettings?: _UnmarshalledAccountSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
