import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the allowed node types you can use to modify your cluster or replication group.</p>
 */
export interface ListAllowedNodeTypeModificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group.</p> <p>When scaling up a Redis cluster or replication group using <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code>, use a value from this list for the <code>CacheNodeType</code> parameter.</p>
   */
  ScaleUpModifications?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
