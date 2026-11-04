// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/models_0";
import { ResetCacheParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the `ResetAllParameters` and `CacheParameterGroupName` parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ResetCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ResetCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
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
 *
 * The requested cache parameter group name does not refer to an existing cache parameter group.
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *
 * The current state of the cache parameter group does not allow the requested operation to occur.
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *
 * The Global datastore is not available or in primary-only state.
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
export class ResetCacheParameterGroupCommand extends command<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "ResetCacheParameterGroup",
  ResetCacheParameterGroup$
) {
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
