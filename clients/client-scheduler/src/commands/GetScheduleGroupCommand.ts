// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetScheduleGroupInput, GetScheduleGroupOutput } from "../models/models_0";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";
import { GetScheduleGroup } from "../schemas/schemas_1_Schedule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScheduleGroupCommand}.
 */
export interface GetScheduleGroupCommandInput extends GetScheduleGroupInput {}
/**
 * @public
 *
 * The output of {@link GetScheduleGroupCommand}.
 */
export interface GetScheduleGroupCommandOutput extends GetScheduleGroupOutput, __MetadataBearer {}

/**
 * <p>Retrieves the specified schedule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, GetScheduleGroupCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, GetScheduleGroupCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // GetScheduleGroupInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetScheduleGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetScheduleGroupOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModificationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetScheduleGroupCommandInput - {@link GetScheduleGroupCommandInput}
 * @returns {@link GetScheduleGroupCommandOutput}
 * @see {@link GetScheduleGroupCommandInput} for command's `input` shape.
 * @see {@link GetScheduleGroupCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
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
export class GetScheduleGroupCommand extends $Command
  .classBuilder<
    GetScheduleGroupCommandInput,
    GetScheduleGroupCommandOutput,
    SchedulerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchedulerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSChronosService", "GetScheduleGroup", {})
  .n("SchedulerClient", "GetScheduleGroupCommand")
  .sc(GetScheduleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScheduleGroupInput;
      output: GetScheduleGroupOutput;
    };
    sdk: {
      input: GetScheduleGroupCommandInput;
      output: GetScheduleGroupCommandOutput;
    };
  };
}
