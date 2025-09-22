// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCacheSecurityGroupMessage } from "../models/models_0";
import { DeleteCacheSecurityGroup } from "../schemas/schemas_1_Cache";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCacheSecurityGroupCommand}.
 */
export interface DeleteCacheSecurityGroupCommandInput extends DeleteCacheSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCacheSecurityGroupCommand}.
 */
export interface DeleteCacheSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a cache security group.</p>
 *          <note>
 *             <p>You cannot delete a cache security group if it is associated with any
 *                 clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteCacheSecurityGroupMessage
 *   CacheSecurityGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCacheSecurityGroupCommandInput - {@link DeleteCacheSecurityGroupCommandInput}
 * @returns {@link DeleteCacheSecurityGroupCommandOutput}
 * @see {@link DeleteCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
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
 * @example DeleteCacheSecurityGroup
 * ```javascript
 * // Deletes a cache security group.
 * const input = {
 *   CacheSecurityGroupName: "my-sec-group"
 * };
 * const command = new DeleteCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCacheSecurityGroupCommand extends $Command
  .classBuilder<
    DeleteCacheSecurityGroupCommandInput,
    DeleteCacheSecurityGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DeleteCacheSecurityGroup", {})
  .n("ElastiCacheClient", "DeleteCacheSecurityGroupCommand")
  .sc(DeleteCacheSecurityGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheSecurityGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteCacheSecurityGroupCommandInput;
      output: DeleteCacheSecurityGroupCommandOutput;
    };
  };
}
