// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { StopColumnStatisticsTaskRunRequest, StopColumnStatisticsTaskRunResponse } from "../models/models_2";
import { StopColumnStatisticsTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopColumnStatisticsTaskRunCommand}.
 */
export interface StopColumnStatisticsTaskRunCommandInput extends StopColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StopColumnStatisticsTaskRunCommand}.
 */
export interface StopColumnStatisticsTaskRunCommandOutput
  extends StopColumnStatisticsTaskRunResponse,
    __MetadataBearer {}

/**
 * <p>Stops a task run for the specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopColumnStatisticsTaskRunRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new StopColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopColumnStatisticsTaskRunCommandInput - {@link StopColumnStatisticsTaskRunCommandInput}
 * @returns {@link StopColumnStatisticsTaskRunCommandOutput}
 * @see {@link StopColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StopColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ColumnStatisticsTaskNotRunningException} (client fault)
 *  <p>An exception thrown when you try to stop a task run when there is no task running.</p>
 *
 * @throws {@link ColumnStatisticsTaskStoppingException} (client fault)
 *  <p>An exception thrown when you try to stop a task run.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class StopColumnStatisticsTaskRunCommand extends $Command
  .classBuilder<
    StopColumnStatisticsTaskRunCommandInput,
    StopColumnStatisticsTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StopColumnStatisticsTaskRun", {})
  .n("GlueClient", "StopColumnStatisticsTaskRunCommand")
  .sc(StopColumnStatisticsTaskRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopColumnStatisticsTaskRunRequest;
      output: {};
    };
    sdk: {
      input: StopColumnStatisticsTaskRunCommandInput;
      output: StopColumnStatisticsTaskRunCommandOutput;
    };
  };
}
