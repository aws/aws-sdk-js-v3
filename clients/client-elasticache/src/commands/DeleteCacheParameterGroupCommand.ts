// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCacheParameterGroupMessage } from "../models/models_0";
import { DeleteCacheParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
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
 *
 * The requested cache parameter group name does not refer to an existing cache parameter group.
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
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example DeleteCacheParameterGroup
 * ```javascript
 * // Deletes the Amazon ElastiCache parameter group custom-mem1-4.
 * const input = {
 *   CacheParameterGroupName: "custom-mem1-4"
 * };
 * const command = new DeleteCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCacheParameterGroupCommand extends command<DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCacheParameterGroup",
  DeleteCacheParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheParameterGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteCacheParameterGroupCommandInput;
      output: DeleteCacheParameterGroupCommandOutput;
    };
  };
}
