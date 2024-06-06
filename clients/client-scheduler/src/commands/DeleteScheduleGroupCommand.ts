// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScheduleGroupInput, DeleteScheduleGroupOutput } from "../models/models_0";
import { de_DeleteScheduleGroupCommand, se_DeleteScheduleGroupCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScheduleGroupCommand}.
 */
export interface DeleteScheduleGroupCommandInput extends DeleteScheduleGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteScheduleGroupCommand}.
 */
export interface DeleteScheduleGroupCommandOutput extends DeleteScheduleGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group.
 *          When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted.
 *          Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets
 *          until the schedule group and its associated schedules are deleted.</p>
 *          <note>
 *             <p>
 *             This operation is eventually consistent.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, DeleteScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, DeleteScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * const client = new SchedulerClient(config);
 * const input = { // DeleteScheduleGroupInput
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteScheduleGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduleGroupCommandInput - {@link DeleteScheduleGroupCommandInput}
 * @returns {@link DeleteScheduleGroupCommandOutput}
 * @see {@link DeleteScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error encountered while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SchedulerServiceException}
 * <p>Base exception class for all service exceptions from Scheduler service.</p>
 *
 * @public
 */
export class DeleteScheduleGroupCommand extends $Command
  .classBuilder<
    DeleteScheduleGroupCommandInput,
    DeleteScheduleGroupCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSChronosService", "DeleteScheduleGroup", {})
  .n("SchedulerClient", "DeleteScheduleGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScheduleGroupCommand)
  .de(de_DeleteScheduleGroupCommand)
  .build() {}
