import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSoftwareUpdateJobOutput shape
 */
export interface CreateSoftwareUpdateJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The IoT Job ARN corresponding to this update.
   */
  IotJobArn?: string;

  /**
   * The IoT Job Id corresponding to this update.
   */
  IotJobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
