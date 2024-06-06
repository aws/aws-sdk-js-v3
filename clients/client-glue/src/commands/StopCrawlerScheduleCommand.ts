// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerScheduleRequest, StopCrawlerScheduleResponse } from "../models/models_2";
import { de_StopCrawlerScheduleCommand, se_StopCrawlerScheduleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCrawlerScheduleCommand}.
 */
export interface StopCrawlerScheduleCommandInput extends StopCrawlerScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StopCrawlerScheduleCommand}.
 */
export interface StopCrawlerScheduleCommandOutput extends StopCrawlerScheduleResponse, __MetadataBearer {}

/**
 * <p>Sets the schedule state of the specified crawler to
 *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
 *       already running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // StopCrawlerScheduleRequest
 *   CrawlerName: "STRING_VALUE", // required
 * };
 * const command = new StopCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCrawlerScheduleCommandInput - {@link StopCrawlerScheduleCommandInput}
 * @returns {@link StopCrawlerScheduleCommandOutput}
 * @see {@link StopCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link StopCrawlerScheduleCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link SchedulerNotRunningException} (client fault)
 *  <p>The specified scheduler is not running.</p>
 *
 * @throws {@link SchedulerTransitioningException} (client fault)
 *  <p>The specified scheduler is transitioning.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class StopCrawlerScheduleCommand extends $Command
  .classBuilder<
    StopCrawlerScheduleCommandInput,
    StopCrawlerScheduleCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StopCrawlerSchedule", {})
  .n("GlueClient", "StopCrawlerScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StopCrawlerScheduleCommand)
  .de(de_StopCrawlerScheduleCommand)
  .build() {}
