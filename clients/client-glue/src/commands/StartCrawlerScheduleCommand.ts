// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/models_3";
import { de_StartCrawlerScheduleCommand, se_StartCrawlerScheduleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCrawlerScheduleCommand}.
 */
export interface StartCrawlerScheduleCommandInput extends StartCrawlerScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StartCrawlerScheduleCommand}.
 */
export interface StartCrawlerScheduleCommandOutput extends StartCrawlerScheduleResponse, __MetadataBearer {}

/**
 * <p>Changes the schedule state of the specified crawler to
 *       <code>SCHEDULED</code>, unless the crawler is already running or the
 *       schedule state is already <code>SCHEDULED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StartCrawlerScheduleRequest
 *   CrawlerName: "STRING_VALUE", // required
 * };
 * const command = new StartCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCrawlerScheduleCommandInput - {@link StartCrawlerScheduleCommandInput}
 * @returns {@link StartCrawlerScheduleCommandOutput}
 * @see {@link StartCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StartCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link NoScheduleException} (client fault)
 *  <p>There is no applicable schedule.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link SchedulerRunningException} (client fault)
 *  <p>The specified scheduler is already running.</p>
 *
 * @throws {@link SchedulerTransitioningException} (client fault)
 *  <p>The specified scheduler is transitioning.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartCrawlerScheduleCommand extends $Command
  .classBuilder<
    StartCrawlerScheduleCommandInput,
    StartCrawlerScheduleCommandOutput,
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
  .s("AWSGlue", "StartCrawlerSchedule", {})
  .n("GlueClient", "StartCrawlerScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StartCrawlerScheduleCommand)
  .de(de_StartCrawlerScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCrawlerScheduleRequest;
      output: {};
    };
    sdk: {
      input: StartCrawlerScheduleCommandInput;
      output: StartCrawlerScheduleCommandOutput;
    };
  };
}
