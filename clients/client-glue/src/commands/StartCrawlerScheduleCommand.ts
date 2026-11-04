// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/models_3";
import { StartCrawlerSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Changes the schedule state of the specified crawler to `SCHEDULED`, unless the crawler is already running or the schedule state is already `SCHEDULED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartCrawlerScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartCrawlerScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * A specified entity does not exist
 *
 * @throws {@link NoScheduleException} (client fault)
 *
 * There is no applicable schedule.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link SchedulerRunningException} (client fault)
 *
 * The specified scheduler is already running.
 *
 * @throws {@link SchedulerTransitioningException} (client fault)
 *
 * The specified scheduler is transitioning.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StartCrawlerScheduleCommand extends command<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput>(
  _ep0,
  _mw0,
  "StartCrawlerSchedule",
  StartCrawlerSchedule$
) {
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
