import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure used for requests to export project configuration details. </p>
 */
export interface ExportProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> URL which can be used to download the exported project configuation file(s). </p>
   */
  downloadUrl?: string;

  /**
   * <p> URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. </p>
   */
  shareUrl?: string;

  /**
   * <p> Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. </p>
   */
  snapshotId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
