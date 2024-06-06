// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateScheduledActionMessage, ScheduledAction } from "../models/models_0";
import { de_CreateScheduledActionCommand, se_CreateScheduledActionCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandInput extends CreateScheduledActionMessage {}
/**
 * @public
 *
 * The output of {@link CreateScheduledActionCommand}.
 */
export interface CreateScheduledActionCommandOutput extends ScheduledAction, __MetadataBearer {}

/**
 * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 *             For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateScheduledActionMessage
 *   ScheduledActionName: "STRING_VALUE", // required
 *   TargetAction: { // ScheduledActionType
 *     ResizeCluster: { // ResizeClusterMessage
 *       ClusterIdentifier: "STRING_VALUE", // required
 *       ClusterType: "STRING_VALUE",
 *       NodeType: "STRING_VALUE",
 *       NumberOfNodes: Number("int"),
 *       Classic: true || false,
 *       ReservedNodeId: "STRING_VALUE",
 *       TargetReservedNodeOfferingId: "STRING_VALUE",
 *     },
 *     PauseCluster: { // PauseClusterMessage
 *       ClusterIdentifier: "STRING_VALUE", // required
 *     },
 *     ResumeCluster: { // ResumeClusterMessage
 *       ClusterIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   Schedule: "STRING_VALUE", // required
 *   IamRole: "STRING_VALUE", // required
 *   ScheduledActionDescription: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Enable: true || false,
 * };
 * const command = new CreateScheduledActionCommand(input);
 * const response = await client.send(command);
 * // { // ScheduledAction
 * //   ScheduledActionName: "STRING_VALUE",
 * //   TargetAction: { // ScheduledActionType
 * //     ResizeCluster: { // ResizeClusterMessage
 * //       ClusterIdentifier: "STRING_VALUE", // required
 * //       ClusterType: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       NumberOfNodes: Number("int"),
 * //       Classic: true || false,
 * //       ReservedNodeId: "STRING_VALUE",
 * //       TargetReservedNodeOfferingId: "STRING_VALUE",
 * //     },
 * //     PauseCluster: { // PauseClusterMessage
 * //       ClusterIdentifier: "STRING_VALUE", // required
 * //     },
 * //     ResumeCluster: { // ResumeClusterMessage
 * //       ClusterIdentifier: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Schedule: "STRING_VALUE",
 * //   IamRole: "STRING_VALUE",
 * //   ScheduledActionDescription: "STRING_VALUE",
 * //   State: "ACTIVE" || "DISABLED",
 * //   NextInvocations: [ // ScheduledActionTimeList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateScheduledActionCommandInput - {@link CreateScheduledActionCommandInput}
 * @returns {@link CreateScheduledActionCommandOutput}
 * @see {@link CreateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidScheduledActionFault} (client fault)
 *  <p>The scheduled action is not valid. </p>
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link ScheduledActionAlreadyExistsFault} (client fault)
 *  <p>The scheduled action already exists. </p>
 *
 * @throws {@link ScheduledActionQuotaExceededFault} (client fault)
 *  <p>The quota for scheduled actions exceeded. </p>
 *
 * @throws {@link ScheduledActionTypeUnsupportedFault} (client fault)
 *  <p>The action type specified for a scheduled action is not supported. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class CreateScheduledActionCommand extends $Command
  .classBuilder<
    CreateScheduledActionCommandInput,
    CreateScheduledActionCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "CreateScheduledAction", {})
  .n("RedshiftClient", "CreateScheduledActionCommand")
  .f(void 0, void 0)
  .ser(se_CreateScheduledActionCommand)
  .de(de_CreateScheduledActionCommand)
  .build() {}
