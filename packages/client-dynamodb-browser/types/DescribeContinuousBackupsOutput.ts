import { _UnmarshalledContinuousBackupsDescription } from "./_ContinuousBackupsDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeContinuousBackupsOutput shape
 */
export interface DescribeContinuousBackupsOutput {
  /**
   * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
   */
  ContinuousBackupsDescription?: _UnmarshalledContinuousBackupsDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
