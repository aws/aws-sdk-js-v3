// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StopColumnStatisticsTaskRunScheduleRequest,
  StopColumnStatisticsTaskRunScheduleResponse,
} from "../models/models_2";
import {
  de_StopColumnStatisticsTaskRunScheduleCommand,
  se_StopColumnStatisticsTaskRunScheduleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopColumnStatisticsTaskRunScheduleCommand}.
 */
export interface StopColumnStatisticsTaskRunScheduleCommandInput extends StopColumnStatisticsTaskRunScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StopColumnStatisticsTaskRunScheduleCommand}.
 */
export interface StopColumnStatisticsTaskRunScheduleCommandOutput
  extends StopColumnStatisticsTaskRunScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Stops a column statistics task run schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopColumnStatisticsTaskRunScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopColumnStatisticsTaskRunScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StopColumnStatisticsTaskRunScheduleRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new StopColumnStatisticsTaskRunScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopColumnStatisticsTaskRunScheduleCommandInput - {@link StopColumnStatisticsTaskRunScheduleCommandInput}
 * @returns {@link StopColumnStatisticsTaskRunScheduleCommandOutput}
 * @see {@link StopColumnStatisticsTaskRunScheduleCommandInput} for command's `input` shape.
 * @see {@link StopColumnStatisticsTaskRunScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class StopColumnStatisticsTaskRunScheduleCommand extends $Command
  .classBuilder<
    StopColumnStatisticsTaskRunScheduleCommandInput,
    StopColumnStatisticsTaskRunScheduleCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StopColumnStatisticsTaskRunSchedule", {})
  .n("GlueClient", "StopColumnStatisticsTaskRunScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StopColumnStatisticsTaskRunScheduleCommand)
  .de(de_StopColumnStatisticsTaskRunScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopColumnStatisticsTaskRunScheduleRequest;
      output: {};
    };
    sdk: {
      input: StopColumnStatisticsTaskRunScheduleCommandInput;
      output: StopColumnStatisticsTaskRunScheduleCommandOutput;
    };
  };
}
