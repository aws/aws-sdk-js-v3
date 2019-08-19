import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ModifyReservedInstances.</p>
 */
export interface ModifyReservedInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID for the modification.</p>
   */
  ReservedInstancesModificationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
