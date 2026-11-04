// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/models_3";
import { UpdateCrawlerSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the schedule of a crawler using a `cron` expression.
 *
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
 *
 * A specified entity does not exist
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link SchedulerTransitioningException} (client fault)
 *
 * The specified scheduler is transitioning.
 *
 * @throws {@link VersionMismatchException} (client fault)
 *
 * There was a version conflict.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateCrawlerScheduleCommand extends command<UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCrawlerSchedule",
  UpdateCrawlerSchedule$
) {
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
