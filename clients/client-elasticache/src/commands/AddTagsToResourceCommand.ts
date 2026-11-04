// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsToResourceMessage, TagListMessage } from "../models/models_0";
import { AddTagsToResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceMessage {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends TagListMessage, __MetadataBearer {}

/**
 * A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see [Resource-level permissions](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/IAM.ResourceLevelPermissions.html).
 *
 * For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.
 *
 * For more information, see [Using Cost Allocation Tags in Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Tagging.html) in the *ElastiCache User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, AddTagsToResourceCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, AddTagsToResourceCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // AddTagsToResourceMessage
 *   ResourceName: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
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
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
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
 * @example AddTagsToResource
 * ```javascript
 * // Adds up to 10 tags, key/value pairs, to a cluster or snapshot resource.
 * const input = {
 *   ResourceName: "arn:aws:elasticache:us-east-1:1234567890:cluster:my-mem-cluster",
 *   Tags: [
 *     {
 *       Key: "APIVersion",
 *       Value: "20150202"
 *     },
 *     {
 *       Key: "Service",
 *       Value: "ElastiCache"
 *     }
 *   ]
 * };
 * const command = new AddTagsToResourceCommand(input);
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
export class AddTagsToResourceCommand extends command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>(
  _ep0,
  _mw0,
  "AddTagsToResource",
  AddTagsToResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToResourceMessage;
      output: TagListMessage;
    };
    sdk: {
      input: AddTagsToResourceCommandInput;
      output: AddTagsToResourceCommandOutput;
    };
  };
}
