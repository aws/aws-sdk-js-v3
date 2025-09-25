// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheParameterGroupNameMessage, ModifyCacheParameterGroupMessage } from "../models/models_0";
import { ModifyCacheParameterGroup } from "../schemas/schemas_7_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCacheParameterGroupCommand}.
 */
export interface ModifyCacheParameterGroupCommandInput extends ModifyCacheParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCacheParameterGroupCommand}.
 */
export interface ModifyCacheParameterGroupCommandOutput extends CacheParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a cache parameter group. You can modify up to 20 parameters
 *             in a single request by submitting a list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyCacheParameterGroupMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   ParameterNameValues: [ // ParameterNameValueList // required
 *     { // ParameterNameValue
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupNameMessage
 * //   CacheParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyCacheParameterGroupCommandInput - {@link ModifyCacheParameterGroupCommandInput}
 * @returns {@link ModifyCacheParameterGroupCommandOutput}
 * @see {@link ModifyCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *  <p>The current state of the cache parameter group does not allow the requested operation
 *             to occur.</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example ModifyCacheParameterGroup
 * ```javascript
 * // Modifies one or more parameter values in the specified parameter group. You cannot modify any default parameter group.
 * const input = {
 *   CacheParameterGroupName: "custom-mem1-4",
 *   ParameterNameValues: [
 *     {
 *       ParameterName: "binding_protocol",
 *       ParameterValue: "ascii"
 *     },
 *     {
 *       ParameterName: "chunk_size",
 *       ParameterValue: "96"
 *     }
 *   ]
 * };
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheParameterGroupName: "custom-mem1-4"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyCacheParameterGroupCommand extends $Command
  .classBuilder<
    ModifyCacheParameterGroupCommandInput,
    ModifyCacheParameterGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "ModifyCacheParameterGroup", {})
  .n("ElastiCacheClient", "ModifyCacheParameterGroupCommand")
  .sc(ModifyCacheParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCacheParameterGroupMessage;
      output: CacheParameterGroupNameMessage;
    };
    sdk: {
      input: ModifyCacheParameterGroupCommandInput;
      output: ModifyCacheParameterGroupCommandOutput;
    };
  };
}
