// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopColumnStatisticsTaskRunScheduleRequest,
  StopColumnStatisticsTaskRunScheduleResponse,
} from "../models/models_3";
import { StopColumnStatisticsTaskRunSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StopColumnStatisticsTaskRunScheduleCommandOutput extends StopColumnStatisticsTaskRunScheduleResponse, __MetadataBearer {}

/**
 * Stops a column statistics task run schedule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopColumnStatisticsTaskRunScheduleCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopColumnStatisticsTaskRunScheduleCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopColumnStatisticsTaskRunScheduleRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   CatalogID: "STRING_VALUE",
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
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StopColumnStatisticsTaskRunScheduleCommand extends command<StopColumnStatisticsTaskRunScheduleCommandInput, StopColumnStatisticsTaskRunScheduleCommandOutput>(
  _ep0,
  _mw0,
  "StopColumnStatisticsTaskRunSchedule",
  StopColumnStatisticsTaskRunSchedule$
) {
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
