// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCacheSecurityGroupMessage } from "../models/models_0";
import { DeleteCacheSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a cache security group.
 *
 * > **Note:** You cannot delete a cache security group if it is associated with any clusters.
 *
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
 *
 * The requested cache security group name does not refer to an existing cache security group.
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *
 * The current state of the cache security group does not allow deletion.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
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
export class DeleteCacheSecurityGroupCommand extends command<DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCacheSecurityGroup",
  DeleteCacheSecurityGroup$
) {
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
