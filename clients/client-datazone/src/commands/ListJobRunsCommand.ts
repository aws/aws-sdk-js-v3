// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobRunsInput, ListJobRunsOutput } from "../models/models_1";
import { ListJobRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsInput {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsOutput, __MetadataBearer {}

/**
 * Lists job runs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListJobRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListJobRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListJobRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   jobIdentifier: "STRING_VALUE", // required
 *   status: "SCHEDULED" || "IN_PROGRESS" || "SUCCESS" || "PARTIALLY_SUCCEEDED" || "FAILED" || "ABORTED" || "TIMED_OUT" || "CANCELED",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsOutput
 * //   items: [ // JobRunSummaries
 * //     { // JobRunSummary
 * //       domainId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //       jobType: "LINEAGE",
 * //       runId: "STRING_VALUE",
 * //       runMode: "SCHEDULED" || "ON_DEMAND",
 * //       status: "SCHEDULED" || "IN_PROGRESS" || "SUCCESS" || "PARTIALLY_SUCCEEDED" || "FAILED" || "ABORTED" || "TIMED_OUT" || "CANCELED",
 * //       error: { // JobRunError
 * //         message: "STRING_VALUE", // required
 * //       },
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class ListJobRunsCommand extends command<ListJobRunsCommandInput, ListJobRunsCommandOutput>(
  _ep0,
  _mw0,
  "ListJobRuns",
  ListJobRuns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunsInput;
      output: ListJobRunsOutput;
    };
    sdk: {
      input: ListJobRunsCommandInput;
      output: ListJobRunsCommandOutput;
    };
  };
}
