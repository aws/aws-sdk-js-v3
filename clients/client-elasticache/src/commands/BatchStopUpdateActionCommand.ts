// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { de_BatchStopUpdateActionCommand, se_BatchStopUpdateActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandInput extends BatchStopUpdateActionMessage {}
/**
 * @public
 *
 * The output of {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * <p>Stop the service update. For more information on service updates and stopping them,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/stopping-self-service-updates.html">Stopping
 *                 Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchStopUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchStopUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // BatchStopUpdateActionMessage
 *   ReplicationGroupIds: [ // ReplicationGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [ // CacheClusterIdList
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdateName: "STRING_VALUE", // required
 * };
 * const command = new BatchStopUpdateActionCommand(input);
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
 * @param BatchStopUpdateActionCommandInput - {@link BatchStopUpdateActionCommandInput}
 * @returns {@link BatchStopUpdateActionCommandOutput}
 * @see {@link BatchStopUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchStopUpdateActionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchStopUpdateActionCommand extends $Command
  .classBuilder<
    BatchStopUpdateActionCommandInput,
    BatchStopUpdateActionCommandOutput,
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
  .s("AmazonElastiCacheV9", "BatchStopUpdateAction", {})
  .n("ElastiCacheClient", "BatchStopUpdateActionCommand")
  .f(void 0, void 0)
  .ser(se_BatchStopUpdateActionCommand)
  .de(de_BatchStopUpdateActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStopUpdateActionMessage;
      output: UpdateActionResultsMessage;
    };
    sdk: {
      input: BatchStopUpdateActionCommandInput;
      output: BatchStopUpdateActionCommandOutput;
    };
  };
}
