// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/models_3";
import { de_UpdateCrawlerScheduleCommand, se_UpdateCrawlerScheduleCommand } from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateCrawlerSchedule", {})
  .n("GlueClient", "UpdateCrawlerScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCrawlerScheduleCommand)
  .de(de_UpdateCrawlerScheduleCommand)
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
