import { _UnmarshalledScheduledInstance } from "./_ScheduledInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of PurchaseScheduledInstances.</p>
 */
export interface PurchaseScheduledInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Scheduled Instances.</p>
   */
  ScheduledInstanceSet?: Array<_UnmarshalledScheduledInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
