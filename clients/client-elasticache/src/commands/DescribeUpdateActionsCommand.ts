// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUpdateActionsMessage, UpdateActionsMessage } from "../models/models_0";
import { de_DescribeUpdateActionsCommand, se_DescribeUpdateActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUpdateActionsCommand}.
 */
export interface DescribeUpdateActionsCommandInput extends DescribeUpdateActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUpdateActionsCommand}.
 */
export interface DescribeUpdateActionsCommandOutput extends UpdateActionsMessage, __MetadataBearer {}

/**
 * <p>Returns details of the update actions </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUpdateActionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUpdateActionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeUpdateActionsMessage
 *   ServiceUpdateName: "STRING_VALUE",
 *   ReplicationGroupIds: [ // ReplicationGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [ // CacheClusterIdList
 *     "STRING_VALUE",
 *   ],
 *   Engine: "STRING_VALUE",
 *   ServiceUpdateStatus: [ // ServiceUpdateStatusList
 *     "available" || "cancelled" || "expired",
 *   ],
 *   ServiceUpdateTimeRange: { // TimeRangeFilter
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 *   UpdateActionStatus: [ // UpdateActionStatusList
 *     "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 *   ],
 *   ShowNodeLevelUpdateStatus: true || false,
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeUpdateActionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionsMessage
 * //   Marker: "STRING_VALUE",
 * //   UpdateActions: [ // UpdateActionList
 * //     { // UpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ServiceUpdateReleaseDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateSeverity: "critical" || "important" || "medium" || "low",
 * //       ServiceUpdateStatus: "available" || "cancelled" || "expired",
 * //       ServiceUpdateRecommendedApplyByDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateType: "security-update",
 * //       UpdateActionAvailableDate: new Date("TIMESTAMP"),
 * //       UpdateActionStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 * //       NodesUpdated: "STRING_VALUE",
 * //       UpdateActionStatusModifiedDate: new Date("TIMESTAMP"),
 * //       SlaMet: "yes" || "no" || "n/a",
 * //       NodeGroupUpdateStatus: [ // NodeGroupUpdateStatusList
 * //         { // NodeGroupUpdateStatus
 * //           NodeGroupId: "STRING_VALUE",
 * //           NodeGroupMemberUpdateStatus: [ // NodeGroupMemberUpdateStatusList
 * //             { // NodeGroupMemberUpdateStatus
 * //               CacheClusterId: "STRING_VALUE",
 * //               CacheNodeId: "STRING_VALUE",
 * //               NodeUpdateStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete",
 * //               NodeDeletionDate: new Date("TIMESTAMP"),
 * //               NodeUpdateStartDate: new Date("TIMESTAMP"),
 * //               NodeUpdateEndDate: new Date("TIMESTAMP"),
 * //               NodeUpdateInitiatedBy: "system" || "customer",
 * //               NodeUpdateInitiatedDate: new Date("TIMESTAMP"),
 * //               NodeUpdateStatusModifiedDate: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       CacheNodeUpdateStatus: [ // CacheNodeUpdateStatusList
 * //         { // CacheNodeUpdateStatus
 * //           CacheNodeId: "STRING_VALUE",
 * //           NodeUpdateStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete",
 * //           NodeDeletionDate: new Date("TIMESTAMP"),
 * //           NodeUpdateStartDate: new Date("TIMESTAMP"),
 * //           NodeUpdateEndDate: new Date("TIMESTAMP"),
 * //           NodeUpdateInitiatedBy: "system" || "customer",
 * //           NodeUpdateInitiatedDate: new Date("TIMESTAMP"),
 * //           NodeUpdateStatusModifiedDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       EstimatedUpdateTime: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeUpdateActionsCommandInput - {@link DescribeUpdateActionsCommandInput}
 * @returns {@link DescribeUpdateActionsCommandOutput}
 * @see {@link DescribeUpdateActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateActionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * @public
 */
export class DescribeUpdateActionsCommand extends $Command
  .classBuilder<
    DescribeUpdateActionsCommandInput,
    DescribeUpdateActionsCommandOutput,
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
  .s("AmazonElastiCacheV9", "DescribeUpdateActions", {})
  .n("ElastiCacheClient", "DescribeUpdateActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUpdateActionsCommand)
  .de(de_DescribeUpdateActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUpdateActionsMessage;
      output: UpdateActionsMessage;
    };
    sdk: {
      input: DescribeUpdateActionsCommandInput;
      output: DescribeUpdateActionsCommandOutput;
    };
  };
}
