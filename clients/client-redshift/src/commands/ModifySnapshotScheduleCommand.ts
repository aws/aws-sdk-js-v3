// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SnapshotSchedule } from "../models/models_0";
import { ModifySnapshotScheduleMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifySnapshotSchedule } from "../schemas/schemas_41_Snapshot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifySnapshotScheduleCommand}.
 */
export interface ModifySnapshotScheduleCommandInput extends ModifySnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotScheduleCommand}.
 */
export interface ModifySnapshotScheduleCommandOutput extends SnapshotSchedule, __MetadataBearer {}

/**
 * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 *             asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifySnapshotScheduleMessage
 *   ScheduleIdentifier: "STRING_VALUE", // required
 *   ScheduleDefinitions: [ // ScheduleDefinitionList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifySnapshotScheduleCommand(input);
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
 * @param ModifySnapshotScheduleCommandInput - {@link ModifySnapshotScheduleCommandInput}
 * @returns {@link ModifySnapshotScheduleCommandOutput}
 * @see {@link ModifySnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidScheduleFault} (client fault)
 *  <p>The schedule you submitted isn't valid.</p>
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *  <p>We could not find the specified snapshot schedule. </p>
 *
 * @throws {@link SnapshotScheduleUpdateInProgressFault} (client fault)
 *  <p>The specified snapshot schedule is already being updated.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifySnapshotScheduleCommand extends $Command
  .classBuilder<
    ModifySnapshotScheduleCommandInput,
    ModifySnapshotScheduleCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifySnapshotSchedule", {})
  .n("RedshiftClient", "ModifySnapshotScheduleCommand")
  .sc(ModifySnapshotSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySnapshotScheduleMessage;
      output: SnapshotSchedule;
    };
    sdk: {
      input: ModifySnapshotScheduleCommandInput;
      output: ModifySnapshotScheduleCommandOutput;
    };
  };
}
