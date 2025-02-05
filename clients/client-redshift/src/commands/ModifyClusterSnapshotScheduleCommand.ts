// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyClusterSnapshotScheduleMessage } from "../models/models_1";
import {
  de_ModifyClusterSnapshotScheduleCommand,
  se_ModifyClusterSnapshotScheduleCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterSnapshotScheduleCommand}.
 */
export interface ModifyClusterSnapshotScheduleCommandInput extends ModifyClusterSnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterSnapshotScheduleCommand}.
 */
export interface ModifyClusterSnapshotScheduleCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies a snapshot schedule for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterSnapshotScheduleMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   ScheduleIdentifier: "STRING_VALUE",
 *   DisassociateSchedule: true || false,
 * };
 * const command = new ModifyClusterSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyClusterSnapshotScheduleCommandInput - {@link ModifyClusterSnapshotScheduleCommandInput}
 * @returns {@link ModifyClusterSnapshotScheduleCommandOutput}
 * @see {@link ModifyClusterSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterSnapshotScheduleStateFault} (client fault)
 *  <p>The cluster snapshot schedule state is not valid.</p>
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *  <p>We could not find the specified snapshot schedule. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class ModifyClusterSnapshotScheduleCommand extends $Command
  .classBuilder<
    ModifyClusterSnapshotScheduleCommandInput,
    ModifyClusterSnapshotScheduleCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "ModifyClusterSnapshotSchedule", {})
  .n("RedshiftClient", "ModifyClusterSnapshotScheduleCommand")
  .f(void 0, void 0)
  .ser(se_ModifyClusterSnapshotScheduleCommand)
  .de(de_ModifyClusterSnapshotScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterSnapshotScheduleMessage;
      output: {};
    };
    sdk: {
      input: ModifyClusterSnapshotScheduleCommandInput;
      output: ModifyClusterSnapshotScheduleCommandOutput;
    };
  };
}
