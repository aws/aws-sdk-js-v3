// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCacheParameterGroupMessage } from "../models/models_0";
import { de_DeleteCacheParameterGroupCommand, se_DeleteCacheParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCacheParameterGroupCommand}.
 */
export interface DeleteCacheParameterGroupCommandInput extends DeleteCacheParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCacheParameterGroupCommand}.
 */
export interface DeleteCacheParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified cache parameter group. You cannot delete a cache parameter group
 *             if it is associated with any cache clusters. You cannot delete the default cache
 *             parameter groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteCacheParameterGroupMessage
 *   CacheParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCacheParameterGroupCommandInput - {@link DeleteCacheParameterGroupCommandInput}
 * @returns {@link DeleteCacheParameterGroupCommandOutput}
 * @see {@link DeleteCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheParameterGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 * @example DeleteCacheParameterGroup
 * ```javascript
 * // Deletes the Amazon ElastiCache parameter group custom-mem1-4.
 * const input = {
 *   "CacheParameterGroupName": "custom-mem1-4"
 * };
 * const command = new DeleteCacheParameterGroupCommand(input);
 * await client.send(command);
 * // example id: deletecacheparametergroup-1475010933957
 * ```
 *
 */
export class DeleteCacheParameterGroupCommand extends $Command
  .classBuilder<
    DeleteCacheParameterGroupCommandInput,
    DeleteCacheParameterGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DeleteCacheParameterGroup", {})
  .n("ElastiCacheClient", "DeleteCacheParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCacheParameterGroupCommand)
  .de(de_DeleteCacheParameterGroupCommand)
  .build() {}
