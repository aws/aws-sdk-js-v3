import { _UnmarshalledDataCatalogEncryptionSettings } from "./_DataCatalogEncryptionSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDataCatalogEncryptionSettingsOutput shape
 */
export interface GetDataCatalogEncryptionSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: _UnmarshalledDataCatalogEncryptionSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
