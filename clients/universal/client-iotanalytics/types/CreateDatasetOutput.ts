import { _UnmarshalledRetentionPeriod } from "./_RetentionPeriod";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetOutput shape
 */
export interface CreateDatasetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the data set.</p>
   */
  datasetName?: string;

  /**
   * <p>The ARN of the data set.</p>
   */
  datasetArn?: string;

  /**
   * <p>How long, in days, data set contents are kept for the data set.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
