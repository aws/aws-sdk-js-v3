// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartColumnStatisticsTaskRunRequest, StartColumnStatisticsTaskRunResponse } from "../models/models_3";
import { StartColumnStatisticsTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandInput extends StartColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandOutput extends StartColumnStatisticsTaskRunResponse, __MetadataBearer {}

/**
 * Starts a column statistics task run, for a specified table and columns.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartColumnStatisticsTaskRunRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnNameList: [ // ColumnNameList
 *     "STRING_VALUE",
 *   ],
 *   Role: "STRING_VALUE", // required
 *   SampleSize: Number("double"),
 *   CatalogID: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 * };
 * const command = new StartColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartColumnStatisticsTaskRunResponse
 * //   ColumnStatisticsTaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartColumnStatisticsTaskRunCommandInput - {@link StartColumnStatisticsTaskRunCommandInput}
 * @returns {@link StartColumnStatisticsTaskRunCommandOutput}
 * @see {@link StartColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ColumnStatisticsTaskRunningException} (client fault)
 *
 * An exception thrown when you try to start another job while running a column stats generation job.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StartColumnStatisticsTaskRunCommand extends command<StartColumnStatisticsTaskRunCommandInput, StartColumnStatisticsTaskRunCommandOutput>(
  _ep0,
  _mw0,
  "StartColumnStatisticsTaskRun",
  StartColumnStatisticsTaskRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartColumnStatisticsTaskRunRequest;
      output: StartColumnStatisticsTaskRunResponse;
    };
    sdk: {
      input: StartColumnStatisticsTaskRunCommandInput;
      output: StartColumnStatisticsTaskRunCommandOutput;
    };
  };
}
