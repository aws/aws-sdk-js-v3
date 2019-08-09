import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopContinuousExportOutput shape
 */
export interface StopContinuousExportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Timestamp that represents when this continuous export started collecting data.</p>
   */
  startTime?: Date;

  /**
   * <p>Timestamp that represents when this continuous export was stopped.</p>
   */
  stopTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
