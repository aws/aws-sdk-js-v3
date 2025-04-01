// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSnapshotScheduleMessage } from "../models/models_0";
import { de_DeleteSnapshotScheduleCommand, se_DeleteSnapshotScheduleCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotScheduleCommand}.
 */
export interface DeleteSnapshotScheduleCommandInput extends DeleteSnapshotScheduleMessage {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotScheduleCommand}.
 */
export interface DeleteSnapshotScheduleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a snapshot schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeleteSnapshotScheduleMessage
 *   ScheduleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSnapshotScheduleCommandInput - {@link DeleteSnapshotScheduleCommandInput}
 * @returns {@link DeleteSnapshotScheduleCommandOutput}
 * @see {@link DeleteSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
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
 *
 * @public
 */
export class DeleteSnapshotScheduleCommand extends $Command
  .classBuilder<
    DeleteSnapshotScheduleCommandInput,
    DeleteSnapshotScheduleCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DeleteSnapshotSchedule", {})
  .n("RedshiftClient", "DeleteSnapshotScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSnapshotScheduleCommand)
  .de(de_DeleteSnapshotScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotScheduleMessage;
      output: {};
    };
    sdk: {
      input: DeleteSnapshotScheduleCommandInput;
      output: DeleteSnapshotScheduleCommandOutput;
    };
  };
}
