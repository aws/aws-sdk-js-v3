// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScheduleInput, DeleteScheduleOutput } from "../models/models_0";
import { de_DeleteScheduleCommand, se_DeleteScheduleCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified schedule.</p>
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
 *
 * @public
 */
export class DeleteScheduleCommand extends $Command
  .classBuilder<
    DeleteScheduleCommandInput,
    DeleteScheduleCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSChronosService", "DeleteSchedule", {})
  .n("SchedulerClient", "DeleteScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScheduleCommand)
  .de(de_DeleteScheduleCommand)
  .build() {
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
