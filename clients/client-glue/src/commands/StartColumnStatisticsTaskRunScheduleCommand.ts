// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  StartColumnStatisticsTaskRunScheduleRequest,
  StartColumnStatisticsTaskRunScheduleResponse,
} from "../models/models_3";
import { StartColumnStatisticsTaskRunSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartColumnStatisticsTaskRunScheduleCommand}.
 */
export interface StartColumnStatisticsTaskRunScheduleCommandInput extends StartColumnStatisticsTaskRunScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StartColumnStatisticsTaskRunScheduleCommand}.
 */
export interface StartColumnStatisticsTaskRunScheduleCommandOutput
  extends StartColumnStatisticsTaskRunScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Starts a column statistics task run schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartColumnStatisticsTaskRunScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartColumnStatisticsTaskRunScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartColumnStatisticsTaskRunScheduleRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new StartColumnStatisticsTaskRunScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartColumnStatisticsTaskRunScheduleCommandInput - {@link StartColumnStatisticsTaskRunScheduleCommandInput}
 * @returns {@link StartColumnStatisticsTaskRunScheduleCommandOutput}
 * @see {@link StartColumnStatisticsTaskRunScheduleCommandInput} for command's `input` shape.
 * @see {@link StartColumnStatisticsTaskRunScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 *
 * @public
 */
export class StartColumnStatisticsTaskRunScheduleCommand extends $Command
  .classBuilder<
    StartColumnStatisticsTaskRunScheduleCommandInput,
    StartColumnStatisticsTaskRunScheduleCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartColumnStatisticsTaskRunSchedule", {})
  .n("GlueClient", "StartColumnStatisticsTaskRunScheduleCommand")
  .sc(StartColumnStatisticsTaskRunSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartColumnStatisticsTaskRunScheduleRequest;
      output: {};
    };
    sdk: {
      input: StartColumnStatisticsTaskRunScheduleCommandInput;
      output: StartColumnStatisticsTaskRunScheduleCommandOutput;
    };
  };
}
