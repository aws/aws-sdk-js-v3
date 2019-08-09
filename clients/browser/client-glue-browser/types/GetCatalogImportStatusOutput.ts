import { _UnmarshalledCatalogImportStatus } from "./_CatalogImportStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCatalogImportStatusOutput shape
 */
export interface GetCatalogImportStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: _UnmarshalledCatalogImportStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
