// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForResourceMessage, TagListMessage } from "../models/models_0";
import { ListTagsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceMessage {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * Lists all tags currently on a named resource.
 *
 * A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see [Resource-level permissions](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/IAM.ResourceLevelPermissions.html).
 *
 * If the cluster is not in the *available* state, `ListTagsForResource` returns an error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListTagsForResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListTagsForResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ListTagsForResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
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
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
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
 * @example ListTagsForResource
 * ```javascript
 * // Lists all cost allocation tags currently on the named resource. A cost allocation tag is a key-value pair where the key is case-sensitive and the value is optional. You can use cost allocation tags to categorize and track your AWS costs.
 * const input = {
 *   ResourceName: "arn:aws:elasticache:us-west-2:<my-account-id>:cluster:mycluster"
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagList: [
 *     {
 *       Key: "APIVersion",
 *       Value: "20150202"
 *     },
 *     {
 *       Key: "Service",
 *       Value: "ElastiCache"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTagsForResourceCommand extends command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForResource",
  ListTagsForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceMessage;
      output: TagListMessage;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
