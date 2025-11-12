// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCacheSubnetGroupMessage } from "../models/models_0";
import { DeleteCacheSubnetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCacheSubnetGroupCommand}.
 */
export interface DeleteCacheSubnetGroupCommandInput extends DeleteCacheSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCacheSubnetGroupCommand}.
 */
export interface DeleteCacheSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a cache subnet group.</p>
 *          <note>
 *             <p>You cannot delete a default cache subnet group or one that is associated with any
 *                 clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteCacheSubnetGroupMessage
 *   CacheSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCacheSubnetGroupCommandInput - {@link DeleteCacheSubnetGroupCommandInput}
 * @returns {@link DeleteCacheSubnetGroupCommandOutput}
 * @see {@link DeleteCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSubnetGroupInUse} (client fault)
 *  <p>The requested cache subnet group is currently in use.</p>
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DeleteCacheSubnetGroup
 * ```javascript
 * // Deletes the Amazon ElastiCache subnet group my-subnet-group.
 * const input = {
 *   CacheSubnetGroupName: "my-subnet-group"
 * };
 * const command = new DeleteCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCacheSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteCacheSubnetGroupCommandInput,
    DeleteCacheSubnetGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DeleteCacheSubnetGroup", {})
  .n("ElastiCacheClient", "DeleteCacheSubnetGroupCommand")
  .sc(DeleteCacheSubnetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheSubnetGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteCacheSubnetGroupCommandInput;
      output: DeleteCacheSubnetGroupCommandOutput;
    };
  };
}
