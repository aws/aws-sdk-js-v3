// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import { CreateCacheParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCacheParameterGroupCommand}.
 */
export interface CreateCacheParameterGroupCommandInput extends CreateCacheParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheParameterGroupCommand}.
 */
export interface CreateCacheParameterGroupCommandOutput extends CreateCacheParameterGroupResult, __MetadataBearer {}

/**
 * Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.
 *
 * A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:
 *
 * - [ModifyCacheParameterGroup](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html) in the ElastiCache API Reference.
 * - [Parameters and Parameter Groups](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ParameterGroups.html) in the ElastiCache User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheParameterGroupMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   CacheParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheParameterGroupResult
 * //   CacheParameterGroup: { // CacheParameterGroup
 * //     CacheParameterGroupName: "STRING_VALUE",
 * //     CacheParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     IsGlobal: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCacheParameterGroupCommandInput - {@link CreateCacheParameterGroupCommandInput}
 * @returns {@link CreateCacheParameterGroupCommandOutput}
 * @see {@link CreateCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupAlreadyExistsFault} (client fault)
 *
 * A cache parameter group with the requested name already exists.
 *
 * @throws {@link CacheParameterGroupQuotaExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of cache security groups.
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *
 * The current state of the cache parameter group does not allow the requested operation to occur.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example CreateCacheParameterGroup
 * ```javascript
 * // Creates the Amazon ElastiCache parameter group custom-redis2-8.
 * const input = {
 *   CacheParameterGroupFamily: "redis2.8",
 *   CacheParameterGroupName: "custom-redis2-8",
 *   Description: "Custom Redis 2.8 parameter group."
 * };
 * const command = new CreateCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheParameterGroup: {
 *     CacheParameterGroupFamily: "redis2.8",
 *     CacheParameterGroupName: "custom-redis2-8",
 *     Description: "Custom Redis 2.8 parameter group."
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCacheParameterGroupCommand extends command<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateCacheParameterGroup",
  CreateCacheParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCacheParameterGroupMessage;
      output: CreateCacheParameterGroupResult;
    };
    sdk: {
      input: CreateCacheParameterGroupCommandInput;
      output: CreateCacheParameterGroupCommandOutput;
    };
  };
}
