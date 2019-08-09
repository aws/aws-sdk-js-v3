import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartThingRegistrationTaskOutput shape
 */
export interface StartThingRegistrationTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
