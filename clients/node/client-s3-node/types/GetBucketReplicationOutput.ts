import { _UnmarshalledReplicationConfiguration } from "./_ReplicationConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketReplicationOutput shape
 */
export interface GetBucketReplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  ReplicationConfiguration?: _UnmarshalledReplicationConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
