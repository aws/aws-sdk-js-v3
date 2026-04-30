// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListNotebookRunsInput, ListNotebookRunsOutput } from "../models/models_1";
import { ListNotebookRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNotebookRunsCommand}.
 */
export interface ListNotebookRunsCommandInput extends ListNotebookRunsInput {}
/**
 * @public
 *
 * The output of {@link ListNotebookRunsCommand}.
 */
export interface ListNotebookRunsCommandOutput extends ListNotebookRunsOutput, __MetadataBearer {}

/**
 * <p>Lists notebook runs in an Amazon DataZone domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListNotebookRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListNotebookRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListNotebookRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE", // required
 *   notebookIdentifier: "STRING_VALUE",
 *   status: "QUEUED" || "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED",
 *   scheduleIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotebookRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookRunsOutput
 * //   items: [ // NotebookRunSummaryList
 * //     { // NotebookRunSummary
 * //       id: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       owningProjectId: "STRING_VALUE", // required
 * //       notebookId: "STRING_VALUE", // required
 * //       scheduleId: "STRING_VALUE",
 * //       status: "QUEUED" || "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED", // required
 * //       triggerSource: { // TriggerSource
 * //         type: "MANUAL" || "SCHEDULED" || "WORKFLOW",
 * //         name: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       startedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookRunsCommandInput - {@link ListNotebookRunsCommandInput}
 * @returns {@link ListNotebookRunsCommandOutput}
 * @see {@link ListNotebookRunsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookRunsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListNotebookRunsCommand extends $Command
  .classBuilder<
    ListNotebookRunsCommandInput,
    ListNotebookRunsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListNotebookRuns", {})
  .n("DataZoneClient", "ListNotebookRunsCommand")
  .sc(ListNotebookRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotebookRunsInput;
      output: ListNotebookRunsOutput;
    };
    sdk: {
      input: ListNotebookRunsCommandInput;
      output: ListNotebookRunsCommandOutput;
    };
  };
}
