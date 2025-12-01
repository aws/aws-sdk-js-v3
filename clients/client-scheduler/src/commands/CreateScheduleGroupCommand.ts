// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateScheduleGroupInput, CreateScheduleGroupOutput } from "../models/models_0";
import type { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";
import { CreateScheduleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduleGroupCommand}.
 */
export interface CreateScheduleGroupCommandInput extends CreateScheduleGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateScheduleGroupCommand}.
 */
export interface CreateScheduleGroupCommandOutput extends CreateScheduleGroupOutput, __MetadataBearer {}

/**
 * <p>Creates the specified schedule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, CreateScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, CreateScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // CreateScheduleGroupInput
 *   Name: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateScheduleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduleGroupOutput
 * //   ScheduleGroupArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateScheduleGroupCommandInput - {@link CreateScheduleGroupCommandInput}
 * @returns {@link CreateScheduleGroupCommandOutput}
 * @see {@link CreateScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error encountered while processing the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class CreateScheduleGroupCommand extends $Command
  .classBuilder<
    CreateScheduleGroupCommandInput,
    CreateScheduleGroupCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSChronosService", "CreateScheduleGroup", {})
  .n("SchedulerClient", "CreateScheduleGroupCommand")
  .sc(CreateScheduleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduleGroupInput;
      output: CreateScheduleGroupOutput;
    };
    sdk: {
      input: CreateScheduleGroupCommandInput;
      output: CreateScheduleGroupCommandOutput;
    };
  };
}
