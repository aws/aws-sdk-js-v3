import { _UnmarshalledSnapshotLimits } from "./_SnapshotLimits";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified directory.</p>
   */
  SnapshotLimits?: _UnmarshalledSnapshotLimits;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
