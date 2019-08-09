import { _UnmarshalledServerGroupReplicationConfiguration } from "./_ServerGroupReplicationConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAppReplicationConfigurationOutput shape
 */
export interface GetAppReplicationConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Replication configurations associated with server groups in this application.</p>
   */
  serverGroupReplicationConfigurations?: Array<
    _UnmarshalledServerGroupReplicationConfiguration
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
