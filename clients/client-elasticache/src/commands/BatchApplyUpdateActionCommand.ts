// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchApplyUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { de_BatchApplyUpdateActionCommand, se_BatchApplyUpdateActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchApplyUpdateActionCommand}.
 */
export interface BatchApplyUpdateActionCommandInput extends BatchApplyUpdateActionMessage {}
/**
 * @public
 *
 * The output of {@link BatchApplyUpdateActionCommand}.
 */
export interface BatchApplyUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * <p>Apply the service update. For more information on service updates and applying them,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/applying-updates.html">Applying Service
 *                 Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchApplyUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchApplyUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // BatchApplyUpdateActionMessage
 *   ReplicationGroupIds: [ // ReplicationGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [ // CacheClusterIdList
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdateName: "STRING_VALUE", // required
 * };
 * const command = new BatchApplyUpdateActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionResultsMessage
 * //   ProcessedUpdateActions: [ // ProcessedUpdateActionList
 * //     { // ProcessedUpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       UpdateActionStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 * //     },
 * //   ],
 * //   UnprocessedUpdateActions: [ // UnprocessedUpdateActionList
 * //     { // UnprocessedUpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchApplyUpdateActionCommandInput - {@link BatchApplyUpdateActionCommandInput}
 * @returns {@link BatchApplyUpdateActionCommandOutput}
 * @see {@link BatchApplyUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchApplyUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p>The service update doesn't exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class BatchApplyUpdateActionCommand extends $Command
  .classBuilder<
    BatchApplyUpdateActionCommandInput,
    BatchApplyUpdateActionCommandOutput,
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
  .s("AmazonElastiCacheV9", "BatchApplyUpdateAction", {})
  .n("ElastiCacheClient", "BatchApplyUpdateActionCommand")
  .f(void 0, void 0)
  .ser(se_BatchApplyUpdateActionCommand)
  .de(de_BatchApplyUpdateActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchApplyUpdateActionMessage;
      output: UpdateActionResultsMessage;
    };
    sdk: {
      input: BatchApplyUpdateActionCommandInput;
      output: BatchApplyUpdateActionCommandOutput;
    };
  };
}
