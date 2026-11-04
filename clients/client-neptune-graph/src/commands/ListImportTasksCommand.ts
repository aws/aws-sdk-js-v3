// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImportTasksInput, ListImportTasksOutput } from "../models/models_0";
import { ListImportTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandInput extends ListImportTasksInput {}
/**
 * @public
 *
 * The output of {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandOutput extends ListImportTasksOutput, __MetadataBearer {}

/**
 * Lists import tasks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListImportTasksCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListImportTasksCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListImportTasksInput
 *   graphIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListImportTasksOutput
 * //   tasks: [ // ImportTaskSummaryList // required
 * //     { // ImportTaskSummary
 * //       graphId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 * //       parquetType: "COLUMNAR",
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportTasksCommandInput - {@link ListImportTasksCommandInput}
 * @returns {@link ListImportTasksCommandOutput}
 * @see {@link ListImportTasksCommandInput} for command's `input` shape.
 * @see {@link ListImportTasksCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class ListImportTasksCommand extends command<ListImportTasksCommandInput, ListImportTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListImportTasks",
  ListImportTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportTasksInput;
      output: ListImportTasksOutput;
    };
    sdk: {
      input: ListImportTasksCommandInput;
      output: ListImportTasksCommandOutput;
    };
  };
}
