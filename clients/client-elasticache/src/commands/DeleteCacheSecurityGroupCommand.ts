// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCacheSecurityGroupMessage } from "../models/models_0";
import { de_DeleteCacheSecurityGroupCommand, se_DeleteCacheSecurityGroupCommand } from "../protocols/Aws_query";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example DeleteCacheSecurityGroup
 * ```javascript
 * // Deletes a cache security group.
 * const input = {
 *   "CacheSecurityGroupName": "my-sec-group"
 * };
 * const command = new DeleteCacheSecurityGroupCommand(input);
 * await client.send(command);
 * // example id: deletecachesecuritygroup-1483046967507
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DeleteCacheSecurityGroup", {})
  .n("ElastiCacheClient", "DeleteCacheSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCacheSecurityGroupCommand)
  .de(de_DeleteCacheSecurityGroupCommand)
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
