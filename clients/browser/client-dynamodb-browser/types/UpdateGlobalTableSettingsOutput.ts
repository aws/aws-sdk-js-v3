import { _UnmarshalledReplicaSettingsDescription } from "./_ReplicaSettingsDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGlobalTableSettingsOutput shape
 */
export interface UpdateGlobalTableSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the global table.</p>
   */
  GlobalTableName?: string;

  /**
   * <p>The region specific settings for the global table.</p>
   */
  ReplicaSettings?: Array<_UnmarshalledReplicaSettingsDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
