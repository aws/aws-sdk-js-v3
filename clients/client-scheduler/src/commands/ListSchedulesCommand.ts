// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchedulesInput, ListSchedulesOutput } from "../models/models_0";
import { de_ListSchedulesCommand, se_ListSchedulesCommand } from "../protocols/Aws_restJson1";
import { SchedulerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchedulerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchedulesCommand}.
 */
export interface ListSchedulesCommandInput extends ListSchedulesInput {}
/**
 * @public
 *
 * The output of {@link ListSchedulesCommand}.
 */
export interface ListSchedulesCommandOutput extends ListSchedulesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of your EventBridge Scheduler schedules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, ListSchedulesCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, ListSchedulesCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // ListSchedulesInput
 *   GroupName: "STRING_VALUE",
 *   NamePrefix: "STRING_VALUE",
 *   State: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSchedulesOutput
 * //   NextToken: "STRING_VALUE",
 * //   Schedules: [ // ScheduleList // required
 * //     { // ScheduleSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastModificationDate: new Date("TIMESTAMP"),
 * //       Target: { // TargetSummary
 * //         Arn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSchedulesCommandInput - {@link ListSchedulesCommandInput}
 * @returns {@link ListSchedulesCommandOutput}
 * @see {@link ListSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulesCommandOutput} for command's `response` shape.
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
export class ListSchedulesCommand extends $Command
  .classBuilder<
    ListSchedulesCommandInput,
    ListSchedulesCommandOutput,
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
  .s("AWSChronosService", "ListSchedules", {})
  .n("SchedulerClient", "ListSchedulesCommand")
  .f(void 0, void 0)
  .ser(se_ListSchedulesCommand)
  .de(de_ListSchedulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchedulesInput;
      output: ListSchedulesOutput;
    };
    sdk: {
      input: ListSchedulesCommandInput;
      output: ListSchedulesCommandOutput;
    };
  };
}
