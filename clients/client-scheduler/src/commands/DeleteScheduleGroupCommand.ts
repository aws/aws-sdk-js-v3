// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduleGroupInput, DeleteScheduleGroupOutput } from "../models/models_0";
import { DeleteScheduleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a `DELETING` state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.
 *
 * > **Note:** This operation is eventually consistent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, DeleteScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, DeleteScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
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
 *
 * Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error encountered while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link SchedulerServiceException}
 *
 * Base exception class for all service exceptions from Scheduler service.
 *
 * @public
 */
export class DeleteScheduleGroupCommand extends command<DeleteScheduleGroupCommandInput, DeleteScheduleGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduleGroup",
  DeleteScheduleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduleGroupInput;
      output: {};
    };
    sdk: {
      input: DeleteScheduleGroupCommandInput;
      output: DeleteScheduleGroupCommandOutput;
    };
  };
}
