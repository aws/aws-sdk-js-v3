import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetContentOutput shape
 */
export interface CreateDatasetContentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The version ID of the data set contents which are being created.</p>
   */
  versionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
