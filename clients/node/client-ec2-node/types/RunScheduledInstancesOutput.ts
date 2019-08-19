import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of RunScheduledInstances.</p>
 */
export interface RunScheduledInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the newly launched instances.</p>
   */
  InstanceIdSet?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
