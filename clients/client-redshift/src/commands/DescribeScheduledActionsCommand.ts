// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScheduledActionsMessage, ScheduledActionsMessage } from "../models/models_1";
import { de_DescribeScheduledActionsCommand, se_DescribeScheduledActionsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandOutput extends ScheduledActionsMessage, __MetadataBearer {}

/**
 * <p>Describes properties of scheduled actions.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // DescribeScheduledActionsMessage
 *   ScheduledActionName: "STRING_VALUE",
 *   TargetActionType: "ResizeCluster" || "PauseCluster" || "ResumeCluster",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Active: true || false,
 *   Filters: [ // ScheduledActionFilterList
 *     { // ScheduledActionFilter
 *       Name: "cluster-identifier" || "iam-role", // required
 *       Values: [ // ValueStringList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ScheduledActionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ScheduledActions: [ // ScheduledActionList
 * //     { // ScheduledAction
 * //       ScheduledActionName: "STRING_VALUE",
 * //       TargetAction: { // ScheduledActionType
 * //         ResizeCluster: { // ResizeClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //           ClusterType: "STRING_VALUE",
 * //           NodeType: "STRING_VALUE",
 * //           NumberOfNodes: Number("int"),
 * //           Classic: true || false,
 * //           ReservedNodeId: "STRING_VALUE",
 * //           TargetReservedNodeOfferingId: "STRING_VALUE",
 * //         },
 * //         PauseCluster: { // PauseClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //         },
 * //         ResumeCluster: { // ResumeClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Schedule: "STRING_VALUE",
 * //       IamRole: "STRING_VALUE",
 * //       ScheduledActionDescription: "STRING_VALUE",
 * //       State: "ACTIVE" || "DISABLED",
 * //       NextInvocations: [ // ScheduledActionTimeList
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScheduledActionsCommandInput - {@link DescribeScheduledActionsCommandInput}
 * @returns {@link DescribeScheduledActionsCommandOutput}
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ScheduledActionNotFoundFault} (client fault)
 *  <p>The scheduled action cannot be found. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeScheduledActionsCommand extends $Command
  .classBuilder<
    DescribeScheduledActionsCommandInput,
    DescribeScheduledActionsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeScheduledActions", {})
  .n("RedshiftClient", "DescribeScheduledActionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScheduledActionsCommand)
  .de(de_DescribeScheduledActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduledActionsMessage;
      output: ScheduledActionsMessage;
    };
    sdk: {
      input: DescribeScheduledActionsCommandInput;
      output: DescribeScheduledActionsCommandOutput;
    };
  };
}
