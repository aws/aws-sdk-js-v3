// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExportTasksInput, ListExportTasksOutput } from "../models/models_0";
import { ListExportTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExportTasksCommand}.
 */
export interface ListExportTasksCommandInput extends ListExportTasksInput {}
/**
 * @public
 *
 * The output of {@link ListExportTasksCommand}.
 */
export interface ListExportTasksCommandOutput extends ListExportTasksOutput, __MetadataBearer {}

/**
 * Retrieves a list of export tasks.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListExportTasksCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListExportTasksCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListExportTasksInput
 *   graphIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListExportTasksOutput
 * //   tasks: [ // ExportTaskSummaryList // required
 * //     { // ExportTaskSummary
 * //       graphId: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "EXPORTING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //       format: "PARQUET" || "CSV", // required
 * //       destination: "STRING_VALUE", // required
 * //       kmsKeyIdentifier: "STRING_VALUE", // required
 * //       parquetType: "COLUMNAR",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportTasksCommandInput - {@link ListExportTasksCommandInput}
 * @returns {@link ListExportTasksCommandOutput}
 * @see {@link ListExportTasksCommandInput} for command's `input` shape.
 * @see {@link ListExportTasksCommandOutput} for command's `response` shape.
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
export class ListExportTasksCommand extends command<ListExportTasksCommandInput, ListExportTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListExportTasks",
  ListExportTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportTasksInput;
      output: ListExportTasksOutput;
    };
    sdk: {
      input: ListExportTasksCommandInput;
      output: ListExportTasksCommandOutput;
    };
  };
}
