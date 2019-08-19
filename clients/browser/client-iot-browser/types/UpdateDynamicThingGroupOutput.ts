import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDynamicThingGroupOutput shape
 */
export interface UpdateDynamicThingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
