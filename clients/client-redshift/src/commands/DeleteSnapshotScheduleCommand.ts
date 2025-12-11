// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSnapshotScheduleMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotSchedule } from "../schemas/schemas_0";

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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteSnapshotSchedule", {})
  .n("RedshiftClient", "DeleteSnapshotScheduleCommand")
  .sc(DeleteSnapshotSchedule)
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
