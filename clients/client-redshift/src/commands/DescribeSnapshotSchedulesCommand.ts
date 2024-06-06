// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/models_1";
import { de_DescribeSnapshotSchedulesCommand, se_DescribeSnapshotSchedulesCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotSchedulesCommand}.
 */
export interface DescribeSnapshotSchedulesCommandInput extends DescribeSnapshotSchedulesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotSchedulesCommand}.
 */
export interface DescribeSnapshotSchedulesCommandOutput
  extends DescribeSnapshotSchedulesOutputMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of snapshot schedules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotSchedulesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotSchedulesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeSnapshotSchedulesMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   ScheduleIdentifier: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeSnapshotSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotSchedulesOutputMessage
 * //   SnapshotSchedules: [ // SnapshotScheduleList
 * //     { // SnapshotSchedule
 * //       ScheduleDefinitions: [ // ScheduleDefinitionList
 * //         "STRING_VALUE",
 * //       ],
 * //       ScheduleIdentifier: "STRING_VALUE",
 * //       ScheduleDescription: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NextInvocations: [ // ScheduledSnapshotTimeList
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       AssociatedClusterCount: Number("int"),
 * //       AssociatedClusters: [ // AssociatedClusterList
 * //         { // ClusterAssociatedToSchedule
 * //           ClusterIdentifier: "STRING_VALUE",
 * //           ScheduleAssociationState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotSchedulesCommandInput - {@link DescribeSnapshotSchedulesCommandInput}
 * @returns {@link DescribeSnapshotSchedulesCommandOutput}
 * @see {@link DescribeSnapshotSchedulesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotSchedulesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeSnapshotSchedulesCommand extends $Command
  .classBuilder<
    DescribeSnapshotSchedulesCommandInput,
    DescribeSnapshotSchedulesCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeSnapshotSchedules", {})
  .n("RedshiftClient", "DescribeSnapshotSchedulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSnapshotSchedulesCommand)
  .de(de_DescribeSnapshotSchedulesCommand)
  .build() {}
