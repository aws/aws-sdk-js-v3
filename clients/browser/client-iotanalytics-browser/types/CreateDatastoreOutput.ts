import { _UnmarshalledRetentionPeriod } from "./_RetentionPeriod";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatastoreOutput shape
 */
export interface CreateDatastoreOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the data store.</p>
   */
  datastoreName?: string;

  /**
   * <p>The ARN of the data store.</p>
   */
  datastoreArn?: string;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
