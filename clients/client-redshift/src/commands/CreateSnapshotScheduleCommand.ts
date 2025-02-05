// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/models_0";
import { de_CreateSnapshotScheduleCommand, se_CreateSnapshotScheduleCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotScheduleCommand}.
 */
export interface CreateSnapshotScheduleCommandInput extends CreateSnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotScheduleCommand}.
 */
export interface CreateSnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {}

/**
 * <p>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // CreateSnapshotScheduleMessage
 *   ScheduleDefinitions: [ // ScheduleDefinitionList
 *     "STRING_VALUE",
 *   ],
 *   ScheduleIdentifier: "STRING_VALUE",
 *   ScheduleDescription: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextInvocations: Number("int"),
 * };
 * const command = new CreateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // SnapshotSchedule
 * //   ScheduleDefinitions: [ // ScheduleDefinitionList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScheduleIdentifier: "STRING_VALUE",
 * //   ScheduleDescription: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextInvocations: [ // ScheduledSnapshotTimeList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   AssociatedClusterCount: Number("int"),
 * //   AssociatedClusters: [ // AssociatedClusterList
 * //     { // ClusterAssociatedToSchedule
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       ScheduleAssociationState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSnapshotScheduleCommandInput - {@link CreateSnapshotScheduleCommandInput}
 * @returns {@link CreateSnapshotScheduleCommandOutput}
 * @see {@link CreateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link ScheduleDefinitionTypeUnsupportedFault} (client fault)
 *  <p>The definition you submitted is not supported.</p>
 *
 * @throws {@link SnapshotScheduleAlreadyExistsFault} (client fault)
 *  <p>The specified snapshot schedule already exists. </p>
 *
 * @throws {@link SnapshotScheduleQuotaExceededFault} (client fault)
 *  <p>You have exceeded the quota of snapshot schedules. </p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class CreateSnapshotScheduleCommand extends $Command
  .classBuilder<
    CreateSnapshotScheduleCommandInput,
    CreateSnapshotScheduleCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "CreateSnapshotSchedule", {})
  .n("RedshiftClient", "CreateSnapshotScheduleCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotScheduleCommand)
  .de(de_CreateSnapshotScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotScheduleMessage;
      output: SnapshotSchedule;
    };
    sdk: {
      input: CreateSnapshotScheduleCommandInput;
      output: CreateSnapshotScheduleCommandOutput;
    };
  };
}
