// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/models_2";
import { UpdateCrawlerSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCrawlerScheduleCommand}.
 */
export interface UpdateCrawlerScheduleCommandInput extends UpdateCrawlerScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrawlerScheduleCommand}.
 */
export interface UpdateCrawlerScheduleCommandOutput extends UpdateCrawlerScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates the schedule of a crawler using a <code>cron</code> expression. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateCrawlerScheduleRequest
 *   CrawlerName: "STRING_VALUE", // required
 *   Schedule: "STRING_VALUE",
 * };
 * const command = new UpdateCrawlerScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCrawlerScheduleCommandInput - {@link UpdateCrawlerScheduleCommandInput}
 * @returns {@link UpdateCrawlerScheduleCommandOutput}
 * @see {@link UpdateCrawlerScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerScheduleCommandOutput} for command's `response` shape.
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
 * @throws {@link SchedulerTransitioningException} (client fault)
 *  <p>The specified scheduler is transitioning.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>There was a version conflict.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateCrawlerScheduleCommand extends $Command
  .classBuilder<
    UpdateCrawlerScheduleCommandInput,
    UpdateCrawlerScheduleCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateCrawlerSchedule", {})
  .n("GlueClient", "UpdateCrawlerScheduleCommand")
  .sc(UpdateCrawlerSchedule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCrawlerScheduleRequest;
      output: {};
    };
    sdk: {
      input: UpdateCrawlerScheduleCommandInput;
      output: UpdateCrawlerScheduleCommandOutput;
    };
  };
}
