// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduleInput, DeleteScheduleOutput } from "../models/models_0";
import { DeleteSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScheduleCommand}.
 */
export interface DeleteScheduleCommandInput extends DeleteScheduleInput {}
/**
 * @public
 *
 * The output of {@link DeleteScheduleCommand}.
 */
export interface DeleteScheduleCommandOutput extends DeleteScheduleOutput, __MetadataBearer {}

/**
 * Deletes the specified schedule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, DeleteScheduleCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, DeleteScheduleCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // DeleteScheduleInput
 *   Name: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduleCommandInput - {@link DeleteScheduleCommandInput}
 * @returns {@link DeleteScheduleCommandOutput}
 * @see {@link DeleteScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleCommandOutput} for command's `response` shape.
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
export class DeleteScheduleCommand extends command<DeleteScheduleCommandInput, DeleteScheduleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSchedule",
  DeleteSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduleInput;
      output: {};
    };
    sdk: {
      input: DeleteScheduleCommandInput;
      output: DeleteScheduleCommandOutput;
    };
  };
}
