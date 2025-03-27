// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/models_0";
import { de_ResetCacheParameterGroupCommand, se_ResetCacheParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetCacheParameterGroupCommand}.
 */
export interface ResetCacheParameterGroupCommandInput extends ResetCacheParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetCacheParameterGroupCommand}.
 */
export interface ResetCacheParameterGroupCommandOutput extends CacheParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a cache parameter group to the engine or system default
 *             value. You can reset specific parameters by submitting a list of parameter names. To
 *             reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and
 *                 <code>CacheParameterGroupName</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ResetCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ResetCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ResetCacheParameterGroupMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   ParameterNameValues: [ // ParameterNameValueList
 *     { // ParameterNameValue
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ResetCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupNameMessage
 * //   CacheParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetCacheParameterGroupCommandInput - {@link ResetCacheParameterGroupCommandInput}
 * @returns {@link ResetCacheParameterGroupCommandOutput}
 * @see {@link ResetCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetCacheParameterGroupCommandOutput} for command's `response` shape.
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
 * @example ResetCacheParameterGroup
 * ```javascript
 * // Modifies the parameters of a cache parameter group to the engine or system default value.
 * const input = {
 *   CacheParameterGroupName: "custom-mem1-4",
 *   ResetAllParameters: true
 * };
 * const command = new ResetCacheParameterGroupCommand(input);
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
export class ResetCacheParameterGroupCommand extends $Command
  .classBuilder<
    ResetCacheParameterGroupCommandInput,
    ResetCacheParameterGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "ResetCacheParameterGroup", {})
  .n("ElastiCacheClient", "ResetCacheParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ResetCacheParameterGroupCommand)
  .de(de_ResetCacheParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetCacheParameterGroupMessage;
      output: CacheParameterGroupNameMessage;
    };
    sdk: {
      input: ResetCacheParameterGroupCommandInput;
      output: ResetCacheParameterGroupCommandOutput;
    };
  };
}
