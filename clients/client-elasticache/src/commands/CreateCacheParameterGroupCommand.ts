// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import { CreateCacheParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter
 *             group is a collection of parameters and their values that are applied to all of the
 *             nodes in any cluster or replication group using the CacheParameterGroup.</p>
 *          <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter
 *             group for the CacheParameterGroupFamily. To customize the newly created
 *             CacheParameterGroup you can change the values of specific parameters. For more
 *             information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ParameterGroups.html">Parameters and
 *                         Parameter Groups</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
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
 *  <p>A cache parameter group with the requested name already exists.</p>
 *
 * @throws {@link CacheParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of cache
 *             security groups.</p>
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *  <p>The current state of the cache parameter group does not allow the requested operation
 *             to occur.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
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
export class CreateCacheParameterGroupCommand extends $Command
  .classBuilder<
    CreateCacheParameterGroupCommandInput,
    CreateCacheParameterGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "CreateCacheParameterGroup", {})
  .n("ElastiCacheClient", "CreateCacheParameterGroupCommand")
  .sc(CreateCacheParameterGroup)
  .build() {
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
