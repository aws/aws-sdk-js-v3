// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveTagsFromResourceMessage, TagListMessage } from "../models/models_0";
import { RemoveTagsFromResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveTagsFromResourceCommand}.
 */
export interface RemoveTagsFromResourceCommandInput extends RemoveTagsFromResourceMessage {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromResourceCommand}.
 */
export interface RemoveTagsFromResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * Removes the tags identified by the `TagKeys` list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see [Resource-level permissions](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/IAM.ResourceLevelPermissions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RemoveTagsFromResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RemoveTagsFromResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // RemoveTagsFromResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 *   TagKeys: [ // KeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * // { // TagListMessage
 * //   TagList: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RemoveTagsFromResourceCommandInput - {@link RemoveTagsFromResourceCommandInput}
 * @returns {@link RemoveTagsFromResourceCommandOutput}
 * @see {@link RemoveTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *
 * The requested cluster ID does not refer to an existing cluster.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *
 * The requested cache parameter group name does not refer to an existing cache parameter group.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *
 * The requested cache security group name does not refer to an existing cache security group.
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *
 * The requested cache subnet group name does not refer to an existing cache subnet group.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *
 * The Global datastore does not exist
 *
 * @throws {@link InvalidARNFault} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *
 * The requested replication group is not in the `available` state.
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *
 * The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *
 * The account for these credentials is not currently active.
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *
 * The specified replication group does not exist.
 *
 * @throws {@link ReservedCacheNodeNotFoundFault} (client fault)
 *
 * The requested reserved cache node was not found.
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *
 * The serverless cache was not found or does not exist.
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *
 * This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *
 * The requested snapshot name does not refer to an existing snapshot.
 *
 * @throws {@link TagNotFoundFault} (client fault)
 *
 * The requested tag was not found on this resource.
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *
 * The user group was not found or does not exist
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *
 * The user does not exist or could not be found.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example RemoveTagsFromResource
 * ```javascript
 * // Removes tags identified by a list of tag keys from the list of tags on the specified resource.
 * const input = {
 *   ResourceName: "arn:aws:elasticache:us-east-1:1234567890:cluster:my-mem-cluster",
 *   TagKeys: [
 *     "A",
 *     "C",
 *     "E"
 *   ]
 * };
 * const command = new RemoveTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagList: [
 *     {
 *       Key: "B",
 *       Value: "Banana"
 *     },
 *     {
 *       Key: "D",
 *       Value: "Dog"
 *     },
 *     {
 *       Key: "F",
 *       Value: "Fox"
 *     },
 *     {
 *       Key: "I",
 *       Value: ""
 *     },
 *     {
 *       Key: "K",
 *       Value: "Kite"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveTagsFromResourceCommand extends command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>(
  _ep0,
  _mw0,
  "RemoveTagsFromResource",
  RemoveTagsFromResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTagsFromResourceMessage;
      output: TagListMessage;
    };
    sdk: {
      input: RemoveTagsFromResourceCommandInput;
      output: RemoveTagsFromResourceCommandOutput;
    };
  };
}
