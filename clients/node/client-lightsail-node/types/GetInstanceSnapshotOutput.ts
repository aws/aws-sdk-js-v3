import { _UnmarshalledInstanceSnapshot } from "./_InstanceSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceSnapshotOutput shape
 */
export interface GetInstanceSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance snapshot request.</p>
   */
  instanceSnapshot?: _UnmarshalledInstanceSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
