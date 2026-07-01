// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotebookExecutionsInput, ListNotebookExecutionsOutput } from "../models/models_0";
import { ListNotebookExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotebookExecutionsCommand}.
 */
export interface ListNotebookExecutionsCommandInput extends ListNotebookExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListNotebookExecutionsCommand}.
 */
export interface ListNotebookExecutionsCommandOutput extends ListNotebookExecutionsOutput, __MetadataBearer {}

/**
 * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
 *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
 *          executions and a marker to track the paging of a longer notebook execution list across
 *          multiple <code>ListNotebookExecutions</code> calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListNotebookExecutionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListNotebookExecutionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListNotebookExecutionsInput
 *   EditorId: "STRING_VALUE",
 *   Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 *   From: new Date("TIMESTAMP"),
 *   To: new Date("TIMESTAMP"),
 *   Marker: "STRING_VALUE",
 *   ExecutionEngineId: "STRING_VALUE",
 * };
 * const command = new ListNotebookExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookExecutionsOutput
 * //   NotebookExecutions: [ // NotebookExecutionSummaryList
 * //     { // NotebookExecutionSummary
 * //       NotebookExecutionId: "STRING_VALUE",
 * //       EditorId: "STRING_VALUE",
 * //       NotebookExecutionName: "STRING_VALUE",
 * //       Status: "START_PENDING" || "STARTING" || "RUNNING" || "FINISHING" || "FINISHED" || "FAILING" || "FAILED" || "STOP_PENDING" || "STOPPING" || "STOPPED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       NotebookS3Location: { // NotebookS3LocationForOutput
 * //         Bucket: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //       },
 * //       ExecutionEngineId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookExecutionsCommandInput - {@link ListNotebookExecutionsCommandInput}
 * @returns {@link ListNotebookExecutionsCommandOutput}
 * @see {@link ListNotebookExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookExecutionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListNotebookExecutionsCommand extends command<ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListNotebookExecutions",
  ListNotebookExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookExecutionsInput;
      output: ListNotebookExecutionsOutput;
    };
    sdk: {
      input: ListNotebookExecutionsCommandInput;
      output: ListNotebookExecutionsCommandOutput;
    };
  };
}
