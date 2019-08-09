import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOTAUpdateOutput shape
 */
export interface CreateOTAUpdateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The OTA update status.</p>
   */
  otaUpdateStatus?:
    | "CREATE_PENDING"
    | "CREATE_IN_PROGRESS"
    | "CREATE_COMPLETE"
    | "CREATE_FAILED"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
