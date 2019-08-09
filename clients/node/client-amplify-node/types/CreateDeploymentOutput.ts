import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for create a new deployment. </p>
 */
export interface CreateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The jobId for this deployment, will supply to start deployment api. </p>
   */
  jobId?: string;

  /**
   * <p> When the fileMap argument is provided in the request, the fileUploadUrls will contain a map of file names to upload url. </p>
   */
  fileUploadUrls: { [key: string]: string };

  /**
   * <p> When the fileMap argument is NOT provided. This zipUploadUrl will be returned. </p>
   */
  zipUploadUrl: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
